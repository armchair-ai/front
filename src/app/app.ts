import { Component } from '@angular/core'
import { Step } from './components/step/step'

@Component({
    imports: [Step],
    selector: 'app-root',
    styleUrl: './app.scss',
    templateUrl: './app.html',
})

export class App {
}
