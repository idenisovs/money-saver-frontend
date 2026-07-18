import { computed, Injectable, signal } from '@angular/core';

import { User } from '@shared';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private readonly currentUser = signal<User | null>(null);

    readonly user = this.currentUser.asReadonly();
    readonly isAuthenticated = computed(() => this.currentUser() !== null);

    setUser(user: User | null): void {
        this.currentUser.set(user);
    }

    clear(): void {
        this.currentUser.set(null);
    }
}
