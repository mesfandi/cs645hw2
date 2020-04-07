import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { FormService } from "../form.service";

@Component({
  selector: "app-form-create",
  templateUrl: "./form-create.component.html",
  styleUrls: ["./form-create.component.css"],
})
export class FormCreateComponent implements OnInit {
  information = [
    { name: "firstName", placeHolder: "First Name", type: "text" },
    { name: "lastName", placeHolder: "Last Name", type: "text" },
    { name: "street", placeHolder: "Street", type: "text" },
    { name: "city", placeHolder: "City", type: "text" },
    { name: "state", placeHolder: "State", type: "text" },
    { name: "zip", placeHolder: "Zip", type: "text" },
    { name: "tel", placeHolder: "Telephone", type: "number" },
    { name: "email", placeHolder: "Email", type: "email" },
    { name: "db", placeHolder: "Date of Birst", type: "date" },
  ];
  likes = [
    { name: "student" },
    { name: "location" },
    { name: "campus" },
    { name: "atmosphere" },
    { name: "doreroom" },
    { name: "sports" },
  ];

  intrested = [
    { name: "friend" },
    { name: "television" },
    { name: "internet" },
    { name: "other" },
  ];
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const thisForm = {
      suggest: form.value.suggest,
      content: form.value.content,
      raffle: form.value.raffle,

      intrested: form.value.intrested,

      personalInfo: {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        db: form.value.db,
      },
      address: {
        city: form.value.city,
        state: form.value.State,
        zip: form.value.zip,
        tel: form.value.tel,
        email: form.value.email,
      },
      liked: {
        student: form.value.student,
        location: form.value.location,
        campus: form.value.campus,
        atmosphere: form.value.atmosphere,
        doreroom: form.value.doreroom,
        sports: form.value.sports,
      },
    };

    this.formService.addForm(thisForm);
    form.resetForm();
  }
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    public formService: FormService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
  }
}
