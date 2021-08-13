import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Link } from '../model/link.model';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor() { }
  private valueLink: any = new Subject<Link>();

  public getValueLinkForm() {
    return this.valueLink;
  }

  public addValueLinkFrom(link: Link) {
    this.valueLink.next(link);
  }
}
