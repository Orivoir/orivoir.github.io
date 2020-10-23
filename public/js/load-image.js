document.addEventListener('DOMContentLoaded', () => {


  document.querySelectorAll('img[data-src]')
  .forEach( img => {

    const source = img.getAttribute('data-src');
    const alt = img.getAttribute('data-alt') || "";

    const image = new Image;

    let preloadWidth = parseInt(img.width) || "auto";
    let preloadHeight = parseInt(img.height) || "auto";

    if( isNaN( preloadWidth ) ) {
      preloadWidth = "auto";
    }

    if( isNaN( preloadHeight ) ) {
      preloadHeight = "auto";
    }

    image.alt = alt;
    image.src = source;

    image.addEventListener('load', () => {

      const parent = img.parentNode;

      parent.removeChild( img );

      parent.appendChild( image );

    }, {
      once: true
    } );

  } );

} );