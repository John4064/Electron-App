const { app, BrowserWindow } = require('electron');
const path = require('path')


function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
}

//When the app is ready, then, it will execute the function createWindow
app.whenReady().then(() => {
    createWindow()
});
// Quit when all windows are closed.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});