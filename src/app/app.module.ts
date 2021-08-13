import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NgContentPanelComponent } from './ng-content-panel/ng-content-panel.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SimpleRedditComponent } from './simple-reddit/simple-reddit.component';
import { ArticleComponent } from './article/article.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    NgContentPanelComponent,
    ReactiveFormComponent,
    SimpleRedditComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
