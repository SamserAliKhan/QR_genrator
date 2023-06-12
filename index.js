/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { url } from "inspector";


inquirer
    .prompt([
        {
        message: "Type the url: ",
        name: "url",
        },
        ])
    .then((answers) => {
        const URL = answers.url;
        var qr_svg = qr.image('URL', { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('qr_iamge.png'));      //creating the qr in the local
        fs.writeFile("URL.txt",URL ,(err) => {
            if(err) throw (err);   
            console.log("The file is saved");
        })     
        // Use user feedback for... whatever!!
    })
      .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment")
        } else {
            console.log("Something else went wrong")
        }
    });
   