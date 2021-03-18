let viewer = document.querySelector('.viewer')
let button = document.querySelectorAll('button')


button.forEach(function (btn){
    btn.addEventListener('click', view)
})

let num = ''
let equation = ''
let oneChk = false
//

function view(event) {
    const target = event.target.innerText
    if (target === 'AC'){
        num = ""
        equation = ""
        viewer.innerText = "0"
    }else if (['+', '-','*', '/'].includes(target)){
        if (oneChk === false) {
            equation = equation + target
            num = ""
            oneChk = true
        } else {
            viewer.innerText = eval(equation)
            equation = equation + target
            num = ""

        }
    } else if (target === '=') {
        viewer.innerText = eval(equation)
        equation = eval(equation)
    } else {
       equation = equation + target
        num = num + target
        viewer.textContent = num
    }
}




















