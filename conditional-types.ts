// 조건부 타입 - 타입의 조건에 따라 다른 타입 반환

type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
    message: string;
}

interface Cat {
    message: number;
}

type EmailMessageContents = MessageOf<Email>; // String
type CatMessageContents = MessageOf<Cat>; // number