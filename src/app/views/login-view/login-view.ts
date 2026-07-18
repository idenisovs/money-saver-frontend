import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../shared';

type LoginForm = FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
}>;

@Component({
  selector: 'app-login-view',
  imports: [ReactiveFormsModule],
  templateUrl: './login-view.html',
  styleUrl: './login-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginView {
    private fb = inject(FormBuilder);

    protected loginForm: LoginForm = this.fb.nonNullable.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
    });

    protected login(): void {
        if (this.loginForm.invalid) {
            return;
        }

        const credentials: Auth = this.loginForm.getRawValue();
        // TODO: hook up authentication using `credentials`.
        console.log(credentials)
    }
}
