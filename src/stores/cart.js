import { ref, computed, watchEffect } from "vue";
import { defineStore } from "pinia";
import { useCouponStore } from "../stores/coupons";

//const coupon = useCouponStore()
const items = ref([])
const subtotal = ref(0)
const taxes = ref(0)
const total = ref(0)

const MAX_PRODUCTS = 5
const TAX_RATE = .10

export const useCartStore = defineStore('cart', () => {

    watchEffect(() => {
        subtotal.value = items.value.reduce((total, item) => total + (item.quantity * item.price), 0)
        taxes.value = subtotal.value * TAX_RATE
        //total.value = (subtotal.value + taxes.value) - coupon.discount
        total.value = (subtotal.value + taxes.value)
    })

    function addItem(item) {
        const index = isItemInCart(item.id)

        if(index >= 0) {
            if(isProductAvailable(item, index)) {
                alert('Has alcanzado el limite')
                return
            }
            // Actualizar la cantidad
            items.value[index].quantity++
        } else {
            items.value.push({...item, quantity: 1, id: item.id})
        }
    }

    function updateQuantity(id, quantity) {
        items.value = items.value.map(item => item.id === id ? {...item, quantity} : item)
    }

    function removeItem(id) {
        items.value = items.value.filter(item => item.id != id)
    }

    const isItemInCart = id => items.value.findIndex(item => item.id === id)

    const isProductAvailable = (item, index) => {
        return items.value[index].quantity >= item.availability || items.value[index].quantity >= MAX_PRODUCTS
    }

    const isCartEmpty = computed(() => items.value.length === 0)

    const checkProductAvailability = computed(() => {
        return (product) => product.availability < 5 ? product.availability : MAX_PRODUCTS
    })

    return {
        items,
        subtotal,
        taxes,
        total,
        addItem,
        removeItem,
        updateQuantity,
        isCartEmpty,
        checkProductAvailability
    }
})