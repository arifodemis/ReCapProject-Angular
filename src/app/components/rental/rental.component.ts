import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Rental } from 'src/app/models/rental';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];
  
  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
    
  }
}
