const header_menu = document.querySelector('.header_menu')
window.addEventListener('scroll',()=>{
    const scrollHeight=window.pageYOffset;
    console.log(scrollHeight);
    const navHeight=header_menu.getBoundingClientRect().height;
    // console.log(navHeight);
    if(scrollHeight > navHeight*2.5){
        header_menu.classList.add('fixed-nav');
        // navbar.style.backgroundColor='red';
        // console.log('success');
    }else{
        header_menu.classList.remove('fixed-nav');
        // navbar.style.backgroundColor='black';
        // console.log('failed');
    }

    // if(scrollHeight > 500){
    //     topLink.classList.add('show-link');
    // }else{
    //     topLink.classList.remove('show-link');
    // }
})