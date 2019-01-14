export interface IUser {
  id: number;
  name: string;
  isAdmin: boolean;
}

export const adminUsersData: IUser[] = [
  { id: 1, name: 'Fred', isAdmin: false },
  { id: 2, name: 'Bob', isAdmin: false },
  { id: 3, name: 'Jane', isAdmin: true },
  { id: 4, name: 'John', isAdmin: true }
];
