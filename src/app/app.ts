import { Component, signal } from '@angular/core';
import { StepOrder } from './components/step-order/step-order';

@Component({
  imports: [StepOrder],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('front');
}
