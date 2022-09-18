import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import { MongoDsDataSource } from '../datasources/mongo-ds.datasource';
import {Profile, ProfileRelations} from '../models';

export class ProfileRepository extends DefaultCrudRepository<
  Profile,
  typeof Profile.prototype.id,
  ProfileRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Profile, dataSource);
  }
}
