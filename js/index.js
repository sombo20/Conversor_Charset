function convertLatinToUtf8(str) {
  return unescape(str.replace(/\\u([\d\w]{4})/gi, (match, grp) => {
    return String.fromCharCode(parseInt(grp, 16));
  }));
}

function convertUtf8ToLatin(str) {
  return escape(str).replace(/%u(\w{4})/gi, (match, grp) => {
    return "\\u" + grp;
  });
}
