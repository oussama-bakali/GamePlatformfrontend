import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APIResponse, Game, Gaming, jeu, Model } from './model';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private _http:HttpClient) { }


  getgames():Observable< APIResponse<Game>>{
    return this._http.get< APIResponse<Game>>('https://api.rawg.io/api/platforms?key=YOURKEY')
  }
  getgames2():Observable< APIResponse<Gaming>>{
    return this._http.get< APIResponse<Gaming>>('https://api.rawg.io/api/platforms?key=YOURKEY')
  }
}
