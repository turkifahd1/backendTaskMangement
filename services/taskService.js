const prisma = require('../prisma/prisma');

const createTask = async (title, description,dayOfWeek ,userId) => {
  const newTask = await prisma.task.create({
    data: { title, description,dayOfWeek, userId }
  });
  return newTask;
};

const updateTask = async (id, data) => {
  const updatedTask = await prisma.task.update({
    where: { id },
    data
  });
  return updatedTask;
};

const deleteTask = async (id) => {
  await prisma.task.delete({
    where: { id }
  });
};

const getTasks = async (userId) => {
  const tasks = await prisma.task.findMany({
    where: { userId }
  });
  return tasks;
};

module.exports = { createTask, updateTask, deleteTask, getTasks };
