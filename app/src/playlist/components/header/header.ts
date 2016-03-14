import {Component, View} from 'angular2/angular2';

import {UrlService} from 'spotyngular2/urlService';

@Component({
	selector: 'spotyngular2-playlist-header'	
})
@View({
	templateUrl: 'src/playlist/components/header/header.html'
})
export class PlaylistHeader{
	playlist: any;
	constructor(urlService: UrlService){
		this.playlist = urlService.currentParams;
	}
}