(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  var app = document.querySelector('#app');
  // TODO: Capture "Home" click.
  app.ready = function() {
    this.lastRoute = [];
    this.isWeb = (typeof device === 'undefined');
    this.isAndroid = (/android/i.test(navigator.userAgent));
    this.isIos = (/iphone|ipad|ipod/i.test(navigator.userAgent));
    this.isMobile = this.isAndroid || this.isIos;
  };
  app.getcards = function() {
    if (window.platform === 'android' || window.platform === 'ios') {
      window.open('http://cards.expeditiongame.com/', '_system');
    } else {
      window.location='http://cards.expeditiongame.com/';
    }
  };
  app.next = function(e) {
    this.$.pages.next(e.currentTarget.dataset.target, e.currentTarget.dataset.anim);
  };
  app.showSelect = function(e) {
    this.$.pages.prev("_select");
    e.stopPropagation();
  };
  app.showSplash = function(e) {
    this.$.pages.prev("splash");
    e.stopPropagation();
  };
  app.showFeatured = function(e) {
    this.$.pages.prev("featured");
    this.$.featured.reset();
    e.stopPropagation();
  };
  app.showSetup = function(e) {
    this.$.pages.prev("setup");
    e.stopPropagation();
  };
  app.sendFeedback = function() {
    console.log("TODO: Send feedback");
    this.$.pages.next("setup");
  };
})(document);
