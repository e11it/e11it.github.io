

To Start
========

```sh
npx create-docusaurus@latest website classic
```

Local dev
=========

```sh
docker run -it --rm --name=docusaurus \
-p 80:80 \
-v $(pwd)/:/docusaurus \
-e TARGET_UID=1000 \
-e TARGET_GID=1000 \
-e AUTO_UPDATE=true \
-e WEBSITE_NAME="website" \
-e TEMPLATE=classic \
awesometic/docusaurus
```

Update
======

```bash
yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
```
