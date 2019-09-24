import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly endpoint = environment.endpoints.customers;

  constructor(private httpClient: HttpClient) {}

  getById(id: string) {
    return this.httpClient.get<Customer>(`${this.endpoint}/${id}`);
  }

  getAll(searchTerm = '') {
    // add search param
    const httpOptions = searchTerm
      ? { params: new HttpParams().set('search', searchTerm) }
      : {};

    return this.httpClient.get<Customer[]>(this.endpoint, httpOptions);
  }

  create(customer: Customer) {
    return this.httpClient.post<Customer>(this.endpoint, customer);
  }

  update(customer: Customer) {
    return this.httpClient.put<Customer>(this.endpoint, customer);
  }

  delete(id: number) {
    return this.httpClient.delete<Customer>(`${this.endpoint}/${id}`);
  }
}
