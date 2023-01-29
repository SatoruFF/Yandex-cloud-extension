import { ApiProperty } from "@nestjs/swagger/dist";


export class CreateUserDto {

    @ApiProperty({ example:  'satoru@dev.com', description: 'User email'})
    readonly email: string;

    @ApiProperty({ example:  'qwerty', description: 'User password'})
    readonly password: string;
}