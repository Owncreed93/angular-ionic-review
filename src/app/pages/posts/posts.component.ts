import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor( private dataService: DataService) { }

  ngOnInit(): void {

    this.mensajes = this.dataService.getPosts()
                        .pipe( tap( posts => {
                          console.log(posts);
                        })
                      );
        // .subscribe( (posts: any[]) => {
        //   console.log(posts);
        //   this.mensajes = posts;
        // });
  }

  escuchaClick( id: number ): void{
    console.log('Click en : ', id );
  }

}
