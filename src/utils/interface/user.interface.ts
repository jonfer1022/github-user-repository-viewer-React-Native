export interface IUser {
  id: string | number;
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  login: string;
  node_id: string;
  type: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  subscriptions_url: string;
  url: string;
}

export interface IUserDetail extends IUser {
  name?: string;
  followers?: number;
  following?: number;
  created_at?: string;
  updated_at?: string;
  public_repos?: number;
  bio?: string;
  email?: string;
}
