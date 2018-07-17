import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyDataService implements OnInit {
   data:any;

  constructor(private http:HttpClient) { }
  ngOnInit(){
  }

  fetchData(){
    return this.http.get<any>('http://localhost:8000/api/all_properties');
  }
}
