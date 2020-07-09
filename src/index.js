const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const ipc = require('electron').ipcRenderer;


// The function to create the window.
const createWindow = () => {
    // Create the browser window object
    const win = new BrowserWindow({
        frame: false,
        width: 1250,
        height: 700,
        icon: path.join(__dirname, '/spacecompany/whiteLogo.png'),
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Show the window once its loaded
    win.once('ready-to-show', () => {
        win.show()
    })

    // Load the index.html (game)
    win.loadFile(path.join(__dirname, '/spacecompany/index.html'));

    // Open the DevTools.
    // win.webContents.openDevTools();
};

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});


// Other code vvvvv