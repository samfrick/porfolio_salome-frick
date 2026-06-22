<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
    <div class="mx-5 lg:mx-40 xl:w-300 flex flex-col gap-10 sm:gap-16">
        <UPageCard v-for="(project, index) in projects" :key="index" :title="project.title"
            :description="project.description" :to="project.link" orientation="horizontal" variant="naked"
            :reverse="index % 2 === 1" target="_blank" class="group" :ui="{
                container: 'md:flex md:flex-row lg:flex lg:flex-row gap-x-12',
                wrapper: 'max-sm:order-last'
            }">
            <template #leading>
                <span class="text-sm text-muted">
                    {{ new Date(project.date).getFullYear() }}
                </span>
            </template>
            <template #footer>
                <ULink :to="project.link" class="text-sm text-primary flex items-center gap-2">
                    Voir le projet
                    <UIcon name="lucide:arrow-right"
                        class="size-4 text-primary lg:transition-all lg:opacity-0 lg:group-hover:translate-x-1 lg:group-hover:opacity-100" />
                </ULink>
            </template>
            <img :src="project.image" :alt="project.title"
                class="object-cover aspect-video h-48 rounded-lg transition-all group-hover:scale-110 group-hover:shadow-xl">
        </UPageCard>
    </div>
</template>