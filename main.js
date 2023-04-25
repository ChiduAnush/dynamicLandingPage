//selecting DOM elements:
const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')

//to show the time, live.
function showTime() {
    let today = new Date()
    let hour = today.getHours()
    let min = today.getMinutes()
    let seconds = today.getSeconds()


    //to display am/pm
    const ampm = hour >= 12 ? 'pm' : 'am'

    //for 12 hour format
    hour = hour % 12 || 12

    //final time output
    time.innerHTML = `${hour}:${addZero(min)}:${addZero(seconds)} ${ampm}`
    setTimeout(showTime, 1000) //(functionToBeCalled, no. of milliseconds interval)
}

//function to add redundant zeroes for looks
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}


//to show greeting based on time(hour)
function setgreet() {
    let today = new Date(),
        hour = today.getHours()


    if (hour < 12) {
        greeting.textContent = "good morning"
    } else if (hour < 16) {
        greeting.textContent = "good afternoon"
    } else {
        greeting.textContent = "good evening"
    }

}

//get name to local storage
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[enter name]'

    } else {
        name.textContent = localStorage.getItem('name')
    }
}

//to set name to local storage
function setName(e) {
    if (e.type === 'keypress') {                                //for pressing enter
        //make sure 'enter' is pressed
        if (e.which == 13 || e.keycode == 13) {                 //13 is the unique keycode for 'enter' key
            localStorage.setItem('name', e.target.innerText)
            name.blur()
        }
    } else {                                                    //for blur
        localStorage.setItem('name', e.target.innerText)
    }
}



//get focus lines to local storage
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = 'hmm? this space seems empty'
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

//to set focus to local storage
function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.keycode == 13 || e.which == 13) {
            localStorage.setItem('focus', e.target.innerText)
            focus.blur()
        }

    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
}

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)

focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)


//run
showTime()
setgreet()
getName()
getFocus()
