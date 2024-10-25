import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseURL = 'http://localhost:8080/api/v1/accounts'

  constructor(private http:HttpClient) {}

  getAllAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(this.baseURL) 
  }

  createAccount(newAccount: Account): Observable<Account>{
    return this.http.post<Account>(this.baseURL, newAccount)
  }

  deleteAccount(accountId: number): Observable<Object>{
    return this.http.delete(this.baseURL + '/' + accountId)
  }

  getAccountById(accountId: number): Observable<Account>{
    return this.http.get<Account>(this.baseURL + '/' + accountId)
  }

  updateAccountById(id: number, updatedAccount: Account): Observable<Account> {
    return this.http.put<Account>(this.baseURL + '/' + id, updatedAccount)
  }

  findAccountsByCity(city:string): Observable<Account[]>{
    return this.http.get<Account[]>(`${this.baseURL}/find-accounts?city=${city}`)
  }
}
