import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue.component';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimeApiServices, ANIME_BASE_URL } from './services/anime-api.services';
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [
    CatalogueComponent,
    AddMovieComponent
  ],
  imports: [
    CommonModule, CatalogueRoutingModule,SharedModule, FormsModule,ReactiveFormsModule,
  ],
  exports: [ ],
  providers:[AnimeApiServices, {
    provide: ANIME_BASE_URL,
    useValue: environment.animeApiBase,
  }, CatalogueComponent,  AddMovieComponent]
})
export class CatalogueModule { }
