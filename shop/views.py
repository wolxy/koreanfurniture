from django.shortcuts import render, redirect
from django.views.generic import ListView, DetailView, DeleteView
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
from django.shortcuts import get_object_or_404
from shop.forms import AddQuantityForm
from shop.models import Order, Сategory, Product, OrderItem
from django.utils.decorators import method_decorator



class ProductsListView(ListView):
    model = Product
    template_name = 'shop/shop.html'
    

class ProductsDetailView(DetailView):
    model = Product
    template_name = 'shop/card.html'
    



def get_value(request, value):
    return render(request, 'shop/shop.html')   

def category_filter(request, category_id):
    category = Сategory.objects.get(id=category_id)
    object_list = category.product_set.all()
    name_category = category.name
    print(name_category)
    return render(request, 'shop/shop.html', {'object_list': object_list, 'name_category': name_category})


@login_required(login_url=reverse_lazy('login'))
def add_item_to_cart(request, pk):
    if request.method == 'POST':
        quantity_form = AddQuantityForm(request.POST)
        if quantity_form.is_valid():
            quantity = quantity_form.cleaned_data['quantity']
            if quantity:
                cart = Order.get_cart(request.user)
                # product = Product.objects.get(pk=pk)
                product = get_object_or_404(Product, pk=pk)
                cart.orderitem_set.create(product=product,
                                          quantity=quantity,
                                          price=product.price)
                cart.save()
                return redirect('cart_view')
        else:
            pass
    return redirect('shop')


@login_required(login_url=reverse_lazy('login'))
def cart_view(request):
    cart = Order.get_cart(request.user)
    items = cart.orderitem_set.all()
    context = {
        'cart': cart,
        'items': items,
    }
    return render(request, 'shop/basket.html', context)

@method_decorator(login_required, name='dispatch')
class CartDeleteItem(DeleteView):
    model = OrderItem
    template_name = 'shop/cart.html'
    success_url = reverse_lazy('cart_view')

    # Проверка доступа
    def get_queryset(self):
        qs = super().get_queryset()
        qs.filter(order__user=self.request.user)
        return qs