import {Component, View} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {LeftNav} from 'src/leftnav/leftNav';
import {BrowsePage} from 'src/browse/page';
import {PlaylistPage} from 'src/playlist/page';

@RouteConfig([
  {
    path:"/",
    as: "Browse",
    component: BrowsePage
  },
  {
    path:"/playlist",
    as: "PlayList",
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
export class SpotyngularApp{}
