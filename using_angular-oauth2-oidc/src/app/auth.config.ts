import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://login-dev.sdasystems.org',
  redirectUri: window.location.origin + '/callback',
  clientId: 'democlient_implicitflow',
  scope: 'openid profile email demoapi',
}