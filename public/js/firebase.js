( () => {

  const FEATURES_DEPENDENCIES = [
    "contact"
  ];

  let isDefined = false;

  try {
    // check if firebase is defined
    firebase;
    isDefined  = true;
  } catch( ReferenceError ) {

    console.warn("firebase storage down because: `firebase` is not defined can client network error");
    console.warn( "features: '" + FEATURES_DEPENDENCIES.join(',') + "' are disabled from this context" );
  }

  if( !isDefined ||  !firebase.firestore ) {

    if( isDefined && !firebase.firestore ) {


      console.log("firebase storage down because `firebase.firestore` not defined check google cloud status services at row firestore : https://status.cloud.google.com/");

      console.warn( FEATURES_DEPENDENCIES.join(',') + " features have disabled from this context" );
    }

  } else {

    function getDocs( collection ) {

      return new Promise( (resolve,reject) => {

        collection.get()
        .then( snapshot => {

          resolve( snapshot.docs.map( doc => doc.data() ) )

        } )
        .catch( error => {
          reject( error )
        } )

      } );
    }

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyA6Vugbd8F2askINFlaOeA7Z9GzAV5UNzQ",
      authDomain: "home-271db.firebaseapp.com",
      databaseURL: "https://home-271db.firebaseio.com",
      projectId: "home-271db",
      storageBucket: "home-271db.appspot.com",
      messagingSenderId: "216244884143",
      appId: "1:216244884143:web:0276b11355e3ba9b1a7a5a"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    console.info("[firebase] init");

    const db = firebase.firestore();
    const collectionName = "contact-" + (IS_DEV ? "dev": "prod");

    const contactDb = db.collection( collectionName );

    // info logs
    if( IS_DEV ) {

      getDocs( contactDb )
      .then( docs => {

        console.info(`[firebase] "${collectionName}" contains ${docs.length} docs`);
        console.info( "[firebase] ", docs );

      } )
      .catch( error => {
        console.warn("firestore error cant get docs at: " + collectionName );
        console.error( error );
        throw "firestore dont work";
      } );

    }

  }

} )();