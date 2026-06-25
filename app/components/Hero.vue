<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'
import { projects } from '~/data/projects'
import { about } from '~/data/about'

const featuredProjects = computed(() =>
    projects.filter(project => project.featured)
)

const featuredAbout = computed(() =>
    about.filter(item => item.featured)
)

const hero = ref({
    title: 'Salomé Frick',
    description: 'Découvrez ici mon portfolio, où je partage mes projets et mes expériences en tant que développeuse web et designer UX/UI.',
})

const linksHero = ref<ButtonProps[]>([
    {
        label: 'A propos de moi',
        to: '/about',
        color: 'primary',
        variant: 'outline',
        ui: { base: 'justify-center w-full md:w-1/3 p-5 font-bold uppercase' }
    },
    {
        label: 'Mes projets',
        to: '/projects',
        color: 'primary',
        variant: 'outline',
        ui: { base: 'justify-center w-full md:w-1/3 p-5 font-bold uppercase' }
    }
])

const sectionAbout = ref({
    title: 'A Propos de moi',
    description: 'Étudiante en 3ème année de BUT MMI (Métiers du Multimédia et de l’Internet) à l’IUT de Haguenau, je suis passionnée par le développement web et l\'UX/UI. \
    Je suis actuellement en alternance chez Logitud Solutions (Strasbourg), afin de mettre en pratique mes compétences et d\'acquérir de nouvelles expériences dans le domaine du web.',
})

const sectionProjects = ref({
    title: 'Mes Projets',
    description: 'Découvrez ici mes différents projets, réalisés dans le cadre de mes études et de mon alternance. Chacun d\'entre eux reflète mon engagement envers le développement web et l\'UX/UI.',
})

const linkAbout = ref<ButtonProps[]>([
    {
        label: 'En savoir plus sur moi',
        to: '/about',
        color: 'neutral',
        variant: 'outline',
        ui: { base: 'justify-center w-full md:w-1/3 p-5 font-bold uppercase' }
    }
])

const linkProjects = ref<ButtonProps[]>([
    {
        label: 'Voir tous mes projets',
        to: '/projects',
        color: 'neutral',
        variant: 'outline',
        ui: { base: 'justify-center w-full md:w-1/3 p-5 font-bold uppercase' }
    }
])
</script>

<template>
    <p
        class="fixed inset-0 hidden sm:block sm:top-7 md:top-5 lg:top-0 xl:top-3 -z-10 text-center font-black uppercase text-neutral-100 dark:text-neutral-800/50 text-[18vw] leading-none">
        Portfolio
    </p>
    <UPageHero :title="hero.title" :description="hero.description" :links="linksHero" :ui="{
        container: 'items-center lg:flex overflow-hidden lg:py-35',
        wrapper: 'flex flex-col items-start md:items-center',
        header: 'w-full flex flex-col text-left md:text-center items-start md:items-center',
        footer: 'w-full',
        title: 'sm:text-[5rem] md:text-[6rem] lg:text-[8rem] uppercase',
        description: 'w-full lg:w-2/3 text-md',
        links: 'w-full flex flex-col sm:flex-row'
    }" />
    <UPageSection :title="sectionAbout.title" :description="sectionAbout.description" :links="linkAbout" :ui="{
        container: 'lg:py-0 mb-20',
    }">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="(item, index) in featuredAbout" :key="index" class="overflow-hidden rounded-xl">
                <img :src="item.image" alt=""
                    class="w-full h-full object-cover transition-transform duration-300 hover:scale-105">
            </div>
        </div>
    </UPageSection>
    <UPageSection :title="sectionProjects.title" :description="sectionProjects.description" :links="linkProjects" :ui="{
        container: 'lg:py-0',
    }">
        <UBlogPosts>
            <UBlogPost v-for="project in featuredProjects" :key="project.title" :title="project.title"
                :description="project.shortDescription" :image="project.image" :to="project.link" :ui="{
                    description: 'text-sm text-muted',
                }">
                <template #badge>
                    <div class="flex flex-wrap gap-1">
                        <UBadge v-for="tech in project.technologies.slice(0, 3)" :key="tech" size="sm" variant="soft">
                            {{ tech }}
                        </UBadge>
                    </div>
                </template>
            </UBlogPost>
        </UBlogPosts>
    </UPageSection>
</template>