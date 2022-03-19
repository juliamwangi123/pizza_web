`use scrict`;
//business logic

//constractor 

function Order(pizzaPrice, toppingsPrice , crustPrice){
    this.pizzaPrice = pizzaPrice;
    this.toppingsPrice =toppingsPrice;
    this.crustPrice = crustPrice
}


// odering method attached to prototype

Order.prototype.total = function(){
    return `${this.pizzaPrice + this.toppingsPrice + this.crustPrice}`
};


//user logic

let btn = document.getElementById("order");

btn.addEventListener("click", (e)=>{
    e.preventDefault()
})

 function requestOrder(){
     let piza = document.getElementById("pizzaPrice");
     let toppings = document.getElementById("toppings");
     let crust = document.getElementById("crust");
//getting the value of selected item
     let optionSel =piza.options[piza.selectedIndex];
     let optionSe2 = toppings.options[toppings.selectedIndex];
     let optionSel3 = crust.options[crust.selectedIndex];

//getting the text of the selected item
    let pizzaText = optionSel.text
    let toppingsText = optionSel2.text
    let crustText =    optionSel3.text

//create a new odering object from the oder constructor

let newOrder = new Order()




 }