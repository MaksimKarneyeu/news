export default function render() {
    return `<div class="jumbotron">
                <h1>News</h1>
                <p>Here you can find any channel to your taste.</p>
                <button id="show-news-btn" type="button" class="btn btn-default">Show News</button>
            </div>          
            <div class="list-group" id="news-channels">
            </div>
            <div class="panel-footer">Powered by
                <a href="https://newsapi.org/">NewsApi.org</a>
            </div>
            </div>`
};