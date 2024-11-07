// Theme Toggle
var themToggle = document.getElementById('themeToggle');
themToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        target === null || target === void 0 ? void 0 : target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
// Portfolio Filtering
var filterButton = document.querySelectorAll('#filterButtons button');
var project = document.querySelectorAll('.projects .project');
filterButton.forEach(function (button) {
    button.addEventListener('click', function () {
        var filter = button.getAttribute('data-filter');
        project.forEach(function (project) {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                project.classList.add('active');
            }
            else {
                project.classList.remove('active');
            }
        });
    });
});
// Skills Progress Bars Animation
var skillSection = document.getElementById('skills');
var progressBar = document.querySelectorAll('.progress');
var skillObsrver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            var progressBar_1 = entry.target.querySelector('.progress');
            progressBar_1.style.width = progressBar_1.style.width;
        }
    });
}, { threshold: 0.6 });
progressBar.forEach(function (bar) {
    skillObsrver.observe(bar.closest('.skill'));
});
