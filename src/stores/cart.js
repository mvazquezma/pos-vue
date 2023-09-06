import { defineStore } from "pinia";
import { ref } from "vue";

const items = ref([])

export const useCartStore = defineStore('cart', () => {

    function addItem(item) {
        items.value.push(item)
    }

    return {
        addItem
    }
})