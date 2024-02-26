let menu = document.querySelector('.burger-menu.mobile')
let question_blocks = Array.from(document.querySelectorAll('.question-block'))

for (let i = 0; i < question_blocks.length; i++) {
    question_blocks[i].addEventListener('click', ()=>{
        question_blocks[i].classList.toggle("active")
    })
}

menu.addEventListener('click', ()=>{
    menu.classList.toggle("active")
})
console.log(menu);