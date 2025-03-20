import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'reception-app';

  tooltipe = 'Здесь могла быть ваша подсказка'

  showMessage(){
    alert('Hiu');
  }
}
