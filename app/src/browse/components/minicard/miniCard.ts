import {Component, View} from 'angular2/core';

import {Tooltip} from 'src/tooltip';

@Component({
	selector: 'spotyngular2-browse-mini-card',
	properties: ["image", "name"]
})
@View({
	templateUrl: 'src/browse/components/minicard/miniCard.html',
	directives: [Tooltip]
})
export class BrowseMiniCard{}