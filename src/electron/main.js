import {app, BrowserWindow, ipcMain} from 'electron';
import process from 'process';
import path from 'path';

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        transparent: true,
        fullscreen: true,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(app.getAppPath(), 'src/electron/preload.js')
        }
    });
    
    // mainWindow.setIgnoreMouseEvents(true);
    if(process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:5173');
    }else{
        mainWindow.loadFile(path.join(app.getAppPath(), 'dist-react', 'index.html'));
    }
    mainWindow.webContents.openDevTools();

}
app.whenReady().then(createWindow)

ipcMain.on("set-clickable", (event, isClickable) => {
    mainWindow.setIgnoreMouseEvents(!isClickable, { forward: true });
  });