/*
- Web Storage API, specifically localStorage and sessionStorage, stores data as strings.
  To store and retrieve complex data types like objects, JSON is often used.
- JSON (JavaScript Object Notation) is a common and convenient format for representing
  complex data structures in a string form
*/

export default class Storage {
  // ProjectContainer CRUD
  static saveProjectContainer(data) {
    localStorage.setItem('projectContainer', JSON.stringify(data)) // JSON = JSON.stringify(Js object)
  }

  static getProjectContainer() {
    const projectContainer = JSON.parse(localStorage.getItem('projectContainer'));
    return projectContainer
  }

  static addProject(project) {
    const projectContainer = Storage.getProjectContainer()
    projectContainer.addProject(project)
    Storage.saveProjectContainer(projectContainer)
  }

  static deleteProject(projectName) {
    const projectContainer = Storage.getProjectContainer()
    projectContainer.deleteProject(projectName)
    Storage.saveProjectContainer(projectContainer)
  }

  static updateTodayProject() {
    const projectContainer = Storage.getProjectContainer()
    projectContainer.updateTodayProject()
    Storage.saveProjectContainer(projectContainer)
  }

  static updateNext7DayProject() {
    const projectContainer = Storage.getProjectContainer()
    projectContainer.updateNext7DayProject()
    Storage.saveProjectContainer(projectContainer)
  }

  // Project CRUD
  static addTask(projectName, task) {
    const projectContainer = Storage.getProjectContainer()
    projectContainer.getProject(projectName).addTask(task)
    Storage.saveProjectContainer(projectContainer)
  }

  static deleteTask(projectName, taskName) {
    const projectContainer = Storage.getProjectContainer()
    projectContainer.getProject(projectName).deleteTask(taskName)
    Storage.saveProjectContainer(projectContainer)
  }

  // Task CRUD
  static renameTask(projectName, taskName, newTaskName) {
    const projectContainer = Storage.getProjectContainer()
    projectContainer.getProject(projectName).getTask(taskName).setName(newTaskName)
    Storage.saveProjectContainer(projectContainer)
  }

  static setTaskDate(projectName, taskName, newDueDate) {
    const projectContainer = Storage.getProjectContainer()
    projectContainer.getProject(projectName).getTask(taskName).setDate(newDueDate)
    Storage.saveProjectContainer(projectContainer)
  }

}