const fs = require('fs');

fs.writeFileSync('./public/_headers', `/*.svg
  Cache-Control: public, max-age=31536000
/*.png
  Cache-Control: public, max-age=31536000
/*.ttf
  Cache-Control: public, max-age=31536000
/*.js
  Cache-Control: public, max-age=31536000
/*.css
  Cache-Control: public, max-age=31536000
/favicon.ico
  Cache-Control: public, max-age=31536000
`);