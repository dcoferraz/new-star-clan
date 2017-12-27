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
            <at-button type='primary' icon='icon-activity' @click='clanInfo($event, 1)'>Gerenciar</at-button>
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
            <at-button type='primary' icon='icon-activity' @click='clanInfo($event, 2)'>Gerenciar</at-button>
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
            <at-button type='primary' icon='icon-activity' @click='clanInfo($event, 3)'>Gerenciar</at-button>
          </div>
        </at-card>
      </div>
    </div>
    <div v-else>
      <at-button type="primary" size="small" icon="icon-arrow-left" @click="noClanSelected = !noClanSelected">Voltar</at-button>
      <at-table :columns="column1" :data="clans[clanIdSelected].info.members" height="220"></at-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        column1: [{
          title: 'Nome',
          key: 'name'
        },
        {
          title: 'Ranking',
          key: 'rank'
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
          title: 'Coroas do último baú',
          key: 'clanChestCrowns'
        }],
        clans: {
          1: {
            tag: '2R9CGJUQ',
            info: {}
          },
          2: {
            tag: '2UQJJL80',
            info: {
              'tag': '2UQJJL80',
              'name': 'NEW STAR 2',
              'description': 'clan de broder, foco em doação e bau do clan,permitido uma conta por player.',
              'type': 'open',
              'score': 35608,
              'memberCount': 49,
              'requiredScore': 2800,
              'donations': 9062,
              'clanChest': {
                'status': 'inactive'
              },
              'badge': {
                'name': 'Traditional_Star_04',
                'category': '01_Symbol',
                'id': 16000039,
                'image': 'https://cr-api.github.io/cr-api-assets/badges/Traditional_Star_04.png'
              },
              'location': {
                'name': 'Brazil',
                'isCountry': true,
                'code': 'BR'
              },
              'members': [{
                  'name': 'Takkero',
                  'tag': '2YRL89QLJ',
                  'rank': 1,
                  'previousRank': 1,
                  'role': 'leader',
                  'expLevel': 11,
                  'trophies': 4017,
                  'clanChestCrowns': 52,
                  'donations': 428,
                  'donationsReceived': 360,
                  'donationsDelta': 68,
                  'donationsPercent': 2.36,
                  'arena': {
                    'name': 'Challenger I',
                    'arena': 'League 1',
                    'arenaID': 13,
                    'trophyLimit': 4000
                  }
                },
                {
                  'name': 'AlexTre',
                  'tag': '2J9LURCRR',
                  'rank': 2,
                  'previousRank': 4,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3987,
                  'clanChestCrowns': 24,
                  'donations': 232,
                  'donationsReceived': 280,
                  'donationsDelta': -48,
                  'donationsPercent': 1.28,
                  'arena': {
                    'name': 'Legendary Arena',
                    'arena': 'Arena 12',
                    'arenaID': 12,
                    'trophyLimit': 3800
                  }
                },
                {
                  'name': 'Pir8',
                  'tag': '2YCGPPL0G',
                  'rank': 3,
                  'previousRank': 2,
                  'role': 'member',
                  'expLevel': 11,
                  'trophies': 3903,
                  'clanChestCrowns': 44,
                  'donations': 176,
                  'donationsReceived': 240,
                  'donationsDelta': -64,
                  'donationsPercent': 0.97,
                  'arena': {
                    'name': 'Legendary Arena',
                    'arena': 'Arena 12',
                    'arenaID': 12,
                    'trophyLimit': 3800
                  }
                },
                {
                  'name': 'Leo Mito',
                  'tag': 'GUQLR2YL',
                  'rank': 4,
                  'previousRank': 3,
                  'role': 'member',
                  'expLevel': 11,
                  'trophies': 3890,
                  'clanChestCrowns': 0,
                  'donations': 66,
                  'donationsReceived': 80,
                  'donationsDelta': -14,
                  'donationsPercent': 0.36,
                  'arena': {
                    'name': 'Legendary Arena',
                    'arena': 'Arena 12',
                    'arenaID': 12,
                    'trophyLimit': 3800
                  }
                },
                {
                  'name': 'anderson',
                  'tag': 'RRUQUUUP',
                  'rank': 5,
                  'previousRank': 5,
                  'role': 'elder',
                  'expLevel': 10,
                  'trophies': 3851,
                  'clanChestCrowns': 26,
                  'donations': 284,
                  'donationsReceived': 200,
                  'donationsDelta': 84,
                  'donationsPercent': 1.57,
                  'arena': {
                    'name': 'Legendary Arena',
                    'arena': 'Arena 12',
                    'arenaID': 12,
                    'trophyLimit': 3800
                  }
                },
                {
                  'name': 'viktor (clown)',
                  'tag': '2L92Y8QYU',
                  'rank': 6,
                  'previousRank': 10,
                  'role': 'member',
                  'expLevel': 11,
                  'trophies': 3814,
                  'clanChestCrowns': 25,
                  'donations': 337,
                  'donationsReceived': 200,
                  'donationsDelta': 137,
                  'donationsPercent': 1.86,
                  'arena': {
                    'name': 'Legendary Arena',
                    'arena': 'Arena 12',
                    'arenaID': 12,
                    'trophyLimit': 3800
                  }
                },
                {
                  'name': 'riki678',
                  'tag': '2UV0RGVCG',
                  'rank': 7,
                  'previousRank': 6,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3760,
                  'clanChestCrowns': 0,
                  'donations': 222,
                  'donationsReceived': 192,
                  'donationsDelta': 30,
                  'donationsPercent': 1.22,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Deselegante',
                  'tag': '8Q2QJQQV',
                  'rank': 8,
                  'previousRank': 7,
                  'role': 'member',
                  'expLevel': 11,
                  'trophies': 3730,
                  'clanChestCrowns': 17,
                  'donations': 93,
                  'donationsReceived': 280,
                  'donationsDelta': -187,
                  'donationsPercent': 0.51,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'kauan',
                  'tag': '88VCVPPQU',
                  'rank': 9,
                  'previousRank': 8,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3638,
                  'clanChestCrowns': 0,
                  'donations': 401,
                  'donationsReceived': 240,
                  'donationsDelta': 161,
                  'donationsPercent': 2.21,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Alejandro',
                  'tag': '8Y9YUJRJ',
                  'rank': 10,
                  'previousRank': 9,
                  'role': 'member',
                  'expLevel': 11,
                  'trophies': 3619,
                  'clanChestCrowns': 0,
                  'donations': 201,
                  'donationsReceived': 120,
                  'donationsDelta': 81,
                  'donationsPercent': 1.11,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'GGriel',
                  'tag': '8GGQ2R0J',
                  'rank': 11,
                  'previousRank': 11,
                  'role': 'member',
                  'expLevel': 11,
                  'trophies': 3589,
                  'clanChestCrowns': 12,
                  'donations': 72,
                  'donationsReceived': 160,
                  'donationsDelta': -88,
                  'donationsPercent': 0.4,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Dark Knight',
                  'tag': '88UCGPJQQ',
                  'rank': 12,
                  'previousRank': 17,
                  'role': 'coLeader',
                  'expLevel': 10,
                  'trophies': 3588,
                  'clanChestCrowns': 98,
                  'donations': 400,
                  'donationsReceived': 260,
                  'donationsDelta': 140,
                  'donationsPercent': 2.21,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Pyetra Gamer',
                  'tag': '80QU0892Y',
                  'rank': 13,
                  'previousRank': 12,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3509,
                  'clanChestCrowns': 104,
                  'donations': 470,
                  'donationsReceived': 320,
                  'donationsDelta': 150,
                  'donationsPercent': 2.59,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Jiban',
                  'tag': 'CVRYRPCQ',
                  'rank': 14,
                  'previousRank': 14,
                  'role': 'member',
                  'expLevel': 11,
                  'trophies': 3509,
                  'clanChestCrowns': 6,
                  'donations': 20,
                  'donationsReceived': 160,
                  'donationsDelta': -140,
                  'donationsPercent': 0.11,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'weverton',
                  'tag': '8JP8V0RUJ',
                  'rank': 15,
                  'previousRank': 13,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3505,
                  'clanChestCrowns': 0,
                  'donations': 310,
                  'donationsReceived': 200,
                  'donationsDelta': 110,
                  'donationsPercent': 1.71,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Victor play 926',
                  'tag': 'QJRV00RG',
                  'rank': 16,
                  'previousRank': 15,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3504,
                  'clanChestCrowns': 56,
                  'donations': 118,
                  'donationsReceived': 200,
                  'donationsDelta': -82,
                  'donationsPercent': 0.65,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'KA Games',
                  'tag': '28VCULLGG',
                  'rank': 17,
                  'previousRank': 18,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3490,
                  'clanChestCrowns': 13,
                  'donations': 36,
                  'donationsReceived': 216,
                  'donationsDelta': -180,
                  'donationsPercent': 0.2,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Shaun',
                  'tag': '2QLRJ2289',
                  'rank': 18,
                  'previousRank': 19,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3451,
                  'clanChestCrowns': 10,
                  'donations': 256,
                  'donationsReceived': 270,
                  'donationsDelta': -14,
                  'donationsPercent': 1.41,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Doouug',
                  'tag': '20LJPGJ8R',
                  'rank': 19,
                  'previousRank': 25,
                  'role': 'member',
                  'expLevel': 11,
                  'trophies': 3422,
                  'clanChestCrowns': 0,
                  'donations': 268,
                  'donationsReceived': 200,
                  'donationsDelta': 68,
                  'donationsPercent': 1.48,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Davy Jhones',
                  'tag': '888CLP899',
                  'rank': 20,
                  'previousRank': 20,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3416,
                  'clanChestCrowns': 0,
                  'donations': 176,
                  'donationsReceived': 120,
                  'donationsDelta': 56,
                  'donationsPercent': 0.97,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'GUILHERME',
                  'tag': 'G8Y8P2R0',
                  'rank': 21,
                  'previousRank': 21,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3405,
                  'clanChestCrowns': 19,
                  'donations': 82,
                  'donationsReceived': 80,
                  'donationsDelta': 2,
                  'donationsPercent': 0.45,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'xx',
                  'tag': '2VG99GR9V',
                  'rank': 22,
                  'previousRank': 23,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3375,
                  'clanChestCrowns': 90,
                  'donations': 196,
                  'donationsReceived': 160,
                  'donationsDelta': 36,
                  'donationsPercent': 1.08,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'victor-pcr',
                  'tag': '2LLGGJ9V8',
                  'rank': 23,
                  'previousRank': 24,
                  'role': 'member',
                  'expLevel': 9,
                  'trophies': 3369,
                  'clanChestCrowns': 0,
                  'donations': 113,
                  'donationsReceived': 120,
                  'donationsDelta': -7,
                  'donationsPercent': 0.62,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'darkpv',
                  'tag': '8QPYPQCJ9',
                  'rank': 24,
                  'previousRank': 22,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3358,
                  'clanChestCrowns': 11,
                  'donations': 142,
                  'donationsReceived': 160,
                  'donationsDelta': -18,
                  'donationsPercent': 0.78,
                  'arena': {
                    'name': 'Electro Valley',
                    'arena': 'Arena 11',
                    'arenaID': 11,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Bruk3t',
                  'tag': '8YPYJYLQU',
                  'rank': 25,
                  'previousRank': 26,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3344,
                  'clanChestCrowns': 41,
                  'donations': 164,
                  'donationsReceived': 80,
                  'donationsDelta': 84,
                  'donationsPercent': 0.9,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'doce como limão',
                  'tag': '898VCGLVL',
                  'rank': 26,
                  'previousRank': 28,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3331,
                  'clanChestCrowns': 7,
                  'donations': 131,
                  'donationsReceived': 240,
                  'donationsDelta': -109,
                  'donationsPercent': 0.72,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'rgpanna',
                  'tag': '2VPVUR2Y0',
                  'rank': 27,
                  'previousRank': 27,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3314,
                  'clanChestCrowns': 19,
                  'donations': 48,
                  'donationsReceived': 240,
                  'donationsDelta': -192,
                  'donationsPercent': 0.26,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'clarencio',
                  'tag': '2GJP098QJ',
                  'rank': 28,
                  'previousRank': 30,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3226,
                  'clanChestCrowns': 0,
                  'donations': 328,
                  'donationsReceived': 200,
                  'donationsDelta': 128,
                  'donationsPercent': 1.81,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'HunterLegend',
                  'tag': '88L9G8QV2',
                  'rank': 29,
                  'previousRank': 32,
                  'role': 'coLeader',
                  'expLevel': 11,
                  'trophies': 3212,
                  'clanChestCrowns': 32,
                  'donations': 405,
                  'donationsReceived': 360,
                  'donationsDelta': 45,
                  'donationsPercent': 2.23,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Treinador JOSE',
                  'tag': 'LPJR0CL9',
                  'rank': 30,
                  'previousRank': 31,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3199,
                  'clanChestCrowns': 0,
                  'donations': 68,
                  'donationsReceived': 160,
                  'donationsDelta': -92,
                  'donationsPercent': 0.38,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'labib',
                  'tag': '9Y2RRRQ',
                  'rank': 31,
                  'previousRank': 29,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3181,
                  'clanChestCrowns': 12,
                  'donations': 92,
                  'donationsReceived': 120,
                  'donationsDelta': -28,
                  'donationsPercent': 0.51,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'GaloCego',
                  'tag': '8QGP99L82',
                  'rank': 32,
                  'previousRank': 33,
                  'role': 'member',
                  'expLevel': 9,
                  'trophies': 3162,
                  'clanChestCrowns': 0,
                  'donations': 26,
                  'donationsReceived': 56,
                  'donationsDelta': -30,
                  'donationsPercent': 0.14,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'D.E.K.K.O.',
                  'tag': '2G0RRYQCL',
                  'rank': 33,
                  'previousRank': 35,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3139,
                  'clanChestCrowns': 17,
                  'donations': 190,
                  'donationsReceived': 160,
                  'donationsDelta': 30,
                  'donationsPercent': 1.05,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'supercell',
                  'tag': '8YJRVQUP8',
                  'rank': 34,
                  'previousRank': 36,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3115,
                  'clanChestCrowns': 63,
                  'donations': 126,
                  'donationsReceived': 40,
                  'donationsDelta': 86,
                  'donationsPercent': 0.7,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Bruno',
                  'tag': 'RRPP0URY',
                  'rank': 35,
                  'previousRank': 37,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3106,
                  'clanChestCrowns': 41,
                  'donations': 247,
                  'donationsReceived': 280,
                  'donationsDelta': -33,
                  'donationsPercent': 1.36,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'bryan',
                  'tag': '2CLGQLQ20',
                  'rank': 36,
                  'previousRank': 34,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3080,
                  'clanChestCrowns': 35,
                  'donations': 154,
                  'donationsReceived': 200,
                  'donationsDelta': -46,
                  'donationsPercent': 0.85,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Pato Donald',
                  'tag': '29CJRGJ0C',
                  'rank': 37,
                  'previousRank': 38,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3066,
                  'clanChestCrowns': 0,
                  'donations': 108,
                  'donationsReceived': 80,
                  'donationsDelta': 28,
                  'donationsPercent': 0.6,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': '999',
                  'tag': 'V9QYQYJ8',
                  'rank': 38,
                  'previousRank': 39,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3065,
                  'clanChestCrowns': 39,
                  'donations': 159,
                  'donationsReceived': 280,
                  'donationsDelta': -121,
                  'donationsPercent': 0.88,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'vitor',
                  'tag': 'J9GY8YJ',
                  'rank': 39,
                  'previousRank': 40,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3039,
                  'clanChestCrowns': 0,
                  'donations': 240,
                  'donationsReceived': 180,
                  'donationsDelta': 60,
                  'donationsPercent': 1.32,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Phil',
                  'tag': 'PQR09YQG',
                  'rank': 40,
                  'previousRank': 41,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 3000,
                  'clanChestCrowns': 36,
                  'donations': 174,
                  'donationsReceived': 280,
                  'donationsDelta': -106,
                  'donationsPercent': 0.96,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Heisenberg',
                  'tag': '8GRU2YQPL',
                  'rank': 41,
                  'previousRank': 44,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 2960,
                  'clanChestCrowns': 82,
                  'donations': 422,
                  'donationsReceived': 250,
                  'donationsDelta': 172,
                  'donationsPercent': 2.33,
                  'arena': {
                    'name': 'Hog Mountain',
                    'arena': 'Arena 10',
                    'arenaID': 10,
                    'trophyLimit': 3000
                  }
                },
                {
                  'name': 'Gab Clash',
                  'tag': 'ULCCUVV9',
                  'rank': 42,
                  'previousRank': 42,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 2954,
                  'clanChestCrowns': 0,
                  'donations': 0,
                  'donationsReceived': 0,
                  'donationsDelta': 0,
                  'donationsPercent': 0,
                  'arena': {
                    'name': 'Jungle Arena',
                    'arena': 'Arena 9',
                    'arenaID': 9,
                    'trophyLimit': 2600
                  }
                },
                {
                  'name': 'tommy',
                  'tag': 'PPQJGRUG',
                  'rank': 43,
                  'previousRank': 43,
                  'role': 'member',
                  'expLevel': 10,
                  'trophies': 2950,
                  'clanChestCrowns': 0,
                  'donations': 48,
                  'donationsReceived': 120,
                  'donationsDelta': -72,
                  'donationsPercent': 0.26,
                  'arena': {
                    'name': 'Jungle Arena',
                    'arena': 'Arena 9',
                    'arenaID': 9,
                    'trophyLimit': 2600
                  }
                },
                {
                  'name': 'Pedro12345',
                  'tag': '82VRUULGY',
                  'rank': 44,
                  'previousRank': 46,
                  'role': 'member',
                  'expLevel': 9,
                  'trophies': 2899,
                  'clanChestCrowns': 14,
                  'donations': 48,
                  'donationsReceived': 60,
                  'donationsDelta': -12,
                  'donationsPercent': 0.26,
                  'arena': {
                    'name': 'Jungle Arena',
                    'arena': 'Arena 9',
                    'arenaID': 9,
                    'trophyLimit': 2600
                  }
                },
                {
                  'name': '007',
                  'tag': '89L2JP8PV',
                  'rank': 45,
                  'previousRank': 45,
                  'role': 'member',
                  'expLevel': 9,
                  'trophies': 2868,
                  'clanChestCrowns': 0,
                  'donations': 22,
                  'donationsReceived': 30,
                  'donationsDelta': -8,
                  'donationsPercent': 0.12,
                  'arena': {
                    'name': 'Jungle Arena',
                    'arena': 'Arena 9',
                    'arenaID': 9,
                    'trophyLimit': 2600
                  }
                },
                {
                  'name': 'Andree',
                  'tag': '99G0RPY8',
                  'rank': 46,
                  'previousRank': 47,
                  'role': 'member',
                  'expLevel': 9,
                  'trophies': 2798,
                  'clanChestCrowns': 22,
                  'donations': 0,
                  'donationsReceived': 0,
                  'donationsDelta': 0,
                  'donationsPercent': 0,
                  'arena': {
                    'name': 'Jungle Arena',
                    'arena': 'Arena 9',
                    'arenaID': 9,
                    'trophyLimit': 2600
                  }
                },
                {
                  'name': 'maykell',
                  'tag': '29RLCGGR',
                  'rank': 47,
                  'previousRank': 48,
                  'role': 'member',
                  'expLevel': 9,
                  'trophies': 2684,
                  'clanChestCrowns': 103,
                  'donations': 338,
                  'donationsReceived': 180,
                  'donationsDelta': 158,
                  'donationsPercent': 1.86,
                  'arena': {
                    'name': 'Jungle Arena',
                    'arena': 'Arena 9',
                    'arenaID': 9,
                    'trophyLimit': 2600
                  }
                },
                {
                  'name': 'RealBadboy',
                  'tag': '9PJ8RQLUG',
                  'rank': 48,
                  'previousRank': 49,
                  'role': 'member',
                  'expLevel': 8,
                  'trophies': 2366,
                  'clanChestCrowns': 17,
                  'donations': 219,
                  'donationsReceived': 210,
                  'donationsDelta': 9,
                  'donationsPercent': 1.21,
                  'arena': {
                    'name': 'Frozen Peak',
                    'arena': 'Arena 8',
                    'arenaID': 8,
                    'trophyLimit': 2300
                  }
                },
                {
                  'name': 'enzoka',
                  'tag': '9QY98RG20',
                  'rank': 49,
                  'previousRank': 50,
                  'role': 'member',
                  'expLevel': 6,
                  'trophies': 1098,
                  'clanChestCrowns': 0,
                  'donations': 8,
                  'donationsReceived': 40,
                  'donationsDelta': -32,
                  'donationsPercent': 0.04,
                  'arena': {
                    'name': 'P.E.K.K.A\'s Playhouse',
                    'arena': 'Arena 4',
                    'arenaID': 4,
                    'trophyLimit': 1100
                  }
                }
              ]
            }
          },
          3: {
            tag: '8G292G8J',
            info: {}
          }
        },
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
        clanIdSelected: null
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
