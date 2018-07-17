import { Component, OnInit } from '@angular/core';
import { PropertyDataService } from '../property-data.service';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {
  props:any;
  cityName:string="";
  priceSortOrder:number=0;
  constructor(private dataServices:PropertyDataService) { }

  ngOnInit() {
    this.dataServices.fetchData().subscribe(
      res=>this.props=res,
      err=>console.log(err)
    );
  }

}
