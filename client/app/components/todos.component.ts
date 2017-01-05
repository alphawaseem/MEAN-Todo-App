import { Component,OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
    moduleId : module.id,
    selector : 'todos',
    templateUrl : 'todos.component.html'
})
export class TodosComponent implements OnInit{
    todos : any;
    ngOnInit(){
        this.getTodos();
    }
    
    constructor(private todoService : TodosService){
        console.log("todo service available");
    }
    getTodos(){
        this.todoService.getTodos().subscribe(res => {
            this.todos = res;
            console.log(this.todos);
        });
    }
    addTodo(newTodo:HTMLInputElement){
        let todo = {
            text : newTodo.value,
            isCompleted : false
        }
        this.todoService.addTodo(todo).subscribe(res => {
            this.todos.push(todo);
        })
        newTodo.value = '';
        return false;
    }

    updateStatus(todo:any){
        let _todo = {
            _id : todo._id,
            text : todo.text,
            isCompleted : !todo.isCompleted
        }
        this.todoService.updateTodo(_todo)
        .subscribe(updatedTodo=>{
            todo.isCompleted = !todo.isCompleted;
        });
    }
    updateTodo(todo:any,newText:HTMLInputElement){
        let _todo = {
            _id : todo._id,
            text : newText.value,
            isCompleted : todo.isCompleted
        }
        this.todoService.updateTodo(_todo)
        .subscribe(updatedTodo=>{
            todo.text = newText.value;
        });
    }
    
}