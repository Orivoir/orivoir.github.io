document.addEventListener('DOMContentLoaded', () => {

  const db = window?.db?.contact;

  if( IS_DEV ) {

    if( db ) {
      console.info("[contact] storage enabled");
    }
  }

  const formContact = document.querySelector('#form-contact');
  const wrapFormContact = document.querySelector('#wrap-contact');
  const btnOpenContact = document.querySelector("#btn-open-contact" );
  const btnCloseContact = document.querySelector("#btn-close-contact" );

  btnOpenContact.addEventListener('click', () => {

    document.dispatchEvent( new Event( "await" ) );
    wrapFormContact.classList.add('open');


  } );

  btnCloseContact.addEventListener('click', () => {

    document.dispatchEvent( new Event( "done" ) );
    wrapFormContact.classList.remove( "open" );

  } );

  formContact.addEventListener('submit', function(e) {

    e.preventDefault();

    const state = {
      isReply: null,
      message: null,
      object: null,
      owner: null,
      replyTo: null,
    };

    const {
      owner,
      message,
      object,
      email
    } = this;


    const errors = {};
    const emailVal = email.value.trim();

    if(
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailVal) ||
      emailVal.length >= 255
    ) {

      delete state.replyTo;
      state.isReply = false;

    } else {

      state.replyTo = emailVal;
      state.isReply = true;

    }

    const messageVal = message.value.trim();

    if( messageVal.length < 5 || messageVal.length >= 2048 ) {
      errors[ "message" ] = "lenght should between 5 and 2048";
    } else {
      state.message = messageVal;
    }

    const objectVal = object.value;

    if( objectVal.length <= 0 || objectVal > 255 ) {
      errors[ "object" ] = "lenght should between 1 and 255"
    } else {
      state.object = objectVal;
    }

    const ownerVal = owner.value;

    if( ownerVal.length < 2 || ownerVal > 127 ) {
      errors[ "owner" ] = "lenght should between 2 and 127"
    } else {
      state.owner = ownerVal;
    }

    if( Object.keys( errors ).length === 0 ) {

      // send 🚀
      message.value = "";
      owner.value = "";
      email.value = "";
      object.value = "";

      wrapFormContact.classList.add('pending');

      window.db.contact.add( state )
      .then( () => {

        wrapFormContact.classList.remove( 'pending' );
        console.info("[firebase] message have been add 🚀");

        new CustomNotification({
          contentText: "message have been save",
          type: "success"
        })
      } )
      .catch( error => {

        wrapFormContact.classList.remove( 'pending' );

        console.warn("cant add message");
        console.error( error );
      } );

    } else {
      // oops something went wrong

      new CustomNotification({
        contentText: "Oops fields error",
        type: "error"
      });

      [...this.elements].forEach( field => {
        field.parentNode.classList.remove( 'error' );
      } )

      Object.keys(errors).forEach( fieldName => {

        this[ fieldName ].parentNode.classList.add( "error" );

      } )
    }
  } )

} );