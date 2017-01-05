import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { TodosService } from './services/todos.service';
import { BrowserModule } from '@angular/platform-browser';
import { TodosComponent } from './components/todos.component'
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ,HttpModule],
  declarations: [ AppComponent,TodosComponent ],
  bootstrap:    [ AppComponent ],
  providers : [TodosService]
})
export class AppModule { }
