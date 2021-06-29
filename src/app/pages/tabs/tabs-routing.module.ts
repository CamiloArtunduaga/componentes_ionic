import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'account',
        loadChildren: () => import('../avatar/avatar-routing.module').then ( m => m.AvatarPageRoutingModule )
      }
    ]
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'contact',
        loadChildren: () => import('../grid/grid-routing.module').then ( m => m.GridPageRoutingModule )
      }
    ]
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'settings',
        loadChildren: () => import('../infinite/infinite-routing.module').then ( m => m.InfinitePageRoutingModule )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
