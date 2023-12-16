import { isToday, addDays } from 'date-fns'
import Task from './Task'

export default class Project {
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

    isContainTask(taskTitle) {
        return this.taskList.some((task) => task.getTitle() === taskTitle)
    }

    getTask(taskTitle) {
        return this.taskList.find((task) => task.getTitle() === taskTitle)
    }

    addTask(newTask) {
        if (this.isContainTask(newTask.getTitle())) return
        this.taskList.push(newTask)
    }

    deleteTask(taskTitle) {
        this.taskList = this.taskList.filter((task) => task.getTitle() != taskTitle)
    }

    deleteAllTask() {
        this.taskList = []
    }

    // for default 'Today' project
    getTodayTasks() {
        return this.taskList.filter((task) => isToday(task.getDate()))
    }

    // for default 'Next 7 Days' project
    getNext7DayTasks() {
        const today = new Date();
        const next7Days = addDays(today, 7);
    
        return this.taskList.filter((task) => {
            const taskDate = task.getDate(); 
            return today <= taskDate && taskDate <= next7Days;
        });
    }
}