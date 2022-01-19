import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

import {
  getRandomArrayElement,
  getRandomDate,
  getDuration,
  getRandomRoundedNumber,
  gerRandomBoolean
} from '../utils/mocks.js';

import {
  capitalizeWord
} from '../utils/event.js';

export const destinations = [{
  name: 'Chamonix',
  description: 'Chamonix, is a beautiful city, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.3283681681883728',
    description: 'Chamonix parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.9917087561895557',
    description: 'Chamonix biggest supermarket'
  }, {
    src: 'http://picsum.photos/300/200?r=0.3724468231642233',
    description: 'Chamonix embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.9590974098512826',
    description: 'Chamonix street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.6562125211266989',
    description: 'Chamonix kindergarten'
  }]
}, {
  name: 'Geneva',
  description: 'Geneva, in a middle of Europe, for those who value comfort and coziness, a perfect place to stay with a family.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.8160316646514245',
    description: 'Geneva park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.4995144782481822',
    description: 'Geneva central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8072264891029994',
    description: 'Geneva zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.9839638975123033',
    description: 'Geneva embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8943409130792863',
    description: 'Geneva embankment'
  }]
}, {
  name: 'Amsterdam',
  description: 'Amsterdam, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.11276370651332401',
    description: 'Amsterdam biggest supermarket'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7007483707076487',
    description: 'Amsterdam park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.9095251406919289',
    description: 'Amsterdam zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7443556532021298',
    description: 'Amsterdam biggest supermarket'
  }, {
    src: 'http://picsum.photos/300/200?r=0.06965472489125824',
    description: 'Amsterdam zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.23581464241983263',
    description: 'Amsterdam central station'
  }]
}, {
  name: 'Helsinki',
  description: 'Helsinki, with a beautiful old town, middle-eastern paradise, full of of cozy canteens where you can try the best coffee in the Middle East.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.5844791970778651',
    description: 'Helsinki biggest supermarket'
  }, {
    src: 'http://picsum.photos/300/200?r=0.3424920477094955',
    description: 'Helsinki embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.5036501396058237',
    description: 'Helsinki park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7551797923176073',
    description: 'Helsinki embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.5433947914132162',
    description: 'Helsinki embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.952691346740612',
    description: 'Helsinki city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.34768016752529296',
    description: 'Helsinki zoo'
  }]
}, {
  name: 'Oslo',
  description: 'Oslo, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.6541073996258884',
    description: 'Oslo kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7776052070132364',
    description: 'Oslo kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.08987036711505447',
    description: 'Oslo central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.027841054792267173',
    description: 'Oslo city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8863300003682584',
    description: 'Oslo kindergarten'
  }]
}, {
  name: 'Kopenhagen',
  description: 'Kopenhagen, with crowded streets, in a middle of Europe, for those who value comfort and coziness.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.5590058024570113',
    description: 'Kopenhagen parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.35945945829710824',
    description: 'Kopenhagen park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.17356324078508356',
    description: 'Kopenhagen embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.44965745762091225',
    description: 'Kopenhagen park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.08864629870883123',
    description: 'Kopenhagen parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.6839481779918613',
    description: 'Kopenhagen city centre'
  }]
}, {
  name: 'Den Haag',
  description: 'Den Haag, is a beautiful city, a true asian pearl, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.8559075109515937',
    description: 'Den Haag park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.9043442813423788',
    description: 'Den Haag city centre'
  }]
}, {
  name: 'Rotterdam',
  description: 'Rotterdam, is a beautiful city, with a beautiful old town, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.7467969588623957',
    description: 'Rotterdam kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.39704639598396474',
    description: 'Rotterdam city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8037669436198736',
    description: 'Rotterdam central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.854435434075193',
    description: 'Rotterdam embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.6576125818320628',
    description: 'Rotterdam kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.9903049395765082',
    description: 'Rotterdam park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8701723381769468',
    description: 'Rotterdam city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.050090314049848095',
    description: 'Rotterdam parliament building'
  }]
}, {
  name: 'Saint Petersburg',
  description: 'Saint Petersburg, is a beautiful city, a perfect place to stay with a family.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.8478567847574232',
    description: 'Saint Petersburg embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.08403931580733714',
    description: 'Saint Petersburg city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.5037412028737813',
    description: 'Saint Petersburg embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.18780703159478795',
    description: 'Saint Petersburg central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.12684732958044864',
    description: 'Saint Petersburg parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.6122998493547247',
    description: 'Saint Petersburg biggest supermarket'
  }]
}, {
  name: 'Moscow',
  description: 'Moscow, is a beautiful city, with a beautiful old town, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.3021855261628623',
    description: 'Moscow city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.3138251687819389',
    description: 'Moscow parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.04403483556538368',
    description: 'Moscow street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.9002882604162561',
    description: 'Moscow zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8774796705122583',
    description: 'Moscow zoo'
  }]
}, {
  name: 'Sochi',
  description: 'Sochi, with crowded streets.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.7065583142938514',
    description: 'Sochi parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.0646814913488738',
    description: 'Sochi street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8302325909006492',
    description: 'Sochi central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.12413151625174401',
    description: 'Sochi parliament building'
  }]
}, {
  name: 'Tokio',
  description: 'Tokio, a true asian pearl, with crowded streets, with an embankment of a mighty river as a centre of attraction, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.6383994221794458',
    description: 'Tokio park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7838731890510977',
    description: 'Tokio street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.14261219069109354',
    description: 'Tokio central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.3372368358795046',
    description: 'Tokio biggest supermarket'
  }, {
    src: 'http://picsum.photos/300/200?r=0.802759558632109',
    description: 'Tokio central station'
  }]
}, {
  name: 'Kioto',
  description: 'Kioto, with crowded streets, for those who value comfort and coziness.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.5480736314112227',
    description: 'Kioto street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.5340040981256944',
    description: 'Kioto parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.9662950089071893',
    description: 'Kioto parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.06771758779640646',
    description: 'Kioto zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.5553038066302989',
    description: 'Kioto city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.14480117801961567',
    description: 'Kioto zoo'
  }]
}, {
  name: 'Nagasaki',
  description: 'Nagasaki, a true asian pearl, with a beautiful old town, famous for its crowded street markets with the best street food in Asia.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.22781215645236697',
    description: 'Nagasaki kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.16063931357424743',
    description: 'Nagasaki kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.4025826803879442',
    description: 'Nagasaki embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.3400303642205682',
    description: 'Nagasaki street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7877221091265156',
    description: 'Nagasaki zoo'
  }]
}, {
  name: 'Hiroshima',
  description: 'Hiroshima, for those who value comfort and coziness, famous for its crowded street markets with the best street food in Asia.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.5526664172134035',
    description: 'Hiroshima street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8868620824959226',
    description: 'Hiroshima central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7729623455521366',
    description: 'Hiroshima city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.31183278925778124',
    description: 'Hiroshima park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.003351607830353265',
    description: 'Hiroshima parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7802148254028374',
    description: 'Hiroshima street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8625525429106697',
    description: 'Hiroshima street market'
  }]
}, {
  name: 'Berlin',
  description: 'Berlin, with crowded streets, with a beautiful old town, famous for its crowded street markets with the best street food in Asia.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.6872185169029181',
    description: 'Berlin biggest supermarket'
  }, {
    src: 'http://picsum.photos/300/200?r=0.785893499292974',
    description: 'Berlin parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.21883170186503254',
    description: 'Berlin embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.30954716344668487',
    description: 'Berlin central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8083465840201036',
    description: 'Berlin zoo'
  }]
}, {
  name: 'Munich',
  description: 'Munich, a true asian pearl.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.7996698137633973',
    description: 'Munich zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.36691119465317934',
    description: 'Munich street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.09336999164115811',
    description: 'Munich zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8053638113848467',
    description: 'Munich street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7448259740027945',
    description: 'Munich central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.3163866110807938',
    description: 'Munich street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.566789294897722',
    description: 'Munich city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.517533908462755',
    description: 'Munich parliament building'
  }]
}, {
  name: 'Frankfurt',
  description: 'Frankfurt, with a beautiful old town, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.09708671208581698',
    description: 'Frankfurt embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.6932598928382945',
    description: 'Frankfurt parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.6837232110122251',
    description: 'Frankfurt kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.03043677391682431',
    description: 'Frankfurt park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.136478118915361',
    description: 'Frankfurt central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.5713661816445188',
    description: 'Frankfurt park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.6229453516879768',
    description: 'Frankfurt embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.3418596710466324',
    description: 'Frankfurt kindergarten'
  }]
}, {
  name: 'Vien',
  description: 'Vien, a true asian pearl, with crowded streets, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.3851789821833056',
    description: 'Vien biggest supermarket'
  }, {
    src: 'http://picsum.photos/300/200?r=0.914775299390755',
    description: 'Vien park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.5249196465517343',
    description: 'Vien city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7926644951888924',
    description: 'Vien street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.9315113446979679',
    description: 'Vien central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.135972054681196',
    description: 'Vien city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.921216960594267',
    description: 'Vien city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.4866547945448676',
    description: 'Vien parliament building'
  }]
}, {
  name: 'Rome',
  description: 'Rome, is a beautiful city, with a beautiful old town, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.4598605956297033',
    description: 'Rome city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.21734313428567442',
    description: 'Rome central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.9830478847026991',
    description: 'Rome street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.5545233376832288',
    description: 'Rome park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.6265175739289037',
    description: 'Rome central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7434801536596216',
    description: 'Rome kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.861638304736408',
    description: 'Rome zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7349782733431676',
    description: 'Rome kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8948936174705246',
    description: 'Rome street market'
  }]
}, {
  name: 'Naples',
  description: 'Naples, with a beautiful old town, a perfect place to stay with a family.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.002522674291683291',
    description: 'Naples zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.37374144015233113',
    description: 'Naples kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8523499220187514',
    description: 'Naples parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.4339752068644316',
    description: 'Naples zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.77666300507456',
    description: 'Naples zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.46220320769769185',
    description: 'Naples street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.6832984636490147',
    description: 'Naples biggest supermarket'
  }]
}, {
  name: 'Venice',
  description: 'Venice, is a beautiful city, in a middle of Europe, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.9850648058242506',
    description: 'Venice parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.4156964885878893',
    description: 'Venice biggest supermarket'
  }, {
    src: 'http://picsum.photos/300/200?r=0.26730040604364924',
    description: 'Venice city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.11824257205926836',
    description: 'Venice zoo'
  }]
}, {
  name: 'Milan',
  description: 'Milan, a true asian pearl.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.7177616241025115',
    description: 'Milan embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.9991990948641478',
    description: 'Milan embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.031061489679276022',
    description: 'Milan central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.15552868848606782',
    description: 'Milan kindergarten'
  }]
}, {
  name: 'Monaco',
  description: 'Monaco, a true asian pearl, for those who value comfort and coziness, famous for its crowded street markets with the best street food in Asia.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.9907226389083243',
    description: 'Monaco central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.4452048144620826',
    description: 'Monaco parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.12962976568703688',
    description: 'Monaco zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.42945286394582305',
    description: 'Monaco parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.11185963236865226',
    description: 'Monaco biggest supermarket'
  }]
}, {
  name: 'Paris',
  description: 'Paris, with crowded streets, in a middle of Europe, with a beautiful old town, a perfect place to stay with a family.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.10541314621652997',
    description: 'Paris zoo'
  }, {
    src: 'http://picsum.photos/300/200?r=0.18564259096297553',
    description: 'Paris biggest supermarket'
  }, {
    src: 'http://picsum.photos/300/200?r=0.6486200217921843',
    description: 'Paris park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.5065442781184357',
    description: 'Paris kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.542759824166126',
    description: 'Paris biggest supermarket'
  }, {
    src: 'http://picsum.photos/300/200?r=0.8184816723507313',
    description: 'Paris kindergarten'
  }]
}, {
  name: 'Barcelona',
  description: 'Barcelona, with a beautiful old town, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.21104576418613874',
    description: 'Barcelona embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.18700407500068694',
    description: 'Barcelona biggest supermarket'
  }, {
    src: 'http://picsum.photos/300/200?r=0.9496951334862349',
    description: 'Barcelona central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.00186632572691936',
    description: 'Barcelona park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.24281146989466174',
    description: 'Barcelona parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.4270535894346654',
    description: 'Barcelona street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.3310683435237092',
    description: 'Barcelona park'
  }]
}, {
  name: 'Valencia',
  description: 'Valencia, with crowded streets, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.5224217924273076',
    description: 'Valencia embankment'
  }, {
    src: 'http://picsum.photos/300/200?r=0.7761889642900903',
    description: 'Valencia kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.5470032921631254',
    description: 'Valencia park'
  }, {
    src: 'http://picsum.photos/300/200?r=0.26325234061696623',
    description: 'Valencia city centre'
  }, {
    src: 'http://picsum.photos/300/200?r=0.5198990445199427',
    description: 'Valencia zoo'
  }]
}, {
  name: 'Madrid',
  description: 'Madrid, is a beautiful city.',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.20831719562925888',
    description: 'Madrid parliament building'
  }, {
    src: 'http://picsum.photos/300/200?r=0.912200550646008',
    description: 'Madrid central station'
  }, {
    src: 'http://picsum.photos/300/200?r=0.3245023954587605',
    description: 'Madrid kindergarten'
  }, {
    src: 'http://picsum.photos/300/200?r=0.49172005983850964',
    description: 'Madrid street market'
  }, {
    src: 'http://picsum.photos/300/200?r=0.37678997813122606',
    description: 'Madrid central station'
  }]
}];

export const offers = [{
  type: 'taxi',
  offers: [{
    id: 1,
    title: 'Upgrade to a business class',
    price: 190
  }, {
    id: 2,
    title: 'Choose the radio station',
    price: 30
  }, {
    id: 3,
    title: 'Choose temperature',
    price: 170
  }, {
    id: 4,
    title: 'Drive quickly, I`m in a hurry',
    price: 100
  }, {
    id: 5,
    title: 'Drive slowly',
    price: 110
  }]
}, {
  type: 'bus',
  offers: [{
    id: 1,
    title: 'Infotainment system',
    price: 50
  }, {
    id: 2,
    title: 'Order meal',
    price: 100
  }, {
    id: 3,
    title: 'Choose seats',
    price: 190
  }]
}, {
  type: 'train',
  offers: [{
    id: 1,
    title: 'Book a taxi at the arrival point',
    price: 110
  }, {
    id: 2,
    title: 'Order a breakfast',
    price: 80
  }, {
    id: 3,
    title: 'Wake up at a certain time',
    price: 140
  }]
}, {
  type: 'flight',
  offers: [{
    id: 1,
    title: 'Choose meal',
    price: 120
  }, {
    id: 2,
    title: 'Choose seats',
    price: 90
  }, {
    id: 3,
    title: 'Upgrade to comfort class',
    price: 120
  }, {
    id: 4,
    title: 'Upgrade to business class',
    price: 120
  }, {
    id: 5,
    title: 'Add luggage',
    price: 170
  }, {
    id: 6,
    title: 'Business lounge',
    price: 160
  }]
}, {
  type: 'check-in',
  offers: [{
    id: 1,
    title: 'Choose the time of check-in',
    price: 70
  }, {
    id: 2,
    title: 'Choose the time of check-out',
    price: 190
  }, {
    id: 3,
    title: 'Add breakfast',
    price: 110
  }, {
    id: 4,
    title: 'Laundry',
    price: 140
  }, {
    id: 5,
    title: 'Order a meal from the restaurant',
    price: 30
  }]
}, {
  type: 'sightseeing',
  offers: []
}, {
  type: 'ship',
  offers: [{
    id: 1,
    title: 'Choose meal',
    price: 130
  }, {
    id: 2,
    title: 'Choose seats',
    price: 160
  }, {
    id: 3,
    title: 'Upgrade to comfort class',
    price: 170
  }, {
    id: 4,
    title: 'Upgrade to business class',
    price: 150
  }, {
    id: 5,
    title: 'Add luggage',
    price: 100
  }, {
    id: 6,
    title: 'Business lounge',
    price: 40
  }]
}, {
  type: 'drive',
  offers: [{
    id: 1,
    title: 'With automatic transmission',
    price: 110
  }, {
    id: 2,
    title: 'With air conditioning',
    price: 180
  }]
}, {
  type: 'restaurant',
  offers: [{
    id: 1,
    title: 'Choose live music',
    price: 150
  }, {
    id: 2,
    title: 'Choose VIP area',
    price: 70
  }]
}];

export const pointTypesList = offers.map((offer) => capitalizeWord(offer.type));
export const destinationList = destinations.map((point) => point.name);

export const createOffersArray = (offerType = offers[0].type) => {
  let offersList = [];
  offers.forEach((offer) => {
    if (offerType.toLowerCase() === offer.type.toLowerCase()) {
      offersList = offer.offers;
    }
  });
  return offersList;
};

const createTripPoint = () => {
  const randomDate = getRandomDate(new Date(2022, 12, 30), new Date()).toISOString();
  const dateFrom = randomDate;
  const dateTo = dayjs(randomDate).add(getRandomRoundedNumber(), 'm');
  const pointName = getRandomArrayElement(destinationList);
  const pointType = getRandomArrayElement(pointTypesList);
  let pointDescription = '';
  let pointPictures = [];

  destinations.forEach((point) => {
    if (pointName === point.name) {
      pointDescription = point.description;
      pointPictures = point.pictures;
    }
  });

  const event = {
    id: nanoid(),
    type: pointType,
    dateFrom: dateFrom,
    dateTo: dateTo,
    duration: getDuration(dateFrom, dateTo),
    destination: {
      name: pointName,
      description: pointDescription,
      pictures: pointPictures,
    },
    basePrice: getRandomRoundedNumber(5, 1000, 5),
    isFavorite: gerRandomBoolean(),
    offers: createOffersArray(pointType),
  };

  return event;
};

export const createTripList = (quantity) => (
  new Array(quantity).fill().map(createTripPoint)
);
