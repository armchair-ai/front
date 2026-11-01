import { Routes } from '@angular/router';
import { Messages } from './components/messages/messages';
import { MessageSteps } from './components/message-steps/message-steps';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'messages',
        pathMatch: 'full',
    },
    {
        path: 'messages',
        component: Messages,
    },
    {
        path: 'message/:id',
        component: MessageSteps,
    },
    {
        path: 'messages/:id',
        redirectTo: 'message/:id',
    },
];
