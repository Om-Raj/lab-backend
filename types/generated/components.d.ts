import type { Schema, Attribute } from '@strapi/strapi';

export interface ParagraphContentParagraphContent extends Schema.Component {
  collectionName: 'components_paragraph_content_paragraph_contents';
  info: {
    displayName: 'Paragraph Content';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
    Content: Attribute.Text & Attribute.Required;
    Pdf: Attribute.Media<'files'>;
    Heading: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'paragraph-content.paragraph-content': ParagraphContentParagraphContent;
    }
  }
}
