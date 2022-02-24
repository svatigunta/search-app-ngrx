import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { map, Observable, startWith } from 'rxjs';
import { ApplicationState } from 'src/app/store/models/application-state';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
