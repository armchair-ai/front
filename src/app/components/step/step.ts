import { Component, input } from '@angular/core'
import { StepOrder } from '../step-order/step-order'
import { StepDescription } from '../step-description/step-description'
import { StepIcon } from '../step-icon/step-icon'

@Component({
    selector: 'app-step',
    standalone: true,
    imports: [
        StepOrder,
        StepDescription,
        StepIcon
    ],
    templateUrl: './step.html',
    styleUrl: './step.scss',
    host: {
        '[class.left]': "direction() === 'left'",
        '[class.right]': "direction() === 'right'",
        '[class.disabled]': "disabled()",
    },
})
export class Step {
    readonly color = input.required<string>()
    readonly order = input.required<number>()
    readonly icon = input.required<string>()
    readonly direction = input<'right' | 'left'>('right')
    readonly disabled = input<boolean>(false)
}
