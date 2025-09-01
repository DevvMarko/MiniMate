import {app, BrowserWindow, Menu, Tray} from 'electron';
import process from 'process';
import path from 'path';


// ==== variables ====
let mainWindow;


// ==== functions ====
function createWindow() {
    mainWindow = new BrowserWindow({
        transparent: true,
        fullscreen: true,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(app.getAppPath(), 'src/electron/preload.js')
        },
        icon: path.join(app.getAppPath(), 'src/assets/app_logo.png')
    });
    
    if(process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:5173');
    }else{
        mainWindow.loadFile(path.join(app.getAppPath(), 'dist-react', 'index.html'));
    }

    // Make the window click-through and always on top
    mainWindow.setIgnoreMouseEvents(true, { forward: true });
    mainWindow.setAlwaysOnTop(true, 'screen-saver');
}

function optionsWindow() {
    const optionsWin = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(app.getAppPath(), 'src/electron/preload.js')
        },
        icon: path.join(app.getAppPath(), 'src/assets/app_logo.png')
    });
    optionsWin.loadFile(path.join(app.getAppPath(), 'options.html'));
}


// ==== APP READY ====
app.whenReady().then(() => {
    createWindow();

    const tray = new Tray(path.join(app.getAppPath(), 'src/assets/app_logo.png'));

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Options', click: () => optionsWindow() },
        { label: 'Quit', role: 'quit' }
    ]);
    tray.setContextMenu(contextMenu);
    tray.setToolTip('MiniMate');
});
