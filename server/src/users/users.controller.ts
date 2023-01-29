import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger/dist";
import { User } from "./users.model";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: "create new user" })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: "Get all users" })
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  // @ApiOperation({ summary: "Get one users" })
  // @Get("/:id")
  // getOneUser(@Param("id") id: string) {
  //   return this.userService.getOneUser(+id);
  // }

  // @ApiOperation({ summary: "Upd one users" })
  // @Patch("/:id")
  // updateUser(@Param("id") id: string) {
  //   return this.userService.updateUser(+id);
  // }

  // @ApiOperation({ summary: "delete one user" })
  // @Delete("/:id")
  // removeUser(@Param("id") id: number) {
  //   return this.userService.removeUser(id);
  // }
}
