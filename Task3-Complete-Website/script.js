const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('#horizontal');

    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });


    const links = document.querySelectorAll('.sidebar a');
    const contents = document.querySelectorAll('.content section');
    
    contents[0].classList.add('active');
    links[0].classList.add('active');
    
    links.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
    
        links.forEach((link) => {
          link.classList.remove('active');
        });
    
        contents.forEach((content) => {
          content.classList.remove('active');
        });
        
        link.classList.add('active');
        contents[index].classList.add('active');
      });
    });
    
   
