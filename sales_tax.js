
var $ = function(id) {
    return document.getElementById(id); 
};
var processEntries = function(){
    subtotal.focus();
    var subTotal = $("subtotal").value;
    var taxRate = $("tax_rate").value;
    if(isNaN(subTotal)){
        alert(" Subtotal entry should be a number ");
    }
    else if(subTotal<=0 || subTotal >10000){
        alert("Subtotal must be > 0 and < 10000");
    }
    else if(isNaN(taxRate)){
        alert("Tax rate entry should be a number");
    }
    else if(taxRate <= 0 || taxRate >12) {
         alert("Tax Rate must be > 0 and < 12");
    }
    
    else {
     var sales_tax = (subTotal * (taxRate / 100)).toFixed(2);
     $("sales_tax").value = sales_tax;
     subTotal = parseFloat(subTotal);
     var total = subTotal + parseFloat(sales_tax);
     $("total").value = total.toFixed(2);
    }
};

var clear = function() {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
}

var clearSubTotal = function(){
    $("subtotal").value = "";
}
var clearTaxRate = function(){
    $("tax_rate").value = "";
}
window.onload = function(){
    subtotal.focus();
  $("subtotal").onclick = clearSubTotal;
  $("tax_rate").onclick = clearTaxRate;
    $("calculate").onclick = processEntries;
    $("clear").onclick = clear;
}


