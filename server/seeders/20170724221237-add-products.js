'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        name: "TWC Pro Snowboard '18",
        category: 'Snowboard',
        product_category: 'Board',
        type: 'All Mountain',
        gender: 'Mens',
        brand: 'Burton',
        description:  "Backed by gold, and designed by Shaun White – get the snap, control, and response to propel your skills forward.   One look under the hood tells you Shaun White’s TWC Pro is revved up and ready to perform alchemy on all-terrain. In superpipes and slopestyle courses around the world, and every condition in between, camber delivers the snappy and stable suspension that White’s riding demands. Frostbite Edges eat up bulletproof ice, while the WFO base accelerates past the competition. Similar to the Custom but with a more responsive shape, the TWC Pro is the logical next step for riders ready to upgrade their game.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bibby '18",
        category: 'Ski',
        product_category: 'Ski',
        type: 'All Mountain',
        gender: 'Unisex',
        brand: 'Backcountry',
        description:  "From Moment themselves - The Bibby’s back, and there’s gonna be trouble. Hey na… The truth is: you were right and we were wrong. This is still one of the best designs we’ve ever made, and when we got back on it last year after its much-maligned hiatus, we all looked at each other and instantly knew it was the right thing to do. The shape is the same as it was in the beginning, and it is good. But that’s not to say we didn’t improve things a bit. More carbon inside and semi-cap construction outside have made it lighter and tougher, so all of you maniacs still skiing first-generation Bibbys can feel good about upgrading—and putting another thousand days on your new pair. ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Family Tree Custom Split '18",
        category: 'Snowboard',
        product_category: 'Board',
        type: 'Backcountry',
        gender: 'Mens',
        brand: 'Burton',
        description:  "Lead the charge on the way up or down with the splitboard edition of the most trusted all-terrain board in history.  When a snowboard gets this iconic, it’s understandable that it might develop a split personality. Luckily for the Custom, it’s spent the last two decades pushing the standard of what an all-mountain board can do, defying time and picking up legions of supporters and imitators. It was only a matter of time before the demand rose for the same all-terrain prowess in the form of a splitboard. Without a doubt the most versatile board ever built, with the Burton Custom Split you can put two feet forward towards a new world of self-propelled ascents and untracked adventures.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Deathwish '18",
        category: 'Ski',
        product_category: 'Ski',
        type: 'All Mountain',
        gender: 'Unisex',
        brand: 'Moment Ski',
        description:  "In 2012, Triple Camber Technology was a crazy experiment we were prepared to shut down after a single season. Four years later, we’ve put some form of TCT into almost every ski we make, and the original mad scientist is still in the building holding it down. The hype and industry awards are a distant murmur, but the Deathwish still brings the most overwhelmingly positive reviews from some of the best skiers we know.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Malavita EST '18",
        category: 'Snowboard',
        product_category: 'Binding',
        type: 'Freestyle',
        gender: 'Unisex',
        brand: 'Burton',
        description:  "The team’s favorite blends Burton’s top technologies with a freestyle focus.  Quickly becoming the go-to binding for the Burton team and beyond, the Malavita balances full wrap response around your boots with a mid-range flex that’s 100% focused on freestyle. Features like the Heel Hammock, Super Grip Capstrap™ and Asym Hammockstrap™ dial in response to the on-snow la vida of riders like McMorris, Davis, and Hale. Offered in two versions, choose the across-the-board compatibility of Re:Flex™ or pair the EST® model (which features the fluid mobility of The Hinge) with a Burton board featuring The Channel™ mounting system for the ultimate in flex, feel, and adjustability. Winged hi-backs on the Reaper colorway make for easier tweaks and presses.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: " Sherman Jacket",
        category: 'Snowboard',
        product_category: 'Jackets & Outerwear',
        type: 'Water-Resistant',
        gender: 'Mens',
        brand: 'Burton',
        description:  "Get the broken-in vintage look without actually going broke in this tech-loaded everyday winter jacket.  The throwback style cotton canvas fabric of the Burton Sherman Jacket provides an exceptional value-to-style ratio. Lightweight Thermacore™ insulation regulates cold snaps, while Living Lining™ tech adapts to your ups and downs in activity for consistent all-day comfort. Triple-entry handwarmer pockets stow nearly an entire hardware store in one pocket and an entire lunch in the other, so you’re basically prepared for the next apocalypse.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
