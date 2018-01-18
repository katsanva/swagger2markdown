'use strict';

export const getFilledArray = (length, content) => Array(length).fill(content);

export const pre = string => `\`${string}\``;

export const link = (name, link, options = {target: '_self'}) => {
  const {target} = options;

  if (target === '_self') {
    return `[${name}](${(link || name)})`;
  }

  return `<a href="${link}" target="${target}" title="${name}">${name}</a>`
};

export const italics = string => `_${string}_`;

export const bold = string => `**${string}**`;

export const tr = (...args) => `|${args.join('|')}|`;

export const th = (...args) => [
  tr(...args),
  tr(...getFilledArray(args.length, '---'))
];

export const escape = (string = '') => string.replace(/\r/gi, '<br/>').replace(/\n/gi, '<br/>');

export const table = (header, rows) => header.concat(rows).join('\n');

export const code = (data, type = 'application/json') => [
  `\`\`\`${type.replace(/ /gi, '_')}`,
  JSON.stringify(data, null, 2),
  `\`\`\``
].join('\n');

export const li = string => `* ${string}`;

export const heading = (string, level = 1) => {
  const header = getFilledArray(level, '#').join('');

  return `${header} ${string}`
};