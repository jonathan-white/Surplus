export const formatMoney = (value, c, d, t) => {
  var n = value, 
  ca = isNaN(c = Math.abs(c)) ? 2 : c, 
  da = d === undefined ? "." : d, 
  ta = t === undefined ? "," : t, 
  s = n < 0 ? "-" : "", 
  i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(ca),10)), 
  j = (j = i.length) > 3 ? j % 3 : 0;
 return s + (j ? i.substr(0, j) + ta : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ta) + (ca ? da + Math.abs(n - i).toFixed(ca).slice(2) : "");
};