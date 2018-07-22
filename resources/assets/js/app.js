import Vue from 'vue';
import sample from './data';
import "core-js/fn/object/assign";
if (typeof Object.assign != 'function') {
// Polyfill to define Object.assign
}

function escapeKeyListener(evt) {
    if (evt.keyCode === 27 && app.modalOpen) {
        app.modalOpen = false;
    }
}

let model = JSON.parse(window.vuebnb_listing_model);

var app = new Vue({
    el: '#app',
    data: Object.assign(sample,{

        contracted: true,
        modalOpen: false,
        headerImageStyle: {
            'background-image': 'url(/images/header.jpg)'
        },

    }),
    watch: {
        modalOpen: function() {
            var className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    created: function() {
        document.addEventListener('keyup', escapeKeyListener);
    }
});


