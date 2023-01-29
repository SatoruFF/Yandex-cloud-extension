import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { createGroupDto } from "./dto/createGroup.dto";
import { Group } from "./groups.model";

@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group) private groupRepository: typeof Group) {}

  async createGroup(dto: createGroupDto) {
    const group = await this.groupRepository.create(dto);
    return group;
  }

  async getGroupByName(name: string) {
    const group = await this.groupRepository.findOne({ where: { name } });
    return group;
  }

  async getAllGroups() {
    const group = await this.groupRepository.findAll()
    return group;
  }

  // async updateGroup(groupName: string) {
  //   // const updGroup = await this.groupRepository.update({});
  //   // return updGroup;
  // }

  // async removeGroup(groupName: string) {}
}
