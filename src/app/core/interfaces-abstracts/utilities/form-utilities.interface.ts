import { FormGroup } from '@angular/forms';

export interface FormUtilities {
  formGroupHasErrors(group: FormGroup): boolean;
}