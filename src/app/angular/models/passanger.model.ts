export interface Children {
  name: string;
  age: number;
}
export interface Passanger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
  children?: Children[];
}
