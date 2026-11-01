import { Component, inject, OnInit, signal } from '@angular/core'
import { Step } from '../step/step'
import { StepService, WorkflowStep } from '../../services/step'

@Component({
    selector: 'app-message-steps',
    standalone: true,
    imports: [Step],
    templateUrl: './message-steps.html',
    styleUrl: './message-steps.scss',
})
export class MessageSteps implements OnInit {
    private readonly stepService = inject(StepService)

    readonly steps = signal<WorkflowStep[]>([])
    readonly stepColor = '#C6432F'

    ngOnInit(): void {
        this.stepService.getSteps().subscribe({
            next: (steps) => {
                this.steps.set(steps)
            },
            error: (err) => {
                console.error('Error al cargar steps:', err)
            },
        })
    }
}

