// kinder thumbnails
import Umbrella from "../static/images/video_thumbs/kinder/umbrella.png";
import FoilBoats from "../static/images/video_thumbs/kinder/foil-boats.png";
import GingerbreadMan from "../static/images/video_thumbs/kinder/gingerbread-man.png";
import PingPong from "../static/images/video_thumbs/kinder/ping-pong.png";
import WaterCycle from "../static/images/video_thumbs/kinder/water-cycle.png";
import WhaleBlubber from "../static/images/video_thumbs/kinder/whale-blubber.png";

// grade 1 thumbnails
import Bubbles from "../static/images/video_thumbs/first/bubbles.png";
import Butterfly from "../static/images/video_thumbs/first/butterfly.png";
import Creature from "../static/images/video_thumbs/first/creature.png";
import Kazoos from "../static/images/video_thumbs/first/kazoos.png";
import Moon from "../static/images/video_thumbs/first/moon.png";
import Telephone from "../static/images/video_thumbs/first/telephone.png";

// grade 2 thumbnails
import Bees from "../static/images/video_thumbs/second/bees.png";
import FrogTongue from "../static/images/video_thumbs/second/frog-tongue.png";
import Harmonica from "../static/images/video_thumbs/second/harmonica.png";
import Landforms from "../static/images/video_thumbs/second/landforms.png";
import MarshmallowLauncher from "../static/images/video_thumbs/second/marshmallow-launcher.png";
import Ooblek from "../static/images/video_thumbs/second/ooblek.png";

// grade 3 thumbnails
import BernoulliLevitator from "../static/images/video_thumbs/third/bernoulli-levitator.png";
import BirdBeaks from "../static/images/video_thumbs/third/bird-beaks.png";
import Fossils from "../static/images/video_thumbs/third/fossils.png";
import Inertia from "../static/images/video_thumbs/third/intertia.png";
import PlayDohMarble from "../static/images/video_thumbs/third/play-doh-marble.png";
import ZipLine from "../static/images/video_thumbs/third/zip-line.png";

// grade 4 thumbnails
import AstronautLander from "../static/images/video_thumbs/fourth/astronaut-lander.png";
import Catapults from "../static/images/video_thumbs/fourth/catapults.png";
import EarthquakeStructures from "../static/images/video_thumbs/fourth/earthquake-structures.png";
import LemonVolcano from "../static/images/video_thumbs/fourth/lemon-volcano.png";
import Pennies from "../static/images/video_thumbs/fourth/pennies.png";
import WindCar from "../static/images/video_thumbs/fourth/wind-car.png";

// grade 5 thumbnails
import CandyChemistry from "../static/images/video_thumbs/fifth/candy-chemistry.png";
import Crystals from "../static/images/video_thumbs/fifth/crystals.png";
import EggDrop from "../static/images/video_thumbs/fifth/egg-drop.png";
import OilSpill from "../static/images/video_thumbs/fifth/oil-spill.png";
import Osmosis from "../static/images/video_thumbs/fifth/osmosis.png";
import Spaghetti from "../static/images/video_thumbs/fifth/spaghetti.png";

// grade 6 thumbnails
import BridgeBuilding from "../static/images/video_thumbs/sixth/bridge-building.png";
import CellPhone from "../static/images/video_thumbs/sixth/cell-phone.png";
import PaperAirplane from "../static/images/video_thumbs/sixth/paper-airplanes.png";
import Parachutes from "../static/images/video_thumbs/sixth/parachutes.png";
import RollerCoaster from "../static/images/video_thumbs/sixth/roller-coaster.png";
import StrawRockets from "../static/images/video_thumbs/sixth/straw-rockets.png";

// technology thumbnails
import CodingMouse from "../static/images/video_thumbs/tech/coding-mouse.png";
import LittleBits from "../static/images/video_thumbs/tech/little-bits.png";
import Ozobots from "../static/images/video_thumbs/tech/ozobots.png";

// stores arrays for each grade, each in turn storing objects for each video in that grade
const videos = [
    [
        {
            id: "kinder-1",
            thumbnail: Umbrella,
            title: "Design an Umbrella",
            description: "Explore how to keep a creature dry in a rainstorm.",
            resource: "kinder/Kindergarten-Design-an-Umbrella.pdf",
            url: "kinder/kinder-1-umbrella.mp4",
        },
        {
            id: "kinder-2",
            thumbnail: FoilBoats,
            title: "Buoyancy & Foil Boats",
            description:
                "What makes a boat float? Design a boat that can hold the most pennies without sinking.",
            resource: "kinder/Kindergarten-Buoyancy-and-Foil-Boats.pdf",
            url: "kinder/kinder-2-buoyancy.mp4",
        },
        {
            id: "kinder-3",
            thumbnail: GingerbreadMan,
            title: "Gingerbread Man Trap",
            description:
                "The gingerbread man has escaped! Engineer a trap to catch him.",
            resource: "kinder/Kindergarten-Gingerbread-Man-Trap.pdf",
            url: "kinder/kinder-3-gingerbread.mp4",
        },
        {
            id: "kinder-4",
            thumbnail: PingPong,
            title: "Ping Pong Ball Maze",
            description:
                "Design a maze that uses motion and stability to move a ping pong ball.",
            resource: "kinder/Kindergarten-Ping-Pong-Ball-Maze.pdf",
            url: "kinder/kinder-4-ping-pong.mp4",
        },
        {
            id: "kinder-5",
            thumbnail: WaterCycle,
            title: "Water Cycle in a Bag",
            description:
                "Have you ever wondered where rain comes from? Find out in this exploration.",
            resource: "kinder/Kindergarten-Water-Cycle.pdf",
            url: "kinder/kinder-5-water-cycle.mp4",
        },
        {
            id: "kinder-6",
            thumbnail: WhaleBlubber,
            title: "Whale Blubber",
            description:
                "Experience what it feels like to be a whale in the cold ocean water.",
            resource: "kinder/Kindergarten-Whale-Blubber.pdf",
            url: "kinder/kinder-6-blubber.mp4",
        },
    ],
    [
        {
            id: "first-1",
            thumbnail: Bubbles,
            title: "Bubbles",
            description:
                "Are bubbles always round? Explore different ways to create a bubble.",
            resource: "first/First-Grade-Bubbles.pdf",
            url: "first/first-1-bubbles.mp4",
        },
        {
            id: "first-2",
            thumbnail: Creature,
            title: "Create a Creature",
            description:
                "Have fun creating a new creature that uses its parts to survive and grow.",
            resource: "first/First-Grade-Create-a-Creature.pdf",
            url: "first/first-2-creature.mp4",
        },
        {
            id: "first-3",
            thumbnail: Butterfly,
            title: "Butterfly Life-cycle",
            description:
                "Create a model to illustrate the steps in a butterfly's life cycle.",
            resource: "first/First-Grade-Butterfly-Life-Cycle.pdf",
            url: "first/first-3-butterfly.mp4",
        },
        {
            id: "first-4",
            thumbnail: Moon,
            title: "Phases of the Moon",
            description:
                "Use Oreos to explore the patterns of the moon in the night sky.",
            resource: "first/First-Grade-Phases-of-the-Moon.pdf",
            url: "first/first-4-moon-phases.mp4",
        },
        {
            id: "first-5",
            thumbnail: Telephone,
            title: "Telephone Communication",
            description: "How does sound move? Build a communication device.",
            resource: "first/First-Grade-Telephone-Communication.pdf",
            url: "first/first-5-telephone.mp4",
        },
        {
            id: "first-6",
            thumbnail: Kazoos,
            title: "Kazoos!",
            description: "Make some music by creating your own kazoo.",
            resource: "first/First-Grade-Kazoos.pdf",
            url: "first/first-6-kazoos.mp4",
        },
    ],
    [
        {
            id: "second-1",
            thumbnail: FrogTongue,
            title: "Frog's Tongue",
            description:
                "Have you wondered how a frog catches a fly? Find out in this exploration.",
            resource: "second/Second-Grade-Frogs-Tongue.pdf",
            url: "second/second-1-frogs-tongue.mp4",
        },
        {
            id: "second-2",
            thumbnail: MarshmallowLauncher,
            title: "Marshmallow Launcher",
            description:
                "Create a launcher and see how far you can make your marshmallow fly.",
            resource: "second/Second-Grade-Marshmallow-Launcher.pdf",
            url: "second/second-2-marshmallow-launcher.mp4",
        },
        {
            id: "second-3",
            thumbnail: Harmonica,
            title: "Build a Harmonica",
            description: "Explore how to make sound with your own harmonica.",
            resource: "second/Second-Grade-Build-a-Harmonica.pdf",
            url: "second/second-3-harmonica.mp4",
        },
        {
            id: "second-4",
            thumbnail: Landforms,
            title: "Landforms",
            description:
                "Do you live in the mountains, or in a valley, or along the coast? Design and create your own island.",
            resource: "second/Second-Grade-Landforms.pdf",
            url: "second/second-4-landforms.mp4",
        },
        {
            id: "second-5",
            thumbnail: Ooblek,
            title: "Ooblek",
            description: "Not a solid, not a liquid. What is it?",
            resource: "second/Second-Grade-Ooblek.pdf",
            url: "second/second-5-ooblek.mp4",
        },
        {
            id: "second-6",
            thumbnail: Bees,
            title: "Bees and Pollination",
            description:
                "Bees are amazing! Explore how they pollinate the flowers around us.",
            resource: "second/Second-Grade-Bees-and-Pollination.pdf",
            url: "second/second-6-bees.mp4",
        },
    ],
    [
        {
            id: "third-1",
            thumbnail: PlayDohMarble,
            title: "Play-Doh Marble Run",
            description: "Use cups and Play-Doh to build a roller coaster.",
            resource: "third/Third-Grade-Marble-Run.pdf",
            url: "third/third-1-marbles.mp4",
        },
        {
            id: "third-2",
            thumbnail: ZipLine,
            title: "Zip Line",
            description:
                "Design a zip line carrier that will protect your ping pong ball from a fall.",
            resource: "third/Third-Grade-Ziplines.pdf",
            url: "third/third-2-zip-line.mp4",
        },
        {
            id: "third-3",
            thumbnail: BernoulliLevitator,
            title: "Bernoulli Levitator",
            description: "Can you make something float in the air?",
            resource: "third/Third-Grade-Bernoulli-Levitator.pdf",
            url: "third/third-3-bernoulli.mp4",
        },
        {
            id: "third-4",
            thumbnail: Fossils,
            title: "Fossils",
            description:
                "Learn about impression fossils with gummy worms and bread.",
            resource: "third/Third-Grade-Fossils.pdf",
            url: "third/third-4-fossils.mp4",
        },
        {
            id: "third-5",
            thumbnail: Inertia,
            title: "Inertia",
            description:
                "Test your cup stacking skills against the force of inertia.",
            resource: "third/Third-Grade-Inertia.pdf",
            url: "third/third-5-inertia.mp4",
        },
        {
            id: "third-6",
            thumbnail: BirdBeaks,
            title: "Bird Beaks",
            description:
                "Why do birds have different shaped beaks? Let's think about their dinner!",
            resource: "third/Third-Grade-Bird-Beaks.pdf",
            url: "third/third-6-bird-beaks.mp4",
        },
    ],
    [
        {
            id: "fourth-1",
            thumbnail: EarthquakeStructures,
            title: "Earthquake Structures",
            description:
                "Engineer a structure that will survive an earthquake.",
            resource: "fourth/Fourth-Grade-Earthquake-Structures.pdf",
            url: "fourth/fourth-1-earthquake.mp4",
        },
        {
            id: "fourth-2",
            thumbnail: Catapults,
            title: "Catapults",
            description: "How far can you launch a marshmallow?",
            resource: "fourth/Fourth-Grade-Marshmallow-Catapult.pdf",
            url: "fourth/fourth-2-catapults.mp4",
        },
        {
            id: "fourth-3",
            thumbnail: AstronautLander,
            title: "Astronaut Lander",
            description:
                "Design and create a way to help an astronaut land safely.",
            resource: "fourth/Fourth-Grade-Astronaut-Lander.pdf",
            url: "fourth/fourth-3-astronaut.mp4",
        },
        {
            id: "fourth-4",
            thumbnail: LemonVolcano,
            title: "Lemon Volcano",
            description:
                "Explore the chemistry of lemons to create a volcano and learn about acids and bases.",
            resource: "fourth/Fourth-Grade-Lemon-Volcano.pdf",
            url: "fourth/fourth-4-lemon-volcano.mp4",
        },
        {
            id: "fourth-5",
            thumbnail: WindCar,
            title: "Wind Powered Car",
            description: "Explore an alternative energy source to power a car.",
            resource: "fourth/Fourth-Grade-Wind-Powered-Car.pdf",
            url: "fourth/fourth-5-wind-car.mp4",
        },
        {
            id: "fourth-6",
            thumbnail: Pennies,
            title: "Pennies Collision",
            description:
                "Learn about Newton's Laws with these experiments using pennies.",
            resource: "fourth/Fourth-Grade-Pennies-Collision.pdf",
            url: "fourth/fourth-6-pennies.mp4",
        },
    ],
    [
        {
            id: "fifth-1",
            thumbnail: OilSpill,
            title: "Oil Spill Challenge",
            description:
                "Oil spills are an environmental disaster. Explore how to clean up the mess!",
            resource: "fifth/Fifth-Grade-Oil-Spill-Clean-Up.pdf",
            url: "fifth/fifth-1-oil-spill-challenge.mp4",
        },
        {
            id: "fifth-2",
            thumbnail: CandyChemistry,
            title: "Candy Chemistry",
            description:
                "Explore a little chemistry with some of your favorite candies!",
            resource: "fifth/Fifth-Grade-Candy-Chemistry.pdf",
            url: "fifth/fifth-2-candy-chemistry.mp4",
        },
        {
            id: "fifth-3",
            thumbnail: EggDrop,
            title: "Egg Drop",
            description:
                "Can you design and create a contraption to keep your egg safe from gravity?",
            resource: "fifth/Fifth-Grade-Egg-Drop.pdf",
            url: "fifth/fifth-3-egg-drop.mp4",
        },
        {
            id: "fifth-4",
            thumbnail: Osmosis,
            title: "Gummy Bear Osmosis",
            description: "Use gummy bears to explore the osmosis of matter.",
            resource: "fifth/Fifth-Grade-Gummy-Bear-Osmosis.pdf",
            url: "fifth/fifth-4-osmosis.mp4",
        },
        {
            id: "fifth-5",
            thumbnail: Spaghetti,
            title: "Spaghetti Engineering",
            description:
                "What makes a tower strong? Explore this concept by using spaghetti to build your own tower.",
            resource: "fifth/Fifth-Grade-Spaghetti-Engineering.pdf",
            url: "fifth/fifth-5-spaghetti.mp4",
        },
        {
            id: "fifth-6",
            thumbnail: Crystals,
            title: "Crystal Formation",
            description:
                "Explore crystals with magnesium sulfate and create beautiful crystals of your own.",
            resource: "fifth/Fifth-Grade-Crystal-Formation.pdf",
            url: "fifth/fifth-6-crystals.mp4",
        },
    ],
    [
        {
            id: "sixth-1",
            thumbnail: StrawRockets,
            title: "Straw Rockets",
            description: "Design and engineer a high flying rocket.",
            resource: "sixth/Sixth-Grade-Straw-Rockets.pdf",
            url: "sixth/sixth-1-straw-rockets.mp4",
        },
        {
            id: "sixth-2",
            thumbnail: Parachutes,
            title: "Parachutes",
            description:
                "How do parachutes help people land safely after jumping out of a plane?",
            resource: "sixth/Sixth-Grade-Parachutes-and-Air-Resistance.pdf",
            url: "sixth/sixth-2-parachutes.mp4",
        },
        {
            id: "sixth-3",
            thumbnail: BridgeBuilding,
            title: "Bridge Building",
            description:
                "Explore different types of bridges and build the strongest bridge ever.",
            resource: "sixth/Sixth-Grade-Bridge-Building.pdf",
            url: "sixth/sixth-3-bridge-building.mp4",
        },
        {
            id: "sixth-4",
            thumbnail: CellPhone,
            title: "Design a Cell Phone Stand",
            description:
                "Can you engineer a super efficient way to hold your mobile phone?",
            resource: "sixth/Sixth-Grade-Cell-Phone-Stand.pdf",
            url: "sixth/sixth-4-cell-phone.mp4",
        },
        {
            id: "sixth-5",
            thumbnail: RollerCoaster,
            title: "Roller Coaster Physics",
            description: "Engineer and design a fast-moving roller coaster.",
            resource: "sixth/Sixth-Grade-Roller-Coaster-Physics.pdf",
            url: "sixth/sixth-5-roller-coaster.mp4",
        },
        {
            id: "sixth-6",
            thumbnail: PaperAirplane,
            title: "Paper Airplanes",
            description: "Have fun building complex paper airplanes.",
            resource: "sixth/Sixth-Grade-Paper-Airplanes.pdf",
            url: "sixth/sixth-6-paper-airplane.mp4",
        },
    ],
    [
        {
            id: "tech-1",
            thumbnail: Ozobots,
            title: "Ozobots",
            description:
                "Students use color combinations to code these small robots.  Blends the physical and digital world, the combinations are endless.",
            resource: null,
            url: "tech/tech-1-ozobots.mp4",
        },
        {
            id: "tech-2",
            thumbnail: CodingMouse,
            title: "Coding Mouse Introduction",
            description:
                "Teaches primary students screen-free coding skills with easy-to-use buttons and fun lights and sounds.",
            resource: null,
            url: "tech/tech-2-coding-mouse.mp4",
        },
        {
            id: "tech-3",
            thumbnail: LittleBits,
            title: "LittleBits Engineering",
            description:
                "Students use modular electronic bits to build inventions. Circuitry and electronics come to life.",
            resource: null,
            url: "tech/tech-3-little-bits.mp4",
        },
    ],
];

export { videos };
