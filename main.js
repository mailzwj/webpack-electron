const { app, BrowserWindow } = require('electron');

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });

    const indexPageURL = `file://${__dirname}/dist/index.html`;
    win.loadURL(indexPageURL);

    win.on('closed', () => {
        win = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (!win) {
        createWindow();
    }
});
