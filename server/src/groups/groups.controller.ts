import { Controller } from "@nestjs/common";
import {
    Delete,
  Get,
  Patch,
  Post,
  Put,
} from "@nestjs/common/decorators/http/request-mapping.decorator";
import {
  Body,
  Param,
} from "@nestjs/common/decorators/http/route-params.decorator";
import { createGroupDto } from "./dto/createGroup.dto";
import { GroupsService } from "./groups.service";

@Controller("groups")
export class GroupsController {
  constructor(private groupService: GroupsService) {}

  @Post()
  create(@Body() dto: createGroupDto) {
    return this.groupService.createGroup(dto);
  }

  @Get("/:name")
  getByName(@Param("name") name: string) {
    return this.groupService.getGroupByName(name);
  }

  @Get()
  getAll() {
    return this.groupService.getAllGroups();
  }

  // @Patch('/:name')
  // updateGroup(@Param("name") name: string, @Body() dto: createGroupDto) {
  //   return this.groupService.updateGroup(name)
  // }

  // @Delete('/:name')
  // deleteGroup(@Param("name") name: string) {
  //   return this.groupService.removeGroup(name)
  // }
}
