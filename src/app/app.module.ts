import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestiononeModule } from './question/questionone/questionone.module';
import { QuestiontwoModule } from './question/questiontwo/questiontwo.module';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    QuestiononeModule,
    QuestiontwoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
