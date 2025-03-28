import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { CategoryComponent } from './category/category.component';
import { SingleComponent } from './single/single.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { LoginComponent } from './login/login.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

export const routes: Routes = [
    {
        path: '',
        component : LoginComponent
    },
    {
        path : 'articles',
        component : ArticleListComponent
    },
    {
        path: 'categories',
        component : CategoryListComponent
    },
    {
        path: 'article/:id',
        component : SingleComponent
    },
    {
        path : 'create-article',
        component : CreateArticleComponent
    },
    {
        path : 'create-category',
        component : CreateCategoryComponent
    },
    {
        path : 'newsletter',
        component : NewsletterComponent
    }
];
