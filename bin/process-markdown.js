#!/usr/bin/env node

const marked = require('marked');
const fs = require('fs');

const Prism = require('prismjs');
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-css');
require('prismjs/components/prism-scss');
require('prismjs/components/prism-yaml');
require('prismjs/components/prism-json');
require('prismjs/components/prism-properties');
require('prismjs/components/prism-bash');

const moduleName = process.argv.pop();
const inputMarkdown = process.argv.pop();

function highlight(text, lang) {
  text = text
    .replace(/&#(\d+);/g, (x, code) => String.fromCharCode(code))
    .replace(/&([a-z][^;]*);/g, (a, k) => {
      return {
        gt: '>',
        lt: '<',
        quot: '"',
        apos: "'"
      }[k] || a
    });

  try {
    return Prism.highlight(text, Prism.languages[lang], lang)
      .replace(/(@\s*<span[^>]*)function("\s*>)/g, (a, pre, post) => `${pre}meta${post}`)
  } catch (e) {
    console.error(e.stack);
  }
}

class MyRenderer extends marked.Renderer {
  link(href, title, text) {
    if (title) {
      title = `title="${title}"`;
    }
    if (/^#/.test(href)) {
      return `<a class="anchor-link" routerLink="." (click)="scrollTo('${href.substring(1)}')" fragment="${href.substring(1)}" ${title}>${text}</a>`;
    } else if (/^http(s)?:\/\/github[.]com\/travetto/.test(href)) {
      href = href.split('/travetto/')[1];
      href = href.replace(/#readme/, '');
      href = `/docs/${href}`;
      return `<a class="module-link" routerLink="${href}" ${title}>${text}</a>`;
    } else if (href.startsWith('http')) {
      return `<a class="external-link" href="${href}" target="_blank" ${title}>${text}</a>`;
    } else if (href.startsWith('.')) {
      href = `https://githhub.com/travetto/${moduleName}/tree/master/${href.replace(/^.[/]/ ,'')}`;
      return `<a class="source-link" href="${href}" target="_blank" ${title}>${text}</a>`;
    }
    return super.link(href, title, text);
  }
  codespan(code) {
    if (/^█/.test(code)) {
      return `<code class="inline language-typescript">${code.substring(1)}</code>`
    } else if (/^@[A-Za-z0-9]+$/.test(code)) {
      return `<code class="decorator">${code}</code>`;
    } else if (/^([^/]*\/.*[.].*)|([^/]*\/[^/]*\/.*)$/.test(code)) {
      return `<code class="path">${code}</code>`;
    } else {
      return super.codespan(code);
    }
  }
  code(text, lang, escaped) {
    if (lang) {
      if (lang.includes('-inline')) {
        lang = lang.replace(/-inline/g, '');
        return `<code class="inline language-${lang}">${highlight(text, lang)}</code>`;
      } else {
        return `<pre><code class="language-${lang}">${highlight(text, lang)}</code></pre>`;
      }
    } else {
      return super.code(text, lang, escaped);
    }
  }
}

const opts = {
  gfm: true,
  breaks: true,
  smartypants: true
};

const content = fs.readFileSync(inputMarkdown).toString()
  .replace(/Travetto:\s*/gi, '')
  .replace(/```([^\n]*?)```/g, (a, c) => '`█' + c + '`');

let links = '';

const output = marked(content, { ...opts, renderer: new MyRenderer(opts) })
  .replace(/[{}]/g, a => `{{ '${a}' }}`)
  .replace(/<h[23][^>]+>(Outline|Overview).*?<\/[uo]l>/ms, (a) => {
    links = a;
    return '';
  });
if (links) {
  console.log(`<div class="documentation-links"><div class="inner">${links}</div></div>`);
}
console.log(`<div class="documentation">${output}</div>`);