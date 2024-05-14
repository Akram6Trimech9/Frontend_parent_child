import { Gender } from "../ts/enum";

export interface UserI {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  gender: Gender;
  phoneNumber:string ;
  userName?:string ;
  image?:string ;
  children:UserI[] ;
}
