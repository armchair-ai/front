import { Component } from '@angular/core'
import { Message } from '../../components/message/message'

@Component({
    selector: 'app-messages-page',
    standalone: true,
    imports: [Message],
    templateUrl: './messages.html',
    styleUrl: './messages.scss',
})
export class MessagesPage {
}

