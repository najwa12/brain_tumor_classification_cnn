
import 'reflect-metadata';
import 'es6-shim';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {UrlService} from 'src/urlService';
import {TranslateService} from 'ng2-translate/ng2-translate';

import {SpotyngularApp} from './app';

// noinspection TypeScriptValidateTypes
bootstrap(SpotyngularApp, [HTTP_PROVIDERS, ROUTER_PROVIDERS, TranslateService, UrlService])
  .catch(err => console.error(err));
