import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'froala-sample';
  items: string[] = ['Thanks', 'For', 'Your', 'Support', 'Ilyas'];
}
