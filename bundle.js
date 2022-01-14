(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor(note) {
          this.note = [];
        }
        getNotes() {
          return this.note;
        }
        addNote(note) {
          this.note.push(note);
        }
        reset() {
          this.note.length = 0;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesView2 = class {
        constructor(model) {
          this.model = model;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#add-note-btn").addEventListener("click", () => {
            const newNote2 = document.querySelector("#note-input").value;
            this.addNewNote(newNote2);
          });
        }
        displayNotes(newNote2) {
          document.querySelectorAll(".note").forEach((element) => {
            element.remove();
          });
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
            console.log("note has been added");
          });
        }
        addNewNote(newNote2) {
          this.model.addNote(newNote2);
          this.displayNotes(newNote2);
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  console.log("The notes app is running!");
  var newNote = new NotesModel();
  console.log(newNote.getNotes());
  var newView = new NotesView(newNote);
  newView.displayNotes();
})();
