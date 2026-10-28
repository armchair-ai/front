import { Component, computed, inject, input } from '@angular/core'
import { ColorService } from '../../services/color'

@Component({
    selector: 'app-step-order',
    standalone: true,
    templateUrl: './step-order.html',
    styleUrl: './step-order.scss',
    host: {
        '[class.left]': "direction() === 'left'",
        '[class.right]': "direction() === 'right'",
    },
})
export class StepOrder {
    private readonly colorService = inject(ColorService)

    readonly color = input<string>('#c02626')
    readonly direction = input<'right' | 'left'>('right')
    readonly order = input<number>(0)

    readonly backgroundGradient = computed(() => {
        const base = this.color()
        const darker = this.colorService.darker(base, 32)
        return `linear-gradient(to right, ${base} 10%, ${darker} 100%)`
    })
}
