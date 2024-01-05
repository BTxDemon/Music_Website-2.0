// async function getMusic() {
//     let a = await fetch('http://127.0.0.1:5500/MusicFusionX/');
//     let response = await a.text();
//     let div = document.createElement('div');
//     div.innerHTML = response;
//     let as = div.getElementsByTagName('a');
//     let songs = []
//     for (let i = 0; i<as.length; i++) {
//         const element = as[i];
//         if (element.href.endsWith('.mp3')) {
//             songs.push(element.href);
//             console.log(element)
//         }
//     }
//     return songs;
// }

// async function main() {
//     let songs = await getMusic();
//     console.log(songs)
//     let randomIndex = Math.floor(Math.random() * songs.length);

//     let MusicIndex = Math.floor(Math.random() * songs.length);

// }
// main();

let Musics = [
  {
    name: "All Eyes On Me",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\All Eyes On Me - 2Pac ! English Song.mp3",
  },
  {
    name: "Alone Pt.II",
    artist: "Alan Walker",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Alone, Pt. II_320(PagalWorldl).mp3",
  },
  {
    name: "Ahzee go gyal",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Ahzee+go+gyal+lyrics.mp3",
  },
  {
    name: "Ainsi Bas La vida",
    artist: "Indila",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Ainsi Bas La Vida_192(PagalWorld).mp3",
  },
  {
    name: "Agar Tum Saath Ho",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Agar-Tum-Saath-Ho_192(PaglaSongs).mp3",
  },
  {
    name: "Bez Tebya Ya Ne Ya",
    artist: "Rauf & Faik",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\bez-tebya-ya-ne-ya.mp3",
  },
  {
    name: "Baby Calm Down",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Baby Calm Down_192(PaglaSongs).mp3",
  },
  {
    name: "Bol4",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\BOL4 - 썸 탈꺼야 (Some).mp3",
  },
  {
    name: "Broken Angel",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Broken angel slowed reverb arash feat helena.mp3",
  },
  {
    name: "Business",
    artist: "DYSTINCT",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\DYSTINCT-Business.mp3",
  },
  {
    name: "Cheap thrills",
    artist: "Sia",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Cheap-Thrills_192(PaglaSongs).mp3",
  },
  {
    name: "Doechii",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Doechii-What-It-Is-(Gospeljingle.com).mp3",
  },

  {
    name: "Say My Name",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Say My Name.mp3",
  },
  {
    name: "Traag",
    artist: "Bizzey",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Traag(Mr-Jatt1.com).mp3",
  },
  {
    name: "Everything I Need",
    artist: "Skylar Grey",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Skylar Grey Everything I Need Film Version Aquaman Soundtrack Lyric Video].mp3",
  },
  {
    name: "Roses",
    artist: "Saint Jhn",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\SAINt_JHN_Roses_(thinkNews.com.ng).mp3",
  },
  {
    name: "Dreams",
    artist: "Lost Sky",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Lost Sky - Dreams pt. II (feat. Sara Skinner) [NCS Release].mp3",
  },
  {
    name: "Senorita",
    artist: "Camila Cabello",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Senorita.mp3",
  },
  {
    name: "Hope",
    artist: "XXXTentacion",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\XXXTENTACION-Hope.mp3",
  },

  {
    name: "Wannabe",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\why_mona_-_Wannabe_CeeNaija.com_.mp3",
  },
  {
    name: "Often",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\zamona-net-the-weeknd-often-kygo-remix.mp3",
  },
  {
    name: "Say Good Bye",
    artist: "Unkown Brain",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Unknown Brain - Say Goodbye.mp3",
  },
  {
    name: "Unity",
    artist: "Alan Walker",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Unity - Alan x Walkers_320(PagalWorldl).mp3",
  },
  {
    name: "Set Fire To The Hills",
    artist: "The Weeknd & Adele",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\The Weeknd & Adele - Set Fire To The Hills (The Hills & Set Fire To The Rain Mashup!).mp3",
  },
  {
    name: "Talking to the Moon",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Talking To The Moon_320(PagalWorldl).mp3",
  },
  {
    name: "Standing By You",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\standing by you.mp3",
  },
  {
    name: "I am Sorry",
    artist: "Slander",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\SLANDER+I+m+sorry+don+t+leave+me+I+want+you+here+with+me+Lyrics+Love+Is+Gone.mp3",
  },
  {
    name: "Sugar & Brownies",
    artist: "Dharia",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Sugar & Brownies-Dharia-.mp3",
  },
  {
    name: "Stereo Hearts",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Stereo Hearts(PagalWorld).mp3",
  },
  {
    name: "Snap",
    artist: "Rosa Linn",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Rosa_Linn_-_Snap_CeeNaija.com_.mp3",
  },
  {
    name: "Phone Away",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Phone Away.mp3",
  },
  {
    name: "Hate You",
    artist: "PoyLow & Bauwz",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Poylow & BAUWZ - Hate You (NCS Release)(AllDjsMashup.Com).mp3",
  },
  {
    name: "Perfect Body",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\perfect-body-with-a-perfect-smile-song.mp3",
  },
  {
    name: "One Dance",
    artist: "Drake",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\One-Dance-Remix_320(PagalWorld).mp3",
  },
  {
    name: "One Kiss",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\One Kiss_320(PaglaSongs).mp3",
  },

  {
    name: "Renegade Speed",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\renegade - speed.mp3",
  },
  {
    name: "Suzume",
    artist: "Radwimps",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Suzume No Tojimari Title Track_192(PagalWorld).mp3",
  },
  {
    name: "Royality",
    artist: "Egzod",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Egzod & Maestro Chives - Royalty (ft. Neoni) @ iMuzica.com.mp3",
  },
  {
    name: "Thunder",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Thunder.mp3",
  },
  {
    name: "I'm Good",
    artist: "David Guetta",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\David-Guetta-I-m-Good-Blue-Ft-Bebe-Rexha-(HiphopMood.com).mp3",
  },

  {
    name: "Heeriye",
    artist: "Arijit Singh",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Heeriye_320(PaglaSongs).mp3",
  },

  {
    name: "Under The Influence",
    artist: "Chris Brown",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Chris-Brown-Under-The-Influence-(JustNaija.com).mp3",
  },
  {
    name: "Hurts So Good",
    artist: "Astrid",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Hurts-So-Good_320(PaglaSongs).mp3",
  },
  {
    name: "Your Eyes x Teri Nazro ne",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Your-Eyes-X-Teri-Nazron-Ne_192(PaglaSongs).mp3",
  },

  {
    name: "Kabhi Jo Badal x Let Me Down Slowly",
    artist: "Arjit Singh",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Kabhi-Jo-Badal-Barse-x-Let-Me-Down-Slowly-Mashup(PaglaSongs).mp3",
  },
  {
    name: "Tarasti Hai Nigahen",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Tarasti-Hai-Nigahen-Meri_192(PaglaSongs).mp3",
  },
  {
    name: "Thoda Thoda Pyaar",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Thoda-Thoda-Pyar(PagalWorld).mp3",
  },
  {
    name: "Jadugar",
    artist: "Paradox",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Jaadugar_192(PaglaSongs).mp3",
  },
  {
    name: "Faded",
    artist: "Alan Walker",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\alan walker faded.mp3",
  },
  {
    name: "On My Way",
    artist: "Alan Walker",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Alan Walker, Sabrina Carpenter & Farruko - On My Way.mp3",
  },
  {
    name: "Dandelions",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Dandelions_192(PaglaSongs).mp3",
  },
  {
    name: "Dark Side",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Darkside_320(PaglaSongs).mp3",
  },
  {
    name: "Despacito",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Despacito.mp3",
  },
  {
    name: "Gasolina",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Gasolina(PaglaSongs).mp3",
  },
  {
    name: "In The Stars",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\In the stars.mp3",
  },
  {
    name: "Infected",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Infected_192(PagalWorld).mp3",
  },
  {
    name: "Infinity",
    artist: "James Young",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Infinity - Jaymes Young-(DJMaza).mp3",
  },
  {
    name: "Instamaka",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\instasamka-otklyuchayu-telefon-mp3.mp3",
  },
  {
    name: "Gansta [Suicide Squad]",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Kehlani+Gangsta+from+Suicide+Squad+The+Album+Official+Music+Video].mp3",
  },
  {
    name: "Let Me Down Slowly",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Let Me Down Slowly_.mp3",
  },
  {
    name: "Industry Baby",
    artist: "Lil Nas X",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Lil-Nas-X-Ft-Jack-Harlow-Industry-Baby-(TrendyBeatz.com).mp3",
  },

  {
    name: "Love Nwantiti",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Love Nwantiti_192(PaglaSongs).mp3",
  },
  {
    name: "Middle of The Night",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\MIDDLE-OF-THE-NIGHT.mp3",
  },
  {
    name: "Mocking Bird",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Mockingbird - Fenekot-(SongsPK).mp3",
  },
  {
    name: "My Feelings",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\My Feelings_320(PaglaSongs).mp3",
  },
  {
    name: "Neffex Addict",
    artist: "NEFFEX",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\NEFFEX_-_Addict.mp3",
  },
  {
    name: "Neffex Grateful",
    artist: "NEFFEX",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\neffex grateful.mp3",
  },
  {
    name: "Neffex Life",
    artist: "NEFFEX",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\neffex life.mp3",
  },
  {
    name: "Neffex Light It Up",
    artist: "NEFFEX",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Neffex Light It Up.mp3",
  },
  {
    name: "Neffex Price Tag",
    artist: "NEFFEX",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\NEFFEX_-_Price_Tag-.mp3",
  },
  {
    name: "Neffex Ruthless",
    artist: "NEFFEX",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\NEFFEX-Ruthless.mp3",
  },
  {
    name: "Heat Waves",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Sometimes All I Think About Is You_320(PagalWorldl).mp3",
  },
  {
    name: "Tuesday",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Tuesday_320(PaglaSongs).mp3",
  },
  {
    name: "Mirandote",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Mirandote.mp3",
  },
  {
    name: "Shoong feat Lisa",
    artist: "N/A",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\TAEYANG-Ft-LISA-of-BLACKPINK-Shoong-24Naijamuzic-com.mp3",
  },
  {
    name: "Weekend Punk",
    artist: "Star Boy",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\The20WeekndDaft20Punk20-20Starboy20.mp3",
  },
  {
    name: "Way we Go down",
    artist: "",
    Mcover: "Music-Covers\\images.jpeg",
    path: "MusicFusionX\\Way Down We Go-(DJMaza).mp3",
  },
];

window.addEventListener("load", () => {
  // left Sidebar and Main Player code

  let MainPlayer = document.querySelector("#main .main-player");
  let currenttimeTag = document.querySelector(".main-player .currenttime");
  let totaltimeTag = document.querySelector(".main-player .totaltime");
  let MainAudio = document.getElementById("main-audio");
  let PlayPauseBtn = document.querySelector(
    ".main-player .btn-box .play-pause"
  );
  let BackBtn = document.querySelector(".main-player .btn-box .prev");

  let NextBtn = document.querySelector(".main-player .btn-box .next");

  let ShuffleBtn = document.querySelector(".main-player .btn-box .shuffle");

  let ProgressBox = document.querySelector(
    ".main-player .slider-time .progress-bar"
  );

  let ProgressBar = document.querySelector(
    ".main-player .slider-time .progress-bar .progress"
  );

  let VolumeSliderBox = document.querySelector(
    ".main-player .volume-box .slider-box"
  );

  let VolumeSliderBar = document.querySelector(
    ".main-player .volume-box .slider-box .slider"
  );

  let Wave = document.querySelector(".main-player .wave-box");

  let SongsList = document.querySelector(".left-sidebar > .songs-list");

  let ListSearch = document.getElementById("list-search");

  let ListSearchBtn = document.querySelector(
    ".left-sidebar .search-box .list-search-btn"
  );

  let MainSearch = document.getElementById("main-search");

  let MainSearchBtn = document.querySelector(
    ".right-sidebar .header .search-box .main-search-btn"
  );

  let MusicIndex = Math.floor(Math.random() * Musics.length);

  const LoadPlayList = () => {
    for (let index = 0; index < Musics.length; index++) {
      let SongsBox = document.createElement("div");
      SongsBox.classList.add("songs-box");
      let songsIndex = document.createElement("div");
      songsIndex.classList.add("songs-index");
      if (index + 1 < 10) {
        songsIndex.innerHTML = `0${index + 1}`;
      } else {
        songsIndex.innerHTML = index + 1;
      }
      SongsBox.appendChild(songsIndex);
      let Imgbox = document.createElement("div");
      Imgbox.classList.add("img-box");
      let Img = document.createElement("img");
      Img.src = Musics[index].Mcover;

      Imgbox.appendChild(Img);

      let NameArtist = document.createElement("div");
      NameArtist.classList.add("name-artist");
      NameArtist.innerHTML = `
              <p class="song-name">${Musics[index].name}</p>
              <p class="artist">${Musics[index].artist}</p>  
          `;
      let PlayBtn = document.createElement("button");
      PlayBtn.classList.add("play-btn");
      PlayBtn.innerHTML = `<i class='bx bx-play'></i>`;
      PlayBtn.value = Musics[index].name;

      SongsBox.appendChild(songsIndex);
      SongsBox.appendChild(Imgbox);
      SongsBox.appendChild(NameArtist);
      SongsBox.appendChild(PlayBtn);

      SongsList.appendChild(SongsBox);
    }
  };

  LoadPlayList();

  const LoadMusic = (index) => {
    let NameArtist = document.querySelector(".main-player .name-artist");
    NameArtist.innerHTML = `
          <p class="song-name">${Musics[index].name}</p>
          <p class="artist">${Musics[index].artist}</p>    
      `;
    MainAudio.src = Musics[index].path;
    let Cover = document.querySelector(".main-player .img-box img");
    Cover.src = Musics[index].Mcover;
  };
  LoadMusic(MusicIndex);

  let AllSongsBox = document.querySelectorAll(
    ".left-sidebar .songs-list .songs-box"
  );

  const CheckList = () => {
    AllSongsBox.forEach((box) => {
      box.addEventListener("click", () => {
        Musics.forEach((i) => {
          if (
            i.name.toLowerCase() ==
            box.querySelector(".play-btn").value.toLowerCase()
          ) {
            MusicIndex = Musics.indexOf(i);
            // LastPlayedSong.push(Musics.indexOf(i));
            LoadMusic(MusicIndex);
            PlayMusic();
            ListSearch.value = "";
            AllSongsBox.forEach((song) => {
              song.style.display = "";
            });
          }
        });
      });
    });
  };
  CheckList();

  // Last Played Logic
  // End

  MainAudio.addEventListener("timeupdate", () => {
    let Minutes = Math.floor(MainAudio.currentTime / 60);
    let Seconds = Math.floor(MainAudio.currentTime % 60);
    if (Seconds < 10) {
      currenttimeTag.innerHTML = `${Minutes}:0${Seconds}`;
    } else {
      currenttimeTag.innerHTML = `${Minutes}:${Seconds}`;
    }

    let ProgressWidth = (MainAudio.currentTime / MainAudio.duration) * 100;

    ProgressBar.style.width = `${ProgressWidth}%`;

    MainAudio.addEventListener("loadeddata", () => {
      let Minutes = Math.floor(MainAudio.duration / 60);
      let Seconds = Math.floor(MainAudio.duration % 60);
      if (Seconds < 10) {
        totaltimeTag.innerHTML = `${Minutes}:0${Seconds}`;
      } else {
        totaltimeTag.innerHTML = `${Minutes}:${Seconds}`;
      }
    });
  });

  const PlayMusic = () => {
    MainAudio.play();
    if (MainPlayer.classList.contains("playing") && Wave.classList.contains("active")) {
        let a = "";
    }
    else {
        MainPlayer.classList.add("playing");
        Wave.classList.add("active");
        PlayPauseBtn.innerHTML = `<i class='bx bx-pause' ></i>`;
    }
  };

  const PauseMusic = () => {
    MainAudio.pause();
    if (
      MainPlayer.classList.contains("playing") &&
      Wave.classList.contains("active")
    ) {
      MainPlayer.classList.remove("playing");
      Wave.classList.remove("active");
      PlayPauseBtn.innerHTML = `<i class='bx bx-play' ></i>`;
    }
  };

  const NextMusic = () => {
    MusicIndex++;
    if (MusicIndex > Musics.length) {
      MusicIndex = 0;
    }
    LoadMusic(MusicIndex);
    PlayMusic();
  };

  const PrevMusic = () => {
    MusicIndex--;
    if (MusicIndex < 0) {
      MusicIndex = Musics.length;
    }
    LoadMusic(MusicIndex);
    PlayMusic();
  };

  PlayPauseBtn.addEventListener("click", () => {
    if (MainPlayer.classList.contains("playing")) {
      PauseMusic();
    } else {
      PlayMusic();
    }
  });

  NextBtn.addEventListener("click", () => {
    NextMusic();
  });

  BackBtn.addEventListener("click", () => {
    PrevMusic();
  });

  ShuffleBtn.addEventListener("click", () => {
    console.log(ShuffleBtn.innerHTML);

    let GetText = ShuffleBtn.innerHTML;

    switch (GetText) {
      case `<i class="bx bx-sort" style="transform: rotate(90deg);"></i>`:
        ShuffleBtn.innerHTML = `<i class="bx bx-repeat"></i>`;
        break;

      case `<i class="bx bx-shuffle"></i>`:
        ShuffleBtn.innerHTML = `<i class="bx bx-sort" style="transform: rotate(90deg);"></i>`;
        break;

      case `<i class="bx bx-repeat"></i>`:
        ShuffleBtn.innerHTML = `<i class="bx bx-shuffle">`;
        break;
    }
  });

  MainAudio.addEventListener("ended", () => {
    let Mode = ShuffleBtn.innerHTML;

    switch (Mode) {
      case `<i class="bx bx-sort" style="transform: rotate(90deg);"></i>`:
        NextMusic();
        break;

      case `<i class="bx bx-shuffle"></i>`:
        console.log(ShuffleBtn.innerHTML);
        console.log(MainAudio.src);
        let RandomIndex = Math.floor(Math.random() * Musics.length);
        if (RandomIndex == MusicIndex) {
          RandomIndex = Math.floor(Math.random() * Musics.length);
        }
        LoadMusic(RandomIndex);
        PlayMusic();
        break;

      case `<i class="bx bx-repeat"></i>`:
        MainAudio.currentTime = 0;
        PlayMusic();
        break;
    }
  });

  ProgressBox.addEventListener("click", (i) => {
    let totalWidth = ProgressBox.clientWidth;
    let ClickedPoint = i.offsetX;
    MainAudio.currentTime = (ClickedPoint / totalWidth) * MainAudio.duration;
  });

  VolumeSliderBox.addEventListener("click", (i) => {
    let totalWidth = VolumeSliderBox.clientWidth;
    let ClickedPoint = i.offsetX;
    VolumeSliderBar.style.width = `${(ClickedPoint / totalWidth) * 100}%`;
  });

  const SearchMusic = () => {
    AllSongsBox.forEach((box) => {
      if (
        box
          .querySelector(".name-artist .song-name")
          .innerHTML.toLowerCase()
          .indexOf(ListSearch.value.toLowerCase()) > -1
      ) {
        box.style.display = "";
      } else {
        box.style.display = "none";
      }
    });
  };

  ListSearch.addEventListener("input", () => {
    SearchMusic();
  });

  window.addEventListener("keydown", (i) => {
    if (i.keyCode == 13) {
      if (
        ListSearch == document.activeElement ||
        MainSearch == document.activeElement
      ) {
        let a = "";
      } else {
        NextMusic();
      }
    }
    if (i.keyCode == 32) {
      if (
        ListSearch == document.activeElement ||
        MainSearch == document.activeElement
      ) {
        let a = "";
      } else {
        if (MainPlayer.classList.contains("playing")) {
          PauseMusic();
        } else {
          PlayMusic();
        }
      }
    }
    if (i.keyCode == 37) {
      if (
        ListSearch == document.activeElement ||
        MainSearch == document.activeElement
      ) {
        let a = "";
      } else {
        MainAudio.currentTime = MainAudio.currentTime - 5;
      }
    }
    if (i.keyCode == 39) {
      if (
        ListSearch == document.activeElement ||
        MainSearch == document.activeElement
      ) {
        let a = "";
      } else {
        MainAudio.currentTime = MainAudio.currentTime + 5;
      }
    }
  });

  // Right Sidebar Code

  // Popular songs Adding

  const PopularSongs = [
    {
      name: "Hope",
      artist: "XXXTentacion",
      Mcover: "Music-Covers\\images.jpeg",
      path: "MusicFusionX\\XXXTENTACION-Hope.mp3",
    },
    {
      name: "Say My Name",
      artist: "N/A",
      Mcover: "Music-Covers\\images.jpeg",
      path: "MusicFusionX\\Say My Name.mp3",
    },
    {
      name: "Traag",
      artist: "Bizzey",
      Mcover: "Music-Covers\\images.jpeg",
      path: "MusicFusionX\\Traag(Mr-Jatt1.com).mp3",
    },
    {
      name: "Everything I Need",
      artist: "Skylar Grey",
      Mcover: "Music-Covers\\images.jpeg",
      path: "MusicFusionX\\Skylar Grey Everything I Need Film Version Aquaman Soundtrack Lyric Video].mp3",
    },
    {
      name: "Roses",
      artist: "Saint Jhn",
      Mcover: "Music-Covers\\images.jpeg",
      path: "MusicFusionX\\SAINt_JHN_Roses_(thinkNews.com.ng).mp3",
    },
    {
      name: "Cheap thrills",
      artist: "Sia",
      Mcover: "Music-Covers\\images.jpeg",
      path: "MusicFusionX\\Cheap-Thrills_192(PaglaSongs).mp3",
    },
    {
      name: "Baby Calm Down",
      artist: "N/A",
      Mcover: "Music-Covers\\images.jpeg",
      path: "MusicFusionX\\Baby Calm Down_192(PaglaSongs).mp3",
    },
  ];

  let PopularCardBox = document.querySelector(
    "#main-body .popular-box .card-box"
  );

  // popular Artist Adding

  const PopularArtist = [
    {
      name: "Neffex",
      img: "Music-Covers\\images.jpeg",
    },
    {
      name: "alan Walker",
      img: "Music-Covers\\images.jpeg",
    },
    {
      name: "Nightcore",
      img: "Music-Covers\\images.jpeg",
    },
    {
      name: "Ed sheeran",
      img: "Music-Covers\\images.jpeg",
    },
  ];

  const LoadPopular = () => {
    for (let i = 0; i < 4; i++) {
      let Card = document.createElement("div");
      Card.classList.add("card");
      let MusicCover = document.createElement("div");
      MusicCover.classList.add("music-cover");
      let Img = document.createElement("img");
      Img.src = PopularSongs[i].Mcover;
      let Overflow = document.createElement("div");
      Overflow.classList.add("overflow");
      Overflow.innerHTML = `
        <button>
        <i class="bx bx-play"></i>
        </button> 
      `;

      let NameArtist = document.createElement("div");
      NameArtist.classList.add("name-artist");
      NameArtist.innerHTML = `
        <p class="name">${PopularSongs[i].name}</p>
        <p class="artist">${PopularSongs[i].artist}</p>  
      `;

      MusicCover.appendChild(Img);
      MusicCover.appendChild(Overflow);
      Card.appendChild(MusicCover);
      Card.appendChild(NameArtist);
      PopularCardBox.appendChild(Card);
    }
  };

  LoadPopular();

  let ArtistCardBox = document.querySelector(
    "#main-body .artist-box .card-box"
  );

  const LoadPopularArtist = () => {
    PopularArtist.forEach((i) => {
      let card = document.createElement("div");
      card.classList.add("card");
      let Imgbox = document.createElement("div");
      Imgbox.classList.add("img-box");
      let Img = document.createElement("img");
      Img.src = i.img;
      let name = document.createElement("p");
      name.classList.add("name");
      name.innerText = i.name;
      Imgbox.appendChild(Img);
      card.appendChild(Imgbox);
      card.appendChild(name);
      ArtistCardBox.appendChild(card);
    });
  };

  LoadPopularArtist();

  const PopularClicked = () => {
    let AllPopularCard = document.querySelectorAll(
      "#main-body .popular-box .card-box .card"
    );
    AllPopularCard.forEach((card) => {
      card.addEventListener("click", () => {
        Musics.forEach((i) => {
          if (
            card.querySelector(".name-artist .name").innerHTML.toLowerCase() ==
            i.name.toLowerCase()
          ) {
            MusicIndex = Musics.indexOf(i);
            LoadMusic(MusicIndex);
            PlayMusic();
          }
        });
      });
    });
  };

  PopularClicked();

  // Adding Musics to Trending section

  let TrendingCardBox = document.querySelector(
    "#main-body .trending-box .card-box"
  );

  const LoadTrending = () => {
    for (let index = 0; index < 31; index++) {
      let Card = document.createElement("div");
      Card.classList.add("card");
      let MusicCover = document.createElement("div");
      MusicCover.classList.add("music-cover");
      let Img = document.createElement("img");
      Img.src = Musics[index].Mcover;
      let Overflow = document.createElement("div");
      Overflow.classList.add("overflow");
      Overflow.innerHTML = `
          <button>
          <i class="bx bx-play"></i>
          </button> 
        `;

      let NameArtist = document.createElement("div");
      NameArtist.classList.add("name-artist");
      NameArtist.innerHTML = `
          <p class="name">${Musics[index].name}</p>
          <p class="artist">${Musics[index].artist}</p>  
        `;

      MusicCover.appendChild(Img);
      MusicCover.appendChild(Overflow);
      Card.appendChild(MusicCover);
      Card.appendChild(NameArtist);
      TrendingCardBox.appendChild(Card);
    }
  };

  LoadTrending();

  const TrendingClicked = () => {
    let AlltrendingCard = document.querySelectorAll(
      "#main-body .trending-box .card-box .card"
    );

    AlltrendingCard.forEach((card) => {
      card.addEventListener("click", () => {
        Musics.forEach((i) => {
          if (
            card.querySelector(".name-artist .name").innerHTML.toLowerCase() ==
            i.name.toLowerCase()
          ) {
            MusicIndex = Musics.indexOf(i);
            LoadMusic(MusicIndex);
            PlayMusic();
          }
        });
      });
    });
  };
  TrendingClicked();
});
