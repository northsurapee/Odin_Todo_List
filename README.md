# Odin_Todo_List
- This is a Basic Todo-List
- using date-fns package
- Live demo :

## Functionality
- add projects 
- side panel
- add tasks into your projects (title, details, due-date)
- mark or unmark your tasks as completed or important
- edit you tasks (title, details, due-date)
- delete you tasks
- display all tasks
- display all tasks that is dued today 
- display all tasks that is dued this week 
- save all you projects and task to localStorage
- light & Dark mode (future)
- change order of projects using drag and drop feature (future)

## Design
- I seperate functionality in to 5 modules
    - task : logic of task
    - project : logic of project
    - project container : logic of project container
    - UI : DOM manipulation
    - index
- Logic module use OOP principle with CRUD function

## Note to self
- on smaller screen, side panel show above instead of on the side(flex items vs position absolute);
