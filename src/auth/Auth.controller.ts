import { Controller, Post, Req, Body } from "@nestjs/common";
import { AuthService } from "./Auth.service";
import { AuthDto } from "./dto/Auth.dto";


@Controller('auth')
export class AuthController{

    constructor(private AuthService: AuthService){}

    @Post('signup')
    signup(@Body() dto:AuthDto){

        console.log({dto: AuthDto});

        return this.AuthService.signup(dto);
    }


    @Post('signin')
    signin(){}
}