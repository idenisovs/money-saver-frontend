import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface HealthCheckResponse {
  timestamp: number;
}

@Injectable({
  providedIn: 'root',
})
export class Health {
  private readonly http = inject(HttpClient);

  check(): Observable<HealthCheckResponse> {
    return this.http.get<HealthCheckResponse>('/api/health');
  }
}
