import { Component, OnInit } from '@angular/core';
import { Trainer } from '../model/trainer.model';
import { TrainerService } from '../trainer-service/trainer-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service: TrainerService) { }

  ngOnInit() {
    
  }

}
