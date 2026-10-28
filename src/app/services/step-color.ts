import { inject, Injectable } from '@angular/core'
import { ColorService } from './color'

@Injectable({
    providedIn: 'root',
})
export class StepColorService {
    private readonly colorService = inject(ColorService)

    background(color: string): string {
        const darker = this.colorService.darker(color, 32)
        return `linear-gradient(to right, ${darker} 5%, ${color} 100%)`
    }
}
