let menuButton = document.querySelector('.hamburger');
let sideMenu = document.querySelector('.sideMenu');
let links = document.querySelectorAll('.navLink');

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

//CLICK EVENT TO CLOSE THE NAVIGATION ON CLICK OF A LINK
links.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('sideMenuShow');
        sideMenu.classList.add('sideMenuHide');
    });
})