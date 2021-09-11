import slash from '../assets/images/slash.png';
import pow from '../assets/images/pow.png';
import nomad from '../assets/images/nomad.png';
import highlander from '../assets/images/highlander.png';
import santoku from '../assets/images/santoku.png';
import gullwing from '../assets/images/teamgullwing.png';
import teamxp from '../assets/images/teamxp.png';
import smp from '../assets/images/smp.png';
import beast from '../assets/images/beast.png';
import mystique from '../assets/images/mystique.png';
import arial from '../assets/images/arial.png';
import spirit from '../assets/images/spirit.png';
import elmejortls from '../assets/images/elmejortls.png';
import selectstnd from '../assets/images/selectstnd.png';
import anthem from '../assets/images/anthem.png';
import crown from '../assets/images/crown.png';
import machine from '../assets/images/machine.png';
import team from '../assets/images/team.png';
import cosmic from '../assets/images/cosmic.png';
import ivy from '../assets/images/ivy.png';
import charger from '../assets/images/charger.png';

const menu = [
    {
        id: 1,
        title: 'slash',
        category: 'snowboards',
        price: 429.95,
        img: slash,
        desc: `Designed for those powder chasing, surf style, carver enthusiasts out there, the new Quiver Slash provides the perfect fun ride with its shorter length and fat shape improving the float while maintaining its shortboard agility in all conditions.`,
    },
    {
        id: 2,
        title: 'pow',
        category: 'snowboards',
        price: 429.95,
        img: pow,
        desc: `Experience the world of pow surfing with this OG stubby swallowtail shaped board - reinvented 8 years ago to provide unstoppable float and surf like quickness to any type of terrain, without hurting your bank account.`,
    },
    {
        id: 3,
        title: 'nomad',
        category: 'snowboards',
        price: 499.95,
        img: nomad,
        desc: `The run of your life is just a short adventure hike away, without having to break the bank or your spirits to get there with our most affordable, trusted, and now upgraded with pre-drilled skin holes all-terrain Nomad splitboard`,
    },
    {
        id: 4,
        title: 'highlander',
        category: 'snowboards',
        price: 565.95,
        img: highlander,
        desc: `The Highlander´s exclusive KOROYD® Powercore makes this our lightest and most comfortably responsive deck, while the new Antiphase Technology makes this the smoothest ride in the line-up, even at light speeds - bundled up in a timeless directional silhouette. `,
    },
    {
        id: 5,
        title: 'santoku',
        category: 'snowboards',
        price: 599.95,
        img: santoku,
        desc: `This ATV (All Terrain Vehicle) snowboard was inspired by fellow ATV snowboarder Elias Elhardt to be the most fun snowboard you can have under your feet no matter where you find yourself on the mountain.`,
    },
    {
        id: 6,
        title: 'team gullwing',
        category: 'snowboards',
        price: 499.95,
        img: gullwing,
        desc: `The heritage and confidence run deep with our most trusted all-terrain snowboard, The Team Gullwing, which offers a playful, agile, and forgiving ride for all styles in any condition.`,
    },
    {
        id: 7,
        title: 'team exposure',
        category: 'snowboards',
        price: 499.95,
        img: teamxp,
        desc: `Together with digital artist Jack Usephot we have set out to make the world’s most unreal snowboard experience through unbelievable graphics and a truly outlandish snowboard ride all over the mountain. `,
    },
    {
        id: 8,
        title: 'smp',
        category: 'snowboards',
        price: 429.95,
        img: smp,
        desc: `Built for those snowboard adventurists and daydreamers looking to take this board and create their path down any marked or unmarked trail in search of the next greatest run.`,
    },
    {
        id: 9,
        title: 'beast',
        category: 'snowboards',
        price: 385.95,
        img: beast,
        desc: `The Beast was engineered and designed by and for the world´s best freestyle snowboarders. As you can see by the graphic, this snowboard is no joke it provides the support, pop, speed, and flex you need to be at the forefront of snowboardings progression in and out of the park.`,
    },
    {
        id: 10,
        title: 'mystique',
        category: 'snowboards',
        price: 399.95,
        img: mystique,
        desc: `Designed for those ladies looking for a forgiving, friendly, catch-free ride, and engineered with top-shelf technologies to help them turn every day into the best day ever on the mountain.`,
    },
    {
        id: 11,
        title: 'arial',
        category: 'snowboards',
        price: 219.95,
        img: arial,
        desc: `The Arial´s catch-free Cam-Out Camber and Powercore offer a more responsive ride for the girls who are ready to ride every run on the mountain in search of the next pow stash, side-hit, or park jump.`,
    },
    {
        id: 12,
        title: 'spirit',
        category: 'snowboards',
        price: 244.95,
        img: spirit,
        desc: `This progression-friendly girls board allows for fun learning, with its Flat-Out Rocker, from linking turns, going fast, and learning how to stop to board sliding boxes, the Spirit snowboard will allow this little ripper to navigate the mountain in no time.`,
    },
    {
        id: 13,
        title: 'el mejor tls',
        category: 'boots',
        price: 417.95,
        img: elmejortls,
        desc: `The perfect blend of engineered performance and customizable first-class, the El Mejor was designed specifically to be the most comfortable leather snowboard boot on the market without sacrificing endless durability and a fit that lasts.`,
    },
    {
        id: 14,
        title: 'select stnd',
        category: 'boots',
        price: 317.95,
        img: selectstnd,
        desc: `The most trusted performance and response by Olympic medalists to backcountry specialists, the Nitro Select has everything you and the pros would need for that perfect fit and support in any given situation.`,
    },
    {
        id: 15,
        title: 'anthem tls',
        category: 'boots',
        price: 195.95,
        img: anthem,
        desc: `A good day on the mountain starts from the feet up, and the tried and true Nitro Anthem TLS offers the comfort, versatility, durability, and traction in an easy to use snowboard boot to allow you to charge harder!`,
    },
    {
        id: 16,
        title: 'crown tls',
        category: 'boots',
        price: 249.95,
        img: crown,
        desc: `Known within the industry as one of the best, the women´s Crown TLS snowboard boot was created specifically to help push limits in any terrain while keeping your feet warm and comfortable.`,
    },
    {
        id: 17,
        title: 'machine',
        category: 'bindings',
        price: 295.95,
        img: machine,
        desc: `The Nitro Machine binding has become a staple within the Nitro Binding line over the years for its unmatched customizable fits and unparalleled responsive performance.`,
    },
    {
        id: 18,
        title: 'team',
        category: 'bindings',
        price: 269.95,
        img: team,
        desc: `The Team has become Nitro´s best selling snowboard binding over the last few seasons due to its perfected blend of comfort and pro-caliber technologies with a laser-focus on performance and durability for taking a beating all season long!`,
    },
    {
        id: 19,
        title: 'cosmic',
        category: 'bindings',
        price: 169.95,
        img: cosmic,
        desc: `The women´s Cosmic binding offers comfort and fit that is out of this world, equipped with Nitro´s user-friendly technologies and solutions to create the most versatile flex and response for riding the entire trail map with ease.`,
    },
    {
        id: 20,
        title: 'ivy',
        category: 'bindings',
        price: 259.95,
        img: ivy,
        desc: `For years the women´s Ivy snowboard binding has been the go-to binding for experienced snowboarders all over the world because of its world-class fit and unstoppable durability, which allow medium to pro-level riders to charge harder and longer than they ever have before, no matter the terrain.`,
    },
    {
        id: 21,
        title: 'charger',
        category: 'bindings',
        price: 97.95,
        img: charger,
        desc: `Pro-level technologies and design packed into a smaller package to maximize comfort and foothold for the younger generation to progress past their wildest dreams.`,
    }

];
export default menu;
