const superbowlWin = array => {
  let record = array.find(record => record.result === 'W');
  return !!record ? record.year : undefined;
};