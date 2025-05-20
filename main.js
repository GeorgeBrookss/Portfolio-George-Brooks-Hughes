document.addEventListener('DOMContentLoaded', function(){
    
    

    var menu = document.getElementById('btn-sm');
    var nav = document.getElementById('nav-ul')


    menu.addEventListener('click', function(){
        if (nav.style.display == 'block'){
            nav.style.display = 'none'
        }else{
            nav.style.display = 'block'
        }
    })



    

})