import React, { Component } from 'react'
import NewsItem from './NewsItem';

class News extends Component {
  articles = [
    {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "Entertainment Bureau",
        "title": "Entertainment News LIVE Updates: RRR Team Predict Oscar Nods, Tu Jhoothi Main Makkaar Trailer Out - News18",
        "description": "Entertainment News LIVE Updates: SS Rajamouli's RRR, Shah Rukh Khan's Pathaan and Kartik Aaryan's latest explosive interview make headlines.",
        "url": "https://www.news18.com/news/movies/entertainment-news-live-updates-rrr-oscars-ss-rajamouli-pathaan-shah-rukh-khan-samantha-ruth-prabhu-rashmika-mandanna-livenews-6892369.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/01/rrr-oscars-2023-nominations-ranbir-kapoor-shraddha-kapoor-tu-jhoothi-main-makkar-trailer-167445980716x9.jpg",
        "publishedAt": "2023-01-23T08:36:54Z",
        "content": "filmmaker Wonsuk Chin. He praised RRR on Twitter and expressed his desire to see it in the Best Picture nomination at the Oscars. On the other hand, it is a big week for Bollywood as Shah Rukh Khan m… [+1653 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "We're back, \"WAR-RUS\" & Billy's Dick Joke | Rush Hour with JB & Billy - Triple M",
        "description": "Catch the full Rush Hour podcast on the the LiSTNR app, including Billy's French \"craft\", our chat with Mark Taylor & plenty more! Full Podcast 👉 https://bi...",
        "url": "https://www.youtube.com/watch?v=nDaVa-KVzhs",
        "urlToImage": "https://i.ytimg.com/vi/nDaVa-KVzhs/maxresdefault.jpg",
        "publishedAt": "2023-01-23T08:13:53Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Smother | RTÉ One & RTÉ Player | Final Series | Starts Sunday February 5th - RTÉ - IRELAND’S NATIONAL PUBLIC SERVICE MEDIA",
        "description": "The final season of SmotherComing soon to RTÉ One and RTÉ PlayerStream series 1 & 2 nowSee more at: http://www.rte.ie/player",
        "url": "https://www.youtube.com/watch?v=pQPFspqgt9E",
        "urlToImage": "https://i.ytimg.com/vi/pQPFspqgt9E/maxresdefault.jpg",
        "publishedAt": "2023-01-23T08:00:19Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "David Mitchell rants about WhatsApp for three minutes | Would I Lie To You? - BBC - BBC",
        "description": "Subscribe and 🔔 to the BBC 👉 https://bit.ly/BBCYouTubeSubWatch the BBC first on iPlayer 👉 https://bbc.in/iPlayer-HomeI mean, he's got a point 🤷‍♀️ #Would...",
        "url": "https://www.youtube.com/watch?v=JjCzkzYaFlg",
        "urlToImage": "https://i.ytimg.com/vi/JjCzkzYaFlg/maxresdefault.jpg",
        "publishedAt": "2023-01-23T08:00:14Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Tim Dowling",
        "title": "Men, guard your friendships – heed the warning of the Banshees of Inisherin - The Guardian",
        "description": "The Oscar contender may be set in the Ireland of a century ago. But it offers a very modern lesson on how fragile male bonds can be, says Guardian columnist Tim Dowling",
        "url": "https://www.theguardian.com/commentisfree/2023/jan/23/men-friendship-banshees-of-inisherin-oscar-ireland",
        "urlToImage": "https://i.guim.co.uk/img/media/e54d365570e293bf1df9e893d3d2a389bf6c5b2b/131_0_2813_1689/master/2813.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=8065cc92a874a1f8547ead3f19059c58",
        "publishedAt": "2023-01-23T08:00:00Z",
        "content": "The premise of the film The Banshees of Inisherin now attracting awards like a magnet is encapsulated in an early exchange between the two main characters: Colm abruptly ends his longstanding friends… [+5378 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Daily Mail"
        },
        "author": "Alison Boshoff",
        "title": "ALISON BOSHOFF: Pamela Anderson reveals Tommy Lee is the only man she has ever truly loved - Daily Mail",
        "description": "ALISON BOSHOFF: Despite six weddings, two annulments and four divorces, Tommy Lee is the only man Pamela Anderson has truly loved. The famous pair married from 1995 to 1998.",
        "url": "https://www.dailymail.co.uk/tvshowbiz/article-11664131/ALISON-BOSHOFF-Pamela-Anderson-reveals-Tommy-Lee-man-truly-loved.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2023/01/22/19/66845777-0-image-a-11_1674416172635.jpg",
        "publishedAt": "2023-01-23T07:59:45Z",
        "content": "She's had six weddings, two annulments and four divorces. But Pamela Anderson tells a Netflix documentary that her first husband, Motley Crue drummer Tommy Lee, is the only man she has ever truly lov… [+6373 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "TheJournal.ie"
        },
        "author": "Ken Foxe",
        "title": "Tweets about 'thousands' of books being trashed caused a bitter row at UCD - TheJournal.ie",
        "description": "The row kicked off last year when an academic tweeted that books were being ‘thrown into a bin lorry’.",
        "url": "https://www.thejournal.ie/ucd-library-5975732-Jan2023/",
        "urlToImage": "https://img2.thejournal.ie/article/5975732/river/?height=400&version=5975748",
        "publishedAt": "2023-01-23T07:35:11Z",
        "content": "TWEETS ABOUT THE dumping of thousands of books and journals by a university library caused a bitter row at UCD with librarians feeling dismay and upset after being tied to throwing out valuable readi… [+3370 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Bandwagon.asia"
        },
        "author": "Bandwagon",
        "title": "Asian popstars take over Milan and Paris Fashion Week – BTS' j-hope and Jimin, Snow Man's Raul, ENHYPEN, Jackson Wang, WayV's Ten, EXO's Kai, Win Metawin, and more - Bandwagon",
        "description": "Asian stars have descended upon Fashion Week.\r\nMaking headlines in Paris and Milan are some of the biggest Asian popstars – from Snow Man's Raul wa...",
        "url": "https://www.bandwagon.asia/articles/asian-popstars-milan-paris-fashion-week-bts-jimin-j-hope-snow-man-raul-jackson-wang-seventeen-jeonghan-enhypen-win-metawin-exo-kai-2023",
        "urlToImage": "https://assets.bandwagon.asia/system/tinymce/image/file/7589/content_content_unnamed__32_.webp",
        "publishedAt": "2023-01-23T07:27:41Z",
        "content": "Asian stars have descended upon Fashion Week.\r\nMaking headlines in Paris and Milan are some of the biggest Asian popstars from Snow Man's Raul walking the runway for Japanese designer Yohji Yamamoto … [+11236 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Pathaan: Deepika Padukone Reveals A Besharam Rang Secret - \"It Was Actually Freezing\" - NDTV Movies",
        "description": "Pathaan: Deepika Padukone reveals why shooting Besharam Rang was \"really difficult\"",
        "url": "https://www.ndtv.com/entertainment/pathaan-deepika-padukone-reveals-a-besharam-rang-secret-it-was-actually-freezing-3716116",
        "urlToImage": "https://c.ndtvimg.com/2023-01/m6kck1v4_deepikabesharamrang650_625x300_23_January_23.jpg",
        "publishedAt": "2023-01-23T07:25:03Z",
        "content": "Pathaan: Deepika Padukone in a still from Besharam Rang\r\nDeepika Padukone and Shah Rukh Khan sent the mercury racing upwards in their song Besharam Rang from Pathaan and that's partly due to the magi… [+2303 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Mondosonoro.com"
        },
        "author": "Patricia Castellar",
        "title": "Far From Saint es el nuevo proyecto de Kelly Jones (Stereophonics) - MondoSonoro",
        "description": "Far From Saints, la banda de Kelly Jones (Stereophonics), presenta \"Let's Turn This Back Around\", el primer avance de su próximo álbum.",
        "url": "https://www.mondosonoro.com/noticias-actualidad-musical/far-from-saints/",
        "urlToImage": "https://www.mondosonoro.com/wp-content/uploads/2023/01/farfromsaints.jpg",
        "publishedAt": "2023-01-23T07:23:14Z",
        "content": "Far From Saints, la banda de Kelly Jones (Stereophonics), presenta \"Let's Turn This Back Around\", el primer avance de su próximo álbum.\r\nFar From Saints comparte su canción de debut, \"Let's Turn This… [+2340 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sharjah24.ae"
        },
        "author": "Sharjah 24",
        "title": "'Khorfakkan Theatrical'; carnival and theatrical shows for a day - Sharjah24",
        "description": "Sharjah24: The eighth edition of the Khorfakkan Theater Festival, organised by the Theater Department of the Department of Culture, kicked off on Saturday, in the presence of a large audience, with the significant involvement of theatre stars and artistic tea…",
        "url": "https://www.sharjah24.ae/en/Articles/2023/01/23/Khorfakkan-Theatrical-carnival-and-theatrical-shows-for-a-day",
        "urlToImage": "https://www.sharjah24.ae/en/Articles/2023/01/23/Khorfakkan-Theatrical-carnival-and-theatrical-shows-for-a-day/-/media/Sharjah24/Articles/LOGOs/Department-of-Culture.jpg?20230123125813",
        "publishedAt": "2023-01-23T07:19:08Z",
        "content": "The one-day festival started at four in the afternoon, with carnival parades from the city center to the square of Khorfakkan Park, presenting various artistic and traditional performances.After arri… [+237 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Variety"
        },
        "author": "Naman Ramachandran",
        "title": "‘RRR’ Continues Roaring at Japan Box Office (EXCLUSIVE) - Variety",
        "description": "UPDATE: S.S. Rajamouli’s “RRR,” starring Ram Charan and NTR Jr, which is now the highest grossing Indian film of all time in Japan, continues to do blockbuster business in the cou…",
        "url": "https://variety.com/2023/film/news/rrr-japan-rajamouli-ram-charan-ntr-jr-1235416994/",
        "urlToImage": "https://variety.com/wp-content/uploads/2022/04/RRR3.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2023-01-23T07:17:00Z",
        "content": "UPDATE:S.S. Rajamouli’s “RRR,” starring Ram Charan and NTR Jr, which is now the highest grossing Indian film of all time in Japan, continues to do blockbuster business in the country. Dolby Vision pr… [+4178 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Kareena Kapoor Reacts To Boycott Bollywood Trend Says, 'How To Entertain Amid Boycott Calls?' - India Today",
        "description": "Akshay Kumar on Sunday praised Prime Minister Narendra Modi for asking BJP workers to refrain from making unnecessary remarks on films.In his address to the ...",
        "url": "https://www.youtube.com/watch?v=dnlBO16L27Q",
        "urlToImage": "https://i.ytimg.com/vi/dnlBO16L27Q/maxresdefault.jpg",
        "publishedAt": "2023-01-23T07:16:37Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Bluedot festival: Cultural icon Grace Jones to headline - BBC",
        "description": "Grace Jones will be joined by Pavement and Roisin Murphy at the top of Bluedot's bill, organisers say.",
        "url": "https://www.bbc.com/news/uk-england-manchester-64337716",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2E3B/production/_128353811_83de43e33867618ce6425b28a9469cf439b6b374.jpg",
        "publishedAt": "2023-01-23T07:02:32Z",
        "content": "\"Cultural icon\" Grace Jones has been announced as the headliner of the next Bluedot festival.\r\nThe singer, actress and model, who curated London's Meltdown in 2022, will play under the gaze of the Lo… [+2489 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "WWD"
        },
        "author": "Jennifer Weil and Lily Templeton and Rhonda Richford",
        "title": "Paris Scene: Where to Shop, Eat and Pamper - WWD",
        "description": "What to check out in the French capital in between fashion shows.",
        "url": "https://wwd.com/fashion-news/fashion-scoops/paris-where-to-shop-eat-spa-1235487297/",
        "urlToImage": "https://wwd.com/wp-content/uploads/2023/01/Mondaine-de-Pariso.jpg?w=1024",
        "publishedAt": "2023-01-23T07:02:06Z",
        "content": "PARIS — Between couture shows, there’s no shortage of stores, restaurants, exhibits and spas to check out in the City of Light. Here are some of the latest.\r\nRETAIL THERAPY: Canadian coat brand Macka… [+5436 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Anusha Dandekar's ENERGETIC Rapid Fire on Politics, Beauty Hacks, Harry Styles, Blackpink - Bollywood Hungama",
        "description": "#AnushaDandekar in an exclusive interview with Bollywood Hungama’s Rohit Khilnani answers some fun and exciting rapid fire questions on politics, beauty hack...",
        "url": "https://www.youtube.com/watch?v=AJkv4dOzWAE",
        "urlToImage": "https://i.ytimg.com/vi/AJkv4dOzWAE/hqdefault.jpg",
        "publishedAt": "2023-01-23T07:00:04Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Paula Cocozza",
        "title": "A new start after 60: I returned to my childhood home – and rediscovered a lost passion - The Guardian",
        "description": "After winning a Bafta for his film work, Mark Frith felt the only way was down. Then he began to draw again, spending two months sketching a tree he had once played in. It was the start of a whole new career",
        "url": "https://www.theguardian.com/lifeandstyle/2023/jan/23/a-new-start-after-60-i-returned-to-my-childhood-home-and-rediscovered-a-lost-passion",
        "urlToImage": "https://i.guim.co.uk/img/media/a39f9b47b525cf954fb882b1c5b2dcb975b72753/122_224_5494_3296/master/5494.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c4394b7fda15dd9dfbac855ddc82db1a",
        "publishedAt": "2023-01-23T07:00:00Z",
        "content": "Mark Frith was 57 when he won a Bafta for The Lie of the Land, a documentary about British farming released in 2007. He had been making films for 30 years. But shortly afterwards, he found himself fe… [+3800 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sharjah24.ae"
        },
        "author": "Sharjah 24",
        "title": "Indian craftsmen are behind the most incredible dresses of PFW - Sharjah24",
        "description": "Sharjah24 – AFO: Sitting in a lotus position, four men weave gold thread through pearls on an organza silk sheet, carefully constructing a wedding dress that will soon wow crowds at Paris Fashion Week (PFW).",
        "url": "https://www.sharjah24.ae/en/Articles/2023/01/23/Indian-craftsmen-are-behind-the-most-incredible-dresses-of-PFW",
        "urlToImage": "https://img.youtube.com/vi/MAGMeyIHUsQ/maxresdefault.jpg?20230123125813",
        "publishedAt": "2023-01-23T06:57:10Z",
        "content": "Commenting on this, Chetan Desai, director of Creations by Shanagar stated, \"I am very excited to work with Julien Fournié. One reason is because he goes limitless. Where creativity is concerned, we … [+562 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "News-Medical.Net"
        },
        "author": null,
        "title": "Using motion capture technology and AI to monitor the progression of movement disorders - News-Medical.Net",
        "description": "A multi-disciplinary team of researchers has developed a way to monitor the progression of movement disorders using motion capture technology and AI.",
        "url": "https://www.news-medical.net/news/20230123/Using-motion-capture-technology-and-AI-to-monitor-the-progression-of-movement-disorders.aspx",
        "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Neurosurgery-620x480.jpg",
        "publishedAt": "2023-01-23T06:57:00Z",
        "content": "A multi-disciplinary team of researchers has developed a way to monitor the progression of movement disorders using motion capture technology and AI.\r\nIn two ground-breaking studies, published in Nat… [+10246 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Inside Pics From Dubai, Courtesy Suhana-Gauri Khan, Farah Khan And Shanaya Kapoor - NDTV Movies",
        "description": "Farah Khan, in the caption, wrote, \"What a night",
        "url": "https://www.ndtv.com/entertainment/gauri-khan-and-farah-khan-lead-celeb-roll-call-in-dubai-3715882",
        "urlToImage": "https://c.ndtvimg.com/2023-01/7rbkggm8_suhana-khan_625x300_23_January_23.jpg",
        "publishedAt": "2023-01-23T06:36:27Z",
        "content": "Suhana Khan shared this picture. (courtesy: suhanakhan2)\r\nGauri Khan and Farah Khan led the celeb roll call at the grand launch of the luxury hotel Atlantis The Royal in Palm Jumeirah in Dubai. The m… [+2120 chars]"
    }
]
  constructor(){
        super();
        this.state = {
          articles: this.articles,
          loading: false
        }
    }
  render() {
    return (
      <div className='container my-5 pt-4'>
        <h3>News Monkey - Latest Updates from All over the world...!</h3>
          <div className="row">
            {this.state.articles.map((e) => {
                return <div className="col-md-4" key={e.url}>
                  <NewsItem title={e.title.slice(0,60)} desc={e.description.slice(0,110)} imgUrl={e.urlToImage} newsUrl={e.url}/>
                </div>
            })}
          </div>
      </div>
    )
  }
}

export default News