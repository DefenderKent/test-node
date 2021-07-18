import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepasitory: typeof Role) {}
  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepasitory.create(dto);
    return role;
  }
  async getRoleByValue(value: string) {
    const role = await this.roleRepasitory.findOne({ where: { value } });
    return role;
  }
}
