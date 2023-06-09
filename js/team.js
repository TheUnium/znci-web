/**
 * Copyright (c) 2023 znci. All rights reserved.
 * Licensed under the MIT License.
 * See LICENSE in the project root for license information.
 * Version: 1.0.0
 */ 

const memberList = [{
    name: "zNotChill",
    socials: {
       github: "zNotChill",
       discord: "chxll#3424",
       gitlab: "zNotChill",
       email: "znotchill@znci.dev"
    },
    country: {
       country: "gb",
       timezone: "BST"
    },
    pfp: "https://github.com/zNotChill.png",
    badge: "founder/owner",
    note: "zNotChill is the owner and founder of znci. They control most of the operations and control development."
 }, {
    name: "Cerq",
    socials: {
       github: "Cerqiest",
       discord: "cerq#0001",
       email: "cerq@znci.dev"
    },
    country: {
       country: "N/A",
       timezone: "N/A"
    },
    pfp: "https://github.com/cerqiest.png",
    badge: "staff manager, developer",
    note: "Cerq is a manager and a developer for znci. They also handle social media and community interaction."
 }, {
    name: "BlockArchitech",
    socials: {
       github: "BlockArchitech",
       email: "block@znci.dev",
       website: "blockarchitech.com",
       gitlab: "blockarchitech"
    },
    pfp: "https://github.com/blockarchitech.png",
    country: {
       country: "N/A",
       timezone: "N/A"
    },
    badge: "devops engineer",
    note: "BlockArchitech handles project management, development, and CI/CD for znci."
 }, {
    name: "LeUnium",
    socials: {
       github: "TheUnium",
       email: "unium@znci.dev",
       website: "theunium.github.io",
       discord: "unium#6850"
    },
    pfp: "https://github.com/theunium.png",
    country: {
       country: "N/A",
       timezone: "N/A"
    },
    badge: "developer, designer, artist",
    note: "They are a developer and pixel artist for znci. They made this page, and control almost all PHP development at znci."
 }, {
    name: "grcq",
    socials: {
       github: "grcq",
       discord: "grcq#4516",
       website: "grcq.dev"
    },
    country: {
       country: "no",
       timezone: "CET",
       email: "grcq@znci.dev"
    },
    pfp: "https://github.com/grcq.png",
    badge: "java developer",
    note: "grcq is a developer for znci. They control almost all Java development here at znci."
 }],
 members = memberList;
for (let e = 0; e < members.length; e++) {
 let t = "",
    n = 0;
 const i = members[e],
    o = members[e].socials;
 for (const e in o) {
    let i = `<i class="fa-brands fa-${e} fa-fw"></i>`;
    "website" === e && (i = '<i class="fa-solid fa-globe fa-fw"></i>'), "email" === e && (i = '<i class="fa-solid fa-envelope fa-fw"></i>'), t += `<span class="tooltip">${i}<span class="ttp-text"> ${o[e]}</span></span> | `, n++
 }
 document.querySelector("#membrloader").innerHTML += `\n            <div class="card">\n                <a href="https://github.com/${i.socials.github}"> \n              <div class="card-content">\n                <h3 class="card-title">${i.name}</h3>\n                <h4 class="card-about">${i.note}</h4>\n              </div>\n              <img src="${i.pfp}" alt="${i.name}'s icon" width="64" height="64" class="card-icon">\n              </a>\n            </div>\n          `
}