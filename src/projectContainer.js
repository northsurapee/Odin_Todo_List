import Project from './project'

export default class ProjectContainer {
    constructor() {
        this.projectList = []
        this.projectList.push(new Project("Reminder"))
        this.projectList.push(new Project("Today"))
        this.projectList.push(new Project("Next 7 days"))
        this.projectList.push(new Project("All Tasks"))
    }

    getProjectList() {
        return this.projectList
    }

    setProjectList(newProjectList) {
        this.projectList = newProjectList
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

    getReminderProject() {
        return this.getProject('Reminder')
    }

    getAllTaskProject() {
        return this.getProject('All Tasks')
    }

    getTodayProject() {
        return this.getProject('Today')
    }

    getNext7DayProject() {
        return this.getProject('Next 7 days')
    }

    updateAllTaskProject() {
        // Clear
        let allTask = this.getAllTaskProject()
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
        let allTodayTask = this.getAllTaskProject().getTodayTasks()
        this.getTodayProject().setTaskList(allTodayTask)
    }

    updateNext7DayProject() {
        this.getNext7DayProject().setTaskList(this.getAllTaskProject().getNext7DayTasks())
    }
}