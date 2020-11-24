import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {  AuthenticationService } from 'src/app/authentication.service';
import { AlertService } from 'src/app/alert.service';
import { HttpClient } from '@angular/common/http';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    form:FormGroup;
    // http: HttpClient;
    public fb: FormBuilder;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private http: HttpClient
        


    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentCustomerValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
      console.log ("from login")
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
          console.log("err submit")
            return;
        }

        // this.loading = true;
        // console.log(this.f.username.value)
        // this.authenticationService.login(this.f.username.value, this.f.password.value)
      let formObject = {
        username: this.f.username.value,
        password: this.f.password.value
      }

        this.http.post<any>(`https://devavu-79076.firebaseio.com/login.json`,formObject).subscribe(
          (result)=>{
            console.log(result)
  
          },
          (error)=>{

          }       
           )
        }
        


        ///-----------------------------///
            // .pipe(first())
            // .subscribe(
            //     data => {
            //         this.router.navigate([this.returnUrl]);
            //     },
            //     error => {
            //         this.alertService.error(error);
            //         this.loading = false;
            //     })

///-------------------------------------------------------------///////


//  var formData: any = new FormData();
//       formData.append("username", this.loginForm.get('username').value);
//       formData.append("email", this. loginForm.get('password').value);
  
    
//       this.http.post('https://devavu-79076.firebaseio.com/api/login.json', formData).subscribe(
//         (response) => console.log("res",response),
//         (error) => console.log(error)
//       )


    }
    // submitForm() {
    //   var formData: any = new FormData();
    //   formData.append("name", this.loginForm.get('username').value);
    //   formData.append("email", this. loginForm.get('password').value);
  
    //    return this.http.post('https://devavu-79076.firebaseio.com/login.json', formData).subscribe(
    //     (response) => console.log("res",response),
    //     (error) => console.log(error)
    //   )
    // }}
