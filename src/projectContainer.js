import Project from './Project'
import Task from './Task'

export default class ProjectContainer {
    constructor() {
        this.projectList = []
        this.projectList.push(new Project("Reminder"))
        this.projectList.push(new Project("Today"))
        this.projectList.push(new Project("Next 7 days"))
        this.projectList.push(new Project("All Tasks"))
    }

    setProjectList(projectList) {
        this.projectList = projectList
    }

    getProjectList() {
        return this.projectList
    }

    getProject(projectTitle) {
        return this.projectList.find((project) => project.getTitle() === projectTitle)
    }

    isContainProject(projectTitle) {
        return this.projectList.some((project) => project.getTitle() === projectTitle)
    }

    addProject(newProject) {
        if(this.isContainProject(newProject.getTitle())) return
        this.projectList.push(newProject)
    }

    deleteProject(projectTitle) {
        this.projectList = this.projectList.filter((project) => project.getTitle() != projectTitle)
    }

    updateAllTaskProject() {
        // Clear
        let allTask = this.getProject('All Tasks')
        allTask.deleteAllTask()
        // For each project
        this.projectList.forEach((project) => {
            if (
                project.getTitle() === 'Reminder' ||
                project.getTitle() === 'Today' ||
                project.getTitle() === 'Next 7 days' ||
                project.getTitle() === 'All Tasks'
            )   return
            // Add all task in to 'All Tasks' project
            project.getTaskList().forEach((task) => {
                allTask.addTask(task)
            })
        })
    }

    updateTodayProject() {
        this.getProject('today').setTaskList(this.getProject('All Tasks').getTodayTasks())
    }

    updateNext7DayProject() {
        this.getProject('Next 7 days').setTaskList(this.getProject('All Tasks').getNext7DayTasks())
    }
}