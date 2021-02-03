const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            profilepic: './images/1.png',
            firstname: 'Sapondanai',
            lastname: 'Jamorn',
            position: 'SIT Student',
            article : 69,
            followers: '1.2M',
            rating: 10.0
        }
    }

}
Vue.createApp(app).mount('#app')