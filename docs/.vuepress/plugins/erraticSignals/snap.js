function e() {
  // console.log('Erratic Signals v1.0'),
  ((E = document.getElementById('erraticSignals-canvas')).style.width = '100%'),
    (E.style.height = '100%');
  // var e = document.getElementsByTagName('script'),
  //   t = e[e.length - 1];
  // t.parentNode.insertBefore(E, t);
  // document.getElementById('erraticSignals-canvas').append(E);
  var o = E.getBoundingClientRect();
  return (
    (E.width = o.width),
    (E.height = o.height),
    E.addEventListener('webglcontextlost', r, !1),
    E.addEventListener('webglcontextrestored', i, !1),
    E
  );
}
function t(e) {
  function t(e) {
    (j = (e - W) / 1e3),
      (W = e),
      u(j),
      a(),
      T.bindBuffer(T.ARRAY_BUFFER, H),
      y.length > A &&
        ((A = Math.ceil(y.length / C.preBuf) * C.preBuf),
        T.bufferData(T.ARRAY_BUFFER, 4 * A, T.STREAM_DRAW)),
      T.bufferSubData(T.ARRAY_BUFFER, 0, y),
      T.bindBuffer(T.ARRAY_BUFFER, null),
      C.cycle && d(j);
    var r, o, n;
    C.custom
      ? ((r = C.backColor), (o = C.customLineColor), (n = C.customTint))
      : ((r = C.backColor), (o = C.lineColor), (n = C.tint));
    var l = [s(r[0] + o[0] * n, 0, 1), s(r[1] + o[1] * n, 0, 1), s(r[2] + o[2] * n, 0, 1)];
    T.clearColor(l[0], l[1], l[2], 1),
      T.clear(T.COLOR_BUFFER_BIT),
      T.bindFramebuffer(T.FRAMEBUFFER, k.buffer),
      T.clearColor(0, 0, 0, 0),
      T.clear(T.COLOR_BUFFER_BIT),
      T.bindFramebuffer(T.FRAMEBUFFER, O.buffer),
      T.clearColor(0, 0, 0, 0),
      T.clear(T.COLOR_BUFFER_BIT),
      T.bindFramebuffer(T.FRAMEBUFFER, null),
      0 != p
        ? (T.enable(T.BLEND),
          T.useProgram(x),
          T.uniform3f(m, o[0], o[1], o[2]),
          i.bindVertexArrayOES(Y),
          T.bindFramebuffer(T.FRAMEBUFFER, k.buffer),
          T.blendFunc(T.SRC_ALPHA, T.ONE_MINUS_SRC_ALPHA),
          T.drawArrays(T.TRIANGLES, 0, p / 3),
          i.bindVertexArrayOES(null),
          T.bindFramebuffer(T.FRAMEBUFFER, null),
          T.blendFuncSeparate(T.SRC_ALPHA, T.ONE_MINUS_SRC_ALPHA, T.ONE, T.ONE_MINUS_SRC_ALPHA),
          i.bindVertexArrayOES(I),
          T.activeTexture(T.TEXTURE0),
          T.bindTexture(T.TEXTURE_2D, k.texture),
          T.useProgram(_),
          T.bindFramebuffer(T.FRAMEBUFFER, O.buffer),
          T.drawArrays(T.TRIANGLE_STRIP, 0, 4),
          T.activeTexture(T.TEXTURE0),
          T.bindTexture(T.TEXTURE_2D, O.texture),
          T.useProgram(D),
          T.bindFramebuffer(T.FRAMEBUFFER, null),
          T.drawArrays(T.TRIANGLE_STRIP, 0, 4),
          T.useProgram(z),
          T.bindTexture(T.TEXTURE_2D, k.texture),
          T.drawArrays(T.TRIANGLE_STRIP, 0, 4),
          T.disable(T.BLEND),
          T.useProgram(null),
          i.bindVertexArrayOES(null),
          (g = requestAnimationFrame(t)))
        : (g = requestAnimationFrame(t));
  }
  function r() {
    console.log('Resize'), (q = null);
    var e = T.canvas.getBoundingClientRect();
    (T.canvas.width = e.width / C.pixelDiv),
      (T.canvas.height = e.height / C.pixelDiv),
      (X = n(T.canvas.width, T.canvas.height)),
      T.viewport(0, 0, T.canvas.width, T.canvas.height),
      T.useProgram(x),
      T.uniformMatrix4fv(f, !1, X),
      T.useProgram(_),
      T.uniform2f(T.getUniformLocation(_, 'screenSize'), T.canvas.width, T.canvas.height),
      T.useProgram(D),
      T.uniform2f(T.getUniformLocation(D, 'screenSize'), T.canvas.width, T.canvas.height),
      T.useProgram(z),
      T.uniform2f(T.getUniformLocation(z, 'screenSize'), T.canvas.width, T.canvas.height),
      T.useProgram(null),
      T.bindTexture(T.TEXTURE_2D, k.texture),
      T.texImage2D(
        T.TEXTURE_2D,
        0,
        T.RGBA,
        T.canvas.width,
        T.canvas.height,
        0,
        T.RGBA,
        T.UNSIGNED_BYTE,
        null
      ),
      T.bindTexture(T.TEXTURE_2D, O.texture),
      T.texImage2D(
        T.TEXTURE_2D,
        0,
        T.RGBA,
        T.canvas.width,
        T.canvas.height,
        0,
        T.RGBA,
        T.UNSIGNED_BYTE,
        null
      ),
      T.bindTexture(T.TEXTURE_2D, null);
  }
  var i = (T = e.getContext('webgl', {
    antialias: !1,
    preserveDrawingBuffer: !0,
  })).getExtension('OES_vertex_array_object');
  T.clearColor(0.04, 0.04, 0.04, 1), T.clear(T.COLOR_BUFFER_BIT);
  var o = T.createShader(T.VERTEX_SHADER);
  T.shaderSource(o, U), T.compileShader(o);
  var c = T.createShader(T.FRAGMENT_SHADER);
  T.shaderSource(c, w), T.compileShader(c);
  var x = T.createProgram();
  T.attachShader(x, o),
    T.attachShader(x, c),
    T.bindAttribLocation(x, 0, 'position'),
    T.linkProgram(x);
  var h = T.getAttribLocation(x, 'position'),
    v = T.getUniformLocation(x, 'modelViewMatrix'),
    f = T.getUniformLocation(x, 'projectionMatrix'),
    m = T.getUniformLocation(x, 'color'),
    b = T.createShader(T.VERTEX_SHADER);
  T.shaderSource(b, B), T.compileShader(b);
  var E = T.createShader(T.FRAGMENT_SHADER);
  T.shaderSource(E, L), T.compileShader(E);
  var S = T.createShader(T.FRAGMENT_SHADER);
  T.shaderSource(S, P), T.compileShader(S);
  var F = T.createShader(T.FRAGMENT_SHADER);
  T.shaderSource(F, M), T.compileShader(F);
  var _ = T.createProgram();
  T.attachShader(_, b),
    T.attachShader(_, E),
    T.bindAttribLocation(_, 0, 'position'),
    T.linkProgram(_);
  var D = T.createProgram();
  T.attachShader(D, b),
    T.attachShader(D, S),
    T.bindAttribLocation(D, 0, 'position'),
    T.linkProgram(D);
  var z = T.createProgram();
  T.attachShader(z, b),
    T.attachShader(z, F),
    T.bindAttribLocation(z, 0, 'position'),
    T.linkProgram(z),
    T.useProgram(_),
    T.uniform2f(T.getUniformLocation(_, 'screenSize'), e.width, e.height),
    T.uniform1i(T.getUniformLocation(_, 'texture'), 0),
    T.useProgram(D),
    T.uniform2f(T.getUniformLocation(D, 'screenSize'), e.width, e.height),
    T.uniform1i(T.getUniformLocation(D, 'texture'), 0),
    T.useProgram(z),
    T.uniform2f(T.getUniformLocation(z, 'screenSize'), e.width, e.height),
    T.uniform1i(T.getUniformLocation(z, 'texture'), 0),
    T.useProgram(null);
  var k = l(),
    O = l(),
    N = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    I = i.createVertexArrayOES(),
    G = T.createBuffer();
  T.bindBuffer(T.ARRAY_BUFFER, G),
    T.bufferData(T.ARRAY_BUFFER, N, T.STATIC_DRAW),
    i.bindVertexArrayOES(I),
    T.vertexAttribPointer(0, 2, T.FLOAT, !1, 0, 0),
    T.bindBuffer(T.ARRAY_BUFFER, null),
    T.enableVertexAttribArray(0),
    i.bindVertexArrayOES(null);
  var X = n(e.width, e.height),
    V = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
    H = T.createBuffer(),
    Y = i.createVertexArrayOES();
  T.bindBuffer(T.ARRAY_BUFFER, H),
    i.bindVertexArrayOES(Y),
    T.vertexAttribPointer(h, 3, T.FLOAT, !1, 0, 0),
    i.bindVertexArrayOES(null),
    T.bindBuffer(T.ARRAY_BUFFER, null),
    i.bindVertexArrayOES(Y),
    T.enableVertexAttribArray(h),
    i.bindVertexArrayOES(null),
    T.useProgram(x),
    T.uniformMatrix4fv(f, !1, X),
    T.uniformMatrix4fv(v, !1, V),
    T.uniform3f(m, 1, 0, 0),
    T.useProgram(null),
    window.addEventListener(
      'resize',
      function() {
        null != q && (window.clearTimeout(q), (q = null)), (q = window.setTimeout(r, 250));
      },
      !1
    ),
    (g = requestAnimationFrame(t));
  Date.now();
  var W = 0,
    j = 0,
    q = null;
  R = r;
}
function r(e) {
  e.preventDefault(), cancelAnimationFrame(g), console.log('WebGL Context Lost');
}
function i() {
  console.log('WebGL Context Restored'), (p = 0), (A = 0), (S = 0), t(E);
}
function o() {
  var e = T.getExtension('WEBGL_lose_context');
  e.loseContext(),
    window.setTimeout(
      function(e) {
        e.restoreContext();
      },
      1e3,
      e
    );
}
function n(e, t) {
  var r = 1 / -e,
    i = 1 / -t;
  return new Float32Array([-2 * r, 0, 0, 0, 0, -2 * i, 0, 0, 0, 0, -0.2, 0, e * r, t * i, -1, 1]);
}
function a() {
  var e,
    t,
    r = 0;
  for (e = 0; e < F.length; e++) r += F[e].vert.length;
  r > S && ((S = Math.ceil(r / C.preBuf) * C.preBuf), (y = new Float32Array(S)));
  var i = 0;
  for (e = 0; e < F.length; e++) for (t = 0; t < F[e].vert.length; t++) y[i++] = F[e].vert[t];
  p = i;
}
function l() {
  var e = T.createTexture();
  T.bindTexture(T.TEXTURE_2D, e),
    T.texParameteri(T.TEXTURE_2D, T.TEXTURE_WRAP_S, T.CLAMP_TO_EDGE),
    T.texParameteri(T.TEXTURE_2D, T.TEXTURE_WRAP_T, T.CLAMP_TO_EDGE),
    T.texParameteri(T.TEXTURE_2D, T.TEXTURE_MIN_FILTER, T.LINEAR),
    T.texParameteri(T.TEXTURE_2D, T.TEXTURE_MAG_FILTER, T.LINEAR),
    T.texImage2D(
      T.TEXTURE_2D,
      0,
      T.RGBA,
      T.canvas.width,
      T.canvas.height,
      0,
      T.RGBA,
      T.UNSIGNED_BYTE,
      null
    ),
    T.bindTexture(T.TEXTURE_2D, null);
  var t = T.createFramebuffer();
  return (
    T.bindFramebuffer(T.FRAMEBUFFER, t),
    T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, e, 0),
    T.bindFramebuffer(T.FRAMEBUFFER, null),
    { buffer: t, texture: e }
  );
}
function u(e) {
  0 == F.length && F.push(new x());
  var t,
    r = C.lineCount / C.pixelDiv;
  for (t = 0; t < F.length; t++) F[t].update(e), F[t].done && F.splice(t, 1);
  for (; F.length < r; ) F.push(new x());
}
function c(e, t) {
  return (e = Math.ceil(e)), (t = Math.floor(t)), Math.floor(Math.random() * (t - e + 1)) + e;
}
function s(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function x(e, t) {
  var r = T.canvas.width,
    i = T.canvas.height;
  (this.pts = []),
    (this.bias = c(1, 4)),
    (this.done = !1),
    (this.last = 0),
    (this.bx = e || 10 * c(1, r / 10)),
    (this.by = t || 10 * c(1, i / 10)),
    (this.px = this.bx),
    (this.py = this.by),
    (this.life = c(1, 50) + 50),
    (this.w = 1),
    (this.pw = 2.5),
    (this.noReverse = 1 == c(0, 8)),
    (this.vert = []),
    (this.update = h),
    (this.genMesh = v);
}
function h(e) {
  if (!((D += 2e3 * e * C.speed) < _))
    if (((D = 0), (_ = c(10, 25) / C.speed), 0 != this.life || 0 != this.pts.length)) {
      if (
        1 == c(1, 4) &&
        (1 == c(1, 3) &&
          0 != this.pts.length &&
          ((this.bx = this.bx + this.pts[0].x),
          (this.by = this.by + this.pts[0].y),
          this.pts.shift(),
          this.genMesh()),
        1 == c(1, 2) && 0 != this.life)
      ) {
        var t = this.bias + c(1, 3) - 1,
          r = 0,
          i = 0,
          o = 10 * c(1, 3);
        t > 4 && (t -= 4),
          t < 1 && (t += 4),
          t == (this.last + 2) % 4 && this.noReverse && (t = (t + 2) % 4),
          1 == t && (i = -o),
          2 == t && (r = o),
          3 == t && (i = o),
          4 == t && (r = -o),
          this.pts.push({ x: r, y: i }),
          this.genMesh(),
          (this.px = this.px + r),
          (this.py = this.py + i),
          (this.last = t),
          (this.life = this.life - 1);
        (this.px < -100 || this.px > T.canvas.width + 100) && (this.life = 0),
          (this.py < -100 || this.py > T.canvas.height + 100) && (this.life = 0);
      }
    } else this.done = !0;
}
function v() {
  if (((this.vert = []), !(this.done || this.pts.length < 2))) {
    var e,
      t,
      r = this.bx,
      i = this.by,
      o = 0,
      n = 0,
      a = 0,
      l = 0,
      u = this.w,
      c = this.pw,
      s = this.vert,
      x = 0;
    for (e = 0; e < this.pts.length; e++)
      (o = r + (t = this.pts[e]).x),
        (n = i + t.y),
        e > 0 &&
          ((s[x++] = r - u),
          (s[x++] = i - u),
          (s[x++] = l),
          (s[x++] = r + u),
          (s[x++] = i + u),
          (s[x++] = l),
          (s[x++] = o - u),
          (s[x++] = n - u),
          (s[x++] = a),
          (s[x++] = r + u),
          (s[x++] = i + u),
          (s[x++] = l),
          (s[x++] = o + u),
          (s[x++] = n + u),
          (s[x++] = a),
          (s[x++] = o - u),
          (s[x++] = n - u),
          (s[x++] = a)),
        (l = a),
        (a += 255 / this.pts.length),
        (r = o),
        (i = n);
    (s[x++] = o),
      (s[x++] = n + c),
      (s[x++] = l),
      (s[x++] = o - c),
      (s[x++] = n),
      (s[x++] = l),
      (s[x++] = o),
      (s[x++] = n - c),
      (s[x++] = l),
      (s[x++] = o),
      (s[x++] = n + c),
      (s[x++] = l),
      (s[x++] = o + c),
      (s[x++] = n),
      (s[x++] = l),
      (s[x++] = o),
      (s[x++] = n - c),
      (s[x++] = l);
  }
}
function d(e) {
  (C.cycleVal = (C.cycleVal + e * C.cycleSpeed) % 1), (C.lineColor = f(C.cycleVal, 1, 0.5));
}
function f(e, t, r) {
  var i, o, n;
  if (0 == t) i = o = n = r;
  else {
    function a(e, t, r) {
      return (
        r < 0 && (r += 1),
        r > 1 && (r -= 1),
        r < 1 / 6
          ? e + 6 * (t - e) * r
          : r < 0.5
          ? t
          : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e
      );
    }
    var l = r < 0.5 ? r * (1 + t) : r + t - r * t,
      u = 2 * r - l;
    (i = a(u, l, e + 1 / 3)), (o = a(u, l, e)), (n = a(u, l, e - 1 / 3));
  }
  return [i, o, n];
}
function m(e) {
  switch (((C.cycle = !1), (C.custom = !1), e)) {
    case 1:
      (C.cycle = !0), (C.tint = 0.01), (C.backColor = [0.03, 0.03, 0.03]);
      break;
    case 2:
      (C.lineColor = [1, 0, 0]), (C.backColor = [0.03, 0.03, 0.03]), (C.tint = 0.01);
      break;
    case 3:
      (C.lineColor = [0, 1, 0]), (C.backColor = [0.03, 0.03, 0.03]), (C.tint = 0.01);
      break;
    case 4:
      (C.lineColor = [0.45, 0, 1]), (C.backColor = [0.03, 0.03, 0.03]), (C.tint = 0.05);
      break;
    case 5:
      (C.lineColor = [1, 0.35, 0]), (C.backColor = [0.03, 0.03, 0.03]), (C.tint = 0.02);
      break;
    case 6:
      (C.lineColor = [0, 0.866, 1]), (C.backColor = [0.03, 0.03, 0.03]), (C.tint = 0.02);
      break;
    case 7:
      (C.lineColor = [1, 0, 0.43]), (C.backColor = [0.03, 0.03, 0.03]), (C.tint = 0.02);
      break;
    case 8:
      (C.lineColor = [0.5, 1, 0]), (C.backColor = [0.03, 0.03, 0.03]), (C.tint = 0.03);
      break;
    case 9:
      (C.lineColor = [0, 0, 1]), (C.backColor = [0.03, 0.03, 0.03]), (C.tint = 0.05);
      break;
    case 10:
      (C.lineColor = [0.8, 0.8, 0.8]), (C.backColor = [0.03, 0.03, 0.03]), (C.tint = 0.03);
      break;
    case 11:
      (C.lineColor = [0.1, 0.1, 0.1]), (C.backColor = [0.9, 0.9, 0.9]), (C.tint = 0);
      break;
    case 12:
      (C.custom = !0), (C.backColor = [0.03, 0.03, 0.03]);
  }
}
function b() {
  t(e());
}
var T,
  E,
  g,
  R,
  C = {
    lineColor: [1, 0, 0],
    backColor: [0.03, 0.03, 0.03],
    tint: 0.01,
    lineCount: 300,
    speed: 1,
    custom: !1,
    customLineColor: [1, 0, 0],
    customTint: 0.01,
    cycle: !0,
    cycleSpeed: 0.01,
    cycleVal: 0,
    preBuf: 20480,
    pixelDiv: 1,
  },
  p = 0,
  A = 0,
  S = 0,
  y = new Float32Array(S),
  F = [],
  _ = 20,
  D = 0,
  U =
    'precision highp float;\nattribute vec3 position;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nvarying float opacity;\nvoid main() {\n\topacity = position.z/255.0;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position.xy,0.0, 1.0);\n}',
  w =
    'precision highp float;\nvarying float opacity;\nuniform vec3 color;\nvoid main() {\n\t//gl_FragColor = vec4(color, opacity);\n\tgl_FragColor = vec4(mix(color,(1.0+sin(gl_FragCoord.y*0.05)*sin(gl_FragCoord.x*0.07))*color,0.4), opacity);\n}',
  B =
    'precision highp float;\nattribute vec2 position;\nvarying vec2 vTexCoord;\nvoid main() {\n\tvTexCoord = (position + 1.0) / 2.0;\n\tgl_Position = vec4(position.xy, 0.0, 1.0);\n}',
  L =
    'precision highp float;\nvarying vec2 vTexCoord;\nuniform vec2 screenSize;\nuniform sampler2D texture;\nvoid main() {\n\tvec4 sum = vec4(0.0);\n\tfloat blurSize = 1.0/(screenSize.x/3.0);\n\t// blur in x (horizontal)\n\t// take nine samples, with the distance blurSize between them\n\tsum += texture2D(texture, vec2(vTexCoord.x - 4.0*blurSize, vTexCoord.y)) * 0.05;\n\tsum += texture2D(texture, vec2(vTexCoord.x - 3.0*blurSize, vTexCoord.y)) * 0.09;\n\tsum += texture2D(texture, vec2(vTexCoord.x - 2.0*blurSize, vTexCoord.y)) * 0.12;\n\tsum += texture2D(texture, vec2(vTexCoord.x - blurSize, vTexCoord.y)) * 0.15;\n\tsum += texture2D(texture, vec2(vTexCoord.x, vTexCoord.y)) * 0.16;\n\tsum += texture2D(texture, vec2(vTexCoord.x + blurSize, vTexCoord.y)) * 0.15;\n\tsum += texture2D(texture, vec2(vTexCoord.x + 2.0*blurSize, vTexCoord.y)) * 0.12;\n\tsum += texture2D(texture, vec2(vTexCoord.x + 3.0*blurSize, vTexCoord.y)) * 0.09;\n\tsum += texture2D(texture, vec2(vTexCoord.x + 4.0*blurSize, vTexCoord.y)) * 0.05;\n\n\tgl_FragColor = sum*2.1;\n}',
  P =
    'precision highp float;\nvarying vec2 vTexCoord;\nuniform vec2 screenSize;\nuniform sampler2D texture;\nvoid main() {\n\tvec4 sum = vec4(0.0);\n\tfloat blurSize = 1.0/(screenSize.y/3.0);\n\t// blur in y (vertical)\n\t// take nine samples, with the distance blurSize between them\n\tsum += texture2D(texture, vec2(vTexCoord.x, vTexCoord.y - 4.0*blurSize)) * 0.05;\n\tsum += texture2D(texture, vec2(vTexCoord.x, vTexCoord.y - 3.0*blurSize)) * 0.09;\n\tsum += texture2D(texture, vec2(vTexCoord.x, vTexCoord.y - 2.0*blurSize)) * 0.12;\n\tsum += texture2D(texture, vec2(vTexCoord.x, vTexCoord.y - blurSize)) * 0.15;\n\tsum += texture2D(texture, vec2(vTexCoord.x, vTexCoord.y)) * 0.16;\n\tsum += texture2D(texture, vec2(vTexCoord.x, vTexCoord.y + blurSize)) * 0.15;\n\tsum += texture2D(texture, vec2(vTexCoord.x, vTexCoord.y + 2.0*blurSize)) * 0.12;\n\tsum += texture2D(texture, vec2(vTexCoord.x, vTexCoord.y + 3.0*blurSize)) * 0.09;\n\tsum += texture2D(texture, vec2(vTexCoord.x, vTexCoord.y + 4.0*blurSize)) * 0.05;\n\n\tgl_FragColor = sum*2.1;\n}',
  M =
    'precision highp float;\nvarying vec2 vTexCoord;\nuniform vec2 screenSize;\nuniform sampler2D texture;\nvoid main() {\n\tgl_FragColor = texture2D(texture, vec2(vTexCoord.x, vTexCoord.y));\n\t//vec4 Color = texture2D(texture, vTexCoord.xy);\n    //float dist = distance(vTexCoord.xy, vec2(0.5,0.5));\n\t//float cRadius = 0.95;\n\t//float cSoftness = 0.85;\n    //float vignette = smoothstep(cRadius, cRadius-cSoftness, dist);\n    //gl_FragColor = vec4(mix(Color.rgb, Color.rgb * vignette, 0.7),max(Color.a,(1.0-vignette)*.8));\n}';

export default b;
