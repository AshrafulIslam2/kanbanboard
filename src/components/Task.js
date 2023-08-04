import React from "react";

export const Task = ({
  taskdetails,
  Index,
  handaleDragEnter,
  handaleDragEnd,
  ColumnID,
}) => {
  return (
    <div
      className="mx-4 bg-white my-4 py-2 px-2 rounded-md cursor-pointer"
      draggable
      onDragEnter={() => handaleDragEnter(taskdetails.id, ColumnID)}
      onDragEnd={() => handaleDragEnd(taskdetails.id, ColumnID)}
    >
      <div className="flex justify-between">
        <h1 className="text-[14px] font-semibold">{taskdetails.taskName}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        ></svg>
      </div>
      <div className="flex  text-[10px] text-slate-400 gap-4">
        <h1>{taskdetails.taskOwner}</h1>
        <h1>{taskdetails.date}</h1>
      </div>
    </div>
  );
};
