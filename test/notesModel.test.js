const NotesModel = require('../notesModel');
const notes = new NotesModel();

describe('NotesModel', () => {
    it('should return an empty note list ', () => {
        notes.getNotes();
        expect(notes.getNotes()).toEqual([])
    });

    it('should be able to add a note to the list', () => {
        notes.addNote('Hello');
        notes.addNote('new ideas');
        expect(notes.getNotes()).toEqual(['Hello','new ideas'])
    })

    it ('should be abble to reset a note list', () => {
        notes.reset();
        expect(notes.getNotes()).toEqual([])
    })
});
