import Project from './project'
import Task from './task'
import ProjectContainer from './projectContainer'

export default class Storage {
  static saveProjectContainer(data) {
    localStorage.setItem('projectContainer', JSON.stringify(data))
  }

  static getProjectContainer() {
    const projectContainer = Object.assign(
        new ProjectContainer(),
        JSON.parse(localStorage.getItem('projectContainer'))
    )

    projectContainer.setProjectList(
        projectContainer
        .getProjectList()
        .map((project) => Object.assign(new Project(), project))
    )

    projectContainer
        .getProjectList()
        .forEach((project) => project.setTaskList(
            project.getTaskList().map((task) => Object.assign(new Task(), task))
            )
      )

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
}