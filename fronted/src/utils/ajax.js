export const postRequest_v2 = (url, data, callback) => {
    let formData = new FormData();
    for (let p in data){
        if(data.hasOwnProperty(p)){
            formData.append(p, data[p]);
        }
    }

    let opts = {
        method: "POST",
        header:{"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
        body: formData,
    };
    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
           console.log(error);
        });
};

export const postRequest = (url,callback) => {

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};