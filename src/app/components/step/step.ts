import { Component, input } from '@angular/core'
import { StepOrder } from '../step-order/step-order'
import { StepDescription } from '../step-description/step-description'

@Component({
    selector: 'app-step',
    standalone: true,
    imports: [StepOrder, StepDescription],
    templateUrl: './step.html',
    styleUrl: './step.scss',
    host: {
        '[class.left]': "direction() === 'left'",
        '[class.right]': "direction() === 'right'",
    },
})
export class Step {
    readonly color = input<string>('#c02626')
    readonly order = input<number>(0)
    readonly direction = input<'right' | 'left'>('right')
}
