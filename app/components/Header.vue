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
        <UNavigationMenu :items="items" color="neutral" />
        <template #body>
            <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
        </template>
        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>
</template>