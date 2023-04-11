let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #1f5557;"> Técnica en Programación. Creadora de desarrollo de software multiplataforma y sitios webs.</span>')
  //.typeString('Soy estudiante de la carreDesarrollo sitios web y artículos sobre programación.')
  .pauseFor(200)
  
  .deleteChars(10)
  .start();
