// open and close the pushchair
    var div = document.getElementById('puschair');
    function openBtn(){
        div.style.display = "block";
        document.body.classList.add("fixed");
    }
    function closeBtn(){
        div.style.display = "none";
        document.body.classList.remove("fixed");
    }
// open and close the pushchair