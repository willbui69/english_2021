function toTheTop() {
    document.querySelector('button').addEventListener('click', ()=>{
        scrollTo( { top: document.querySelector('h1').getBoundingClientRect().top,
    behavior: 'smooth'})
    })
}

export {
    toTheTop
}
