const users=[
  {
    id: '1',
    username: 'Sally Rooney',
    password: '123456',
    phone: '123456789',
    img: require('../assets/image/Feed - Comment on an Audio/Avatar 8.png'),
  },
  {
    id: '2',
    username: 'Sally Rooney',
    password: '123456',
    phone: '123456789',
    img: require('../assets/image/Feed - Comment on an Audio/Avatar 8.png'),
  },
  {
    id: '1',
    username: 'Sally Rooney',
    password: '123456',
    phone: '123456789',
    img: require('../assets/image/Feed - Comment on an Audio/Avatar 8.png'),
  }
]

const feed = [
  {
    id: '1',
    artists_id: '1',
    timePost: new Date().getHours(),
    shares:1,
    verified: true,
  },
  {
    id: '2',
    artists_id: '3',
    likes: 12,
    timePost: new Date().getHours(),
    shares:1,
    verified: true,
  }
]

const feed_comment = [
  {
    id: '1',
    feed_id: '1',
    user_id: '1',
    content: 'I love this song',
    time: new Date().getHours(),
  },
  {
    id: '2',
    feed_id: '1',
    user_id: '2',
    content: 'I love this song',
    time: new Date().getHours(),
  },
  {
    id: '3',
    feed_id: '1',
    user_id: '3',
    content: 'I love this song',
    time: new Date().getHours(),
  },
  {
    id: '4',
    feed_id: '2',
    user_id: '1',
    content: 'I love this song',
    time: new Date().getHours(),
  },
  {
    id: '5',
    feed_id: '2',
    user_id: '2',
    content: 'I love this song',
    time: new Date().getHours(),
  },
  {
    id: '6',
    feed_id: '2',
    user_id: '3',
    content: 'I love this song',
    time: new Date().getHours(),
  }
]

const chart_list = [
    {
      title: "Top 50",
      location: "Canada",
      likes: 1234,
      duration: "05:10:18",
      description: "Daily chart-toppers update",
      image: require('../assets/image/Home - Audio Listing/BackGrChart_1.jpg'),
      songs: [
        {
          title: "FLOWER",
          artist: "Jessica Gonzalez",
          plays: 2.1,
          duration: "3:26",
          image: require("../assets/image/Playlist Details - Audio Listing/Image 51.png"),
          id: "1",
        },
        {
          title: "Shape of You",
          artist: "Anthony Taylor",
          plays: 68,
          duration: "3:35",
          image: require("../assets/image/Playlist Details - Audio Listing/Image 52.png"),
          id: "2",
        },
        {
          title: "Blinding Lights",
          artist: "Brian Bailey",
          plays: 93,
          duration: "4:39",
          image: require("../assets/image/Playlist Details - Audio Listing/Image 53.png"),
          id: "3",
        },
        {
          title: "Levitating",
          artist: "Anthony Taylor",
          plays: 9,
          duration: "7:48",
          image: require("../assets/image/Playlist Details - Audio Listing/Image 54.png"),
          id: "4",
        },
        {
          title: "Astronaut in the Ocean",
          artist: "Pedro Moreno",
          plays: 23,
          duration: "3:36",
          image: require("../assets/image/Playlist Details - Audio Listing/Image 55.png"),
          id: "5",
        },
        {
          title: "Dynamite",
          artist: "Elena Jimenez",
          plays: 10,
          duration: "6:22",
          image: require("../assets/image/Playlist Details - Audio Listing/Image 56.png"),
          id: "6",
        },
      ],
      id: "1"
    },
    {
      title: "Top 50",
      location: "USA",
      likes: 2345,
      duration: "04:30:22",
      description: "Trending hits in the USA",
      image:  require('../assets/image/Home - Audio Listing/BackGrChart_2.png'),
      id: "2"
    },
    {
      title: "Top 50",
      location: "UK",
      likes: 3456,
      duration: "06:15:40",
      description: "Popular tracks from the UK",
      image:  require('../assets/image/Home - Audio Listing/BackGrChart_3.png'),
      id: "3"
    }
  ];
  
  const albumsSong = [
    {
      title: "ME",
      artist:"Jessica Gonzalez",
      image: require('../assets/image/Home - Audio Listing/Image 45.png'),
      id: "1"
    },
    {
      title: "Magna nost",
      artist:"Brian Thomas",
      image: require('../assets/image/Home - Audio Listing/Image 46.png'),
      id: "2"
    },
    {
      title: "Magna nost",
      artist:"Christopher Brown",
      image: require('../assets/image/Home - Audio Listing/Image 47.png'),
      id: "3"
    }
  ];
  
  const artists = [
    {
      artistName:"Elizabeth Hall",
      image: require('../assets/image/Home - Audio Listing/Image 39.png'),
      id: "1"
    },
    {
  
      artistName:"Brian Thomas",
      image: require('../assets/image/Home - Audio Listing/Image 40.png'),
      id: "2"
    },
    {
      artistName:"Anthony Taylor",
      image: require('../assets/image/Home - Audio Listing/Image 41.png'),
      id: "3"
    },
    {
      artistName:"Ryan Young",
      image: require('../assets/image/Artist Profile/Image user.png'),
      id: "4"
    },
    {
      artistName:"Jessica Gonzalez",
      image: require('../assets/image/Artist Profile/Image user.png'),
      id: "5"
    },
    {
      artistName:"Brian Bailey",
      image: require('../assets/image/Artist Profile/Image user.png'),
      id: "6"
    },
    {
      artistName:"Perdro Moreno",
      image: require('../assets/image/Artist Profile/Image user.png'),
      id: "7"
    },
    {
      artistName:"Elena Jimenez",
      image: require('../assets/image/Artist Profile/Image user.png'),
      id: "8"
    },
    {
      artistName:"John Smith",
      image: require('../assets/image/Artist Profile/Image user.png'),
      id: "9"
    }
  ];


  const songs = [
    {
      title: "FLOWER",
      artist: "5",
      audio: "https://audio.jukehost.co.uk/vTRYaTEbpaYRCxiWGgL2S91mnOuMKfLw",
      plays: 2.1,
      duration: "3:26",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 51.png"),
      like: 12,
      comment: 450,
      albums_id: "1",
      chart_id: "1",
      id: "1",
    },
    {
      title: "Shape of You",
      artist: "3",
      audio: "https://audio.jukehost.co.uk/priWy2vYsWODmQiM6KevNYVLpPJGPZGd",
      plays: 68,
      duration: "3:35",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 52.png"),
      like: 12,
      comment: 450,
      albums_id: "1",
      chart_id: "1",
      id: "2",
    },
    {
      title: "Blinding Lights",
      artist: "6",
      plays: 93,
      audio: "https://audio.jukehost.co.uk/ZLdoXNocDAcsgeq6QKtPRHyvlqslNbke",
      duration: "4:39",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 53.png"),
      like: 12,
      comment: 450,
      albums_id: "1",
      chart_id: "1",
      id: "3",
    },
    {
      title: "Levitating",
      artist: "3",
      audio: "https://audio.jukehost.co.uk/rZ9sshicVlki8Dnm95ps1eWhK95dYgKF",
      plays: 9,
      duration: "7:48",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 54.png"),
      like: 12,
      comment: 450,
      albums_id: "1",
      chart_id: "1",
      id: "4",
    },
    {
      title: "Astronaut in the Ocean",
      artist: "7",
      audio: "https://audio.jukehost.co.uk/ZufGK11EtwQWXge8xYo5EQ02RuJqtr4s",
      plays: 23,
      duration: "3:36",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 55.png"),
      like: 12,
      comment: 450,
      albums_id: "1",
      chart_id: "1",
      id: "5",
    },
    {
      title: "Dynamite",
      artist: "8",
      plays: 10,
      duration: "6:22",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 56.png"),
      like: 12,
      comment: 450,
      albums_id: "1",
      chart_id: "1",
      id: "6",
    },  
    {
      title: "Let you free",
      artist: "4",
      plays: 68,
      duration: "03:35",
      image: require("../assets/image/Artist Profile/Image 66.png"),
      like: 50,
      comment: 600,
      albums_id: "2",
      chart_id: "2",
      id: "7",
    }, 
    {
      title: "Blinding Lights",
      artist: "4",
      plays: 93,
      duration: "04:39",
      image: require("../assets/image/Artist Profile/Image 67.png"),
      like: 50,
      comment: 600,
      albums_id: "2",
      chart_id: "2",
      id: "8",
    }, 
    {
      title: "Levitating",
      artist: "4",
      plays: 93,
      duration: "04:39",
      image: require("../assets/image/Artist Profile/Image 68.png"),
      like: 50,
      comment: 600,
      albums_id: "2",
      chart_id: "2",
      id: "9",
    }, 
    {
      title: "Astronaut in the Ocean",
      artist: "4",
      plays: 93,
      duration: "03:36",
      image: require("../assets/image/Artist Profile/Image 69.png"),
      like: 50,
      comment: 600,
      albums_id: "2",
      chart_id: "2",
      id: "10",
    },
    {
      title: "Dynamite",
      artist: "4",
      plays: 93,
      duration: "06:22",
      image: require("../assets/image/Artist Profile/Image 70.png"),
      like: 50,
      comment: 600,
      albums_id: "2",
      chart_id: "2",
      id: "11",
    },
  ];

  const myLibrary = [
    {
      name: "Jesss",
      image: require('../assets/image/Artist Profile/Image user.png'),
      songs:[
        {
          title: "FLOWER",
          artist: "5",
          plays: 2.1,
          duration: "3:26",
          image: require("../assets/image/Playlist Details - Audio Listing/Image 51.png"),
          like: 12,
          comment: 450,
          albums_id: "1",
          chart_id: "1",
          id: "1",
        },
        {
          title: "Shape of You",
          artist: "3",
          plays: 68,
          duration: "3:35",
          image: require("../assets/image/Playlist Details - Audio Listing/Image 52.png"),
          like: 12,
          comment: 450,
          albums_id: "1",
          chart_id: "1",
          id: "2",
        },
        {
          title: "Blinding Lights",
          artist: "6",
          plays: 93,
          duration: "4:39",
          image: require("../assets/image/Playlist Details - Audio Listing/Image 53.png"),
          like: 12,
          comment: 450,
          albums_id: "1",
          chart_id: "1",
          id: "3",
        },
        {
          title: "Levitating",
          artist: "3",
          plays: 9,
          duration: "7:48",
          image: require("../assets/image/Playlist Details - Audio Listing/Image 54.png"),
          like: 12,
          comment: 450,
          albums_id: "1",
          chart_id: "1",
          id: "4",
        },
        {
          title: "Astronaut in the Ocean",
          artist: "7",
          plays: 23,
          duration: "3:36",
          image: require("../assets/image/Playlist Details - Audio Listing/Image 55.png"),
          like: 12,
          comment: 450,
          albums_id: "1",
          chart_id: "1",
          id: "5",
        },
        {
          title: "Dynamite",
          artist: "8",
          plays: 10,
          duration: "6:22",
          image: require("../assets/image/Playlist Details - Audio Listing/Image 56.png"),
          like: 12,
          comment: 450,
          albums_id: "1",
          chart_id: "1",
          id: "6",
        }, 
      ],
      albumsSong: [
        {
          title: "ME",
          artist:"Jessica Gonzalez",
          image: require('../assets/image/Home - Audio Listing/Image 45.png'),
          songs:["1","2","3"],
          id: "1"
        },
      ],
      playLists:[
        {
          title: "Lpsum sit nulla",
          image: require('../assets/image/My Playlists/Image 110.png'),
          songs:[
            {
              title: "Astronaut in the Ocean",
              artist: "4",
              plays: 93,
              duration: "03:36",
              image: require("../assets/image/Artist Profile/Image 69.png"),
              like: 50,
              comment: 600,
              albums_id: "2",
              chart_id: "2",
              id: "1",
            },
            {
              title: "Dynamite",
              artist: "4",
              plays: 93,
              duration: "06:22",
              image: require("../assets/image/Artist Profile/Image 70.png"),
              like: 50,
              comment: 600,
              albums_id: "2",
              chart_id: "2",
              id: "2",
            },
          ],
          artists: 'Ashley Scott',
          id: "1",
        },
        {
          title: "Occaecat aliq",
          image: require('../assets/image/My Playlists/Image 111.png'),
          songs:[
            {
              title: "Astronaut in the Ocean",
              artist: "4",
              plays: 93,
              duration: "03:36",
              image: require("../assets/image/Artist Profile/Image 69.png"),
              like: 50,
              comment: 600,
              albums_id: "2",
              chart_id: "2",
              id: "1",
            },
            {
              title: "Dynamite",
              artist: "4",
              plays: 93,
              duration: "06:22",
              image: require("../assets/image/Artist Profile/Image 70.png"),
              like: 50,
              comment: 600,
              albums_id: "2",
              chart_id: "2",
              id: "2",
            },
          ],
          artists: 'Jose Garciat',
          id: "2",
        },
      ],
      artists: [
        {
          artistName:"Mer Watson",
          image: require('../assets/image/My Library/Image 107.png'),
          id: "1"
        },
        {
          artistName:"Brian Thomas",
          image: require('../assets/image/Home - Audio Listing/Image 40.png'),
          id: "2"
        },
      ],
      id: "1"
    }
  ]
  
    export { chart_list, albumsSong, artists,songs,myLibrary };