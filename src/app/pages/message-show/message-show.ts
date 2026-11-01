import { Component, inject, OnInit, signal } from '@angular/core'
import { StepList } from '../../components/step-list/step-list'
import { StepService } from '../../services/step'
import { Step } from '../../models/step'

@Component({
    selector: 'app-message-show',
    standalone: true,
    imports: [StepList],
    templateUrl: './message-show.html',
    styleUrl: './message-show.scss',
})

export class MessageShow implements OnInit {
    private readonly stepService = inject(StepService)

    readonly steps = signal<Step[]>([])

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
