function calculateTotal() {
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;

    if(quantity && price){
        document.getElementById("total").value = quantity * price;
    }
}