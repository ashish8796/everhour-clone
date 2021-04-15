function filterData(arr, query) {
  return arr.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}

function filterTask(arr) {
  const filteredArr = arr
    .filter((time) => time.task)
    .map((time) => ({
      date: time.date,
      ...time.task,
    }));

  const taskByDate = {};

  filteredArr.forEach((task) => {
    // console.log(taskByDate);
    // taskByDate[task.date] =
    //   taskByDate[task.date] == undefined
    //     ? [task]
    //     : taskByDate[task.date].push(task);
  });

  return taskByDate;
}

export { filterData, filterTask };
