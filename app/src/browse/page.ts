import {Component, View} from 'angular2/core';

import {BrowseTopNav} from 'src/browse/components/topnav/topNav';
import {BrowseMusicStrip} from 'src/browse/components/musicstrip/musicStrip';
import {BrowseGenresMoods} from 'src/browse/components/genresmoods/genresMoods';

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