/**
 * Created by Xie.Fei on 27.05.2016.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "./Todo";

@Component({
  selector: 'todo',
  template: `
     <div>
        <input type="checkbox" [(ngModel)] = "todo.completed" (change)="completionChanged()">
        {{todo.title}}
     </div>
  `
})
export class TodoComponent {
  @Input() todo:Todo;
  @Output() onCompletionChanged = new EventEmitter<Todo>();

  completionChanged(){
   this.onCompletionChanged.emit(this.todo);
   }
}
