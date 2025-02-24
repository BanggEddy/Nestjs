import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/models/user/user.interface';
import { data } from 'src/data'; 

@Injectable()
export class UserService {
    private users: UserInterface[] = [];

    constructor() {
        this.getData(data);
    }

    getData(data: UserInterface[]): void {
        data.forEach((user: UserInterface) => this.users.push(user));
    }

    getAllUsers(): UserInterface[] {
        return this.users;
    }
    create(user:UserInterface) : void
    {
        this.users.push(user);
    }

    getUserOne(id : number): UserInterface | undefined {
        return this.users.find((user : UserInterface) => user.id === id)
    }

    ident(): any {
        return 'Hello indent User';
    }
}