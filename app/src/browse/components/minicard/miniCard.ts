import {Component, View} from 'angular2/angular2';

import {Tooltip} from 'spotyngular2/tooltip';

@Component({
	selector: 'spotyngular2-browse-mini-card',
	properties: ["image", "name"]
})
@View({
	templateUrl: 'src/browse/components/minicard/miniCard.html',
	directives: [Tooltip]
})
export class BrowseMiniCard{}