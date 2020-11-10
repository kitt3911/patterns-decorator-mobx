import {observable,action} from 'mobx'
import { getNotes, postNotes } from './api';

export class NotesStore{
    @observable notes: string[] = [];

    @action loadNotes = () => {
        getNotes().then(notes => this.notes = notes)
    }

    saveNotes =()=> {
        postNotes(this.notes)
    }

    @action
    addNote = (note:string) => {
        this.notes.push(note);

    }
}