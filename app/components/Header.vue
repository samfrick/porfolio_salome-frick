<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = <NavigationMenuItem[]>[
    { label: "Accueil", to: "/" },
    { label: "A Propos", to: "/about" },
    { label: "Projets", to: "/projects" },
]
</script>

<template>
    <UHeader title="" class="sticky">
        <UNavigationMenu :items="items" color="neutral" :ui="{
            link: 'text-md px-5',
        }" />
        <template #body>
            <UNavigationMenu :items="items" orientation="vertical" color="neutral" class="-mx-2.5" :ui="{
                list: 'flex flex-col gap-7',
                link: 'justify-center text-xl py-5',
            }" />
        </template>
        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>
</template>