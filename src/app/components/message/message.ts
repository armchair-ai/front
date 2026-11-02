import { Component, computed, input, output, signal } from '@angular/core'
import { form, FormField, required } from '@angular/forms/signals'
import { MatIcon } from '@angular/material/icon'

@Component({
    selector: 'app-message',
    standalone: true,
    imports: [
        FormField,
        MatIcon
    ],
    templateUrl: './message.html',
    styleUrl: './message.scss',
    host: {
        '[style.--message-color]': 'color()',
    },
})
export class Message {
    public readonly color = input.required<string>()
    public readonly onSubmit = output<string>()

    protected readonly disabled = computed(() => !this.isValid())
    protected readonly form = form(signal({
        message: ''
    }), (schema) => {
        required(schema.message)
    })

    public submit(event: Event): void {
        event.preventDefault()
        if (!this.isValid()) {
            return
        }
        this.onSubmit.emit(this.form.message().value().trim())
        this.reset()
    }

    private isValid(): boolean {
        return this.form().valid()
    }

    private reset(): void {
        this.form().reset()
    }
}

