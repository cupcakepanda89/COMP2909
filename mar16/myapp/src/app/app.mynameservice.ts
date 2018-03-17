import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MyNameService {
    private dataUrl = './assets/test.json';  // URL to web API
    constructor(private http: Http) { }

    // Create worker on a separate thread
    // And request remote resources
    getNames(): Observable<string[]> {
        return this.http.get(this.dataUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Receive error
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    // catch the error
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}