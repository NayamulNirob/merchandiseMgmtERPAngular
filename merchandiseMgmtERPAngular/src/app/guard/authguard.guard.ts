import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";


@Injectable({
  providedIn:'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(
    private authService:AuthService,
    private router:Router

  ){}

  canActivate(): boolean{
    if(this.authService.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['/']);
      return false
    }
  }
  
};
