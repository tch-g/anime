import { Injectable,Component, OnInit, } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { of, Observable, from } from 'rxjs';
import { body } from './interface';
import { AnimeApiServices, ANIME_BASE_URL } from './services/anime-api.services';
import { HttpClient } from '@angular/common/http';
import { Inject, InjectionToken } from '@angular/core';
import { getStorage, ref, deleteObject } from "firebase/storage";



@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {

uid:any


  constructor(private store: AngularFirestore,private auth: AuthService, private animeservice: AnimeApiServices, private http: HttpClient,) {  
  
   }

  
  addAnime(body: any) {
    return from(this.store.collection('catalogue').add(body))
  }

  getAnime(){
    return this.store.collection('catalogue', (ref) => ref.where('uid', '==', this.auth.userId)).valueChanges()
  }
  

  Anime: Observable<any[]> = this.getAnime();
  

  deleteAll(){
    this.store.collection('catalogue').get()
    .toPromise()
    .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      doc.ref.delete();
    });
  });
  }
  

  delete(){
  return this.store.collection('catalogue').doc().delete()

  }

  

  ngOnInit(): void {
   this.getAnime().subscribe((x) => console.log(x))

  }

 



}
