"use client"; //

import { useState } from "react";
import { CreateNote } from "./CreateNote";

export const Notelist = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addData = () => {
    const newArray = [...array];
    newArray.push(100);
    setArray(newArray);
  };

  return (
    <div>
      <div>
        <div >Komponent Note list</div>
        <div>
          {array.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
      </div>
      <CreateNote createNewNote={addData} />
    </div>
  );
};