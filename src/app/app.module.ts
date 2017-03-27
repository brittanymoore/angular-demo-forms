import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app.routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        routedComponents
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }