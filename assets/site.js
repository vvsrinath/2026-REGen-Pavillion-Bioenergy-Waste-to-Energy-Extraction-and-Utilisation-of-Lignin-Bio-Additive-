/* REGen Pavilion — progressive enhancements (no dependencies) */
document.documentElement.classList.add('js');

(function () {
  'use strict';

  function init() {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var finePointer = window.matchMedia('(pointer: fine)').matches;

    /* ---- sticky header opacity ---- */
    var top = document.querySelector('.top');
    if (top) {
      var onScroll = function () {
        top.classList.toggle('scrolled', window.scrollY > 16);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ---- mobile navigation ---- */
    var toggle = document.querySelector('.nav-toggle');
    var navLinks = document.getElementById('site-nav');
    if (toggle && navLinks) {
      var setOpen = function (open) {
        navLinks.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle('nav-open', open);
      };
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
      });
      navLinks.addEventListener('click', function (e) {
        if (e.target.closest('a')) setOpen(false);
      });
      document.addEventListener('click', function (e) {
        if (toggle.getAttribute('aria-expanded') !== 'true') return;
        if (!navLinks.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          setOpen(false);
          toggle.focus();
        }
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth > 1020) setOpen(false);
      }, { passive: true });
    }

    /* ---- 3D loading fallback ---- */
    var hero3d = document.getElementById('hero-3d');
    if (hero3d) {
      window.setTimeout(function () {
        if (hero3d.classList.contains('loading')) {
          hero3d.classList.remove('loading');
          hero3d.classList.add('fallback');
        }
      }, 6000);
      hero3d.addEventListener('pointerdown', function () {
        hero3d.classList.remove('loading');
      }, { once: true });
    }

    /* ---- active section indicator ---- */
    var links = Array.prototype.slice.call(document.querySelectorAll('.navlinks a[href^="#"]'));
    if ('IntersectionObserver' in window && links.length) {
      var byId = {};
      links.forEach(function (a) {
        var id = a.getAttribute('href').slice(1);
        byId[id] = a;
      });
      var activate = function (id) {
        links.forEach(function (a) { a.classList.remove('active'); });
        if (byId[id]) byId[id].classList.add('active');
      };
      var sectionObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) activate(en.target.id);
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      Object.keys(byId).forEach(function (id) {
        var el = document.getElementById(id);
        if (el) sectionObs.observe(el);
      });
      if (window.scrollY < 80) activate('home');
    }

    /* ---- scroll reveal ---- */
    var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (reduceMotion || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('in'); });
    } else {
      var revealObs = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            obs.unobserve(en.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach(function (el) { revealObs.observe(el); });
    }

    /* ---- hero pointer parallax ---- */
    var stage = document.querySelector('.hero-stage');
    if (stage && !reduceMotion && finePointer) {
      var layers = Array.prototype.slice.call(stage.querySelectorAll('[data-depth]'));
      var raf = null;
      var apply = function (x, y) {
        layers.forEach(function (el) {
          var d = parseFloat(el.getAttribute('data-depth')) || 10;
          el.style.transform = 'translate3d(' + (-x * d).toFixed(2) + 'px,' + (-y * d).toFixed(2) + 'px,0)';
        });
      };
      stage.addEventListener('pointermove', function (e) {
        var r = stage.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(function () { apply(x, y); });
      });
      stage.addEventListener('pointerleave', function () {
        if (raf) cancelAnimationFrame(raf);
        layers.forEach(function (el) { el.style.transform = ''; });
      });
    }

    /* ---- subtle particle field ---- */
    var canvas = document.querySelector('.particles');
    if (canvas && !reduceMotion && canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var w = 0, h = 0, dots = [], anim = null, running = false, visible = true;

      var resize = function () {
        var rect = canvas.getBoundingClientRect();
        w = Math.max(1, rect.width);
        h = Math.max(1, rect.height);
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var count = Math.min(48, Math.max(14, Math.round((w * h) / 16000)));
        dots = [];
        for (var i = 0; i < count; i++) {
          dots.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.6 + 0.6,
            vx: (Math.random() - 0.5) * 0.12,
            vy: -(Math.random() * 0.22 + 0.05),
            a: Math.random() * 0.5 + 0.2,
            c: Math.random() < 0.5 ? '80,230,154' : '99,216,209'
          });
        }
      };

      var frame = function () {
        if (!running) return;
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < dots.length; i++) {
          var d = dots[i];
          d.x += d.vx;
          d.y += d.vy;
          if (d.y < -10) { d.y = h + 10; d.x = Math.random() * w; }
          if (d.x < -10) d.x = w + 10;
          if (d.x > w + 10) d.x = -10;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(' + d.c + ',' + d.a + ')';
          ctx.fill();
        }
        anim = requestAnimationFrame(frame);
      };

      var start = function () {
        if (running || !visible || document.hidden) return;
        running = true;
        anim = requestAnimationFrame(frame);
      };
      var stop = function () {
        running = false;
        if (anim) cancelAnimationFrame(anim);
        anim = null;
      };

      resize();
      window.addEventListener('resize', resize, { passive: true });

      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          visible = entries[0].isIntersecting;
          if (visible) start(); else stop();
        }, { threshold: 0 }).observe(canvas);
      } else {
        start();
      }

      document.addEventListener('visibilitychange', function () {
        if (document.hidden) stop(); else start();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
