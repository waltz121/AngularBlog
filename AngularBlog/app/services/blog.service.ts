import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BlogPost } from '../class/blogPost';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BlogService {

    constructor(private http: HttpClient) { }

    saveBlog(fm: BlogPost): Observable<any> {
        const url = "/api/Blog/saveBlogInfo";

        return this.http.post(url, fm, httpOptions);
    }

    getAllBlog(): Observable<BlogPost[]> {
        const url = "/api/Blog/getAllBlogPosts";

        return this.http.get<BlogPost[]>(url);
    }

    deleteBlog(ID: number): Observable<any> {
        const url = "/api/Blog/deleteBlog?id=" + ID;

        return this.http.put(url, httpOptions);
    }

}