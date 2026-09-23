import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./Auth.service";


@Controller('auth')
export class AuthController{

    constructor(private AuthService: AuthService){}

    @Post('signup')
    signup(){
        return this.AuthService.signup();
    }


    @Post('signin')
    signin(){}
}