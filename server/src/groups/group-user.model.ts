import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger/dist";
import { User } from "src/users/users.model";
import { Group } from "./groups.model";

@Table({ tableName: "user_groups", createdAt: false, updatedAt: false })
export class UserGroups extends Model<UserGroups> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Group)
  @Column({
    type: DataType.INTEGER,
  })
  groupId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;
}
