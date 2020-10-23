
    //   <iframe
    //   width="600"
    //   height="450"
    //   frameborder="0" style="border:0"
    //   src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAAKl0-fZ0WG5Zfpfkei_JPBXbRiZWY-4A
    //     &q=Space+Needle,Seattle+WA" allowfullscreen>
    // </iframe>


document.addEventListener('DOMContentLoaded', () => {

  const API_KEY = "AIzaSyAAKl0-fZ0WG5Zfpfkei_JPBXbRiZWY-4A";
  const MY_ADDR = "France,Auvergne+Rhône-Alpes,Doyet";

  const iframe = document.createElement('iframe');

  iframe.classList.add('gmap-iframe');
  iframe.allowfullscreen = true;
  iframe.width = window.screen.width / 2
  iframe.height = window.screen.height / 2
  iframe.src = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${MY_ADDR}&zoom=14`;

  document.body.appendChild( iframe );

  document.querySelector('.address')
  .addEventListener('click', function() {
    iframe.classList.toggle("open");
    iframe.style.left = ( this.offsetLeft - ( iframe.offsetWidth ) ) + "px";
    iframe.style.top = ( this.offsetTop + ( this.offsetHeight ) ) + "px";

  } );

  document.addEventListener('pointerdown', () => {

    if(  iframe.classList.contains('open') ) {

      iframe.classList.remove('open');
    }

  } );

} );