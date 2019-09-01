// http://intro-ajax-api.herokuapp.com/
// The URLs within the server (AKA 'endpoints', AKA 'resources') we're going to work with are:

// / <- the root path
// /ping
// /pong
// /count
// /time
// /a_car



document.addEventListener("DOMContentLoaded", function() {

    const getAjax = document.querySelector('.get_ajax');
    const pingButton = document.querySelector('.ping_button');
    const ajaxDataElm = document.getElementById('ping');
    const pongButton = document.getElementById('pong_button');

    getAjax.addEventListener('click', () => {
        axios.get('http://intro-ajax-api.herokuapp.com/')
            console.log("--- Works")
    })
    pingButton.addEventListener('click', () => {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/ping')
        request.then(function(response) {
            console.log(response.data)
            const dataElm = document.createElement("span");
            dataElm.innerHTML = response.data;
            ajaxDataElm.innerHTML = '';
            ajaxDataElm.appendChild(dataElm);
        })
        .then(function() {
            console.log('___SUCCESS')
        })
        .catch(function() {
            console.log('___FAIL')
        })
    })
    pongButton.addEventListener('click', () => {
        const request = axios.get('http://intro-ajax-api.herokuapp.com/pong')
        request.then(function(response) {
            console.log(response.data)
            const dataElm = document.createElement('span');
            dataElm.innerHTML = response.data;
            ajaxDataElm.innerHTML = '';
            ajaxDataElm.appendChild(dataElm);
        })
    })
});