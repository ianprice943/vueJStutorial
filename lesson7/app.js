new Vue({
    el: '#vue-app',
    data: {
        age: 22,
        x: 0,
        y: 0,
    },
    methods: {
        add: function(inc) {
            this.age+=inc;
        },
        subtract: function(dc) {
            this.age-=dc;
        },
        updateXY: function(event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('You clicked me');
        }
    }
});