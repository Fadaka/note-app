const NotesModel = require('./notesModel')

class NotesView {
    constructor(model){
        this.model = model
        this.mainContainerEl = document.querySelector('#main-container');

        document.querySelector('#add-note-btn').addEventListener('click', () => {
            const newNote = document.querySelector('#note-input').value;
            this.addNewNote(newNote);
        });
    }

    displayNotes(newNote){

        document.querySelectorAll('.note').forEach(element => {
            element.remove();
        });

            const notes = this.model.getNotes();


            notes.forEach(note => {
            const noteEl = document.createElement("div")
            noteEl.innerText = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl);
            console.log('note has been added');
        });
         };

    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes(newNote);
        }
    };

module.exports = NotesView;