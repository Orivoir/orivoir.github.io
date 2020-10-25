class CustomNotification {

  static BOX_NOTIFICATIONS = document.querySelector('body');

  static MAX_NOTIFICATIONS = 5;

  static TIMEOUT = 5e3;

  static get ALLOWS_TYPE() {

    return [
      "success",
      "error",
      "info",
      "warn"
    ];

  }

  static get WRAP_CLASS() {

    return "wrap-custom-notification";
  }

  static get PROGRESS_BAR_OUTSIDE_CLASS() {
    return "custom-notification-progress-bar-outside";
  }

  static get PRECISION_INTERVAL() {

    return 75;
  }

  static get ANIMATION_REMOVE_CLASS() {

    return "custom-notification-removed";
  }

  static get TIMEOUT_ANIMATION_REMOVE() {

    return 425;

  }

  static setBoxNotification( node ) {

    CustomNotification.BOX_NOTIFICATIONS = node instanceof Node ? node: CustomNotification.BOX_NOTIFICATIONS;

  }

  static setTimeout( timeout ) {

    timeout = parseInt( timeout );
    CustomNotification.TIMEOUT = isNaN( timeout ) ? CustomNotification.TIMEOUT: timeout;
  }

  static setMaxNotification( maxNotification ) {

    maxNotification = parseInt( maxNotification );
    CustomNotification.MAX_NOTIFICATIONS = isNaN( maxNotification ) ? CustomNotification.MAX_NOTIFICATIONS: maxNotification;
  }

  static get IS_ALLOW_APPEND() {

    return CustomNotification.BOX_NOTIFICATIONS.querySelectorAll( `.${CustomNotification.WRAP_CLASS}` ).length < CustomNotification.MAX_NOTIFICATIONS;
  }

  static trashLast() {

    const notifications = CustomNotification.BOX_NOTIFICATIONS.querySelectorAll( `.${CustomNotification.WRAP_CLASS}` );

    // first is more time exists
    const last = notifications[ 0 ];

    CustomNotification.BOX_NOTIFICATIONS.removeChild( last );
  }

  constructor({ contentText, type }) {

    if( !CustomNotification.IS_ALLOW_APPEND ) {

      CustomNotification.trashLast();
    }

    this.contentText = contentText;
    this.type = type;

    const wrap = this.wrap;

    CustomNotification.BOX_NOTIFICATIONS.appendChild( wrap );

    this.prepareRemove( wrap );
    this.remove();

  }

  freeMemory() {

    clearInterval( this.timeoutID );
    this.notification.removeEventListener('mouseenter', this.onMouseEnter );
    this.notification.removeEventListener('mouseleave', this.onMouseLeave );
    this.notification.removeEventListener('click', this.onManualRemove );
  }

  prepareRemove( wrap ) {

    this.notification = wrap;

    this.onMouseEnter = this.onMouseEnter.bind( this );
    this.onMouseLeave = this.onMouseLeave.bind( this );
    this.onChangeIntervalRemove = this.onChangeIntervalRemove.bind( this );
    this.onManualRemove = this.onManualRemove.bind( this );

    this.currentTimeout = 0;
    this.timeoutID = null;

  }

  protocolRemove() {

    this.freeMemory();

    this.notification.classList.add( CustomNotification.ANIMATION_REMOVE_CLASS );

    setTimeout(() => {

      this.notification.parentNode.removeChild( this.notification );

    }, CustomNotification.TIMEOUT_ANIMATION_REMOVE );

  }

  onManualRemove() {

    this.protocolRemove();

  }

  onMouseEnter() {

    clearInterval( this.timeoutID );
  }

  onMouseLeave() {

    this.timeoutID = setInterval( this.onChangeIntervalRemove,  CustomNotification.PRECISION_INTERVAL );

  }

  upgradeProgressBar() {

    const progressBarOutside =  this.notification.querySelector( `.${CustomNotification.PROGRESS_BAR_OUTSIDE_CLASS}` );

    let pct = (this.currentTimeout / CustomNotification.TIMEOUT) * 100;

    if( pct > 100 ) {

      pct = 100;
    }
    progressBarOutside.style.width = pct + "%";
  }

  onChangeIntervalRemove() {

    this.currentTimeout += CustomNotification.PRECISION_INTERVAL;

    this.upgradeProgressBar();

    if( this.currentTimeout >= CustomNotification.TIMEOUT ) {

      this.protocolRemove();
    }

  }

  remove() {

    this.notification.addEventListener('mouseenter', this.onMouseEnter );
    this.notification.addEventListener('mouseleave', this.onMouseLeave );
    this.notification.addEventListener('click', this.onManualRemove );

    this.timeoutID = setInterval( this.onChangeIntervalRemove, CustomNotification.PRECISION_INTERVAL );
  }

  get wrap() {

    const div = document.createElement('div');
    div.classList.add( CustomNotification.WRAP_CLASS );
    div.classList.add( this.type );

    div.innerHTML = `
      <div class="${CustomNotification.PROGRESS_BAR_OUTSIDE_CLASS}"></div>
      <div>
        ${this.contentText}
      </div>
    `;

    return div;
  }

  get type() {
    return this._type;
  }
  set type(type) {
    this._type = ( CustomNotification.ALLOWS_TYPE.includes(type) ) ? type: "info";
  }

};
