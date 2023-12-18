import { format } from 'date-fns' 
import Task from '../logic/task'
import Storage from '../logic/storage'
import MainUI from './mainUI'

export default class TaskUI {

    // ADD TASK EVENT LISTENERS
    static loadTasks(projectName) {
        Storage.getTodoList()
          .getProject(projectName)
          .getTasks()
          .forEach((task) => TaskUI.createTask(task.name, task.dueDate))
    
        if (projectName !== 'Today' && projectName !== 'This week') {
          TaskUI.initAddTaskButtons()
        }
    }

    static createTask(name, dueDate) {
        const tasksList = document.getElementById('tasks-list')
        tasksList.innerHTML += `
          <button class="button-task" data-task-button>
            <div class="left-task-panel">
              <i class="far fa-circle"></i>
              <p class="task-content">${name}</p>
              <input type="text" class="input-task-name" data-input-task-name>
            </div>
            <div class="right-task-panel">
              <p class="due-date" id="due-date">${dueDate}</p>
              <input type="date" class="input-due-date" data-input-due-date>
              <i class="fas fa-times"></i>
            </div>
          </button>`
    
        TaskUI.initTaskButtons()
      }
  
    static initAddTaskButtons() {
      const addTaskButton = document.getElementById('button-add-task')
      const addTaskPopupButton = document.getElementById('button-add-task-popup')
      const cancelTaskPopupButton = document.getElementById(
        'button-cancel-task-popup'
      )
      const addTaskPopupInput = document.getElementById('input-add-task-popup')
  
      addTaskButton.addEventListener('click', TaskUI.openAddTaskPopup)
      addTaskPopupButton.addEventListener('click', TaskUI.addTask)
      cancelTaskPopupButton.addEventListener('click', TaskUI.closeAddTaskPopup)
      addTaskPopupInput.addEventListener('keypress', TaskUI.handleAddTaskPopupInput)
    }
  
    static openAddTaskPopup() {
      const addTaskPopup = document.getElementById('add-task-popup')
      const addTaskButton = document.getElementById('button-add-task')
  
      MainUI.closeAllPopups()
      addTaskPopup.classList.add('active')
      addTaskButton.classList.add('active')
    }
  
    static closeAddTaskPopup() {
      const addTaskPopup = document.getElementById('add-task-popup')
      const addTaskButton = document.getElementById('button-add-task')
      const addTaskInput = document.getElementById('input-add-task-popup')
  
      addTaskPopup.classList.remove('active')
      addTaskButton.classList.remove('active')
      addTaskInput.value = ''
    }
  
    static addTask() {
      const projectName = document.getElementById('project-name').textContent
      const addTaskPopupInput = document.getElementById('input-add-task-popup')
      const taskName = addTaskPopupInput.value
  
      if (taskName === '') {
        alert("Task name can't be empty")
        return
      }
      if (Storage.getTodoList().getProject(projectName).contains(taskName)) {
        alert('Task names must be different')
        addTaskPopupInput.value = ''
        return
      }
  
      Storage.addTask(projectName, new Task(taskName))
      TaskUI.createTask(taskName, 'No date')
      TaskUI.closeAddTaskPopup()
    }
  
    static handleAddTaskPopupInput(e) {
      if (e.key === 'Enter') TaskUI.addTask()
    }
  
    // TASK EVENT LISTENERS
    static initTaskButtons() {
      const taskButtons = document.querySelectorAll('[data-task-button]')
      const taskNameInputs = document.querySelectorAll('[data-input-task-name')
      const dueDateInputs = document.querySelectorAll('[data-input-due-date')
  
      taskButtons.forEach((taskButton) =>
        taskButton.addEventListener('click', TaskUI.handleTaskButton)
      )
      taskNameInputs.forEach((taskNameInput) =>
        taskNameInput.addEventListener('keypress', TaskUI.renameTask)
      )
      dueDateInputs.forEach((dueDateInput) =>
        dueDateInput.addEventListener('change', TaskUI.setTaskDate)
      )
    }
  
    static handleTaskButton(e) {
      if (e.target.classList.contains('fa-circle')) {
        TaskUI.setTaskCompleted(this)
        return
      }
      if (e.target.classList.contains('fa-times')) {
        TaskUI.deleteTask(this)
        return
      }
      if (e.target.classList.contains('task-content')) {
        TaskUI.openRenameInput(this)
        return
      }
      if (e.target.classList.contains('due-date')) {
        TaskUI.openSetDateInput(this)
      }
    }
  
    static setTaskCompleted(taskButton) {
      const projectName = document.getElementById('project-name').textContent
      const taskName = taskButton.children[0].children[1].textContent
  
      if (projectName === 'Today' || projectName === 'This week') {
        const parentProjectName = taskName.split('(')[1].split(')')[0]
        Storage.deleteTask(parentProjectName, taskName.split(' ')[0])
        if (projectName === 'Today') {
          Storage.updateTodayProject()
        } else {
          Storage.updateWeekProject()
        }
      } else {
        Storage.deleteTask(projectName, taskName)
      }
      TaskUI.clearTasks()
      TaskUI.loadTasks(projectName)
    }
  
    static deleteTask(taskButton) {
      const projectName = document.getElementById('project-name').textContent
      const taskName = taskButton.children[0].children[1].textContent
  
      if (projectName === 'Today' || projectName === 'This week') {
        const mainProjectName = taskName.split('(')[1].split(')')[0]
        Storage.deleteTask(mainProjectName, taskName)
      }
      Storage.deleteTask(projectName, taskName)
      TaskUI.clearTasks()
      TaskUI.loadTasks(projectName)
    }
  
    static openRenameInput(taskButton) {
      const taskNamePara = taskButton.children[0].children[1]
      let taskName = taskNamePara.textContent
      const taskNameInput = taskButton.children[0].children[2]
      const projectName = taskButton.parentNode.parentNode.children[0].textContent
  
      if (projectName === 'Today' || projectName === 'This week') {
        ;[taskName] = taskName.split(' (')
      }
  
      MainUI.closeAllPopups()
      taskNamePara.classList.add('active')
      taskNameInput.classList.add('active')
      taskNameInput.value = taskName
    }
  
    static closeRenameInput(taskButton) {
      const taskName = taskButton.children[0].children[1]
      const taskNameInput = taskButton.children[0].children[2]
  
      taskName.classList.remove('active')
      taskNameInput.classList.remove('active')
      taskNameInput.value = ''
    }
  
    static renameTask(e) {
      if (e.key !== 'Enter') return
  
      const projectName = document.getElementById('project-name').textContent
      const taskName = this.previousElementSibling.textContent
      const newTaskName = this.value
  
      if (newTaskName === '') {
        alert("Task name can't be empty")
        return
      }
  
      if (Storage.getTodoList().getProject(projectName).contains(newTaskName)) {
        this.value = ''
        alert('Task names must be different')
        return
      }
  
      if (projectName === 'Today' || projectName === 'This week') {
        const mainProjectName = taskName.split('(')[1].split(')')[0]
        const mainTaskName = taskName.split(' ')[0]
        Storage.renameTask(
          projectName,
          taskName,
          `${newTaskName} (${mainProjectName})`
        )
        Storage.renameTask(mainProjectName, mainTaskName, newTaskName)
      } else {
        Storage.renameTask(projectName, taskName, newTaskName)
      }
      TaskUI.clearTasks()
      TaskUI.loadTasks(projectName)
      TaskUI.closeRenameInput(this.parentNode.parentNode)
    }
  
    static openSetDateInput(taskButton) {
      const dueDate = taskButton.children[1].children[0]
      const dueDateInput = taskButton.children[1].children[1]
  
      MainUI.closeAllPopups()
      dueDate.classList.add('active')
      dueDateInput.classList.add('active')
    }
  
    static closeSetDateInput(taskButton) {
      const dueDate = taskButton.children[1].children[0]
      const dueDateInput = taskButton.children[1].children[1]
  
      dueDate.classList.remove('active')
      dueDateInput.classList.remove('active')
    }
  
    static setTaskDate() {
      const taskButton = this.parentNode.parentNode
      const projectName = document.getElementById('project-name').textContent
      const taskName = taskButton.children[0].children[1].textContent
      const newDueDate = format(new Date(this.value), 'dd/MM/yyyy')
  
      if (projectName === 'Today' || projectName === 'This week') {
        const mainProjectName = taskName.split('(')[1].split(')')[0]
        const mainTaskName = taskName.split(' (')[0]
        Storage.setTaskDate(projectName, taskName, newDueDate)
        Storage.setTaskDate(mainProjectName, mainTaskName, newDueDate)
        if (projectName === 'Today') {
          Storage.updateTodayProject()
        } else {
          Storage.updateWeekProject()
        }
      } else {
        Storage.setTaskDate(projectName, taskName, newDueDate)
      }
      TaskUI.clearTasks()
      TaskUI.loadTasks(projectName)
      TaskUI.closeSetDateInput(taskButton)
    }

    static clearTasks() {
      const tasksList = document.getElementById('tasks-list')
      tasksList.textContent = ''
    }
  }