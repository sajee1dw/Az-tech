import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { InvestorCard, Price } from '../models/investor-card.model';
//import { InvestorRequest } from 'src/app/shared/models/request.model';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class professionalService {

    constructor(
        private http: Http,
    ) { }

    investorList: InvestorCard[] = [];

    d: string = 'all';
    s: string = 'all';

    private subject = new Subject<any>();

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    sendMessageLocation(location: string) {
        // console.log(location + 'from service');
        this.d = location;
        this.getMessageInvestor();
    }

    sendMessageSubject(subject: string) {
        this.s = subject;
        this.getMessageInvestor();
    }

    sendMessageName(name: string) {
        this.investorList = [];
        this.http.post('https://guarded-beyond-19031.herokuapp.com/searchByName', { 'name': name })
            .subscribe(res => {
                this.investorList = res.json().user;
                this.subject.next({ 'investor': this.investorList });
            });
        this.d = 'all';
        this.s = 'all';

    }

    getMessageInvestor() {
        this.investorList = [];
        this.http.post('https://guarded-beyond-19031.herokuapp.com/newsearch', { 'district': this.d, 'subject': this.s, 'id': 0 })
            .subscribe(res => {
                console.log(res.json());
                let arr = [res.json().gold, res.json().silver, res.json().bronze, res.json().nonBoosted];

                for (let i of arr) {
                    for (let item of i) {
                        this.investorList.push(item);
                    }
                }
                this.subject.next({ 'investor': this.investorList });
            })
    }

    filterInvestor() {
        /* for(var i=0; i<this.investorList.length; i++){
            if(this.investorList[i].price < price.max && this.investorList[i].price > price.min){

            }
        } */
        this.subject.next({ investor: [] });
    }

    getAllInvestor() {
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/search', { 'district': 'all', 'subject': 'all' });
    }

    getAllSubjects() {
        return this.http.get('https://guarded-beyond-19031.herokuapp.com/subject');
    }

    getInvestorProfile(email: string) {
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/viewProfile', { 'email': email, 'role': 'investor' });
    }

    // sendRequest(request: InvestorRequest) {
    //     return this.http.post('https://guarded-beyond-19031.herokuapp.com/makeRequest', request);
    // }

    getAllrequests(professional) {
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/viewMyRequests', { 'professional': professional });
    }

    cancelReq(id) {
        return this.http.post("https://guarded-beyond-19031.herokuapp.com/cancelRequest", { 'id': id });
    }

    rateInvestor(rate) {
        return this.http.post("https://guarded-beyond-19031.herokuapp.com/rate", rate);
    }

    reviewInvestor(review) {
        return this.http.post("https://guarded-beyond-19031.herokuapp.com/writeReview", review);
    }


    getAchievements(email) {
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/getAchievements', { 'investor': email });
    }

    newSearch(id) {
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/newsearch', { 'district': this.d, 'subject': this.s, 'id': id });
    }

    uploadImage(img) {
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/uploadImage', img);
    }



    getProfessionalProfile(email: String) {
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/viewProfile', { 'email': email, 'role': 'professional' });
    }

}
