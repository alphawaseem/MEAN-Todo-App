import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodosComponent } from './components/todos.component'
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,TodosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
