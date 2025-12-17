<template>
    <div class="mb-5 flex justify-center gap-x-4 text-[#E0E1E2] lg:absolute lg:top-1/2 lg:left-0 lg:z-10 lg:m-0 lg:-mt-8 lg:h-0 lg:w-full lg:justify-between">
        <button :id="prevId">
            <icon-left-arrow />
        </button>
        <button :id="nextId">
            <icon-right-arrow />
        </button>
    </div>
</template>
<script lang="ts" setup>
    defineProps({
        prevId: {
            type: String,
            required: true
        },
        nextId: {
            type: String,
            required: true
        }
    })
</script>