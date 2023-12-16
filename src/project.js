export default class project {
    constructor(title) {
        this.title = title
        this.taskList = []
    }

    getTitle() {
        return this.title
    }

    addTask(task) {
        this.taskList.push(task)
    }

    
}