// No Content Yet Cause Its BedTime
var app = require('electron').remote; 

// Close app 
document.getElementById("close-btn").addEventListener("click", () => {
    app.BrowserWindow.getFocusedWindow().close();
}, false);

// Close app 
document.getElementById("devtools").addEventListener("click", () => {
    app.BrowserWindow.getFocusedWindow().openDevTools();
}, false);