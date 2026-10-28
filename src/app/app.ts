import { Component, signal } from '@angular/core';
import { Step } from './components/step/step';
import { StepOrder } from './components/step-order/step-order';
import { StepDescription } from './components/step-description/step-description';

@Component({
  imports: [Step, StepOrder, StepDescription],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('front');
}
