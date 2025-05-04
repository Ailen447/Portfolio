let currentSection = 'home';

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.style.paddingTop = '60px';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        if (sectionId === 'home') {
            targetSection.style.paddingTop = '0';
        }
    }

    currentSection = sectionId;

    const navbar = document.querySelector('.navbar');
    if (sectionId === 'home') {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    } else {
        navbar.classList.add('scrolled');
    }

    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    navLinks.forEach(link => link.classList.remove('active'));

    let activeLink = null;

    if (sectionId === 'school1' || sectionId === 'school2') {
        const schoolProfileLink = document.querySelector('.nav-item.dropdown:nth-child(6) > .nav-link');
        if (schoolProfileLink) {
            schoolProfileLink.classList.add('active');
        }
        activeLink = schoolProfileLink;
    }
    else if (sectionId === 'domain1') {
        const ppstLink = document.querySelector('.nav-item.dropdown:nth-child(7) > .nav-link'); 
        if (ppstLink) {
            ppstLink.classList.add('active');
        }
        activeLink = ppstLink;
    }
    else if (sectionId === 'domain2') {
        const ppstLink = document.querySelector('.nav-item.dropdown:nth-child(7) > .nav-link'); 
        if (ppstLink) {
            ppstLink.classList.add('active');
        }
        activeLink = ppstLink;
    }
    else if (sectionId === 'domain3') {
        const ppstLink = document.querySelector('.nav-item.dropdown:nth-child(7) > .nav-link'); 
        if (ppstLink) {
            ppstLink.classList.add('active');
        }
        activeLink = ppstLink;
    }
    else if (sectionId === 'domain4') {
        const ppstLink = document.querySelector('.nav-item.dropdown:nth-child(7) > .nav-link'); 
        if (ppstLink) {
            ppstLink.classList.add('active');
        }
        activeLink = ppstLink;
    }
    else if (sectionId === 'domain5') {
        const ppstLink = document.querySelector('.nav-item.dropdown:nth-child(7) > .nav-link'); 
        if (ppstLink) {
            ppstLink.classList.add('active');
        }
        activeLink = ppstLink;
    }
    else if (sectionId === 'domain6') {
        const ppstLink = document.querySelector('.nav-item.dropdown:nth-child(7) > .nav-link'); 
        if (ppstLink) {
            ppstLink.classList.add('active');
        }
        activeLink = ppstLink;
    }
    else if (sectionId === 'domain7') {
        const ppstLink = document.querySelector('.nav-item.dropdown:nth-child(7) > .nav-link'); 
        if (ppstLink) {
            ppstLink.classList.add('active');
        }
        activeLink = ppstLink;
    }
    else if (sectionId === 'dtr' || sectionId === 'certificates' || sectionId === 'gallery') {
        const evidencesLink = document.querySelector('.nav-item.dropdown:nth-child(9) > .nav-link');
        if (evidencesLink) {
            evidencesLink.classList.add('active');
        }
        activeLink = evidencesLink;
    }
    else {
        navLinks.forEach(link => {
            const onclickAttr = link.getAttribute('onclick');
            if (onclickAttr && onclickAttr.includes(`'${sectionId}'`)) {
                link.classList.add('active');
                activeLink = link;
            }
        });
    }

    const indicator = document.getElementById('nav-indicator');
    if (activeLink) {
        const rect = activeLink.getBoundingClientRect();
        const navRect = activeLink.closest('.navbar-nav').getBoundingClientRect();

        indicator.style.width = `${rect.width}px`;
        indicator.style.left = `${rect.left - navRect.left}px`;
    } else {
        indicator.style.width = '0';
    }
}

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (currentSection === 'home') {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

const backgrounds = ['Background.jpg', 'Background1.jpg', 'Background2.jpg'];
let currentBackgroundIndex = 0;

function changeBackground() {
    const banner = document.querySelector('.banner');
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    banner.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
        }
    });
}, { threshold: 0.2 });

document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
    banner.style.backgroundImage = `url('${backgrounds[0]}')`;
    setInterval(changeBackground, 3000);
    document.querySelector('.banner-title').classList.add('fade-in');
    document.querySelector('.banner-white .banner-title').classList.add('fade-in');

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.3
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const leftElems = document.querySelectorAll('.teaching-title, .teaching-description');
    const rightElems = document.querySelectorAll('.teaching-img-overlap');

    leftElems.forEach(el => {
        el.classList.add('slide-in-left');
        observer.observe(el);
    });

    rightElems.forEach(el => {
        el.classList.add('slide-in-right');
        observer.observe(el);
    });
});

function toggleSidebar(show) {
    const sidebar = document.getElementById('mobileSidebar');
    if (show) {
        sidebar.classList.add('open');
    } else {
        sidebar.classList.remove('open');
    }
}

function toggleDropdown(arrowElement) {
    const parent = arrowElement.closest('.has-submenu');
    const submenu = parent.querySelector('.sidebar-submenu');
    const arrow = parent.querySelector('.arrow');

    submenu.classList.toggle('show');
    arrow.innerHTML = submenu.classList.contains('show') ? '&#9660;' : '&#9654;';
}