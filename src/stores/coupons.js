import { ref } from "vue";
import { defineStore } from "pinia";

export const useCouponStore = defineStore('coupon', () => {

    const couponInput = ref('')
    const couponValidationMessage = ref('')
    const discountPercentage = ref(0)

    const VALID_COUPONS = [
        {name: '10DESCUENTO', discount: .10},
        {name: '20DESCUENTO', discount: .20}
    ]

    function applyCoupon() {
        if(VALID_COUPONS.some(coupon => coupon.name === couponInput.value)) {
            couponValidationMessage.value = 'Aplicando...'
            
            setTimeout(() => {
                discountPercentage.value = VALID_COUPONS.find(coupon => coupon.name === couponInput.value).discount
                couponValidationMessage.value = '¡Descuento Aplicado!'
            }, 3000);
        } else {
            couponValidationMessage.value = 'No existe ese cupón'
        }
        setTimeout(() => {
            couponValidationMessage.value = ''
        }, 6000);
    }

    return {
        couponInput,
        applyCoupon,
        couponValidationMessage
    }
})