import { edit, save } from './components'
const { blocks } = window.wp

blocks.registerBlockType('sandbox-wordpress-gutenberg-blocks/test-block', {
  title: 'Test Block',
  icon: 'format-image',
  category: 'common',
  attributes: {
    text: {
      type: 'string',
      source: 'text',
      selector: 'span.my-text'
    }
  },
  edit,
  save
})
