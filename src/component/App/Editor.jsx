"use client"; //

import { useState, useEffect } from "react";

import { DashboardTemplate } from "../Template/DashboardTemplate";
import { Note } from "./Note";
import { notes } from "@/lib/dummy/notes";

export const Editor = () => {
  const [notesData, setNotesData] = useState(notes);
  const [searchText, setSearchText] = useState("");

  const createNote = (color) => {
    const newNotesData = [...notesData];
    const notesLength = newNotesData.length;
    newNotesData.push({
      id: notesLength + 1,
      body: "Note baru",
      color: color,
    });
    setNotesData(newNotesData);
    localStorage.setItem("notes", JSON.stringify(newNotesData));
    console.log(newNotesData)
    
  };
  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) {
      const jsonData = JSON.parse(data);
      setNotesData(jsonData);
    }
  }, []);
  return (
    <DashboardTemplate
      onNewNotes={(color) => createNote(color)}
      onSearchChange={(text) => setSearchText(text)}
      
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notesData
          .filter((item) => {
            const body = item.body.toLocaleLowerCase();
            const search = searchText.toLocaleLowerCase();
            return body.includes(search);
            
          })
          .map(({ id, body, color }) => {
            return <Note key={id} body={body} color={color} />;
            
          })}
          
      </div>
      
      
    </DashboardTemplate>
    
  );
  
};