import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';
import {Alert} from 'ng2-bootstrap';

@Component({
  selector: 'spotyngular2',
  providers: [],
  templateUrl: 'src/app.html',
  directives: [Alert,CORE_DIRECTIVES]
})
/*@RouteConfig([
  new Route({ path: '/home', component: Home, name: 'Home', useAsDefault: true}),
  new Route({ path: '/about', component: About, name: 'About'})
])*/
export class AppComponent {

   alerts:Array<Object> = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.',
      closable: true
    }
  ];

  location: Location;
  currentPathStr = '';

  constructor(location: Location, router: Router) {
    this.location = location;
    this.currentPathStr = '/home';
    router.subscribe((value) => this.currentPathStr = value);
  }

  clicked(message: string) {
    console.log(message);
  }

  closeAlert(i: number) {
    this.alerts.splice(i, 1);
  }
}
