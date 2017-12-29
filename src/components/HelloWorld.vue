<template>
  <div class='home'>
    <div class='row flex-center flex-middle home-bg' :style="{ 'background-image': 'url(./static/bkg-images/'+dynamicBg+')'}" v-if="noClanSelected">
      <div class='col-md-3'>
        <at-card style='width: 300px;' :bordered='false'>
          <h4 slot='title'>
            New Star 1
            <at-badge value='4000+' status='info'></at-badge>
          </h4>
          <div>
            <at-button type='primary' icon='icon-activity' @click='clanInfo($event, 0)'>Gerenciar</at-button>
          </div>
        </at-card>
      </div>
      <div class='col-md-3 col-md-offset-3'>
        <at-card style='width: 300px;' :bordered='false'>
          <h4 slot='title'>
            New Star 2
            <at-badge value='2800+' status='info'></at-badge>
          </h4>
          <div>
            <at-button type='primary' icon='icon-activity' @click='clanInfo($event, 1)'>Gerenciar</at-button>
          </div>
        </at-card>
      </div>
      <div class='col-md-3 col-md-offset-3'>
        <at-card style='width: 300px;' :bordered='false'>
          <h4 slot='title'>
            New Star 3
            <at-badge value='500+' status='info'></at-badge>
          </h4>
          <div>
            <at-button type='primary' icon='icon-activity' @click='clanInfo($event, 2)'>Gerenciar</at-button>
          </div>
        </at-card>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-12">
          <at-button type="primary" size="small" icon="icon-arrow-left" @click="noClanSelected = !noClanSelected">Voltar</at-button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-18">
          <at-table :columns="column1" :data="members" height="220"></at-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        column1: [{
            title: 'Ranking',
            key: 'rank'
          },
          {
            title: 'Nome',
            key: 'name'
          },
          {
            title: 'Papel',
            key: 'role'
          },
          {
            title: 'Doações',
            key: 'donations'
          },
          {
            title: 'Baú de Coroas',
            key: 'clanChestCrowns'
          }
        ],
        clans: [{
            "tag": "2R9CGJUQ",
            "name": "New Star",
            "description": "Clan de broders. Seja ativo, doe cartas e foque nos 4000 troféus. nao ajudou no bau do clan sem se explicar eh kick.",
            "type": "open",
            "score": 42422,
            "memberCount": 50,
            "requiredScore": 4000,
            "donations": 18038,
            "clanChest": {
              "status": "active"
            },
            "badge": {
              "name": "Traditional_Star_05",
              "category": "01_Symbol",
              "id": 16000040,
              "image": "https://cr-api.github.io/cr-api-assets/badges/Traditional_Star_05.png"
            },
            "location": {
              "name": "Brazil",
              "isCountry": true,
              "code": "BR"
            },
            "members": [{
                "name": "Berlim",
                "tag": "8VPPUYJQ",
                "rank": 1,
                "previousRank": 1,
                "role": "leader",
                "expLevel": 12,
                "trophies": 4919,
                "clanChestCrowns": 0,
                "donations": 145,
                "donationsReceived": 310,
                "donationsDelta": -165,
                "donationsPercent": 0.4,
                "arena": {
                  "name": "Master I",
                  "arena": "League 4",
                  "arenaID": 16,
                  "trophyLimit": 4900
                }
              },
              {
                "name": "Joker",
                "tag": "2CLGY9PL",
                "rank": 2,
                "previousRank": 2,
                "role": "coLeader",
                "expLevel": 12,
                "trophies": 4708,
                "clanChestCrowns": 0,
                "donations": 200,
                "donationsReceived": 400,
                "donationsDelta": -200,
                "donationsPercent": 0.55,
                "arena": {
                  "name": "Challenger III",
                  "arena": "League 3",
                  "arenaID": 15,
                  "trophyLimit": 4600
                }
              },
              {
                "name": "Marcio Ribeiro",
                "tag": "P899LC2Y",
                "rank": 3,
                "previousRank": 3,
                "role": "elder",
                "expLevel": 11,
                "trophies": 4571,
                "clanChestCrowns": 0,
                "donations": 741,
                "donationsReceived": 470,
                "donationsDelta": 271,
                "donationsPercent": 2.05,
                "arena": {
                  "name": "Challenger II",
                  "arena": "League 2",
                  "arenaID": 14,
                  "trophyLimit": 4300
                }
              },
              {
                "name": "Galliga",
                "tag": "ULGCU8V9",
                "rank": 4,
                "previousRank": 4,
                "role": "elder",
                "expLevel": 11,
                "trophies": 4488,
                "clanChestCrowns": 9,
                "donations": 234,
                "donationsReceived": 400,
                "donationsDelta": -166,
                "donationsPercent": 0.65,
                "arena": {
                  "name": "Challenger II",
                  "arena": "League 2",
                  "arenaID": 14,
                  "trophyLimit": 4300
                }
              },
              {
                "name": "sanvido",
                "tag": "80PLY0J9",
                "rank": 5,
                "previousRank": 5,
                "role": "elder",
                "expLevel": 12,
                "trophies": 4443,
                "clanChestCrowns": 0,
                "donations": 162,
                "donationsReceived": 350,
                "donationsDelta": -188,
                "donationsPercent": 0.45,
                "arena": {
                  "name": "Challenger II",
                  "arena": "League 2",
                  "arenaID": 14,
                  "trophyLimit": 4300
                }
              },
              {
                "name": "sig",
                "tag": "P8L99CR8",
                "rank": 6,
                "previousRank": 6,
                "role": "elder",
                "expLevel": 12,
                "trophies": 4404,
                "clanChestCrowns": 29,
                "donations": 700,
                "donationsReceived": 560,
                "donationsDelta": 140,
                "donationsPercent": 1.94,
                "arena": {
                  "name": "Challenger II",
                  "arena": "League 2",
                  "arenaID": 14,
                  "trophyLimit": 4300
                }
              },
              {
                "name": "$ALLISSON$",
                "tag": "2UJQ88U",
                "rank": 7,
                "previousRank": 7,
                "role": "elder",
                "expLevel": 11,
                "trophies": 4282,
                "clanChestCrowns": 0,
                "donations": 214,
                "donationsReceived": 280,
                "donationsDelta": -66,
                "donationsPercent": 0.59,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Bernard",
                "tag": "9Y9C2Q0U",
                "rank": 8,
                "previousRank": 8,
                "role": "elder",
                "expLevel": 11,
                "trophies": 4241,
                "clanChestCrowns": 0,
                "donations": 341,
                "donationsReceived": 392,
                "donationsDelta": -51,
                "donationsPercent": 0.95,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Ruela",
                "tag": "8YQPJG28",
                "rank": 9,
                "previousRank": 12,
                "role": "elder",
                "expLevel": 12,
                "trophies": 4210,
                "clanChestCrowns": 8,
                "donations": 335,
                "donationsReceived": 352,
                "donationsDelta": -17,
                "donationsPercent": 0.93,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "VITOR GABRIEL",
                "tag": "GUQQ2PVJ",
                "rank": 10,
                "previousRank": 9,
                "role": "elder",
                "expLevel": 11,
                "trophies": 4196,
                "clanChestCrowns": 0,
                "donations": 290,
                "donationsReceived": 360,
                "donationsDelta": -70,
                "donationsPercent": 0.8,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "raio-x",
                "tag": "2YVQJP0CV",
                "rank": 11,
                "previousRank": 10,
                "role": "elder",
                "expLevel": 11,
                "trophies": 4171,
                "clanChestCrowns": 0,
                "donations": 439,
                "donationsReceived": 360,
                "donationsDelta": 79,
                "donationsPercent": 1.22,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Evandro Júnior",
                "tag": "2LU9URU0Y",
                "rank": 12,
                "previousRank": 13,
                "role": "member",
                "expLevel": 11,
                "trophies": 4135,
                "clanChestCrowns": 0,
                "donations": 65,
                "donationsReceived": 240,
                "donationsDelta": -175,
                "donationsPercent": 0.18,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Ghizzi",
                "tag": "P9QRVLCJ",
                "rank": 13,
                "previousRank": 16,
                "role": "elder",
                "expLevel": 12,
                "trophies": 4125,
                "clanChestCrowns": 7,
                "donations": 868,
                "donationsReceived": 480,
                "donationsDelta": 388,
                "donationsPercent": 2.41,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Felipe",
                "tag": "GJRQ0LUJ",
                "rank": 14,
                "previousRank": 11,
                "role": "elder",
                "expLevel": 11,
                "trophies": 4107,
                "clanChestCrowns": 0,
                "donations": 170,
                "donationsReceived": 320,
                "donationsDelta": -150,
                "donationsPercent": 0.47,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "uouwww",
                "tag": "98C22GR2",
                "rank": 15,
                "previousRank": 17,
                "role": "elder",
                "expLevel": 11,
                "trophies": 4096,
                "clanChestCrowns": 3,
                "donations": 485,
                "donationsReceived": 400,
                "donationsDelta": 85,
                "donationsPercent": 1.34,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "ChaoZ",
                "tag": "80GYCP2G2",
                "rank": 16,
                "previousRank": 15,
                "role": "member",
                "expLevel": 11,
                "trophies": 4096,
                "clanChestCrowns": 0,
                "donations": 192,
                "donationsReceived": 400,
                "donationsDelta": -208,
                "donationsPercent": 0.53,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Fontebasso",
                "tag": "VP9YGQJ0",
                "rank": 17,
                "previousRank": 21,
                "role": "elder",
                "expLevel": 11,
                "trophies": 4077,
                "clanChestCrowns": 0,
                "donations": 471,
                "donationsReceived": 320,
                "donationsDelta": 151,
                "donationsPercent": 1.31,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "jazy",
                "tag": "8PY09GR8",
                "rank": 18,
                "previousRank": 18,
                "role": "member",
                "expLevel": 10,
                "trophies": 4073,
                "clanChestCrowns": 0,
                "donations": 28,
                "donationsReceived": 240,
                "donationsDelta": -212,
                "donationsPercent": 0.08,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Du Bugre",
                "tag": "V9PG8UG",
                "rank": 19,
                "previousRank": 14,
                "role": "elder",
                "expLevel": 12,
                "trophies": 4072,
                "clanChestCrowns": 0,
                "donations": 312,
                "donationsReceived": 400,
                "donationsDelta": -88,
                "donationsPercent": 0.86,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Atlas",
                "tag": "92CRGQ89",
                "rank": 20,
                "role": "member",
                "expLevel": 11,
                "trophies": 4070,
                "clanChestCrowns": 0,
                "donations": 36,
                "donationsReceived": 40,
                "donationsDelta": -4,
                "donationsPercent": 0.1,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Tuty xD",
                "tag": "2CULGRPPU",
                "rank": 21,
                "previousRank": 19,
                "role": "elder",
                "expLevel": 10,
                "trophies": 4056,
                "clanChestCrowns": 0,
                "donations": 427,
                "donationsReceived": 440,
                "donationsDelta": -13,
                "donationsPercent": 1.18,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "HcAlbanez",
                "tag": "22RG2C0QJ",
                "rank": 22,
                "previousRank": 20,
                "role": "member",
                "expLevel": 10,
                "trophies": 4049,
                "clanChestCrowns": 6,
                "donations": 124,
                "donationsReceived": 220,
                "donationsDelta": -96,
                "donationsPercent": 0.34,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Valmir F. Silva",
                "tag": "P98GV8L0",
                "rank": 23,
                "previousRank": 27,
                "role": "member",
                "expLevel": 10,
                "trophies": 4033,
                "clanChestCrowns": 11,
                "donations": 464,
                "donationsReceived": 280,
                "donationsDelta": 184,
                "donationsPercent": 1.29,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Tica",
                "tag": "28R9CPRUQ",
                "rank": 24,
                "previousRank": 23,
                "role": "member",
                "expLevel": 11,
                "trophies": 4032,
                "clanChestCrowns": 0,
                "donations": 285,
                "donationsReceived": 400,
                "donationsDelta": -115,
                "donationsPercent": 0.79,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "JUAN 1",
                "tag": "2PLY9J220",
                "rank": 25,
                "previousRank": 24,
                "role": "elder",
                "expLevel": 12,
                "trophies": 4030,
                "clanChestCrowns": 0,
                "donations": 274,
                "donationsReceived": 280,
                "donationsDelta": -6,
                "donationsPercent": 0.76,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "cyber",
                "tag": "2GGRJCGRV",
                "rank": 26,
                "previousRank": 25,
                "role": "coLeader",
                "expLevel": 11,
                "trophies": 4028,
                "clanChestCrowns": 0,
                "donations": 346,
                "donationsReceived": 480,
                "donationsDelta": -134,
                "donationsPercent": 0.96,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Matheus_YouTube",
                "tag": "2R8UPJJJ9",
                "rank": 27,
                "previousRank": 26,
                "role": "elder",
                "expLevel": 11,
                "trophies": 4028,
                "clanChestCrowns": 0,
                "donations": 150,
                "donationsReceived": 320,
                "donationsDelta": -170,
                "donationsPercent": 0.42,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "heitorbev",
                "tag": "C8PPUUR8",
                "rank": 28,
                "previousRank": 28,
                "role": "member",
                "expLevel": 11,
                "trophies": 4027,
                "clanChestCrowns": 11,
                "donations": 540,
                "donationsReceived": 550,
                "donationsDelta": -10,
                "donationsPercent": 1.5,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "ed-_Ghst",
                "tag": "29JU0Q0JV",
                "rank": 29,
                "previousRank": 29,
                "role": "elder",
                "expLevel": 10,
                "trophies": 4026,
                "clanChestCrowns": 0,
                "donations": 695,
                "donationsReceived": 440,
                "donationsDelta": 255,
                "donationsPercent": 1.93,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "FamousGunner",
                "tag": "80G00JLY",
                "rank": 30,
                "previousRank": 38,
                "role": "coLeader",
                "expLevel": 12,
                "trophies": 4025,
                "clanChestCrowns": 0,
                "donations": 416,
                "donationsReceived": 360,
                "donationsDelta": 56,
                "donationsPercent": 1.15,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "ULOLO",
                "tag": "2LGGV92QL",
                "rank": 31,
                "previousRank": 30,
                "role": "elder",
                "expLevel": 12,
                "trophies": 4024,
                "clanChestCrowns": 0,
                "donations": 757,
                "donationsReceived": 560,
                "donationsDelta": 197,
                "donationsPercent": 2.1,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Guigo_Br_Royale",
                "tag": "PL0UYRYG",
                "rank": 32,
                "previousRank": 31,
                "role": "member",
                "expLevel": 11,
                "trophies": 4014,
                "clanChestCrowns": 0,
                "donations": 272,
                "donationsReceived": 272,
                "donationsDelta": 0,
                "donationsPercent": 0.75,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Alessandro",
                "tag": "2RP9YVJUY",
                "rank": 33,
                "previousRank": 32,
                "role": "member",
                "expLevel": 11,
                "trophies": 4014,
                "clanChestCrowns": 0,
                "donations": 658,
                "donationsReceived": 440,
                "donationsDelta": 218,
                "donationsPercent": 1.82,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "十心",
                "tag": "28U088C8Q",
                "rank": 34,
                "previousRank": 33,
                "role": "member",
                "expLevel": 10,
                "trophies": 4003,
                "clanChestCrowns": 0,
                "donations": 100,
                "donationsReceived": 310,
                "donationsDelta": -210,
                "donationsPercent": 0.28,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "BRAMA O MONSTRO",
                "tag": "22GCY0VUV",
                "rank": 35,
                "previousRank": 34,
                "role": "member",
                "expLevel": 11,
                "trophies": 4002,
                "clanChestCrowns": 0,
                "donations": 462,
                "donationsReceived": 270,
                "donationsDelta": 192,
                "donationsPercent": 1.28,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Yuiti1",
                "tag": "RRLLV8VU",
                "rank": 36,
                "previousRank": 35,
                "role": "elder",
                "expLevel": 11,
                "trophies": 3986,
                "clanChestCrowns": 0,
                "donations": 332,
                "donationsReceived": 280,
                "donationsDelta": 52,
                "donationsPercent": 0.92,
                "arena": {
                  "name": "Legendary Arena",
                  "arena": "Arena 12",
                  "arenaID": 12,
                  "trophyLimit": 3800
                }
              },
              {
                "name": "jsilverio",
                "tag": "8028QYJYJ",
                "rank": 37,
                "previousRank": 36,
                "role": "elder",
                "expLevel": 10,
                "trophies": 3984,
                "clanChestCrowns": 0,
                "donations": 747,
                "donationsReceived": 560,
                "donationsDelta": 187,
                "donationsPercent": 2.07,
                "arena": {
                  "name": "Legendary Arena",
                  "arena": "Arena 12",
                  "arenaID": 12,
                  "trophyLimit": 3800
                }
              },
              {
                "name": "Cesar Br",
                "tag": "L0LPYV82",
                "rank": 38,
                "previousRank": 37,
                "role": "elder",
                "expLevel": 11,
                "trophies": 3984,
                "clanChestCrowns": 0,
                "donations": 224,
                "donationsReceived": 240,
                "donationsDelta": -16,
                "donationsPercent": 0.62,
                "arena": {
                  "name": "Legendary Arena",
                  "arena": "Arena 12",
                  "arenaID": 12,
                  "trophyLimit": 3800
                }
              },
              {
                "name": "DenisBeard",
                "tag": "PY9LYP9V",
                "rank": 39,
                "previousRank": 42,
                "role": "elder",
                "expLevel": 11,
                "trophies": 3952,
                "clanChestCrowns": 0,
                "donations": 358,
                "donationsReceived": 270,
                "donationsDelta": 88,
                "donationsPercent": 0.99,
                "arena": {
                  "name": "Legendary Arena",
                  "arena": "Arena 12",
                  "arenaID": 12,
                  "trophyLimit": 3800
                }
              },
              {
                "name": "Jean William",
                "tag": "29JQ8PV0C",
                "rank": 40,
                "previousRank": 39,
                "role": "elder",
                "expLevel": 11,
                "trophies": 3935,
                "clanChestCrowns": 0,
                "donations": 542,
                "donationsReceived": 360,
                "donationsDelta": 182,
                "donationsPercent": 1.5,
                "arena": {
                  "name": "Legendary Arena",
                  "arena": "Arena 12",
                  "arenaID": 12,
                  "trophyLimit": 3800
                }
              },
              {
                "name": "[Q]uiron",
                "tag": "2U8V20PQ",
                "rank": 41,
                "previousRank": 43,
                "role": "member",
                "expLevel": 11,
                "trophies": 3911,
                "clanChestCrowns": 1,
                "donations": 254,
                "donationsReceived": 320,
                "donationsDelta": -66,
                "donationsPercent": 0.7,
                "arena": {
                  "name": "Legendary Arena",
                  "arena": "Arena 12",
                  "arenaID": 12,
                  "trophyLimit": 3800
                }
              },
              {
                "name": "Monique",
                "tag": "2JJ2UQCRR",
                "rank": 42,
                "previousRank": 44,
                "role": "elder",
                "expLevel": 11,
                "trophies": 3898,
                "clanChestCrowns": 0,
                "donations": 611,
                "donationsReceived": 352,
                "donationsDelta": 259,
                "donationsPercent": 1.69,
                "arena": {
                  "name": "Legendary Arena",
                  "arena": "Arena 12",
                  "arenaID": 12,
                  "trophyLimit": 3800
                }
              },
              {
                "name": "Thiago",
                "tag": "2P9VCURV8",
                "rank": 43,
                "previousRank": 40,
                "role": "elder",
                "expLevel": 11,
                "trophies": 3892,
                "clanChestCrowns": 0,
                "donations": 185,
                "donationsReceived": 360,
                "donationsDelta": -175,
                "donationsPercent": 0.51,
                "arena": {
                  "name": "Legendary Arena",
                  "arena": "Arena 12",
                  "arenaID": 12,
                  "trophyLimit": 3800
                }
              },
              {
                "name": "J Nunes",
                "tag": "LPQ009JV",
                "rank": 44,
                "previousRank": 41,
                "role": "elder",
                "expLevel": 11,
                "trophies": 3889,
                "clanChestCrowns": 0,
                "donations": 250,
                "donationsReceived": 360,
                "donationsDelta": -110,
                "donationsPercent": 0.69,
                "arena": {
                  "name": "Legendary Arena",
                  "arena": "Arena 12",
                  "arenaID": 12,
                  "trophyLimit": 3800
                }
              },
              {
                "name": "CholAMenos",
                "tag": "CGCVL8L0",
                "rank": 45,
                "previousRank": 45,
                "role": "member",
                "expLevel": 11,
                "trophies": 3791,
                "clanChestCrowns": 0,
                "donations": 451,
                "donationsReceived": 360,
                "donationsDelta": 91,
                "donationsPercent": 1.25,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Black-GeeK",
                "tag": "809YG9YJG",
                "rank": 46,
                "previousRank": 46,
                "role": "member",
                "expLevel": 10,
                "trophies": 3731,
                "clanChestCrowns": 0,
                "donations": 364,
                "donationsReceived": 440,
                "donationsDelta": -76,
                "donationsPercent": 1.01,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "FirtLS",
                "tag": "2CV8RYYU8",
                "rank": 47,
                "previousRank": 48,
                "role": "elder",
                "expLevel": 11,
                "trophies": 3697,
                "clanChestCrowns": 0,
                "donations": 421,
                "donationsReceived": 370,
                "donationsDelta": 51,
                "donationsPercent": 1.17,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Widowmaker",
                "tag": "GGVY8CJ0",
                "rank": 48,
                "previousRank": 47,
                "role": "member",
                "expLevel": 10,
                "trophies": 3688,
                "clanChestCrowns": 0,
                "donations": 58,
                "donationsReceived": 190,
                "donationsDelta": -132,
                "donationsPercent": 0.16,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "brunovisk",
                "tag": "2GQUQQ0L8",
                "rank": 49,
                "previousRank": 49,
                "role": "elder",
                "expLevel": 10,
                "trophies": 3629,
                "clanChestCrowns": 0,
                "donations": 62,
                "donationsReceived": 320,
                "donationsDelta": -258,
                "donationsPercent": 0.17,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Andreleiti",
                "tag": "VR20LP0",
                "rank": 50,
                "previousRank": 50,
                "role": "member",
                "expLevel": 10,
                "trophies": 3460,
                "clanChestCrowns": 3,
                "donations": 306,
                "donationsReceived": 240,
                "donationsDelta": 66,
                "donationsPercent": 0.85,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              }
            ]
          },
          {
            "tag": "2UQJJL80",
            "name": "NEW STAR 2",
            "description": "clan de broder, foco em doação e bau do clan,permitido uma conta por player.",
            "type": "open",
            "score": 35779,
            "memberCount": 50,
            "requiredScore": 2800,
            "donations": 14128,
            "clanChest": {
              "status": "active"
            },
            "badge": {
              "name": "Traditional_Star_04",
              "category": "01_Symbol",
              "id": 16000039,
              "image": "https://cr-api.github.io/cr-api-assets/badges/Traditional_Star_04.png"
            },
            "location": {
              "name": "Brazil",
              "isCountry": true,
              "code": "BR"
            },
            "members": [{
                "name": "Takkero",
                "tag": "2YRL89QLJ",
                "rank": 1,
                "previousRank": 1,
                "role": "leader",
                "expLevel": 11,
                "trophies": 4017,
                "clanChestCrowns": 0,
                "donations": 729,
                "donationsReceived": 552,
                "donationsDelta": 177,
                "donationsPercent": 2.58,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "AlexTre",
                "tag": "2J9LURCRR",
                "rank": 2,
                "previousRank": 2,
                "role": "member",
                "expLevel": 10,
                "trophies": 4017,
                "clanChestCrowns": 0,
                "donations": 326,
                "donationsReceived": 400,
                "donationsDelta": -74,
                "donationsPercent": 1.15,
                "arena": {
                  "name": "Challenger I",
                  "arena": "League 1",
                  "arenaID": 13,
                  "trophyLimit": 4000
                }
              },
              {
                "name": "Pir8",
                "tag": "2YCGPPL0G",
                "rank": 3,
                "previousRank": 3,
                "role": "member",
                "expLevel": 11,
                "trophies": 3959,
                "clanChestCrowns": 0,
                "donations": 265,
                "donationsReceived": 400,
                "donationsDelta": -135,
                "donationsPercent": 0.94,
                "arena": {
                  "name": "Legendary Arena",
                  "arena": "Arena 12",
                  "arenaID": 12,
                  "trophyLimit": 3800
                }
              },
              {
                "name": "Leo Mito",
                "tag": "GUQLR2YL",
                "rank": 4,
                "previousRank": 4,
                "role": "member",
                "expLevel": 11,
                "trophies": 3890,
                "clanChestCrowns": 0,
                "donations": 102,
                "donationsReceived": 120,
                "donationsDelta": -18,
                "donationsPercent": 0.36,
                "arena": {
                  "name": "Legendary Arena",
                  "arena": "Arena 12",
                  "arenaID": 12,
                  "trophyLimit": 3800
                }
              },
              {
                "name": "anderson",
                "tag": "RRUQUUUP",
                "rank": 5,
                "previousRank": 5,
                "role": "elder",
                "expLevel": 10,
                "trophies": 3851,
                "clanChestCrowns": 0,
                "donations": 388,
                "donationsReceived": 392,
                "donationsDelta": -4,
                "donationsPercent": 1.37,
                "arena": {
                  "name": "Legendary Arena",
                  "arena": "Arena 12",
                  "arenaID": 12,
                  "trophyLimit": 3800
                }
              },
              {
                "name": "Deselegante",
                "tag": "8Q2QJQQV",
                "rank": 6,
                "previousRank": 7,
                "role": "member",
                "expLevel": 11,
                "trophies": 3791,
                "clanChestCrowns": 3,
                "donations": 131,
                "donationsReceived": 440,
                "donationsDelta": -309,
                "donationsPercent": 0.46,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "viktor (clown)",
                "tag": "2L92Y8QYU",
                "rank": 7,
                "previousRank": 6,
                "role": "member",
                "expLevel": 11,
                "trophies": 3775,
                "clanChestCrowns": 0,
                "donations": 499,
                "donationsReceived": 360,
                "donationsDelta": 139,
                "donationsPercent": 1.77,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "riki678",
                "tag": "2UV0RGVCG",
                "rank": 8,
                "previousRank": 8,
                "role": "member",
                "expLevel": 10,
                "trophies": 3760,
                "clanChestCrowns": 0,
                "donations": 316,
                "donationsReceived": 352,
                "donationsDelta": -36,
                "donationsPercent": 1.12,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "GGriel",
                "tag": "8GGQ2R0J",
                "rank": 9,
                "previousRank": 10,
                "role": "member",
                "expLevel": 11,
                "trophies": 3649,
                "clanChestCrowns": 0,
                "donations": 176,
                "donationsReceived": 240,
                "donationsDelta": -64,
                "donationsPercent": 0.62,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Alejandro",
                "tag": "8Y9YUJRJ",
                "rank": 10,
                "previousRank": 9,
                "role": "member",
                "expLevel": 11,
                "trophies": 3619,
                "clanChestCrowns": 0,
                "donations": 227,
                "donationsReceived": 160,
                "donationsDelta": 67,
                "donationsPercent": 0.8,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "A. Ozodrac",
                "tag": "2L808JU82",
                "rank": 11,
                "previousRank": 12,
                "role": "member",
                "expLevel": 10,
                "trophies": 3552,
                "clanChestCrowns": 0,
                "donations": 73,
                "donationsReceived": 80,
                "donationsDelta": -7,
                "donationsPercent": 0.26,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Jiban",
                "tag": "CVRYRPCQ",
                "rank": 12,
                "previousRank": 13,
                "role": "member",
                "expLevel": 11,
                "trophies": 3514,
                "clanChestCrowns": 1,
                "donations": 111,
                "donationsReceived": 280,
                "donationsDelta": -169,
                "donationsPercent": 0.39,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Dark Knight",
                "tag": "88UCGPJQQ",
                "rank": 13,
                "previousRank": 11,
                "role": "coLeader",
                "expLevel": 10,
                "trophies": 3509,
                "clanChestCrowns": 8,
                "donations": 598,
                "donationsReceived": 440,
                "donationsDelta": 158,
                "donationsPercent": 2.12,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Victor play 926",
                "tag": "QJRV00RG",
                "rank": 14,
                "previousRank": 14,
                "role": "member",
                "expLevel": 10,
                "trophies": 3504,
                "clanChestCrowns": 0,
                "donations": 176,
                "donationsReceived": 280,
                "donationsDelta": -104,
                "donationsPercent": 0.62,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "KA Games",
                "tag": "28VCULLGG",
                "rank": 15,
                "previousRank": 15,
                "role": "member",
                "expLevel": 10,
                "trophies": 3490,
                "clanChestCrowns": 0,
                "donations": 94,
                "donationsReceived": 360,
                "donationsDelta": -266,
                "donationsPercent": 0.33,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Pyetra Gamer",
                "tag": "80QU0892Y",
                "rank": 16,
                "previousRank": 16,
                "role": "member",
                "expLevel": 10,
                "trophies": 3484,
                "clanChestCrowns": 6,
                "donations": 828,
                "donationsReceived": 480,
                "donationsDelta": 348,
                "donationsPercent": 2.93,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Davy Jhones",
                "tag": "888CLP899",
                "rank": 17,
                "previousRank": 21,
                "role": "member",
                "expLevel": 10,
                "trophies": 3478,
                "clanChestCrowns": 0,
                "donations": 247,
                "donationsReceived": 200,
                "donationsDelta": 47,
                "donationsPercent": 0.87,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "weverton",
                "tag": "8JP8V0RUJ",
                "rank": 18,
                "previousRank": 17,
                "role": "member",
                "expLevel": 10,
                "trophies": 3478,
                "clanChestCrowns": 0,
                "donations": 321,
                "donationsReceived": 240,
                "donationsDelta": 81,
                "donationsPercent": 1.14,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Doouug",
                "tag": "20LJPGJ8R",
                "rank": 19,
                "previousRank": 18,
                "role": "member",
                "expLevel": 11,
                "trophies": 3452,
                "clanChestCrowns": 0,
                "donations": 484,
                "donationsReceived": 360,
                "donationsDelta": 124,
                "donationsPercent": 1.71,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Shaun",
                "tag": "2QLRJ2289",
                "rank": 20,
                "previousRank": 19,
                "role": "member",
                "expLevel": 10,
                "trophies": 3451,
                "clanChestCrowns": 0,
                "donations": 296,
                "donationsReceived": 320,
                "donationsDelta": -24,
                "donationsPercent": 1.05,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "victor-pcr",
                "tag": "2LLGGJ9V8",
                "rank": 21,
                "previousRank": 23,
                "role": "member",
                "expLevel": 9,
                "trophies": 3401,
                "clanChestCrowns": 0,
                "donations": 220,
                "donationsReceived": 240,
                "donationsDelta": -20,
                "donationsPercent": 0.78,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "kauan",
                "tag": "88VCVPPQU",
                "rank": 22,
                "previousRank": 20,
                "role": "member",
                "expLevel": 10,
                "trophies": 3391,
                "clanChestCrowns": 9,
                "donations": 783,
                "donationsReceived": 380,
                "donationsDelta": 403,
                "donationsPercent": 2.77,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "darkpv",
                "tag": "8QPYPQCJ9",
                "rank": 23,
                "previousRank": 24,
                "role": "member",
                "expLevel": 10,
                "trophies": 3387,
                "clanChestCrowns": 0,
                "donations": 296,
                "donationsReceived": 320,
                "donationsDelta": -24,
                "donationsPercent": 1.05,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "GUILHERME",
                "tag": "G8Y8P2R0",
                "rank": 24,
                "previousRank": 22,
                "role": "member",
                "expLevel": 10,
                "trophies": 3378,
                "clanChestCrowns": 0,
                "donations": 82,
                "donationsReceived": 120,
                "donationsDelta": -38,
                "donationsPercent": 0.29,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "xx",
                "tag": "2VG99GR9V",
                "rank": 25,
                "previousRank": 25,
                "role": "member",
                "expLevel": 10,
                "trophies": 3375,
                "clanChestCrowns": 0,
                "donations": 386,
                "donationsReceived": 330,
                "donationsDelta": 56,
                "donationsPercent": 1.37,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Bruk3t",
                "tag": "8YPYJYLQU",
                "rank": 26,
                "previousRank": 26,
                "role": "member",
                "expLevel": 10,
                "trophies": 3374,
                "clanChestCrowns": 0,
                "donations": 231,
                "donationsReceived": 160,
                "donationsDelta": 71,
                "donationsPercent": 0.82,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "doce como limão",
                "tag": "898VCGLVL",
                "rank": 27,
                "previousRank": 27,
                "role": "member",
                "expLevel": 10,
                "trophies": 3331,
                "clanChestCrowns": 0,
                "donations": 177,
                "donationsReceived": 360,
                "donationsDelta": -183,
                "donationsPercent": 0.63,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "rgpanna",
                "tag": "2VPVUR2Y0",
                "rank": 28,
                "previousRank": 28,
                "role": "member",
                "expLevel": 10,
                "trophies": 3240,
                "clanChestCrowns": 0,
                "donations": 212,
                "donationsReceived": 360,
                "donationsDelta": -148,
                "donationsPercent": 0.75,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "clarencio",
                "tag": "2GJP098QJ",
                "rank": 29,
                "previousRank": 29,
                "role": "member",
                "expLevel": 10,
                "trophies": 3226,
                "clanChestCrowns": 0,
                "donations": 338,
                "donationsReceived": 240,
                "donationsDelta": 98,
                "donationsPercent": 1.2,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "HunterLegend",
                "tag": "88L9G8QV2",
                "rank": 30,
                "previousRank": 30,
                "role": "coLeader",
                "expLevel": 11,
                "trophies": 3212,
                "clanChestCrowns": 0,
                "donations": 581,
                "donationsReceived": 534,
                "donationsDelta": 47,
                "donationsPercent": 2.06,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Bruno",
                "tag": "RRPP0URY",
                "rank": 31,
                "previousRank": 31,
                "role": "member",
                "expLevel": 10,
                "trophies": 3201,
                "clanChestCrowns": 0,
                "donations": 390,
                "donationsReceived": 400,
                "donationsDelta": -10,
                "donationsPercent": 1.38,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Treinador JOSE",
                "tag": "LPJR0CL9",
                "rank": 32,
                "previousRank": 32,
                "role": "member",
                "expLevel": 10,
                "trophies": 3199,
                "clanChestCrowns": 0,
                "donations": 130,
                "donationsReceived": 200,
                "donationsDelta": -70,
                "donationsPercent": 0.46,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "labib",
                "tag": "9Y2RRRQ",
                "rank": 33,
                "previousRank": 33,
                "role": "member",
                "expLevel": 10,
                "trophies": 3181,
                "clanChestCrowns": 0,
                "donations": 180,
                "donationsReceived": 190,
                "donationsDelta": -10,
                "donationsPercent": 0.64,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "D.E.K.K.O.",
                "tag": "2G0RRYQCL",
                "rank": 34,
                "previousRank": 34,
                "role": "member",
                "expLevel": 10,
                "trophies": 3169,
                "clanChestCrowns": 0,
                "donations": 280,
                "donationsReceived": 250,
                "donationsDelta": 30,
                "donationsPercent": 0.99,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "supercell",
                "tag": "8YJRVQUP8",
                "rank": 35,
                "previousRank": 35,
                "role": "member",
                "expLevel": 10,
                "trophies": 3115,
                "clanChestCrowns": 0,
                "donations": 162,
                "donationsReceived": 80,
                "donationsDelta": 82,
                "donationsPercent": 0.57,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "bryan",
                "tag": "2CLGQLQ20",
                "rank": 36,
                "previousRank": 36,
                "role": "member",
                "expLevel": 10,
                "trophies": 3080,
                "clanChestCrowns": 0,
                "donations": 204,
                "donationsReceived": 320,
                "donationsDelta": -116,
                "donationsPercent": 0.72,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Pato Donald",
                "tag": "29CJRGJ0C",
                "rank": 37,
                "previousRank": 37,
                "role": "member",
                "expLevel": 10,
                "trophies": 3066,
                "clanChestCrowns": 0,
                "donations": 108,
                "donationsReceived": 80,
                "donationsDelta": 28,
                "donationsPercent": 0.38,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "999",
                "tag": "V9QYQYJ8",
                "rank": 38,
                "previousRank": 38,
                "role": "member",
                "expLevel": 10,
                "trophies": 3065,
                "clanChestCrowns": 0,
                "donations": 193,
                "donationsReceived": 400,
                "donationsDelta": -207,
                "donationsPercent": 0.68,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "vitor",
                "tag": "J9GY8YJ",
                "rank": 39,
                "previousRank": 39,
                "role": "member",
                "expLevel": 10,
                "trophies": 3033,
                "clanChestCrowns": 0,
                "donations": 370,
                "donationsReceived": 340,
                "donationsDelta": 30,
                "donationsPercent": 1.31,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Phil",
                "tag": "PQR09YQG",
                "rank": 40,
                "previousRank": 40,
                "role": "member",
                "expLevel": 10,
                "trophies": 3000,
                "clanChestCrowns": 0,
                "donations": 503,
                "donationsReceived": 480,
                "donationsDelta": 23,
                "donationsPercent": 1.78,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "Gab Clash",
                "tag": "ULCCUVV9",
                "rank": 41,
                "previousRank": 41,
                "role": "member",
                "expLevel": 10,
                "trophies": 2954,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Jungle Arena",
                  "arena": "Arena 9",
                  "arenaID": 9,
                  "trophyLimit": 2600
                }
              },
              {
                "name": "tommy",
                "tag": "PPQJGRUG",
                "rank": 42,
                "previousRank": 42,
                "role": "member",
                "expLevel": 10,
                "trophies": 2950,
                "clanChestCrowns": 0,
                "donations": 58,
                "donationsReceived": 150,
                "donationsDelta": -92,
                "donationsPercent": 0.21,
                "arena": {
                  "name": "Jungle Arena",
                  "arena": "Arena 9",
                  "arenaID": 9,
                  "trophyLimit": 2600
                }
              },
              {
                "name": "Pedro12345",
                "tag": "82VRUULGY",
                "rank": 43,
                "previousRank": 47,
                "role": "member",
                "expLevel": 9,
                "trophies": 2925,
                "clanChestCrowns": 0,
                "donations": 76,
                "donationsReceived": 120,
                "donationsDelta": -44,
                "donationsPercent": 0.27,
                "arena": {
                  "name": "Jungle Arena",
                  "arena": "Arena 9",
                  "arenaID": 9,
                  "trophyLimit": 2600
                }
              },
              {
                "name": "maykell",
                "tag": "29RLCGGR",
                "rank": 44,
                "previousRank": 44,
                "role": "member",
                "expLevel": 9,
                "trophies": 2909,
                "clanChestCrowns": 0,
                "donations": 536,
                "donationsReceived": 300,
                "donationsDelta": 236,
                "donationsPercent": 1.9,
                "arena": {
                  "name": "Jungle Arena",
                  "arena": "Arena 9",
                  "arenaID": 9,
                  "trophyLimit": 2600
                }
              },
              {
                "name": "007",
                "tag": "89L2JP8PV",
                "rank": 45,
                "previousRank": 45,
                "role": "member",
                "expLevel": 9,
                "trophies": 2868,
                "clanChestCrowns": 0,
                "donations": 22,
                "donationsReceived": 30,
                "donationsDelta": -8,
                "donationsPercent": 0.08,
                "arena": {
                  "name": "Jungle Arena",
                  "arena": "Arena 9",
                  "arenaID": 9,
                  "trophyLimit": 2600
                }
              },
              {
                "name": "Ban_02",
                "tag": "8R8CGL8P0",
                "rank": 46,
                "previousRank": 46,
                "role": "member",
                "expLevel": 7,
                "trophies": 2848,
                "clanChestCrowns": 0,
                "donations": 10,
                "donationsReceived": 30,
                "donationsDelta": -20,
                "donationsPercent": 0.04,
                "arena": {
                  "name": "Jungle Arena",
                  "arena": "Arena 9",
                  "arenaID": 9,
                  "trophyLimit": 2600
                }
              },
              {
                "name": "Andree",
                "tag": "99G0RPY8",
                "rank": 47,
                "previousRank": 48,
                "role": "member",
                "expLevel": 9,
                "trophies": 2798,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Jungle Arena",
                  "arena": "Arena 9",
                  "arenaID": 9,
                  "trophyLimit": 2600
                }
              },
              {
                "name": "Heisenberg",
                "tag": "8GRU2YQPL",
                "rank": 48,
                "previousRank": 43,
                "role": "member",
                "expLevel": 10,
                "trophies": 2787,
                "clanChestCrowns": 0,
                "donations": 674,
                "donationsReceived": 390,
                "donationsDelta": 284,
                "donationsPercent": 2.39,
                "arena": {
                  "name": "Jungle Arena",
                  "arena": "Arena 9",
                  "arenaID": 9,
                  "trophyLimit": 2600
                }
              },
              {
                "name": "RealBadboy",
                "tag": "9PJ8RQLUG",
                "rank": 49,
                "previousRank": 49,
                "role": "member",
                "expLevel": 8,
                "trophies": 2488,
                "clanChestCrowns": 0,
                "donations": 303,
                "donationsReceived": 330,
                "donationsDelta": -27,
                "donationsPercent": 1.07,
                "arena": {
                  "name": "Frozen Peak",
                  "arena": "Arena 8",
                  "arenaID": 8,
                  "trophyLimit": 2300
                }
              },
              {
                "name": "enzoka",
                "tag": "9QY98RG20",
                "rank": 50,
                "previousRank": 50,
                "role": "member",
                "expLevel": 6,
                "trophies": 1128,
                "clanChestCrowns": 0,
                "donations": 12,
                "donationsReceived": 60,
                "donationsDelta": -48,
                "donationsPercent": 0.04,
                "arena": {
                  "name": "P.E.K.K.A's Playhouse",
                  "arena": "Arena 4",
                  "arenaID": 4,
                  "trophyLimit": 1100
                }
              }
            ]
          },
          {
            "tag": "8G292G8J",
            "name": "New Star 3",
            "description": "Clan the brother, foco em doação e bau do clan,jogue direito e suba para o clan 2,não ajudou e não avisou é kick.",
            "type": "open",
            "score": 15089,
            "memberCount": 47,
            "requiredScore": 400,
            "donations": 1473,
            "clanChest": {
              "status": "active"
            },
            "badge": {
              "name": "Traditional_Star_04",
              "category": "01_Symbol",
              "id": 16000039,
              "image": "https://cr-api.github.io/cr-api-assets/badges/Traditional_Star_04.png"
            },
            "location": {
              "name": "Brazil",
              "isCountry": true,
              "code": "BR"
            },
            "members": [{
                "name": "ZzCr0sszZ",
                "tag": "RCVUJQP9",
                "rank": 1,
                "previousRank": 1,
                "role": "member",
                "expLevel": 11,
                "trophies": 3413,
                "clanChestCrowns": 0,
                "donations": 115,
                "donationsReceived": 274,
                "donationsDelta": -159,
                "donationsPercent": 3.9,
                "arena": {
                  "name": "Electro Valley",
                  "arena": "Arena 11",
                  "arenaID": 11,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "samuel is cool",
                "tag": "GYR0YYGP",
                "rank": 2,
                "previousRank": 2,
                "role": "coLeader",
                "expLevel": 10,
                "trophies": 3099,
                "clanChestCrowns": 0,
                "donations": 186,
                "donationsReceived": 140,
                "donationsDelta": 46,
                "donationsPercent": 6.31,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "DuduNesi7r",
                "tag": "2VYV8Q22V",
                "rank": 3,
                "previousRank": 3,
                "role": "leader",
                "expLevel": 10,
                "trophies": 2959,
                "clanChestCrowns": 0,
                "donations": 226,
                "donationsReceived": 50,
                "donationsDelta": 176,
                "donationsPercent": 7.67,
                "arena": {
                  "name": "Hog Mountain",
                  "arena": "Arena 10",
                  "arenaID": 10,
                  "trophyLimit": 3000
                }
              },
              {
                "name": "BrewMasterLOLO",
                "tag": "2QG2QR9RY",
                "rank": 4,
                "previousRank": 4,
                "role": "elder",
                "expLevel": 9,
                "trophies": 2817,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Jungle Arena",
                  "arena": "Arena 9",
                  "arenaID": 9,
                  "trophyLimit": 2600
                }
              },
              {
                "name": "Mckernan",
                "tag": "29LUQC2J9",
                "rank": 5,
                "previousRank": 5,
                "role": "member",
                "expLevel": 9,
                "trophies": 2332,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Frozen Peak",
                  "arena": "Arena 8",
                  "arenaID": 8,
                  "trophyLimit": 2300
                }
              },
              {
                "name": "Ignição",
                "tag": "8PUYC20YQ",
                "rank": 6,
                "previousRank": 6,
                "role": "member",
                "expLevel": 6,
                "trophies": 2056,
                "clanChestCrowns": 0,
                "donations": 76,
                "donationsReceived": 120,
                "donationsDelta": -44,
                "donationsPercent": 2.58,
                "arena": {
                  "name": "Royal Arena",
                  "arena": "Arena 7",
                  "arenaID": 7,
                  "trophyLimit": 2000
                }
              },
              {
                "name": "Gabriel .",
                "tag": "2QG2CL9QR",
                "rank": 7,
                "previousRank": 7,
                "role": "elder",
                "expLevel": 9,
                "trophies": 1967,
                "clanChestCrowns": 0,
                "donations": 130,
                "donationsReceived": 133,
                "donationsDelta": -3,
                "donationsPercent": 4.41,
                "arena": {
                  "name": "Royal Arena",
                  "arena": "Arena 7",
                  "arenaID": 7,
                  "trophyLimit": 2000
                }
              },
              {
                "name": "XxDarkfirexX",
                "tag": "8GQ8V0PU8",
                "rank": 8,
                "previousRank": 8,
                "role": "member",
                "expLevel": 7,
                "trophies": 1695,
                "clanChestCrowns": 0,
                "donations": 221,
                "donationsReceived": 110,
                "donationsDelta": 111,
                "donationsPercent": 7.5,
                "arena": {
                  "name": "Builder's Workshop",
                  "arena": "Arena 6",
                  "arenaID": 6,
                  "trophyLimit": 1700
                }
              },
              {
                "name": "MAU",
                "tag": "28Y0JLJY0",
                "rank": 9,
                "previousRank": 9,
                "role": "member",
                "expLevel": 8,
                "trophies": 1613,
                "clanChestCrowns": 0,
                "donations": 50,
                "donationsReceived": 40,
                "donationsDelta": 10,
                "donationsPercent": 1.7,
                "arena": {
                  "name": "Spell Valley",
                  "arena": "Arena 5",
                  "arenaID": 5,
                  "trophyLimit": 1400
                }
              },
              {
                "name": "LUC4S BR",
                "tag": "9LUPGGYJY",
                "rank": 10,
                "previousRank": 10,
                "role": "member",
                "expLevel": 6,
                "trophies": 1553,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Spell Valley",
                  "arena": "Arena 5",
                  "arenaID": 5,
                  "trophyLimit": 1400
                }
              },
              {
                "name": "shaun",
                "tag": "9L9VLC0VR",
                "rank": 11,
                "previousRank": 11,
                "role": "member",
                "expLevel": 7,
                "trophies": 1498,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Spell Valley",
                  "arena": "Arena 5",
                  "arenaID": 5,
                  "trophyLimit": 1400
                }
              },
              {
                "name": "Yuh",
                "tag": "8G8PQQL8L",
                "rank": 12,
                "previousRank": 12,
                "role": "member",
                "expLevel": 5,
                "trophies": 1253,
                "clanChestCrowns": 0,
                "donations": 4,
                "donationsReceived": 80,
                "donationsDelta": -76,
                "donationsPercent": 0.14,
                "arena": {
                  "name": "P.E.K.K.A's Playhouse",
                  "arena": "Arena 4",
                  "arenaID": 4,
                  "trophyLimit": 1100
                }
              },
              {
                "name": "DaviL",
                "tag": "98UJRURY2",
                "rank": 13,
                "previousRank": 20,
                "role": "member",
                "expLevel": 4,
                "trophies": 1073,
                "clanChestCrowns": 3,
                "donations": 15,
                "donationsReceived": 40,
                "donationsDelta": -25,
                "donationsPercent": 0.51,
                "arena": {
                  "name": "Barbarian Bowl",
                  "arena": "Arena 3",
                  "arenaID": 3,
                  "trophyLimit": 800
                }
              },
              {
                "name": "Eva soares",
                "tag": "8UQP0U2LV",
                "rank": 14,
                "previousRank": 15,
                "role": "member",
                "expLevel": 6,
                "trophies": 978,
                "clanChestCrowns": 16,
                "donations": 5,
                "donationsReceived": 30,
                "donationsDelta": -25,
                "donationsPercent": 0.17,
                "arena": {
                  "name": "Barbarian Bowl",
                  "arena": "Arena 3",
                  "arenaID": 3,
                  "trophyLimit": 800
                }
              },
              {
                "name": "shaum",
                "tag": "9LYJQP9RG",
                "rank": 15,
                "previousRank": 13,
                "role": "member",
                "expLevel": 4,
                "trophies": 937,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Barbarian Bowl",
                  "arena": "Arena 3",
                  "arenaID": 3,
                  "trophyLimit": 800
                }
              },
              {
                "name": "Dudinhaaa",
                "tag": "82YPQ0VJ8",
                "rank": 16,
                "previousRank": 14,
                "role": "member",
                "expLevel": 5,
                "trophies": 916,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 10,
                "donationsDelta": -10,
                "donationsPercent": 0,
                "arena": {
                  "name": "Barbarian Bowl",
                  "arena": "Arena 3",
                  "arenaID": 3,
                  "trophyLimit": 800
                }
              },
              {
                "name": "cainãdoidao",
                "tag": "9889V9V20",
                "rank": 17,
                "previousRank": 16,
                "role": "member",
                "expLevel": 3,
                "trophies": 824,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Barbarian Bowl",
                  "arena": "Arena 3",
                  "arenaID": 3,
                  "trophyLimit": 800
                }
              },
              {
                "name": "ARMANDO",
                "tag": "92QL2U9C0",
                "rank": 18,
                "role": "member",
                "expLevel": 3,
                "trophies": 778,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 10,
                "donationsDelta": -10,
                "donationsPercent": 0,
                "arena": {
                  "name": "Barbarian Bowl",
                  "arena": "Arena 3",
                  "arenaID": 3,
                  "trophyLimit": 800
                }
              },
              {
                "name": "ian",
                "tag": "92CLUJQYC",
                "rank": 19,
                "previousRank": 17,
                "role": "member",
                "expLevel": 5,
                "trophies": 676,
                "clanChestCrowns": 0,
                "donations": 12,
                "donationsReceived": 60,
                "donationsDelta": -48,
                "donationsPercent": 0.41,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "Não sei",
                "tag": "YC9YPQU9",
                "rank": 20,
                "previousRank": 18,
                "role": "member",
                "expLevel": 5,
                "trophies": 637,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "Guilherme",
                "tag": "9GYJ89CG2",
                "rank": 21,
                "previousRank": 19,
                "role": "member",
                "expLevel": 5,
                "trophies": 620,
                "clanChestCrowns": 0,
                "donations": 38,
                "donationsReceived": 40,
                "donationsDelta": -2,
                "donationsPercent": 1.29,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "mayck",
                "tag": "8VL929G2Y",
                "rank": 22,
                "previousRank": 22,
                "role": "member",
                "expLevel": 4,
                "trophies": 602,
                "clanChestCrowns": 0,
                "donations": 12,
                "donationsReceived": 10,
                "donationsDelta": 2,
                "donationsPercent": 0.41,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "kleber(16)",
                "tag": "8V0092GCU",
                "rank": 23,
                "previousRank": 24,
                "role": "member",
                "expLevel": 1,
                "trophies": 593,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "vitor",
                "tag": "98UL09GJL",
                "rank": 24,
                "previousRank": 28,
                "role": "member",
                "expLevel": 4,
                "trophies": 583,
                "clanChestCrowns": 4,
                "donations": 14,
                "donationsReceived": 20,
                "donationsDelta": -6,
                "donationsPercent": 0.48,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "Kira",
                "tag": "92899V8Q0",
                "rank": 25,
                "role": "member",
                "expLevel": 3,
                "trophies": 566,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 10,
                "donationsDelta": -10,
                "donationsPercent": 0,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "matador",
                "tag": "9GL2JYPGC",
                "rank": 26,
                "previousRank": 25,
                "role": "member",
                "expLevel": 5,
                "trophies": 552,
                "clanChestCrowns": 0,
                "donations": 110,
                "donationsReceived": 60,
                "donationsDelta": 50,
                "donationsPercent": 3.73,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "¥¥biel_loki¥¥",
                "tag": "8QU9LPQGL",
                "rank": 27,
                "previousRank": 21,
                "role": "member",
                "expLevel": 3,
                "trophies": 509,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "JOÃO",
                "tag": "90LC8PR8V",
                "rank": 28,
                "previousRank": 23,
                "role": "member",
                "expLevel": 3,
                "trophies": 495,
                "clanChestCrowns": 0,
                "donations": 4,
                "donationsReceived": 10,
                "donationsDelta": -6,
                "donationsPercent": 0.14,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "victorgamer13",
                "tag": "8VRPRRQQ8",
                "rank": 29,
                "previousRank": 26,
                "role": "member",
                "expLevel": 4,
                "trophies": 470,
                "clanChestCrowns": 0,
                "donations": 46,
                "donationsReceived": 10,
                "donationsDelta": 36,
                "donationsPercent": 1.56,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "Clarinha",
                "tag": "8PYLPRQJ8",
                "rank": 30,
                "previousRank": 27,
                "role": "member",
                "expLevel": 4,
                "trophies": 439,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "kinho 155",
                "tag": "9QPLCYQVC",
                "rank": 31,
                "previousRank": 29,
                "role": "member",
                "expLevel": 4,
                "trophies": 416,
                "clanChestCrowns": 0,
                "donations": 11,
                "donationsReceived": 20,
                "donationsDelta": -9,
                "donationsPercent": 0.37,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "Ana júlia",
                "tag": "8YLR0U0UU",
                "rank": 32,
                "previousRank": 30,
                "role": "member",
                "expLevel": 3,
                "trophies": 415,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "GalaxyFalcon13",
                "tag": "VVRLPRYC",
                "rank": 33,
                "previousRank": 31,
                "role": "member",
                "expLevel": 4,
                "trophies": 410,
                "clanChestCrowns": 0,
                "donations": 11,
                "donationsReceived": 20,
                "donationsDelta": -9,
                "donationsPercent": 0.37,
                "arena": {
                  "name": "Bone Pit",
                  "arena": "Arena 2",
                  "arenaID": 2,
                  "trophyLimit": 400
                }
              },
              {
                "name": "RUAN",
                "tag": "8CL9RGCUG",
                "rank": 34,
                "previousRank": 32,
                "role": "member",
                "expLevel": 3,
                "trophies": 361,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "KK",
                "tag": "8V9R0R980",
                "rank": 35,
                "previousRank": 33,
                "role": "member",
                "expLevel": 3,
                "trophies": 326,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "antonio",
                "tag": "8V9JVUYVL",
                "rank": 36,
                "previousRank": 34,
                "role": "member",
                "expLevel": 4,
                "trophies": 284,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "ma",
                "tag": "989UVQJLQ",
                "rank": 37,
                "previousRank": 35,
                "role": "member",
                "expLevel": 2,
                "trophies": 205,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "o melhor",
                "tag": "90R2CPGPQ",
                "rank": 38,
                "previousRank": 36,
                "role": "member",
                "expLevel": 2,
                "trophies": 179,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "Nivel 1",
                "tag": "90C288UV2",
                "rank": 39,
                "previousRank": 37,
                "role": "member",
                "expLevel": 1,
                "trophies": 177,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "neguinho",
                "tag": "90RGJ2C0C",
                "rank": 40,
                "previousRank": 38,
                "role": "member",
                "expLevel": 2,
                "trophies": 148,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "MIGLE",
                "tag": "8VLPJJPCR",
                "rank": 41,
                "previousRank": 39,
                "role": "member",
                "expLevel": 2,
                "trophies": 120,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "matheus",
                "tag": "8UVP2URVP",
                "rank": 42,
                "previousRank": 40,
                "role": "member",
                "expLevel": 2,
                "trophies": 116,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "P'totuh",
                "tag": "9G0VY00GL",
                "rank": 43,
                "previousRank": 41,
                "role": "member",
                "expLevel": 2,
                "trophies": 116,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "flakes power",
                "tag": "9QULCC8Y0",
                "rank": 44,
                "previousRank": 42,
                "role": "member",
                "expLevel": 3,
                "trophies": 90,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "matheus br",
                "tag": "92V8902V8",
                "rank": 45,
                "previousRank": 43,
                "role": "member",
                "expLevel": 2,
                "trophies": 90,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "akmann 11",
                "tag": "9G0GV8Y2P",
                "rank": 46,
                "previousRank": 44,
                "role": "member",
                "expLevel": 1,
                "trophies": 88,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              },
              {
                "name": "matheus",
                "tag": "90J9RLP0P",
                "rank": 47,
                "previousRank": 45,
                "role": "member",
                "expLevel": 2,
                "trophies": 86,
                "clanChestCrowns": 0,
                "donations": 0,
                "donationsReceived": 0,
                "donationsDelta": 0,
                "donationsPercent": 0,
                "arena": {
                  "name": "Goblin Stadium",
                  "arena": "Arena 1",
                  "arenaID": 1,
                  "trophyLimit": 0
                }
              }
            ]
          }
        ],
        imgsList: [
          'bg1.jpg',
          'bg2.jpg',
          'bg3.jpg',
          'bg4.png',
          'bg5.jpg',
          'bg6.jpg',
          'bg7.jpg'
        ],
        noClanSelected: true,
        clanIdSelected: null,
        members: []
      }
    },
    computed: {
      dynamicBg() {
        return this.imgsList[Math.floor(Math.random() * this.imgsList.length)]
      }
    },
    methods: {
      clanInfo(e, clanId) {
        this.noClanSelected = false
        this.clanIdSelected = clanId
        this.members = this.clans[clanId].members;
  
  
        switch (clanId) {
          case 1:
            console.log('hi')
            break
          case 2:
            console.log('hi')
            break
          case 3:
            console.log('hi')
  
            break
        }
      }
    },
    firebase: {
      lastUpdate: {
        source: db.ref('/lastUpdate'),
        asObject: true,
        readyCallback: function() {
          console.log('Data Updated data: ' + this.lastUpdate)
        }
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .home-bg {
    background-size: cover;
    min-height: 100%;
    min-width: 1024px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
  }
  
  .home {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
