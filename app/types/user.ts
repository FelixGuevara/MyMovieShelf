// types/user.ts
export type UserStatus = 'Active' | 'Inactive';
export type UserRole = 'Admin' | 'Enthusiast';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  dateAdded: string;   // ISO date string (YYYY-MM-DD) recommended
  status: UserStatus;
  lastLogin: string;   // consider ISO datetime if you’ll sort/filter by time
}
