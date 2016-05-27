/**
 * Created by Xie.Fei on 27.05.2016.
 */
import {Component, Output, EventEmitter} from '@angular/core';
import {Todo} from "./Todo";

@Component({
  selector: 'todo-input',
  template: `
  <input type="text" [(ngModel)]="title">
  <button type="button" (click)="addTodo()">Add</button>
  `
})

export class TodoInputComponent {
  title:string;
  @Output() onTodo = new EventEmitter<Todo>();

  addTodo() {
    this.onTodo.emit({
      title: this.title,
      completed: false
    });
    this.title = "";
  }
}
