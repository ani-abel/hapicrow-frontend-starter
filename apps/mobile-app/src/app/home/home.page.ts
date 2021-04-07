import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '@hapicrow-frontend-demo/schematics';
import { Todo } from '@hapicrow-frontend-demo/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'hapicrow-frontend-demo-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  allTodos$: Observable<Todo[]>;

  constructor(private readonly httpReqSrv: HttpRequestService) { }

  ngOnInit(): void {
    this.allTodos$ = this.httpReqSrv.findTodos();
    setTimeout(() => {
      this.allTodos$ = this.httpReqSrv.findTodos();
    }, 5000);
  }
}
