import {defineStore} from "pinia";
import axios from "axios"
import {StoreType} from "./types.ts";

const BASE_URL = 'https://api.github.com/users';
export const useStore = defineStore("Store", {
    state: (): StoreType => {
        return {
            user: {
                bio: null,
                type: '',
                twitter_username: '',
                blog: '',
                avatar_url: '',
                company: '',
                created_at: '',
                public_gists: 0,
                email: '',
                events_url: '',
                followers: 0,
                followers_url: '',
                following: 0,
                following_url: '',
                gists_url: '',
                gravatar_id: '',
                login: '',
                id: 0,
                hireable: '',
                html_url: '',
                name: '',
                location: '',
                node_id: '',
                organizations_url: '',
                public_repos: 0,
                received_events_url: '',
                repos_url: '',
                site_admin: false,
                starred_url: '',
                url: '',
                subscriptions_url: '',
                updated_at: ''
            }
        };
    },
    getters: {
        getValidDate(state) {
            const validDate = new Date(state.user.created_at).toDateString().split(" ");
            return `${validDate[1]} ${validDate[2]} ${validDate[3]}`
        }
    },

    actions: {
        async fetchUsers(user: string) {
            try {
                const data = await axios.get(`${BASE_URL}/${user}`)
                this.user = data.data

            } catch (error) {

                alert(error)
                console.log(error)
            }
        }
    },
});

