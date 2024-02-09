import type { Schema, Attribute } from '@strapi/strapi';

export interface CardsServicesCards extends Schema.Component {
  collectionName: 'components_cards_services_cards';
  info: {
    displayName: 'services cards';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface FormsForm extends Schema.Component {
  collectionName: 'components_forms_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    inputs: Attribute.Component<'forms.input', true>;
    messages: Attribute.JSON;
  };
}

export interface FormsInput extends Schema.Component {
  collectionName: 'components_forms_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    name: Attribute.String;
    label: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface FormsMessages extends Schema.Component {
  collectionName: 'components_forms_messages';
  info: {
    displayName: 'messages';
  };
  attributes: {};
}

export interface GalleryGalleryWork extends Schema.Component {
  collectionName: 'components_gallery_gallery_works';
  info: {
    displayName: 'gallery_work';
  };
  attributes: {
    image: Attribute.Media;
    image_full: Attribute.Media;
  };
}

export interface HomeSectionsHomeCompany extends Schema.Component {
  collectionName: 'components_home_sections_home_companies';
  info: {
    displayName: 'home_company';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface HomeSectionsHomeMiddle extends Schema.Component {
  collectionName: 'components_home_sections_home_middles';
  info: {
    displayName: 'home_middle';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HomeSectionsHomeOurServices extends Schema.Component {
  collectionName: 'components_home_sections_home_our_services';
  info: {
    displayName: 'home_our_services';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
    text: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface HomeSectionsHomeSections extends Schema.Component {
  collectionName: 'components_home_sections_home_sections';
  info: {
    displayName: 'Home Sections';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
    img_mobile: Attribute.Media;
    img_tablet: Attribute.Media;
    img_laptop: Attribute.Media;
  };
}

export interface HomeSectionsHomeWeWork extends Schema.Component {
  collectionName: 'components_home_sections_home_we_works';
  info: {
    displayName: 'Home_we_work';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface LabelButtonsLabelsButton extends Schema.Component {
  collectionName: 'components_label_buttons_labels_buttons';
  info: {
    displayName: 'labels button';
  };
  attributes: {
    lbl_contact_us: Attribute.String;
    lbl_read_more: Attribute.String;
    lbl_send: Attribute.String;
    lbl_see_more: Attribute.String;
  };
}

export interface MenusMenu extends Schema.Component {
  collectionName: 'components_menus_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    sitemap: Attribute.Boolean;
  };
}

export interface SharedSocialNetworks extends Schema.Component {
  collectionName: 'components_shared_social_networks';
  info: {
    displayName: 'Social networks';
  };
  attributes: {
    type: Attribute.Enumeration<['facebook', 'instagram', 'twitter']>;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cards.services-cards': CardsServicesCards;
      'forms.form': FormsForm;
      'forms.input': FormsInput;
      'forms.messages': FormsMessages;
      'gallery.gallery-work': GalleryGalleryWork;
      'home-sections.home-company': HomeSectionsHomeCompany;
      'home-sections.home-middle': HomeSectionsHomeMiddle;
      'home-sections.home-our-services': HomeSectionsHomeOurServices;
      'home-sections.home-sections': HomeSectionsHomeSections;
      'home-sections.home-we-work': HomeSectionsHomeWeWork;
      'label-buttons.labels-button': LabelButtonsLabelsButton;
      'menus.menu': MenusMenu;
      'shared.social-networks': SharedSocialNetworks;
    }
  }
}
