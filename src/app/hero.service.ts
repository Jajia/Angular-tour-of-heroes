import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';
@Injectable({
    providedIn: 'root',
})
export class HeroService {

    constructor(private http: HttpClient) { }

    getHeroes(): Observable<HttpResponse<Hero[]>> {
        return this.http.get<Hero[]>('http://localhost:9000/get-heroes', { observe: 'response' });
    }

    getHero(id: number): Observable<HttpResponse<Hero>> {
        return this.http.get<Hero>(`http://localhost:9000/get-hero/${id}`, { observe: 'response' });
    }
}
