
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

  // iframe.classList.add('');
  iframe.allowfullscreen = true;
  iframe.width = window.screen.width / 2
  iframe.height = window.screen.height / 2
  iframe.src = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${MY_ADDR}&zoom=14`;
  iframe.classList.add('gmap-iframe-content');

  const wrapGmap = document.querySelector("#wrap-gmap");
  wrapGmap.appendChild( iframe );

  addrText = document.querySelector('.address')

  addrText.addEventListener('click', function() {
    wrapGmap.classList.toggle("open");

    wrapGmap.style.left = ( this.offsetLeft ) + "px";
    wrapGmap.style.top = ( this.offsetTop + ( this.offsetHeight ) + 20 ) + "px";

  } );

  document.addEventListener('pointerdown', (e) => {

    if(
      wrapGmap.classList.contains('open') &&
      e.target.nodeName.toLocaleLowerCase() !== "address" &&
      wrapGmap !== e.target
    ) {
      wrapGmap.classList.remove('open');
    }

  } );

} );