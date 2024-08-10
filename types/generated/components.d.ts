import type { Schema, Attribute } from '@strapi/strapi';

export interface SmallParagraphTheme extends Schema.Component {
  collectionName: 'components_small_paragraph_themes';
  info: {
    displayName: 'Theme';
    description: '';
  };
  attributes: {
    Theme: Attribute.String;
  };
}

export interface SmallParagraphPapersPublished extends Schema.Component {
  collectionName: 'components_small_paragraph_papers_publisheds';
  info: {
    displayName: 'Papers-Published';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    authors: Attribute.Relation<
      'small-paragraph.papers-published',
      'oneToMany',
      'api::member.member'
    >;
    publishedIn: Attribute.String;
    publishedYear: Attribute.Date;
  };
}

export interface SmallParagraphMembers extends Schema.Component {
  collectionName: 'components_small_paragraph_members';
  info: {
    displayName: 'Members';
  };
  attributes: {
    Members: Attribute.String;
  };
}

export interface ResearchConclusionParaReasearchSummary
  extends Schema.Component {
  collectionName: 'components_research_conclusion_para_reasearch_summaries';
  info: {
    displayName: 'ReasearchSummary';
    description: '';
  };
  attributes: {
    SummaryAim: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ReasearchContentResearchContent extends Schema.Component {
  collectionName: 'components_reasearch_content_research_contents';
  info: {
    displayName: 'ResearchContent';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ReasearchContent: Attribute.Text;
    Link: Attribute.String;
  };
}

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

export interface GalleryGalleryComponent extends Schema.Component {
  collectionName: 'components_gallery_gallery_components';
  info: {
    displayName: 'GalleryComponent';
    icon: 'landscape';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'small-paragraph.theme': SmallParagraphTheme;
      'small-paragraph.papers-published': SmallParagraphPapersPublished;
      'small-paragraph.members': SmallParagraphMembers;
      'research-conclusion-para.reasearch-summary': ResearchConclusionParaReasearchSummary;
      'reasearch-content.research-content': ReasearchContentResearchContent;
      'paragraph-content.paragraph-content': ParagraphContentParagraphContent;
      'member.research-item': MemberResearchItem;
      'member.project-item': MemberProjectItem;
      'gallery.gallery-component': GalleryGalleryComponent;
    }
  }
}
