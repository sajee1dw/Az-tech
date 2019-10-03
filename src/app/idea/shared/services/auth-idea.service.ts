import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/professional/shared/services/authentication.service';

export interface IdeaDetails{
  id: number
  client_ID: number
  idea_name: string
  idea_category: string
  idea_description: string
  // payment: string
  // exp: number
  // iat: number
}

export interface ideaPayload{
  id: number
  client_ID: number
  idea_name: string
  idea_category: string
  idea_description: string
  // payment: string
}

// export interface BidDetails{
//   id: number
//   idea_ID: number
//   maximum_value: string
//   start_date: string
//   exp: number
//   iat: number
// }

// export interface BidPayload{
//   id: number
//   idea_ID: number
//   maximum_value: string
//   start_date: string
// }

export interface ConfirmedPro{
id:number
developer_ID: number
client_ID: number
idea_ID: number
category: string
isCompleted: boolean
}


@Injectable()
export class AuthIdeaService {

constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {}

public addidea(idea:ideaPayload): Observable<any> {
  return this.http.post(`/users/idea/addIdea`, idea)
}

public viewAllidea(): Observable<any> {
  return this.http.get(`/users/viewAllidea`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
}

public viewidea(idea:ideaPayload): Observable<any> {
  return this.http.post(`/users/idea/viewidea`, idea)
}

public editidea(idea:ideaPayload): Observable<any> {
  return this.http.post(`/users/idea/editidea`, idea)
}

public deleteidea(idea:ideaPayload): Observable<any> {
  return this.http.post(`/users/idea/deleteidea`, idea)
}

// public addBid(bid:BidPayload): Observable<any> {
//   return this.http.post(`/users/idea/startBid`, bid)
// }


// public viewBid(bid:BidPayload): Observable<any> {
//   return this.http.post(`/users/idea/viewBid`, bid)
// }

// public editBid(bid:BidPayload): Observable<any> {
//   return this.http.post(`/users/idea/editBid`, bid)
// }

// public viewBidRequest(idea:ideaPayload):Observable<any>{
//   return this.http.post(`/users/idea/viewBidReq`,idea)
// }

public viewideaRequest(idea:ideaPayload):Observable<any>{
  return this.http.post(`/users/idea/viewProReq`,idea)
}

public viewRequestDeveloper(idea:ideaPayload):Observable<any>{
  return this.http.post(`/users/idea/viewReqDev`,idea)
}

public Confirmedidea(details: ConfirmedPro):Observable<any>{
  return this.http.post(`/users/idea/acceptPro`, details)
}


}