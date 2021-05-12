const countdown = () => {
    //get current date and time
    const date = new Date()
    const time = date.getTime()

    //define New Years as a date
    const newYears = new Date(date.getFullYear(), 11, 31)

    //one day in miliseconds
    const one_day=1000*60*60*24

    //days until 31.12. of the current year
    const days= Math.ceil((newYears - time) / one_day)
    document.getElementById('days').innerHTML = days

    //hours til midnight
    const hours = 24 - date.getHours()
    document.getElementById('hours').innerHTML = hours

    //minutes til midnight
    const minutes = 59 - date.getMinutes()
    document.getElementById('minutes').innerHTML = minutes

    //seconds til midnight
    const seconds = 60 - date.getSeconds()
    document.getElementById('seconds').innerHTML = seconds
}

setInterval(countdown, 1000)
