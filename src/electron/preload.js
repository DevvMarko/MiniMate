/* global require */

const {ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendPetPosition: (position) => ipcRenderer.send('pet-position', position),
    sendMousePosition: (mousePosition) => ipcRenderer.send('mouse-position', mousePosition)
});