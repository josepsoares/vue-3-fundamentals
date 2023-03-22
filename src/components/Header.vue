<script lang="ts" setup>
import AlienIcon from '../assets/emojis/alien.svg?component';
import BananaIcon from '../assets/emojis/banana.svg?component';
import BriefcaseIcon from '../assets/emojis/briefcase.svg?component';
import ConvinienceStoreIcon from '../assets/emojis/convinience-store.svg?component';
import ScaredFaceIcon from '../assets/emojis/scared.svg?component';
</script>

<template>
  <div class="my-10 flex flex-col gap-1">
    <h1 class="mb-6 text-3xl font-bold text-primary md:text-5xl">
      <span>
        Imagine yourself, in your house while an invasion of an banana-like
        species coming from the space starts.
        <AlienIcon class="ml-2 inline h-6 w-6" />
        <BananaIcon class="ml-2 inline h-6 w-6" />
      </span>
    </h1>
    <h2 class="gap-2 text-2xl">
      <span
        >With only a simple bag, with essential stuff, you leave your house.
        <BriefcaseIcon class="my-auto ml-2 inline h-5 w-5 self-center"
      /></span>
    </h2>
    <h2 class="gap-2 text-2xl">
      You run, people from the streets act normally, despite the spaceships
      above your head.
      <ScaredFaceIcon class="ml-2 inline h-5 w-5" />
    </h2>
    <h2 class="text-2xl">
      You see a convinience store open and enter it, what 5 items would you get
      in this situation?
      <ConvinienceStoreIcon class="ml-2 inline h-5 w-5" />
    </h2>
  </div>
</template>
