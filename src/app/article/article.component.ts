import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Link } from '../model/link.model';
import { RedditService } from '../services/reddit.service';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleLink: any[] = [];
  checkTitle: number = 1;
  valueFromForm: Subscription = new Subscription;
  constructor(private redditSer: RedditService) { }

  ngOnInit(): void {
    this.valueFromForm = this.redditSer.getValueLinkForm().subscribe((link: Link) => {
      if(!link.votes) link.votes = 1;
      this.checkTitle = this.articleLink.findIndex(item => item.title === link.title);
      if (this.checkTitle > -1) {
        alert("This Link is available in List!");
      } else {
        this.articleLink.push(link);
      }
      console.log(this.articleLink);
    });

  }

  voteUp(link: any) {
    console.log(link);

    link.votes += 1;
  }
  voteDown(link: any) {
    console.log(link);

    link.votes -= 1;
  }
}
