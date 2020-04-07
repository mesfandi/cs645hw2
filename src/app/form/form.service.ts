import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Form } from "./form.model";

@Injectable({ providedIn: "root" })
export class FormService {
  private forms: Form[] = [];
  private formUpdated = new Subject<Form[]>();
  getForms() {
    return [...this.forms];
  }
  getFormUpdateListener() {
    return this.formUpdated.asObservable();
  }

  addForm(form: Form) {
    this.forms.push(form);
    this.formUpdated.next([...this.forms]);
  }
}
