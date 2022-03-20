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


//user logic

let btn = document.getElementById("order");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    requestOrder()
})


//order functions
//  function requestOrder(){
//      let piza = document.getElementById("pizzaPrice");
//      let toppings = document.getElementById("toppings");
//      let crust = document.getElementById("crust");
//      let bill = document.getElementById("totalBill");
// //getting the value of selected item
//      let optionSel =Number(piza.options[piza.selectedIndex].value);
//      let optionSe2 = Number(toppings.options[toppings.selectedIndex].value);
//      let optionSel3 =Number(crust.options[crust.selectedIndex].value);

// //getting the text of the selected item
//     let pizzaText = optionSel.text
//     let toppingsText = optionSe2.text
//     let crustText =    optionSel3.text

// //create a new odering object from the oder constructor

// let newOrder = new Order(optionSel,optionSe2, optionSel3);
// bill.innerHTML +=`1.${newOrder.total()} </br>`





//  }

 ///

 let smallbtn = document.querySelector(".btn1");
 let smallCount =0;
 smallCount++

 smallbtn.addEventListener("click", (e)=>{
     e.preventDefault();
     let num=  document.getElementById("num")
     num.innerText=Number( count++ )
     console.log(count);


     let toppings = document.getElementById("toppings");
     let crust = document.getElementById("crust");
     let bill = document.getElementById("totalBill");

    //  let optionSel =Number(piza.options[piza.selectedIndex].value);
     let optionSe2 = Number(toppings.options[toppings.selectedIndex].value);
     let optionSel3 =Number(crust.options[crust.selectedIndex].value);


     let newOrder = new Order(600,optionSe2, optionSel3);
     let total = `${smallCount * newOrder.total()}`

     bill.innerHTML =`${smallCount++} small pieces @ ${newOrder.total()} total is ${total} `;
     
     
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

    bill.innerHTML +=`medium size  with ${toppingsText} topping and ${crustText} crust  @ ${newOrder.total()}</br>`;

    
    
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
    bill.innerHTML +=`large size  with ${toppingsText} topping and ${crustText} crust  @ ${newOrder.total()}</br>`;
} )
 