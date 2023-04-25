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


//run
showTime()
setgreet()
