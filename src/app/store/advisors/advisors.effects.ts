import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AdvisorsActions } from './advisors.actions';
import { AdvisorsService } from '@core/api/advisors.service';

@Injectable()
export class AdvisorsEffects {
  loadAdvisors$ = createEffect(() => 
    { return this.actions$.pipe(
      ofType(AdvisorsActions.loadAdvisors),
      switchMap(() => this.advisorsService.getAdvisors()
        .pipe(
          map(advisors => AdvisorsActions.loadAdvisorsSuccess({ advisors })),
          catchError(error => of(AdvisorsActions.loadAdvisorsFailure({ error })))
        ))
    ) }
  );

  constructor(
    private actions$: Actions,
    private advisorsService: AdvisorsService
  ) {}
}