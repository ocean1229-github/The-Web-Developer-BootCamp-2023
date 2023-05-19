// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

const GroceryList = document.querySelector('#list')

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    
    addtext(productInput, qtyInput)
    productInput.value = '';
    qtyInput.value = '';
})

const addtext = (product, qty) =>{
    const newList = document.createElement('li');
    newList.append('${product}')
    newList.append('${qty}')
    form.append(newList)
}