import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers';

import "core-js/fn/object/assign";

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

if (typeof Object.assign != 'function') {
// Polyfill to define Object.assign
}

function escapeKeyListener(evt) {
    if (evt.keyCode === 27 && app.modalOpen) {
        app.modalOpen = false;
    }
}

Vue.component('image-carousel', {
    template:
        `<div class="image-carousel">
<img v-bind:src="image"/>
    <div class="controls">
<carousel-control
dir="left"
@change-image="changeImage"
></carousel-control>
<carousel-control
dir="right"
@change-image="changeImage"
></carousel-control>
</div>
</div>`,
    props: ['images'],
    data() {
        return {
            index: 0
        }
    },
    computed: {
        image() {

            return this.images[this.index];
        }
    },
    methods: {
        changeImage(val) {
            let newVal = this.index + parseInt(val); //this is calculation adding

            if (newVal < 0) {
                this.index = this.images.length -1;
                //if click left too much,display max number index
                //if continue click, because the newVal is an adding, newVal become positive again
            } else if (newVal === this.images.length) {
                this.index = 0;//if  reach max number index+1, display index 0
            } else {
                this.index = newVal;//display index
            }
        }
    },
    components: {
        'carousel-control': {
            template: `<i :class="classes" @click="clicked"></i>`,
            props: [ 'dir' ],
            computed: {
                classes() {

                    return 'carousel-control fa fa-2x fa-chevron-' + this.dir;
                }
            },
            methods: {
                clicked() {

                    this.$emit('change-image', this.dir === 'left' ? -1 : 1);
                }
            }
        }
    }
});


var app = new Vue({
    el: '#app',
    data: Object.assign(model,{

        contracted: true,
        modalOpen: false,
        headerImageStyle: {
            'background-image': `url(${model.images[0]})`
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


