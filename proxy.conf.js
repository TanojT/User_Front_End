const PROXY_CONFIG = {
    "/api": {
      "target": "http://localhost:8082",
      "secure": false,
      "changeOrigin": true,
      "logLevel": "debug"
    }
  };
  
  export default PROXY_CONFIG;