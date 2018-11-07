function assembleTokens (ctx) {
  // let arrayUniqueTokens = function (array) {
  //   let a = array.concat();
  //   for (let i = 0; i < a.length; ++i) {
  //     for (let j = i + 1; j < a.length; ++j) {
  //       if (a[i].token === a[j].token) { // not === because token can be regexp object
  //         a.splice(j--, 1);
  //       }
  //     }
  //   }
  //   return a;
  // }
  let defaultTokens = [];
  defaultTokens.push({ token: ':url', replacement: ctx.originalUrl });
  defaultTokens.push({ token: ':protocol', replacement: ctx.protocol });
  defaultTokens.push({ token: ':hostname', replacement: ctx.hostname });
  defaultTokens.push({ token: ':method', replacement: ctx.method });
  defaultTokens.push({
    token: ':status',
    replacement: ctx.response.status || ctx.response.__statusCode || ctx.res.statusCode
  });
  defaultTokens.push({ token: ':response-time', replacement: ctx.response.responseTime });
  defaultTokens.push({ token: ':date', replacement: new Date().toUTCString() });
  defaultTokens.push({ token: ':referrer', replacement: ctx.headers.referer || '' });
  defaultTokens.push({ token: ':http-version', replacement: ctx.req.httpVersionMajor + '.' + ctx.req.httpVersionMinor });
  defaultTokens.push({
    token: ':remote-addr',
    replacement: ctx.headers['x-forwarded-for'] || ctx.ip || ctx.ips ||
    (ctx.socket && (ctx.socket.remoteAddress || (ctx.socket.socket && ctx.socket.socket.remoteAddress)))
  });
  defaultTokens.push({ token: ':user-agent', replacement: ctx.headers['user-agent'] });
  defaultTokens.push({
    token: ':content-length',
    replacement: (ctx.response._headers && ctx.response._headers['content-length']) ||
    (ctx.response.__headers && ctx.response.__headers['Content-Length']) ||
    ctx.response.length || '-'
  });
  defaultTokens.push({
    token: /:req\[([^\]]+)\]/g,
    replacement: function (_, field) {
      return ctx.headers[field.toLowerCase()];
    }
  });
  defaultTokens.push({
    token: /:res\[([^\]]+)\]/g,
    replacement: function (_, field) {
      return ctx.response._headers
        ? (ctx.response._headers[field.toLowerCase()] || ctx.response.__headers[field])
        : (ctx.response.__headers && ctx.response.__headers[field]);
    }
  });

  return defaultTokens;
}

function format (str, tokens) {
  for (let i = 0; i < tokens.length; i++) {
    str = str.replace(tokens[i].token, tokens[i].replacement);
  }
  return str;
}

let DEFAULT_FORMAT = ':remote-addr - -' +
  ' ":method :url HTTP/:http-version"' +
  ' :status :content-length ":referrer"' +
  ' ":user-agent"';

export default function() {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      // if (err.status) {
      //   ctx.throw(err.status, JSON.stringify(err.message));
      //   return;
      // }
      // let errorInfo = format(DEFAULT_FORMAT, assembleTokens(ctx));
      // errorInfo += ` "${err.stack}"`;
      // let logger = ctx.log4js.getLogger('error');
      // logger.error(errorInfo);
      // ctx.throw(500, JSON.stringify(err.message));
      // // ctx.status = err.status || 500;
      // // ctx.body = err.message;
      // // ctx.app.emit('error', err, ctx);
      // return;

      if (err.status) {
        let message = typeof err.message === 'object' ? JSON.stringify(err.message) : err.message;
        ctx.throw(err.status, message, {
          headers: {
            'Access-Control-Allow-Origin': 'https://s.changjinglu.net',
            'Access-Control-Allow-Methods': 'OPTIONS,GET,PUT,POST,DELETE'
          }
        });
        return;
      } 
      let errorInfo = format(DEFAULT_FORMAT, assembleTokens(ctx));
      errorInfo += ` "${err.stack}"`;
      let logger = ctx.log4js.getLogger('error');
      logger.error(errorInfo);  
      ctx.throw(500, errorInfo, {
        headers: {
          'Access-Control-Allow-Origin': 'https://s.changjinglu.net',
          'Access-Control-Allow-Methods': 'OPTIONS,GET,PUT,POST,DELETE'
        }
      });
    }
  };
}