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

export interface ComponentIconListItem extends Struct.ComponentSchema {
  collectionName: 'components_component_icon_list_items';
  info: {
    displayName: 'icon-list-item';
    icon: 'information';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
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

export interface ComponentStackCards extends Struct.ComponentSchema {
  collectionName: 'components_component_stack_cards';
  info: {
    displayName: 'stack-cards';
    icon: 'apps';
  };
  attributes: {};
}

export interface PostComponentsHeading extends Struct.ComponentSchema {
  collectionName: 'components_post_components_headings';
  info: {
    displayName: 'heading';
    icon: 'quote';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface PostComponentsIconList extends Struct.ComponentSchema {
  collectionName: 'components_post_components_icon_lists';
  info: {
    displayName: 'icon-list';
    icon: 'bulletList';
  };
  attributes: {
    iconListItem: Schema.Attribute.Component<'component.icon-list-item', true>;
  };
}

export interface PostComponentsParagraph extends Struct.ComponentSchema {
  collectionName: 'components_post_components_paragraphs';
  info: {
    displayName: 'paragraph';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.RichText;
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
      'component.icon-list-item': ComponentIconListItem;
      'component.key-features': ComponentKeyFeatures;
      'component.overview': ComponentOverview;
      'component.stack-cards': ComponentStackCards;
      'post-components.heading': PostComponentsHeading;
      'post-components.icon-list': PostComponentsIconList;
      'post-components.paragraph': PostComponentsParagraph;
      'shared.tag': SharedTag;
    }
  }
}
