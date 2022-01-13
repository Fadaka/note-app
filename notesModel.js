
class NotesModel{
    constructor(note){
        this.note = [];
    }
        getNotes() {
            return this.note
        }
        
        addNote(note) {
            this.note.push(note)
        }


        reset(){
            this.note.length = 0
        }
    
};

module.exports = NotesModel;
