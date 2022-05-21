function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("mySidenav").style.width = "50%";
    document.getElementById('login-page').style.opacity= "20%"
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById('login-page').style.opacity= "100%"
    for (let i = 0; i < dropdownMenu.length; i++) {
      dropdownMenu[i].nextElementSibling.style.display = "none";
    }
  }
  
  let mySearch = document.getElementById('mySearch');
  let mySearchbtn = document.getElementsByClassName('small-search')[0]
  let mySearchclose = document.getElementsByClassName('search-close')[0];
  
  mySearchbtn.onclick = () => {
    mySearch.style.display ="flex"
    document.getElementById('login-page').style.opacity= "20%"
  }
  
  mySearchclose.onclick = () => {
    mySearch.style.display ="none"
    document.getElementById('login-page').style.opacity= "100%"
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
      
  
  
  
  
  
  
  