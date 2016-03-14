import {Component, View} from 'angular2/angular2';

import {PlaylistHeader} from 'spotyngular2/playlist/components/header/header';
import {PlaylistInfoBar} from 'spotyngular2/playlist/components/infobar/infoBar';
import {PlaylistList} from 'spotyngular2/playlist/components/list/list';

@Component({
	selector: 'spotyngular2-playlist-page'	
})
@View({
	templateUrl: 'src/playlist/page.html',
	directives: [PlaylistHeader, PlaylistInfoBar, PlaylistList]
})
export class PlaylistPage{}