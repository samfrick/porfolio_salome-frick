<script setup lang="ts">
const projectDesc = 'Retrouvez ici certains de mes projets de développement web et de conception UX/UI. \
                    La plupart ont été réalisés pour des projets universitaires appelés des SAE (Situations d\'Apprentissage et d\'Évaluation).'
</script>

<template>
    <section class="w-full h-full flex flex-col justify-center items-center">
        <p
            class="fixed inset-0 hidden sm:block sm:top-7 md:top-5 lg:top-0 xl:top-3 -z-10 text-center font-black uppercase text-neutral-100 dark:text-neutral-800 text-[23vw] leading-none">
            Projets
        </p>
        <UPageHero title="Mes projets" :description="projectDesc" orientation="horizontal" reverse :ui="{
            container: 'py-10 lg:py-32 lg:flex lg:flex-row gap-10 md:gap-auto mb-10 lg:mb-0',
        }">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="fraise" class="rounded-full w-full sm:w-80 aspect-square object-cover">
        </UPageHero>
        <Projects />
    </section>
</template>