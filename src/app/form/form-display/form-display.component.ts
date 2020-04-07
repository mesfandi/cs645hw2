import { Component, OnInit, OnDestroy } from "@angular/core";
import { Form } from "../form.model";
import { FormService } from "../form.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-form-display",
  templateUrl: "./form-display.component.html",
  styleUrls: ["./form-display.component.css"],
})
export class FormDisplayComponent implements OnInit, OnDestroy {
  forms: Form[] = [];
  private formsSub: Subscription;
  constructor(public formService: FormService) {}
  ngOnInit() {
    this.forms = this.formService.getForms();
    this.formsSub = this.formService
      .getFormUpdateListener()
      .subscribe((forms: Form[]) => {
        this.forms = forms;
      });
  }
  ngOnDestroy() {
    this.formsSub.unsubscribe();
  }
}
