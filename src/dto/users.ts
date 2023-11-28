export type usersListQueryDto = {
  login?: string;
  skip?: number;
  limit?: number;
  sortField?: string;
  sortAsc?: string;
};

export type userDto = {
  active: boolean;
  created_at: string;
  email: string;
  id: string;
  login: string;
};

export type userListDto = {
  users: userDto[];
  count: number;
};
