let items = [
    {
        proname:"shirt1",
        proimage:"pro1.jpg",
        proprice:1000
    }
    ,
    {
        proname:"shirt2",
        proimage:"pro2.jpg",
        proprice:300
    }
    ,
    {
        proname:"shirt3",
        proimage:"pro3.jpg",
        proprice:2000
    }
    ,{
        proname:"shirt4",
        proimage:"pro1.jpg",
        proprice:900
    }
    ,
    {
        proname:"shirt5",
        proimage:"pro2.jpg",
        proprice:450
    }
    ,{
        proname:"shirt6",
        proimage:"pro3.jpg",
        proprice:123
    }
    
    ]
    function additems(){
        let content = "";
        for(var i =0; i<items.length; i++){
            content += `
       <div class="card" style="width: 18rem;">
      <img src="${items[i].proimage}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${items[i].proname}</h5>
        <p class="card-text">${items[i].proprice}</p>
        <a href="#" class="btn btn-primary" onclick="addtocart(${i})">Add to cart</a>
      </div>
    </div>
            
            `
        }
        document.querySelector(".maincard").innerHTML = content;
    }
    additems();

    let addtocartitems = [];

//update cart display
function updatecartdisplay(){
    const cartcontainer = document.querySelector(".additem");
    const cartcountelement = document.querySelector(".cartcount");
    const totalcontainer = document.querySelector(".totalcontainer");
  document.querySelector(".totalcontainer").style.display ="";

cartcontainer.innerHTML ='';

let total = 0;

addtocartitems.forEach(function(item, index){
    total += item.proprice;
    cartcontainer.innerHTML += `
    
    <div class="card-item">
  <img src="${item.proimage}" class="card-img-top" alt="">
  <div class="card-item-info">
    <h5 class="card-title">${item.proname}</h5>
    <p class="card-text">${item.proprice}</p>
  </div>
  <button class="btn btn-danger" onclick="removefromcart(${index})"> Remove</button>

</div>
    
    `
});
//update cart count and total price

cartcountelement.textContent = addtocartitems.length;
totalcontainer.textContent = total;



}

//add items array
function addtocart(index){
    addtocartitems.push(items[index]);
    updatecartdisplay();
    }


//remove from cart
function removefromcart(index){
    addtocartitems.splice(index,1);
    updatecartdisplay();
}

function carttog(){
    const cartdetails = document.querySelector('.cartdetailes');
    if(cartdetails.style.display ==="none"  || cartdetails.style.display == " " ){
        cartdetails.style.display ="block";

    }

    else{
        cartdetails.style.display ="none";
    }
}
