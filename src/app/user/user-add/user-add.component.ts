import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { UserService } from 'src/app/service/user.service';


const password = new FormControl("", Validators.required);
const confirmPassword = new FormControl("", CustomValidators.equalTo(password));


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})

export class UserAddComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private userProfile: UserService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: [
        null,
        Validators.compose([
          Validators.required,
        ])
      ],
      lastname: [
        null,
        Validators.compose([
          Validators.required,
        ])
      ],
      email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      number: [
        null,
        Validators.compose([
          Validators.required,

        ])
      ],
      password,
      confirmPassword
    });
  }

  onFirstSubmit() {
   console.warn(this.form);
    this.userProfile.CreateUserProfile(this.form.value).subscribe((data:any) => {
      alert("Data submited");
    });
  }

}
