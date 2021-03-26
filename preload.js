//This is used for the connection to the cloud signalling server (index.html 354)
window.websocket = require("ws");

window.dir = (process.platform == 'darwin') ? __dirname.replace('TeleComms.app/Contents/Resources/app', '') : ".";

window.fs = require("fs");

if (!window.fs.existsSync(window.dir + '/TeleComms')) {
    window.fs.mkdirSync(window.dir + '/TeleComms');
}

const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

window.randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });

window.shortName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 2
});

window.shortName = capitalizeFirstLetter(window.shortName);
window.shortName = removeUnderscoreAndCapitalizeSecondWord(window.shortName);
window.shortName += (Math.floor(Math.random() * 1000) + 1).toString();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function removeUnderscoreAndCapitalizeSecondWord(string) {
    return string.substring(0, string.indexOf("_")) + string.charAt(string.indexOf("_") + 1).toUpperCase() + string.slice(string.indexOf("_") + 2);
}