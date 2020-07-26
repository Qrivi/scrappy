import { CaptureConfig } from '../models/captureconfig.model';

export default [
  {
    name: 'Rocket League Item Shop',
    url: 'https://rocket-league.com/items/shop',
    css: "body>div,body>footer,body>header,main .rlg-item-shop__header,main .rlg-item-shop__meta,main .rlg-item-shop__timer{display:none!important}body>main{background:#333}body>main h2{color:#fff}body>main .rlg-item-shop{position:relative;margin:0}body>main div.rlg-item-shop:after{content:'rocket-league.com/items/shop';color:#aaa;position:absolute;right:20px;bottom:-10px}body>main .rlg-item-shop__featured{margin:0 0 15px}body>main .rlg-item-shop__featured .rlg-item-shop__image-meta{bottom:36px!important}body>main .rlg-item-shop__daily .rlg-item-shop__item{height:280px!important}body>main .rlg-item-shop__daily .rlg-item-shop__item img{top:57%}body>main .rlg-item-shop__daily .rlg-item-shop__item .rlg-item-shop__name{bottom:0}",
    width: 1240,
    height: 1088
  }
] as Array<CaptureConfig>;
