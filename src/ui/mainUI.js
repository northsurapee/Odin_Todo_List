import ProjectUI from './projectUI'
import TaskUI from './taskUI'


export default class MainUI {
  // LOADING CONTENT
  static loadHomepage() {
    ProjectUI.loadProjects()
    ProjectUI.openProject('Inbox', document.getElementById('button-inbox-projects'))
    document.addEventListener('keydown', MainUI.handleKeyboardInput)
  }

  // CLEAR CONTENT
  static clear() {
    MainUI.clearProjectPreview()
    MainUI.clearProjects()
    MainUI.clearTasks()
  }

  static clearProjectPreview() {
    const projectPreview = document.getElementById('project-preview')
    projectPreview.textContent = ''
  }

  static clearProjects() {
    const projectsList = document.getElementById('projects-list')
    projectsList.textContent = ''
  }

  static clearTasks() {
    const tasksList = document.getElementById('tasks-list')
    tasksList.textContent = ''
  }

  // main
  static closeAllPopups() {
    ProjectUI.closeAddProjectPopup()
    if (document.getElementById('button-add-task')) {
      TaskUI.closeAddTaskPopup()
    }
    if (
      document.getElementById('tasks-list') &&
      document.getElementById('tasks-list').innerHTML !== ''
    ) {
      MainUI.closeAllInputs()
    }
  }

  static closeAllInputs() {
    const taskButtons = document.querySelectorAll('[data-task-button]')

    taskButtons.forEach((button) => {
      TaskUI.closeRenameInput(button)
      TaskUI.closeSetDateInput(button)
    })
  }

  static handleKeyboardInput(e) {
    if (e.key === 'Escape') MainUI.closeAllPopups()
  }

  // PROJECT ADD EVENT LISTENERS

}