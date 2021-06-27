import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  todo  = 
    {
      label:'Bring Milk',
      done :false,
      priority:3
    };
  
}
