import { Role, Status } from "./enum";
export interface radiologyDto {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  userId: string;
  image: string;

  createdAt?: string;
}
export interface patientDto {
  _id?: string;
  patientId: string;
  image: string;
  userId: string;
  status: Status;
  desc?: string;
  userName: string;
  specialistName: string;
  comment?: string;
  createdAt?: string;
}
export interface addRadiologyDto {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  userId: string;
}
export interface addPatientDto {
  _id?: string;
  userId: string;
  patientId: string;
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
  patientCount: number;
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
