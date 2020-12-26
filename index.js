var symbol;
function getSymbolOnClick(){
    const searchBar = document.getElementById("search_form");
    console.log(searchBar.value);
    symbol = searchBar.value;
    //const iframe = document.getElementById("stocktwits_widget");
    //const width = "600"; //in px
    //const height = "600"; // in px
    //iframe.style = `border: 0px; width: ${width}px; height: ${height}px;`;
    //iframe.src = `//api.stocktwits.com/widgets/stream?width=${width}&amp;height=${height}&amp;domain=127.0.0.1&amp;scrollbars=true&amp;streaming=true&amp;limit=15&amp;title=${symbol}%20On%20StockTwits&amp;symbol=${symbol}&amp;border_color=cecece&amp;box_color=f5f5f5&amp;header_text_color=000000&amp;divider_color=cecece&amp;stream_color=ffffff&amp;divider_type=solid&amp;link_color=4871a8&amp;link_hover_color=4871a8&amp;text_color=000000&amp;time_color=999999"`
    STWT.Widget({container: 'stocktwits-widget-news', symbol: `${symbol}`, width: '300', height: '300', limit: '15', scrollbars: 'true', streaming: 'true', title: `${symbol} Ideas`, style: {link_color: '4871a8', link_hover_color: '4871a8', header_text_color: '000000', border_color: 'cecece', divider_color: 'cecece', divider_color: 'cecece', divider_type: 'solid', box_color: 'f5f5f5', stream_color: 'ffffff', text_color: '000000', time_color: '999999'}});
    new TradingView.widget(
        {
        "width": 980,
        "height": 610,
        "symbol": `${symbol}`,
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview-widget-container"
      }
        );
}

function getSymbol(){
    return symbol;
}