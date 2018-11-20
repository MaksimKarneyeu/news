import NewsWidget from "./widgets/news-widget/news-widget.js";
import ChannelWidget from "./widgets/channel-widget/channel-widget.js";

export default {
  '/news/': () => {
    const container = document.querySelector('.container')
    var widget = new ChannelWidget(container);
    const item = document.querySelector('#news-channels');
    widget.setRenderElements(item);
    return widget;
  },
  '/news/': () => {
    const searchParams = new URLSearchParams(window.location.search);
    const container = document.querySelector('.container');
    const widget = new NewsWidget(container, searchParams);
    const elements = {
      item: document.querySelector('#news-items'),
      header: document.querySelector('#news-header')
    };
    widget.setRenderElements(elements);
    return widget;
  }
};