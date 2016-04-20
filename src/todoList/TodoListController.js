import Todo from "./Todo";

export class TodoListController {
    constructor () {
        this.todos = [];
        this.init();
    }

    addTodo(){
        if(this.todoText) {
            this.todos.push(new Todo(this.todoText));
        }
    }

    remaining(){
        return this.todos.filter(todo => {return todo.done}).length;
    }

    archive(){
        this.todos = this.todos.filter(todo => {return !todo.done});
    }

    init (){
        //add three todos
        this.todos.push(new Todo("Learn ES6"));
        this.todos.push(new Todo("Learn AngularJS"));
        this.todos.push(new Todo("Learn ES6 + AngularJS"));
    }
}