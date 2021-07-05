export const formatAllTaskToProps = tasks => Object.values(tasks);

export const formatCompletedTaskToProps = tasks =>
  formatAllTaskToProps(tasks).filter(task => task.completed);

export const formatUncompletedTaskToProps = tasks =>
  formatAllTaskToProps(tasks).filter(task => !task.completed);
