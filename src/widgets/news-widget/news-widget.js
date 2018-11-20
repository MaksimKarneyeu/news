import RenderContainer from "./news-widget_template.js"
import RenderItem from "./news-item-widget_template.js"
import CallService from "../../services/call-service.js";
import Config from "../../config.js"

export default class NewsWidget {
    constructor(container, searchParams) {      
        this.newsName = searchParams.get("name");
        this.positionToPasteNews = "afterbegin";
        this.newsUri = `${Config.newsEndpoint}?sources=${searchParams.get("id")}
        &apiKey=${Config.apiKey}&pagesize=${Config.pageSize}&page=${Config.page}`;
        container.innerHTML = RenderContainer();
    } 

    setRenderElements(elements) {
        this.item = elements.item;
        this.header = elements.header;
    }

    async bootstrap() {
        const data = await this.loadData();
        this.render(data);
    }

    async loadData() {
        const data = await CallService.doGet(this.newsUrl);
        return data.articles.sort((first, second) => second.title.localeCompare(first.title));
    }

    render(data) {
        this.container.innerHTML = RenderContainer();
        data.map(item => this.item.innerHTML += RenderItem(item));
        this.header.innerHTML = this.newsName;
    }
}