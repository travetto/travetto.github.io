#!/usr/bin/env node

const hljs = require('highlight.js');

let content = '';
process.stdin.resume();
process.stdin.on('data', b => content += b.toString());
process.stdin.on('end', () => {
  const fixed = content.replace(/(<code class="lang-([^"]*)[^>]*>)(.*?)(<\/code>)/gms, (all, tagO, lang, text, tagC) => {
    text = text.replace(/&#(\d+);/g, (x, code) => String.fromCharCode(code));
    console.error(lang, text);
    const highlighted = hljs.highlight(lang, text).value.replace(/hljs-/g, 'sx-');
    return `${tagO}${highlighted}${tagC}`;
  });

  console.log(fixed);
});