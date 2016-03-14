import {NgFor, Component, View} from 'angular2/angular2';

import {UrlService} from 'spotyngular2/urlService';

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