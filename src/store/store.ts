import { defineStore } from "pinia";
import axios from "axios"

const BASE_URL = 'https://api.github.com/users';
export const useStore = defineStore("Store", {
    state: () => {
        return {
            user:{}
        };
    },
    getters: {

    },

    actions: {
        async fetchUsers(user:string) {
            try {
                const data = await axios.get(`${BASE_URL}/${user}`)
                this.user = data.data
                debugger
            }
            catch (error) {
                debugger
                alert(error)
                console.log(error)
            }
        }
    },

        // setActiveTab(value: number) {
        //     this.activeTab = value;
        // },
        //

});