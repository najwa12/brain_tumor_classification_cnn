import {Component, View} from 'angular2/angular2';

import {BrowseTopNav} from 'spotyngular2/browse/components/topnav/topNav';
import {BrowseMusicStrip} from 'spotyngular2/browse/components/musicstrip/musicStrip';
import {BrowseGenresMoods} from 'spotyngular2/browse/components/genresmoods/genresMoods';

@Component({
	selector: 'spotyngular2-browse-page'	
})
@View({
	templateUrl: 'src/browse/page.html',
	directives: [BrowseTopNav, BrowseMusicStrip, BrowseGenresMoods]
})
export class BrowsePage{
	name:string;
	constructor() {
	    this.name = "Browse";
	    setTimeout(()=>this.name="Introduction to Angular 2", 2000);
	}
}