import {Injectable, bind} from 'angular2/core';
import {Http, HttpFactory} from 'angular2/http';
import {Observable} from 'rx';

const SERVER = "http://localhost:3000/genres";

@Injectable()
export class GenresService{
	
	constructor(private http:Http) {}

	public getGenres(){
		return this.http.get(SERVER)
						.map(res => res.json());
	}
}