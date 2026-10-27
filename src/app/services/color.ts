import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})

export class ColorService {
    darker(color: string, percent: number): string {
        if (color.startsWith('#')) {
            let hex = color.replace('#', '').trim()
            if (hex.length === 3) {
                hex = hex.split('').map((char) => char + char).join('')
            }
            if (hex.length === 6) {
                const factor = 1 - Math.min(Math.max(percent, 0), 100) / 100
                const r = Math.round(parseInt(hex.substring(0, 2), 16) * factor)
                const g = Math.round(parseInt(hex.substring(2, 4), 16) * factor)
                const b = Math.round(parseInt(hex.substring(4, 6), 16) * factor)
                return `rgb(${r}, ${g}, ${b})`
            }
        }
        return `color-mix(in srgb, ${color}, black ${percent}%)`
    }
}
