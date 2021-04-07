import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throttleTime, tap } from 'rxjs/operators';
import { Todo } from '@hapicrow-frontend-demo/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private readonly httpClient: HttpClient) { }

  findTodos(): Observable<Todo[]> {
    return this.httpClient
      .get<Todo[]>(`http://localhost:3333/api/todo/find-todos`)
      .pipe(
        throttleTime(500),
        tap((data: Todo[]) => {
          console.log({ request: data })
        })
      );
  }
}
