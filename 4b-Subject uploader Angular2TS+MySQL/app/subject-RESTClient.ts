import {Injectable} 		from 'angular2/core';
import {Observable} 		from 'rxjs/Observable';

import {Request, Response} 	from 'angular2/http';
import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'angular2-rest';

import {Subject} 		from './subject';

@Injectable()
@BaseUrl("http://localhost:3000/api/")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class SubjectRESTClient extends RESTClient {

    protected requestInterceptor(req: Request) {
        // do sq with requests
    }

    protected requestInterceptor(req: Response) {
        // do sg with responses
    }

    @GET("subjects")
    public getSubjects( @Query("code") code?: string): Observable { return null; };

    @POST("subjects")
    public postSubject( @Body subject: Subject): Observable { return null; };

    @PUT("subjects/{code}")
    public putSubject( @Path("code") code: string, @Body subject: Subject): Observable { return null; };

    @DELETE("subjects/{code}")
    public deleteSubject( @Path("code") code: string): Observable { return null; };

}