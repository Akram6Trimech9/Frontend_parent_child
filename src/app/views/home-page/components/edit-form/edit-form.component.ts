import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules
import { ParentKidsService } from '../../../../services/parent-kids.service';
import { UserI } from '../../../../models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: ParentKidsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  param!: number;
  userInfo!: any;
  userForm!: FormGroup;

  ngOnInit() {
    this.param = +this.activatedRoute.snapshot.params['id'];
    this.initForm();
    this.getUserById();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [{ value: '', disabled: true }, Validators.email],
      userName: [{ value: '', disabled: true }, Validators.required],
      dateOfBirth: [''],
      gender: ['']
    });
  }

  getUserById() {
    if (this.param) {
      this.userService.getUserById(this.param).subscribe((res: UserI) => {
        this.userInfo = res;
        this.userForm.patchValue(res);
      });
    }
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.userService.updateUser(this.param, this.userForm.value).subscribe(
      (res)=> {
        this.toastr.success('User Updated', 'Good Job!');
      }
    );
  }
}
