document.addEventListener("DOMContentLoaded", function(){
    // Contact form
    const form = document.getElementById("contactForm");
    if(form){
        form.addEventListener("submit", function(e){
            document.getElementById("formMessage").innerText = "Sending your message...";
        });
    }

    // Scroll reveal
    const revealElements = document.querySelectorAll('.section, .hero h1, .hero p, .card');
    const revealOnScroll = () => {
        const triggerPoint = window.innerHeight * 0.85;
        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if(top < triggerPoint){
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger on load
});