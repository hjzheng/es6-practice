import Todo from "./Todo";


function inject(...list) {
    return function (target) {
        target.$inject = list;
    }
}

//http://technologyadvice.github.io/es7-decorators-babel6/
//make babel 6 support decorators

@inject("$log")
class TodoListController {
    constructor ($log) {
        this.todos = [];
        this.$log = $log;
        this.init();
    }

    addTodo(){
        if(this.todoText) {
            this.todos.push(new Todo(this.todoText));
            this.$log.info("add new Todo: " + this.todoText);
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
        this.$log.info("init");
    }
}

//TodoListController.$inject = ["$log"];

export default TodoListController;
/*
* 如果使用Set数据结构, ng-repeat 如何识别
*
* 如何对该 controller 进行依赖注入, use decorators to support ngInject
*
* npm package ng-decorators
* */