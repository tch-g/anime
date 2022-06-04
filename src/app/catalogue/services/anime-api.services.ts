import { HttpClient } from '@angular/common/http';
import { Inject,Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';


export const ANIME_BASE_URL = new InjectionToken<any>("anime api token")

@Injectable()
export class AnimeApiServices {


  constructor(@Inject(ANIME_BASE_URL) private baseUrl: any, private http: HttpClient) { } 

getAnimeByName(name: any): Observable<any>{
return this.http.get(`${this.baseUrl}&t=${name}`)
}


}


