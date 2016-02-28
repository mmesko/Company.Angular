import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DepartmentService } from './department.service';
import {DepartmentComponent } from './department.component';
import {HomeComponent} from './home.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['Departments']">Departments</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    DepartmentService
  ]
})
@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/department',
    name: 'Departments',
    component: DepartmentComponent,
    useAsDefault: true
  }
   
])
export class AppComponent {
  title = 'COMPANY d.o.o';
}