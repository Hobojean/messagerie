import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/getAll')
  async findAll(): Promise<User[]> {
    const users = await this.userService.findAll();
    return users;
  }

  @Post()
  create(@Body() userDto: UserDto) {
    const newUser = this.userService.createUser(userDto);
    return newUser;
  }
}
