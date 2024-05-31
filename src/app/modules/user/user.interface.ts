export type Tuser = {
  id: string;
  password: string;
  changePassword?: boolean;
  role: 'Admin' | 'Faculty' | 'Student';
  status: 'in-progress' | 'blocked';
  isDeleted?: boolean;
};
