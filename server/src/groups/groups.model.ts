import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger/dist";
import { User } from "src/users/users.model";
import { UserGroups } from "./group-user.model";

interface groupCreationAttrs {
  name: string;
  description: string;
}

@Table({ tableName: "groups" })
export class Group extends Model<Group, groupCreationAttrs> {
  @ApiProperty({ example: "1", description: "unique id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "YA", description: "group name" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: "This is main group of the module",
    description: "What the group?",
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @BelongsToMany(() => User, () => UserGroups)
  users: User[];
}
