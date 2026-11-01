import { Component } from '@angular/core'
import { Message } from '../message/message'

@Component({
    selector: 'app-messages',
    standalone: true,
    imports: [Message],
    templateUrl: './messages.html',
    styleUrl: './messages.scss',
})

export class Messages {
}