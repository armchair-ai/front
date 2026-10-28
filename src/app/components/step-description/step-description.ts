import { Component, input } from '@angular/core'

@Component({
    selector: 'app-step-description',
    standalone: true,
    templateUrl: './step-description.html',
    styleUrl: './step-description.scss',
})
export class StepDescription {
    readonly direction = input<'right' | 'left'>('right')
    readonly background = input<string>('#ffffff')
    readonly title = input<string>('')
    readonly description = input<string>('')
}
