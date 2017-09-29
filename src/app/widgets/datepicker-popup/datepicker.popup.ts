import { Component, Input, ElementRef, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

// http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
export const DATEPICKER_POPUP_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatepickerPopup),
  multi: true
};

@Component({
  selector: 'datepicker-popup',
  templateUrl: './datepicker.popup.html',
  styleUrls: ['./datepicker.popup.styl'],
  providers: [DATEPICKER_POPUP_VALUE_ACCESSOR]
})

export class DatepickerPopup implements ControlValueAccessor {
  public inputHeight: String
  public showDatepicker: boolean = false
  public formatValue: string = ''
  public innerValue: any
  public innerMaxDate: any

  public onChange:any = Function.prototype;
  public onTouched:any = Function.prototype;

  @Input() format: string = 'DD/MM/YYYY'
  @Input() placeholder: string = ''

  private parsing: boolean = false

  constructor(protected element: ElementRef) {
  }

  public get value (): any {
     if (!this.innerValue) {
      return
    }
    return this.innerValue
  }

  @Input()
  public set value (_value: any) {
    this.innerValue = _value
    if (!this.parsing) {
      this.formatValue = _value && moment(_value).format(this.format)
    }
  }

  @Input()
  public set maxDate (_maxDate: any) {
    if (_maxDate) {
      this.innerMaxDate = moment(_maxDate).toDate()
    } else {
      this.innerMaxDate = undefined
    }
  }

  public showPopup () {
    if (!this.showDatepicker) {
      this.inputHeight = this.element.nativeElement.querySelector('input').getBoundingClientRect().height + 'px'
      this.showDatepicker = true
    }
  }

  public togglePopup (date) {
    if (!this.showDatepicker) {
      this.showPopup()
    } else {
      this.showDatepicker = false
      this.value = date

      this.onTouched();
      this.onChange(this.value);
    }
  }

  public onBlur () {
    this.onTouched();
  }

  public onKeyup (e: any) {
     // esc
    if (e.keyCode === 27) {
      this.togglePopup(this.innerValue);
      return;
    }
  }

  public onModelChange (newValue) {
    newValue = moment(newValue, this.format)
    this.parsing = true
    this.value = newValue.isValid() ? newValue : undefined
    this.parsing = false
  }

  // ControlValueAccessor
  // model -> view
  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
