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
    <UPageHero title="Salomé Frick" description="Développeuse Web Front-End & UX Designer" :links="links" :ui="{
        container: 'items-center lg:flex',
        wrapper: 'flex flex-col items-center w-fit',
        footer: 'w-full',
        links: 'w-full flex flex-col sm:flex-row'
    }" />
</template>