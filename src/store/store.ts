import {defineStore} from "pinia";
import axios from "axios"
import {StoreType} from "./types.ts";
import {mapToAppData} from '../utils/mapToAppData.ts'
import {ElNotification} from "element-plus";

const BASE_URL = 'https://api.github.com/users';
export const useStore = defineStore("Store", {
    state: (): StoreType => {
        return {
            user: {
                bio: null,
                twitter_username: '',
                avatar_url: '',
                company: '',
                created_at: '',
                email: '',
                followers: 0,
                following: 0,
                login: '',
                html_url: '',
                name: '',
                location: '',
                public_repos: 0,
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
                this.user = mapToAppData(data.data)
            } catch (error) {
                ElNotification.error({
                    // title: 'Info',
                    message: 'User not found',
                    showClose: false,
                    duration: 2000
                })
            }
        },

        clearUserData() {
            this.user = null
        }

    },
});

