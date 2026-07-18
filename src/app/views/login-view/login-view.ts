import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, EMPTY, finalize } from 'rxjs';
import { Credentials, User } from '@shared';
import { AuthApi } from '@api/auth-api';
import { UserService } from '@services/user-service';

type LoginForm = FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
}>;

@Component({
    selector: 'app-login-view',
    imports: [ ReactiveFormsModule ],
    templateUrl: './login-view.html',
    styleUrl: './login-view.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginView {
    private fb = inject(FormBuilder);
    private authApi = inject(AuthApi);
    private userService = inject(UserService);
    private router = inject(Router);

    protected loginForm: LoginForm = this.fb.nonNullable.group({
        username: [ '', Validators.required ],
        password: [ '', Validators.required ],
    });

    protected readonly isLoading = signal(false);
    protected readonly error = signal<string | null>(null);

    protected login(): void {
        if (this.loginForm.invalid || this.isLoading()) {
            return;
        }

        this.isLoading.set(true);
        this.error.set(null);

        const credentials: Credentials = this.loginForm.getRawValue();

        this.authApi.login(credentials).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 401) {
                    this.error.set('Invalid username or password.');
                } else {
                    this.error.set('Something bad happened.');
                }
                return EMPTY;
            }),
            finalize(() => this.isLoading.set(false)),
        ).subscribe((response: User) => {
            this.userService.setUser(response);
            void this.router.navigate([ '/dashboard' ]);
        });
    }
}
