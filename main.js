const { app, BrowserWindow } = require('electron');
const path = require('path');
const directory = "J:\\Workspace\\Web Development\\melon\\main\\Electron-App\\backend\\dist\\app\\app.exe";

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        //frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('src/index.html');
    //THIS initalizes the flask exe for app
    var subpy = require('child_process').spawn(directory)
}
app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {0
        app.quit()
    }

})
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})