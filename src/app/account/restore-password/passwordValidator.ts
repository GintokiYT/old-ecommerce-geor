import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestoreService } from './restore.service';

export class PasswordValidator {
    static createValidatorConfirm(restoreService: RestoreService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors> => {
            return restoreService
                .checkEqualPasswordConfirm(control.value)
                .pipe(
                    map((result: boolean) =>
                        result ? { mismatch: true } : null
                    )
                );
        };
    }
    static createValidatorNormal(restoreService: RestoreService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors> => {
            return restoreService
                .checkEqualPasswordNormal(control.value)
                .pipe(
                    map((result: boolean) =>
                        result ? { mismatch: true } : null
                    )
                );
        };
    }
}