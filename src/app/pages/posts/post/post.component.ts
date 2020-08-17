import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()  mensaje: any;
  @Output() clickPosts = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    console.log(this.mensaje.id);
    this.clickPosts.emit(this.mensaje.id);
  }

}
