

export type UserData = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
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
    name?: null | string;
    company?: null | string;
    blog: string;
    location?: null | string;
    email?: null | string;
    hireable?: null | string;
    bio?: null | string;
    twitter_username?: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

export type UserViewData = {
    login: string;
    name?: null | string;
    email?: null | string;
    company?: null | string;
    html_url: string;
    avatar_url: string;
    created_at: string;
    bio?: null | string;
    public_repos: number;
    followers: number;
    following: number;
    location?: null | string;
    twitter_username?: string;
}

export type StoreType = {
    user:UserViewData | null
}