new Vue({
    el: '#vue-app',
    data: {
        name: 'Ian',
        job: 'Web Developer',
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }
});