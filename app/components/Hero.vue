<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([
    {
        label: 'A propos de moi',
        to: '/about',
        color: 'neutral',
        ui: { base: 'flex-1 justify-center' }
    },
    {
        label: 'Mes projets',
        to: '/projects',
        color: 'neutral',
        ui: { base: 'flex-1 justify-center' }
    }
])
</script>

<template>
    <p
        class="fixed inset-0 hidden sm:block sm:top-7 md:top-5 lg:top-0 xl:top-3 -z-10 text-center font-black uppercase text-neutral-100 dark:text-neutral-800 text-[18vw] leading-none">
        Portfolio
    </p>
    <UPageHero title="Salomé Frick" description="Développeuse Web Front-End & UX Designer" :links="links" :ui="{
        container: 'items-center lg:flex overflow-hidden',
        wrapper: 'flex flex-col items-center w-fit',
        footer: 'w-full',
        title: 'sm:text-[5rem] md:text-[6rem] lg:text-[8rem] uppercase',
        links: 'w-full flex flex-col sm:flex-row'
    }">
    </UPageHero>
</template>