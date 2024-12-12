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

// localStorage.setItem('theme', 'light')
const themeChanger = document.getElementById('changeTheme')
const hill = document.getElementById('hill')
const box = document.getElementById('box')

// if (localStorage.getItem('dark-mode') === 'enabled') {
//     document.body.classList.add('dark-mode');
// }
if (localStorage.getItem('theme') == 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    hill.style.borderColor = 'white'
    box.style.borderColor = 'white'
    localStorage.setItem('theme', 'dark')
    themeChanger.innerHTML = 'Light'
}

const changeTheme = () => {
    if (localStorage.getItem('theme') == 'light') {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
        hill.style.borderColor = 'white'
        box.style.borderColor = 'white'
        localStorage.setItem('theme', 'dark')
        themeChanger.innerHTML = 'Light'
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light')
        hill.style.borderColor = '#404456'
        box.style.borderColor = '#404456'
        localStorage.setItem('theme', 'light')
        themeChanger.innerHTML = 'Dark'
    }
    // document.body.classList.toggle('dark-mode');
    // // Save user's preference in localStorage
    // if (document.body.classList.contains('dark-mode')) {
    //     localStorage.setItem('dark-mode', 'enabled');
    // } else {
    //     localStorage.removeItem('dark-mode');
    // }
}

themeChanger.addEventListener('click', changeTheme)