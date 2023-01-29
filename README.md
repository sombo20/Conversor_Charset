# Conversor_Charset


### Usando php
```php
  // Função para converter de Latin para utf-8
function latin_to_utf8($string) {
    return mb_convert_encoding($string, 'UTF-8', 'ISO-8859-1');
}
```

```php
// Função para converter de utf-8 para Latin
function utf8_to_latin($string) {
    return mb_convert_encoding($string, 'ISO-8859-1', 'UTF-8');
}
```

### Usando JavaScript

```js
function convertLatinToUtf8(str) {
  return unescape(str.replace(/\\u([\d\w]{4})/gi, (match, grp) => {
    return String.fromCharCode(parseInt(grp, 16));
  }));
}
```

```php
function convertUtf8ToLatin(str) {
  return escape(str).replace(/%u(\w{4})/gi, (match, grp) => {
    return "\\u" + grp;
  });
}
```
