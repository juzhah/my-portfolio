import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentChallengeSolution extends Struct.ComponentSchema {
  collectionName: 'components_component_challenge_solutions';
  info: {
    displayName: 'challenge_solution';
    icon: 'grid';
  };
  attributes: {
    challenge: Schema.Attribute.Text;
    solution: Schema.Attribute.Text;
  };
}

export interface ComponentKeyFeatures extends Struct.ComponentSchema {
  collectionName: 'components_component_key_features';
  info: {
    displayName: 'key_features';
    icon: 'heart';
  };
  attributes: {
    feature: Schema.Attribute.Component<'shared.tag', true>;
  };
}

export interface ComponentOverview extends Struct.ComponentSchema {
  collectionName: 'components_component_overviews';
  info: {
    displayName: 'overview';
    icon: 'eye';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface SharedTag extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'item';
    icon: 'bulletList';
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.challenge-solution': ComponentChallengeSolution;
      'component.key-features': ComponentKeyFeatures;
      'component.overview': ComponentOverview;
      'shared.tag': SharedTag;
    }
  }
}
