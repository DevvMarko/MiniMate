const {ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    setClickable: (isClickable) => ipcRenderer.send('set-clickable', isClickable)
});