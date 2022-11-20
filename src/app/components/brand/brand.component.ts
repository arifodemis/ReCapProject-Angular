import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
    
  }
}
