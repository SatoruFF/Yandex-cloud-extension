import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger/dist";
import { Group } from "src/groups/groups.model";
import { UserGroups } from "src/groups/group-user.model";

interface userCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, userCreationAttrs> {
  @ApiProperty({ example: "1", description: "unique id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Satoru", description: "first name" })
  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "test",
  })
  firstName: string;

  @ApiProperty({ example: "Fujinuma", description: "last name" })
  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "test",
  })
  lastName: string;

  @ApiProperty({ example: "satoru@dev.com", description: "email" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: "qwerty", description: "password" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: "true", description: "if you banned, keep true" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({ example: "spam", description: "Ban Reason" })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;

  @ApiProperty({ example: "ADMIN", description: "Your role" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: "student",
  })
  role: string;

  @ApiProperty({ example: 100, description: "Yandex Budget" })
  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  budget: number;

  @BelongsToMany(() => Group, () => UserGroups)
  users: Group[];
}
