import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules
import { ParentKidsService } from '../../../../services/parent-kids.service';
import { UserI } from '../../../../models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: ParentKidsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  param!: any;
  userInfo!: any;
  userForm!: FormGroup;
  idFromQuery: any;

  ngOnInit() {
    this.userInfo = null;
    this.initForm();
    this.getUser();
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
getUser() {
  this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
    this.idFromQuery = params.get('child');
    if (this.idFromQuery) {
      this.userService.getUserById(+this.idFromQuery).subscribe((res: UserI) => {
        this.userInfo = res;
        this.userForm.patchValue(res);
      });
    } else {
       this.userInfo = null;
      this.param = +this.activatedRoute.snapshot.params['id'];
      this.userService.getUserById(this.param).subscribe((res: UserI) => {
        this.userInfo = res;
        this.userForm.patchValue(res);
      });
    }
  });
}


  onSubmit() {
     if (this.idFromQuery !== null) {
      this.userService.updateUser(+this.idFromQuery, this.userForm.value).subscribe(
        (res) => {
          this.toastr.success('User Updated', 'Good Job!');
          this.getUser()
        }
      );
    } else {
      this.userService.updateUser(this.param, this.userForm.value).subscribe(
        (res) => {
                    this.getUser()

          this.toastr.success('User Updated', 'Good Job!');
        }
      );
    }
  }

  ngOnDestroy() {
    this.userInfo = {} as UserI;
    this.idFromQuery =null
    this.param =null
  }
}
