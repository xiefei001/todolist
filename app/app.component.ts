import {Component} from '@angular/core';
import {FooterComponent} from "./footer.component";
import {TodoAppCompoment} from "./todoapp.component";


@Component({
  selector: 'my-app',
  template: `
       <todo-app>
          <footer><small>Yet another todo api!</small></footer> 
       </todo-app>
    `,
  directives: [FooterComponent, TodoAppCompoment]
})
export class AppComponent {
}
