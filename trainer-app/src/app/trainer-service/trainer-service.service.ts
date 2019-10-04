import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from '../model/trainer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private trainerUrl: string = 'http://localhost:8180/trainer';
  private addUrl: string = '/add';

  private fetchedObservable: Observable<Trainer[]>;

  constructor(private client: HttpClient) { }

  public addTrainer(trainer: Trainer) {
    return this.client.post<Trainer>(this.trainerUrl+this.addUrl, trainer);
  }

  public fetchAllTrainers() {
    if (this.fetchedObservable != null) {
      return this.fetchedObservable;
    }
    this.fetchedObservable = this.client.get<Trainer[]>(this.trainerUrl);
    return this.fetchedObservable;
  }
}
