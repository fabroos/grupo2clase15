/*
  "id": 1,
  "items": [
    {
      "name": "guard-spec",
      "url": "https://pokeapi.co/api/v2/item/55/"
    },
    {
      "name": "dire-hit",
      "url": "https://pokeapi.co/api/v2/item/56/"
    },
    {
      "name": "x-attack",
      "url": "https://pokeapi.co/api/v2/item/57/"
    },
    {
      "name": "x-defense",
      "url": "https://pokeapi.co/api/v2/item/58/"
    },
    {
      "name": "x-speed",
      "url": "https://pokeapi.co/api/v2/item/59/"
    },
    {
      "name": "x-accuracy",
      "url": "https://pokeapi.co/api/v2/item/60/"
    },
    {
      "name": "x-sp-atk",
      "url": "https://pokeapi.co/api/v2/item/61/"
    },
    {
      "name": "x-sp-def",
      "url": "https://pokeapi.co/api/v2/item/62/"
    },
    {
      "name": "max-mushrooms",
      "url": "https://pokeapi.co/api/v2/item/1631/"
    }
  ],
  "name": "stat-boosts",
  "names": [
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "name": "Stat boosts"
    }
  ],
  "pocket": {
    "name": "battle",
    "url": "https://pokeapi.co/api/v2/item-pocket/7/"
  }
} */

export interface Item {
  name: string;
  url: string;
}

export interface ItemPocket {
  name: string;
  url: string;
}

export interface FullCategory {
  id: number;
  items: Item[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    }
    name: string;
  }[];
  pocket: ItemPocket;
}

export interface Category {
  name: string;
  url: string;
}