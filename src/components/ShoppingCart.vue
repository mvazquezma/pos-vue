<script setup>
    import { useCartStore } from '../stores/cart';

    const cart = useCartStore()
</script>

<template>
    <p v-if="cart.isCartEmpty" class="text-xl text-center text-gray-900">El carrito está vacio</p>
</template>