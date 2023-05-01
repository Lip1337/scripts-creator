const readline = require("readline")
const fs = require("fs")

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var questions = [
    "Name: ",
    "UI (true or false):",
    "ESX (true or false):"
]

var answers = []

function quest(i) {
    r1.question(questions[i], (answer) => {
        answers.push(answer)
        if (i + 1 < questions.length) {
            quest(i + 1)
        } else {
            console.log("Script wird erstellt")
            createScript()
        }
    })
}

function createScript() {
    var scriptname = answers[0] 
    var additional = ""
    fs.mkdirSync("./scripts/" + scriptname)
    if (answers[1] == "true") {
        additional = additional + "\nui_page 'html/index.html' \nfiles {'html/index.html', 'html/style.css', 'html/index.js'}"
        fs.mkdirSync("./scripts/" + scriptname + "/html/")
        fs.writeFile("./scripts/" + scriptname + "/html/index.html", `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    </head>
    <body>
        <script src="index.js"></script>
    </body>
</html>`, function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log("index.html created")
            }
        })
        fs.writeFile("./scripts/" + scriptname + "/html/style.css", "", function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log("index.html created")
            }
        })
        fs.writeFile("./scripts/" + scriptname + "/html/index.js", "", function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log("index.html created")
            }
        })
    }
    if (answers[2] == "true") {
        additional = additional + "\nshared_script '@es_extended/imports.lua'"
    }
    fs.writeFile("./scripts/" + scriptname + "/fxmanifest.lua", "fx_version 'cerulean' \ngame 'gta5'\n\nclient_script 'client.lua'\n\nserver_script 'server.lua'" + additional, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Fxmanifest created")
        }
    })
    fs.writeFile("./scripts/" + scriptname + "/client.lua", "", function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Client created")
        }
    })
    fs.writeFile("./scripts/" + scriptname + "/server.lua", "", function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Server created")
        }
    })
    r1.close()
}

quest(0)