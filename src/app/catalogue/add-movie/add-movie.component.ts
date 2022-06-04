import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { AnimeApiServices } from '../services/anime-api.services';
import { filter, finalize, map, switchMap } from "rxjs/operators";
import { of, Observable, Subject, from } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CatalogueComponent } from '../catalogue.component';
import { animeBody } from '../interface';








@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})


export class AddMovieComponent implements OnInit {
  
  searchKey: any;
  hasError: any;
  animeErr: any;
  submitted: boolean = false;
  

  form = new FormGroup({});

  

  lastThreeSearches: string[] = [];

  private _selectAnime: any;
  
  get selectAnime():any{
  return this._selectAnime
     
  }
  
  
 
  

  constructor(private animeApiServices: AnimeApiServices, private store: AngularFirestore, private auth: AuthService, private toastr: ToastrService, private catalog: CatalogueComponent) { }

 
private addLastSearches(name: string){
  if(this.lastThreeSearches.length < 3){
    this.lastThreeSearches = [name, ...this.lastThreeSearches];
    return;
  }
  this.lastThreeSearches = [name, ...this.lastThreeSearches.slice(0, 2)];
}


private fetchAnime(name: any){
  this.animeApiServices.getAnimeByName(name).pipe(filter((users) => users.Genre.includes("Animation")),finalize(() => (this.searchKey = "")), switchMap(res =>{return of(res)})).subscribe((poster) => this._selectAnime = poster)
}


  search(){
    if(!this.searchKey){
      this.hasError = true; 
      return;
    }
    
    this.hasError = false;
 
      
    
  
    this.animeApiServices.getAnimeByName(this.searchKey).pipe(filter((users) => users.Genre.includes("Animation")),finalize(() => (this.searchKey = ""))).subscribe(x =>console.log(x))

    this.addLastSearches(this.searchKey);
    this.fetchAnime(this.searchKey)
    

  }
 sumbit(){
   this.submitted = true;
   const body: any = {
       title: this._selectAnime.Title,
       rating: this._selectAnime.imdbRating,
       uid: this.auth.userId,
       year: this._selectAnime.Year,
       plot: this._selectAnime.Plot,
       genre: this._selectAnime.Genre,
       poster: this._selectAnime.Poster,
       time: this._selectAnime.Runtime,
   }
   this.catalog.addAnime(body).subscribe(() => this.reset())
  //  from(this.store.collection('catalogue').add(body)).subscribe(() => this.reset())
 }
 



reset(){
this._selectAnime = null;
this.form.reset();
this.toastr.success('Anime has been added');
}




  
  ngOnInit(): void {
    
  }

}
