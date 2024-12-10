const currtime = document.getElementById('current-time')
setInterval(() => {
    const options = {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'Australia/Sydney'
    }
    const date = new Intl.DateTimeFormat('en-AU', options)
    currtime.innerHTML = date.format(new Date())
}, 1000);