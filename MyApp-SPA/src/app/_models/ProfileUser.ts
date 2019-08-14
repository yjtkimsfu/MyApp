import { Photo } from './photo';

export interface ProfileUser {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    knownAs: string;
    dateOfBirth: Date;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;

    city: string;
    state: string;
    country: string;
    zipcode: string;

    phoneNumber: number;
    email: string;

    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
