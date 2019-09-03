import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InvestorService {

  constructor(
    private http: Http
  ) { }

  getAllSubjects() {
    return this.http.get("https://guarded-beyond-19031.herokuapp.com/subject");
  }

  getInvestorProfile(email: String) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/viewProfile', { 'email': email, 'role': 'investor' });
  }

  getAllRequests(email) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/viewAllRequests', { 'investor': email });
  }

  addAchievement(achievment) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/addAchievement', achievment);
  }

  getAchievements(email) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/getAchievements', { 'investor': email });
  }

  deleteAchievement(p) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/deleteAchievement', p);
  }

  hideAchievement(p) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/toggleAchievement', p);
  }

  acceptRequests(id) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/acceptRequest', { 'id': id });
  }

  rejectRequests(id) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/rejectRequest', { 'id': id });
  }

  editProfile(user) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/editProfile', user);
  }

  uploadImage(img) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/uploadImage', img);
  }

  // ========= Boost ==========

  boost(investor) {
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/boost", investor);
  }

  getCount(investor) {
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/getCount", investor);
  }

  acceptBoost(boost) {
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/boostProfile", boost);
  }

  renewBoost(boost) {
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/renewBoost", boost);
  }


  getNews(){
    return this.http.get("https://guarded-beyond-19031.herokuapp.com/getNews");
  }

  uploadAchievementImage(file){
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/uploadAchievementImage", file);
  }


  graphService(subject){
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/graph", subject);
  }



}
