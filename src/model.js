import image from './assets/image.jpg';
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks';

export const model = [
  new TitleBlock('Конструктор веб-сайтов', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '1000px',
      height: 'auto'
    },
    alt: 'Картинка блока'
  }),
  new ColumnsBlock(['Element-1', 'Element-2', 'Element-3'], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
  new TextBlock('Ah shit, here we go again', {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  })
];