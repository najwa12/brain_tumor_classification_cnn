import {NgFor, Component, View} from 'angular2/core';

import {UrlService} from 'src/urlService';

@Component({
	selector: 'spotyngular2-playlist-list'	
})
@View({
	templateUrl: 'src/playlist/components/list/list.html',
	directives: [NgFor]
})
export class PlaylistList{
	list: any;
	constructor(urlService: UrlService){
		this.list = urlService.currentParams.playlist;
	}
}