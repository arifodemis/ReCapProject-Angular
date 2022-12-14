import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {


  constructor(private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute) { }

  dataLoaded = false;
  carDetail: CarDetailDto;
  carImages: CarImage[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarById(params["carId"]);
      this.getCarImagesByCarId(params["carId"]);
    })
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe(response => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    })
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
      this.dataLoaded = true;
    })
  }


  getImagePath(carImage: CarImage): string {

   
    let newPath = carImage.imagePath.replace("C:\\Users\\arifo\\source\\repos\\ReCapProject\\WebAPI\\Images\\", "W3Schools")
    console.log("", newPath)
    
      let url: string = "https://localhost:44322/images/" + newPath;
    return url;
  }
}