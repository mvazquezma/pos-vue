import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";


const items = ref([])
const subtotal = ref(0)

const MAX_PRODUCTS = 5

export const useCartStore = defineStore('cart', () => {

    watch(items, () => {
        subtotal.value = items.value.reduce((total, item) => total + (item.quantity * item.price), 0)
    },{
        deep: true
    })

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
        subtotal,
        addItem,
        updateQuantity,
        isCartEmpty,
        checkProductAvailability
    }
})