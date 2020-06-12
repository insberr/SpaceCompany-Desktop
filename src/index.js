const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const ipc = require('electron').ipcRenderer;


// The function to create the window.
const createWindow = () => {
    // Create the browser window.
    const win = new BrowserWindow({
        frame: false,
        width: 1250,
        height: 700,
        icon: path.join(__dirname, '/spacecompany/SpaceCompanyFavicon.png'),
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.once('ready-to-show', () => {
        win.show()
    })
    /*
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
    */
    // Menu Bar (system)
    // const menu = Menu.buildFromTemplate(template)
    // Menu.setApplicationMenu(menu)

    // Load the main menu
    // win.loadFile(path.join(__dirname, '/spacecompany/game/mainMenu/mainMenu.html'));
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