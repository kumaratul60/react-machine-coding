const explorer = {
    name: "root",
    isFolder: true,
    item: [
      {
        name: "public",
        isFolder: true,
        item: [
          {
            name: "public nested",
            isFolder: true,
            item: [
              {
                name: "index.html",
                isFolder: false
              },
              {
                name: "helo.html",
                isFolder: false
              }
            ]
          },
          {
            name: "public nested",
            isFolder: false
          }
        ]
      },
      {
        name: "src",
        isFolder: true,
        item: [
          {
            name: "app.js",
            isFolder: false
          },
          {
            name: "index.js",
            isFolder: false
          },
          {
            name: "style.css",
            isFolder: false
          }
        ]
      },
      {
        name: "package.json",
        isFolder: false
      }
    ]
  };
  
  export default explorer;
  