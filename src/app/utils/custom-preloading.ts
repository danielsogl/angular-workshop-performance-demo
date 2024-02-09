import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: "root" })
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return route.data && route.data['preload'] ? load() : of(null);
  }
}



@Injectable({ providedIn: "root" })
export class CustomNetworkPreloadingStrategy implements PreloadingStrategy {
  preload(_route: Route, load: () => Observable<unknown>): Observable<unknown> {
    const connection = (navigator as any).connection;
    if (connection.saveData || connection.effectiveType.includes('2g')) {
      return of(null);
    } else {
      return load();
    }
  }
}
