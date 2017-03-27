import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../signup.interface';

@Component({
    selector: 'reactive-form',
    templateUrl: './reactive.component.html'
})
export class ReactiveFormComponent implements OnInit {

    private user: FormGroup;
    private userModel: User = {
        name: 'Brittany',
        account: {
            email: 'test@mail.com'
        }
    }

    constructor(private fb: FormBuilder) {}   

    public ngOnInit() {
        // use userModel as an initial value
        this.user = this.fb.group({
            name: [this.userModel.name, [ Validators.required, Validators.minLength(2) ]],
            account: this.fb.group({
                email: [this.userModel.account.email, Validators.required],
                confirm: ['', Validators.required]
            })
        });
    }

    // It's possible to pass user in from the template or access it internally.
    public onSubmit() {
        console.log(this.user.value, this.user.valid);
        this.userModel = this.user.value; // update userModel
    }

}