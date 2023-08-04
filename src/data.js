const kanban_board_data = {
  tasks: {
    "task-1": {
      id: "task-1",
      taskName: "Hero Banner",
      date: "10/11/2023",
      taskOwner: "Ashraful Islam",
      AddFlag: [],
    },
    "task-2": {
      id: "task-2",
      taskName: "Flash Sales",
      date: "14/13/2023",
      taskOwner: "Masira Masum",
      AddFlag: [],
    },
    "task-3": {
      id: "task-3",
      taskName: "Top Sales",
      date: "16/13/2023",
      taskOwner: "Rasel Chowdury",
      AddFlag: [],
    },
    "task-4": {
      id: "task-4",
      taskName: "Best Products",
      date: "19/13/2023",
      taskOwner: "Ashraful Islam",
      AddFlag: [],
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "On Progress",
      taskIds: ["task-3", "task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "Complete",
      taskIds: ["task-1", "task-2"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default kanban_board_data;
