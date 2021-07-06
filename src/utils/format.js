export const formatAllTaskToProps = tasks =>
  [...Object.values(tasks)].sort((a, b) => b.createAt - a.createAt);

export const formatCompletedTaskToProps = tasks =>
  formatAllTaskToProps(tasks).filter(task => task.completed);

export const formatUncompletedTaskToProps = tasks =>
  formatAllTaskToProps(tasks).filter(task => !task.completed);
