function toTheTop(){
        document.getElementById('topUpButton').addEventListener('click', ()=>{
            scrollTo( { top: document.querySelector('main').getBoundingClientRect().top,
        behavior: 'smooth'})
    })
}

export {
    toTheTop
}