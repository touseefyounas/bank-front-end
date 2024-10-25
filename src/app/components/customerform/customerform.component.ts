import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { Router, RouterLink } from '@angular/router';
import { CustomerCreateDTO } from '../../model/customerCreateDTO';
@Component({
  selector: 'app-customerform',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './customerform.component.html',
  styleUrl: './customerform.component.css'
})
export class CustomerformComponent {

  successAlert: Boolean = false;

  constructor(private customerService:CustomerService, private router:Router){}

  createCustomer(newCustomer: CustomerCreateDTO){
    this.customerService.createCustomer(newCustomer).subscribe(response=> console.log(response))
    this.successAlert = true
      
      setTimeout(() => {
        this.successAlert = false
        this.router.navigate(['/customers'])
    }, 2000)
  }
}
