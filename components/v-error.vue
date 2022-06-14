<template>
<p v-if="errors && errors[input]" class="v-error text-xs italic" style="color:#e92131">
  {{errors[input][0]}}
</p>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    input: { type: String, required: true }
  }
}
</script>
