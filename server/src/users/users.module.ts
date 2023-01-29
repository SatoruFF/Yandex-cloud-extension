import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Group } from "src/groups/groups.model";
import { GroupsModule } from "src/groups/groups.module";
import { UserGroups } from "src/groups/group-user.model";
import { UsersController } from "./users.controller";
import { User } from "./users.model";
import { UsersService } from "./users.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Group, UserGroups]),
    GroupsModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
