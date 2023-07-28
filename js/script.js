var allproducts = document.querySelectorAll("h5")
var contentitems = document.querySelector(".content-items")
var btntotal = document.querySelector("#btn-total")
var totalnum = document.querySelector("#total-num")
var totalprice = 0

allproducts.forEach(function(item){
    item.onclick = function (){
       contentitems.innerHTML += item.textContent + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " + item.getAttribute("price") + "&nbsp" +"EGP"+ "<br>"
       totalprice  +=   +(item.getAttribute("price"))
       if (contentitems.innerHTML != "" ){
        btntotal.style.display = "block";
        totalnum.style.display = "block";
        contentitems.style.display = "block"
        }
    }
})
btntotal.onclick = function () {
    totalnum.innerHTML = totalprice + "&nbsp &nbsp" + "EGP"
}