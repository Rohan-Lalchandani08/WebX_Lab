import React from 'react';

const Note = React.memo(({ note, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-yellow-100 p-3 my-2 rounded-md shadow">
      <span>{note.text}</span>
      <button
        onClick={() => onDelete(note.id)}
        aria-label={`Delete note: ${note.text}`}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        ✖
      </button>
    </div>
  );
});

export default Note;
