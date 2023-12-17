/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnXG4vLyBpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snXG4vLyBpbXBvcnQgUHJvamVjdENvbnRhaW5lciBmcm9tICcuL3Byb2plY3RDb250YWluZXInXG4vLyBpbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnXG5cbi8vIC8vIENyZWF0ZSBQcm9qZWN0Q29udGFpbmVyXG4vLyBjb25zb2xlLmxvZyhcIj0+IENyZWF0ZSBQcm9qZWN0Q29udGFpbmVyXCIpXG4vLyBsZXQgcHJvamVjdENvbnRhaW5lciA9IG5ldyBQcm9qZWN0Q29udGFpbmVyKClcbi8vIFN0b3JhZ2Uuc2F2ZVByb2plY3RDb250YWluZXIocHJvamVjdENvbnRhaW5lcilcblxuLy8gLy8gQ3JlYXRlIHByb2plY3QgYW5kIGFkZCBpbnRvIFByb2plY3RDb250YWluZXJcbi8vIGNvbnNvbGUubG9nKFwiPT4gQ3JlYXRlIHByb2plY3QgYW5kIGFkZCBpbnRvIFByb2plY3RDb250YWluZXJcIilcbi8vIGxldCBwcm9qZWN0QSA9IG5ldyBQcm9qZWN0KFwiQVwiKVxuLy8gbGV0IHByb2plY3RCID0gbmV3IFByb2plY3QoXCJCXCIpXG4vLyBTdG9yYWdlLmFkZFByb2plY3QocHJvamVjdEEpXG4vLyBTdG9yYWdlLmFkZFByb2plY3QocHJvamVjdEIpXG5cbi8vIC8vIENyZWF0ZSB0YXNrcyBhbmQgYWRkIHRhc2sgaW50byBwcm9qZWN0XG4vLyBjb25zb2xlLmxvZyhcIj0+IENyZWF0ZSB0YXNrcyBhbmQgYWRkIHRhc2sgaW50byBwcm9qZWN0XCIpXG4vLyBsZXQgdGFza0EgPSBuZXcgVGFzayhcImFcIiwgXCJUaGlzIGlzIHRlc3QgdGFzayBrdWIhXCIsIG5ldyBEYXRlKCkpXG4vLyBsZXQgdGFza0IgPSBuZXcgVGFzayhcImJcIiwgXCJUaGlzIGlzIHRlc3QgdGFzayBrdWIhXCIsIG5ldyBEYXRlKDIwMjMsIDExLCAxNykpIC8vIG5ldyBEYXRlKHllYXIsIG1vbnRoKHN0YXJ0IGF0IDApLCBkYXkpXG4vLyBTdG9yYWdlLmFkZFRhc2soXCJBXCIsIHRhc2tBKVxuLy8gU3RvcmFnZS5hZGRUYXNrKFwiQlwiLCB0YXNrQilcblxuLy8gLy8gUmVhZCBwcm9qZWN0XG4vLyBjb25zb2xlLmxvZyhcIj0+IFJlYWQgcHJvamVjdFwiKVxuLy8gY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0TGlzdCgpKVxuXG4vLyAvLyBSZWFkIHRhc2sgZnJvbSBwcm9qZWN0XG4vLyBjb25zb2xlLmxvZyhcIj0+IFJlYWQgdGFzayBmcm9tIHByb2plY3RcIilcbi8vIGNvbnNvbGUubG9nKHByb2plY3RBLmdldFRhc2tMaXN0KCkpXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0Qi5nZXRUYXNrTGlzdCgpKVxuXG4vLyAvLyBSZWFkIGRlc2NyaXB0aW9uIGFuZCBkYXRlXG4vLyBjb25zb2xlLmxvZyhcIj0+IFJlYWQgZGVzY3JpcHRpb24gYW5kIGRhdGVcIilcbi8vIGNvbnNvbGUubG9nKHRhc2tBLmdldERlc2NyaXB0aW9uKCkpXG4vLyBjb25zb2xlLmxvZyh0YXNrQS5nZXREYXRlKCkpXG5cbi8vIC8vIFJlYWQgJ0FsbCB0YXNrcycgdGFza1xuLy8gY29uc29sZS5sb2coXCI9PiBSZWFkICdBbGwgdGFza3MnIHRhc2tcIilcbi8vIHByb2plY3RDb250YWluZXIudXBkYXRlQWxsVGFza1Byb2plY3QoKVxuLy8gY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0KCdBbGwgVGFza3MnKS5nZXRUYXNrTGlzdCgpKVxuXG4vLyAvLyBSZWFkICdUb2RheScgdGFza1xuLy8gY29uc29sZS5sb2coXCI9PiBSZWFkICdUb2RheScgdGFza1wiKVxuLy8gcHJvamVjdENvbnRhaW5lci51cGRhdGVUb2RheVByb2plY3QoKVxuLy8gY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0KCdUb2RheScpLmdldFRhc2tMaXN0KCkpXG5cbi8vIC8vIFJlYWQgJ05leHQgNyBEYXlzJyB0YXNrXG4vLyBjb25zb2xlLmxvZyhcIj0+IFJlYWQgJ05leHQgNyBEYXlzJyB0YXNrXCIpXG4vLyBwcm9qZWN0Q29udGFpbmVyLnVwZGF0ZU5leHQ3RGF5UHJvamVjdCgpXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0Q29udGFpbmVyLmdldFByb2plY3QoJ05leHQgNyBkYXlzJykuZ2V0VGFza0xpc3QoKSlcblxuLy8gLy8gQ29tcGxldGUgdGhlIHRhc2tcbi8vIGNvbnNvbGUubG9nKFwiPT4gQ29tcGxldGUgdGhlIHRhc2tcIilcbi8vIGNvbnNvbGUubG9nKFwiQmVmb3JlOiBcIiArIHRhc2tBLmlzQ29tcGxldGUoKSlcbi8vIHRhc2tBLnNldENvbXBsZXRlKHRydWUpXG4vLyBjb25zb2xlLmxvZyhcIkFmdGVyOiBcIiArIHRhc2tBLmlzQ29tcGxldGUoKSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==