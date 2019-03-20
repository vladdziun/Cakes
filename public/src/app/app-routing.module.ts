import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'edit/:id',component: EditComponent },
  { path: 'quotes/:id',component: QuotesComponent },
  { path: 'write/:id',component: NewQuoteComponent },
  { path: '',component: HomeComponent },
  { path: 'new',component: NewComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },
  // { path: 'beta',component: BetaComponent },
  // use a colon and parameter name to include a parameter in the url
  // { path: 'gamma/:id', component: GammaComponent },
  // redirect to /alpha if there is nothing in the url
  // { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }