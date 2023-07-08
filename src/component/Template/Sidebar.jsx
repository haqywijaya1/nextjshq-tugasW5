"use client"; //

import { Book } from "lucide-react";
import { useState } from "react";
import { ReactSpoiler } from 'react-simple-spoiler';


export const Sidebar = ({ onNewNotes }) => {
  const [onAddMode, setOnAddMode] = useState(false);

  return (
    <aside className="w-[90px] border-r-2 bg-red flex flex-col items-center p-8 space-y-8">
      <div className="font-bold">Mie</div>
      <div>
      <ReactSpoiler
    noOfLines={2}
    lineHeight={22.72}
    showMoreComponent={<p>click this + book to activate</p>}
    showLessComponent={<p>Click to deactivate</p>}
    toggleContainerStyle = {{ marginTop: '1rem', color: 'green' }}
    collapsedSize={1}                           
>
<div
          onClick={() => setOnAddMode(!onAddMode)}
          className="w-8 h-8 bg-slate-950 text-slate-400 hover:text-slate-100 transition duration-300 rounded-full flex justify-center items-center cursor-pointer"
        >
          <Book
            className={
              onAddMode
                ? "rotate-45 transition duration-300"
                : "rotate-0  transition duration-300"
            }
          />
        </div>
<div className="flex flex-col items-center space-y-4">
          <div
            //Props berbentuk function yang di pass ke parent (DashboarTemplate.jsx)
            onClick={() => onNewNotes("#facc15")}
            className={
              onAddMode
                ? "bg-yellow-400 w-5 h-5 rounded-full translate-y-4 transition duration-300 cursor-pointer"
                : "bg-yellow-400 w-5 h-5 rounded-full -translate-y-6 -z-10 transition duration-300 cursor-pointer"
            }
          ></div>
          <div
            onClick={() => onNewNotes("#fb7185")}
            className={
              onAddMode
                ? "bg-rose-400 w-5 h-5 rounded-full translate-y-4 transition duration-300 cursor-pointer"
                : "bg-rose-400 w-5 h-5 rounded-full -translate-y-16 -z-10 transition duration-300 cursor-pointer"
            }
          ></div>
          <div
            onClick={() => onNewNotes("#003399")} //dark powder blue color for new notes
            className={
              onAddMode
                ? "bg-blue-600 w-5 h-5 rounded-full translate-y-4 transition duration-300 cursor-pointer"
                : "bg-blue-600 w-5 h-5 rounded-full -translate-y-16 -z-10 transition duration-300 cursor-pointer"
            }
          ></div>
          <div
            onClick={() => onNewNotes("#79443b")} //bole color for new notes
            className={
              onAddMode
                ? "bg-amber-900 w-5 h-5 rounded-full translate-y-4 transition duration-300 cursor-pointer"
                : "bg-amber-900 w-5 h-5 rounded-full -translate-y-16 -z-10 transition duration-300 cursor-pointer"
            }
          ></div>
          <div
            onClick={() => onNewNotes("#5d8aa8")} //Air force blue color for new notes
            className={
              onAddMode
                ? "bg-cyan-800 w-5 h-5 rounded-full translate-y-4 transition duration-300 cursor-pointer"
                : "bg-cyan-800 w-5 h-5 rounded-full -translate-y-16 -z-10 transition duration-300 cursor-pointer"
            }
          ></div>
        </div>
        
</ReactSpoiler>
</div>
      
    </aside>
    );
};