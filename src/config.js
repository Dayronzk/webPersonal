module.exports = {
  email: 'info@dayrondev.com',
  
  

  socialMedia: [
    {
      name: 'Whatsapp',
      url: 'https://wa.me/34685486408',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dayron-hernandez/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dayronzk',

    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dayronzk',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dayronzk',
  
    },
    {
      name: 'Fork',
      url: '/archive',
    },
    {
      name: 'Pay',
      url: 'https://linktr.ee/dayronzk',
    },
    
  ],

  navLinks: [
    {
      name: 'Sobre mi',
      url: '/#about',
    },
    {
      name: 'Experiencia',
      url: '/#jobs',
    },
   /* {
      name: 'Servicios',
      url: '/#servicios',
    },
    */
    {
      name: 'Proyectos',
      url: '/#proyectos',
    },
    {
      name: 'Contacto',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
