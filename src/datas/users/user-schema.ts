import { z } from 'zod';

/** ----------------  User Schema  ----------------   */

const UserStatusType = {
  Active: 'Active',
  Deactivated: 'Deactivated',
} as const;

export const userSchema = z.object({
  email: z.string().email(),
  firstname: z.string(),
  lastname: z.string(),
  status: z.nativeEnum(UserStatusType),
});

/** ----------------  User Types  ----------------   */

export type UserStatusType = (typeof UserStatusType)[keyof typeof UserStatusType];
export type TUserSchema = z.infer<typeof userSchema>;
