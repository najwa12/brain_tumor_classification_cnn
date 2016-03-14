import {NgFor, Component, View} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {Router} from 'angular2/router';

import {UrlService} from 'spotyngular2/urlService';
import {BrowseBigCard} from 'spotyngular2/browse/components/bigcard/bigCard';

const SERVER = "http://localhost:3000/featuredPlaylist";

@Component({
	selector: 'spotyngular2-browse-music-strip'	
})
@View({
	templateUrl: 'src/browse/components/musicstrip/musicStrip.html',
	directives: [NgFor, BrowseBigCard]
})
export class BrowseMusicStrip{
	featuredPlaylist: any = [];
	constructor(private router: Router, private http:Http, private urlService: UrlService){
		http.get(SERVER)
			.map(res => res.json())
			.subscribe(features => this.featuredPlaylist = features.slice(0,4));
	}

	public seePlaylist(event, feature){
		event.preventDefault();
		this.urlService.currentParams = feature;
		this.router.parent.navigate('/playlist');
	}
}