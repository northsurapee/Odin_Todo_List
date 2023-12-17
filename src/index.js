// import Project from './project'
// import Task from './task'
// import ProjectContainer from './projectContainer'
// import Storage from './storage'

// // Create ProjectContainer
// console.log("=> Create ProjectContainer")
// let projectContainer = new ProjectContainer()
// Storage.saveProjectContainer(projectContainer)

// // Create project and add into ProjectContainer
// console.log("=> Create project and add into ProjectContainer")
// let projectA = new Project("A")
// let projectB = new Project("B")
// Storage.addProject(projectA)
// Storage.addProject(projectB)

// // Create tasks and add task into project
// console.log("=> Create tasks and add task into project")
// let taskA = new Task("a", "This is test task kub!", new Date())
// let taskB = new Task("b", "This is test task kub!", new Date(2023, 11, 17)) // new Date(year, month(start at 0), day)
// Storage.addTask("A", taskA)
// Storage.addTask("B", taskB)

// // Read project
// console.log("=> Read project")
// console.log(projectContainer.getProjectList())

// // Read task from project
// console.log("=> Read task from project")
// console.log(projectA.getTaskList())
// console.log(projectB.getTaskList())

// // Read description and date
// console.log("=> Read description and date")
// console.log(taskA.getDescription())
// console.log(taskA.getDate())

// // Read 'All tasks' task
// console.log("=> Read 'All tasks' task")
// projectContainer.updateAllTaskProject()
// console.log(projectContainer.getProject('All Tasks').getTaskList())

// // Read 'Today' task
// console.log("=> Read 'Today' task")
// projectContainer.updateTodayProject()
// console.log(projectContainer.getProject('Today').getTaskList())

// // Read 'Next 7 Days' task
// console.log("=> Read 'Next 7 Days' task")
// projectContainer.updateNext7DayProject()
// console.log(projectContainer.getProject('Next 7 days').getTaskList())

// // Complete the task
// console.log("=> Complete the task")
// console.log("Before: " + taskA.isComplete())
// taskA.setComplete(true)
// console.log("After: " + taskA.isComplete())
