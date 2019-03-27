<template>
    <div class="index">
        <Carousel autoplay v-model="carousel" loop trigger="hover" :height="400">
            <CarouselItem>
                <div class="demo-carousel">1</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">2</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">3</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">4</div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                carousel: 0
            }
        },
        methods: {}
    }
</script>
