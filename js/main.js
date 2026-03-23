// add class to header on scroll
let header = document.querySelector('header');

window.onscroll = function() {
    if (this.scrollY >= 50) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}

// add class active to nav_Links
let nav_Links = document.getElementById("nav_links");

function op_cl_Menu() {
    nav_Links.classList.toggle("active")
}

document.querySelectorAll("#nav_links a").forEach(link => {
  link.addEventListener("click", () => {
    op_cl_Menu(); 
  });
});
const observerOptions = {
    threshold: 0.2 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        
            entry.target.classList.add('active');
        } else {

            entry.target.classList.remove('active');
        }
    });
}, observerOptions);


document.querySelectorAll('section, .hero').forEach(section => {
    observer.observe(section);
});
// راقب السكاشن والـ project_box عشان الانميشن يشتغل لكل مشروع لوحده
document.querySelectorAll('section, .hero, .project_box').forEach(el => {
    observer.observe(el);
});