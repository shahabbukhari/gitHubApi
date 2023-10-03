export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  type: string;
}

export interface GithubUserDetails {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id?: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  hireable?: boolean;
  bio?: string;
  twitter_username?: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

const baseUrl = "https://api.github.com/users";

export class GithubService {
  async getAllUsers(): Promise<GithubUser[]> {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  }

  async getUser(login: GithubUser["login"]): Promise<GithubUserDetails> {
    const response = await fetch(`${baseUrl}/${login}`);
    const data = await response.json();
    return data;
  }
}
