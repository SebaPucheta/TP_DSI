import { Component, ViewChild, Output, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation.modal.html',
  styleUrls: ['./confirmation.modal.styl'],
  exportAs: 'child'
})

export class ConfirmationModal {
  @ViewChild('confirmationModal') modal
  @Input() message: string
  @Input() params: any
  @Input() btnClass: string = 'btn-danger'
  @Output() action = new EventEmitter<boolean>()

  public show () {
    this.modal.show()
  }

  public hide (confirmed: boolean) {
    this.action.next(confirmed)
    this.modal.hide()
  }
}
