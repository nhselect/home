<template>
  <div>
    <a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>
    <LtlcHeader />
    <div class="nhsuk-width-container">
      <main id="maincontent" class="nhsuk-main-wrapper" role="main">
        <h1>The Learning Collaborative</h1>
        <h2>Please use the links below to navigate to our various sites.</h2>
        <div class="links">
          <Links />
          <h3>Can't find what you are looking for?</h3>
          <p>
            Please email
            <a href="mailto:LTLC@hee.nhs.uk">LTLC@hee.nhs.uk</a> and we will do
            our best to add some resources.
          </p>
        </div>
      </main>
    </div>
    <LtlcFooter />
  </div>
</template>

<script>
import LtlcHeader from '~/components/LtlcHeader.vue'
import LtlcFooter from '~/components/LtlcFooter.vue'
import Links from '~/components/Links.vue'

export default {
  components: {
    LtlcHeader,
    LtlcFooter,
    Links,
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
