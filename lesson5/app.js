new Vue({
    el: '#vue-app',
    data: {
        name: 'Ian',
        job: 'Web Developer',
        website: 'https://www.thenetninja.co.uk',
        websiteTag: '<a href="https://www.thenetninja.co.uk">The Net Ninja Website</a>'
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});