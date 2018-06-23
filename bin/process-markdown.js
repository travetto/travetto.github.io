#!/usr/bin/env node

const Prism = require('prismjs');
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-css');
require('prismjs/components/prism-scss');
require('prismjs/components/prism-yaml');
require('prismjs/components/prism-properties');
require('prismjs/components/prism-bash');

const mod = process.argv[process.argv.length - 1];

let content = '';
process.stdin.resume();
process.stdin.on('data', b => content += b.toString());
process.stdin.on('end', () => {
  const fixed = content
    .replace(/Travetto:\s*/gi, '')
    .replace(/href="http(s)?:\/\/github[.]com\/travetto\//g, 'class="module-link" routerLink="/docs/')
    .replace(/<code>(@[A-Za-z]+<\/code>)/g, (a, r) => `<code class="decorator">${r}`)
    .replace(/<a\s*href="http(s)?:\/\//g, a => a.replace('<a', '<a class="external-link" target="_blank"'))
    .replace(/<a\s*href=".\/src/g, a => `<a class="source-link" target="_blank" href="https://github.com/travetto/${mod}/tree/master/src`)
    .replace(/#readme/g, '')
    .replace(/(<code class="language-([^"]*)[^>]*>)(.*?)(<\/code>)/gms, (all, tagO, lang, text, tagC) => {
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
        const highlighted = Prism.highlight(text, Prism.languages[lang], lang)
          .replace(/(@\s*<span[^>]*)function("\s*>)/g, (a, pre, post) => `${pre}meta${post}`);
        return `${tagO}${highlighted}${tagC}`;
      } catch (e) {
        console.error(e.stack);
      }
    })
    .replace(/[{}]/g, a => `~~ '${a}' ##`)
    .replace(/~~/g, '{{')
    .replace(/##/g, '}}');
  console.log(fixed);
});