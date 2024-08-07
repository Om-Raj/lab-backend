import type { Schema, Attribute } from '@strapi/strapi';

export interface SmallParagraphPapersPublished extends Schema.Component {
  collectionName: 'components_small_paragraph_papers_publisheds';
  info: {
    displayName: 'Papers-Published';
  };
  attributes: {
    SmallPara: Attribute.Text;
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
      'small-paragraph.papers-published': SmallParagraphPapersPublished;
      'small-paragraph.members': SmallParagraphMembers;
      'research-conclusion-para.reasearch-summary': ResearchConclusionParaReasearchSummary;
      'paragraph-content.paragraph-content': ParagraphContentParagraphContent;
      'member.research-item': MemberResearchItem;
      'member.project-item': MemberProjectItem;
    }
  }
}
