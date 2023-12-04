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