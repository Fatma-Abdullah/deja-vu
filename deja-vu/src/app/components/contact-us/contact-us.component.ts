import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  // http: any;
  form:FormGroup;
  private http: HttpClient;
  public fb: FormBuilder;


  constructor(private toastr: ToastrService) {}


  ngOnInit(): void {
  }
  // SendMsg(f){
  //   console.log()
  //   const allInfo = `My name is ${f.Name}. My email is ${f.Email}. My message is ${f.msg}`;
  //   // alert(allInfo); 
  //   this.toastr.success( 'Your message was sent successfully',`Hello ${f.Name}!`);
  //   console.log(allInfo)
  // }

  submitForm() {
    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("email", this.form.get('email').value);
    formData.append("message", this.form.get('message').value);
    formData.append("subject", this.form.get('subject').value);

  
    // this.http.post('http://localhost:4200/api/create_contact/', formData).subscribe(
    //   (response) => console.log("res",response),
    //   (error) => console.log(error)
    // )
  }

}

