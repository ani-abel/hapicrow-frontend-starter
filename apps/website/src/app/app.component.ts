import { Component, OnInit } from '@angular/core';
import { Todo } from '@hapicrow-frontend-demo/interfaces';
import { HttpRequestService } from '@hapicrow-frontend-demo/schematics';
import { Observable } from 'rxjs';

@Component({
  selector: 'hapicrow-frontend-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'website';
  allTodos$: Observable<Todo[]>;

  constructor(private readonly httpReqSrv: HttpRequestService) { }

  ngOnInit(): void {
    this.allTodos$ = this.httpReqSrv.findTodos();
    setTimeout(() => {
      this.allTodos$ = this.httpReqSrv.findTodos();
    }, 5000);
  }

}
