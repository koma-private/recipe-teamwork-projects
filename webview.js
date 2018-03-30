'use strict';

module.exports = (Franz, options) => {
  function getMessages() {
    let directCount = 0;
    let badge = document.getElementsByClassName('w-notification__count-label');

    if (badge.length > 0 && badge[0].innerText) {
      directCount = parseInt(badge[0].innerText);
    }

    Franz.setBadge(directCount);
  }

  Franz.loop(getMessages);
}