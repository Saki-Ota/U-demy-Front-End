const child = document.querySelector('.child');
const cb = function(entries, observe) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log('inview');
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target)
        } else {
            console.log('outview')
            entry.target.classList.remove("inview");
        }
    })
}

const options = {
    root: null,
    rootMargin: "-300px 0px",
    // threshold: 0
}
const io = new IntersectionObserver(cb, options);
io.observe(child);
