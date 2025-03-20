import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  public title = 'reception-app';

  public tooltipe = 'Здесь могла быть ваша подсказка'

  public showMessage(){
    alert('Привет! Зачем нажал!');
  }
}
