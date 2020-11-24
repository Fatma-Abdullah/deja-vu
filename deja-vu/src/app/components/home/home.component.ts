
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Customer } from 'src/app/customer';
import {  AuthenticationService } from 'src/app/authentication.service';
import {  ApiService } from 'src/app/api.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentCustomer: Customer;
    currentCustomerSubscription: Subscription;
    Customers: Customer[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private ApiService: ApiService
    ) {
        this.currentCustomerSubscription = this.authenticationService.currentCustomer.subscribe(Customer => {
            this.currentCustomer = Customer;
        });
    }

    ngOnInit() {
        // this.loadAllCustomers();   /////////
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentCustomerSubscription.unsubscribe();
    }

    // deleteCustomer(id: number) {
    //     this.ApiService.deleteCustomer(id).pipe(first()).subscribe(() => {
    //         this.loadAllCustomers()
    //     });
    // }
////////////////////////////
    // private loadAllCustomers() {
    //     this.ApiService.getContacts().pipe(first()).subscribe(Customers => {
    //         this.Customers = Customers;
    //     });
    // }
}

/////////////////////////

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }