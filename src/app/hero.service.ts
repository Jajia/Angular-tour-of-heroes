import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
@Injectable({
    providedIn: 'root',
})
export class HeroService {

    constructor(private http: HttpClient, private messageService: MessageService) { }

    getHeroes(): Observable<HttpResponse<Hero[]>> {
        this.messageService.add('fetch data from server');
        return this.http.get<Hero[]>('http://localhost:9000/get-heroes', { observe: 'response' });
    }
}
