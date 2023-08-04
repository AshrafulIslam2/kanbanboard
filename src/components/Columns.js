import React from "react";
import { Task } from "./Task";

const Columns = ({
  Column,
  kanbanBoardTask,
  handaleDragEnter,
  handaleDragEnd,
}) => {
  return (
    <div key={Column.title} className=" bg-slate-200 my-10 rounded-md">
      <div className="relative">
        <h1
          className={`${
            Column.title === "To Do" &&
            "bg-blue-400 hover:bg-blue-500 transition-colors ease-in-out duration-300"
          }
                  ${
                    Column.title === "On Progress" &&
                    "bg-pink-300 hover:bg-pink-500 hover:transition-colors ease-in-out duration-300"
                  }
                  ${
                    Column.title === "On Review" &&
                    "bg-rose-400 hover:bg-rose-500 transition-colors ease-in-out duration-300"
                  } 
                  ${
                    Column.title === "Complete" &&
                    "bg-lime-400 hover:bg-lime-500 transition-colors ease-in-out duration-300"
                  } 
         text-lg font-medium font-mono text-center text-white rounded-md py-1 flex-grow`}
        >
          {Column.title}
        </h1>
        {Column.title === "To Do" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6 absolute top-[8px] right-[8px]"
          >
            <path
              strokeWidth="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </div>

      <div>
        {Column.taskIds
          ? Column.taskIds.map((taskid, Index) => (
              <Task
                key={Index + "1"}
                Index={Index}
                ColumnID={Column.id}
                handaleDragEnter={handaleDragEnter}
                handaleDragEnd={handaleDragEnd}
                taskdetails={kanbanBoardTask.tasks[taskid]}
              />
            ))
          : "no task found"}
      </div>
    </div>
  );
};

export default Columns;
