var fs = require("fs")
var chalk = require("chalk")



//add note function

var addNotes = (title, body) => {
    var notes = loadNotes()
    var duplicateNote = notes.find((note) => note.title === title)
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes);
        console.log(chalk.green.inverse("new note added"))
    } else {
        console.log(chalk.red.inverse("note title taken"))
    }
}





//remove note function

var removeNotes = (title) => {
    var notes = loadNotes();
   

    var matchNote = notes.filter((note) => {
        return note.title !== title
    })

   saveNotes(matchNote)

   if (matchNote.length === notes.length) {
       console.log(chalk.red.inverse("that note doesnt exist"))
   } else {
       console.log(chalk.green.inverse("note removed"))
   }



}




// save note function

var saveNotes = (notes) => {
    var dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}



var listNotes = () => {
    console.log(chalk.green.inverse("your notes:"))
    var notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    })
}






var readNotes = (title) => {
    var notes = loadNotes();
    var duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        console.log(chalk.red.inverse("no note found"))
    } else {
        console.log(chalk.white.inverse(duplicateNote.title))
        console.log(duplicateNote.body)
    }

}
    
  







// load note function

var loadNotes = () => {
    try {
        var dataBuffer = fs.readFileSync('notes.json')
        var dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }


   
}



module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}
