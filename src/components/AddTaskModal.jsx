import React from "react";
export const AddTaskModal = ({
  kanbanBoardTask,
  setkanbanBoardTask,
  setToogle,
}) => {
  const generateTaskId = () => {
    // Generate a random task ID (you can use a more robust method in production)
    return "task-" + Math.floor(Math.random() * 1000);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const titleInput = event.target.elements.title;
    const titleValue = titleInput.value;
    const nameInput = event.target.elements.name;
    const nameValue = nameInput.value;
    const dateInput = event.target.elements.date;
    const dateValue = dateInput.value;
    console.log(titleValue, nameValue, dateValue);
    // Generate a new task ID
    const taskId = generateTaskId();

    // Create the new task object
    const newTask = {
      id: taskId,
      taskName: titleValue,
      date: dateValue,
      taskOwner: nameValue,
      AddFlag: [],
    };
    const updatedKanbanBoardTask = { ...kanbanBoardTask };

    // Add the new task to the kanban_board_data.tasks object
    kanbanBoardTask.tasks[taskId] = newTask;
    kanbanBoardTask.columns["column-1"].taskIds.push(taskId);
    setkanbanBoardTask(updatedKanbanBoardTask);

    console.log(kanbanBoardTask);
  };
  return (
    <div>
      <form className="w-full max-w-lg relative z-30" onSubmit={handleSubmit}>
        <div className="">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="title"
            >
              Title
            </label>
            <input
              className=" block w-full bg-white text-gray-700 border border-blue-300 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-slate-400 placeholder:text-xs"
              id="title"
              type="text"
              name="title"
              placeholder="Enter your title"
            />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="addpeople"
            >
              Add People
            </label>
            <input
              className=" block w-full bg-white text-gray-700 border border-blue-300 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-slate-400 placeholder:text-xs"
              id="addpeople"
              type="text"
              name="name"
              placeholder="Ex:Ashraful Islam"
            />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="date"
            >
              Due Date
            </label>
            <input
              className=" block w-full bg-white text-gray-700 border border-blue-300 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-slate-400 placeholder:text-xs"
              id="date"
              type="date"
              name="date"
              placeholder="Ex:12/10/2023"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-400 px-3 rounded-md text-xs py-1 font-medium text-white  border border-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
