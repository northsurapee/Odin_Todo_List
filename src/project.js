import { isToday, isThisWeek, subDays } from 'date-fns'

export default class project {
    constructor(title) {
        this.title = title
        this.taskList = []
    }

    setTitle() {
        this.title = title
    }

    getTitle() {
        return this.title
    }

    setTask(taskList) {
        this.taskList = taskList
    }

    getTaskList() {
        return this.taskList
    }

    isContain(taskTitle) {
        return this.taskList.some((task) => task.getTitle() === taskTitle)
    }

    getTask(taskTitle) {
        return this.taskList.find((task) => task.getTitle() === taskTitle)
    }

    addTask(newTask) {
        if (this.isContain(newTask.getTitle())) return
        this.taskList.push(newTask)
    }

    deleteTask(taskTitle) {
        this.taskList = this.taskList.filter((task) => task.getTitle() != taskTitle)
    }

    // for default 'Today' project
    getTodayTasks() {
        return this.taskList.filter((task) => isToday(task.getDate()))
    }

    // for default 'Next 7 Days' project
    getThisWeekTasks() {
        return this.taskList.filter((task) => isThisWeek(task.getDate()))
    }
}