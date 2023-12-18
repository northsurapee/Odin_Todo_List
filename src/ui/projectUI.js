import Project from '../logic/project'
import Storage from '../logic/storage'
import MainUI from './mainUI'
import TaskUI from './taskUI'

export default class ProjectUI {

  // LOAD CONTENT
  static loadProjects() {
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => {
        if (
          project.name !== 'Inbox' &&
          project.name !== 'Today' &&
          project.name !== 'This week'
        ) {
          ProjectUI.createProject(project.name)
        }
      })
    ProjectUI.initProjectButtons()
    ProjectUI.initAddProjectButtons()
  }


  static loadProjectContent(projectName) {
    const projectPreview = document.getElementById('project-preview')
    projectPreview.innerHTML = `
        <h1 id="project-name">${projectName}</h1>
        <div class="tasks-list" id="tasks-list"></div>`

    if (projectName !== 'Today' && projectName !== 'This week') {
      projectPreview.innerHTML += `
        <button class="button-add-task" id="button-add-task">
          <i class="fas fa-plus"></i>
          Add Task
        </button>
        <div class="add-task-popup" id="add-task-popup">
          <input
            class="input-add-task-popup"
            id="input-add-task-popup"
            type="text"
          />
          <div class="add-task-popup-buttons">
            <button class="button-add-task-popup" id="button-add-task-popup">
              Add
            </button>
            <button
              class="button-cancel-task-popup"
              id="button-cancel-task-popup"
            >
              Cancel
            </button>
          </div>
        </div>`
    }

    TaskUI.loadTasks(projectName)
  }

  // CREATE CONTENT
  static createProject(name) {
    const userProjects = document.getElementById('projects-list')
    userProjects.innerHTML += ` 
      <button class="button-project" data-project-button>
        <div class="left-project-panel">
          <i class="fas fa-tasks"></i>
          <span>${name}</span>
        </div>
        <div class="right-project-panel">
          <i class="fas fa-times"></i>
        </div>
      </button>`
  }

  // OPEN CONTENT
  static openProject(projectName, projectButton) {
    const defaultProjectButtons = document.querySelectorAll(
      '.button-default-project'
    )
    const projectButtons = document.querySelectorAll('.button-project')
    const buttons = [...defaultProjectButtons, ...projectButtons]

    buttons.forEach((button) => button.classList.remove('active'))
    projectButton.classList.add('active')
    ProjectUI.closeAddProjectPopup()
    ProjectUI.loadProjectContent(projectName)
  }
  
  // PROJECT ADD EVENT LISTENER
  static initAddProjectButtons() {
    const addProjectButton = document.getElementById('button-add-project')
    const addProjectPopupButton = document.getElementById(
      'button-add-project-popup'
    )
    const cancelProjectPopupButton = document.getElementById(
      'button-cancel-project-popup'
    )
    const addProjectPopupInput = document.getElementById(
      'input-add-project-popup'
    )

    addProjectButton.addEventListener('click', ProjectUI.openAddProjectPopup)
    addProjectPopupButton.addEventListener('click', ProjectUI.addProject)
    cancelProjectPopupButton.addEventListener('click', ProjectUI.closeAddProjectPopup)
  }

  static openAddProjectPopup() {
    const addProjectPopup = document.getElementById('add-project-popup')
    const addProjectButton = document.getElementById('button-add-project')

    MainUI.closeAllPopups()
    addProjectPopup.classList.add('active')
    addProjectButton.classList.add('active')
  }

  static closeAddProjectPopup() {
    const addProjectPopup = document.getElementById('add-project-popup')
    const addProjectButton = document.getElementById('button-add-project')
    const addProjectPopupInput = document.getElementById(
      'input-add-project-popup'
    )

    addProjectPopup.classList.remove('active')
    addProjectButton.classList.remove('active')
    addProjectPopupInput.value = ''
  }

  static addProject() {
    const addProjectPopupInput = document.getElementById(
      'input-add-project-popup'
    )
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
    ProjectUI.createProject(projectName)
    ProjectUI.closeAddProjectPopup()
  }

  // PROJECT EVENT LISTENERS
  static initProjectButtons() {
    const inboxProjectsButton = document.getElementById('button-inbox-projects')
    const todayProjectsButton = document.getElementById('button-today-projects')
    const weekProjectsButton = document.getElementById('button-week-projects')
    const projectButtons = document.querySelectorAll('[data-project-button]')
    const openNavButton = document.getElementById('button-open-nav')

    inboxProjectsButton.addEventListener('click', ProjectUI.openInboxTasks)
    todayProjectsButton.addEventListener('click', ProjectUI.openTodayTasks)
    weekProjectsButton.addEventListener('click', ProjectUI.openWeekTasks)
    projectButtons.forEach((projectButton) =>
      projectButton.addEventListener('click', ProjectUI.handleProjectButton)
    )
    openNavButton.addEventListener('click', MainUI.openNav)
  }

  static openInboxTasks() {
    ProjectUI.openProject('Inbox', this)
  }

  static openTodayTasks() {
    Storage.updateTodayProject()
    ProjectUI.openProject('Today', this)
  }

  static openWeekTasks() {
    Storage.updateWeekProject()
    ProjectUI.openProject('This week', this)
  }

  static handleProjectButton(e) {
    const projectName = this.children[0].children[1].textContent

    if (e.target.classList.contains('fa-times')) {
      ProjectUI.deleteProject(projectName, this)
      return
    }

    ProjectUI.openProject(projectName, this)
  }

  static deleteProject(projectName, button) {
    if (button.classList.contains('active')) ProjectUI.clearProjectPreview()
    Storage.deleteProject(projectName)
    ProjectUI.clearProjects()
    ProjectUI.loadProjects()
  }

  static clearProjectPreview() {
    const projectPreview = document.getElementById('project-preview')
    projectPreview.textContent = ''
  }

  static clearProjects() {
    const projectsList = document.getElementById('projects-list')
    projectsList.textContent = ''
  }
}