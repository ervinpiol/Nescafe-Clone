import LightRoasts from "../assets/Origins-Coffee/light-roasts.webp";
import MediumRoasts from "../assets/Origins-Coffee/medium-roasts.webp";
import DarkRoasts from "../assets/Origins-Coffee/dark-roasts.webp";

import OCMain2Img1 from "../assets/Origins-Coffee/oc-main-2-1.webp";
import OCMain2Img2 from "../assets/Origins-Coffee/oc-main-2-2.webp";

import CoffeeBeansImg from "../assets/Origins-Coffee/coffee-beans-img.webp";
import RedCoffeeBeansImg from "../assets/Origins-Coffee/red-coffee-beans-img.webp";

export const OCTopText = {
  first:
    "The humble coffee bean is capable of truly amazing stuff. Starting off nestled in the centre of the cherries found on the coffee plant, the beans are a hidden treasure cherished by people all over the world. In fact, according to the British Coffee Association the UK on the whole drinks around 95 million cups of coffee per day! But despite this world-renowned love, people rarely stop to consider what are the origins of the beans I’m drinking and why do different coffees taste so different?",
  second:
    "At NESCAFÉ, we’ve put together this guide to tell you all about where coffee comes from, the difference between beans such as Arabica coffee beans and Robusta coffee beans and the all-important roasting process.",
};

export const CoffeeOriginItems = [
  {
    image: CoffeeBeansImg,
    bigText: "Where does coffee come from?",
    smallText:
      "Coffee is grown in more than 50 countries around “the coffee belt”, including locations such as Africa, Latin America and Asia. These areas have just the right combination of altitude, soil and weather, providing the perfect climate for growing the most delicious beans.",
  },
  {
    image: RedCoffeeBeansImg,
    bigText: "Get to know your coffee beans",
    smallText:
      "It may surprise you to learn that coffee beans actually come from the fruit (called “cherries”) of the coffee plant. The cherries are edible but taste absolutely nothing like coffee, in fact, they possess a mild and slightly sweet flavouring – a far cry from the rich and flavor some coffee beans inside.",
    smallText2:
      "There are over 120 varieties of coffee plants and each variety has its own distinct flavour. Most of the coffee we drink comes from either Arabica or Robusta coffee beans, or a blend of the two.",
  },
];

export const OCHistoryItems = [
  {
    image: OCMain2Img1,
    name: "OCMain2Img1",
    title: "Arabica",
    details: [
      "Arabica coffee beans is one of the most popular types and it’s believed to be one of the first coffee species ever grown with roots dating back to 100 years. Known for their vibrant and complex flavours, these beans are loved by coffee connoisseurs because of their smooth and less acidic taste.",
      "There are two types of Arabica coffee bean, Typica and Bourbon. Typica is also sometimes known as Sumatra and Arabigo, and it is this type which is thought to be the first bean ever discovered. Bourbon, on the other hand, is considered to be a natural mutation of Typica and offers a more balanced and slightly sweeter flavor, making it a popular choice among coffee lovers.",
    ],
  },
  {
    image: OCMain2Img2,
    name: "OCMain2Img2",
    title: "Robusta coffee beans",
    details:
      "Commonly grown in Africa and Indonesia, Robusta coffee beans have a higher caffeine content and as such, offer a much deeper and stronger taste than the Arabica variety. It’s a popular choice for espressos due to the rich flavour and layer of crema it gives and is also widely used in instant coffee.",
  },
];

export const WhyRoastedItems = [
  {
    image: LightRoasts,
    name: "Light Roasts",
    pText:
      "A lightly roasted coffee possesses a milder and toasted grain taste, the body is light and there’s plenty of acidity.",
  },
  {
    image: MediumRoasts,
    name: "Medium Roasts",
    pText:
      "Medium roasted coffee has a stronger flavour, more body, less acidity and can be the most fruity and sweet amongst all roast types",
  },
  {
    image: DarkRoasts,
    name: "Dark Roasts",
    pText:
      "A dark roast is the most intense and bitter and is far less acidic than other roast types. They can have a smoky or chocolatey sweet taste too.",
  },
];

export const WhyRoastedTitle = "Why is coffee roasted?";
