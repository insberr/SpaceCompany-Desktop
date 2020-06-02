const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');


// The function to create the window.
const createWindow = () => {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1250,
        height: 700,
        icon: path.join(__dirname, '/spacecompany/SpaceCompanyFavicon.png'),
        show: false,
        backgroundColor: '#222222',
        frameColor: '#222222',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.once('ready-to-show', () => {
        win.show()
    })
    
    const template = [
        {
            label: 'Home',
            click() {
                win.webContents.loadFile(path.join(__dirname, '/spacecompany/index.html'))
            }
        },
        {
            label: 'Window',
            submenu: [
                { role: 'reload' },
                { role: 'toggledevtools' },
                { role: 'toggleFullscreen' },
                { role: 'quit' }
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
                    label: 'Settings',
                    click() {
                        const settingsWindow = new BrowserWindow({ parent: win })
                        settingsWindow.setMenuBarVisibility(false)
                        settingsWindow.loadFile(path.join(__dirname, '/spacecompany/game/settings.html'))
                    }
                },
                {
                    label: 'Load From Data',
                    click() {
                        win.webContents.send('loadFromData')
                    }
                },
                {
                    type: 'separator'
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
                        const helpWindow = new BrowserWindow({ parent: win })
                        helpWindow.setMenuBarVisibility(false)
                        helpWindow.loadFile(path.join(__dirname, '/spacecompany/game/help.html'))
                    } 
                },
                { 
                    label: 'Credits', 
                    click(){   
                        win.webContents.send('saveTheGame')
                        const creditsWindow = new BrowserWindow({ 
                            frame: false,
                            parent: win,
                            width: 1250,
                            height: 700,
                            icon: path.join(__dirname, '/spacecompany/SpaceCompanyFavicon.png'),
                            backgroundColor: '#222222',
                            webPreferences: {
                                nodeIntegration: true,
                                enableRemoteModule: true
                            }
                        })
                        // creditsWindow.setMenuBarVisibility(false)
                        creditsWindow.loadFile(path.join(__dirname, '/spacecompany/game/credits.html'))
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
    // win.webContents.openDevTools();
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

app.on('creditsWindowClose', function(event) {
    creditsWindow.quit()
});