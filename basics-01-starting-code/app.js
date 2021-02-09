Vue.createApp({
    data() {
        return {
            title: 'My Course Goal'
        }
    },
    methods: {
        showMyName() {
            return '<h1>This is example for html</h1>';
        }
    }
}).mount('#user-goal'); 