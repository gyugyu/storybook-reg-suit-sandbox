import './styles.scss';

export default { title: 'Button' };

export const withText = () => '<button class="btn">Hello World</button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  button.classList.add('btn');
  return button;
};
