/*javascript. when user clicks on dropdown button, toggle between hiding and showing content
(function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show")
}
/*close the dropdown menu if user clicks outside it
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
}));*/
function fSearch()
{
    var input, filter, table, tr, td, i;
    input = document.getElementById("myData");
    filter = input.nodeValue.toUpperCase();
    table = document.getElementById("Requests");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++)
    {
        td=tr[i].getElementsByTagName("td") [0];
        if (td){
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display ="";
            } else{
                tr[i].style.display = "none";
            }
        }
    }
}