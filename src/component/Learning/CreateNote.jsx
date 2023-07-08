"use client"; //
export const CreateNote = ({ createNewNote }) => {
  return (
    <div 
      onClick={() => createNewNote()}
      className="w-fit bg-red-400 text-white p-2 rounded"
    >
      CreateNote cek 123
    </div>
  );
};
