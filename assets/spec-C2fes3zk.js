var we=Object.defineProperty;var xe=(t,e,n)=>e in t?we(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>xe(t,typeof e!="symbol"?e+"":e,n);import{j as S,N as Te,c as Se,r as ve}from"./styles-A7n-8vfn.js";function Y(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var C=Y();function le(t){C=t}var I={exec:()=>null};function d(t,e=""){let n=typeof t=="string"?t:t.source;const i={replace:(r,a)=>{let c=typeof a=="string"?a:a.source;return c=c.replace(y.caret,"$1"),n=n.replace(r,c),i},getRegex:()=>new RegExp(n,e)};return i}var y={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},Ce=/^(?:[ \t]*(?:\n|$))+/,Re=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ze=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,D=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ae=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,F=/(?:[*+-]|\d{1,9}[.)])/,ce=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,he=d(ce).replace(/bull/g,F).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ie=d(ce).replace(/bull/g,F).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),j=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,De=/^[^\n]+/,H=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Me=d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",H).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ze=d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,F).getRegex(),U="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Q=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,$e=d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Q).replace("tag",U).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),pe=d(j).replace("hr",D).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",U).getRegex(),Le=d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",pe).getRegex(),W={blockquote:Le,code:Re,def:Me,fences:ze,heading:Ae,hr:D,html:$e,lheading:he,list:Ze,newline:Ce,paragraph:pe,table:I,text:De},ie=d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",D).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",U).getRegex(),_e={...W,lheading:Ie,table:ie,paragraph:d(j).replace("hr",D).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ie).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",U).getRegex()},Ue={...W,html:d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Q).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:I,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:d(j).replace("hr",D).replace("heading",` *#{1,6} *[^
]`).replace("lheading",he).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Pe=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ee=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ue=/^( {2,}|\\)\n(?!\s*$)/,Ge=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,P=/[\p{P}\p{S}]/u,X=/[\s\p{P}\p{S}]/u,de=/[^\s\p{P}\p{S}]/u,Be=d(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,X).getRegex(),ge=/(?!~)[\p{P}\p{S}]/u,Oe=/(?!~)[\s\p{P}\p{S}]/u,Ne=/(?:[^\s\p{P}\p{S}]|~)/u,qe=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,fe=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ye=d(fe,"u").replace(/punct/g,P).getRegex(),Fe=d(fe,"u").replace(/punct/g,ge).getRegex(),me="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",je=d(me,"gu").replace(/notPunctSpace/g,de).replace(/punctSpace/g,X).replace(/punct/g,P).getRegex(),He=d(me,"gu").replace(/notPunctSpace/g,Ne).replace(/punctSpace/g,Oe).replace(/punct/g,ge).getRegex(),Qe=d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,de).replace(/punctSpace/g,X).replace(/punct/g,P).getRegex(),We=d(/\\(punct)/,"gu").replace(/punct/g,P).getRegex(),Xe=d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Je=d(Q).replace("(?:-->|$)","-->").getRegex(),Ke=d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Je).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),$=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ve=d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",$).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ke=d(/^!?\[(label)\]\[(ref)\]/).replace("label",$).replace("ref",H).getRegex(),ye=d(/^!?\[(ref)\](?:\[\])?/).replace("ref",H).getRegex(),en=d("reflink|nolink(?!\\()","g").replace("reflink",ke).replace("nolink",ye).getRegex(),J={_backpedal:I,anyPunctuation:We,autolink:Xe,blockSkip:qe,br:ue,code:Ee,del:I,emStrongLDelim:Ye,emStrongRDelimAst:je,emStrongRDelimUnd:Qe,escape:Pe,link:Ve,nolink:ye,punctuation:Be,reflink:ke,reflinkSearch:en,tag:Ke,text:Ge,url:I},nn={...J,link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",$).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",$).getRegex()},O={...J,emStrongRDelimAst:He,emStrongLDelim:Fe,url:d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},tn={...O,br:d(ue).replace("{2,}","*").getRegex(),text:d(O.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},M={normal:W,gfm:_e,pedantic:Ue},z={normal:J,gfm:O,breaks:tn,pedantic:nn},rn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},re=t=>rn[t];function w(t,e){if(e){if(y.escapeTest.test(t))return t.replace(y.escapeReplace,re)}else if(y.escapeTestNoEncode.test(t))return t.replace(y.escapeReplaceNoEncode,re);return t}function ae(t){try{t=encodeURI(t).replace(y.percentDecode,"%")}catch{return null}return t}function se(t,e){var a;const n=t.replace(y.findPipe,(c,s,h)=>{let o=!1,l=s;for(;--l>=0&&h[l]==="\\";)o=!o;return o?"|":" |"}),i=n.split(y.splitPipe);let r=0;if(i[0].trim()||i.shift(),i.length>0&&!((a=i.at(-1))!=null&&a.trim())&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(y.slashPipe,"|");return i}function A(t,e,n){const i=t.length;if(i===0)return"";let r=0;for(;r<i&&t.charAt(i-r-1)===e;)r++;return t.slice(0,i-r)}function an(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return n>0?-2:-1}function oe(t,e,n,i,r){const a=e.href,c=e.title||null,s=t[1].replace(r.other.outputLinkReplace,"$1");i.state.inLink=!0;const h={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:a,title:c,text:s,tokens:i.inlineTokens(s)};return i.state.inLink=!1,h}function sn(t,e,n){const i=t.match(n.other.indentCodeCompensation);if(i===null)return e;const r=i[1];return e.split(`
`).map(a=>{const c=a.match(n.other.beginningSpace);if(c===null)return a;const[s]=c;return s.length>=r.length?a.slice(r.length):a}).join(`
`)}var L=class{constructor(t){f(this,"options");f(this,"rules");f(this,"lexer");this.options=t||C}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:A(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],i=sn(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){const i=A(n,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(n=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:A(e[0],`
`)}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=A(e[0],`
`).split(`
`),i="",r="";const a=[];for(;n.length>0;){let c=!1;const s=[];let h;for(h=0;h<n.length;h++)if(this.rules.other.blockquoteStart.test(n[h]))s.push(n[h]),c=!0;else if(!c)s.push(n[h]);else break;n=n.slice(h);const o=s.join(`
`),l=o.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${o}`:o,r=r?`${r}
${l}`:l;const m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(l,a,!0),this.lexer.state.top=m,n.length===0)break;const p=a.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){const k=p,g=k.raw+`
`+n.join(`
`),b=this.blockquote(g);a[a.length-1]=b,i=i.substring(0,i.length-k.raw.length)+b.raw,r=r.substring(0,r.length-k.text.length)+b.text;break}else if((p==null?void 0:p.type)==="list"){const k=p,g=k.raw+`
`+n.join(`
`),b=this.list(g);a[a.length-1]=b,i=i.substring(0,i.length-p.raw.length)+b.raw,r=r.substring(0,r.length-k.raw.length)+b.raw,n=g.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:r}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const i=n.length>1,r={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const a=this.rules.other.listItemRegex(n);let c=!1;for(;t;){let h=!1,o="",l="";if(!(e=a.exec(t))||this.rules.block.hr.test(t))break;o=e[0],t=t.substring(o.length);let m=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,E=>" ".repeat(3*E.length)),p=t.split(`
`,1)[0],k=!m.trim(),g=0;if(this.options.pedantic?(g=2,l=m.trimStart()):k?g=e[1].length+1:(g=e[2].search(this.rules.other.nonSpaceChar),g=g>4?1:g,l=m.slice(g),g+=e[1].length),k&&this.rules.other.blankLine.test(p)&&(o+=p+`
`,t=t.substring(p.length+1),h=!0),!h){const E=this.rules.other.nextBulletRegex(g),ee=this.rules.other.hrRegex(g),ne=this.rules.other.fencesBeginRegex(g),te=this.rules.other.headingBeginRegex(g),be=this.rules.other.htmlBeginRegex(g);for(;t;){const G=t.split(`
`,1)[0];let R;if(p=G,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),R=p):R=p.replace(this.rules.other.tabCharGlobal,"    "),ne.test(p)||te.test(p)||be.test(p)||E.test(p)||ee.test(p))break;if(R.search(this.rules.other.nonSpaceChar)>=g||!p.trim())l+=`
`+R.slice(g);else{if(k||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ne.test(m)||te.test(m)||ee.test(m))break;l+=`
`+p}!k&&!p.trim()&&(k=!0),o+=G+`
`,t=t.substring(G.length+1),m=R.slice(g)}}r.loose||(c?r.loose=!0:this.rules.other.doubleBlankLine.test(o)&&(c=!0));let b=null,V;this.options.gfm&&(b=this.rules.other.listIsTask.exec(l),b&&(V=b[0]!=="[ ] ",l=l.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:o,task:!!b,checked:V,loose:!1,text:l,tokens:[]}),r.raw+=o}const s=r.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let h=0;h<r.items.length;h++)if(this.lexer.state.top=!1,r.items[h].tokens=this.lexer.blockTokens(r.items[h].text,[]),!r.loose){const o=r.items[h].tokens.filter(m=>m.type==="space"),l=o.length>0&&o.some(m=>this.rules.other.anyLine.test(m.raw));r.loose=l}if(r.loose)for(let h=0;h<r.items.length;h++)r.items[h].loose=!0;return r}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:i,title:r}}}table(t){var c;const e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const n=se(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(c=e[3])!=null&&c.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===i.length){for(const s of i)this.rules.other.tableAlignRight.test(s)?a.align.push("right"):this.rules.other.tableAlignCenter.test(s)?a.align.push("center"):this.rules.other.tableAlignLeft.test(s)?a.align.push("left"):a.align.push(null);for(let s=0;s<n.length;s++)a.header.push({text:n[s],tokens:this.lexer.inline(n[s]),header:!0,align:a.align[s]});for(const s of r)a.rows.push(se(s,a.header.length).map((h,o)=>({text:h,tokens:this.lexer.inline(h),header:!1,align:a.align[o]})));return a}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const a=A(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{const a=an(e[2],"()");if(a===-2)return;if(a>-1){const s=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,s).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){const a=this.rules.other.pedanticHrefTitle.exec(i);a&&(i=a[1],r=a[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?i=i.slice(1):i=i.slice(1,-1)),oe(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const i=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[i.toLowerCase()];if(!r){const a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return oe(n,r,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let i=this.rules.inline.emStrongLDelim.exec(t);if(!i||i[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const a=[...i[0]].length-1;let c,s,h=a,o=0;const l=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,e=e.slice(-1*t.length+a);(i=l.exec(e))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(s=[...c].length,i[3]||i[4]){h+=s;continue}else if((i[5]||i[6])&&a%3&&!((a+s)%3)){o+=s;continue}if(h-=s,h>0)continue;s=Math.min(s,s+h+o);const m=[...i[0]][0].length,p=t.slice(0,a+i.index+m+s);if(Math.min(a,s)%2){const g=p.slice(1,-1);return{type:"em",raw:p,text:g,tokens:this.lexer.inlineTokens(g)}}const k=p.slice(2,-2);return{type:"strong",raw:p,text:k,tokens:this.lexer.inlineTokens(k)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," ");const i=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return i&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,i;return e[2]==="@"?(n=e[1],i="mailto:"+n):(n=e[1],i=n),{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let i,r;if(e[2]==="@")i=e[0],r="mailto:"+i;else{let a;do a=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(a!==e[0]);i=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){const n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},x=class N{constructor(e){f(this,"tokens");f(this,"options");f(this,"state");f(this,"tokenizer");f(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||C,this.options.tokenizer=this.options.tokenizer||new L,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:y,block:M.normal,inline:z.normal};this.options.pedantic?(n.block=M.pedantic,n.inline=z.pedantic):this.options.gfm&&(n.block=M.gfm,this.options.breaks?n.inline=z.breaks:n.inline=z.gfm),this.tokenizer.rules=n}static get rules(){return{block:M,inline:z}}static lex(e,n){return new N(n).lex(e)}static lexInline(e,n){return new N(n).inlineTokens(e)}lex(e){e=e.replace(y.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],i=!1){var r,a,c;for(this.options.pedantic&&(e=e.replace(y.tabCharGlobal,"    ").replace(y.spaceLine,""));e;){let s;if((a=(r=this.options.extensions)==null?void 0:r.block)!=null&&a.some(o=>(s=o.call({lexer:this},e,n))?(e=e.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);const o=n.at(-1);s.raw.length===1&&o!==void 0?o.raw+=`
`:n.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);const o=n.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.at(-1).src=o.text):n.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);const o=n.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),n.push(s);continue}let h=e;if((c=this.options.extensions)!=null&&c.startBlock){let o=1/0;const l=e.slice(1);let m;this.options.extensions.startBlock.forEach(p=>{m=p.call({lexer:this},l),typeof m=="number"&&m>=0&&(o=Math.min(o,m))}),o<1/0&&o>=0&&(h=e.substring(0,o+1))}if(this.state.top&&(s=this.tokenizer.paragraph(h))){const o=n.at(-1);i&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(s),i=h.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);const o=n.at(-1);(o==null?void 0:o.type)==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(s);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var s,h,o;let i=e,r=null;if(this.tokens.links){const l=Object.keys(this.tokens.links);if(l.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)l.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let a=!1,c="";for(;e;){a||(c=""),a=!1;let l;if((h=(s=this.options.extensions)==null?void 0:s.inline)!=null&&h.some(p=>(l=p.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length);const p=n.at(-1);l.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=l.raw,p.text+=l.text):n.push(l);continue}if(l=this.tokenizer.emStrong(e,i,c)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.del(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.autolink(e)){e=e.substring(l.raw.length),n.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e))){e=e.substring(l.raw.length),n.push(l);continue}let m=e;if((o=this.options.extensions)!=null&&o.startInline){let p=1/0;const k=e.slice(1);let g;this.options.extensions.startInline.forEach(b=>{g=b.call({lexer:this},k),typeof g=="number"&&g>=0&&(p=Math.min(p,g))}),p<1/0&&p>=0&&(m=e.substring(0,p+1))}if(l=this.tokenizer.inlineText(m)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(c=l.raw.slice(-1)),a=!0;const p=n.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=l.raw,p.text+=l.text):n.push(l);continue}if(e){const p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},_=class{constructor(t){f(this,"options");f(this,"parser");this.options=t||C}space(t){return""}code({text:t,lang:e,escaped:n}){var a;const i=(a=(e||"").match(y.notSpaceStart))==null?void 0:a[0],r=t.replace(y.endingNewline,"")+`
`;return i?'<pre><code class="language-'+w(i)+'">'+(n?r:w(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:w(r,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){const e=t.ordered,n=t.start;let i="";for(let c=0;c<t.items.length;c++){const s=t.items[c];i+=this.listitem(s)}const r=e?"ol":"ul",a=e&&n!==1?' start="'+n+'"':"";return"<"+r+a+`>
`+i+"</"+r+`>
`}listitem(t){var n;let e="";if(t.task){const i=this.checkbox({checked:!!t.checked});t.loose?((n=t.tokens[0])==null?void 0:n.type)==="paragraph"?(t.tokens[0].text=i+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=i+" "+w(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:i+" ",text:i+" ",escaped:!0}):e+=i+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let r=0;r<t.header.length;r++)n+=this.tablecell(t.header[r]);e+=this.tablerow({text:n});let i="";for(let r=0;r<t.rows.length;r++){const a=t.rows[r];n="";for(let c=0;c<a.length;c++)n+=this.tablecell(a[c]);i+=this.tablerow({text:n})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+i+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${w(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){const i=this.parser.parseInline(n),r=ae(t);if(r===null)return i;t=r;let a='<a href="'+t+'"';return e&&(a+=' title="'+w(e)+'"'),a+=">"+i+"</a>",a}image({href:t,title:e,text:n,tokens:i}){i&&(n=this.parser.parseInline(i,this.parser.textRenderer));const r=ae(t);if(r===null)return w(n);t=r;let a=`<img src="${t}" alt="${n}"`;return e&&(a+=` title="${w(e)}"`),a+=">",a}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:w(t.text)}},K=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},T=class q{constructor(e){f(this,"options");f(this,"renderer");f(this,"textRenderer");this.options=e||C,this.options.renderer=this.options.renderer||new _,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new K}static parse(e,n){return new q(n).parse(e)}static parseInline(e,n){return new q(n).parseInline(e)}parse(e,n=!0){var r,a;let i="";for(let c=0;c<e.length;c++){const s=e[c];if((a=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&a[s.type]){const o=s,l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){i+=l||"";continue}}const h=s;switch(h.type){case"space":{i+=this.renderer.space(h);continue}case"hr":{i+=this.renderer.hr(h);continue}case"heading":{i+=this.renderer.heading(h);continue}case"code":{i+=this.renderer.code(h);continue}case"table":{i+=this.renderer.table(h);continue}case"blockquote":{i+=this.renderer.blockquote(h);continue}case"list":{i+=this.renderer.list(h);continue}case"html":{i+=this.renderer.html(h);continue}case"paragraph":{i+=this.renderer.paragraph(h);continue}case"text":{let o=h,l=this.renderer.text(o);for(;c+1<e.length&&e[c+1].type==="text";)o=e[++c],l+=`
`+this.renderer.text(o);n?i+=this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):i+=l;continue}default:{const o='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}parseInline(e,n=this.renderer){var r,a;let i="";for(let c=0;c<e.length;c++){const s=e[c];if((a=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&a[s.type]){const o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=o||"";continue}}const h=s;switch(h.type){case"escape":{i+=n.text(h);break}case"html":{i+=n.html(h);break}case"link":{i+=n.link(h);break}case"image":{i+=n.image(h);break}case"strong":{i+=n.strong(h);break}case"em":{i+=n.em(h);break}case"codespan":{i+=n.codespan(h);break}case"br":{i+=n.br(h);break}case"del":{i+=n.del(h);break}case"text":{i+=n.text(h);break}default:{const o='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}},B,Z=(B=class{constructor(t){f(this,"options");f(this,"block");this.options=t||C}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?x.lex:x.lexInline}provideParser(){return this.block?T.parse:T.parseInline}},f(B,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),B),on=class{constructor(...t){f(this,"defaults",Y());f(this,"options",this.setOptions);f(this,"parse",this.parseMarkdown(!0));f(this,"parseInline",this.parseMarkdown(!1));f(this,"Parser",T);f(this,"Renderer",_);f(this,"TextRenderer",K);f(this,"Lexer",x);f(this,"Tokenizer",L);f(this,"Hooks",Z);this.use(...t)}walkTokens(t,e){var i,r;let n=[];for(const a of t)switch(n=n.concat(e.call(this,a)),a.type){case"table":{const c=a;for(const s of c.header)n=n.concat(this.walkTokens(s.tokens,e));for(const s of c.rows)for(const h of s)n=n.concat(this.walkTokens(h.tokens,e));break}case"list":{const c=a;n=n.concat(this.walkTokens(c.items,e));break}default:{const c=a;(r=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&r[c.type]?this.defaults.extensions.childTokens[c.type].forEach(s=>{const h=c[s].flat(1/0);n=n.concat(this.walkTokens(h,e))}):c.tokens&&(n=n.concat(this.walkTokens(c.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const a=e.renderers[r.name];a?e.renderers[r.name]=function(...c){let s=r.renderer.apply(this,c);return s===!1&&(s=a.apply(this,c)),s}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=e[r.level];a?a.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),n.renderer){const r=this.defaults.renderer||new _(this.defaults);for(const a in n.renderer){if(!(a in r))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,s=n.renderer[c],h=r[c];r[c]=(...o)=>{let l=s.apply(r,o);return l===!1&&(l=h.apply(r,o)),l||""}}i.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new L(this.defaults);for(const a in n.tokenizer){if(!(a in r))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,s=n.tokenizer[c],h=r[c];r[c]=(...o)=>{let l=s.apply(r,o);return l===!1&&(l=h.apply(r,o)),l}}i.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new Z;for(const a in n.hooks){if(!(a in r))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,s=n.hooks[c],h=r[c];Z.passThroughHooks.has(a)?r[c]=o=>{if(this.defaults.async)return Promise.resolve(s.call(r,o)).then(m=>h.call(r,m));const l=s.call(r,o);return h.call(r,l)}:r[c]=(...o)=>{let l=s.apply(r,o);return l===!1&&(l=h.apply(r,o)),l}}i.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,a=n.walkTokens;i.walkTokens=function(c){let s=[];return s.push(a.call(this,c)),r&&(s=s.concat(r.call(this,c))),s}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return x.lex(t,e??this.defaults)}parser(t,e){return T.parse(t,e??this.defaults)}parseMarkdown(t){return(n,i)=>{const r={...i},a={...this.defaults,...r},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&r.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=t);const s=a.hooks?a.hooks.provideLexer():t?x.lex:x.lexInline,h=a.hooks?a.hooks.provideParser():t?T.parse:T.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(n):n).then(o=>s(o,a)).then(o=>a.hooks?a.hooks.processAllTokens(o):o).then(o=>a.walkTokens?Promise.all(this.walkTokens(o,a.walkTokens)).then(()=>o):o).then(o=>h(o,a)).then(o=>a.hooks?a.hooks.postprocess(o):o).catch(c);try{a.hooks&&(n=a.hooks.preprocess(n));let o=s(n,a);a.hooks&&(o=a.hooks.processAllTokens(o)),a.walkTokens&&this.walkTokens(o,a.walkTokens);let l=h(o,a);return a.hooks&&(l=a.hooks.postprocess(l)),l}catch(o){return c(o)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const i="<p>An error occurred:</p><pre>"+w(n.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(n);throw n}}},v=new on;function u(t,e){return v.parse(t,e)}u.options=u.setOptions=function(t){return v.setOptions(t),u.defaults=v.defaults,le(u.defaults),u};u.getDefaults=Y;u.defaults=C;u.use=function(...t){return v.use(...t),u.defaults=v.defaults,le(u.defaults),u};u.walkTokens=function(t,e){return v.walkTokens(t,e)};u.parseInline=v.parseInline;u.Parser=T;u.parser=T.parse;u.Renderer=_;u.TextRenderer=K;u.Lexer=x;u.lexer=x.lex;u.Tokenizer=L;u.Hooks=Z;u.parse=u;u.options;u.setOptions;u.use;u.walkTokens;u.parseInline;T.parse;x.lex;const ln=`# Chron Time

Draft specification. 2026-08-30.

Designer: Randall Knutson.

## Abstract

This document specifies Chron Time, a representation of calendar date and time of day. Chron Time keeps the Gregorian year and leap rule, writes the year as 26 fortnights plus Year Day and Leap Day, divides the day into 1000 chrons, and uses a longitude zone that adds toward GMT. A Chron zone is fixed by geography. Civil time zones, daylight saving, and other government clock laws do not change it.

## Conventions

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.

The grammars in §5 use the ABNF notation of [RFC5234].

In this document, GMT means UTC on the POSIX scale of §3.3.

This document describes three profiles:

- **Presentation:** for people. Day padding MAY be dropped (\`R4\`). On an instant or time-only string, the zone MAY be omitted when the local meridian is understood.
- **Interchange:** for storage and transmission. Year is four digits, day is two digits (\`R04\`), time is three digits before any decimal point. An instant or time-only string MUST include a zone or \`Z\`. A date-only string MUST NOT include a time or zone.
- **Canonical:** an interchange string reduced to GMT, rounded per §5.5, and written with \`Z\` (instants and time-only) or as a padded date (date-only). Two values of the same kind are equal if and only if their canonical strings are identical.

---

## 1. Purpose

Chron Time keeps the Gregorian year number and leap rule, then replaces months, weeks, the 24-hour clock, and civil time-zone signs with:

- 26 fortnights of 14 days
- 13 months of two fortnights each
- 1000 chrons in a day
- longitude zones whose sign adds toward GMT

The aim is a date and time that can be added in one equation and divided by tens.

---

## 2. Calendar

### 2.1 Year

The year number MUST be the Gregorian year of the corresponding UTC date.

Leap years MUST follow the Gregorian rule: a year is a leap year if it is divisible by 4, except century years, which are leap years only if divisible by 400.

### 2.2 Fortnights

A common year has 26 fortnights plus one Year Day. A leap year has those plus one Leap Day.

Each fortnight MUST contain exactly 14 days and MUST be labeled with one letter \`A\`–\`Z\` in order.

| Fort | Days of year |
|------|----------------|
| A | 1–14 |
| B | 15–28 |
| C | 29–42 |
| … | … |
| Z | 351–364 |

Day-of-year \`d\` (1–364) converts as:

- fortnight index \`floor((d - 1) / 14)\` maps \`0\` → \`A\` … \`25\` → \`Z\`
- day-in-fort \`d % 14\`, or \`14\` when that remainder is \`0\`

### 2.3 Months

Each month MUST be exactly two consecutive fortnights (28 days). There are 13 such months.

| Month | Forts | Days of year |
|-------|--------|----------------|
| 1 | AB | 1–28 |
| 2 | CD | 29–56 |
| 3 | EF | 57–84 |
| 4 | GH | 85–112 |
| 5 | IJ | 113–140 |
| 6 | KL | 141–168 |
| 7 | MN | 169–196 |
| 8 | OP | 197–224 |
| 9 | QR | 225–252 |
| 10 | ST | 253–280 |
| 11 | UV | 281–308 |
| 12 | WX | 309–336 |
| 13 | YZ | 337–364 |

The written date uses the fortnight letter, not a month number. Month names are not required by this spec.

### 2.4 Alignment with Gregorian dates

For the current revision, day 1 of fortnight A (\`A01\`, presentation \`A1\`) MUST be 1 January of that Gregorian year.

The weekday of \`A01\` therefore drifts from year to year. A later revision MAY reform the calendar so that 1 January is always Monday. That reform is a goal, not a rule of this draft.

### 2.5 Year Day and Leap Day

**Year Day** is day 365. It MUST NOT belong to a fortnight, month, or week. It MUST be written \`YD\` in the fortnight-and-day slot.

**Leap Day** is day 366. It exists only in a leap year. It MUST NOT belong to a fortnight, month, or week. It MUST be written \`LD\` in the fortnight-and-day slot. A string that uses \`LD\` in a common year is invalid.

Both sit after \`Z14\`.

| Kind of year | Day 364 | Day 365 | Day 366 |
|--------------|---------|---------|---------|
| Common | \`Z14\` (30 December) | \`YD\` (31 December) | — |
| Leap | \`Z14\` (29 December) | \`YD\` (30 December) | \`LD\` (31 December) |

February 29 of the Gregorian calendar is an ordinary Chron day (for example \`2020E04\`). It is not Leap Day.

### 2.6 Weeks

Each fortnight is two 7-day weeks: days 01–07 and days 08–14 of that fortnight.

Those weeks are not Monday-aligned while \`A01\` is 1 January. Year Day and Leap Day are not part of any week.

---

## 3. Time of day

### 3.1 The chron

A day is divided into 1000 **chrons**.

The universal day starts at midnight UTC. Chron \`000\` is that midnight. Chron \`500\` is noon UTC. Chron \`999\` is 86.4 POSIX seconds before the next midnight.

\`\`\`
1 chron  = 0.001 day = 86.4 seconds = 1.44 minutes
10 chrons = 0.01 day = 14.4 minutes   (one centiday)
100 chrons = 0.1 day = 2.4 hours      (one deciday)
0.001 chron = 0.000001 day = 0.0864 seconds  (one microday)
\`\`\`

Those second counts are 86400 / 1000 POSIX seconds (§3.3), not a count of SI seconds on a leap-second day.

Time MAY be written with a decimal fraction of a chron. Interchange MAY use up to 12 fractional digits. Canonical form uses the quantum in §5.5.

### 3.2 Stored value

Implementations SHOULD store time of day as a real number of chrons in the half-open range \`[0, 1000)\`, or as the equivalent day fraction \`[0, 1)\`.

### 3.3 Leap seconds

A Chron day is the UTC calendar date. It always contains exactly 1000 chrons, from 00:00:00 UTC inclusive to the next 00:00:00 exclusive.

Chron Time uses the POSIX time scale: each day is treated as 86400 seconds. A leap second is not a distinct Chron instant. The [RFC3339] second \`23:59:60\` MUST be mapped to chron \`999\` of that UTC date. It MUST NOT be mapped to \`000\` of the next day.

Example: \`2016-12-31T23:59:60Z\` is \`2016LD:999Z\`.

### 3.4 Duration

A duration is a span, not an instant, date, or time of day. It MUST NOT be written as a Chron date string.

A duration is a count of chrons, or of whole Chron days plus leftover chrons. Adding a duration to an instant MUST carry through fortnights, \`YD\`, and \`LD\` using §2.

\`\`\`
50c        = 50 chrons = 0.050 day
0.050d     = 50 chrons
3d         = 3000 chrons
3d200c     = 3200 chrons
\`\`\`

The canonical duration is a single number of chrons, rounded per §5.5, with a \`c\` suffix. \`50c\` and \`0.050d\` are the same duration. Negative spans MAY be written with a leading minus (\`-50c\`).

---

## 4. Zones

### 4.1 Longitude

A zone is a longitude band. It is a property of the meridian, not of a government.

Civil time zones, daylight-saving rules, and other clock laws MUST NOT be used as a Chron zone. A place does not change zone when a legislature moves a clock or draws a time-zone boundary. Two places share a zone only when they share a longitude band.

| Precision | Width | Chrons | Fraction of a day |
|-----------|--------|--------|-------------------|
| Zone | 36° | 100 | 0.1 |
| Decizone | 3.6° | 10 | 0.01 |
| Chron of longitude | 0.36° | 1 | 0.001 |

Finer subdivisions MAY be used. Zone 0 covers longitude \`0°\` up to but not including \`36°\` east when the coarse 36° grid is in use.

Implementations that use chron-resolution zones MUST take

\`\`\`
zone = round(longitude_west_degrees / 0.36)
\`\`\`

so that west is positive, matching §4.2. East longitudes are negative west degrees.

If that value is \`-500\` or \`+500\` (the 180th meridian), the written numeric zone MUST be \`+500\`. Implementations MUST NOT emit \`-500\`.

Examples at chron resolution: Greenwich is \`+000\` / \`Z\`. Carrollton, Texas (about 96.9°W) is \`+269\`. Chicago (about 87.6°W) is \`+243\`. Prague (about 14.4°E) is \`-040\`. The 180th meridian is \`+500\`.

A civil offset such as CDT (\`−05:00\`, 208 chrons) is not a Chron zone. Implementations MAY convert to or from civil time for display. They MUST NOT write that civil offset in the Chron zone field.

### 4.2 Sign (opposite civil time)

Civil time uses \`UTC + offset = local\` (Chicago civil winter time is \`−06:00\`).

Chron Time uses the opposite equation:

\`\`\`
local + zone = GMT
\`\`\`

West of Greenwich is plus. East is minus.

Example: local \`100\` plus zone \`200\` is \`300\` GMT.

The zone field is in chrons, the same unit as time of day. \`+269\` is 269 chrons west (Carrollton). \`+250\` is 90° west. \`+500\` is 180°.

### 4.3 Date of the written string

The date in an instant string (year, fortnight, day) is the **local** date after the zone is applied. Adding zone to local time MUST carry into the next or previous Chron day and year, including onto \`YD\` / \`LD\` and off of \`A01\`.

Universal (GMT) time is the local time plus the zone, with that same carry.

On an instant or time-only string in the interchange and canonical profiles, the zone is REQUIRED: a numeric zone or \`Z\`. \`Z\` means zone \`+000\` (the Greenwich meridian).

In the presentation profile, the zone MAY be omitted when the local meridian is understood. An omitted zone MUST NOT be treated as GMT unless that context is Greenwich.

A date-only string has no zone. It names a calendar day, not an instant.

---

## 5. Text format

### 5.1 Profiles

Instant interchange:

\`\`\`
2026R04:659.472+269
2020C12:200+300
2020YD:000Z
2024LD:500Z
-0001A01:000Z
\`\`\`

Instant canonical (same instants, reduced to GMT, quantum applied):

\`\`\`
2026R04:928.472Z
2020C12:500Z
2020YD:000Z
2024LD:500Z
-0001A01:000Z
\`\`\`

Instant presentation (same first instant, meridian already known):

\`\`\`
2026R4:659
\`\`\`

Date-only:

\`\`\`
2026R4          ; presentation
2026R04         ; interchange and canonical
2020YD
2024LD
\`\`\`

Time-only:

\`\`\`
659             ; presentation, meridian already known
659.472+269     ; interchange
928.472Z        ; canonical (and interchange)
100+200         ; local 100 at zone +200, same clock as 300Z
\`\`\`

### 5.2 Instant grammar

\`\`\`
instant          = presentation / interchange
interchange      = iyear date ":" time zone
presentation     = year date-short ":" time [ zone ]
canonical        = iyear date ":" time "Z"
iyear            = [ "-" ] 4DIGIT
year             = [ "-" ] 1*4DIGIT
date             = fortnight day-in-fort / year-day / leap-day
date-short       = fortnight day-short / year-day / leap-day
fortnight        = %x41-5A          ; A–Z
day-in-fort      = "01" / "02" / "03" / "04" / "05" / "06" / "07"
                 / "08" / "09" / "10" / "11" / "12" / "13" / "14"
day-short        = "1" / "2" / "3" / "4" / "5" / "6" / "7"
                 / "8" / "9" / day-in-fort
year-day         = "YD"
leap-day         = "LD"
time             = 3DIGIT [ "." 1*12DIGIT ]
zone             = "Z" / ( "+" / "-" ) 3DIGIT [ "." 1*12DIGIT ]
\`\`\`

Letters in \`date\` are uppercase. \`Z\` as a zone is the Greenwich meridian. It is not fortnight \`Z\`; fortnight \`Z\` can only appear in the date slot (\`Z14\`).

\`time\` is chrons, zero-padded to three digits before any decimal point (\`000\`–\`999\`).

A numeric zone is chrons, with an explicit sign and three digits before any decimal point. The value \`-500\` MUST NOT be emitted (§4.1).

A parser MUST reject \`LD\` unless \`year\` is a leap year. A parser MUST reject a fractional part longer than 12 digits. Interchange parsers MUST reject an unpadded day (\`R4\`) and a missing zone.

The older glued form \`2020C120.500+0.3\` is not a Chron string in any profile.

### 5.3 Date-only and time-only

A **date-only** names a Chron calendar day. It is not an instant. It has no time and no zone. Midnight on that day at a given meridian is written as an instant (\`2026R04:000+269\` or \`2026R04:000Z\`).

\`\`\`
date-only-interchange   = iyear date
date-only-presentation  = year date-short
date-only-canonical     = iyear date
\`\`\`

Examples: birthday \`2026R04\`, Year Day \`2021YD\`, Leap Day \`2020LD\`.

A **time-only** names a time of day, possibly recurring. It is not an instant and not a duration (\`50c\`). Interchange MUST include a zone or \`Z\`. Presentation MAY omit the zone when the meridian is understood.

\`\`\`
time-only-interchange   = time zone
time-only-presentation  = time [ zone ]
time-only-canonical     = time "Z"
\`\`\`

\`200+300\` and \`500Z\` are the same time of day. They are not a date.

A parser distinguishes the kinds as follows:

- contains \`c\` or \`d\` as a unit suffix → duration
- contains \`:\` → instant
- starts with a year then a fortnight, \`YD\`, or \`LD\`, and has no \`:\` → date-only
- otherwise a leading \`time\` → time-only

### 5.4 Duration grammar

\`\`\`
duration      = [ "-" ] ( days leftover / days / chrons-unit )
days          = 1*DIGIT [ "." 1*12DIGIT ] "d"
leftover      = 1*3DIGIT [ "." 1*12DIGIT ] "c"
chrons-unit   = 1*DIGIT [ "." 1*12DIGIT ] "c"
\`\`\`

\`3d200c\` is 3 days and 200 chrons. A leftover MUST be less than \`1000c\`. Implementations MUST reject \`YD\` or \`LD\` inside a duration.

### 5.5 Canonical quantum

Canonical numeric fields are rounded to 3 decimal chrons (0.001 chron, 86.4 microseconds) using half-away-from-zero. If time rounds to \`1000\`, it MUST carry into the next Chron day and become \`000\`.

Trailing zeros after the decimal point MUST be stripped, and a dangling decimal point MUST be stripped. \`500\`, \`500.0\`, and \`500.000\` all canonicalize to \`500\`. \`928.470\` canonicalizes to \`928.47\`.

The same quantum applies to a numeric zone in interchange (then \`Z\` in canonical form), to time-only canonical form, and to a canonical duration in chrons.

Two instants MUST be compared by producing both canonical strings and testing them for identical text. The same rule applies to two date-only values, two time-only values, or two durations.

### 5.6 Field ranges

| Field | Range |
|-------|--------|
| year (interchange) | four-digit Gregorian year, optional leading minus |
| year (presentation) | 1–4 digits, optional leading minus |
| fortnight | \`A\`–\`Z\` |
| day | \`01\`–\`14\`, or \`YD\`, or \`LD\` (presentation MAY drop a leading zero) |
| time | \`[0, 1000)\` chrons |
| zone | \`Z\`, or a longitude in chrons in \`[-499, +500]\` (\`+500\` at 180°) |
| duration | real number of chrons, optional minus |

---

## 6. Conversion

Let \`doy\` be the Chron day of year (\`1\`–\`366\`) and \`t\` the local time in chrons. \`Z\` is zone \`0\`.

\`\`\`
GMT_chrons = t + zone
\`\`\`

If \`GMT_chrons\` is outside \`[0, 1000)\`, carry whole days into \`doy\` and \`year\` using §2.

Apply §5.5. That is the canonical time.

The corresponding UTC instant, on the POSIX time scale of §3.3, is:

\`\`\`
UTC = 00:00:00 UTC on 1 January of \`year\`
    + (doy - 1) * 86400 seconds
    + (GMT_chrons / 1000) * 86400 seconds
\`\`\`

The inverse: take the UTC year and day-of-year, map 1–364 through §2.2, map 365 → \`YD\`, map 366 → \`LD\`, convert the UTC fraction of a day to chrons, then apply §5.5. That is the canonical time. Subtract \`zone\` to display local time (borrowing a day when needed).

To compare or store an instant, reduce it to the canonical profile. \`2020C12:200+300\` and \`2020C12:500Z\` are the same instant.

A date-only converts to a Gregorian calendar date through §2, with no time. A time-only converts through \`GMT_chrons = t + zone\` with no date carry stored; the result is a time of day in \`[0, 1000)\`.

[RFC3339] timestamps convert by parsing them as UTC (or as UTC plus their own civil offset), then applying this mapping. The civil offset is used only to find the UTC instant. It MUST NOT become the Chron zone. Chron Time does not replace RFC 3339 on the wire for existing systems; it is a parallel representation.

---

## 7. Worked examples

| Meaning | Interchange | Canonical | UTC or note |
|---------|-------------|-----------|-------------|
| Start of 2020 | \`2020A01:000Z\` | \`2020A01:000Z\` | 2020-01-01T00:00:00Z |
| Noon GMT, C12 | \`2020C12:500Z\` | \`2020C12:500Z\` | 2020-02-09T12:00:00Z |
| Same noon, 108°W | \`2020C12:200+300\` | \`2020C12:500Z\` | 2020-02-09T12:00:00Z |
| Local noon at 108°W | \`2020C12:500+300\` | \`2020C12:800Z\` | 2020-02-09T19:12:00Z |
| One chron after midnight | \`2000A01:001Z\` | \`2000A01:001Z\` | 2000-01-01T00:01:26.400Z |
| 2026-08-30 22:17 UTC, Carrollton +269 | \`2026R04:659.472+269\` | \`2026R04:928.472Z\` | 2026-08-30T22:17:00Z |
| Common Year Day | \`2021YD:000Z\` | \`2021YD:000Z\` | 2021-12-31T00:00:00Z |
| Leap Year Day | \`2020YD:000Z\` | \`2020YD:000Z\` | 2020-12-30T00:00:00Z |
| Leap Day | \`2020LD:000Z\` | \`2020LD:000Z\` | 2020-12-31T00:00:00Z |
| Leap second | \`2016LD:999Z\` | \`2016LD:999Z\` | 2016-12-31T23:59:60Z |
| GMT midnight from +250 | \`1999YD:750+250\` | \`2000A01:000Z\` | 2000-01-01T00:00:00Z |
| Birthday (date-only) | \`2026R04\` | \`2026R04\` | 2026-08-30 |
| Noon GMT (time-only) | \`500Z\` | \`500Z\` | every day, 12:00:00Z |
| Same clock at +300 (time-only) | \`200+300\` | \`500Z\` | same time of day as \`500Z\` |

\`100+200 = 300\` GMT is the zone equation written as time-only.

\`50c\` after \`2020Z14:980Z\` is \`2020YD:030Z\`.

\`720.000Z\` canonicalizes to \`720Z\`. \`928.470Z\` canonicalizes to \`928.47Z\`.

---

## 8. Open for a later revision

- Fixed Monday 1 January (calendar reform).
- Month names, including a name for month 7 (MN).

---

## 9. Security Considerations

Chron Time is a date and time notation. It is not a clock for signatures, replay windows, or other security protocols.

The zone sign is the opposite of [RFC3339] and ISO 8601: west is plus. A converter that applies a civil offset with the civil sign will shift the instant by twice the zone. Implementations that ingest both notations MUST NOT reuse an ISO 8601 offset parser for a Chron zone.

A civil time zone or DST offset MUST NOT be copied into the Chron zone field. Doing so makes two writers at the same longitude disagree after a clock-law change, and makes equality depend on a legislature.

An omitted zone is allowed only in the presentation profile of an instant or time-only string. It means the local meridian is understood. It is not GMT unless that context is Greenwich. Interchange instants and time-only strings without a zone or \`Z\` MUST be rejected.

A date-only MUST NOT be treated as midnight UTC. It has no instant until a time and a meridian are supplied.

Two interchange instants MUST be compared by canonicalizing both (§5.5). Comparing the raw text of \`2020C12:200+300\` and \`2020C12:500Z\` will miss that they are the same instant. \`720Z\` and \`720.000Z\` are the same after canonicalization.

A parser MUST reject a fractional part longer than 12 digits so an arbitrarily long decimal cannot be used as a resource exhaustion. Implementations SHOULD also reject years outside the grammar and any time value outside \`[0, 1000)\`.

---

## 10. IANA Considerations

This document has no IANA actions. A media type for Chron strings is not requested.

---

## 11. References

### 11.1 Normative References

- [RFC2119] Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, March 1997. https://www.rfc-editor.org/rfc/rfc2119
- [RFC8174] Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, May 2017. https://www.rfc-editor.org/rfc/rfc8174
- [RFC5234] Crocker, D., Ed., and P. Overell, "Augmented BNF for Syntax Specifications: ABNF", STD 68, RFC 5234, January 2008. https://www.rfc-editor.org/rfc/rfc5234

### 11.2 Informative References

- [RFC3339] Klyne, G. and C. Newman, "Date and Time on the Internet: Timestamps", RFC 3339, July 2002. https://www.rfc-editor.org/rfc/rfc3339
- [Metric time] Wikipedia, "Metric time". https://en.wikipedia.org/wiki/Metric_time
- [Decimal time] Wikipedia, "Decimal time". https://en.wikipedia.org/wiki/Decimal_time
`;u.setOptions({gfm:!0});function cn(){const t=u.parse(ln,{async:!1});return S.jsxs(S.Fragment,{children:[S.jsx(Te,{}),S.jsxs("article",{className:"spec-shell",children:[S.jsx("a",{className:"back",href:"/",children:"← Chron Time"}),S.jsx("div",{className:"spec-body",dangerouslySetInnerHTML:{__html:t}})]})]})}Se.createRoot(document.getElementById("root")).render(S.jsx(ve.StrictMode,{children:S.jsx(cn,{})}));
