let menuButton = document.querySelector('#hamburger');
let sideMenu = document.querySelector('.sideMenu');
let links = document.querySelectorAll('.navLink');
let mainSection = document.querySelector('.mainSection');

//load particlesjs
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

//CLICK EVENT FOR MOBILE SHOW/HIDE NAV
menuButton.addEventListener('click', (e) => {

    if(sideMenu.classList.contains('sideMenuHide')){
        sideMenu.classList.remove('sideMenuHide');
        sideMenu.classList.add('sideMenuShow');
    }else{
        sideMenu.classList.remove('sideMenuShow');
        sideMenu.classList.add('sideMenuHide');
    }

    if(menuButton.classList.contains('open')){
        menuButton.classList.remove('open');
    }else{
        menuButton.classList.add('open');
    }

});

//CLICK EVENT TO CLOSE SIDE MENU
mainSection.addEventListener('click', (e) => {
    if(sideMenu.classList.contains('sideMenuShow')){
        console.log('test')
        sideMenu.classList.remove('sideMenuShow');
        sideMenu.classList.add('sideMenuHide');
        menuButton.classList.remove('open');
    }
});

//CLICK EVENT TO CLOSE THE NAVIGATION ON CLICK OF A LINK
links.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('sideMenuShow');
        sideMenu.classList.add('sideMenuHide');
        menuButton.classList.remove('open');
    });
});