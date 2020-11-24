import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
// import {cores} from "@angular/core"


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://devavu-79076.firebaseio.com/api';

  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";
// //post
// public createCustomer(customer: Customer){
//   return this.httpClient.post(`${this.apiURL}/login.json/`,customer);
// }

// //put
// public updateCustomer(customer: Customer){
//   return this.httpClient.put(`${this.apiURL}/customers/${customer.id}`,customer);
// }
// // delete
// public deleteCustomer(id: number){
//   return this.httpClient.delete(`${this.apiURL}/customers/${id}`);
// }
// ///get
// public getCustomerById(id: number){
//   return this.httpClient.get(`${this.apiURL}/customers/${id}`);
// }

// public getCustomers(url?: string){}



// public getContacts(){
//   return this.httpClient.get<Customer[]>(`${this.apiURL}/customers`,);
// }


parse_link_header(header) {
  if (header.length == 0) {
    return ;
  }
  let parts = header.split(',');
  var links = {};
  parts.forEach( p => {
    let section = p.split(';');
    var url = section[0].replace(/<(.*)>/, '$1').trim();
    var name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  }); 
  return links;
}


public retrieve_pagination_links(response){
  const linkHeader = this.parse_link_header(response.headers.get('Link'));
  this.firstPage = linkHeader["first"];
  this.lastPage =  linkHeader["last"];
  this.prevPage =  linkHeader["prev"];
  this.nextPage =  linkHeader["next"];
}





  constructor(private httpClient: HttpClient) {}
}