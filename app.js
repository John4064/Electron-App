const fs = require("fs");

//a dialog box module from electron
const { dialog } = require("electron").remote;
document.getElementById("mybutton").addEventListener("click", () => {
    const data = "Successfully wrote to the desktop"; // the data we want to save to the desktop
    dialog.showSaveDialog(filename => {
        fs.writeFileSync(filename + ".txt", data, "utf-8", () => {
            console.log("attempted to write to the desktop");
        });
    });
});