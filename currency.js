const fetch = require("node-fetch");

for (let index = 0; index < 100; index++) {
    fetch("https://ipapi.co/currency")
        .then((res) => res.text())
        .then((text) => console.log(text, index));
}
