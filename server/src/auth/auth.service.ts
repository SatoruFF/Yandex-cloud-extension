import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import {
  HttpException,
  UnauthorizedException,
} from "@nestjs/common/exceptions";
import { JwtService } from "@nestjs/jwt/dist";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { RegUserDto } from "src/users/dto/regUser.dto";
import { UsersService } from "src/users/users.service";
import * as bcrypt from "bcryptjs";
import { User } from "src/users/users.model";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(regUserDto: RegUserDto) {
    const candidate = await this.userService.getUserByEmail(regUserDto.email);
    if (candidate) {
      throw new HttpException("user already exists", HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(regUserDto.password, 5);
    const user = await this.userService.createUser({
      ...regUserDto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = {id: user.id, email: user.email, lastName: user.lastName, firstName: user.firstName, role: user.role, budget: user.budget };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    if (!user) {
      throw new UnauthorizedException({ message: "email not found" });
    }
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password
    );
    if (user && passwordEquals) {
      return user;
    } else {
      throw new UnauthorizedException({
        message: "Uncorrect email or password",
      });
    }
  }
}
