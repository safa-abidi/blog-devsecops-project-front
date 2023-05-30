import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: any;
  article: any;
  sanitizedDescription: any;

  constructor(private act: ActivatedRoute , private data : DataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.id = this.act.snapshot.paramMap.get('id');

    this.data.getArticleById(this.id)
      .subscribe(
        res=>{
          this.article = res;
          this.sanitizedDescription = this.sanitizer.bypassSecurityTrustHtml(this.article.description)
        }
      )

  }

}
