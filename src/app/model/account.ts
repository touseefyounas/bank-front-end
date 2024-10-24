import { Customer } from "./customer";

export interface Account {

    accountId: number;
    balance: number;
    customer: Customer;
    interestRate:number;
    nextCheckNumber:number;

}

