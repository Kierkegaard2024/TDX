document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = 0;
    progressBar.style.left = 0;
    progressBar.style.height = '4px';
    progressBar.style.backgroundColor = '#93AA24';
    progressBar.style.width = '0%';
    progressBar.style.zIndex = '1000';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
});
