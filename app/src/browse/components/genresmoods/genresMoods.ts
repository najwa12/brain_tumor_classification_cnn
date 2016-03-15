import {Component, View} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {GenresService} from 'src/browse/genresService';
import {BrowseMiniCard} from 'src/browse/components/minicard/miniCard';

const SERVER = "http://localhost:3000/genres";

@Component({
	selector: 'spotyngular2-browse-genres-moods',
	providers: [GenresService]
})
@View({
	templateUrl: 'src/browse/components/genresmoods/genresMoods.html',
	directives: [NgFor, BrowseMiniCard]
})
export class BrowseGenresMoods{
	genres: any = [];
	constructor(private genresService: GenresService){
		/*genresService.getGenres()
					 .subscribe(genres => this.genres = genres);*/
	}
}