import ProjectUI from './projectUI'
import TaskUI from './taskUI'


export default class MainUI {

  static loadHomepage() {
    ProjectUI.loadProjects()
    ProjectUI.openProject('Inbox', document.getElementById('button-inbox-projects'))
  }

  static openNav() {
    const nav = document.getElementById('nav')

    MainUI.closeAllPopups()
    nav.classList.toggle('active')
  }

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
}