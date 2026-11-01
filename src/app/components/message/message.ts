import { Component, input } from '@angular/core'
import { MatIcon } from '@angular/material/icon'

@Component({
    selector: 'app-message',
    standalone: true,
    imports: [MatIcon],
    templateUrl: './message.html',
    styleUrl: './message.scss',
})
export class Message {
    readonly color = input<string>('#3b82f6')
    readonly title = input<string>('LOREM IPSUM')
    readonly description = input<string>(
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Eu nullam venenatis gravida zorci. Quisque dictum quam'
    )
    readonly icon = input<string>('desktop_windows')
}

