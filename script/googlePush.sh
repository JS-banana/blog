# <!-- Global site tag (gtag.js) - Google Analytics -->
# <script async src="https://www.googletagmanager.com/gtag/js?id=G-SCDEY8WH2K"></script>
# <script>
#   window.dataLayer = window.dataLayer || [];
#   function gtag(){dataLayer.push(arguments);}
#   gtag('js', new Date());

#   gtag('config', 'G-SCDEY8WH2K');
# </script>

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 谷歌鏈接推送
curl http://www.google.com/ping?sitemap=https://ssscode.com/sitemap.xml

