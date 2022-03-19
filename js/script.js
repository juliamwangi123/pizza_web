`use sctrict`;

let add= document.getElementById("add");
let remove = document.getElementById("delete")
let increase = document.getElementById("num")
let count= 0;


//user logic
//add button on cart

add.addEventListener("click", (e)=>{
 count++
increase.innerText = count

})
//remove button cartt
remove.addEventListener("click", (e)=>{
    count--
    
    increase.innerText = count< 0 ? 0: count;

})


//business logi

function Order(size, crust, toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
};
 Order.prototype.totals= function(price1, price2){
     return price1 + price2;
 }


    let order  = new Order("small")
console.log(order.size)
    console.log(order.totals(200,400));


    

