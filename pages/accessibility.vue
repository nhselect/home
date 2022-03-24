<template>
  <div>
    <a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>
    <LtlcHeader />
    <div class="nhsuk-width-container">
      <main id="maincontent" class="nhsuk-main-wrapper" role="main">
        <nuxt-content :document="article" />
      </main>
    </div>
    <LtlcFooter />
  </div>
</template>

<script>
import LtlcHeader from '~/components/LtlcHeader.vue'
import LtlcFooter from '~/components/LtlcFooter.vue'

export default {
  components: {
    LtlcHeader,
    LtlcFooter,
  },
  async asyncData({ $content }) {
    const article = await $content('pages', 'accessibility').fetch()
    return { article }
  },
  head: {
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      },
    ],
  },
}
</script>

<style lang="scss">
@import 'node_modules/nhsuk-frontend/packages/components/skip-link/skip-link';
</style>
