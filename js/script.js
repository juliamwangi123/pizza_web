`use scrict`;
//business logic

//constractor 
let count =0+1;

function Order(pizzaPrice, toppingsPrice , crustPrice){
    this.pizzaPrice = pizzaPrice;
    this.toppingsPrice =toppingsPrice;
    this.crustPrice = crustPrice
}


// odering method attached to prototype

Order.prototype.total = function(){
    return `${this.pizzaPrice + this.toppingsPrice + this.crustPrice}`
};



 let smallbtn = document.querySelector(".btn1");
 

 smallbtn.addEventListener("click", (e)=>{
     e.preventDefault();
     let num=  document.getElementById("num")
     num.innerText=Number( count++ )
     console.log(count);


     //re-intizilizing  html select option
     let toppings = document.getElementById("toppings");
     let crust = document.getElementById("crust");
     let bill = document.getElementById("totalBill");
 
   
     //getting  the value of selected toppings 
     let optionSe =toppings.options[toppings.selectedIndex];
     let optionSe2 =Number(optionSe.value)
     let optionSelect =crust.options[crust.selectedIndex];
     let optionSel3 = Number(optionSelect.value)
 
     
 
 //getting thetext of  selected crust and toppings
     let toppingsText = optionSe.text
     let crustText =    optionSelect.text
 
 
     let newOrder = new Order(800,optionSe2, optionSel3);
 
     bill.innerHTML +=`Small size pizza  with ${toppingsText} topping and ${crustText} crust  @ ${newOrder.total()}</br>`;
 
     
     
 });


 let mediumBtn = document.querySelector(".medium");
 let mediumCount =0;
 mediumCount++
 mediumBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let num=  document.getElementById("num")
    num.innerText=Number( count++)

// re-intizilizing  html select option
    let toppings = document.getElementById("toppings");
    let crust = document.getElementById("crust");
    let bill = document.getElementById("mediumBill");

  
    //getting  the value of selected toppings 
    let optionSe =toppings.options[toppings.selectedIndex];
    let optionSe2 =Number(optionSe.value)
    let optionSelect =crust.options[crust.selectedIndex];
    let optionSel3 = Number(optionSelect.value)

    

//getting thetext of  selected crust and toppings
    let toppingsText = optionSe.text
    let crustText =    optionSelect.text


    let newOrder = new Order(800,optionSe2, optionSel3);
    let total = `${mediumCount * newOrder.total()}`

    bill.innerHTML +=`medium size pizza  with ${toppingsText} topping and ${crustText} crust  @ ${newOrder.total()}</br>`;

    
    
});

let largeBtn =document.querySelector(".large");
let largeCount =0;
largeCount++
largeBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    e.preventDefault();
    let num=  document.getElementById("num")
    num.innerText=Number( count++)
    // console.log(count);


    let toppings = document.getElementById("toppings");
    let crust = document.getElementById("crust");
    let bill = document.getElementById("largeBill");

  

   //  let optionSel =Number(piza.options[piza.selectedIndex].value);
    let optionSe =toppings.options[toppings.selectedIndex];
    let optionSe2 =Number(optionSe.value)
    let optionSelect =crust.options[crust.selectedIndex];
    let optionSel3 = Number(optionSelect.value)

    


    let toppingsText = optionSe.text
    let crustText =    optionSelect.text


    let newOrder = new Order(1000,optionSe2, optionSel3);
    // let total = `${largeCount * newOrder.total()}`
    bill.innerHTML +=`large size pizza with ${toppingsText} topping and ${crustText} crust  @ ${newOrder.total()}</br>`;
} )
 