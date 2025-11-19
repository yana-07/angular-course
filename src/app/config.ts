import { Inject, Injectable, InjectionToken } from "@angular/core";

export interface AppConfig {
  apiUrl: string;
  courseCacheSize: number
}

export const APP_CONFIG: AppConfig = {
  apiUrl: 'http://localhost:9000',
  courseCacheSize: 10
}

export const APP_CONFIG_TOKEN = new InjectionToken<AppConfig>('APP_CONFIG_TOKEN', 
  // tree-shakeable provider - will not be included in the bundle if not injected
  {
    providedIn: 'root', // global injectable - singleton
    factory: () =>  APP_CONFIG
  });