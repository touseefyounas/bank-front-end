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

  constructor(private customerService:CustomerService, private router:Router){}

  createCustomer(newCustomer: CustomerCreateDTO){
    this.customerService.createCustomer(newCustomer).subscribe(response=> console.log(response))
    alert('Customer Created Successfully!')
    this.router.navigate(['/customers'])
  }
}
