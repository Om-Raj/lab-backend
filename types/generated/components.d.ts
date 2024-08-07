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

export interface MemberResearchItem extends Schema.Component {
  collectionName: 'components_member_research_items';
  info: {
    displayName: 'ResearchItem';
    description: '';
  };
  attributes: {
    research: Attribute.Text;
  };
}

export interface MemberProjectItem extends Schema.Component {
  collectionName: 'components_member_project_items';
  info: {
    displayName: 'ProjectItem';
  };
  attributes: {
    project: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'paragraph-content.paragraph-content': ParagraphContentParagraphContent;
      'member.research-item': MemberResearchItem;
      'member.project-item': MemberProjectItem;
    }
  }
}
