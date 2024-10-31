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
  
  const trending_list = [
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
  
  const popular_artists_list = [
    {
      artist:"Elizabeth Hall",
      image: require('../assets/image/Home - Audio Listing/Image 39.png'),
      id: "1"
    },
    {
  
      artist:"Brian Thomas",
      image: require('../assets/image/Home - Audio Listing/Image 40.png'),
      id: "2"
    },
    {
      artist:"Anthony Taylor",
      image: require('../assets/image/Home - Audio Listing/Image 41.png'),
      id: "3"
    }
  ];


  const songs = [
    {
      title: "FLOWER",
      artist: "Jessica Gonzalez",
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
      artist: "Anthony Taylor",
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
      artist: "Brian Bailey",
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
      artist: "Anthony Taylor",
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
      artist: "Pedro Moreno",
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
      artist: "Elena Jimenez",
      plays: 10,
      duration: "6:22",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 56.png"),
      like: 12,
      comment: 450,
      albums_id: "1",
      chart_id: "1",
      id: "6",
    },
  ];

  
    export { chart_list, trending_list, popular_artists_list };