import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EntryService } from '../../services/entry.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Entrycode } from '../../models/entrycode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() formValue = [];
  users: Entrycode[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  isLoggedIn: boolean = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _entryService: EntryService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit() {
    this.form = this.fb.group({
      code: ['', Validators.required],
    });
    this.getUsers();
  }
  getUsers() {
    this._entryService.entry().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('error caught on subscribing user data');
        this.errorMessage = error;
        this.isLoading = false;
      }
    );
  }

  onBtnCLick(): void {
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
