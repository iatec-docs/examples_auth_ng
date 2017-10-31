import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  apiresponse = "API not called yet.";
  constructor(private oauthService: OAuthService, private http: Http) {
    this.configureWithNewConfigApi();
  }
  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  public callApi() {
    let headers = new Headers({
      "Authorization": "Bearer " + this.oauthService.getAccessToken()
    });
    this.http.get('http://localhost:4000/demo/test', { headers: headers })
      .subscribe(resp => {
        debugger;
        if (resp.status == 0) this.apiresponse = "Could not connect to the API.";
        else this.apiresponse = `API response status:${resp.status} ${resp.statusText}\n\n${resp.json()}`;
      }, err => {
        this.apiresponse = `Error: ${err}`;
      });
  }
  
  public get name() {
    let claims: any = this.oauthService.getIdentityClaims();
    if (!claims) return 'Anonymous User';
    return claims.name;
  }
}
