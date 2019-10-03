import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface UserDetails {
  id: number
  first_name: string
  last_name: string
  user_type: string
  email: string
  password: string
  gender: string
  contact_no: string
  isActivated: boolean
  exp: number
  iat: number
}

interface TokenResponse {
    token: string
  }
  
  export interface TokenPayload {
    id: number
    first_name: string
    last_name: string
    user_type: string
    email: string
    password: string
    gender: string
    contact_no: string
    isActivated: boolean
  }



  @Injectable()
export class AuthenticationService {
  private token: string

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('token', token)
    this.token = token
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token')
    }
    return this.token
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(`/users`, user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }


  public profile(): Observable<any> {
    return this.http.get(`/users/profile`, {
      headers: { Authorization: ` ${this.getToken()}` }
    })
  }

//   public skillprofile(): Observable<any> {
//     return this.http.get(`/users/skillprofile`, {
//       headers: { Authorization: ` ${this.getToken()}` }
//     })
//   }


  public editProf(user: TokenPayload): Observable<any> {

    const base = this.http.post(`/users/editProf`, user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  
  public logout(): void {

    if(window.confirm("Do you want to logout")){
    this.token = ''
    window.localStorage.removeItem('token')
    this.router.navigateByUrl('/')
    }
  }

  public uploadProfileImage(fd):Observable<any>{
    return  this.http.post(`/users/proImage`,fd)
  }

 



}





