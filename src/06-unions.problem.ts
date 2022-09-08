type User = {
    id: number;
    firstName: string;
    lastName: string;
} & UserRoleAttributes;

type UserRoleAttributes =
    | {
          role: 'user';
      }
    | {
          role: 'admin';
          adminPassword: string;
      }
    | {
          role: 'super-admin';
          superAdminPassword: string;
      };

type Role = UserRoleAttributes['role'];

export const defaultUser: User = {
    id: 1,
    firstName: 'Matt',
    lastName: 'Pocock',
    role: 'super-admin',
    superAdminPassword: 'asdasd',
};
