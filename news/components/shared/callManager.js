export default class CallManager {
    static doGet(url, successfulAction, unsuccessfulAction) {
        fetch(url).then((response) => {
            return response.json();
        })
            .then((data) => {
                return successfulAction(data);
            }).catch((error) => {
                return unsuccessfulAction(error);
            });
    }
}