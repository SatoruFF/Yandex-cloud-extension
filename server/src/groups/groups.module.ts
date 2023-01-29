import { Module } from "@nestjs/common";
import { GroupsService } from "./groups.service";
import { GroupsController } from "./groups.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Group } from "./groups.model";
import { User } from "src/users/users.model";
import { UserGroups } from "./group-user.model";

@Module({
  providers: [GroupsService],
  controllers: [GroupsController],
  imports: [SequelizeModule.forFeature([Group, User, UserGroups])],
  exports: [GroupsService],
})
export class GroupsModule {}
