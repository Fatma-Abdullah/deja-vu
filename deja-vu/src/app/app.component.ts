import { Component ,OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'deja-vu';
  http:HttpClient
  
  ngOnInit(){
    // this.apiService.getCustomers().subscribe((res)=>{
    //   this.apiService.getCustomers(this.apiService.nextPage).subscribe((res)=>{
    //     console.log(res.body);
    //   });      
    // });
  }

  constructor(private apiService: ApiService){
    var customer = {
      "id": 1,
      "username": '',
      "password":''
      // "message": "Last name",
      // "email": "name@email.com",
      // "subject": "kkkkk",
      // "token":"jjjjjjjjjjjjjjjjjjjjjjj"
    }


    //////////////////////////
    // this.apiService.createCustomer(customer).subscribe((res)=>{
    //   this.http.post('https://devavu-79076.firebaseio.com/api/login.json', customer).subscribe(
    //     (response) => console.log("res",response),
    //     (error) => console.log(error)
    //   )
    //   console.log("Created a customer");
    // });

    ////////////////////////////////

  //   this.apiService.updateCustomer(customer).subscribe((res)=>{
  //     console.log("Updated the customer");
  //  });

  //  this.apiService.deleteCustomer(customer.id).subscribe((res)=>{
  //   console.log("Deleted a customer");
  //  });
  }

  }
  
