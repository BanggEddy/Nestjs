import { UserInterface } from './user.interface';

export class User implements UserInterface {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    mdp: string;

}
