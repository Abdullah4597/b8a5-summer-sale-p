

let totalPrice = 0;

function card(target) {

    const itemName = target.childNodes[3].childNodes[3].innerText;
    const itemPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];


    const itemAddListDiv = document.getElementById('item-list-div');
    const h4 = document.createElement('h4');
    h4.classList.add('my-2')
    h4.style.fontSize = "large";
    h4.style.fontWeight = "600";
    h4.style.color = "black";
    const count = itemAddListDiv.childElementCount;
    h4.innerHTML = `${count + 1}. ${itemName}`
    itemAddListDiv.appendChild(h4);

    totalPrice = parseFloat(totalPrice) + parseFloat(itemPrice);
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    document.getElementById('total-p').innerText = totalPrice.toFixed(2);


    // enable make purchase button 
    if (totalPrice > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');
    }

    // enable cupon apply button 
    if (totalPrice >= 200) {
        document.getElementById('apply-btn').removeAttribute('disabled');
    }

}

//coupon apply button function 
function couponCodeBtn() {
    const inputCoupon = document.getElementById('cupon-code');
    const inputCouponValue = inputCoupon.value;

    if (inputCouponValue == '') {
        alert('Please Input Coupon Code.');
    }

    if (inputCouponValue == 'SELL200') {
        inputCoupon.value = '';

        const discount =  totalPrice * (20/100);
        document.getElementById('discount').innerText = discount.toFixed(2);

        const grandTotal = totalPrice - discount;
        console.log(grandTotal);
        document.getElementById('total-p').innerText = grandTotal.toFixed(2);
        
    } else {
        alert('Wrong Coupon Code.')
    }

}

function modalBtn(){
    window.location.reload();
 
}



