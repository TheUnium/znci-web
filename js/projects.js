/**
 * Copyright (c) 2023 znci. All rights reserved.
 * Licensed under the MIT License.
 * See LICENSE in the project root for license information.
 * Version: 1.0.0
 */

const projectList = [{
   name: "Azalea",
   tags: [{
      tag: "public",
      color: "green"
   }],
   icon: "https://raw.githubusercontent.com/znci/brandkit/main/src/logos/svg/azalea.svg",
   url: "https://github.com/znci/azalea",
   about: "Azalea is a CSS and soon-to-be JS framework, with features such as alerts, badges, buttons, etc."
}, {
   name: "QR Generator",
   tags: [{
      tag: "public",
      color: "green"
   }],
   icon: "https://raw.githubusercontent.com/znci/brandkit/main/src/logos/svg/qr.svg",
   url: "https://github.com/znci/qr",
   about: "znci QR is a QR code generator that currently supports links."
}, {
   name: "Paint",
   tags: [{
      tag: "public",
      color: "green"
   }],
   icon: "https://res.cloudinary.com/znci/image/upload/v1675111503/znci-paint-logo-light-short_ht2khq.svg",
   url: "https://github.com/znci/paint",
   about: "A free drawing app with PNG, SVG and JPG support."
}, {
   name: "BetterPS",
   tags: [{
      tag: "public",
      color: "green"
   }],
   icon: "./img/placeholder.svg",
   url: "https://github.com/znci/betterps",
   about: "A chrome extension for making the PlayerServers website better, with an inbuilt console terminal."
}, {
   name: "MusicBridge",
   tags: [{
      tag: "public",
      color: "green"
   }],
   icon: "./img/placeholder.svg",
   url: "https://github.com/znci/musicbridge",
   about: "A macOS App to control Spotify/Apple Music via MIDI."
}, {
   name: "Terminal",
   tags: [{
      tag: "public",
      color: "green"
   }],
   icon: "./img/placeholder.svg",
   url: "https://github.com/znci/terminal",
   about: "A free, usable, and configurable terminal with documentation."
}, {
   name: "Web",
   tags: [{
      tag: "private",
      color: "red"
   }],
   icon: "./img/placeholder.svg",
   url: "https://github.com/znci/web",
   about: "A simple app to create a no-code website."
}];
window.onload = (() => {
   projectList.forEach(t => {
      let a = "";
      t.tags.forEach(t => {
         a += `${t.tag}`
      }), document.querySelector("#prjloader").innerHTML += `\n            <div class="card-unium">\n              <a href=${t.url}>\n                <div class="card-content">\n                  <h3 class="card-title">${t.name}</h3>\n                  <h4 class="card-about">${t.about} <br> <span class="text-sm">This project is ${a}</span></h4>\n                </div>\n                <img src="${t.icon}" alt="${t.name}'s icon" width="64" height="64" class="card-icon">\n              </a>\n            </div>\n        `
   })
});