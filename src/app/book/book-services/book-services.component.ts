import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Services } from '../../services/services.model';

@Component({
  selector: 'app-book-services',
  templateUrl: './book-services.component.html',
  styleUrls: ['./book-services.component.scss']
})
export class BookServicesComponent implements OnInit {

  @Input() item: any;
  @Input() form: FormGroup;
  constructor() {}

  ngOnInit() {}

}
