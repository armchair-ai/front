import { Component, computed, inject, input } from '@angular/core'
import { MatIcon } from '@angular/material/icon'
import { StepColorService } from '../../services/step-color'

@Component({
    selector: 'app-step-icon',
    standalone: true,
    imports: [MatIcon],
    templateUrl: './step-icon.html',
    styleUrl: './step-icon.scss',
})
export class StepIcon {
    private readonly stepColorService = inject(StepColorService)

    readonly icon = input<string>('check')
    readonly color = input<string>('#c02626')

    readonly background = computed(() =>
        this.stepColorService.background(this.color())
    )
}
