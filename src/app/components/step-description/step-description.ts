import { Component, input } from '@angular/core'

@Component({
    selector: 'app-step-description',
    standalone: true,
    templateUrl: './step-description.html',
    styleUrl: './step-description.scss',
    host: {
        '[class.left]': "direction() === 'left'",
        '[class.right]': "direction() === 'right'",
    },
})
export class StepDescription {
    readonly direction = input<'right' | 'left'>('right')
    readonly title = input<string>('')
    readonly description = input<string>('')
}
