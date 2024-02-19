import { Role, Status } from "./enum";
export interface patientDto {
  _id?: string;
  patientId: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  userId: string;
  status: Status;
  image: string;
  desc?: string;
  comment?: string;
  createdAt?: string;
}
export interface addPatientDto {
  _id?: string;
  patientId: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  userId: string;
  image: string;
  desc?: string;
  comment?: string;
}
export interface specialistDto {
  status?: Status;
  comment?: string;
}

export interface userDto {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  isActive?: boolean;
  createdAt?: string;
}
export interface patientCount {
  all: number;
  pending: number;
  progress: number;
  completed: number;
  [key: string]: number;
}
