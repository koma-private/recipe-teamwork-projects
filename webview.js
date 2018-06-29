'use strict';
var _electron = require('electron');
var _path = require('path');
var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const getTeamIcon = function getTeamIcon(count = 0) {
  let countTeamIconCheck = count;
  let bgUrl = null;

  window.location.href = "#dashboard";

  const icon = document.querySelector('div.mlogo img');
  if (icon) {
    bgUrl = icon.getAttribute('src');
  }

  countTeamIconCheck += 1;

  if (bgUrl) {
    _electron.ipcRenderer.sendToHost('avatar', bgUrl);
  } else if (countTeamIconCheck <= 5) {
    setTimeout(() => {
      getTeamIcon(countTeamIconCheck + 1);
    }, 2000);
  }
};

module.exports = (Franz) => {
  const getMessages = () => {
    let directCount = 0;
    const badge = document.querySelector('.w-notification__count-label');

    if (badge.innerText) {
      directCount = parseInt(badge.innerText, 10);
    }
    Franz.setBadge(directCount);
  };

  Franz.loop(getMessages);

  setTimeout(() => {
    getTeamIcon();
  }, 4000);
}