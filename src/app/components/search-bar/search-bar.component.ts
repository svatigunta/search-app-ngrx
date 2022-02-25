import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { map, Observable, startWith } from 'rxjs';
import { ApplicationState } from 'src/app/store/models/application-state';
import { getCharacters } from 'src/app/store/selectors/characters.selector';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
	searchInput = new FormControl('');
	options: string[];
	filteredOptions: Observable<string[]>;
	constructor(private store: Store<ApplicationState>) {}

	ngOnInit(): void {
		this.store.select(getCharacters).subscribe((res) => {
			this.options = res.map((char) => char.name);
		});

		this.filteredOptions = this.searchInput.valueChanges.pipe(
			startWith(''),
			map((value) => this._filter(value))
		);
	}

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();

		return this.options.filter((option) =>
			option.toLowerCase().includes(filterValue)
		);
	}
}
