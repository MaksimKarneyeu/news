import Router from "./router.js";

try {
    (async () => {
        const widget = Router[window.location.pathname]();
        await widget.bootstrap();
    })();
}
catch (error) {
    alert(error);
}

