const { app, BrowserWindow } = require('electron')



function createWindow () {
  
  const win = new BrowserWindow({
    width: 800,
    height: 700,
    icon: __dirname + "/icon.png",
    webPreferences: {
      nodeIntegration: false
    }
     
  } )

  win.loadFile('index.html')

  win.setMenu(null)

}

app.whenReady().then(createWindow) 

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})