import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    getPosts(): string {
        return 'Hello Posts!';
    }

    getHello(): string {
        return 'Hello from /posts/hello!2'; 
    }
}
