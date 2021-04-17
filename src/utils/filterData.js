function filterData(arr, query) {
  return arr.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}

function filterSort(arr) {
  for(var i=0; i<arr.length; i++){
    for(var j=i+1;  j<arr.length; j++){
      if(arr[i].name.toLowerCase()>arr[j].name.toLowerCase()){
        var g=arr[j];
        var h=arr[i];
        arr[j]=h;
        arr[i]=g;
      }
    }
  }
  return arr;
}

function filterSortReverse(arr) {
  for(var i=0; i<arr.length; i++){
    for(var j=i+1;  j<arr.length; j++){
      if(arr[i].name.toLowerCase()<arr[j].name.toLowerCase()){
        var g=arr[j];
        var h=arr[i];
        arr[j]=h;
        arr[i]=g;
      }
    }
  }
  return arr;
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

export { filterData, filterTaskByDate, filterSort, filterSortReverse };
