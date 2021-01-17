import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessagesService } from '../../services/error-messages.service';

@Component({
  selector: 'lqh-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() control: FormControl;
  constructor(protected errorMessagesService: ErrorMessagesService) {}

  ngOnInit(): void {}

  get errrorMessage(): string {
    if (this.control instanceof FormControl) {
      if (this.control && this.control.errors) {
        const errorName = Object.keys(this.control.errors)[0] as string;
        const errorValue = this.control.errors[errorName] as any;
        
        return this.errorMessagesService.getErrorMessage(errorValue, errorName);
      }
    }

    return '';
  }
}
