function filterData(arr, query) {
  return arr.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}

function filterTaskByDate(arr) {
  const filteredArr = arr
    .filter((item) => item.task)
    .map((item) => ({
      date: item.date,
      userTime: item.time,
      comment: item.comment,
      ...item.task,
    }));

  const taskByDate = {};

  filteredArr.forEach((task) => {
    if (task.date in taskByDate) {
      taskByDate[task.date].push(task);
    } else {
      taskByDate[task.date] = [task];
    }
  });

  return taskByDate;
}

export { filterData, filterTaskByDate };
