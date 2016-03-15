import {Component, View} from 'angular2/core';

import {UrlService} from 'src/urlService';

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