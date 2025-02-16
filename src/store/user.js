import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        username: localStorage.getItem("username") || "",
        isLoggedIn : localStorage.getItem("isLoggedIn") === "true"
    }),
    actions: {
        login(name) {
            this.username = name;
            this.isLoggedIn = true;
            localStorage.setItem("username", name);
            localStorage.setItem("isLoggedIn", "true");
        },
        logout() {
            this.username = "";
            this.isLoggedIn = false;
            localStorage.removeItem("username");
            localStorage.removeItem("isLoggedIn");
        }
    }
});