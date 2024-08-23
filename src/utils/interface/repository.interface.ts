import {IUser} from './user.interface';

export interface IRepository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  owner: IUser;
  html_url: string;
}

export interface IRepositoryDetail extends IRepository {
  created_at: string;
  updated_at: string;
  default_branch: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string;
  git_url: string;
  homepage: string;
  size: number;
}
