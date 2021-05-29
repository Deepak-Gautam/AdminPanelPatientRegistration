import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntryService } from '../../services/entry.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  invalidcode: boolean = false;
  form: FormGroup;
  constructor(
    fb: FormBuilder,
    private _entryService: EntryService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = fb.group({
      code: ['', Validators.required],
    });
  }

  onBtnCLick() {
    var result = this._entryService.entry(this.form.controls['code'].value);
    if (result) {
      this.toastr.success('Entry Success! Welcome to Dashboard ');
      this.router.navigate(['dashboard']);
    } else {
      this.toastr.error("Code didn't match. Try Again");
    }
  }
}
