import { Component, computed, inject, input } from '@angular/core'
import { StepColorService } from '../../services/step-color'

@Component({
    selector: 'app-step-order',
    standalone: true,
    templateUrl: './step-order.html',
    styleUrl: './step-order.scss',
})

export class StepOrder {
    private readonly stepColorService = inject(StepColorService)

    readonly color = input<string>('#c02626')
    readonly order = input<number>(0)

    readonly background = computed(() =>
        this.stepColorService.background(this.color())
    )
}
