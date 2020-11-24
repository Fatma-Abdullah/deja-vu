import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from "moment";
import { Customer } from 'src/app/customer';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentCustomerSubject: BehaviorSubject<Customer>;
    public currentCustomer: Observable<Customer>;

    constructor(private http: HttpClient) {
        this.currentCustomerSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('currentCustomer')));
        this.currentCustomer = this.currentCustomerSubject.asObservable();
    }

    public get currentCustomerValue(): Customer {
        return this.currentCustomerSubject.value;
    }
    // https://devavu-79076.firebaseio.com/api
    login(username: string, password: string) {
         this.http.post<any>(`https://devavu-79076.firebaseio.com/login.json`, { username, password }).subscribe(
        (result)=>{
          console.log(result)

        }       
         )
            // .pipe(map(Customer => {
            //     // login successful if there's a jwt token in the response
            //     if (Customer && Customer.token) {
            //         // store Customer details and jwt token in local storage to keep Customer logged in between page refreshes
            //         localStorage.setItem('currentCustomer', JSON.stringify(Customer));
            //         this.currentCustomerSubject.next(Customer);
            //         console.log("token",localStorage.getItem('currentCustomer'))
            //     }

            //     return Customer;
            // }));
    }


    ///////////////--------------------------------///////////////////////////////////////////////

  //  setSession(authResult) {
  //     const expiresAt = moment().add(authResult.expiresIn,'second');
  //     localStorage.setItem('id_token', authResult.idToken);
  //     localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  //     console.log(localStorage.getItem('expiresAt'))
  // }


//   getExpiration() {
//     const expiration = localStorage.getItem("expires_at");
//     const expiresAt = JSON.parse(expiration);
//     return moment(expiresAt);
// }    



    logout() {
        // remove Customer from local storage to log Customer out
        localStorage.removeItem('currentCustomer');
        this.currentCustomerSubject.next(null);
    }
    
}
// login(user) {
//   if (user.email !== '' && user.password !== '' ) {
//     return this.server.request('POST', '/login', {
//       email: user.email,
//       password: user.password
//     }).subscribe((response: any) => {
//       if (response.auth === true && response.token !== undefined) {
//         this.token = response.token;
//         this.server.setLoggedIn(true, this.token);
//         this.loggedIn.next(true);
//         const userData = {
//           token: this.token,
//         };
//         localStorage.setItem('user', JSON.stringify(userData));
//         this.router.navigateByUrl('/profile');
//       }