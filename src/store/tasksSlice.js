// // // store/tasksSlice.js
// // import { createSlice } from '@reduxjs/toolkit';

// // const tasksSlice = createSlice({
// //   name: 'tasks',
// //   initialState: {},
// //   reducers: {
// //     addTask: (state, action) => {
// //       const { username, task } = action.payload;
// //       if (!state[username]) {
// //         state[username] = [];
// //       }
// //       state[username].push(task);
// //     },
// //     getTasks: (state, action) => {
// //       return state[action.payload] || [];
// //     },
// //   },
// // });

// // export const { addTask, getTasks } = tasksSlice.actions;
// // export default tasksSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const tasksSlice = createSlice({
//     name: 'tasks',
//     initialState: {},
//     reducers: {
//         addTask(state, action) {
//             const { username, task } = action.payload;
//             if (!state[username]) {
//                 state[username] = [];
//             }
//             state[username].push(task);
//         },
//         // You can add more reducers to handle other actions like removing tasks, marking them as read, etc.
//     },
// });

// export const { addTask } = tasksSlice.actions;
// export default tasksSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [], // Initialize with an empty array or fetch initial tasks
    filter: 'All',
  },
  reducers: {
    fetchTasks: (state) => {
      // Logic to fetch tasks from an API or another source
      // For example, you can replace this with fetched tasks
      state.tasks = [
        { id: 1, category: 'WhatsApp', text: 'Your WhatsApp task has passed.', url: '/whatsapp-automation', read: false },
        // Add more tasks if needed
      ];
    },
    updateTaskReadStatus: (state, action) => {
      const taskIndex = action.payload;
      if (state.tasks[taskIndex]) {
        state.tasks[taskIndex].read = true; // Mark the task as read
      }
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload); // Add a new task
    },
    setFilter: (state, action) => {
      state.filter = action.payload; // Set the filter
    },
  },
});

// Export actions
export const { fetchTasks, updateTaskReadStatus, addTask, setFilter } = taskSlice.actions;

// Export the reducer
export default taskSlice.reducer;
