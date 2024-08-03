import type { Schema, Attribute } from '@strapi/strapi';

export interface ParagraphContentParagraphContent extends Schema.Component {
  collectionName: 'components_paragraph_content_paragraph_contents';
  info: {
    displayName: 'Paragraph Content';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
    Content: Attribute.Text;
    Pdf: Attribute.Media<'files'>;
    Heading: Attribute.String;
    Date: Attribute.Date;
    Link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'paragraph-content.paragraph-content': ParagraphContentParagraphContent;
    }
  }
}
