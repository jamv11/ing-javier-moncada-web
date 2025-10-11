ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline-fondo', { distance: '1000px',origin: 'left', duration: 800});
ScrollReveal().reveal('.tagline-title', { distance: '100px', delay: 800,duration: 800 });
ScrollReveal().reveal('.tagline-sub-title', { distance: '100px', delay: 1000,duration: 800 });
ScrollReveal().reveal('.tagline-description', { distance: '100px', delay: 1200,duration: 800 });
ScrollReveal().reveal('.tagline-button', { distance: '100px', delay: 1400,duration: 300 });
ScrollReveal().reveal('.tagline-photo', { distance: '100px',origin: 'right', delay: 500,duration: 800 });
ScrollReveal().reveal('.proyect-1', { distance: '100px',origin: 'bottom', delay: 300,duration: 800 });
ScrollReveal().reveal('.proyect-2', { distance: '100px',origin: 'bottom', delay: 500,duration: 800 });
ScrollReveal().reveal('.proyect-3', { distance: '100px',origin: 'bottom', delay: 700,duration: 800 });
ScrollReveal().reveal('.proyect-4', { distance: '100px',origin: 'bottom', delay: 900,duration: 800 });
ScrollReveal().reveal('.tagline-title-skills', { distance: '100px',origin: 'left', delay: 700,duration: 700 });
//ScrollReveal().reveal('.punchline', { delay: 2000 });

const mediaQuery = window.matchMedia('(min-width: 360px) and (max-width: 1023px)');

if(mediaQuery){
    ScrollReveal().reveal('.headline');
    ScrollReveal().reveal('.tagline-photo', { distance: '100px',origin: 'top', delay: 400,duration: 500 });
    ScrollReveal().reveal('.tagline-fondo', { distance: '0px',origin: 'top', duration: 0});
    ScrollReveal().reveal('.tagline-title', { distance: '100px',origin: 'top', delay: 500,duration: 500 });
    ScrollReveal().reveal('.tagline-sub-title', { distance: '100px',origin: 'bottom', delay: 600,duration: 500 });
    ScrollReveal().reveal('.tagline-description', { distance: '100px',origin: 'bottom', delay: 800,duration: 500 });
    ScrollReveal().reveal('.tagline-button', { distance: '100px',origin: 'bottom', delay: 100,duration: 500 });
    ScrollReveal().reveal('.proyect-1', { distance: '100px',origin: 'bottom', delay: 300,duration: 800 });
    ScrollReveal().reveal('.proyect-2', { distance: '100px',origin: 'bottom', delay: 500,duration: 800 });
    ScrollReveal().reveal('.proyect-3', { distance: '100px',origin: 'bottom', delay: 700,duration: 800 });
    ScrollReveal().reveal('.proyect-4', { distance: '100px',origin: 'bottom', delay: 900,duration: 800 });
    ScrollReveal().reveal('.tagline-title-skills', { distance: '100px',origin: 'left', delay: 700,duration: 700 });

/*     ScrollReveal().reveal('.headline');
    ScrollReveal().reveal('.tagline-fondo', { distance: '0px',origin: 'left', duration: 0});
    ScrollReveal().reveal('.tagline-photo', { distance: '0px',origin: 'top', delay: 0,duration: 0 });
    ScrollReveal().reveal('.tagline-title', { distance: '0px', delay: 0,duration: 0 });
    ScrollReveal().reveal('.tagline-description', { distance: '0px', delay: 0,duration: 0 });
    ScrollReveal().reveal('.tagline-button', { distance: '0px', delay: 0,duration: 0 });
    ScrollReveal().reveal('.tagline-sub-title', { distance: '0px', delay: 0,duration: 0,duration: 0 });
    ScrollReveal().reveal('.proyect-1', { distance: '0px',origin: 'bottom', delay: 0,duration: 0 });
    ScrollReveal().reveal('.proyect-2', { distance: '0px',origin: 'bottom', delay: 0,duration: 0 });
    ScrollReveal().reveal('.proyect-3', { distance: '0px',origin: 'bottom', delay: 0,duration: 0 });
    ScrollReveal().reveal('.proyect-4', { distance: '0px',origin: 'bottom', delay: 0,duration: 0 });
    ScrollReveal().reveal('.tagline-title-skills', { distance: '0px',origin: 'left', delay: 0,duration: 0 }); */
}