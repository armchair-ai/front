import { Component } from '@angular/core'
import { Step } from './components/step/step'
import { Message } from './components/message/message'

@Component({
    imports: [Step, Message],
    selector: 'app-root',
    styleUrl: './app.scss',
    templateUrl: './app.html',
})

export class App {
}
