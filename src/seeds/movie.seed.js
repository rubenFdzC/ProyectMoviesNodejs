const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const Movie = require ("../api/models/movies.model");

const arrayMovies = [
  {
    "title": "Goodfellas",
    "director": "Martin Scorsese",
    "year": 1990,
    "duration": 146,
    "genre": "Crime",
    "valuation": 9.0,
    "synopsis": "The rise and fall of a mobster through the eyes of a former associate, based on the true story of Henry Hill.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679572603/mmxrjadtwfpjm9heqczg.jpg"
  },
  {
    "title": "The Silence of the Lambs",
    "director": "Jonathan Demme",
    "year": 1991,
    "duration": 118,
    "genre": "Crime",
    "valuation": 8.6,
    "synopsis": "A young FBI cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679572686/zxvc4sd9fsymss8hviyv.jpg "
  },
  {
    "title": "Unforgiven",
    "director": "Clint Eastwood",
    "year": 1992,
    "duration": 131,
    "genre": "Western",
    "valuation": 8.2,
    "synopsis": "Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner and a young man.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679572749/t19p41x8sahun2cvbosp.jpg "
  },
  {
    "title": "Jurassic Park",
    "director": "Steven Spielberg",
    "year": 1993,
    "duration": 127,
    "genre": "Adventure",
    "valuation": 8.1,
    "synopsis": "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679572807/ogdxoni7b8wlphh8wjrp.jpg /"
  },
  {
    "title": "Braveheart",
    "director": "Mel Gibson",
    "year": 1995,
    "duration": 178,
    "genre": "Biography",
    "valuation": 8.3,
    "synopsis": "When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace leads a rebellion against King Edward I of England.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679573622/pjnhep8vcagjg7jttn0z.jpg "
  },
  {
    "title": "Fargo",
    "director": "Joel Coen, Ethan Coen",
    "year": 1996,
    "duration": 98,
    "genre": "Crime",
    "valuation": 8,
    "synopsis": "Poor Jerry Lundegaard. He's deep in debt. His wealthy father-in-law has no respect for him. He cheats customers at the car dealership where he works. And now he's hired a bumbling duo to kidnap his wife--a plan that goes horribly awry, leading to homicide. Enter Marge Gunderson, one of the most fabulous movie cops in film history. The very-pregnant Marge--played marvelously by Frances McDormand in an Oscar-winning and career-defining performance--just goes about her everyday business, eating (in nearly every scene), talking to the people in the community, and examining bloody corpses as if no day is different from the next. A multiple murder in the small town of Brainerd, Minnesota--home of Paul Bunyan, as the sign claims--seems to have little effect on her. Yet she has an innate cop sense--she is very, very good at her job and determined to solve the case in her offhanded manner.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679573657/xwl0bxwecta1e5yu6zcd.jpg "
  },
  {
    "title": "Pulp Fiction",
    "director": "Quentin Tarantino",
    "year": 1994,
    "duration": 154,
    "genre": "Crime",
    "valoration": 9.0,
    "synopsis": "The lives of two hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679573692/ucglzotalx4bd5q5jpaa.jpg"
  },
  {
    "title": "Forrest Gump",
    "director": "Robert Zemeckis",
    "year": 1994,
    "duration": 142,
    "genre": "Drama",
    "valoration": 8.8,
    "synopsis": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679573760/pmdm6u5k2l0sb2yuvqu0.jpg"
  },
  {
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "year": 1994,
    "duration": 142,
    "genre": "Drama",
    "valoration": 9.3,
    "synopsis": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679573802/hupt9su35yeoqu78jyc1.jpg"
  },
  {
    "title": "Schindler's List",
    "director": "Steven Spielberg",
    "year": 1993,
    "duration": 195,
    "genre": "Biography",
    "valoration": 8.9,
    "synopsis": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679573855/tzupagydyqewonvkaujm.jpg"
  },
  {
    "title": "The Matrix",
    "director": "Lana Wachowski, Lilly Wachowski",
    "year": 1999,
    "duration": 136,
    "genre": "Action",
    "valoration": 8.7,
    "synopsis": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679573892/nfrsjrxjevplmognwxcf.jpg"
  },
  {
    "title": "Terminator 2: Judgment Day",
    "director": "James Cameron",
    "year": 1991,
    "duration": 137,
    "genre": "Action",
    "valoration": 8.5,
    "synopsis": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679573935/f7q0oqqeyasdwlvuwfuh.jpg"
  },
  {
    "title": "Back to the Future",
    "director": "Robert Zemeckis",
    "year": 1985,
    "duration": 116,
    "genre": "Adventure",
    "valoration": 8.5,
    "synopsis": "A teenager is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his friend, Dr. Emmett Brown, and must make sure his high-school-age parents unite in order to save his own existence.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577444/back_to_the_future_hy8ti5.png"
  },
  {
    "title": "The Empire Strikes Back",
    "director": "Irvin Kershner",
    "year": 1980,
    "duration": 124,
    "genre": "Action",
    "valoration": 8.7,
    "synopsis": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577446/star_wars_episode_v_the_empire_s_yniu97.png"
  },
  {
    "title": "Blade Runner",
    "director": "Ridley Scott",
    "year": 1982,
    "duration": 117,
    "genre": "Sci-Fi",
    "valoration": 8.1,
    "synopsis": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577444/blade_runner-351607743-large_qltqjp.png"
  },
  {
    "title": "Die Hard",
    "director": "John McTiernan",
    "year": 1988,
    "duration": 132,
    "genre": "Action",
    "valoration": 8.2,
    "synopsis": "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577444/die_hard-336213173-large_zla4gk.png"
  },
{
    "title": "The Shining",
    "director": "Stanley Kubrick",
    "year": 1980,
    "duration": 146,
    "genre": "Horror",
    "valoration": 8.4,
    "synopsis": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    "billboard":"https://res.cloudinary.com/da3lrqri1/image/upload/v1679577447/the_shining-453129380-large_urtbym.png"
  },
  {
    "title": "E.T. the Extra-Terrestrial",
    "director": "Steven Spielberg",
    "year": 1982,
    "duration": 115,
    "genre": "Science Fiction",
    "valoration": 7.8,
    "synopsis": "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577445/e_t_the_extra_terrestrial-391240_mud6dq.png"
  },
  {
    "title": "The Breakfast Club",
    "director": "John Hughes",
    "year": 1985,
    "duration": 97,
    "genre": "Drama",
    "valoration": 7.9,
    "synopsis": "Five high school students, all different stereotypes, meet in detention, where they pour their hearts out to each other, and discover how they have a lot more in common than they thought.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577445/madonna_and_the_breakfast_club-2_sjtprk.png"
  },
  {
    "title": "Rain Man",
    "director": "Barry Levinson",
    "year": 1988,
    "duration": 133,
    "genre": "Drama",
    "valoration": 8.0,
    "synopsis": "Selfish yuppie Charlie Babbitt's father left a fortune to his savant brother Raymond and a pittance to Charlie. They travel cross-country together.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577447/rain_man-706309878-large_odbfqf.png"
  },
  {
    "title": "Full Metal Jacket",
    "director": "Stanley Kubrick",
    "year": 1987,
    "duration": 116,
    "genre": "Drama",
    "valoration": 8.3,
    "synopsis": "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577445/full_metal_jacket-577943737-larg_szmtwh.png"
  },
{
    "title": "Ghostbusters",
    "director": "Ivan Reitman",
    "year": 1984,
    "duration": 105,
    "genre": "Comedy",
    "valoration":7.8,
    "synopsis": "Three former parapsychology professors set up shop as a unique ghost removal service.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577444/ghostbusters_ghost_busters-29507_vcco9h.png"
  },
  {
    "title": "The Princess Bride",
    "director": "Rob Reiner",
    "year": 1987,
    "duration": 98,
    "genre": "Adventure",
    "valoration": 8.1,
    "synopsis": "While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577447/the_princess_bride-741508250-lar_wse8ey.png"
  },
  {
    "title": "The Terminator",
    "director": "James Cameron",
    "year": 1984,
    "duration": 107,
    "genre": "Science Fiction",
    "valoration": 8.0,
    "synopsis": "A human-looking, indestructible cyborg is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577449/the_terminator-778052251-large_bvx5fw.png"
  },
  {
    "title": "Top Gun",
    "director": "Tony Scott",
    "year": 1986,
    "duration": 110,
    "genre": "Action",
    "valoration": 6.9,
    "synopsis": "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577447/top_gun-784306900-large_fvle2e.png"
  },
  {
    "title": "The Blues Brothers",
    "director": "John Landis",
    "year": 1980,
    "duration": 133,
    "genre": "Comedy",
    "valoration": 7.9,
    "synopsis": "Jake Blues, just released from prison, puts together his old band to save the Catholic home where he and his brother Elwood were raised.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679577447/the_blues_brothers-448368779-lar_d5j7yq.png"
  },
  {
    "title": "The Karate Kid",
    "director": "John G. Avildsen",
    "year": 1984,
    "duration": 126,
    "genre": "Drama",
    "valoration": 7.3,
    "synopsis": "A martial arts master agrees to teach karate to a bullied teenager.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679578230/the_karate_kid-914350571-large_ca2zhj.png"
  },
  {
    "title": "The Dark Knight",
    "director": "Christopher Nolan",
    "year": 2008,
    "duration": 152,
    "genre": "Action, Crime, Drama",
    "valoration": 9.0,
    "synopsis": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641708/movies/the_batman-449856406-large_vcju0r.png"
  },
  {
    "title": "Inception",
    "director": "Christopher Nolan",
    "year": 2010,
    "duration": 148,
    "genre": "Action, Adventure, Sci-Fi",
    "valoration": 8.8,
    "synopsis": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641711/movies/inception-652954101-large_wn8rpj.png"
  },
  {
    "title": "Gladiator",
    "director": "Ridley Scott",
    "year": 2000,
    "duration": 155,
    "genre": "Action, Adventure, Drama",
    "valoration": 8.5,
    "synopsis": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641711/movies/gladiator-564554218-large_kbzn6m.png"
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "director": "Peter Jackson",
    "year": 2001,
    "duration": 178,
    "genre": "Action, Adventure, Drama",
    "valoration": 8.8,
    "synopsis": "A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641711/movies/the_lord_of_the_rings_the_fellow_s7qkm7.png"
  },
  {
    "title": "The Prestige",
    "director": "Christopher Nolan",
    "year": 2006,
    "duration": 130,
    "genre": "Drama, Mystery, Sci-Fi",
    "valoration": 8.5,
    "synopsis": "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641710/movies/the_prestige-464630296-large_iffpbz.png"
  },
  {
    "title": "Memento",
    "director": "Christopher Nolan",
    "year": 2000,
    "duration": 113,
    "genre": "Mystery, Thriller",
    "valoration": 8.4,
    "synopsis": "A man with short-term memory loss attempts to track down his wife's murderer.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641710/movies/memento-230609861-large_rr6exo.png"
  },
  {
    "title": "Eternal Sunshine of the Spotless Mind",
    "director": "Michel Gondry",
    "year": 2004,
    "duration": 108,
    "genre": "Drama, Romance, Sci-Fi",
    "valoration": 8.3,
    "synopsis": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641710/movies/eternal_sunshine_of_the_spotless_axqtzo.png"
  },
  {
    "title": "There Will Be Blood",
    "director": "Paul Thomas Anderson",
    "year": 2007,
    "duration": 158,
    "genre": "Drama",
    "valoration": 8.2,
    "synopsis": "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679647640/There_Will_Be_Blood_yzqxah.jpg"
  },
  {
    "title": "The Social Network",
    "director": "David Fincher",
    "year": 2010,
    "duration": 120,
    "genre": "Biography, Drama",
    "valoration": 7.7,
    "synopsis": "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641709/movies/the_social_network-421032493-mme_jotpcw.png"
  },
  {
    "title": "The Departed",
    "director": "Martin Scorsese",
    "year": 2006,
    "duration": 151,
    "genre": "Crime, Drama, Thriller",
    "valoration": 8.5,
    "synopsis": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641709/movies/the_departed-749477966-mmed_hfugoj.png"
  },
  {
    "title": "City of God",
    "director": "Fernando Meirelles",
    "year": 2002,
    "duration": 130,
    "genre": "Crime, Drama",
    "valoration": 8.6,
    "synopsis": "In the poverty-stricken favelas of Rio de Janeiro in the 1970s, two young men choose different paths. Rocket wants to become a photographer, while Lil Dice becomes a drug dealer and ruthless criminal.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641709/movies/cidade_de_deus-954148413-large_w9lsek.png"
  },
  {
    "title": "Amélie",
    "director": "Jean-Pierre Jeunet",
    "year": 2001,
    "duration": 122,
    "genre": "Comedy, Romance",
    "valoration": 8.3,
    "synopsis": "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641710/movies/le_fabuleux_destin_d_amelie_poul_munarr.png"
  },
  {
    "title": "The Artist",
    "director": "Michel Hazanavicius",
    "year": 2011,
    "duration": 100,
    "genre": "Comedy",
    "valoration": 8.0,
    "synopsis": "A silent movie star meets a young dancer, but the arrival of talking pictures sends their careers in opposite directions.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641710/movies/the_artist-136693699-large_lwgpeb.png"
  },
  {
    "title": "Gravity",
    "director": "Alfonso Cuarón",
    "year": 2013,
    "duration": 91,
    "genre": "Drama",
    "valoration": 7.7,
    "synopsis": "Two astronauts work together to survive after an accident leaves them stranded in space.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641708/movies/gravity-595126003-mmed_rgr3jc.png"
  },
  {
    "title": "Birdman",
    "director": "Alejandro G. Iñárritu",
    "year": 2014,
    "duration": 119,
    "genre": "Comedy",
    "valoration": 7.7,
    "synopsis": "A washed-up actor, who once played a famous superhero, battles his ego and attempts to revive his career with a Broadway play.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641708/movies/birdman_or_the_unexpected_virtue_vbsmle.png"
  },
  {
    "title": "The Revenant",
    "director": "Alejandro G. Iñárritu",
    "year": 2015,
    "duration": 156,
    "genre": "Action",
    "valoration": 8.0,
    "synopsis": "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679653818/revenant_rhgjud.jpg"
  },
  {
    "title": "La La Land",
    "director": "Damien Chazelle",
    "year": 2016,
    "duration": 128,
    "genre": "Comedy",
    "valoration": 8.0,
    "synopsis": "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641709/movies/la_la_land-262021831-large_a4yoql.png"
  },
  {
    "title": "Blade Runner 2049",
    "director": "Denis Villeneuve",
    "year": 2017,
    "duration": 164,
    "genre": "Action",
    "valoration": 8.0,
    "synopsis": "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641710/movies/blade_runner_2049-681477614-larg_r3iv86.png"
  },
  {
    "title": "A Star is Born",
    "director": "Bradley Cooper",
    "year": 2018,
    "duration": 136,
    "genre": "Drama",
    "valoration": 7.7,
    "synopsis": "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641708/movies/a_star_is_born-447479418-large_pl53ur.png"
  },
  {
    "title": "Parasite",
    "director": "Bong Joon-ho",
    "year": 2019,
    "duration": 132,
    "genre": "Comedy",
    "valoration": 8.6,
    "synopsis": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679653812/parasite_bl67ou.jpg"
  },
  {
    "title": "Tenet",
    "director": "Christopher Nolan",
    "year": 2020,
    "duration": 150,
    "genre": "Action",
    "valoration": 7.5,
    "synopsis": "Armed with only one word -- Tenet -- and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641708/movies/tenet-432994986-large_km5nmg.png"
  },
  {
    "title": "Black Panther",
    "director": "Ryan Coogler",
    "year": 2018,
    "duration": 134,
    "genre": "Action",
    "valoration": 7.3,
    "synopsis": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and confront a challenger from his country's past.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641708/movies/black_panther-992613805-large_gmex9p.png"
  },
  {
    "title": "Nomadland",
    "director": "Chloé Zhao",
    "year": 2021,
    "duration": 107,
    "genre": "Drama",
    "valoration": 7.4,
    "synopsis": "A woman in her sixties who, after losing everything in the Great Recession, embarks on a journey through the American West, living as a van-dwelling modern-day nomad.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679641707/movies/nomadland-118487105-large_tikjxg.png"
  },
  {
    "title": "Promising Young Woman",
    "director": "Emerald Fennell",
    "year": 2020,
    "duration": 113,
    "genre": "Comedy",
    "valoration": 7.5,
    "synopsis": "A young woman, traumatized by a tragic event in her past, seeks out vengeance against those who cross her path.",
    "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679653812/PyW_kedfi3.jpg"
  },
  {
      "title": "The Batman",
      "director": "Matt Reeves",
      "year": 2022,
      "duration": 175,
      "genre": "Action",
      "valoration": 9.3,
      "synopsis": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that goes much deeper than he ever anticipated, as a new wave of criminal masterminds begins to rise up and challenge his abilities as a detective and a hero.",
      "billboard": "https://res.cloudinary.com/da3lrqri1/image/upload/v1679653804/b_t1p6hp.jpg"
  },

];
 
mongoose.connect(process.env.DB_URL, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(async () => {
    const allMovies = await Movie.find();
    if(allMovies.length > 0){
        await Movie.collection.drop()
        console.log("Deleted movies");
    };
})
.catch((err) => console.log("Error deleting movies", err))
.then(async () => {
    const moviesMap = arrayMovies.map((movie) => new Movie(movie));
    await Movie.insertMany(moviesMap);
    console.log(`${arrayMovies.length} Inserted movies`);
})
.catch((err) => console.log("Error inserting movies", err))
.finally(() => mongoose.disconnect());
