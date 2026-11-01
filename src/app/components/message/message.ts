import { Component, computed, input, output, signal } from '@angular/core'
import { MatIcon } from '@angular/material/icon'

@Component({
    selector: 'app-message',
    standalone: true,
    imports: [MatIcon],
    templateUrl: './message.html',
    styleUrl: './message.scss',
    host: {
        '[style.--message-color]': 'color()',
    },
})
export class Message {
    readonly color = input<string>()
    readonly onSubmit = output<string>()

    readonly content = signal<string>('')
    readonly disabled = computed(() => !this.isValid())

    onInput(event: Event): void {
        const target = event.target as HTMLTextAreaElement
        this.content.set(target.value)
    }

    submit(event: Event): void {
        event.preventDefault()
        if (!this.isValid()) {
            return
        }
        this.onSubmit.emit(this.content().trim())
        this.content.set('')
    }

    private isValid(): boolean {
        return this.content().trim().length > 0
    }
}

