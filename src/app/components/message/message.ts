import { Component, computed, input, output, signal } from '@angular/core'
import { FieldTree, form, FormField, FormRoot, required } from '@angular/forms/signals'
import { MatIcon } from '@angular/material/icon'
import { FormMessage } from '../../models/form-message'

@Component({
    selector: 'app-message',
    standalone: true,
    imports: [
        FormField,
        FormRoot,
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

    protected readonly disabled = computed(() => {
        return !this.isValid() || this.form().submitting()
    })

    protected readonly form = form<FormMessage>(signal({
        message: ''
    }), (schemaPath) => {
        required(schemaPath.message)
    }, {
        submission: {
            action: (form: FieldTree<FormMessage>) => this.handleSubmit(form)
        }
    })

    protected async handleSubmit(form: FieldTree<FormMessage>): Promise<void> {
        this.onSubmit.emit(form.message().value().trim())
        this.reset()
    }

    protected isValid(): boolean {
        return this.form().valid()
    }

    protected reset(): void {
        this.form().reset()
    }
}