import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { CustomValidators } from "ng2-validation";


@Component({
  selector: 'app-lead-add',
  templateUrl: './lead-add.component.html',
  styleUrls: ['./lead-add.component.scss']
})
export class LeadAddComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      NameOfCompany: [''],
      Product: [''],
      ContactPerson: [''],
      MobileNumber: [''],
      Email: ['',Validators.compose([CustomValidators.email])],
      Country: [''],
      State: [''],
      City: [''],
      Address: [''],
      SourceOfLead: [''],
      Communicated: [''],
      WhoCommunicated: [''],
      LastCommunicationDetail: [''],
      DateOfNextFollowUp: [''],
      LeadStatus: [''],
      ReasonOfStatus: [''],
    });
  }

  onFirstSubmit() {

  }
}
