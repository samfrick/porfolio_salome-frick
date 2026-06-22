<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const hero = ref({
    title: 'Salomé Frick',
    description: 'Étudiante en 3ème année de BUT MMI (Métiers du Multimédia et de l’Internet) à l’IUT de Haguenau, je suis passionnée par le développement web et l\'UX/UI. \
                  Je suis actuellement en alternance chez Logitud Solutions (Strasbourg), afin de mettre en pratique mes compétences et d\'acquérir de nouvelles expériences dans le domaine du web.'
})

const links = ref<ButtonProps[]>([
    {
        label: 'A propos de moi',
        to: '/about',
        color: 'neutral',
        ui: { base: 'justify-center w-1/3 p-5 font-bold uppercase' }
    },
    {
        label: 'Mes projets',
        to: '/projects',
        color: 'neutral',
        ui: { base: 'justify-center w-1/3 p-5 font-bold uppercase' }
    }
])
</script>

<template>
    <p
        class="fixed inset-0 hidden sm:block sm:top-7 md:top-5 lg:top-0 xl:top-3 -z-10 text-center font-black uppercase text-neutral-100 dark:text-neutral-800 text-[18vw] leading-none">
        Portfolio
    </p>
    <UPageHero :title="hero.title" :description="hero.description" :links="links" :ui="{
        container: 'items-center lg:flex overflow-hidden',
        wrapper: 'flex flex-col items-center',
        header: 'w-full flex flex-col items-center',
        footer: 'w-full',
        title: 'sm:text-[5rem] md:text-[6rem] lg:text-[8rem] uppercase',
        description: 'w-2/3',
        links: 'w-full flex flex-col sm:flex-row'
    }">
    </UPageHero>
</template>