// No Content Yet Cause Its BedTime
var app = require('electron').remote;

/* Close app 
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

*/

document.getElementsByClassName("menu-title")[0].innerHTML = document.title;

var titlePosition = 50 - (document.title.length / 2) + '%';
console.log(titlePosition);
document.getElementsByClassName("menu-title")[0].style.left = titlePosition;

document.getElementsByClassName("menu-close")[0].addEventListener("click", () => {
    app.BrowserWindow.getFocusedWindow().close();
}, false);
