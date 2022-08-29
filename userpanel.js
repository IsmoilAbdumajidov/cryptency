
let input1 = document.querySelector('.password1')
let input2 = document.querySelector('.password2')
let input3 = document.querySelector('.password3')
let btn1 = document.querySelector('#pass1')
let btn2 = document.querySelector('#pass2')
let btn3 = document.querySelector('#pass3')
let error = document.querySelector('.error')
const purchase_text_btn = document.querySelectorAll(('.purchase_text_btn'))
purchase_text_btn.forEach(item => {
    // console.log(item.parentElement.children[1]);
    item.addEventListener('click', (e) => {
        item.parentElement.children[1].classList.toggle('d-none')
        if (item.children[1].style.transform == 'rotate(180deg)') {
            item.children[1].style.transform = 'rotate(0deg)';
        }
        else {
            item.children[1].style.transform = 'rotate(180deg)';
        }
    })
})

let get_file = document.querySelectorAll('.get_file')
get_file.forEach(item =>{
    item.addEventListener('click', function(){
        item.children[0].click()
    });
})

let videos_section = document.querySelector(".videos_section");
let video_card = document.querySelectorAll(".video_card");
let intro = document.querySelector(".intro");
video_card.forEach((item) => {
    item.addEventListener("click", function () {
        item.children[0].style.display = "none";
    });
});
// console.log(btn1.childNodes);
input2.addEventListener('blur', () => {

    if (input1.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)) {
        // console.log(input1.value);
        // console.log('True');
        error.classList.add('dNone')
    }
    else {
        error.classList.remove('dNone')
        // console.log('Error');
    }
});
let arr = [btn1, btn2, btn3]
arr.forEach(btn => {
    btn.addEventListener('click', () => {
        if (input1.type == 'password') {
            input1.type = 'text'
            input2.type = 'text'
            input3.type = 'text'
            btn1.children[0].classList.add('fa-eye-slash')
            btn1.children[0].classList.remove('a-eye')
            btn2.children[0].classList.add('fa-eye-slash')
            btn2.children[0].classList.remove('a-eye')
            btn3.children[0].classList.add('fa-eye-slash')
            btn3.children[0].classList.remove('a-eye')
        }
        else {
            input1.type = 'password'
            input2.type = 'password'
            input3.type = 'password'
            btn1.children[0].classList.remove('fa-eye-slash')
            btn1.children[0].classList.add('a-eye')
            btn2.children[0].classList.remove('fa-eye-slash')
            btn2.children[0].classList.add('a-eye')
            btn3.children[0].classList.remove('fa-eye-slash')
            btn3.children[0].classList.add('a-eye')
        }
    })
})








const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

const btn_header = document.getElementById('btn_header')

btn_header.addEventListener('click', () => {
    left_content.classList.toggle('active')
})
about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        // // remove selected from other buttons
        // btns.forEach(function (btn) {
        // btn.classList.remove("active");
        // });
        e.target.classList.add("active");
        // hide other articles
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
        left_content.classList.remove('active')
    }
});

const setBtn = document.querySelectorAll(".sett-btn");
const articles1 = document.querySelectorAll(".content1");
const setting = document.querySelector(".mySettings");
let left_content = document.querySelector('.left_content')

setting.addEventListener("click", function (e) {
    const id = e.target.dataset.bsTarget
    if (id) {
        // // remove selected from other buttons
        // btns.forEach(function (btn) {
        // btn.classList.remove("active");
        // });
        e.target.classList.add("active");
        // hide other articles
        articles1.forEach(function (article) {
            article.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
});





(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    // console.log(forms);

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
