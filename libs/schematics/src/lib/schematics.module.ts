import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestModule } from './http-request/http-request.module';

@NgModule({
  imports: [CommonModule, HttpRequestModule],
  exports: [HttpRequestModule]
})
export class SchematicsModule { }
