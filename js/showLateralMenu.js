
let getLateralMenu = document.getElementById('showLateralMenu')
getLateralMenu.addEventListener('click', showLateralMenu)

function showLateralMenu(e) {
    e.preventDefault()
    let lateralmenu = document.getElementById('lateralMenu');

    if(lateralmenu.classList.contains('show')) {
      lateralmenu.classList.remove('show')
    }
    else {
        lateralmenu.classList.add('show')
        
    }
}



 
