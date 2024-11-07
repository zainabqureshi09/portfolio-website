// Theme Toggle
const themToggle = document.getElementById('themeToggle') as HTMLButtonElement;
themToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector((this as HTMLAnchorElement).getAttribute('href')!);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Portfolio Filtering
const filterButton = document.querySelectorAll('#filterButtons button');
const project = document.querySelectorAll('.projects .project');
filterButton.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        project.forEach(project => {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                project.classList.add('active');
            } else {
                project.classList.remove('active');
            }
        });
    });
});

// Skills Progress Bars Animation
const skillSection = document.getElementById('skills')!;
const progressBar = document.querySelectorAll('.progress');
const skillObsrver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress') as HTMLElement;
            progressBar.style.width = progressBar.style.width;
        }
    });
}, { threshold: 0.6 });
progressBar.forEach(bar => {
    skillObsrver.observe(bar.closest('.skill')!);
});


