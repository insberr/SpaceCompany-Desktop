const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const fs = require('fs');

const createWindow = () => {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1250,
        height: 700,
        icon: path.join(__dirname, '/spacecompany/SpaceCompanyFavicon.png'),
        webPreferences: {
            nodeIntegration: true
        }
    });
    const template = [
        {
            label: 'Window',
            submenu: [
                { role: 'reload' },
                { role: 'toggledevtools' },
                { role: 'toggleFullscreen' }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' }
            ]
        },
        {
            label: 'Game',
            submenu: [
                {
                    label: 'Save',
                    accelerator: 'CmdOrCtrl+S',
                    click() {
                        win.webContents.send('saveTheGame')
                    }
                },
                {
                    type: 'separator'
                },
                {
                    role: 'about'
                },
                {
                    label: 'Home',
                    click() {
                        win.webContents.loadFile(path.join(__dirname, '/spacecompany/index.html'))
                    }
                },
                {
                    label: 'SpaceCompany Source',
                    click() {
                        win.webContents.loadURL(`https://github.com/sparticle999/spacecompany`)
                    }
                }
            ]
        }, 
        {
            label: 'Help',
            submenu: [
                { 
                    label: 'How To Play', 
                    async click() {
                        win.webContents.send('saveTheGame')
                        win.loadFile(path.join(__dirname, '/spacecompany/game/help.html'))
                        win.webContents.send('helpPage')
                    } 
                },
                { 
                    label: 'Credits', 
                    click(){
                        win.webContents.send('saveTheGame')
                        win.loadFile(path.join(__dirname, '/spacecompany/game/credits.html'))
                        win.webContents.send('creditsPage')
                    }
                }
            ]
        }
    ]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    // and load the index.html of the app.
    win.loadFile(path.join(__dirname, '/spacecompany/index.html'));

    // Open the DevTools.
    win.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
