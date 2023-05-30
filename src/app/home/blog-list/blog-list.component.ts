import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  articles: any;

  constructor( private data: DataService, private sanitizer: DomSanitizer ) { }

  ngOnInit(): void {

    this.data.getAll()
      .subscribe(
        res=>{
          this.articles = res;
        },
        err=>{
          console.log(err);

        }
      );

  }

  sanitize(description: string) : SafeHtml{
    return this.sanitizer.bypassSecurityTrustHtml(description)
  }
}
