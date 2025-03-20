import { Component } from '@angular/core';

@Component({
  selector: 'app-component-learn',
  standalone: false,
  templateUrl: './component-learn.component.html',
  styleUrl: './component-learn.component.scss'
})
export class ComponentLearnComponent {
  public firstname?: string;
  public first: number = 0;
  public second: number = 0;
  public result?: number;
  public operation: string = '+'
  public operations: string[] = ['+','-','*','/']
  public calculation(){
    switch(this.operation) {
      case '+':
        this.result = this.first + this.second
        break;
      case '-':
        this.result = this.first - this.second
        break;
      case '*':
        this.result = this.first * this.second
        break;
      case '/':
        this.result = this.first / this.second
        break;
        
    }
  }
}
