import { format } from 'date-fns'
import Storage from './storage'
import Project from './project'
import Task from './task'

export   class UI {
  // LOADING CONTENT

  static loadHomepage() {
    UI.loadProjects() // loadProjects and initAddProjectButtons
    UI.initProjectButtons()
    UI.openProject('Inbox', document.getElementById('button-inbox-projects'))
    document.addEventListener('keydown', UI.handleKeyboardInput)
  }

  static loadProjects() {
    Storage.getProjectContainer()
      .getProjectList()
      .forEach((project) => {
        if (
          project.name !== 'Today' &&
          project.name !== 'Next 7 days' &&
          project.name !== 'All Tasks' 
        ) {
          UI.createProject(project.name)
        }
      })

    UI.initAddProjectButtons()
  }

  static createProject(name) {
    const userProjects = document.getElementById('projects-list')
    userProjects.innerHTML += ` 
      <button class="button-project" data-project-button>
        <div class="left-project-panel">
          <span>${name}</span>
        </div>
        <div class="right-project-panel">
        </div>
      </button>`
  }

  static initAddProjectButtons() {
    const addProjectButton = document.getElementById('button-add-project')
    const addProjectPopupButton = document.getElementById('button-add-project-popup')
    const cancelProjectPopupButton = document.getElementById('button-cancel-project-popup')
    const addProjectPopupInput = document.getElementById('input-add-project-popup')

    addProjectButton.addEventListener('click', UI.openAddProjectPopup)
    addProjectPopupButton.addEventListener('click', UI.addProject)
    cancelProjectPopupButton.addEventListener('click', UI.closeAddProjectPopup)
    addProjectPopupInput.addEventListener('keypress',UI.handleAddProjectPopupInput)
  }

  static openAddProjectPopup() {
    const addProjectPopup = document.getElementById('add-project-popup')
    const addProjectButton = document.getElementById('button-add-project')

    addProjectPopup.classList.add('active')
    addProjectButton.classList.add('active')
  }

  static closeAddProjectPopup() {
    const addProjectPopup = document.getElementById('add-project-popup')
    const addProjectButton = document.getElementById('button-add-project')
    const addProjectPopupInput = document.getElementById('input-add-project-popup')

    addProjectPopup.classList.remove('active')
    addProjectButton.classList.remove('active')
    addProjectPopupInput.value = '' // Clear textbox
  }

  static addProject() {
    const addProjectPopupInput = document.getElementById('input-add-project-popup')
    const projectName = addProjectPopupInput.value

    if (projectName === '') {
      alert("Project name can't be empty")
      return
    }

    if (Storage.getTodoList().contains(projectName)) {
      addProjectPopupInput.value = ''
      alert('Project names must be different')
      return
    }

    Storage.addProject(new Project(projectName))
    UI.createProject(projectName)
    UI.closeAddProjectPopup()
  }

  static handleAddProjectPopupInput(e) {
    if (e.key === 'Enter') UI.addProject()
  }

  //------------------------------------------
  static initProjectButtons() {
    const todayProjectsButton = document.getElementById('button-today-projects')
    const weekProjectsButton = document.getElementById('button-next7days-projects')
    const allTasksProjectsButton = document.getElementById('button-all-projects')
    const projectButtons = document.querySelectorAll('[data-project-button]')
    const openNavButton = document.getElementById('button-open-nav')

    inboxProjectsButton.addEventListener('click', UI.openInboxTasks)
    todayProjectsButton.addEventListener('click', UI.openTodayTasks)
    weekProjectsButton.addEventListener('click', UI.openWeekTasks)
    projectButtons.forEach((projectButton) =>
      projectButton.addEventListener('click', UI.handleProjectButton)
    )
    openNavButton.addEventListener('click', UI.openNav)
  }
}