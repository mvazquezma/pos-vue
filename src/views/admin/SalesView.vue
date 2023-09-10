<script setup>
    import VueTailwindDatePicker from 'vue-tailwind-datepicker'
    import { ref } from 'vue'

    const date = ref('')

    const formatter = ref({
        date: 'DD/MM/YYYY',
        month: 'MMMM'
    })
</script>

<template>
    <div>
        <h1 class="text-4xl font-black my-10"> Resumen de ventas</h1>

        <div class="md:flex md:items-start gap-5">
            <div class="md: w-1/2 lg:w-1/3 bg-white flex justify-center p-5">
                <VueTailwindDatePicker
                    i18n="es-es" 
                    as-single
                    no-input
                    v-model="date"
                    :formatter="formatter"
                />
            </div>

            <div class="md: w-1/2 lg:w-2/3 space-y-5 lg:h-screen lg:overflow-y-scroll p-5 pb-32">
                <p>Ventas aqui</p>
                {{ date }}
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>