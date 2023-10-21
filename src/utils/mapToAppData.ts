import {UserData, UserViewData} from "../store/types.ts";

export const mapToAppData = (UserFromServer: UserData): UserViewData => {
    const {
        starred_url, url, subscriptions_url,
        type, updated_at, organizations_url, node_id, hireable,
        repos_url, site_admin, gists_url, events_url, id, blog, public_gists, received_events_url,
        following_url, followers_url, gravatar_id, ...rest
    } = UserFromServer

    return rest

}
