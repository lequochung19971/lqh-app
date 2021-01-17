import { Component, OnInit, Optional, Self, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MismatchedPassword, ProgressLayoutModel, StrongAndWeakPasswordModel, WeakPasswordModel } from '@core/models/strong-weak-password.model';
import { PasswordService } from '@shared/services/password.service';
import { ValidationsService } from '@shared/services/validations.service';
import { TranslateService } from '@ngx-translate/core';
import { MatTooltip } from '@angular/material/tooltip';
import { UtilitiesService } from '@shared/services/utilities.service';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'lqh-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordInputComponent extends InputComponent implements OnInit {
  @ViewChild('tooltip') tooltip: MatTooltip;
  
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected passwordService: PasswordService,
    protected validationsService: ValidationsService,
    protected utilitiesService: UtilitiesService,
    protected translateService: TranslateService
  ) { 
    super(ngControl);
  }

  weakColor: string = '#ff5252';
  mediumColor: string = '#f6bb6a';
  strongColor: string = '#2edba3';

  barElement: HTMLElement;
  progressElement: HTMLElement;
  iconElement: HTMLElement;

  barElementID: string;
  progressElementID: string;
  iconElementID: string;

  status: string;
  passwordMeter: StrongAndWeakPasswordModel = new StrongAndWeakPasswordModel();

  mismatchedMessages: MismatchedPassword[] = [...this.passwordService.mismatchedMessagesConfig]
  tooltipHideDelay: number = 2000;

  ngOnInit(): void {
    super.ngOnInit();
    this.generateElementsID();
  }

  ngAfterViewInit(): void {
    this.barElement = document.getElementById(this.barElementID);
    this.progressElement = document.getElementById(this.progressElementID);
    this.iconElement = document.getElementById(this.iconElementID);

    if (!this.disabled) {
      this.setProgressBarDefault();
    }
  }
  
  writeValue(val: string): void {
    this.value = val;
    this.onTouched();
    this.onChanged(val);
  }

  inputChange({value}: {value: string}) {
    this.writeValue(value);

    if (value === null || value === undefined) {
      return;
    }

    this.changeProgressBarStatus(value, this.tooltip);
  }
  
  protected generateElementsID(): void {
    const randomedID = this.utilitiesService.getRandomStringByLength(6);
    this.barElementID = `lqh-bar-${randomedID}`;
    this.progressElementID = `lqh-progress-${randomedID}`;
    this.iconElementID = `lqh-icon-${randomedID}`;
  }

  protected changeProgressBarStatus(value: string, tooltip?: MatTooltip): void {
    this.passwordMeter = this.passwordService.getPasswordMeter(value, this.barElement.clientWidth) as StrongAndWeakPasswordModel;
    this.setMismatchedMessages(this.passwordMeter.weaknesses);

    if (tooltip) {
      this.toggleTooltip(tooltip);
    }

    if (this.passwordMeter.percent < 40) {
      this.weak(this.passwordMeter.width);
    } else if (this.passwordMeter.percent < 65) {
      this.medium(this.passwordMeter.width);
    } else if (this.passwordMeter.percent >= 85) {
      this.strong(this.passwordMeter.width);
    }
  }

  protected toggleTooltip(tooltip: MatTooltip) {
    const hasWeaknesses = this.passwordMeter.weaknesses.some(weakness => weakness);
    if (hasWeaknesses) {
      tooltip.show();
    } else {
      tooltip.hide();
    }
  }

  protected setProgressBarDefault(): void {
    this.setLayoutProgress({ width: '0', color: this.mediumColor, status: 'medium' });
    this.changeProgressBarStatus(this.formControl.value);
  }

  protected strong(width: string): void {
    this.setLayoutProgress({ width, color: this.strongColor, status: 'strong' });
  }

  protected weak(width: string): void {
    this.setLayoutProgress({ width, color: this.weakColor, status: 'weak' });
  }

  protected medium(width: string): void {
    this.setLayoutProgress({ width, color: this.mediumColor, status: 'medium' });
  }

  protected setLayoutProgress(layout: ProgressLayoutModel): void {
    this.progressElement.style.width = `${+layout.width < 0 ? '0' : layout.width}px`;
    this.progressElement.style.backgroundColor = layout.color;
    this.status = layout.status;
  }

  protected setMismatchedMessages(weaknesses: WeakPasswordModel[]) {
    this.mismatchedMessages = this.passwordService.mismatchedMessagesConfig.filter(mess => {
      return !!weaknesses.find(weakness => weakness?.mismatched === mess)
    })
  }

  getTooltipMismatchedMessages() {
    return this.mismatchedMessages
      .map(mess => this.translateService.instant(mess))
      .join('\n');
  }

}
