import { render } from "./channel.template.js"
import Config from "../../configs/config.js"

const channelsUrl = `${Config.channelsEndpoint}?apiKey=${Config.apiKey}`;
const newsChannelsId = "news-channels";
const positionToPasteChannel = "afterbegin";

fetch(channelsUrl)
    .then(data => {
        let newsChannel = document.getElementById(newsChannelsId);

        data.sources.sort((first, second) => second.name.localeCompare(first.name)).map(channel =>
            newsChannel.insertAdjacentHTML(positionToPasteChannel, render(channel)))
    })
    .catch(error => { alert(error) });