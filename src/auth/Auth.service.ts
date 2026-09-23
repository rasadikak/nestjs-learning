import { Injectable } from "@nestjs/common";


@Injectable({})
export class AuthService{
    signin(){

    }

    signup(){
        return {msg:'i have signed up'};

    }
}

