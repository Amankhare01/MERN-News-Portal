import React, { Component } from 'react';
import './App.css';
import Newphone from './components/Newphone';
import PropTypes from 'prop-types'

export default class App extends Component {

  articles =[
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Jon Porter",
        "title": "HMD’s repairable Nokia phone initiative lands stateside",
        "description": "HMD’s Nokia G310 is a repairable $186 smartphone that’ll be available from T-Mobile and Metro by T-Mobile on August 24th. You can repair its battery and screen.",
        "url": "http://www.theverge.com/2023/8/17/23835512/hmd-nokia-g310-price-release-date-specs-feature",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/abjiE4hs57v4LrYLvGaDO0Nj9mU=/0x0:848x565/1200x628/filters:focal(214x258:215x259)/cdn.vox-cdn.com/uploads/chorus_asset/file/24855798/nokia_G310_DTC_Display_desktop.jpg",
        "publishedAt": "2023-08-17T09:08:43Z",
        "content": "HMDs repairable Nokia phone initiative lands stateside\r\nHMDs repairable Nokia phone initiative lands stateside\r\n / The Nokia G310 will be available via T-Mobile next week, with spare parts and repair… [+2128 chars]"
    },
    {
        "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
        },
        "author": "Bloomberg",
        "title": "China Is Dragging Smartphone Market to Worst Year in a Decade",
        "description": "hi aman",
        "url": "https://news.google.com/rss/articles/CBMicGh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDIzLTA4LTE3L2NoaW5hLWlzLWRyYWdnaW5nLXNtYXJ0cGhvbmUtbWFya2V0LXRvLXdvcnN0LXllYXItaW4tYS1kZWNhZGXSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-08-17T05:41:25+00:00",
        "content": null
    },
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Elizabeth Pritchett",
        "title": "Texas woman charged after threatening to kill federal judge overseeing election case against Trump: affidavit",
        "description": "A Texas woman was arrested after making a phone call threatening to kill U.S. District Judge Tanya Chutkan, U.S. Rep. Sheila Jackson Lee, all Democrats in D.C. and the LGBTQ community.",
        "url": "https://www.foxnews.com/us/texas-woman-charged-threatening-kill-federal-judge-overseeing-election-case-trump-affidavit",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/08/Donald-Trump-Tanya-Chutkan.jpg",
        "publishedAt": "2023-08-17T07:35:32Z",
        "content": "A Texas woman is behind bars after allegedly threatening to kill U.S. District Judge Tanya Chutkan the federal judge overseeing Special Counsel Jack Smith's 2020 election conspiracy case against form… [+2785 chars]"
    },
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "Shannon Crawford",
        "title": "Blinken speaks to Paul Whelan, American wrongfully detained by Moscow, sources confirm",
        "description": "Whelan spoke to Blinken by phone from a remote prison camp in Russia.",
        "url": "https://abcnews.go.com/Politics/blinken-speaks-paul-whelan-american-wrongfully-detained-moscow/story?id=102324643",
        "urlToImage": "https://s.abcnews.com/images/Politics/whelan-1-gty-er-230816_1692220316224_hpMain_16x9_992.jpg",
        "publishedAt": "2023-08-16T21:58:33Z",
        "content": "Secretary of State Antony Blinken spoke over the phone with Paul Whelan, a wrongfully imprisoned American citizen who has been jailed by Moscow since 2018, according to sources familiar with the call… [+2606 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Kylie Atwood, Jennifer Hansler, Kayla Tausche",
        "title": "Exclusive: Blinken speaks by phone with Paul Whelan, who is wrongfully detained in Russia",
        "description": "US Secretary of State Antony Blinken spoke by phone on Wednesday with wrongfully detained American Paul Whelan, who is being held in a remote prison camp in Russia, a source familiar told CNN.",
        "url": "https://www.cnn.com/2023/08/16/politics/blinken-paul-whelan-phone-call/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230509164550-file-paul-whelan-190823.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-08-16T20:09:14Z",
        "content": "US Secretary of State Antony Blinken spoke by phone on Wednesday with wrongfully detained American Paul Whelan, who is being held in a remote prison camp in Russia, a source familiar told CNN.\r\nThe t… [+2317 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Wired",
        "title": "Urbanista Malibu Solar Speaker: Battery Life, Specs, Price, Release Date",
        "description": "After the success of its solar-charging headphones, Urbanista is back with a Bluetooth speaker that can play music for 45 hours. If you treat it right, it might never need to be plugged in at all.",
        "url": "https://www.wired.com/story/urbanista-malibu-solar-speaker",
        "urlToImage": "https://media.wired.com/photos/64dc4d3d0b67c709cbcaac79/191:100/w_1280,c_limit/Urbanista_Malibu_DesertGray_gear_Stereolink.jpg",
        "publishedAt": "2023-08-16T13:00:00Z",
        "content": "Ever since Swedish audio brand Urbanista first brought out its mightily impressive solar headphones that, yes, charged even while they were being used, WIRED has been hoping the company would take th… [+2656 chars]"
    },
    {
        "source": {
            "id": "t3n",
            "name": "T3n"
        },
        "author": "Claudia Wieschollek",
        "title": "iPhone 14: Beschwerden wegen nachlassende Akkuleistung nach nur einem Jahr",
        "description": "Gerade mal ein Jahr ist das iPhone 14 (Pro) auf dem Markt – doch Nutzer:innen beklagen sich bereits über nachl",
        "url": "https://t3n.de/news/iphone-14-beschwerden-akkuleistung-1569630/",
        "urlToImage": "https://t3n.de/news/wp-content/uploads/2022/09/ios-16-1-iphone-14-pro_hero.jpg",
        "publishedAt": "2023-08-14T10:20:58Z",
        "content": "Im Internet mehren sich die Berichte über vorzeitig nachlassende Akkukapazitäten bei iPhone 14 und iPhone 14 Pro. Wie mehrere Nutzer:innen übereinstimmend erklären, liegt die Kapazität der Akkus ihre… [+2293 chars]"
    },
    {
        "source": {
            "id": "techradar",
            "name": "TechRadar"
        },
        "author": "Becky Scarrott",
        "title": "Bose QuietComfort Ultra headphones and earbuds just leaked – with serious prices",
        "description": "A total of three Bose QuietComfort options could arrive soon",
        "url": "https://www.techradar.com/audio/earbuds-airpods/bose-quietcomfort-ultra-headphones-and-earbuds-just-leaked-with-serious-prices",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/aYHBmmLxgiXjpzxRZ89KCb-1200-80.png",
        "publishedAt": "2023-08-08T11:08:22Z",
        "content": "Bose's QuietComfort range needs no further fanfare from us – although if you'd like more hoots and hollers, see our Bose QuietComfort Earbuds II review, our Bose QuietComfort 45 review, Bose QuietCom… [+2985 chars]"
    },
    {
        "source": {
            "id": "techradar",
            "name": "TechRadar"
        },
        "author": "Axel Metz",
        "title": "3 reasons not to buy the iPhone 15 if you already own one of the best iPhones",
        "description": "The iPhone 15 line will be great – but think before you buy",
        "url": "https://www.techradar.com/phones/iphone/3-reasons-not-to-buy-the-iphone-15-if-you-already-own-one-of-the-best-iphones",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/oSpAqX4B9vq4FsrghWuwKY-1200-80.jpg",
        "publishedAt": "2023-07-22T04:00:00Z",
        "content": "Apple looks set to debut the iPhone 15, iPhone 15 Plus, iPhone 15 Pro and iPhone 15 Pro Max in September this year, but we’re quietly confident that we already know what each new phone will bring to … [+6421 chars]"
    },
    {
        "source": {
            "id": "the-hindu",
            "name": "The Hindu"
        },
        "author": "Special Correspondent",
        "title": "Hours after ouster as CBI chief, Alok Verma’s phone numbers made it to Pegasus list: Report",
        "description": "“Also added to the list of numbers at the same time as Verma were two other senior CBI officials, Rakesh Asthana and A.K. Sharma...,” news portal The Wire claimed in a report.",
        "url": "https://www.thehindu.com/news/national/hours-after-ouster-as-cbi-chief-alok-vermas-phone-numbers-made-it-to-pegasus-list-report/article35477226.ece",
        "urlToImage": "https://www.thehindu.com/news/national/wjxhfq/article35477225.ece/ALTERNATES/LANDSCAPE_615/AlokVerma",
        "publishedAt": "2021-07-22T17:18:05Z",
        "content": "The Wire on Thursday reported that hours after Prime Minister Narendra Modi acted to oust Alok Verma from his post as head of the Central Bureau of Investigation (CBI) at midnight on October 23, 2018… [+1223 chars]"
    },
    {
        "source": {
            "id": "wired-de",
            "name": "Wired.de"
        },
        "author": "Benedikt Sauer",
        "title": "Samsung: Neue Smartphones bieten Oberklasse-Features für jeden",
        "description": "Mit der Enthüllung des Galaxy A52 und A72 zeigt Samsung, dass Smartphones mit Oberklasse-Features auch zum attraktiven Preis zu haben sind.",
        "url": "https://www.gq-magazin.de/auto-technik/article/samsung-galaxy-a-serie-mittelklasse-smartphones-mit-oberklasse-features",
        "urlToImage": "https://res.cloudinary.com/wired-de/image/upload/t_teaser_square/v1/0/samsung-galaxy-a52-a72-neue-smartphones-technik-aufmjpg.jpg",
        "publishedAt": "2021-03-18T07:30:00Z",
        "content": "Wir erinnern uns: Im Januar stellte Samsung das Galaxy A32 5G vor und gab damit den Startschuss für die neue A-Serie 2021. Der Nachfolger des Galaxy A31 erfreute die Fachpresse mit 5G-Datentransfer, … [+3871 chars]"
    },
    {
        "source": {
            "id": "spiegel-online",
            "name": "Spiegel Online"
        },
        "author": "Spiegel Online",
        "title": "Machtkampf in Venezuela: Guaidó als Parlamentspräsident vereidigt",
        "description": "Sicherheitskräfte hatten Venezuelas Oppositionsführer Juan Guaidó zunächst erneut den Zutritt zum Kongress versperrt. Dann gelangte er doch hinein und wurde als Parlamentspräsident vereidigt - bei Smartphone-Licht.",
        "url": "http://www.spiegel.de/politik/ausland/venezuela-juan-guaido-als-parlamentspraesident-vereidigt-a-1303935.html",
        "urlToImage": "https://cdn1.spiegel.de/images/image-1503808-860_poster_16x9-nqmm-1503808.jpg",
        "publishedAt": "2020-01-07T18:47:39Z",
        "content": "Dienstag, 07.01.2020  \r\n19:47 Uhr\r\nDer Machtkampf um das Parlament in Venezuela spitzt sich zu. Der selbsternannte Übergangspräsident Juan Guaidó ist zum zweiten Mal als Parlamentspräsident vereidigt… [+1696 chars]"
    },
    {
        "source": {
            "id": "mashable",
            "name": "Mashable"
        },
        "author": "Sasha Lekach",
        "title": "How to make iPhone's Screen Time actually helpful",
        "description": "Maybe this year we'll actually spend less time staring at a phone screen.",
        "url": "https://mashable.com/article/screen-time-ios-iphone-wwdc-2019-improve/",
        "urlToImage": "https://mondrian.mashable.com/2019%252F05%252F29%252F2b%252Fc28429efe72d4cd6ae4e1f36a6d5bcb6.7e8a8.jpg%252F1200x630.jpg?signature=_KJ1rjuTpolkLOy9GFR88GbTg80=",
        "publishedAt": "2019-05-29T15:00:00Z",
        "content": "Your iPhone is keeping track, but is it enough?\r\nIt's been a year since Apple introduced a new feature to its iOS settings: \"Screen Time,\" the activity and phone use tracker. \r\nSince updating to iOS … [+5271 chars]"
    }
]

   capitalfl=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
   }
  constructor(props){
    super(props);
    this.state={
  articles : [],
  loading:false
    }
    document.title=`${this.capitalfl(this.props.category)} - News tak`
}
async componentDidMount() {
    this.props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=ace56ad9cdb1468f93f058ba18cd735b`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    this.props.setprogress(100);
}

  render() {
    return (
      <div className='container'>
        <center>
        <h1 className='text-danger' style={{marginTop: '50px'}}>News Tak - {this.capitalfl(this.props.category)}</h1>
        <h4 className='p-1s'><em><u>Aapko Rakhe aage</u></em></h4>
        </center>
        <div className='row mt-1 mb-1'>
            {this.state.articles.map((element)=>{
                return<div className="col-md-4" key={element.url}>
                <Newphone title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} Date={element.publishedAt} source={element.source.name}/>
                </div>
            })}
      </div>
      </div>
    );
  }

static defaultProps = {
    //country:'in',
    category:'general',
}
static propTypes ={
    //country:PropTypes.string,
    category:PropTypes.string,
}
}
