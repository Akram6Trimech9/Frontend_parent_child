import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiRoutes } from '../ts/api-routes';
import { UserI } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ParentKidsService {
  private userSubject = new BehaviorSubject<UserI | null>(null);
  public user = this.userSubject.asObservable();
  constructor(private http: HttpClient, private router: Router) {}

  getParents(): Observable<UserI[]> {
    return this.http.get<UserI[]>(`${ApiRoutes.parent}`);
  }

  navigateToProfile(user: UserI) {
    this.userSubject.next(user);
    this.router.navigateByUrl(`/profile/${user.id}`);
  }
  resetUserSubject() {
    this.userSubject.next(null);
  }

  getUserById(id :number) :Observable<UserI>{
      return this.http.get<UserI>(`${ApiRoutes.parent}/${id}`)
  }

    updateUser(id :number, record : Partial<UserI>) :Observable<UserI>{
      return this.http.put<UserI>(`${ApiRoutes.parent}/${id}`,record)
  }
}
