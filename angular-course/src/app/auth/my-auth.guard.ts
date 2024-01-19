import { inject } from "@angular/core";
import { AuthService } from "./auth.service";

export const MyAuthGuard = () => {
    const auth = inject(AuthService);
    return auth.idToken !== undefined
}