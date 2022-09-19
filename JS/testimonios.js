const wrapper = document.querySelector('.wrapper-testimonios');
const indicators = [...document.querySelectorAll('.indicators-testimonios button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active-testimonios');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active-testimonios');
        currentTestimonial = i;
    })
})