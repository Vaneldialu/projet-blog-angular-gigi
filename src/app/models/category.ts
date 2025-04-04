import { ArticleApi } from "./article-api";

export interface Category {
    id: number;
    name: string;
    description : string
    article: ArticleApi[],
}
