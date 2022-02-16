<template>
  <v-app dark >

    <v-main>
      <v-container>
        <Menu />
        <Nuxt />
      </v-container>
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
export default {
  components: {
  dirs: [
    '~/components'
    ]
  }
}
</script>

<style >

</style>
