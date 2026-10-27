import { Component, computed, inject, input } from '@angular/core'
import { ColorService } from '../../services/color'

@Component({
    selector: 'app-step-order',
    standalone: true,
    templateUrl: './step-order.html',
    styleUrl: './step-order.scss',
})
export class StepOrder {
    private readonly colorService = inject(ColorService)

    readonly color = input<string>('#c02626')
    readonly direction = input<'right' | 'left'>('right')
    readonly width = input<string>('320px')
    readonly height = input<string>('160px')

    readonly shadowColor = input<string>('#ffffff')
    readonly shadowOffset = input<string>('1px')

    readonly darkenAmount = input<number>(32)

    readonly backgroundGradient = computed(() => {
        const base = this.color()
        const amount = this.darkenAmount()
        const darker = this.colorService.darker(base, amount)
        return `linear-gradient(to right, ${base} 10%, ${darker} 100%)`
    })
}
