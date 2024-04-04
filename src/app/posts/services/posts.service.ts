import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PostInterface } from '../types/post.interface';

//generate PostsService
@Injectable()
export class PostsService {
  getPosts(): Observable<PostInterface[]> {
    const posts = [
      {
        title: 'Post 1',
        content: 'This is post 1 content.',
      },
      {
        title: 'Post 2',
        content: 'This is post 2 content.',
      },
      {
        title: 'Post 3',
        content: 'This is post 3 content.',
      },
    ];
    return of(posts).pipe(delay(3000));
  }
}
