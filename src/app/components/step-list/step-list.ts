import { Component, input } from '@angular/core'
import { Step } from '../step/step'
import type { Step as StepModel } from '../../models/step'

@Component({
    selector: 'app-step-list',
    standalone: true,
    imports: [Step],
    templateUrl: './step-list.html',
    styleUrl: './step-list.scss',
})

export class StepList {
    readonly steps = input<StepModel[]>([])
}