const productHtmlPath = (name: string) =>
  require("path").resolve(
    __dirname,
    `../temp/${name.replace(/\//g, "-")}.html`
  );

export const loadProductHtml = (name: string) =>
  require("fs").readFileSync(productHtmlPath(name));

export const saveProductHtml = (name: string, html: string) =>
  require("fs").writeFileSync(productHtmlPath(name), html);
