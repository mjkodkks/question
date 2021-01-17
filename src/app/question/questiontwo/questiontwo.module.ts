import { QuestiontwoComponent } from './questiontwo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestiontwoRoutingModule } from './questiontwo-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [QuestiontwoComponent],
  imports: [
    FormsModule,
    CommonModule,
    QuestiontwoRoutingModule
  ]
})
export class QuestiontwoModule { }
