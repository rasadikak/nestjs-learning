import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import { PrismaService } from "../prisma/prisma.service";
import * as argon from 'argon2';


@Injectable({})
export class AuthService{

    constructor(private readonly prisma: PrismaService){}


    signin(){

    }

    async signup(dto: AuthDto){

        const hash = await argon.hash(dto.password);

        const user = await this.prisma.user.create({
            data:{
                email:dto.email,
                hash
            },
            select:{
                id:true,
                email:true
            }
        })
        return user;

    }
}

