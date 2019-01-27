const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on("ready", function () {

  mainWindow = new BrowserWindow({
    resizable: true,
    width: 400,
    height: 800
  });

  var menu = Menu.buildFromTemplate([
    {
      label: "Fermer l'app", click() {
        app.quit()
      }
    }
  ])

  Menu.setApplicationMenu(menu);


  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "mainWindow.html"),
      protocol: "file:",
      slashes: true
    })
  );
});
