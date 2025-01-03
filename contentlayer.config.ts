import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        author: {
            type: "string",
            description: 'The author of the post',
            required: false
        },
        summary: {
            type: 'string',
            description: 'The summary of the post',
            required: true,
        },
        image: {
            type: 'string',
            description: 'The banner image of the post',
            required: false,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
        },
    },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
})
