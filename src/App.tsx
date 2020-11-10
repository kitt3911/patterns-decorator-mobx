import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useObserver } from 'mobx-react-lite';
import { NewNoteInput } from './newNoteInput';
import { useRootStore } from './store/rootStateContext';

function App() {

  const {notesStore} = useRootStore()

  return useObserver (()=>(


    <>
      <NewNoteInput addNote={notesStore.addNote}/>
      <hr/>
      <ul>{
       notesStore.notes.map(note =>(
          <li key={note}>{note}</li>
        ))
       }
      </ul>
      <hr/>
      <button onClick={()=>{
        notesStore.saveNotes()
      }}>Save</button>
      <button onClick={()=>{
        notesStore.loadNotes()
      }}>Load</button>
    </>
    )
  );
}

export default App;
