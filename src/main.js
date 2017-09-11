import {
  app,
  BrowserWindow
} from 'electron';
import path from 'path';
import url from 'url';

const BUILDPATH = path.resolve(__dirname, '../build');

let win;

const createWindow = () => {
  win = new BrowserWindow({
    fullscreen: true
  });

  win.loadURL(url.format({
    pathname: `${BUILDPATH}/index.html`,
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow;
  }
});
