import { GenderEnum } from '@/common';

export interface CustomerDto {
  name: string,
  cpf: string,
  email: string,
  gender: GenderEnum,
  dateOfBirth: string,
  cellPhone?: string
  address: {
    street: string,
    number: number,
    district: string,
    city: string,
    state: string,
    country: string,
    zipCode: string
  }
}
