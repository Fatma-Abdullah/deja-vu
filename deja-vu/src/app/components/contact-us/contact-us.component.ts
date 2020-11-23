import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
  }
  SendMsg(f){
    console.log()
    const allInfo = `My name is ${f.Name}. My email is ${f.Email}. My message is ${f.msg}`;
    // alert(allInfo); 
    this.toastr.success( 'Your message was sent successfully',`Hello ${f.Name}!`);
    console.log(allInfo)
  }
}
