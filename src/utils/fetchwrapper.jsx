

export const usefetchwrapper=()=>{

    return {
        get: request("GET"),
        post: request("POST"),
        put: request("PUT"),
        delete: request("DELETE")
      };
    function request(method) {
        return (url, body, additionalHeaders, isJSON = true) => {

            const requestOptions = {
                method,
                headers: {},
            };

            if (body) {
                if (isJSON) {
                    requestOptions.headers["Content-Type"] = "application/json";
                    requestOptions.body = JSON.stringify(body);
                } else {
                    requestOptions.body = body;
                }
            }

            if (additionalHeaders) {
                for (const [key, value] of additionalHeaders) {
                    requestOptions.headers[key] = value;
                }
            }

            let fullUrl = `http://localhost:8080${url}`; 

            //console.log(fullUrl,requestOptions);
            return fetch(fullUrl, requestOptions).then(handleResponse);
        };


    }
    function handleResponse(response) {
        return response.text().then((res) => {
          let data;
          if (response.headers.get("content-type") === "application/json") {
            data = res && JSON.parse(res);
          } else {
            data = res;
          }
    
          if (!response.ok) {
            const errorMessage =
              (data && (data.message || data.detail)) || response.statusText;
    
            const error = {
              error_code: data?.error_code,
              message: errorMessage,
              data,
            };
    
            console.error(error);
            return Promise.reject(error);
          }
          return data;
        });
      }
}

