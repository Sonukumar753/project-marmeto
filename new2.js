function updateSubtotal(input) {
    const price = 250000; // price of sofa
    const quantity = input.value;
    const subtotal = price * quantity;

    document.querySelector('.subtotal').innerText = `Rs. ${subtotal.toLocaleString()}.00`;
    document.getElementById('subtotal').innerText = `Rs. ${subtotal.toLocaleString()}.00`;
    document.getElementById('total').innerText = `Rs. ${subtotal.toLocaleString()}.00`;
}