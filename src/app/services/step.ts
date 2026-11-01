import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

export interface WorkflowStep {
    id: number
    order: number
    name: string
    label: string
}

@Injectable({
    providedIn: 'root',
})

export class StepService {
    private readonly http = inject(HttpClient)
    private readonly apiUrl = environment.apiUrl.endsWith('/steps')
        ? environment.apiUrl
        : `${environment.apiUrl}/steps`

    getSteps(): Observable<WorkflowStep[]> {
        return this.http.get<WorkflowStep[]>(this.apiUrl)
    }
}
