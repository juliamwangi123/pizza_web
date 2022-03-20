`use scrict`;
//business logic

//constractor 
let count =0+1;
let arr = [];



//odering constructor
function Order(pizzaPrice, toppingsPrice , crustPrice){
    this.pizzaPrice = pizzaPrice;
    this.toppingsPrice =toppingsPrice;
    this.crustPrice = crustPrice
}


// odering method attached to prototype

Order.prototype.total = function(){
    return `${this.pizzaPrice + this.toppingsPrice + this.crustPrice}`
};


//add button on small size pizza

 let smallbtn = document.querySelector(".btn1");
 
let smallBtnCnt = document.getElementById("totalBill")
smallBtnCnt= 0+1;
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
 
 
     let newOrder = new Order(600,optionSe2, optionSel3);
 
     bill.innerHTML +=`  ${smallBtnCnt++}. Small size pizza  with ${toppingsText} toppings and ${crustText} crust  @ ${newOrder.total()}</br>`;
   ( arr.push(newOrder.total()));
    // alert(arr)
     
     
 });

//add button on medium size pizza

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

    bill.innerHTML +=`${mediumCount++}. medium size pizza  with ${toppingsText} toppings and ${crustText} crust  @ ${newOrder.total()}</br>`;

    ( arr.push(newOrder.total()));
    
});
//add button on large size pizza


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
    bill.innerHTML +=`${largeCount++}. large size pizza with ${toppingsText} toppings and ${crustText} crust  @ ${newOrder.total()}</br>`;
    ( arr.push(newOrder.total()));
} );
 
let checkOut =document.querySelector(".checkout");
checkOut.addEventListener("click", (e)=>{
    e.preventDefault();
    
    let newArr =arr.map((i) => Number(i));
    let sum =newArr.reduce(function(a,b){
        return a +b
    },0)

 let totals = document.getElementById("totals");
 totals.innerHTML = `${sum}`;
});
