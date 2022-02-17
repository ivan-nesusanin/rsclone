import { Pipe, PipeTransform } from '@angular/core';
import { MovieId } from '@clone/models';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies: MovieId[], searchValue: string = ''): MovieId[] {
    return movies.filter((item) => item.nameRu.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }
}
