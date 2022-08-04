let menuButton = document.querySelector('#hamburger');
let sideMenu = document.querySelector('.sideMenu');
let links = document.querySelectorAll('.navMenu__link');
let mainSection = document.querySelector('.mainSection');

//load particlesjs
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

//CLICK EVENT FOR MOBILE SHOW/HIDE NAV
menuButton.addEventListener('click', (e) => {

    if(sideMenu.classList.contains('sideMenu--hide')){
        sideMenu.classList.remove('sideMenu--hide');
        sideMenu.classList.add('sideMenu--show');
    }else{
        sideMenu.classList.remove('sideMenu--show');
        sideMenu.classList.add('sideMenu--hide');
    }

    if(menuButton.classList.contains('open')){
        menuButton.classList.remove('open');
    }else{
        menuButton.classList.add('open');
    }

});

//CLICK EVENT TO CLOSE SIDE MENU
mainSection.addEventListener('click', (e) => {
    if(window.innerWidth < 1200){
        if(sideMenu.classList.contains('sideMenu--show')){
            console.log('test')
            sideMenu.classList.remove('sideMenu--show');
            sideMenu.classList.add('sideMenu--hide');
            menuButton.classList.remove('open');
        }
    }
});

//CLICK EVENT TO CLOSE THE NAVIGATION ON CLICK OF A LINK
links.forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth < 1200){
            sideMenu.classList.remove('sideMenu--show');
            sideMenu.classList.add('sideMenu--hide');
            menuButton.classList.remove('open');
        }
    });
});

if(window.innerWidth >= 1200){
    sideMenu.classList.remove('sideMenu--hide')
    sideMenu.classList.add('sideMenu--show')
}else{
    if(!sideMenu.classList.contains('sideMenu--hide')){
        sideMenu.classList.add('sideMenu--hide')
    }
}