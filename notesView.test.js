/**
 * @jest-environment jsdom
 */

const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

const fs = require('fs');
const { isTypedArray } = require('util/types');
const { hasUncaughtExceptionCaptureCallback } = require('process');

describe('NotesView',() => {
    it('checks that there are 2 notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const note = new NotesModel;
        note.addNote('note 1');
        note.addNote('note 2');
        const view = new NotesView(note);
        view.displayNotes();
        expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
});