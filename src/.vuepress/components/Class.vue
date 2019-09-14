<template>
    <v-app>
      <v-content>
        <v-container>
          <v-card>
            <v-card-title class="title justify-center">入れた分だけ計算</v-card-title>
            <v-layout row justify-center align-center>
              <v-flex xs2>
                <v-subheader>曲名</v-subheader>
              </v-flex>
              <v-flex xs3>
                <v-text-field
                  v-model="levelA"
                  type="text"
                  suffix="VS"
                ></v-text-field>
              </v-flex>
              <v-flex xs3>
                <v-text-field
                  v-model="levelB"
                  type="text"
                ></v-text-field>
              </v-flex>
            </v-layout>
            
            <v-layout row justify-center align-center>
              <v-flex xs3>
                <v-subheader>レベル</v-subheader>
              </v-flex>
              <v-flex xs3>
                <v-text-field
                  v-model="levelA"
                  type="number"
                ></v-text-field>
              </v-flex>
              <v-flex xs3>
                <v-text-field
                  v-model="levelB"
                  type="number"
                ></v-text-field>
              </v-flex>
            </v-layout>
            
            <v-layout row justify-center align-center>
              <v-flex xs4>
                <v-radio-group v-model="medalA" row>
                  <v-radio
                    label="銀以上"
                    value="5000"
                  ></v-radio>
                  <v-radio
                    label="草以上"
                    value="3000"
                  ></v-radio>
                  <v-radio
                    label="未クリア"
                    value="0"
                  ></v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>
            </v-card>
            </v-container>

        <v-container>
          <v-card>
            <v-card-title class="title justify-center">ハイスピ：{{lowest}}、サドプラ：{{lowest}}</v-card-title>

            <v-layout row justify-center align-center>
              <v-data-table
                :headers="headers"
                :items="scoreList"
                class="elevation-1"
               >
                <template v-slot:items="props">
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.scoreA }}</td>
                  <td class="text-xs-right">{{ props.item.scoreB }}</td>
                </template>
              </v-data-table>
            </v-layout>
          </v-card>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
  export default {
    name: 'Class',
    
    data() {
      return {
        levelA: '',
        levelB: '',
        scoreLevel: '',
        medalA: '',
        medalB: '',
        scoreMedal: '',
        scoreMargin: '',
        headers: [
          {
            text: 'サドプラ',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'scoreA', value: 'scoreA' },
          { text: 'scoreB', value: 'scoreB'}
        ],
        scoreList: [
          {
            name: 'クルパ',
            scoreA: '87k',
            scoreB: '100k'
          },
          {
            name: 'S',
            scoreA: '',
            scoreB: '98k'
          },
        ]
      }
    },
    computed: {
      scoreLevel: function () {
        return (this.levelA - this.levelB) * 10000
      },
      scoreMedal: function () {
        return (this.medalA.value - this.medalB.value)
      },
      scoreMargin: function () {
        return (this.scoreLevel - this.scoremedal)
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