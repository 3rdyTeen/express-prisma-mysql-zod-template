import { type UserStatusType } from '@/datas/users/user-schema';
import { type Users } from '@prisma/client';

type OverrideIdAndDates<TTable> = Omit<TTable, 'id' | 'created_at'> & {
  id: string;
  created_at: Date | string;
};

/** ----------------  User Types  ----------------   */
type OverrideUsers = Omit<OverrideIdAndDates<Users>, 'status'> & {
  status: UserStatusType;
};

export type TUserID = OverrideUsers['id'];
export type TUserRead = Omit<OverrideUsers, 'created_at'>;
export type TUserWrite = Omit<OverrideUsers, 'id' | 'created_at'>;
