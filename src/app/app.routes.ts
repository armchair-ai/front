import { Routes } from '@angular/router';
import { MessagesPage } from './pages/messages/messages';
import { MessageShow } from './pages/message-show/message-show';

export const routes: Routes = [
    {
        path: 'messages',
        component: MessagesPage,
    },
    {
        path: 'message/:id',
        component: MessageShow,
    },
    {
        path: '',
        redirectTo: 'messages',
        pathMatch: 'full',
    },
    {
        path: 'messages/:id',
        redirectTo: 'message/:id',
    },
];
