import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { CategoryComponent } from './category/category.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [
    {
        path: '',
        component : ArticleListComponent
    },
    {
        path: 'categories',
        component : CategoryComponent
    },
    {
        path: 'article/:id',
        component : SingleComponent
    }
];
