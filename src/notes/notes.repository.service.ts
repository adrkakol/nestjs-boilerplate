import {Injectable} from "@nestjs/common";

@Injectable()
export class NotesRepositoryService {
    public getNote(id: string) {
        return {
            id,
            titile: "Note from repository",
            message: "Some message",
            userId: "123123123"
        }
    }
}