<?php
  // Função para converter de Latin para utf-8
function latin_to_utf8($string) {
    return mb_convert_encoding($string, 'UTF-8', 'ISO-8859-1');
}
 
// Função para converter de utf-8 para Latin
function utf8_to_latin($string) {
    return mb_convert_encoding($string, 'ISO-8859-1', 'UTF-8');
}
?>
