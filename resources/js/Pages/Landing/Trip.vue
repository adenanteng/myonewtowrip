<script setup>
import {Link} from "@inertiajs/inertia-vue3";
import {ref} from "vue";
import LandingLayout from "@/Layouts/LandingLayout.vue";
import 'vue3-carousel/dist/carousel.css'
import Trip from "@/Components/Trip.vue";
import TripDetail from "@/Components/TripDetail.vue";


const props = defineProps({
    trip: Object,
});

const myCarousel = ref(null)

function formatPrice(value) {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

</script>

<template>
    <LandingLayout
        :title="$page.props.title ?? 'Destinasi'"
        :header="$page.props.title ?? 'Destinasi'"
        :desc="$page.props.desc ?? 'Lorem ipsum dolor sit amet'"
        :img="$page.props.img ?? '/img/bali.jpg'"
    >

        <Trip
            name=""
            desc=""
        >
            <template #detail>
                <TripDetail v-for="item in props.trip"
                            :slug="item.slug"
                            :name="item.name"
                            :desc="item.desc"
                            :category="item.category"
                            :city="item.city"
                            :img="item.media ?? false"
                />
            </template>
        </Trip>


    </LandingLayout>
</template>
