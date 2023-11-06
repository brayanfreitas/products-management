
import { GenderEnum } from '@/common/enums';
import {
    IsEmail,
    IsEnum,
    IsISO8601,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID
  } from 'class-validator';

export class Customer {
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsString()
    name: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsString()
    @IsOptional()
    cellPhone?: string;

    @IsString()
    cpf: string;
    
    @IsNotEmpty()
    @IsEnum(GenderEnum)
    gender: GenderEnum;

    @IsISO8601({ strict: true})
    dateOfBirth: string;

    constructor(
        id: string, 
        name: string, 
        cpf: string,
        email: string,        
        gender: GenderEnum,
        dateOfBirth: string,
        cellPhone?: string,
    ){ 

        this.id = id;
        this.name = name; 
        this.cpf = cpf; 
        this.email = email;
        this.cellPhone = cellPhone;
        this.gender = gender; 
        this.dateOfBirth = dateOfBirth;
    }
}