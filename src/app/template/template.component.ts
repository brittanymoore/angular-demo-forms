import { Component } from '@angular/core';

import { User } from './../signup.interface';

@Component({
    selector: 'template-form',
    templateUrl: './template.component.html'
})
export class TemplateFormComponent {

    private user: User = {
        name: 'Brittany',
        account: {
            email: 'test@mail.com'
        }
    };

    constructor() {}

    onSubmit({ value, valid }: { value: User, valid: boolean }) {
        console.log(value, valid);
        this.user = value;
    }

}