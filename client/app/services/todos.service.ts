import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodosService{
    constructor(private http : Http){

    }
    getTodos(){
        return this.http.get('/api/v1/todos')
        .map(res => res.json());
    }
    addTodo(todo:any){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/v1/todo',JSON.stringify(todo),{headers:headers})
        .map(res => res.json());
    }
    updateTodo(todo:any){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/v1/todo/'+todo._id,JSON.stringify(todo),{headers:headers})
        .map(res => res.json());
    }
    deleteTodo(id:string){
        return this.http.delete('/api/v1/todo/'+id).map(res=>res.json());
    }
}