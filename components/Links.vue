<template>
  <ul class="nhsuk-grid-row nhsuk-card-group">
    <li
      v-for="link in links"
      :key="link.url"
      class="nhsuk-grid-column-one-third nhsuk-card-group__item"
    >
      <div class="nhsuk-card nhsuk-card--clickable">
        <div class="nhsuk-card__content">
          <h2 class="nhsuk-card__heading nhsuk-heading-s">
            <a
              class="nhsuk-card__link"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.name }}
            </a>
          </h2>
          <p class="nhsuk-card__description"></p>
        </div>
      </div>
    </li>
  </ul>
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

<style lang="scss">
@import 'node_modules/nhsuk-frontend/packages/components/card/card';
</style>
