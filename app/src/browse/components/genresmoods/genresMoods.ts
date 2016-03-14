import {NgFor, Component, View} from 'angular2/angular2';

import {GenresService} from 'spotyngular/browse/genresService';
import {BrowseMiniCard} from 'spotyngular/browse/components/minicard/miniCard';

const SERVER = "http://localhost:3000/genres";

@Component({
	selector: 'spotyngular2-browse-genres-moods',
	appInjector: [GenresService]
})
@View({
	templateUrl: 'src/browse/components/genresmoods/genresMoods.html',
	directives: [NgFor, BrowseMiniCard]
})
export class BrowseGenresMoods{
	genres: any = [];
	constructor(private genresService: GenresService){
		genresService.getGenres()
					 .subscribe(genres => this.genres = genres);
	}
}