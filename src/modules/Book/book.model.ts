import { ObjectId } from "mongodb";

export interface Book {
    _id?: ObjectId;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    isbn: string;
    authorId: ObjectId;
    year?: number;
    available: boolean;

}

export interface BookDTO {
    title?: string;
    isbn?: string;
    authorId?: string;
    year?: number;
    available?: boolean;
}