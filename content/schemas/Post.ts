import { defineDocumentType } from 'contentlayer/source-files';
 
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: post => post._raw.sourceFileName.replace('.mdx', ''),
    },
  },
}));