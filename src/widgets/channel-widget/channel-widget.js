import RenderContainer from "./channel-widget_template.js"
import RenderItem from "./channel-item-widget_template.js"
import CallService from "../../services/call-service.js";
import Config from "../../config.js"

export default class ChannelWidget {
    constructor(container) {
        this.channelsUrl = `${Config.channelsEndpoint}?apiKey=${Config.apiKey}`;
        this.positionToPasteChannel = "afterbegin";
        container.innerHTML = RenderContainer();
    }

    setRenderElements(item) {
        this.item = item;
    }   
    
    async bootstrap() {
        const data = await this.loadData();
        this.render(data);       
    }    

    async loadData() {
        const data = await CallService.doGet(this.channelsUrl);
        return data.sources;
    }

    render(data) {
        data.map(element => this.item.innerHTML += RenderItem(element));
    }
}