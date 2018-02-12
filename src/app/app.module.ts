
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyDealsComponent } from './my-deals/my-deals.component';
import { AllDealsComponent } from './all-deals/all-deals.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { LearninganddevelopmentComponent } from './learninganddevelopment/learninganddevelopment.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { QuickToolsComponent } from './quick-tools/quick-tools.component';
import { AllToolsComponent } from './all-tools/all-tools.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadlineComponent } from './headline/headline.component';

/**
 * Routing and navigation configurations
 */
const appRoutes: Routes = [
  
 { path: '', redirectTo : 'MyDeals', pathMatch : 'full'},
 { path: 'MyDeals', component: MyDealsComponent },
 { path: 'AllDeals', component: AllDealsComponent },
 { path: 'Methodology', component: MethodologyComponent },
 { path: 'LearningandDevelopment', component: LearninganddevelopmentComponent },
 { path: 'Initiatives', component: InitiativesComponent },
 { path: 'QuickTools', component: QuickToolsComponent},
 { path: 'AllTools', component: AllToolsComponent}
];


/**
 * declarations of components
 */
@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent, FooterComponent, MyDealsComponent, AllDealsComponent, MethodologyComponent, LearninganddevelopmentComponent, InitiativesComponent, QuickToolsComponent, AllToolsComponent, HeadlineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
