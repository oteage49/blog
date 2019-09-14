<template>
    <v-app>
      <v-content>
        <v-container>
          <v-card>
            <v-card-title class="title justify-center">入れた分だけ計算</v-card-title>
            <v-layout row justify-center align-center>
              <v-flex>
                <v-subheader>１００円</v-subheader>
                </v-flex>
                <v-flex>
                <v-text-field
                  v-model="coin"
                  type="number"
                  pattern="\d*"
                  suffix="クレ"
                ></v-text-field>
              </v-flex>
            </v-layout>
            
            <v-layout row justify-center align-center>
              <v-flex>
                <v-subheader>パセリ（特典なし）</v-subheader>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="poff"
                  type="number"
                  pattern="\d*"
                  suffix="円"
                ></v-text-field>
              </v-flex>
            </v-layout>
            
            <v-layout row justify-center align-center>
              <v-flex>
                <v-subheader>パセリ（特典あり）</v-subheader>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="pon"
                  type="number"
                  pattern="\d*"
                  suffix="円"
                ></v-text-field>
              </v-flex>
            </v-layout>
            </v-card>
            </v-container>

<v-container>
            <v-card>
            <v-card-title class="title justify-center">一番安いのは{{lowest}}</v-card-title>
            <v-layout row justify-center align-center>
              <v-flex>
                <v-subheader>１００円</v-subheader>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="coinper"
                  type="number"
                  readonly
                  suffix="円/曲"
                ></v-text-field>
              </v-flex>
            </v-layout>
            
            <v-layout row justify-center align-center>
              <v-flex>
                <v-subheader>パセリ（特典なし）</v-subheader>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="poffper"
                  type="number"
                  readonly
                  suffix="円/曲"
                ></v-text-field>
              </v-flex>
            </v-layout>
            
            <v-layout row justify-center align-center>
              <v-flex>
                <v-subheader>パセリ（特典あり）</v-subheader>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="ponper"
                  type="number"
                  readonly
                  suffix="円/曲"
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
    name: 'CoP',
    
    data() {
      return {
        coin: '',
        poff: '',
        pon: ''
      }
    },
    computed: {
      coinper: function () {
        var ret
        if (this.coin > 0) {
          ret = Math.floor(100 * 10 / (3 * this.coin)) /10
        }
        return ret
      },
      poffper: function () {
        var ret
        if (this.poff > 0) {
          ret = Math.floor(this.poff * 10 / 3) /10
        }
        return ret
      },
      ponper: function () {
        var ret
        if (this.pon > 0) {
          ret = Math.floor(this.pon * 2 * 10 / 7) /10
        }
        return ret
      },
      lowest: function () {
        var isInput = false
        var temp = [this.poffper, this.coinper, this.ponper]
        var prices = temp.map(function(value) {
          if (value > 0) {
            isInput = true
            return value
          }
          return 999
        })
        if (isInput == false) {
          return "？"
        }
        var key = prices.indexOf(Math.min.apply(null,prices))
        var name = ['パセリ（特典なし）', '１００円', 'パセリ（特典あり）']
        var ret = name[key]
        return ret
      }
    }
  }
</script>