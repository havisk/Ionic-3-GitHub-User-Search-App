import { Component, Input } from '@angular/core';
import {Repository} from '../../models/repository.interface'


@Component({
  selector: 'repositories',
  templateUrl: 'repositories.html'
})
export class RepositoriesComponent {

  @Input() repositories: Repository;


}
