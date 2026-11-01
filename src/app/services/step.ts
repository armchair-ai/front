import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { Step } from '../models/step'

@Injectable({
    providedIn: 'root',
})

export class StepService {
    private readonly http = inject(HttpClient)
    private readonly apiUrl = environment.apiUrl.endsWith('/steps')
        ? environment.apiUrl
        : `${environment.apiUrl}/steps`

    getSteps(): Observable<Step[]> {
        return this.http.get<Step[]>(this.apiUrl)
    }
}
