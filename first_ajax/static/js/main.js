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
    const pongButton = document.querySelector('.pong_button');
    let section = document.querySelector('section');


    getAjax.addEventListener('click', () => {
        axios.get('http://intro-ajax-api.herokuapp.com/').then(function(response) {
            console.log("--- Works")
        })
    })
    
    pingButton.addEventListener('click', () =>{
        let request = axios.get('http://intro-ajax-api.herokuapp.com/ping').then(function(response){
            console.log(response.data)
            const dataElem = document.createElement('p')
            dataElem.innerHTML = response.data
            section.appendChild(dataElem)
        })
        .catch(function(response){
            const dataElem = document.createElement('p')
            dataElem.innerHTML = "500 Error: we'll try harder next time (PING)"
            section.appendChild(dataElem)
        })
        .then(function(response){
            const dataElem = document.createElement('p')
            dataElem.innerHTML = "Hey the Ping request Finished!"
            section.appendChild(dataElem)
        })
    });

    pongButton.addEventListener('click', () =>{
        let request = axios.get('http://intro-ajax-api.herokuapp.com/pong').then(function(response){
            console.log(response.data)
            const dataElem = document.createElement('p')
            dataElem.innerHTML = response.data
            section.appendChild(dataElem)
        })
        .catch(function(response){
            const dataElem = document.createElement('p')
            dataElem.innerHTML = "500 Error: we'll try harder next time (PONG)"
            section.appendChild(dataElem)
        })
        .then(function(response){
            const dataElem = document.createElement('p')
            dataElem.innerHTML = "Hey the Pong request Finished!"
            section.appendChild(dataElem)
        })
    })
});