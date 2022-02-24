import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllCharactersRequest } from './store';
import { ApplicationState } from './store/models/application-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'search-app';

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.store.dispatch(getAllCharactersRequest());
  }
}
