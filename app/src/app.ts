import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {LeftNav} from 'spotyngular2/leftnav/leftNav';
import {BrowsePage} from 'spotyngular2/browse/page';
import {PlaylistPage} from 'spotyngular2/playlist/page';

@RouteConfig([
  {
    path:"/",
    as: "browse",
    component: BrowsePage
  },
  {
    path:"/playlist",
    as: "playlist",
    component: PlaylistPage
  }
])
@Component({
  selector: 'spotyngular2-app'
})
@View({
  templateUrl: 'src/app.html',
  directives: [LeftNav, RouterOutlet]
})
class SpotyngularApp{}
