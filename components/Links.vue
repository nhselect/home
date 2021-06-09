<template>
  <div>
    <a
      v-for="link in links"
      :key="link.url"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="column is-full"
    >
      <b-button type="is-primary" outlined class="margin">
        {{ link.name }}
      </b-button>
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { ILink } from '~/interfaces'

@Component
export default class Links extends Vue {
  links: ILink[] = []

  async fetch(): Promise<void> {
    const links = (await this.$content('links')
      .sortBy('name')
      .fetch()) as ILink[]
    if (Array.isArray(links)) {
      this.links = links
    } else {
      this.links = [links]
    }
  }
}
</script>
