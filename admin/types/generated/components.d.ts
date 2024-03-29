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

export interface FooterContactFooter extends Schema.Component {
  collectionName: 'components_footer_contact_footers';
  info: {
    displayName: 'ContactFooter';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    email: Attribute.Component<'forms.input'>;
    message: Attribute.Component<'forms.input'>;
  };
}

export interface FormsContactForm extends Schema.Component {
  collectionName: 'components_forms_contact_forms';
  info: {
    displayName: 'ContactForm';
  };
  attributes: {
    title: Attribute.String;
    name: Attribute.Component<'forms.input'>;
    email: Attribute.Component<'forms.input'>;
    phone: Attribute.Component<'forms.input'>;
    services: Attribute.Component<'forms.input'>;
    message: Attribute.Component<'forms.input'>;
    messages: Attribute.JSON;
  };
}

export interface FormsForm extends Schema.Component {
  collectionName: 'components_forms_forms';
  info: {
    displayName: 'form';
    description: '';
  };
  attributes: {
    messages: Attribute.JSON;
    name: Attribute.Component<'forms.name'>;
    email: Attribute.Component<'forms.name'>;
    phone: Attribute.Component<'forms.name'>;
    services: Attribute.Component<'forms.name'>;
    message: Attribute.Component<'forms.name'>;
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

export interface FormsName extends Schema.Component {
  collectionName: 'components_forms_names';
  info: {
    displayName: 'name';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    label: Attribute.String;
  };
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
    image: Attribute.Media;
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
    description: '';
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
    description: '';
  };
  attributes: {
    lbl_contact_us: Attribute.String;
    lbl_read_more: Attribute.String;
    lbl_send: Attribute.String;
    lbl_see_more: Attribute.String;
    lbl_accept: Attribute.String;
  };
}

export interface LabelsLabels extends Schema.Component {
  collectionName: 'components_labels_labels';
  info: {
    displayName: 'labels';
  };
  attributes: {
    lbl_service: Attribute.String;
    lbl_error_recaptcha: Attribute.String;
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
      'footer.contact-footer': FooterContactFooter;
      'forms.contact-form': FormsContactForm;
      'forms.form': FormsForm;
      'forms.input': FormsInput;
      'forms.messages': FormsMessages;
      'forms.name': FormsName;
      'gallery.gallery-work': GalleryGalleryWork;
      'home-sections.home-company': HomeSectionsHomeCompany;
      'home-sections.home-middle': HomeSectionsHomeMiddle;
      'home-sections.home-our-services': HomeSectionsHomeOurServices;
      'home-sections.home-sections': HomeSectionsHomeSections;
      'home-sections.home-we-work': HomeSectionsHomeWeWork;
      'label-buttons.labels-button': LabelButtonsLabelsButton;
      'labels.labels': LabelsLabels;
      'menus.menu': MenusMenu;
      'shared.social-networks': SharedSocialNetworks;
    }
  }
}
