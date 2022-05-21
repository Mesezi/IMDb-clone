function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("mySidenav").style.width = "50%";
  document.getElementById('page').style.opacity= "20%"
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById('page').style.opacity= "100%"
  for (let i = 0; i < dropdownMenu.length; i++) {
    dropdownMenu[i].nextElementSibling.style.display = "none";
  }
}

let mySearch = document.getElementById('mySearch');
let mySearchbtn = document.getElementsByClassName('small-search')[0]
let mySearchclose = document.getElementsByClassName('search-close')[0];

mySearchbtn.onclick = () => {
  mySearch.style.display ="flex"
  document.getElementById('page').style.opacity= "20%"
}

mySearchclose.onclick = () => {
  mySearch.style.display ="none"
  document.getElementById('page').style.opacity= "100%"
}


let dropdownMenu = document.getElementsByClassName("dropdown-btn");
for (let i = 0; i < dropdownMenu.length; i++) {
  dropdownMenu[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let dropdownMenuContent = this.nextElementSibling;
    if (dropdownMenuContent.style.display === "block") {
      dropdownMenuContent.style.display = "none";
    } else {
      dropdownMenuContent.style.display = "block";
    }
  });
}



let search = document.getElementsByClassName('menu-list')[0];
let searchItems = search.children
let searchC = document.getElementsByClassName('menu-drop')[0]
let searchText = document.getElementsByClassName('btt')[0]
let length = searchItems.length - 2;

  for (let i =0; i< length; i++){
   var link = searchItems[i]
   link.addEventListener('click', function(event){
    var linkClicked = event.target
    searchText.innerText= (linkClicked.innerText)
    search.style.display = "none";
   })
}
  
searchC.onclick = () => {
    if (search.style.display === "block") {
      search.style.display = "none";
    } else {
      search.style.display = "block";
    }
  }

  window.onclick = function(event) {
    if (!event.target.matches('.btt')) {
      search.style.display = "none";
      }
    }
 

const itemsC = document.getElementsByClassName('show-container')[0]
const allItems = document.querySelectorAll('.show-bg')
let index = 0

const slide =  document.querySelector('.carousel-items')
const slideItems = document.querySelectorAll('.carousel-items .items');
const prev = document.getElementById('prev')
const next = document.getElementById('next')
let counter = index + 1
const size = slideItems[0].clientHeight


slide.style.transform= 'translateY(' + (-size * 1) + 'px)';



function nextS(){
  if(index == allItems.length - 1){
    index = 0
  }
  else{
    index++
  }
  update();
  if(counter >= slideItems.length - 1) return
slide.style.transition = 'transform 0.3s ease-in-out'
counter++
slide.style.transform= 'translateY(' + (-size * counter) + 'px)';

console.log(`big ` + index)
console.log(`small ` + counter)
}

function prevS() {
  if(index == 0){
    index = allItems.length - 1
  }
  else{
    index--
  }
  update();
  if(counter <= 0) return
  slide.style.transition = 'transform 0.3s ease-in-out'
  counter--
  slide.style.transform= 'translateY(' + (-size * counter) + 'px)';

}


slide.addEventListener('transitionend', ()=>{

  if(slideItems[counter].id === "lastClone"){
    slide.style.transition = 'none';
    counter = slideItems.length-2
  slide.style.transform= 'translateY(' + (-size * counter) + 'px)';
  }
  if(slideItems[counter].id === "firstClone"){
    slide.style.transition= 'none';
    counter = slideItems.length - counter;
    slide.style.transform= 'translateY(' + (-size * counter) + 'px)';
  }
})

next.onclick = nextStop

prev.onclick = prevStop

function update(){
  for(let j = 0; j < allItems.length; j++){
    allItems[j].classList.remove('active-show');
  }
  allItems[index].classList.add('active-show');
}

function nextStop (){
  nextS()
  clearInterval(id)
}
function prevStop (){
  prevS()
  clearInterval(id)
}

var id;
const auto = () => {
 id = setInterval(function() {
  nextS();
}, 4000);
}

auto();

itemsC.addEventListener('mouseenter',() =>{
  clearInterval(id)
})
itemsC.addEventListener('mouseleave',auto)










