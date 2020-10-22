import {block} from "../utils";
import {TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
  constructor(selector, updateModelCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateModelCallback;

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return [block('text'), block('title')].join('');
  }

  add(e) {
    e.preventDefault();

    const type = e.target.name;
    const value = e.target.value.value;
    const styles = e.target.styles.value;

    const newBlock = type === 'text'
      ? new TextBlock(value, {styles})
      : new TitleBlock(value, {styles});

    this.update(newBlock);

    e.target.value.value = '';
    e.target.styles.value = '';
  }
}