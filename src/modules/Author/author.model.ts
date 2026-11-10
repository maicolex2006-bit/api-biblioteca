import { ObjectId } from "mongodb";

export interface Author {
    _id?: ObjectId;
    name: string;
    birthYear?: number;
    createdAt: Date;
    updatedAt: Date;
    nationality: string;
}

export interface AuthorDTO {
    name?: string;
    nationality?: string;
    birthYear?: number;
}