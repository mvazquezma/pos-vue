import { defineStore } from "pinia";
import { ref, computed } from "vue";

const items = ref([])

const MAX_PRODUCTS = 5

export const useCartStore = defineStore('cart', () => {

    function addItem(item) {
        items.value.push({...item, quantity: 1, id: item.id})
    }

    function updateQuantity(id, quantity) {
        items.value = items.value.map(item => item.id === id ? {...item, quantity} : item)
    }

    const isCartEmpty = computed(() => items.value.length === 0)

    const checkProductAvailability = computed(() => {
        return (product) => product.availability < 5 ? product.availability : MAX_PRODUCTS
    })

    return {
        items,
        addItem,
        updateQuantity,
        isCartEmpty,
        checkProductAvailability
    }
})