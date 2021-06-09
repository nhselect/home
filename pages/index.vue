<template>
  <div class="container grid">
    <div>
      <header class="content-logos">
        <logo />
      </header>
      <h1 class="title">The Learning Collaborative</h1>
      <h2 class="subtitle">
        Please use the links below to navigate to our various sites.
      </h2>
      <div class="links">
        <links />
        <h3 class="h3">Can't find what you are looking for?</h3>
        <p>
          Please email
          <a href="mailto:LTLC@hee.nhs.uk">LTLC@hee.nhs.uk</a> and we will do
          our best to add some resources.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Links from '~/components/Links.vue'

export default {
  components: {
    Logo,
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  margin: 25px 0;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.links {
  margin-bottom: 15px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
}

.h3 {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  margin: 10px;
}

.h3 p {
  font-size: 1rem;
}
</style>
