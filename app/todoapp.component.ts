/**
 * Created by Xie.Fei on 27.05.2016.
 */
import {Component, ViewChild, ViewChildren, ContentChild, AfterViewInit, AfterContentInit,} from '@angular/core';
import {NgIf, NgFor} from '@angular/common';


import {TodoComponent} from './todo.component'
import {TodoInputComponent} from "./todoinput.component";
import {Todo} from "./Todo";
import {FooterComponent} from "./footer.component";

@Component({
  selector: 'todo-app',
  directives: [TodoComponent, TodoInputComponent, NgIf, NgFor],
  template: `
    <section>
       Add todo: 
         <todo-input (onTodo)="addTodo($event)"></todo-input>
    </section>
    <section>
         <h4 *ngIf="todos.lgenth">Todo list</h4>
         <todo *ngFor="let todo of todos" [todo]="todo"></todo>
    </section>
    <ng-content select="footer"></ng-content>
  `
})

export class TodoAppCompoment implements AfterViewInit, AfterContentInit {
  todos:Array<Todo>;

  @ViewChild(TodoInputComponent)
  inputComponent:TodoInputComponent;

  @ViewChildren(TodoComponent)
  todoComponents:Array<TodoComponent>;

  @ContentChild(FooterComponent)
  footerComponent:FooterComponent;

  constructor() {
    this.todos = new Array<Todo>();

  }

  ngAfterViewInit() {
    console.log('this.inputcmp: ', this.inputComponent);
  }

  ngAfterContentInit() {
    console.log('this.footerComponent: ', this.footerComponent);
  }

  addTodo(todo:Todo){
    console.log(todo.title);
    this.todos.push(todo);
  }
}
