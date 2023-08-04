import React, { useState } from "react";
import kanban_board_data from "./data.js";
import Columns from "./components/Columns.js";
function App() {
  const [kanbanBoardTask, setkanbanBoardTask] = useState(kanban_board_data);
  const [TargetCard, setTargetCard] = useState();

  // const [TargetColumn, setColumn] = useState();

  const handaleDragEnd = (taskid, columnID) => {
    setTargetCard({ targetTask: taskid, BordName: columnID });
    const RemoveTaskID = kanbanBoardTask.columns[columnID].taskIds.filter(
      (tid) => tid !== taskid
    );
    kanbanBoardTask.columns[columnID].taskIds = RemoveTaskID;

    const Index = kanbanBoardTask.columns[TargetCard.BordName].taskIds.indexOf(
      TargetCard.targetTask
    );

    kanbanBoardTask.columns[TargetCard.BordName].taskIds.splice(
      Index + 1,
      0,
      taskid
    );
  };

  const handaleDragEnter = (taskid, columnID) => {
    setTargetCard({ targetTask: taskid, BordName: columnID });
  };

  return (
    <div className="max-w-[1120px] mx-auto">
      <div className={`grid grid-cols-4 gap-10`}>
        {kanbanBoardTask
          ? kanbanBoardTask.columnOrder.map((columnID, Index) => (
              <Columns
                Column={kanbanBoardTask.columns[columnID]}
                Index={Index}
                key={Index}
                handaleDragEnd={handaleDragEnd}
                handaleDragEnter={handaleDragEnter}
                kanbanBoardTask={kanbanBoardTask}
              />
            ))
          : "no column"}
      </div>
    </div>
  );
}

export default App;
