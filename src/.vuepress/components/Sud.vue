<template>
    <v-app style="height:230px">
      <v-content>
        <v-container>
          <v-card>
            <v-card-title v-if="sudden" class="title justify-center">サドプラ数値：{{sudden}}</v-card-title>
            <v-layout mx-2>
              <v-flex>
                <v-text-field
                  v-model="BPM1"
                  type="number"
                  pattern="\d*"
                  prefix="BPM："
                  placeholder=""
                ></v-text-field>
                <v-text-field
                  v-model="BPM2"
                  type="number"
                  pattern="\d*"
                  prefix="BPM："
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-card>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
  export default {
    name: 'Sud',
    data() {
      return {
       BPM1: '',
       BPM2: ''
      }
    },
    computed: {
      sudden: function () {
        var maxBPM = Math.max(this.BPM1, this.BPM2)
        var minBPM = Math.min(this.BPM1, this.BPM2)
        if (maxBPM && minBPM) {var ret = Math.floor(110 - (350 * (minBPM / maxBPM)))}
        if (ret < -200 || ret > 80) {
          ret = "設定不可（-200～+80外）"
        }
        return ret
      }
    }
  }
</script>