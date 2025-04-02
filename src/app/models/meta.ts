import { Link } from './link';
import { Links } from './links';
export interface Meta {
    from: number,
    last_page: number,
    path:string,
    current_page: number,
    per_page: number,
    to:number,
    total:number,
    links:Link[]
}
