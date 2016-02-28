import {Component, OnInit } from 'angular2/core';
import {Router} from 'angular2/router';
import {JSONP_PROVIDERS,Http, HTTP_PROVIDERS}  from 'angular2/http';


@Component({
  selector: 'my-home',
  templateUrl: 'app/home.component.html'
  //styleUrls: ['app/dashboard.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private _http: Http,
    private _router: Router) {
  }

  ngOnInit() {
  
  }


}