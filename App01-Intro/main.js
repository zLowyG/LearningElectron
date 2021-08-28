const {app, BrowserWindow} = require('electron');
const path = require('path');

function CreateWindow() {
    let window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    window.loadFile('index.html');

}

app.whenReady().then(CreateWindow);

app.on('window-all-closed', function(){
    if (process.platform === "darwin") {
        app.quit();
    }
});

app.on('activate', function() {
    if (BrowserWindow.getAllWindows().length === 0) {
      CreateWindow();  
    }
});