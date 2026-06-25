<script setup lang="ts">
import { projects } from '~/data/projects'

const items = [
    {
        label: 'Tous les projets',
        value: 'all'
    },
    {
        label: 'Développement Web',
        value: 'dev'
    },
    {
        label: 'UX / UI',
        value: 'ux'
    }
]

const activeTab = ref('all')

const filteredProjects = computed(() =>
    activeTab.value === 'all'
        ? projects
        : projects.filter(
            project => project.category === activeTab.value
        )
)
</script>

<template>
    <div class="mx-5 lg:mx-40 xl:w-300 flex flex-col gap-10 sm:gap-16">
        <UTabs v-model="activeTab" :items="items" :ui="{
            trigger: 'cursor-pointer'
        }" />
        <UPageCard v-for="(project, index) in filteredProjects" :key="index" :title="project.title"
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
            <template #title>
                <div class="flex flex-col gap-1 mb-2">
                    <span>{{ project.title }}</span>
                    <div class="flex flex-row gap-1">
                        <UBadge v-for="tech in project.technologies" :key="tech" size="sm" variant="soft"
                            class="w-fit flex">
                            {{ tech }}
                        </UBadge>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="flex flex-row gap-4">
                    <UButton v-if="project.github" icon="i-simple-icons-github" color="primary" variant="ghost"
                        :to="project.github" target="_blank" aria-label="GitHub" class="z-10" />
                    <ULink :to="project.link" class="text-sm text-primary flex items-center gap-2">
                        Voir le projet
                        <UIcon name="lucide:move-up-right"
                            class="size-4 text-primary lg:transition-all lg:opacity-0 lg:group-hover:translate-x-1 lg:group-hover:opacity-100" />
                    </ULink>
                </div>
            </template>
            <img :src="project.image" :alt="project.title"
                class="object-cover aspect-video h-48 rounded-lg transition-all group-hover:scale-110 group-hover:shadow-xl">
        </UPageCard>
    </div>
</template>