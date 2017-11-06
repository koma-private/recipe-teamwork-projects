'use strict';

module.exports = (Franz, options) => {
  function getMessages() {
    let directCount = 0;
    let badge = document.getElementById('numNotifs2');

    if (badge && badge.innerText) {
      directCount = parseInt(badge.innerText);
    }

    Franz.setBadge(directCount);
  }

  Franz.loop(getMessages);
}