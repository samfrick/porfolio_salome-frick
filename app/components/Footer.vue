<script setup lang="ts">
</script>

<template>
    <UFooter class="border-t border-accented mt-10">
        <template #left>
            <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }} - Salomé Frick</p>
        </template>

        <template #right>
            <UButton icon="i-simple-icons-linkedin" color="neutral" variant="ghost"
                to="https://www.linkedin.com/in/salomé-frick-636034294" target="_blank" aria-label="Discord" />
            <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/samfrick"
                target="_blank" aria-label="GitHub" />
            <UButton icon="lucide:mail" color="neutral" variant="ghost" to="mailto:salome.frick@free.fr" target="_blank"
                aria-label="Mail" />
        </template>
    </UFooter>
</template>
