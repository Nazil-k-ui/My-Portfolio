function downloadFile() {
    const link = document.createElement('a');
    link.href = 'docs/resume.pdf';
    link.download ='resume-ZhigitekovaNazik'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Бургер-меню
const burger = document.querySelector('.burger');
const mobileMenu = document.getElementById('mobileMenu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Закрытие меню при клике по ссылке
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}
