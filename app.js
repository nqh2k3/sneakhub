let search= document.querySelector('.search-box');/*Thanh tìm kiếm*/
let thisPage = 1; 
let limit = 6; /*tạo giới hạn cho mỗi sản phầm trên 1 trang là 6sp*/
let list = document.querySelectorAll('.product-container .box');






document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
}/*Hàm hoạt động của thanh tìm kiếm*/


/*Hàm phân trang cho sản phẩm
+ gồm 3 trang mỗi trang 6 sp */
function loadItem(){
   let firstGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((box , key)=>{
        if(key >= firstGet && key <= endGet){
            box.style.display = 'block';
        }
        else{
            box.style.display = 'none';
        }
    })
    listPage();
}

loadItem();

function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if(thisPage !=1){
        let prve = document.createElement('li');
        prve.innerText = '<';
        prve.setAttribute('onclick',"changePage("+ (thisPage - 1) +")");
        document.querySelector('.listPage').appendChild(prve);
        
    }
    


    for(i=1 ;i<= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick',"changePage("+ i +")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if(thisPage != count){
        let next =document.createElement('li');
        next.innerText = '>';
        next.setAttribute('onclick',"changePage("+ (thisPage + 1) +")");
        document.querySelector('.listPage').appendChild(next);

    }
}

function changePage(i){
    thisPage = i;
    loadItem();
}


/* Hàm này đùng để ẩn header khi kéo xuống và hiện header khi kéo lên*/
document.addEventListener("DOMContentLoaded", function() {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        let header = document.querySelector("header");

        if (prevScrollPos > currentScrollPos) {
            header.style.top = "0";
        } else {
            header.style.top = "-60px"; 
        }
        prevScrollPos = currentScrollPos;
    };
});





let thisPageShoe=1;
let limitShoe=6;
let listShoe= document.querySelectorAll('.kidshoe-container .box')



function loadItemShoe(){
    let firstGetShoe = limitShoe * (thisPageShoe - 1);
     let endGetShoe = limitShoe * thisPageShoe - 1;
     listShoe.forEach((box , key)=>{
         if(key >= firstGetShoe && key <= endGetShoe){
             box.style.display = 'block';
         }
         else{
             box.style.display = 'none';
         }
     })
     listPageShoe();
 }
 
 loadItemShoe();
 
 function listPageShoe(){
     let count = Math.ceil(listShoe.length / limitShoe);
     document.querySelector('.listPageShoe').innerHTML = '';
 
     if(thisPageShoe !=1){
         let prves = document.createElement('li');
         prves.innerText = '<';
         prves.setAttribute('onclick',"changePageShoe("+ (thisPageShoe - 1) +")");
         document.querySelector('.listPageShoe').appendChild(prves);
         
     }
     
 
 
     for(i=1 ;i<= count; i++){
         let newPageShoe = document.createElement('li');
         newPageShoe.innerText = i;
         if(i == thisPageShoe){
             newPageShoe.classList.add('active');
         }
         newPageShoe.setAttribute('onclick',"changePageShoe("+ i +")");
         document.querySelector('.listPageShoe').appendChild(newPageShoe);
     }
 
     if(thisPageShoe != count){
         let next =document.createElement('li');
         next.innerText = '>';
         next.setAttribute('onclick',"changePageShoe("+ (thisPageShoe + 1) +")");
         document.querySelector('.listPageShoe').appendChild(next);
 
     }
 }
 
 function changePageShoe(i){
     thisPageShoe = i;
     loadItemShoe();
}
// Lấy các phần tử cần sử dụng
const cartIcon = document.querySelector(".cart-icon");
const cartCount = document.querySelector(".cart-count");
const cartDropdown = document.querySelector(".cart-dropdown");
const cartItems = document.querySelector(".cart-items");

// Biến đếm số lượng sản phẩm
let itemCount = 0;

// Hàm thêm một sản phẩm vào giỏ hàng
// Hàm thêm một sản phẩm vào giỏ hàng
function addToCart(product) {
    const itemName = product.dataset.name;
    const itemPrice = parseFloat(product.dataset.price);

    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <span class="cart-item-name">${itemName}</span>
        <span class="cart-item-price">${itemPrice.toLocaleString()} $</span>`;
    cartItems.appendChild(cartItem);

    itemCount++;
    cartCount.textContent = itemCount;
    alert("thêm vào giỏ hàng thành công")

}

// Sự kiện được kích hoạt khi click vào nút "Thêm vào giỏ hàng"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productContainer = this.closest('.product');
        if (productContainer) {
            addToCart(productContainer);
        }
    });
});

// Sự kiện được kích hoạt khi trang web được tải


// Hiển thị giỏ hàng khi hover vào biểu tượng giỏ hàng
cartIcon.addEventListener("mouseenter", () => {
    if (itemCount > 0) {
        cartDropdown.style.display = "block";
    }
});

// Ẩn giỏ hàng khi hover ra khỏi biểu tượng giỏ hàng
cartIcon.addEventListener("mouseleave", () => {
    cartDropdown.style.display = "none";
});
 






/* document.addEventListener('DOMContentLoaded', function () {
    var parentItem = document.getElementById('parentItem');

    // Thêm sự kiện hover vào mục cha
    parentItem.addEventListener('mouseover', function () {
        // Hiển thị danh sách con khi hover
        this.querySelector('ul').style.display = 'block';
    });

    parentItem.addEventListener('mouseout', function () {
        // Ẩn danh sách con khi không hover
        this.querySelector('ul').style.display = 'none';
    });
});*/

//test casre men procut

let thisPageShoeMen=1;
let limitShoeMen=6;
let listShoeMen= document.querySelectorAll('.menproduct-container .box')



function loadItemShoeMen(){
    let firstGetShoeMen = limitShoeMen * (thisPageShoeMen - 1);
     let endGetShoeMen = limitShoeMen * thisPageShoeMen - 1;
     listShoeMen.forEach((box , key)=>{
         if(key >= firstGetShoeMen && key <= endGetShoeMen){
             box.style.display = 'block';
         }
         else{
             box.style.display = 'none';
         }
     })
     listPageShoeMen();
 }
 
 loadItemShoeMen();
 
 function listPageShoeMen(){
     let count = Math.ceil(listShoeMen.length / limitShoeMen);
     document.querySelector('.listPageShoeMen').innerHTML = '';
 
     if(thisPageShoeMen !=1){
         let prves = document.createElement('li');
         prves.innerText = '<';
         prves.setAttribute('onclick',"changePageShoeMen("+ (thisPageShoeMen - 1) +")");
         document.querySelector('.listPageShoeMen').appendChild(prves);
         
     }
     
 
 
     for(i=1 ;i<= count; i++){
         let newPageShoeMen = document.createElement('li');
         newPageShoeMen.innerText = i;
         if(i == thisPageShoeMen){
             newPageShoeMen.classList.add('active');
         }
         newPageShoeMen.setAttribute('onclick',"changePageShoeMen("+ i +")");
         document.querySelector('.listPageShoeMen').appendChild(newPageShoeMen);
     }
 
     if(thisPageShoeMen != count){
         let next =document.createElement('li');
         next.innerText = '>';
         next.setAttribute('onclick',"changePageShoeMen("+ (thisPageShoeMen + 1) +")");
         document.querySelector('.listPageShoeMen').appendChild(next);
 
     }
 }
 
 function changePageShoeMen(i){
     thisPageShoeMen = i;
     loadItemShoeMen();
 }
 
 //Women
 let thisPageShoeWomen=1;
let limitShoeWomen=6;
let listShoeWomen= document.querySelectorAll('.womenproduct-container .box')



function loadItemShoeWomen(){
    let firstGetShoeWomen = limitShoeWomen * (thisPageShoeWomen - 1);
     let endGetShoeWomen = limitShoeWomen * thisPageShoeWomen - 1;
     listShoeWomen.forEach((box , key)=>{
         if(key >= firstGetShoeWomen && key <= endGetShoeWomen){
             box.style.display = 'block';
         }
         else{
             box.style.display = 'none';
         }
     })
     listPageShoeWomen();
 }
 
 loadItemShoeWomen();
 
 function listPageShoeWomen(){
     let count = Math.ceil(listShoeWomen.length / limitShoeWomen);
     document.querySelector('.listPageShoeWomen').innerHTML = '';
 
     if(thisPageShoeWomen !=1){
         let prves = document.createElement('li');
         prves.innerText = '<';
         prves.setAttribute('onclick',"changePageShoeWomen("+ (thisPageShoeWomen - 1) +")");
         document.querySelector('.listPageShoeWomen').appendChild(prves);
         
     }
     
 
 
     for(i=1 ;i<= count; i++){
         let newPageShoeWomen = document.createElement('li');
         newPageShoeWomen.innerText = i;
         if(i == thisPageShoeWomen){
             newPageShoeWomen.classList.add('active');
         }
         newPageShoeWomen.setAttribute('onclick',"changePageShoeWomen("+ i +")");
         document.querySelector('.listPageShoeWomen').appendChild(newPageShoeWomen);
     }
 
     if(thisPageShoeWomen != count){
         let next =document.createElement('li');
         next.innerText = '>';
         next.setAttribute('onclick',"changePageShoeWomen("+ (thisPageShoeWomen + 1) +")");
         document.querySelector('.listPageShoeWomen').appendChild(next);
 
     }
 }
 
 function changePageShoeWomen(i){
     thisPageShoeWomen = i;
     loadItemShoeWomen();
    }




 

    // Thêm sự kiện click cho nút đăng nhập
    
    var check =document.getElementById('user-icon');

    document.getElementById('cc').addEventListener('click', function() {
        
        user-icon.classList.remove('icon-vi');
        user-icon.classList.add('icon-hi');
    });