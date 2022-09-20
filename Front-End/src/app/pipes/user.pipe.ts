import { Pipe, PipeTransform } from '@angular/core';
import { UserItem } from '../models/user';

@Pipe({ name: 'filterByStatut' })
export class UserPipe implements PipeTransform {
  transform(users: UserItem[], filterStatut: string) {
    if (filterStatut === 'ALL' || filterStatut === '') {
        return users
    }
    return users.filter((user: UserItem) => user.profile.statut === filterStatut);
  }
}

/////// Identical except for the pure flag
// @Pipe({
//   name: 'profileStatutFilter',
//   pure: false
// })
// export class UserPipe extends FlyingHeroesPipe {

// }