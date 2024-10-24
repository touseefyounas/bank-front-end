import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Account } from '../../model/account';
import { AccountService } from '../../service/account.service';
import { AccountTypePipe } from '../../pipes/account-type.pipe';

@Component({
  selector: 'app-accounttable',
  standalone: true,
  imports: [RouterLink, CommonModule, AccountTypePipe],
  templateUrl: './accounttable.component.html',
  styleUrl: './accounttable.component.css'
})
export class AccounttableComponent {

  accounts: Account[] = [];

  constructor(private accountService:AccountService){
    this.accountService.getAllAccounts().subscribe((response)=> this.accounts = response)
  }

  deleteCustomer(accountId: number): void{
    this.accountService.deleteAccount(accountId).subscribe((response)=> {
      alert('Account Deleted!')
      this.accountService.getAllAccounts().subscribe((response)=> this.accounts = response)
    })
  }
}
