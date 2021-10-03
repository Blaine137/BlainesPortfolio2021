let menuButton = document.querySelector('.hamburger');
let sideMenu = document.querySelector('.sideMenu');

//CLICK EVENT FOR MOBILE SHOW/HIDE NAV
menuButton.addEventListener('click', () => {
    if(sideMenu.classList.contains('sideMenuHide')){
        sideMenu.classList.remove('sideMenuHide');
        sideMenu.classList.add('sideMenuShow');
    }else{
        sideMenu.classList.remove('sideMenuShow');
        sideMenu.classList.add('sideMenuHide');
    }
});