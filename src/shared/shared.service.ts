import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
    ident(): string {
        return 'Hello indent Shared';
    }

}
