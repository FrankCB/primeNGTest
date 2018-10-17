import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'inl';

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Angular.io', icon: 'fa fa-link', url: 'http://angular.io', },
      {label: 'Theming', icon: 'fa fa-paint-brush'}
    ];
  }
}
