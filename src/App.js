import React, { useState } from "react";
import kanban_board_data from "./data.js";
import Columns from "./components/Columns.js";
function App() {
  const [kanbanBoardTask, setkanbanBoardTask] = useState(kanban_board_data);
  const [TargetCard, setTargetCard] = useState();
  const [Board, SetBorad] = useState();

  const handaleDragEnd = (taskid, columnID) => {
    setTargetCard({ targetTask: taskid, BordName: columnID });

    const sourceColumn = kanbanBoardTask.columns[columnID];
    sourceColumn.taskIds = sourceColumn.taskIds.filter((tid) => tid !== taskid);

    const targetColumn = kanbanBoardTask.columns[TargetCard.BordName];
    const targetIndex = targetColumn.taskIds.indexOf(TargetCard.targetTask);

    if (targetIndex === -1) {
      kanbanBoardTask.columns[Board].taskIds.push(taskid);
    } else {
      targetColumn.taskIds.splice(targetIndex + 1, 0, taskid);
    }
    setkanbanBoardTask({ ...kanbanBoardTask });
  };

  const handaleDragEnter = (taskid, columnID) => {
    setTargetCard({ targetTask: taskid, BordName: columnID });
  };
  const handelDragEnterForColumn = (columnID) => {
    SetBorad(columnID);
  };
  const handelDelete = (taskid, columnID) => {
    const updatedKanbanBoardTask = { ...kanbanBoardTask };

    const sourceColumn = updatedKanbanBoardTask.columns[columnID];
    sourceColumn.taskIds = sourceColumn.taskIds.filter((tid) => tid !== taskid);

    setkanbanBoardTask(updatedKanbanBoardTask);
  };

  return (
    <div className="max-w-[1120px] mx-auto">
      <h1 className="text-center bg-lime-600 py-3  rounded-md text-white font-bold">
        KABAN BOARD
      </h1>
      <div className={`grid grid-cols-3 gap-10`}>
        {kanbanBoardTask
          ? kanbanBoardTask.columnOrder.map((columnID, Index) => (
              <Columns
                Column={kanbanBoardTask.columns[columnID]}
                Index={Index}
                key={Index}
                setkanbanBoardTask={setkanbanBoardTask}
                handelDragEnterForColumn={handelDragEnterForColumn}
                handaleDragEnd={handaleDragEnd}
                handaleDragEnter={handaleDragEnter}
                kanbanBoardTask={kanbanBoardTask}
                handelDelete={handelDelete}
              />
            ))
          : "no column"}
      </div>
    </div>
  );
}

export default App;
