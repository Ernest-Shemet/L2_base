function hasTwoCubeSums(n) {
  const pairs = [];
  const limit = Math.floor(Math.cbrt(n));

  for (let a = 1; a <= limit; a++) {
    for (let b = a + 1; b <= limit; b++) {
      if (a ** 3 + b ** 3 === n) {
        pairs.push([a, b]);
      }
    }
  }

  return pairs.length >= 2;
}

function subnetInfo(ip, subnet) {
  const ipParts = ip.split('.').map(Number);
  const subnetParts = subnet.split('.').map(Number);

  const network = [];
  const host = [];

  for (let i = 0; i < 4; i++) {
    const net = ipParts[i] & subnetParts[i];
    const hostPart = ipParts[i] - net;
    network.push(net);
    host.push(hostPart);
  }

  return [`${network.join('.')}`, `${host.join('.')}`];
}

function ipv4Parser(ip, mask) {
  const ipParts = ip.split('.').map(Number);
  const maskParts = mask.split('.').map(Number);
  
  const network = [];
  const host = [];

  for (let i = 0; i < 4; i++) {
    const net = ipParts[i] & maskParts[i];
    const hostPart = ipParts[i] - net;
    network.push(net);
    host.push(hostPart);
  }

  return [network.join('.'), host.join('.')];
}

function century(year) {
  const c = Math.ceil(parseInt(year) / 100);
  const suffix = 
    c % 10 === 1 && c % 100 !== 11 ? 'st' :
    c % 10 === 2 && c % 100 !== 12 ? 'nd' :
    c % 10 === 3 && c % 100 !== 13 ? 'rd' : 'th';
  return `${c}${suffix}`;
}

function findMissing(list) {
  const n = list.length + 1;
  const total = ((list[0] + list[list.length - 1]) * n) / 2;
  const sum = list.reduce((a, b) => a + b, 0);
  return total - sum;
}

function primeFactors(n) {
  let result = '';
  for (let i = 2; i <= n; i++) {
    let count = 0;
    while (n % i === 0) {
      n /= i;
      count++;
    }
    if (count > 0) {
      result += count > 1 ? `(${i}**${count})` : `(${i})`;
    }
  }
  return result;
}

function toWeirdCase(string) {
  return string
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((ch, i) => i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase())
        .join('')
    )
    .join(' ');
}

function wave(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return result;
}

function expandedForm(num) {
  return String(num)
    .split('')
    .map((d, i, arr) => d + '0'.repeat(arr.length - i - 1))
    .filter(x => !x.startsWith('0'))
    .join(' + ');
}

function solution(str) {
  if (str.length % 2 !== 0) str += '_';
  const res = [];
  for (let i = 0; i < str.length; i += 2) {
    res.push(str[i] + str[i + 1]);
  }
  return res;
}

function bingo(ticket, win) {
  let count = 0;
  
  for (let [str, num] of ticket) {
    if (str.split('').some(ch => ch.charCodeAt(0) === num)) {
      count++;
    }
  }
  
  return count >= win ? 'Winner!' : 'Loser!';
}

function domainName(url){
  url = url.replace('http://', '')
           .replace('https://', '')
           .replace('www.', '');
  return url.split('.')[0];
}

function longest(arr, n) {
  const sorted = [...arr].sort((a, b) => {
    if (b.length === a.length) {
      return arr.indexOf(a) - arr.indexOf(b);
    }
    return b.length - a.length;
  });
  return sorted[n - 1];
}

function hexStringToRGB(hexString) {
  const hex = hexString.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return { r, g, b };
}

function isCircleSorted(arr) {
  let drops = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) drops++;
    if (drops > 1) return false;
  }
  return true;
}

function howManyTimes(time1, time2) {
  const start = new Date(time1);
  const end = new Date(time2);
  let count = 0;

  for (let t = new Date(start); t < end; t.setSeconds(t.getSeconds() + 1)) {
    const h = t.getHours();
    const m = t.getMinutes();
    const s = t.getSeconds();

    if (m === 0 && s < (h % 12 === 0 ? 12 : h % 12)) count++;
    if (m === 30 && s === 0) count++;
  }

  return count;
}

Array.prototype.square = function() {
  return this.map(x => x ** 2);
};

Array.prototype.cube = function() {
  return this.map(x => x ** 3);
};

Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0);
};

Array.prototype.average = function() {
  return this.length ? this.sum() / this.length : NaN;
};

Array.prototype.even = function() {
  return this.filter(x => x % 2 === 0);
};

Array.prototype.odd = function() {
  return this.filter(x => x % 2 !== 0);
};

function cache(func) {
  const store = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (store.has(key)) return store.get(key);
    const result = func(...args);
    store.set(key, result);
    return result;
  };
}