import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteproductsincartService {

  constructor(private http:HttpClient) { }

  deleteproducts(id:any){
    return this.http.delete<any>(`http://localhost:3000/user/${id}`)
  }
}
