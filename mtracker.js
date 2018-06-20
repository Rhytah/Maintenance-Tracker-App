/*javascript. when user clicks on dropdown button, toggle between hiding and showing content*/
(function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show")
}
/*close the dropdown menu if user clicks outside it*/
(Window.onclick = function(event){
 if (!event.target.matches('.dropbtn')){
     var dropdowns = document.getElementByClassName("dropdown-content")
     var i;
     for (i = 0; i < dropdowns.length; i++){
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')){
             openDropdown.classList.remove('show');
         }
     }
 }
}));
