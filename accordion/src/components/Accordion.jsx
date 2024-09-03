import React, { useState } from "react";
import data from "../utils/mockData";

const Accordion = () => {
  const [select, setSelect] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  const handleSingle = (id) => {
    setSelect(id === select ? null : id);
  };

  const handleMultiSelection = (id) => {
    let copyMultiple = [...multiSelect];
    const findIndexOfCurrentId = copyMultiple.indexOf(id);
    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(id);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiSelect(copyMultiple);
  };

  console.log(select, multiSelect);

  return (
    <div className="bg-gray-400 w-[80%] h-[80vh] m-20 rounded-xl p-4 flex-col ">
      <h2 className="text-black font-extrabold text-4xl text-center m-4">
        Accordion
      </h2>
      <div className="flex justify-center">
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className="bg-black text-white p-4 rounded-2xl cursor-pointer">
          Enable Multi Selection
        </button>
      </div>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingle(item.id)
                }
                className="m-10 flex justify-between cursor-pointer text-xl font-bold ">
                <h3 className="text-white">{item.question}</h3>
                <span className="white">+</span>
              </div>
              {/* {
                enableMultiSelection ? 
                multiSelect.indexOf(item.id) !== -1 && 
                <h3 className="m-10 text-center text-white">{item.answer}</h3>
                : select === item.id && <h3 className="m-10 text-center text-white">{item.answer}</h3>
              } */}
              {select === item.id || multiSelect.indexOf(item.id) !== -1 ? (
                <h3 className="m-10 text-center text-white">{item.answer}</h3>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
