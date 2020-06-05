var chalk = require("chalk");
var yargs = require("yargs")
var notes = require('./notes.js');


//customize yargs version
yargs.version("1.1.0")


//add, remove, read, list

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
    }
})




//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNotes(argv.title)
    }
})




yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: () => {
        notes.listNotes()
    }
})



yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNotes(argv.title)
    }
})


yargs.parse();



