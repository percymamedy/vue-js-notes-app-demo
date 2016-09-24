import Vue from 'vue';

export default {
    update(newValue, oldValue) {
        let element = this.el;
        if (newValue) {
            Vue.nextTick(() => {
                element.focus();
            });
        }
    }
}