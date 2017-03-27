import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormComponent } from './reactive/reactive.component';
import { TemplateFormComponent } from './template/template.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/reactive',
        pathMatch: 'full'
    },
    {
        path: 'reactive',
        component: ReactiveFormComponent
    },
    {
        path: 'template',
        component: TemplateFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [ ReactiveFormComponent, TemplateFormComponent ];