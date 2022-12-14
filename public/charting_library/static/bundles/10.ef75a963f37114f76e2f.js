webpackJsonp([10], {
  1193: function(t, e, i) {
    'use strict';
    function r() {
      return n.enabled('saveload_requires_authentication') && !window.is_authenticated
        ? Promise.resolve([])
        : new Promise(function(t) {
            c.getCharts(function(e) {
              t(e);
            });
          });
    }
    var n, o, a, c, s, u, h, l;
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (n = i(5)),
      (o = i(1320)),
      (a = i(397)),
      (c = i(92)),
      (s = i(398)),
      (u = i(93)),
      (h = i(24)),
      (l = (function() {
        function t(t) {
          var e = this;
          (this._favoriteChartsService = new o.FavoriteChartsService(u.TVXWindowEvents, h)),
            (this._dialog = new a()),
            (this._getChartEntry = function(t) {
              return {
                id: t.id,
                url: t.url,
                title: t.name,
                symbol: t.short_symbol,
                interval: t.interval,
                toolsCount: 0,
                modified: t.modified_iso,
                active: function() {
                  return e._isActiveChart(t.id);
                },
                openAction: function() {
                  return c.loadChart(t);
                },
                deleteAction: function(i, r) {
                  s.deleteChart(
                    r,
                    t.image_url,
                    function() {
                      e._deleteChart(t.id), i.resolve();
                    },
                    i.reject.bind(i)
                  );
                },
                favoriteAction: e._updateFavorites,
              };
            }),
            (this._updateFavorites = function(t) {
              return e._favoriteChartsService.set(t);
            }),
            (this._isActiveChart = function(t) {
              return t === e._chartWidgetCollection.metaInfo.id.value();
            }),
            (this._deleteChart = function(t) {
              e._isActiveChart(t) &&
                (n.enabled('saveload_storage_customization')
                  ? e._chartWidgetCollection.clearChartMetaInfo()
                  : (location.href = '/chart/'));
            }),
            (this._chartWidgetCollection = t);
        }
        return (
          (t.prototype.showLoadDialog = function() {
            var t = this;
            r()
              .then(function(e) {
                return e.map(t._getChartEntry);
              })
              .then(function(e) {
                t._dialog.show(e, t._favoriteChartsService.get());
              });
          }),
          t
        );
      })()),
      (e.LoadChartService = l);
  },
  1320: function(t, e, i) {
    'use strict';
    var r, n, o;
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (r = i(0)),
      (n = i(174)),
      (o = (function(t) {
        function e(e, i) {
          return t.call(this, e, i, 'FAVORITE_CHARTS_CHANGED', 'loadChartDialog.favorites', {}) || this;
        }
        return r.__extends(e, t), e;
      })(n.CommonJsonStoreService)),
      (e.FavoriteChartsService = o);
  },
});
