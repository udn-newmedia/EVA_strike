<template>
  <div class="airline">
      <p class="airline-title"> {{ airlineTitle }} </p>
      <ul class="airline-lists">
        <li :class="{'bg-gray': index % 2 === 0, 'bg-whtie': index % 2 !== 0 }" :value="item.DepartureRemark" class="airline-list" v-for="(item, index) in flights" :key="item.UpdateTime">
            <div class="list-content">
              機場： 桃園國際機場 <br>
              航空公司：{{ item.AirlineID }} <br>
              航班編號：{{ item.FlightNumber }} <br>
              航班狀態：{{ item.ArrivalRemark }} <br>
              原定到達時間：{{ item.ScheduleArrivalTime }}<br>
              最新更新時間：<br>{{ item.UpdateTime }}
            </div>
        </li>
      </ul>
      <p class="airline-distribution">實際航班資訊以桃園機場、長榮航空公布為主。<br>更多航班取消／延誤資訊請見長榮航空<a class="EVA_website" target="_blank" href="https://booking.evaair.com/flyeva/EVA/B2C/flight-status-erc.aspx?lang=zh-tw&cmstitle=erc-note9&date=20190620-20190623&airport=TPE/TSA/RMQ/KHH&Orderby=&reqtime=&ACTCODE=&REASON=">官網</a></p>
  </div>
</template>

<script>
export default {
  name: 'AirlineInfo',
  data () {
    return {
      flights: []
    }
  },
  props: {
    airlineTitle: {
      type: String,
      default: '即時航班資訊'
    },
  },
  mounted () {
     let vm = this
     fetch('https://ptx.transportdata.tw/MOTC/v2/Air/FIDS/Flight',{
           method: 'GET',
       })
       .then(function(res) {
           if (res.status >= 200 && res.status < 300) {
               return res.json()
           } else {
               var error = new Error(res.statusText)
               error.res = res
               throw error
           }
       })
       .then(res => {
         
          res.forEach((item)=>{
            if(item.ArrivalAirportID === 'TPE' && item.AirlineID === 'BR' && item.ArrivalRemark === "取消") {
              vm.flights.push(item)
            }
          })
       })
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.airline {
  width: 100%;
  font-family: inherit;
  .airline-title {
    font-size: 18px;
    margin: 7.5px 0;
    @media screen and (min-width: 321px) {

    }
    @media screen and (min-width: 521px) {

    }
    @media screen and (min-width: 769px) {
      font-size: 21px;
      margin: 8px 0;
    }
  }
  .airline-lists {
    height: 271px;
    list-style: none;
    margin: 0;
    padding: 0;
    border: solid 1px #707070;
    overflow-Y: scroll;
    @media screen and (min-width: 321px) {

    }
    @media screen and (min-width: 521px) {

    }
    @media screen and (min-width: 769px) {
      height: 354px
    }
    .airline-list {
      margin: 0;
      padding: 20px 15px;
      .list-content {
        width: 100%;
        margin: 0 auto;
        font-size: 18px;
        line-height: 1.67;
        @media screen and (min-width: 321px) {

        }
        @media screen and (min-width: 521px) {
          width: 60%;
        }
        @media screen and (min-width: 769px) {
          width: 60%;
          font-size: 21px;
          line-height: 1.43;
        }
      }
    }
    .bg-gray {
    background-color: #707070;
    }
    .bg-white {
      background-color: inherit;
    }
  }
  .airline-distribution {
    font-family: SegoeUI;
    font-size: 13px;
    @media screen and (min-width: 321px) {

    }
    @media screen and (min-width: 521px) {

    }
    @media screen and (min-width: 769px) {
      font-size: 15px;
    }
  }
  .EVA_website {
    text-decoration: none;
    color: #00832c;
  }
}
</style>
