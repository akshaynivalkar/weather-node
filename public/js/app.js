console.log('js file loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const info = document.querySelector('#info')
const error = document.querySelector('#error')

weatherForm.addEventListener('submit', (e) => {
    error.textContent = ''
    info.innerHTML = 'Loading...'
    error.classList.add('hidden')
    e.preventDefault()
    const location = search.value
    console.log(location)
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                error.classList.remove('hidden')
                info.classList.add('hidden')
                error.textContent = data.error
            }
            else {
                info.classList.remove('hidden')
                info.innerHTML = "<b>" + data.location + "</b><br><br>"
                info.innerHTML += data.forecast
            }
        })
    })
})