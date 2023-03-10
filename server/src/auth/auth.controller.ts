import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RegUserDto } from 'src/users/dto/regUser.dto';
import { AuthService } from './auth.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }

    @Post('/registration')
    registration(@Body() regUserDto: RegUserDto){
        return this.authService.registration(regUserDto)
    }
}
