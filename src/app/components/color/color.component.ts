import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
    
  }
}
