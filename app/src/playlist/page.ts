import {Component, View} from 'angular2/core';

import {PlaylistHeader} from 'src/playlist/components/header/header';
import {PlaylistInfoBar} from 'src/playlist/components/infobar/infoBar';
import {PlaylistList} from 'src/playlist/components/list/list';

@Component({
	selector: 'spotyngular2-playlist-page'	
})
@View({
	templateUrl: 'src/playlist/page.html',
	directives: [PlaylistHeader, PlaylistInfoBar, PlaylistList]
})
export class PlaylistPage{}