import { makeSource } from 'contentlayer/source-files';
import { Post } from './content/schemas/Post';
 
export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
});