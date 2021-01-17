import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'questionone',
        loadChildren: () => import('./question/questionone/questionone.module').then(m => m.QuestiononeModule)
      },
      {
        path: 'questiontwo',
        loadChildren: () => import('./question/questiontwo/questiontwo.module').then(m => m.QuestiontwoModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
