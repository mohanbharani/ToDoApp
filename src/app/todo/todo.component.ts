import { Component } from '@angular/core';


@Component({
    selector: 'todo-app',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent{

    todoName = '';
    todoList = [];
    isTodoName: boolean = false;
    tempTodoName: string = '';

    getTodoList(){
        this.isTodoName = !this.isTodoName;
        this.todoList.push(this.todoName);
        this.tempTodoName = this.todoName;
        console.log(this.todoList);
        
        setTimeout(()=>{
            this.isTodoName = !this.isTodoName;
            
        },2000);

        this.todoName = '';
    }

    onToggleSuccessMsg(){

    }
}