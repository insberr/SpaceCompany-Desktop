// No Content Yet Cause Its BedTime
var app = require('electron').remote;

// Close app 
var cloased;
cloased = true;
document.getElementById("Window").addEventListener('click', () => {
    if (cloased) {
        cloased = false
        document.getElementById('Window-Menu').style.display = 'inline';
    } else {
        cloased = true
        document.getElementById('Window-Menu').style.display = 'none';
    }
    
})


document.getElementById("bar-title").innerHTML = 'hi';

document.getElementById("close-btn").addEventListener("click", () => {
    app.BrowserWindow.getFocusedWindow().close();
}, false);

// Close app 
document.getElementById("max-btn").addEventListener("click", () => {
    app.BrowserWindow.getFocusedWindow().maximize();
}, false);

document.getElementById("min-btn").addEventListener("click", () => {
    app.BrowserWindow.getFocusedWindow().minimize();
}, false);
