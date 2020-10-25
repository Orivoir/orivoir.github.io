document.addEventListener('DOMContentLoaded', () => {

  // close btns
  document.querySelectorAll('*[data-btn-close]')
  .forEach( btn => {

    btn.addEventListener('click', function() {

      const selectorTarget = this.getAttribute('data-btn-close');

      const target = document.querySelector( selectorTarget );

      if( ( target instanceof Node || target instanceof HTMLElement ) ) {

        const removeClass = this.getAttribute('data-close-as') || "open";

        target.classList.remove( removeClass );

      } else {

        // target not exists
        console.warn(`Oops close button: "${this.id || this.className}" have a target not found as selector: "${selectorTarget}"`);
      }

    } );

  } );

} );
