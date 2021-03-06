import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScreenLoginComponent } from './screen-login/screen-login.component';
import { ScreenEvaluationFormComponent } from './screen-evaluation-form/screen-evaluation-form.component';
import { ScreenPageNotFoundComponent } from './screen-page-not-found/screen-page-not-found.component';
import { EvaluationEntryComponent } from './evaluation-entry/evaluation-entry.component';
import { ScreenAppealFormComponent } from './screen-appeal-form/screen-appeal-form.component';
import { ScreenEvaluationPayFormComponent } from './screen-evaluation-pay-form/screen-evaluation-pay-form.component';

const appRoutes: Routes = [
    { path: 'login', 
        component: ScreenLoginComponent 
    },
    { path: 'pay', 
        component: ScreenEvaluationPayFormComponent 
    },
    { path: 'evaluation',
        component: ScreenEvaluationFormComponent,
    },
    { path: 'appeal',
        component: ScreenAppealFormComponent,
    },
    { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
    },
    { path: '**', component: ScreenPageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        ScreenLoginComponent,
        ScreenEvaluationFormComponent,
        ScreenPageNotFoundComponent,
        EvaluationEntryComponent,
        ScreenAppealFormComponent,
        ScreenEvaluationPayFormComponent
    ],
  imports: [
      FormsModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true }
        ),
        BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }