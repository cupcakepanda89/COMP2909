import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { GreenComponent } from './colors.green';
import { RedComponent }   from './colors.red';
import { ColorsComponent } from './colors.component';
const ROUTES = [
    { path: '',      component: ColorsComponent, pathMatch: 'full' },
    { path: 'green', component: GreenComponent, pathMatch: 'full'  },
    { path: 'red',   component: RedComponent, pathMatch: 'full'  }
];
export const colorsRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);
