import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');

  const addNote = () => {
    if (text.trim() !== '') {
      setNotes([...notes, text]);
      setText('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Notes App</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Write your note here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
