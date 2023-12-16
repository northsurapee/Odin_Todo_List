export default class Task {
    constructor(title, description, dueDate = 'No Due Date') {
        this.title = title
        this.description = description
        this.dueDate = dueDate // 'dd/mm/yy'
        this.status = false
    }

    setTitle(title) {
        this.title = title
    }

    getTitle(title) {
        return this.title
    }

    setDescription(description) {
        this.description = description
    }

    getDescription(description) {
        return this.description
    }

    setDate(dueDate) {
        this.dueDate = dueDate
    }

    getDate() {
        return this.dueDate
    }

    // getDateFormatted() { // 'dd/mm/yy'
    //     const day = this.dueDate.split('/')[0]
    //     const month = this.dueDate.split('/')[1]
    //     const year = this.dueDate.split('/')[2]
    //     return `${day}/${month}/${year}`
    // }

    setStatus(status) {
        this.status = status
    }

    getStatus() {
        return this.status
    }
}