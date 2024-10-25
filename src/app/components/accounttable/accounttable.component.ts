import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Account } from '../../model/account';
import { AccountService } from '../../service/account.service';
import { AccountTypePipe } from '../../pipes/account-type.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PercentagePipe } from '../../pipes/percentage.pipe';

@Component({
  selector: 'app-accounttable',
  standalone: true,
  imports: [RouterLink, CommonModule, AccountTypePipe, NgbModule, PercentagePipe],
  templateUrl: './accounttable.component.html',
  styleUrl: './accounttable.component.css'
})
export class AccounttableComponent {

  city:string ='';
  accounts: Account[] = [];
  previousAccounts: Account[] = []
  constructor(private accountService:AccountService){
    this.accountService.getAllAccounts().subscribe((response)=> {
      this.accounts = response
      this.previousAccounts = response
    })
  }

  deleteAccount(accountId: number): void{
    this.accountService.deleteAccount(accountId).subscribe((response)=> {
      alert('Account Deleted!')
      this.accountService.getAllAccounts().subscribe((response)=> this.accounts = response)
    })
  }

  cityValue(event: any){
    this.city = event.target.value;
  }

  findAccountsByCity(): void {
    if (this.city != ''){
      this.accountService.findAccountsByCity(this.city).subscribe((response)=> {
        this.accounts = response
        console.log(this.accounts)
    
      })
    }
  }

  reset(){
    this.accounts = this.previousAccounts
  }
}
