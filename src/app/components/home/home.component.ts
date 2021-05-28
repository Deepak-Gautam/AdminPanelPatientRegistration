import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {EntryService} from "../../services/entry.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent  {
invalidcode: boolean = false;
form: FormGroup;
  constructor(fb: FormBuilder, private _entryService: EntryService) {
    this.form =fb.group({
      code: ["", Validators.required]
    });
  }

makeEntry(){
  var result= this._entryService.entry(this.form.controls["code"].value);

  if(!result) {
    this.invalidcode = true ;
  }
}
}
