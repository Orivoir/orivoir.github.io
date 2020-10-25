document.addEventListener('DOMContentLoaded', () => {


  // inject point enter copy data
  const target = document.createElement('input');
  target.id = "trap-select";

  // target.style.display = "none";

  target.style.width = "0px";
  target.style.height = "0px";

  document.body.appendChild( target );

  function onTrap( ) {

      // write data to copy inside entry point
      const text = this.getAttribute("data-select");
      target.value = text;

      // manuel select text from entry point
      target.select();

      // manual copy execute
      document.execCommand("copy");
  }

  const trapsTriggers = document.querySelectorAll('[data-select]');

  function onDone() {

    trapsTriggers.forEach( trap => {
      trap.addEventListener('click', onTrap );
    } );
  }

  function onAwait() {

    trapsTriggers.forEach( trap => {
      trap.removeEventListener( 'click', onTrap );
    } );
  }

  document.addEventListener( "await", onAwait );
  document.addEventListener('done', onDone );

  document.dispatchEvent( new Event( "done" ) );

} );
