export default class Task {
    constructor(title, description, dueDate = 'No Due Date') {
        this.title = title
        this.description = description
        this.dueDate = dueDate // Date build-in obj.
        this.complete = false
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

    setComplete() {
        this.complete = true
    }

    isComplete() {
        return this.complete
    }
}