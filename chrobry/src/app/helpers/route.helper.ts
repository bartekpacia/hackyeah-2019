import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

export function getActiveRoute(route: ActivatedRoute): ActivatedRouteSnapshot {
  if (!route) {
    return undefined;
  }

  let snapshot: ActivatedRouteSnapshot = route.snapshot;
  while (snapshot.firstChild) {
    snapshot = snapshot.firstChild;
  }

  return snapshot;
}
