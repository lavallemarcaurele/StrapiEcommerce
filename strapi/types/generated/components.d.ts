import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroHero1 extends Schema.Component {
  collectionName: 'components_hero_hero_1s';
  info: {
    displayName: 'Hero 1';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    button: Attribute.Component<'utils.button'>;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface UtilsButton extends Schema.Component {
  collectionName: 'components_utils_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'hero.hero-1': HeroHero1;
      'utils.button': UtilsButton;
    }
  }
}
