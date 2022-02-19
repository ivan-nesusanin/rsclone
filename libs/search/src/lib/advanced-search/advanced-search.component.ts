import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '@clone/services';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'clone-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedSearchComponent implements OnInit {
  formAdvancedSearch!: FormGroup;
  nameValue = new FormControl('');
  yearValue = new FormControl('');
  sinceYear = new FormControl();
  arrNumber = [...Array(123)].map((e, i) => i + 1900).reverse();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.formAdvancedSearch = new FormGroup({
      sinceYear: new FormControl(null),
      byYear: new FormControl(null)
    })
    // console.log(this.formAdvancedSearch.get('sinceYear'))
    // console.log(this.sinceYear)

    this.nameValue.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      (res) => {
        this.searchService.getEnterValue(res);
      }
    )
    this.yearValue.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      (res) => {
        this.searchService.getYearValue(res);
      }
    )
    this.searchService.getMoviesBase();
  }
}
