<script lang="ts" setup>
import AlienIcon from '../assets/emojis/alien.svg?component';
import BananaIcon from '../assets/emojis/banana.svg?component';
import BriefcaseIcon from '../assets/emojis/briefcase.svg?component';
import ConvinienceStoreIcon from '../assets/emojis/convinience-store.svg?component';
import ScaredFaceIcon from '../assets/emojis/scared.svg?component';
</script>

<template>
  <div class="flex flex-col gap-1 my-10">
    <h1 class="text-3xl md:text-5xl font-bold text-primary mb-6">
      <span>
        Imagine yourself, in your house while an invasion of an banana-like
        species coming from the space starts.
        <AlienIcon class="inline ml-2 w-6 h-6" />
        <BananaIcon class="inline ml-2 w-6 h-6" />
      </span>
    </h1>
    <h2 class="text-2xl gap-2">
      <span
        >With only a simple bag, with essential stuff, you leave your house.
        <BriefcaseIcon class="inline self-center my-auto ml-2 w-5 h-5"
      /></span>
    </h2>
    <h2 class="text-2xl gap-2">
      You run, people from the streets act normally, despite the spaceships
      above your head.
      <ScaredFaceIcon class="inline ml-2 w-5 h-5" />
    </h2>
    <h2 class="text-2xl">
      You see a convinience store open and enter it, what 5 items would you get
      in this situation?
      <ConvinienceStoreIcon class="inline ml-2 w-5 h-5" />
    </h2>
  </div>
</template>
