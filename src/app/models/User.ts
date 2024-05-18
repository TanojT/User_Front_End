export class User {
  jwt!:string;
  userId!: string;
  username!: string;
  firstName!: string;
  lastName!: string;
  riceMillName!: string;
  password!: string;
  expireOn!: Date;
  userType: string = "MEMBER";
  createdBy!: string;
  createdOn!: Date;
  modifiedBy!: string;
  modifiedOn!: Date;
  roles!:string[];
}
