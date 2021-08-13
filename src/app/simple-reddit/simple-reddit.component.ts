import { Component, OnInit } from '@angular/core';
import { Link } from '../model/link.model';
import { RedditService } from '../services/reddit.service';

@Component({
  selector: 'app-simple-reddit',
  templateUrl: './simple-reddit.component.html',
  styleUrls: ['./simple-reddit.component.css']
})
export class SimpleRedditComponent implements OnInit {
  constructor(private redditSer: RedditService) { }

  ngOnInit(): void {
  }

  submitMethod(refForm: any) {
   console.log(refForm);
   this.redditSer.addValueLinkFrom(refForm.form.value);
  }

}
