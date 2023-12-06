export const createTaskObject = task => {
  const id = String(Math.floor(Math.random() * 1000000));
  return {
    id,
    task: task,
    done: false,
  };
};
