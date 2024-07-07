import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore',{
    state: () => ({
        email: '',
        password: ''
    }),
})