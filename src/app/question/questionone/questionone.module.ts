import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestiononeRoutingModule } from './questionone-routing.module';
import { QuestiononeComponent } from './questionone.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [QuestiononeComponent],
  imports: [
    FormsModule,
    CommonModule,
    QuestiononeRoutingModule
  ]
})
export class QuestiononeModule { }
