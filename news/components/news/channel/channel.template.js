export function render(channel) {
  return `<a href=\"../news/components/news/news/news.html?name=${channel.name}&id=${channel.id}\" class=\"list-group-item\">
          <b>${channel.name}<b>
          <br>
          <small>${channel.description}</small></a`
};