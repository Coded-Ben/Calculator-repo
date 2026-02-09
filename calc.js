
let show = document.getElementById("screen")

let current = ""
let prev = ""
let operator = null

function add() {
    operator = "+"
    prev = current
    current = ""
    

}

function one() {
    current += "1"
    show.value = current

}

function two() {
    current += "2"
    show.value = current
    
}
function zero() {
    current += "0"
    show.value = current
}
function three() {
    current += "3"
    show.value = current
}

function four() {
    current += "4"
    show.value = current
}

function five() {
    current += "5"
    show.value = current
}

function six() {
    current += "6"
    show.value = current
}

function seven() {
    current += "7"
    show.value = current
}

function eight() {
    current += "8"
    show.value = current
}

function nine() {
    current += "9"
    show.value = current
}


function sub() {
    operator = "-"
    prev = current
    current = ""
}

function mult() {
    operator = "*"
    prev = current
    current = ""
}

function div() {
    operator = "/"
    prev = current
    current = ""
}

function clearAll() {
    prev = ""
    current = ""
    operator = null
    show.value = ""

}

function eq() {
    let num1 = parseInt(prev)
    let num2 = parseInt(current)
    
    if (operator == "+") {
        show.value = num1 + num2
    }
    else if (operator == "-") {
        show.value = num1 - num2
    } else if (operator == "*") {
        show.value = num1 * num2
    } else if (operator == "/") {
        show.value = num1 / num2
    }

    current = ""
    prev = ""
    operator = null

}

