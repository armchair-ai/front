import { Component, computed, input, output, signal } from '@angular/core'
import { disabled, FieldTree, form, FormField, FormRoot, required } from '@angular/forms/signals'
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
        '[class.submitting]': 'form().submitting()',
    },
})

export class Message {
    public readonly color = input.required<string>()
    public readonly onSubmit = output<string>()

    protected readonly disabled = computed(() => {
        return this.form().invalid() || this.form().disabled()
    })

    protected readonly form = form<FormMessage>(signal({
        message: ''
    }), (schemaPath) => {
        required(schemaPath.message)
        disabled(schemaPath, {
            when: ({ state }) => state.submitting(),
        })
    }, {
        submission: {
            action: (form: FieldTree<FormMessage>) => this.handleSubmit(form)
        }
    })

    protected async handleSubmit(form: FieldTree<FormMessage>): Promise<void> {
        this.onSubmit.emit(form.message().value().trim())
        this.reset()
    }

    protected reset(): void {
        this.form().reset({
            message: ''
        })
    }
}