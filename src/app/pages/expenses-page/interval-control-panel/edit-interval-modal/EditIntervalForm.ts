import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export default interface EditIntervalForm {
  id: number,
  startDate: NgbDate,
  endDate: NgbDate,
  sum: number
}
