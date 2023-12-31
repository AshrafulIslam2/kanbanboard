import React from "react";

export const Task = ({
  taskdetails,
  handaleDragEnter,
  handaleDragEnd,
  ColumnID,
  handelDelete,
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
          stroke-width="1.5"
          stroke="red"
          className="w-3 h-3 cursor-pointer"
          onClick={() => handelDelete(taskdetails.id, ColumnID)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
      <div className="flex  text-[10px] text-slate-400 gap-4">
        <h1>{taskdetails.taskOwner}</h1>
        <h1>{taskdetails.date}</h1>
      </div>
    </div>
  );
};
