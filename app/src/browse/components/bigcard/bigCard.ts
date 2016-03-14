import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'spotyngular2-browse-big-card',
	properties: ["name", "image", "desc"]
})
@View({
	templateUrl: 'src/browse/components/bigcard/bigCard.html'
})
export class BrowseBigCard{}