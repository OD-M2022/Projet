import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';

// ---------- ADD IMPORTS -------------
import {AuthenticationComponent} from '@loopback/authentication';
import {
  JWTAuthenticationComponent, TokenServiceBindings, UserServiceBindings
} from '@loopback/authentication-jwt';
import {MongoDsDataSource} from './datasources/mongo-ds.datasource';
import { CustomUserService } from './services/user.service';
import { UserRepository, UserCredentialsRepository } from './repositories';
// ------------------------------------


export {ApplicationConfig};

export class BackendApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };

    // ------ ADD SNIPPET AT THE BOTTOM ---------
     // Mount authentication system
     this.component(AuthenticationComponent);
     // Mount jwt component
     this.component(JWTAuthenticationComponent);
     // Bind datasource
     this.dataSource(MongoDsDataSource, UserServiceBindings.DATASOURCE_NAME);
     // ------------- END OF SNIPPET -------------
     this.bind(UserServiceBindings.USER_SERVICE).toClass(CustomUserService),

     // Bind user and credentials repository
    this.bind(UserServiceBindings.USER_REPOSITORY).toClass(UserRepository)
    
    this.bind(UserServiceBindings.USER_CREDENTIALS_REPOSITORY).toClass(
      UserCredentialsRepository,
    )
     // this.bind(TokenServiceBindings.TOKEN_EXPIRES_IN).to("1");

  }
}
