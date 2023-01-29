import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { where } from "sequelize";
import { GroupsService } from "src/groups/groups.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { RegUserDto } from "./dto/regUser.dto";
import { User } from "./users.model";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private groupService: GroupsService
  ) {}

  async createUser(dto: CreateUserDto | RegUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  // async getOneUser(id) {
  //   const user = await this.userRepository.findOne({ where: {id} });
  //   return user;
  // }

  // async updateUser(id, dto) {
  //   const user = await this.userRepository.update(id, dto);
  //   return user;
  // }

  // async removeUser(id) {
  //   const user = await this.userRepository.remove({ where: {id} })
  // }
}

// const role = await this.roleService.getRoleByValue("USER")
// user.$set('roles', [role.id])
// user.roles = [role]
