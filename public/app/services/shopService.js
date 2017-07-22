angular.module('lunaLumiere').service('shopService', function(){

  this.getData = function () {
    return items;
  }

});

var items = [
    {
      name: 'The Deathly Hallows',
      description: 'A purple quartz crystal with a Deathly Hallows Charm.',
      image: 'images/hp.jpg'
    },
    {
      name: 'Crystalline',
      description: 'A quartz cluster, placed on a filigree base.',
      image: 'images/crystal.jpg'
    },
    {
      name: 'Sea Queen',
      description: 'A single quartz crystal wrapped in faux leather cord, with an abalone shell bead.',
      image: 'images/teal.jpg'
    },
    {
      name: 'Crones Hand',
      description: 'A single rainbow quartz, cradled in a skeleton hand.',
      image: 'images/rainbow.jpg'
    },
    {
      name: 'Sly Fox',
      description: 'A simple pendant a cute fox.',
      image: 'images/fox.jpg'
    },
    {
      name: 'Picasso',
      description: 'A wire wrapped picasso stone cabochon.',
      image: 'images/black.jpg'
    }
  ];
