import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntryService } from '../../services/entry.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Entrycode } from '../../models/entrycode';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: Entrycode[] = [];
  isLoggedIn: boolean = false;
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
  ngOnInit() {
    this._entryService.entry().subscribe((users) => (this.users = users));
  }

  onBtnCLick() {
    var result = this.users.find(
      (code) => code.code === this.form.controls['code'].value
    );

    if (result) {
      this._entryService.isLoggedIn = true;
      this.toastr.success('Entry Success! Welcome to Dashboard ');
      this.router.navigate(['dashboard']);
    } else {
      this.toastr.error("Code didn't match. Try Again");
    }
  }
}
