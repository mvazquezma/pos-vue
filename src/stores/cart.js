import { defineStore } from "pinia";
import { ref, computed } from "vue";

const items = ref([])

export const useCartStore = defineStore('cart', () => {

    function addItem(item) {
        items.value.push(item)
    }

    const isCartEmpty = computed(() => items.value.length === 0)

    return {
        addItem,
        isCartEmpty
    }
})