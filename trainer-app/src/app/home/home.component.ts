import { Component, OnInit } from '@angular/core';
import { Trainer } from '../model/trainer.model';
import { TrainerService } from '../trainer-service/trainer-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trainers: Trainer[];
  
  constructor(private service: TrainerService) { }

  ngOnInit() {
    this.service.fetchAllTrainers()
                .subscribe(data => {
                  console.log("Data Fetched");
                  this.trainers = data;
                });
  }

}
