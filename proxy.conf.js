const PROXY_CONFIG = {
    "/": {
      "target": "http://192.168.254.254:9092",
      "secure": false,
      "changeOrigin": true,
      "logLevel": "debug"
    }
  };
  
  export default PROXY_CONFIG;