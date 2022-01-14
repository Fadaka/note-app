/**
 * @jest-environment jsdom
 */

const NotesModel = require('../notesModel')
const NotesView = require('../notesView')

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

    it('adds a new note',() => {
        document.body.innerHTML = fs.readFileSync('./index.html')
        
        const model = new NotesModel(); 
        const view = new NotesView(model);
        const input = document.querySelector('#add-note-input');
        model.addNote('My new amazing test note');

        const button = document.querySelector('#add-note-btn');
        button.click();

        expect(document.querySelectorAll('div.note').length).toEqual(2);
        expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');
    })

    it('clear the list of previous notes before displaying', () =>{
        document.body.innerHTML = fs.readFileSync('./index.html')

        const new_model = new NotesModel();
        const view = new NotesView(new_model);

        new_model.addNote('one');
        new_model.addNote('one');

        view.displayNotes();
        view.displayNotes();

        expect(document.querySelectorAll('div.note').length).toEqual(2);
    })
});