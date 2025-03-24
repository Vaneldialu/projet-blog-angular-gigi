export interface Article {
    id: number;
    title: string;
    content: string;
    slug: string;
    auteur: string;
    photo: string;
    created: string;
    nb_comments: number;
    comment: string[];
    categories: string[];
}
