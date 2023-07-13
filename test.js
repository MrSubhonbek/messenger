em()(
  ""
    .concat(n || 0, ":")
    .concat(t || 0, ":")
    .concat(i, ":")
    .concat(a || "", ":crmjbjm3lczhlgnek9uaxz2l9svlfjw14npauhen")
);
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [726],
  {
    8674: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/game-bot/[code]",
        function () {
          return t(7447);
        },
      ]);
    },
    7899: function (e, n) {
      "use strict";
      n.Z = {
        src: "/_next/static/media/sad-face.a3dd88c2.png",
        height: 512,
        width: 512,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHo0YfKlCfYsV/fwWHiukPRmifjzXLNmzbTlyXjymrVq0jdv0fLlizo1YXPlSTfxFHRlSLRqkLkzHLFiyTQny3au096rX25AAAAEXRSTlMACv3+/gfWQf043f403uAu1qjs3FwAAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVHicFcvJAYAgDADBBQJJAEXw6L9Udf4DBNUMoPsptUOoIkmOjCZrTZ6OLjOz5YTtivEugJc5y/hbdv/6Cz3tAcs9mafbAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    7593: function (e, n, t) {
      "use strict";
      t.d(n, {
        AX: function () {
          return u;
        },
        JP: function () {
          return c;
        },
        a0: function () {
          return d;
        },
      });
      var o = t(4098),
        r = t.n(o),
        i = t(7632),
        a = t(7609);
      let l = e => {
          let n = e || (0, a.nl)();
          return {
            ...(n && { Authorization: "Bearer ".concat(n) }),
            "x-install-uuid": (0, a.Ds)() || (0, i.Z)(),
            "client-language": "en",
          };
        },
        s = (e, n) =>
          r()(e, n)
            .then(e => e.json())
            .catch(e => {
              console.error("POST error: ", e.message);
            }),
        c = (e, n) => {
          let t = { method: "POST", headers: l(n), body: JSON.stringify(e) };
          return s("https://api.service.gameeapp.com", t);
        },
        d = (e, n) => {
          let t = { method: "POST", headers: l(n), body: JSON.stringify(e) };
          return s("https://api.service.gameeapp.com", t);
        },
        u = e => {
          let n = {
            method: "POST",
            headers: {
              "client-language": "en",
              "content-type": "application/json",
            },
            body: JSON.stringify(e),
          };
          return s("/api", n);
        };
    },
    8430: function (e, n, t) {
      "use strict";
      t.d(n, {
        d: function () {
          return i;
        },
        u: function () {
          return r;
        },
      });
      let o = ["", "k", "M", "B", "T"],
        r = function (e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : " ";
          return "number" != typeof e
            ? null
            : e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, n);
        },
        i = e => {
          if (e < 1e3) return e.toString();
          let n = Math.ceil(Math.floor(e).toString().length / 3) - 1,
            t = Math.pow(1e3, n),
            r = (e / t).toFixed(n);
          return e % t <= 0.1 * t
            ? Number(r).toString() + o[n]
            : Number(r).toFixed(Math.min(n, 2)) + o[n];
        };
    },
    7212: function (e, n, t) {
      "use strict";
      var o, r, i, a;
      t.d(n, {
        U: function () {
          return r;
        },
        X: function () {
          return o;
        },
      }),
        ((i = o || (o = {}))[(i.NOT_FOUND = -32001)] = "NOT_FOUND"),
        (i[(i.INVALID_VALUE = -32028)] = "INVALID_VALUE"),
        (i[(i.INVALID_PARAM = -32602)] = "INVALID_PARAM"),
        ((a = r || (r = {}))[(a.API_FAILED_BATCH = 998)] = "API_FAILED_BATCH"),
        (a[(a.API_FAILED = 999)] = "API_FAILED"),
        (a[(a.FETCH_ERROR_GAME = 1002)] = "FETCH_ERROR_GAME"),
        (a[(a.FETCH_ERROR_USER = 1003)] = "FETCH_ERROR_USER"),
        (a[(a.FETCH_ERROR_GROUP_LB = 1004)] = "FETCH_ERROR_GROUP_LB"),
        (a[(a.GAME_ERROR_ORIGIN = 2e3)] = "GAME_ERROR_ORIGIN"),
        (a[(a.GAME_ERROR_SOURCE = 2001)] = "GAME_ERROR_SOURCE"),
        (a[(a.GAME_ERROR_DATA = 2002)] = "GAME_ERROR_DATA"),
        (a[(a.GAME_ERROR_GAMEPAD = 2003)] = "GAME_ERROR_GAMEPAD"),
        (a[(a.GAME_ERROR_SHARE = 2004)] = "GAME_ERROR_SHARE"),
        (a[(a.APP_ERROR_PASSWORD_RESET = 9e3)] = "APP_ERROR_PASSWORD_RESET"),
        (a[(a.APP_ERROR_PASSWORD_CHANGE = 9001)] = "APP_ERROR_PASSWORD_CHANGE"),
        (a[(a.APP_ERROR_GET = 9002)] = "APP_ERROR_GET"),
        (a[(a.GAMEEJS_WRONG_VERSION = 3e3)] = "GAMEEJS_WRONG_VERSION"),
        (a[(a.GAMEEJS_UNSUPPORTED_VERSION = 3001)] =
          "GAMEEJS_UNSUPPORTED_VERSION");
    },
    7447: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return rO;
          },
          default: function () {
            return rG;
          },
        });
      var o = t(5893),
        r = t(7294),
        i = t(9473),
        a = t(2182),
        l = t(8356),
        s = t(7236);
      let c = (0, s.oM)({
          name: "bot",
          initialState: {
            bot: null,
            subscriptionData: null,
            telegramGameDeepLinkBase: null,
            error: null,
          },
          reducers: {
            setData: (e, n) => ({ ...e, ...n.payload.bot }),
            setError: (e, n) => {
              e.error = n.payload.code;
            },
          },
        }),
        { setData: d, setError: u } = c.actions,
        p = {
          game: null,
          savedState: null,
          isReady: !1,
          isStarted: !1,
          isPaused: !1,
          isOver: !1,
          isSoundOn: !0,
          score: null,
          highscore: null,
          version: null,
          controller: null,
          capabilities: null,
        },
        g = (0, s.oM)({
          name: "game",
          initialState: p,
          reducers: {
            setData: (e, n) => {
              let { game: t, savedState: o, highscore: r } = n.payload;
              return { ...e, game: t, savedState: o, highscore: r };
            },
            init: (e, n) => {
              let { version: t, controller: o, capabilities: r } = n.payload;
              (e.version = t || null),
                (e.controller = o || null),
                (e.capabilities = r || null);
            },
            ready: e => {
              e.isReady = !0;
            },
            start: e => {
              (e.isStarted = !0),
                (e.isPaused = !1),
                (e.isOver = !1),
                (e.score = 0);
            },
            pause: e => {
              (e.isStarted = !1), (e.isPaused = !0);
            },
            unpause: e => {
              (e.isStarted = !0), (e.isPaused = !1);
            },
            setScore: (e, n) => {
              let { score: t } = n.payload;
              e.score = t;
            },
            setHighscore: (e, n) => {
              e.highscore = n.payload;
            },
            end: e => {
              (e.isStarted = !1), (e.isPaused = !1), (e.isOver = !0);
            },
            mute: e => {
              e.isSoundOn = !1;
            },
            unmute: e => {
              e.isSoundOn = !0;
            },
            reset: () => p,
          },
        }),
        {
          setData: h,
          init: m,
          ready: A,
          start: f,
          pause: x,
          unpause: b,
          setScore: E,
          setHighscore: w,
          end: v,
          mute: R,
          unmute: I,
          reset: y,
        } = g.actions;
      var _ = t(7484),
        C = t.n(_),
        j = t(9212),
        S = t.n(j),
        P = t(7412),
        O = t.n(P);
      C().extend(S()), C().extend(O());
      let G = e => {
          let n;
          return (
            "number" == typeof e &&
              (n = e.toString().length >= 13 ? e : 1e3 * e),
            "string" == typeof e &&
              (n =
                e.length >= 20
                  ? e
                  : e.toString().length >= 13
                  ? parseInt(e)
                  : 1e3 * parseInt(e)),
            C()(n).format()
          );
        },
        k = () => C()().format(),
        T = function (e, n) {
          let t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "seconds",
            o = C()(G(e)),
            r = C()(G(n));
          return r.diff(o, t);
        },
        Z = {
          isActive: !1,
          isPaused: !1,
          baseTime: 0,
          startedAt: null,
          stoppedAt: null,
        },
        M = (0, s.oM)({
          name: "timer",
          initialState: Z,
          reducers: {
            start: e => {
              let n = k();
              (e.isActive = !0),
                (e.isPaused = !1),
                (e.baseTime = 0),
                (e.startedAt = n),
                (e.stoppedAt = null);
            },
            reset: () => Z,
          },
          extraReducers(e) {
            e.addCase(x, e => {
              (e.isActive = !1), (e.isPaused = !0), (e.stoppedAt = k());
            })
              .addCase(b, e => {
                (e.isActive = !0),
                  (e.isPaused = !1),
                  e.startedAt &&
                    e.stoppedAt &&
                    ((e.baseTime =
                      e.baseTime + T(e.startedAt, e.stoppedAt, "seconds")),
                    (e.startedAt = k()),
                    (e.stoppedAt = null));
              })
              .addCase(v, e => {
                (e.isActive = !1), (e.isPaused = !1), (e.stoppedAt = k());
              })
              .addCase(y, () => Z);
          },
        }),
        { start: N, reset: z } = M.actions,
        D = (0, s.oM)({
          name: "user",
          initialState: {
            isLoggedIn: !1,
            id: null,
            firstname: null,
            lastname: null,
            nickname: null,
            country: null,
            photo: null,
            cheater: null,
          },
          reducers: {
            setData: (e, n) => ({ ...e, ...n.payload.user, isLoggedIn: !0 }),
          },
        }),
        { setData: L } = D.actions,
        U = (0, s.oM)({
          name: "leaderboards",
          initialState: {
            surrounding: [],
            group: [],
            groupHasMore: !0,
            groupRequestCount: 0,
            global: [],
            globalHasMore: !0,
            globalRequestCount: 0,
          },
          reducers: {
            setData: (e, n) => {
              let { surrounding: t, global: o } = n.payload;
              (e.surrounding = t),
                (e.global = o),
                o.length > 0 && (e.globalRequestCount = 20);
            },
            setSurroundingData(e, n) {
              e.surrounding = n.payload.ranking;
            },
            setGroupData(e, n) {
              let { ranking: t, limit: o } = n.payload;
              0 === e.groupRequestCount
                ? (e.group = t)
                : (e.group = [...e.group, ...t]),
                (e.groupRequestCount += o),
                (e.groupHasMore = t.length >= Math.floor(0.85 * o));
            },
            setGlobalData(e, n) {
              let { ranking: t, limit: o } = n.payload;
              0 === e.globalRequestCount
                ? (e.global = t)
                : (e.global = [...e.global, ...t]),
                (e.globalRequestCount += o),
                (e.globalHasMore = t.length >= Math.floor(0.85 * o));
            },
          },
        }),
        {
          setData: B,
          setSurroundingData: H,
          setGroupData: W,
          setGlobalData: F,
        } = U.actions,
        J = {
          [c.name]: c.reducer,
          [D.name]: D.reducer,
          [g.name]: g.reducer,
          [M.name]: M.reducer,
          [U.name]: U.reducer,
        },
        q = (0, l.UY)(J),
        V = (0, s.xC)({ reducer: q, devTools: !0 });
      var Y = t(7212);
      let K = (e, n) => ({
          id: e.id,
          firstname: e.personal.firstname,
          lastname: e.personal.lastname,
          nickname: e.personal.nickname,
          country: e.personal.countryId,
          photo: e.personal.photo,
          cheater: n.cheater,
        }),
        Q = function (e, n, t) {
          let o =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "full";
          return "full" === o && e && n
            ? "".concat(e, " ").concat(n)
            : "short" === o && e && n
            ? "".concat(e, " ").concat(n[0], ".")
            : e || n || t || "Player";
        };
      var X = t(7593);
      let $ = e => {
          let {
            botName: n = "telegram",
            botUserIdentifier: t = null,
            botGameUrl: o,
          } = e;
          return {
            jsonrpc: "2.0",
            id: "user.authentication.botLogin",
            method: "user.authentication.botLogin",
            params: { botName: n, botUserIdentifier: t, botGameUrl: o },
          };
        },
        ee = e => {
          let { gameUrl: n } = e;
          return {
            jsonrpc: "2.0",
            id: "game.getWebGameplayDetails",
            method: "game.getWebGameplayDetails",
            params: { gameUrl: n },
          };
        },
        en = e => {
          let { gameUrl: n, type: t, limit: o, offset: r } = e;
          return {
            jsonrpc: "2.0",
            id: "leaderboards.getWebByGame",
            method: "leaderboards.getWebByGame",
            params: {
              gameUrl: n,
              type: t,
              pagination: { limit: o, offset: r },
            },
          };
        },
        et = e => {
          let n = en(e);
          return (0, X.JP)(n);
        },
        eo = e => {
          let { gameUrl: n } = e;
          return {
            jsonrpc: "2.0",
            id: "leaderboards.getWebSurroundingByGame",
            method: "leaderboards.getWebSurroundingByGame",
            params: { gameUrl: n },
          };
        },
        er = e => {
          let { gameUrl: n } = e,
            t = $({ botGameUrl: n }),
            o = ee({ gameUrl: n });
          return (0, X.a0)([o, t]).then(e =>
            Array.isArray(e) ? { gameResponse: e[0], userResponse: e[1] } : null
          );
        },
        ei = e => {
          let { gameUrl: n } = e,
            t = eo({ gameUrl: n }),
            o = en({ gameUrl: n, type: "global", limit: 20, offset: 0 });
          return (0, X.a0)([t, o]).then(e =>
            Array.isArray(e)
              ? {
                  groupLeaderboardsResponse: e[0],
                  globalLeaderboardsResponse: e[1],
                }
              : null
          );
        };
      var ea = t(7609),
        el = t(7297),
        es = t(9521),
        ec = t(1697),
        ed = t(3657);
      let eu = i.I0,
        ep = i.v9,
        eg = e => (e.isTablet ? "tablet" : e.isMobile ? "mobile" : "desktop");
      var eh = t(2568),
        em = t.n(eh),
        eA = t(8697),
        ef = t(1591),
        ex = t(9601);
      let eb = () =>
          ef.yF
            ? "en"
            : window.navigator
            ? navigator.languages
              ? [...navigator.languages]
              : navigator.language
              ? [navigator.language]
              : null
            : null,
        eE = () => {
          let e = eb() || ["en-US"];
          return e[0];
        },
        ew = (e => {
          let n = eb() || [],
            t = n[0].split("-");
          return t[0].toLowerCase() || "en";
        })(),
        ev = e => {
          if ("string" != typeof e) return !1;
          let n = Number(e);
          return Number.isInteger(n) && n > 0;
        };
      var eR = t(1747);
      let eI = "gameplayId",
        ey = () => {
          if (!eR.f5) return 0;
          try {
            let e = window.localStorage.getItem(eI),
              n = ev(e);
            if (!n) return 0;
            return Number(e);
          } catch (t) {
            return 0;
          }
        },
        e_ = () => {
          if (!eR.f5) return;
          let e = ey();
          window.localStorage.setItem(eI, (e + 1).toString());
        },
        eC = e => e[M.name],
        ej = (0, eA.P1)(
          e => eC(e).baseTime,
          e => eC(e).startedAt,
          e => eC(e).stoppedAt,
          (e, n, t) => {
            if (!n || !t) return null;
            let o = T(n, t, "seconds");
            return o + e;
          }
        ),
        eS = e => e[D.name],
        eP = e => eS(e).isLoggedIn,
        eO = e => eS(e).id,
        eG = e => eS(e).firstname,
        ek = e => eS(e).lastname,
        eT = e => eS(e).nickname,
        eZ = e => eS(e).photo,
        eM = (0, eA.P1)(
          e => eS(e).cheater,
          e => !!(null == e ? void 0 : e.banStatus)
        );
      (0, eA.P1)(eG, ek, eT, (e, n, t) => Q(e, n, t, "full"));
      let eN = (0, eA.P1)(eG, ek, eT, (e, n, t) => Q(e, n, t, "short")),
        ez = (0, eA.P1)(eO, eG, ek, eT, eZ, (e, n, t, o, r) => ({
          id: e || 1,
          firstname: n || "",
          lastname: t || "",
          nickname: o || "",
          photo: r,
        })),
        eD = e => e[g.name],
        eL = e => eD(e).isReady,
        eU = e => eD(e).isStarted,
        eB = e => eD(e).isPaused,
        eH = e => eD(e).isOver,
        eW = e => eD(e).isSoundOn,
        eF = e => eD(e).score,
        eJ = e => eD(e).highscore,
        eq = e => eD(e).version,
        eV = (0, eA.P1)(eU, eB, eH, (e, n, t) => t || e || n),
        eY = (0, eA.P1)(eq, e => "1.0.0" === e),
        eK = e => eD(e).game,
        eQ = (0, eA.P1)(eK, e => (null == e ? void 0 : e.id)),
        eX = (0, eA.P1)(eK, e => (null == e ? void 0 : e.code)),
        e$ = (0, eA.P1)(eK, e => (null == e ? void 0 : e.name)),
        e0 = (0, eA.P1)(eK, e => (null == e ? void 0 : e.image)),
        e1 = (0, eA.P1)(eK, e => (null == e ? void 0 : e.thumb)),
        e2 = (0, eA.P1)(eK, e => (null == e ? void 0 : e.release)),
        e6 = (0, eA.P1)(eK, e => (null == e ? void 0 : e.url)),
        e3 = (0, eA.P1)(eK, e => (null == e ? void 0 : e.gamepadId)),
        e4 = (0, eA.P1)(e2, e =>
          e
            ? e.package.substring(0, e.package.lastIndexOf("/")) +
              "/data/index.html"
            : null
        ),
        e7 = (0, eA.P1)(e2, e => {
          if (!e) return null;
          try {
            return new URL(e.package).origin;
          } catch (n) {
            return console.error("Cannot get game origin", n), null;
          }
        }),
        e5 = (0, eA.P1)(
          e => eS(e).country,
          eW,
          e => eD(e).savedState,
          (e, n) => n,
          (e, n, t, o) => ({
            gameContext: "normal",
            environment: ef.BB ? "production" : "development",
            platform: o ? "mobile_web" : "web",
            country: e || "",
            locale: eE().replace("-", "_"),
            sound: n,
            ...(t && { saveState: t }),
          })
        ),
        e8 = (0, eA.P1)(eO, eG, ek, eN, eZ, eJ, (e, n, t, o, r, i) =>
          e
            ? {
                userID: e,
                name: o || "Player",
                firstName: n || "",
                lastName: t || "",
                avatar:
                  r ||
                  "".concat(
                    "https://prizes.gamee.com",
                    "/assets/avatars/fallback-avatar.jpg"
                  ),
                highScore: i || 0,
              }
            : null
        ),
        e9 = (0, eA.P1)(
          eQ,
          eF,
          ej,
          e2,
          (e, n) => n,
          (e, n, t, o, r) => {
            let i = window.location.pathname,
              { saveState: a, isSaveStateEvent: l } = r,
              s = ey();
            return (e_(), e && o)
              ? {
                  gameId: e,
                  score: n || 0,
                  playTime: t || 0,
                  gameUrl: i,
                  releaseNumber: o.number,
                  createdTime: k(),
                  metadata: { gameplayId: s + 1 },
                  checksum: em()(
                    ""
                      .concat(n || 0, ":")
                      .concat(t || 0, ":")
                      .concat(i, ":")
                      .concat(
                        a || "",
                        ":crmjbjm3lczhlgnek9uaxz2l9svlfjw14npauhen"
                      )
                  ),
                  isSaveState: l,
                  gameStateData: a,
                  gameplayOrigin: "game",
                }
              : null;
          }
        ),
        ne = (0, eA.P1)(
          eQ,
          (e, n) => n,
          (e, n) =>
            e
              ? {
                  events: [
                    {
                      gameId: e,
                      name: n.eventName,
                      value: n.eventValue,
                      eventCreatedTime: k(),
                    },
                  ],
                }
              : null
        ),
        nn = (0, eA.P1)(eQ, e => {
          if (!e) return null;
          let n = (0, ex.gg)(window.location.pathname);
          return {
            gameId: e,
            platform: n ? "bot-telegram" : "web",
            adAction: "view",
            adType: "rewarded",
            adPlace: "in-game",
            adNetwork: "admob",
          };
        }),
        nt = e => e[c.name],
        no = e => nt(e).error;
      var nr = t(7135),
        ni = t(8460);
      let na = [30, 31],
        nl = [];
      ef.BB ? nl.push(124, 104, 150, 170) : nl.push(110, 140, 175, 281, 283);
      let ns =
          "https://googleads.g.doubleclick.net/pagead/ads?ad_type=video_image&client=ca-games-pub-5890837460405456" +
          "&description_url=".concat(encodeURIComponent((0, ex.lb)())) +
          "&channel=9381307758&max_ad_duration=15000&videoad_start_delay=0&hl=en",
        nc = () =>
          ef.yF
            ? 0
            : window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth,
        nd = () =>
          ef.yF
            ? 0
            : window.innerHeight ||
              document.documentElement.clientHeight ||
              document.body.clientHeight;
      function nu() {
        let e = (0, el.Z)([
          "\n  ",
          ";\n  z-index: 9999;\n  display: none;\n  background: ",
          ";\n",
        ]);
        return (
          (nu = function () {
            return e;
          }),
          e
        );
      }
      function np() {
        let e = (0, el.Z)(["\n  ", ";\n"]);
        return (
          (np = function () {
            return e;
          }),
          e
        );
      }
      let ng = es.ZP.div.withConfig({ componentId: "sc-20769f04-0" })(
          nu(),
          nr.tA.allFix(0),
          nr.Il.BLACK
        ),
        nh = es.ZP.video.withConfig({ componentId: "sc-20769f04-1" })(
          np(),
          nr.tA.allAbs(0)
        ),
        nm = (0, r.createContext)({
          status: "idle",
          isAdReady: !1,
          playAd: () => {},
        }),
        nA = e => {
          let { children: n } = e,
            t = (0, ed.Gq)(
              "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
            ),
            [i, a] = (0, r.useState)(null),
            l = (0, r.useRef)(null),
            s = (0, r.useRef)(null),
            c = (0, r.useRef)(null),
            d = (0, r.useRef)(null),
            u = (0, r.useRef)(null),
            p = e => {
              s.current && ((d.current = e.getAdsManager(s.current)), a(!0));
            },
            g = e => {
              a(!1),
                e && console.error("Ad failed to load: ", e.getError()),
                d.current && d.current.destroy(),
                l.current && (l.current.style.display = "none");
            },
            h = (0, r.useCallback)(() => {
              if (!c.current) return g();
              let e = new window.google.ima.AdsRequest();
              (e.adTagUrl = ns),
                (e.linearAdSlotWidth = nc()),
                (e.linearAdSlotHeight = nd()),
                (e.nonLinearAdSlotWidth = nc()),
                (e.nonLinearAdSlotHeight = nd()),
                (e.forceNonLinearFullSlot = !0),
                c.current.requestAds(e);
            }, []),
            m = (e, n) => {
              if (!l.current || !d.current) return g();
              let t = () => {
                  e && e();
                },
                o = () => {
                  n && n(),
                    l.current && (l.current.style.display = "none"),
                    h();
                };
              d.current.addEventListener(
                window.google.ima.AdErrorEvent.Type.AD_ERROR,
                g
              ),
                d.current.addEventListener(
                  window.google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
                  t
                ),
                d.current.addEventListener(
                  window.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
                  o
                );
              try {
                d.current.init(nc(), nd(), window.google.ima.ViewMode.NORMAL),
                  d.current.start(),
                  (l.current.style.display = "block");
              } catch (r) {
                console.log("AdsManager could not be started -> ", r),
                  (l.current.style.display = "none"),
                  a(!1);
              }
            };
          return (
            (0, r.useEffect)(() => {
              "ready" === t &&
                l.current &&
                ((u.current = new window.google.ima.AdDisplayContainer(
                  l.current
                )),
                (c.current = new window.google.ima.AdsLoader(u.current)),
                u.current.initialize(),
                c.current.addEventListener(
                  window.google.ima.AdErrorEvent.Type.AD_ERROR,
                  g
                ),
                c.current.addEventListener(
                  window.google.ima.AdsManagerLoadedEvent.Type
                    .ADS_MANAGER_LOADED,
                  p
                ),
                h()),
                "error" === t && a(!1);
            }, [t, l, h, c, u]),
            (0, o.jsxs)(nm.Provider, {
              value: { status: t, isAdReady: i, playAd: m },
              children: [
                (0, o.jsx)(ng, {
                  ref: l,
                  children: (0, o.jsx)(nh, { ref: s }),
                }),
                n,
              ],
            })
          );
        };
      var nf = t(559);
      let nx = (e, n) => {
          try {
            var t, o;
            null === (t = e.current) ||
              void 0 === t ||
              null === (o = t.contentWindow) ||
              void 0 === o ||
              o.postMessage(n, "*");
          } catch (r) {
            nf.$d && console.error("Post message to iFrame failed: ", r);
          }
        },
        nb = (e, n, t, o) =>
          (nf.$d &&
            console.log(
              "\n*DEBUG* game <--- platform\nrequest("
                .concat(t, ") - ")
                .concat(n)
                .concat(o ? " - LEGACY" : "")
            ),
          null === o)
            ? console.error("Post message request before game init")
            : o
            ? nx(e, [n])
            : void nx(e, { request: { method: n, messageId: t, data: {} } }),
        nE = (e, n, t, o) => {
          if (
            (nf.$d &&
              console.log(
                "\n*DEBUG* game <--- platform\nresponse("
                  .concat(n, ") - ")
                  .concat(JSON.stringify(t))
              ),
            null === o)
          )
            return console.error("Post message response before game init");
          o || nx(e, { response: { messageId: n, data: t } });
        },
        nw = 0,
        nv = e => {
          let {
              iframeRef: n,
              iframeOrigin: t,
              config: o,
              callbacks: i,
              playAd: a,
            } = e,
            [l, s] = (0, r.useState)(null),
            c = () => {
              try {
                var e, t;
                null === (e = n.current) ||
                  void 0 === e ||
                  null === (t = e.contentWindow) ||
                  void 0 === t ||
                  t.focus();
              } catch (o) {
                console.error("Cannot focus game iframe: ", o);
              }
            },
            d = (0, r.useMemo)(
              () => ({
                start: () => {
                  nb(n, l ? "restart" : "start", nw, l), (nw += 1);
                },
                pause: () => {
                  nb(n, "pause", nw, l), (nw += 1);
                },
                unpause: () => {
                  nb(n, "resume", nw, l), (nw += 1);
                },
                mute: () => {
                  nb(n, "mute", nw, l), (nw += 1);
                },
                unmute: () => {
                  nb(n, "unmute", nw, l), (nw += 1);
                },
                legacy__buttonDown: () => {
                  nb(n, "button_button_down", nw, !0), (nw += 1);
                },
                legacy__buttonUp: () => {
                  nb(n, "button_button_up", nw, !0), (nw += 1);
                },
                legacy__buttonLeftDown: () => {
                  nb(n, "button_left_down", nw, !0), (nw += 1);
                },
                legacy__buttonLeftUp: () => {
                  nb(n, "button_left_up", nw, !0), (nw += 1);
                },
                legacy__buttonRightDown: () => {
                  nb(n, "button_right_down", nw, !0), (nw += 1);
                },
                legacy__buttonRightUp: () => {
                  nb(n, "button_right_up", nw, !0), (nw += 1);
                },
              }),
              [n, l]
            ),
            u = (0, r.useCallback)(
              e => {
                if (e.data.request && void 0 !== e.data.request.method) {
                  let { messageId: t, method: r, data: l } = e.data.request;
                  switch (
                    (nf.$d &&
                      console.log(
                        "\n*DEBUG* game ---> platform\nrequest("
                          .concat(t, ") - ")
                          .concat(r, " - ")
                          .concat(JSON.stringify(l))
                      ),
                    r)
                  ) {
                    case "init":
                      nE(n, t, o.initData, !1), i.onGameInit(l), s(!1);
                      break;
                    case "gameReady":
                      i.onGameReady && i.onGameReady();
                      break;
                    case "gameStart":
                      i.onGameStart && i.onGameStart();
                      break;
                    case "gameOver":
                      i.onGameOver && i.onGameOver(l);
                      break;
                    case "updateScore":
                      i.onUpdateScore && i.onUpdateScore(l);
                      break;
                    case "loadRewardedVideo": {
                      let c =
                        o.withAds &&
                        "function" == typeof i.onRewardedVideoPlayed;
                      nE(n, t, { videoLoaded: c }, !1);
                      break;
                    }
                    case "showRewardedVideo": {
                      let u = () => {
                        i.onRewardedVideoPlayed && i.onRewardedVideoPlayed(),
                          nE(n, t, { videoPlayed: !0 }, !1),
                          d.unpause();
                      };
                      a(d.pause, u);
                      break;
                    }
                    case "logEvent":
                      i.onLogEvent && i.onLogEvent(l);
                      break;
                    case "saveState":
                      i.onSaveState && i.onSaveState(l);
                      break;
                    case "requestSocial": {
                      let p = o.playerData || {},
                        g = o.groupData || [];
                      nE(n, t, { player: p, friends: g }, !1),
                        i.onRequestSocial && i.onRequestSocial();
                      break;
                    }
                    case "requestPlayerData": {
                      let h = o.playerData || {};
                      nE(n, t, { player: h }, !1),
                        i.onRequestPlayerData && i.onRequestPlayerData();
                      break;
                    }
                    default:
                      nf.$d && console.error("Unsupported method - ".concat(r));
                  }
                }
                if (e.data.response && void 0 !== e.data.response.method) {
                  let { messageId: m, method: A, data: f } = e.data.response;
                  nf.$d &&
                    console.log(
                      "\n*DEBUG* game ---> platform\nresponse("
                        .concat(m, ") - ")
                        .concat(A, " - ")
                        .concat(JSON.stringify(f))
                    );
                }
              },
              [n, d, i, o, a]
            ),
            p = (0, r.useCallback)(
              e => {
                nf.$d &&
                  console.log(
                    "\n*DEBUG* game ---> platform\nLEGACY - ".concat(
                      JSON.stringify(e.data)
                    )
                  );
                let [n, t] = e.data;
                switch (n) {
                  case "request-controller":
                    i.legacy__onRequestController &&
                      i.legacy__onRequestController(t),
                      s(!0);
                    break;
                  case "game-loaded":
                    i.legacy__onGameLoaded && i.legacy__onGameLoaded(), s(!0);
                    break;
                  case "game-start":
                    i.legacy__onGameStart && i.legacy__onGameStart();
                    break;
                  case "game-paused":
                    i.legacy__onGamePaused && i.legacy__onGamePaused();
                    break;
                  case "score":
                    i.legacy__onGameScore && i.legacy__onGameScore(t);
                    break;
                  case "game-over":
                    i.legacy__onGameOver && i.legacy__onGameOver();
                    break;
                  case "additional-controller":
                    break;
                  default:
                    nf.$d && console.error("Unsupported method - ".concat(n));
                }
              },
              [i]
            );
          return (
            (0, r.useEffect)(() => {
              let e = e => {
                if (e.origin === t) {
                  if (Array.isArray(e.data)) return p(e);
                  u(e);
                }
              };
              return (
                t && window.addEventListener("message", e),
                () => window.removeEventListener("message", e)
              );
            }, [t, u, p]),
            { emitter: d, focusIframe: c, isLegacy: l }
          );
        };
      var nR = t(1249),
        nI = t.n(nR);
      let ny = e => {
          let {
            gameId: n,
            adAction: t,
            adType: o,
            adPlace: r,
            adNetwork: i,
            platform: a,
          } = e;
          return {
            jsonrpc: "2.0",
            id: "ad.saveAction",
            method: "ad.saveAction",
            params: {
              gameId: n,
              adAction: t,
              adType: o,
              adPlace: r,
              adNetwork: i,
              platform: a,
            },
          };
        },
        n_ = e => {
          let n = ny(e);
          return (0, X.JP)(n);
        },
        nC = e => {
          let { events: n } = e;
          return {
            jsonrpc: "2.0",
            id: "game.logEvent",
            method: "game.logEvent",
            params: { events: n },
          };
        },
        nj = e => {
          let n = nC(e);
          return (0, X.JP)(n);
        },
        nS = e => {
          let {
            gameId: n,
            score: t,
            playTime: o,
            gameUrl: r,
            releaseNumber: i,
            replayVariant: a = null,
            replayDataChecksum: l = null,
            replayData: s = null,
            createdTime: c,
            metadata: d = {},
            checksum: u,
            isSaveState: p = !1,
            gameStateData: g = null,
            gameplayOrigin: h = "game",
          } = e;
          return {
            jsonrpc: "2.0",
            id: "game.saveWebGameplay",
            method: "game.saveWebGameplay",
            params: {
              gameplayData: {
                gameId: n,
                score: t,
                playTime: o,
                gameUrl: r,
                releaseNumber: i,
                replayVariant: a,
                replayDataChecksum: l,
                replayData: s,
                createdTime: c,
                metadata: d,
                checksum: u,
                isSaveState: p,
                gameStateData: g,
                gameplayOrigin: h,
              },
            },
          };
        },
        nP = e => {
          let n = nS(e);
          return (0, X.JP)(n);
        },
        nO = (e, n, t) => (o, r) => {
          let i = (0, ex.gg)(window.location.pathname);
          if (!i) return;
          let l = r(),
            s = e9(l, { saveState: e, isSaveStateEvent: n });
          if (
            (s &&
              nP(s).then(e => {
                e.error ||
                  o(H({ ranking: e.result.surroundingRankings[0].ranking }));
              }),
            t)
          ) {
            let c = e$(l),
              d = eF(l),
              u = ej(l);
            !n && c && d && u && (0, a.lh)(eg(t), c, d, u);
          }
        },
        nG = e => (n, t) => {
          let o = (0, ex.gg)(window.location.pathname);
          if (!o) return;
          let r = t(),
            i = ne(r, e),
            a = eH(r);
          a || (i ? nj(i) : console.error("Cannot get game.logEvent data")); //! do NOT log game events after game over
        },
        nk = () => (e, n) => {
          let t = (0, ex.gg)(window.location.pathname);
          if (!t) return;
          let o = n(),
            r = nn(o);
          r ? n_(r) : console.error("Cannot get ad.saveAction data");
        },
        nT = e => n => {
          let t = e.version;
          return ((null == t ? void 0 : t.split(".").length) === 2 &&
            ((t += ".0"), (e.version = t)),
          (null == t ? void 0 : t.split(".").length) !== 3)
            ? n(u({ code: Y.U.GAMEEJS_WRONG_VERSION }))
            : nI().lt(t, "2.9.0")
            ? void n(m(e))
            : n(u({ code: Y.U.GAMEEJS_UNSUPPORTED_VERSION }));
        },
        nZ = () => e => {
          e(A());
        },
        nM = () => (e, n) => {
          let t = n(),
            o = eU(t),
            r = eq(t);
          if (o) {
            nI().gte(r, "2.5.0") && e(N()); //! from GameeJS version 2.5.0, games must send gameStart event which starts game timer. Lower versions start game timer on overlay hide
            return;
          }
          e(f()), nI().lt(r, "2.5.0") && e(N());
        },
        nN = () => (e, n) => {
          let t = n(),
            o = eB(t);
          o || e(x());
        },
        nz = () => (e, n) => {
          let t = n(),
            o = eB(t);
          o && e(b());
        },
        nD = e => (n, t) => {
          let o = t(),
            r = eH(o);
          r || n(E(e));
        },
        nL = (e, n) => (t, o) => {
          let r = o(),
            i = eM(r),
            a = eH(r),
            l = eF(r) || 0,
            s = eJ(r) || 0;
          !a &&
            (t(v()),
            i || t(nO((null == e ? void 0 : e.state) || null, !1, n)),
            l > s && t(w(l)));
        },
        nU = () => e => {
          e(R());
        },
        nB = () => e => {
          e(I());
        },
        nH = e => n => {
          n(nO(e.state, !0));
        },
        nW = e => (n, t) => {
          let o = t(),
            r = eq(o),
            i = eL(o);
          r || n(m({ version: "1.0.0", controller: e, capabilities: null })),
            i || n(A());
        },
        nF = () => e => e(nW(null)),
        nJ = () => e => e(nM()),
        nq = () => e => e(nN()),
        nV = e => n => n(nD({ score: e })),
        nY = e => n => n(nL(null, e)),
        nK = (0, r.createContext)({
          iframeRef: { current: null },
          emitter: {
            start: () => {},
            pause: () => {},
            unpause: () => {},
            mute: () => {},
            unmute: () => {},
            legacy__buttonDown: () => {},
            legacy__buttonUp: () => {},
            legacy__buttonLeftDown: () => {},
            legacy__buttonLeftUp: () => {},
            legacy__buttonRightDown: () => {},
            legacy__buttonRightUp: () => {},
          },
          focusIframe: () => {},
        }),
        nQ = e => {
          let { children: n } = e,
            t = eu(),
            { isAdReady: i, playAd: a } = (0, r.useContext)(nm),
            { device: l } = (0, r.useContext)(ec.I),
            s = (0, r.useRef)(null),
            c = ep(e7),
            d = ep(e => e5(e, l.isMobile)),
            u = ep(e8),
            { emitter: p, focusIframe: g } = nv({
              iframeRef: s,
              iframeOrigin: c,
              config: { initData: d, playerData: u, withAds: i },
              callbacks: {
                onGameInit: e => t(nT(e)),
                onGameReady: () => t(nZ()),
                onGameStart: () => t(nM()),
                onGameOver: e => t(nL(e, l)),
                onUpdateScore: e => t(nD(e)),
                onLogEvent: e => t(nG(e)),
                onSaveState: e => t(nH(e)),
                onRewardedVideoPlayed: () => t(nk()),
                legacy__onRequestController: e => t(nW(e)),
                legacy__onGameLoaded: () => t(nF()),
                legacy__onGameStart: () => t(nJ()),
                legacy__onGamePaused: () => t(nq()),
                legacy__onGameScore: e => t(nV(e)),
                legacy__onGameOver: () => t(nY(l)),
              },
              playAd: a,
            });
          return (0, o.jsx)(nK.Provider, {
            value: { iframeRef: s, emitter: p, focusIframe: g },
            children: n,
          });
        };
      function nX() {
        let e = (0, el.Z)([
          "\n  ",
          ";\n  ",
          ";\n  ",
          ";\n  z-index: 1;\n  display: flex;\n  cursor: pointer;\n",
        ]);
        return (
          (nX = function () {
            return e;
          }),
          e
        );
      }
      function n$() {
        let e = (0, el.Z)([
          "\n  width: 100%;\n  height: ",
          ";\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ",
          ";\n",
        ]);
        return (
          (n$ = function () {
            return e;
          }),
          e
        );
      }
      function n0() {
        let e = (0, el.Z)([
          "\n  position: relative;\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  max-width: ",
          ";\n  max-height: ",
          ";\n  border: ",
          ";\n  background: ",
          ";\n  transition: background 50ms linear, border 50ms linear;\n",
        ]);
        return (
          (n0 = function () {
            return e;
          }),
          e
        );
      }
      let n1 = es.ZP.div.withConfig({ componentId: "sc-612d8e26-0" })(
          nX(),
          nr.tA.disableCallout,
          nr.tA.disableSelect,
          nr.tA.allAbs(0)
        ),
        n2 = es.ZP.div.withConfig({ componentId: "sc-612d8e26-1" })(
          n$(),
          e => {
            let { $height: n } = e;
            return "".concat(n, "px;");
          },
          nr.Il.GRAY_700
        ),
        n6 = es.ZP.div.withConfig({ componentId: "sc-612d8e26-2" })(
          n0(),
          e => {
            let { $size: n } = e;
            return "".concat(n, "px;");
          },
          e => {
            let { $size: n } = e;
            return "".concat(n, "px;");
          },
          e => {
            let { $size: n, $isActive: t } = e;
            return ""
              .concat(Math.round(0.05 * n), "px solid ")
              .concat(t ? nr.Il.GREEN_300 : nr.Il.GRAY_300, ";");
          },
          e => {
            let { $isActive: n } = e;
            return n ? nr.Il.GREEN_500 : nr.Il.GRAY_500;
          }
        ),
        n3 = e => {
          let { width: n, height: t } = e,
            { emitter: i } = (0, r.useContext)(nK),
            [a, l] = (0, r.useState)(!1),
            s = t - n,
            c = () => {
              l(!0), i.legacy__buttonDown();
            },
            d = () => {
              l(!1), i.legacy__buttonUp();
            };
          return (0, o.jsxs)(r.Fragment, {
            children: [
              (0, o.jsx)(n1, {
                onMouseDown: c,
                onMouseUp: d,
                onTouchStart: c,
                onTouchEnd: d,
                onTouchCancel: d,
              }),
              t > n &&
                (0, o.jsx)(n2, {
                  $height: s,
                  children: (0, o.jsx)(n6, {
                    $isActive: a,
                    $size: Math.round(0.65 * Math.min(n, s)),
                  }),
                }),
            ],
          });
        };
      function n4() {
        let e = (0, el.Z)([
          "\n  ",
          ";\n  ",
          ";\n  ",
          ";\n  z-index: 2;\n  display: flex;\n  cursor: pointer;\n\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (n4 = function () {
            return e;
          }),
          e
        );
      }
      function n7() {
        let e = (0, el.Z)([
          "\n  z-index: 1;\n  width: 100%;\n  height: ",
          ";\n  background: ",
          ";\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n",
        ]);
        return (
          (n7 = function () {
            return e;
          }),
          e
        );
      }
      function n5() {
        let e = (0, el.Z)([
          "\n  ",
          ";\n  ",
          ";\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  max-width: ",
          ";\n  max-height: ",
          ";\n  border: ",
          ";\n  background: ",
          ";\n  transition: background 50ms linear, border 50ms linear;\n",
        ]);
        return (
          (n5 = function () {
            return e;
          }),
          e
        );
      }
      let n8 = es.ZP.div.withConfig({ componentId: "sc-86cd571c-0" })(
          n4(),
          nr.tA.disableCallout,
          nr.tA.disableSelect,
          nr.tA.allAbs(0),
          e => {
            let { $isLeft: n } = e;
            return n && "right: 50%;";
          },
          e => {
            let { $isRight: n } = e;
            return n && "left: 50%;";
          }
        ),
        n9 = es.ZP.div.withConfig({ componentId: "sc-86cd571c-1" })(
          n7(),
          e => {
            let { $height: n } = e;
            return "".concat(n, "px;");
          },
          nr.Il.GRAY_700
        ),
        te = es.ZP.div.withConfig({ componentId: "sc-86cd571c-2" })(
          n5(),
          nr.tA.disableCallout,
          nr.tA.disableSelect,
          e => {
            let { $size: n } = e;
            return "".concat(n, "px;");
          },
          e => {
            let { $size: n } = e;
            return "".concat(n, "px;");
          },
          e => {
            let { $size: n, $isActive: t } = e;
            return ""
              .concat(Math.round(0.05 * n), "px solid ")
              .concat(t ? nr.Il.GREEN_300 : nr.Il.GRAY_300, ";");
          },
          e => {
            let { $isActive: n } = e;
            return n ? nr.Il.GREEN_500 : nr.Il.GRAY_500;
          }
        ),
        tn = e => {
          let { width: n, height: t } = e,
            { emitter: i, focusIframe: a } = (0, r.useContext)(nK),
            [l, s] = (0, r.useState)(!1),
            [c, d] = (0, r.useState)(!1),
            u = t - n,
            p = Math.round(0.65 * Math.min(n / 2, u)),
            g = () => {
              s(!0), i.legacy__buttonLeftDown();
            },
            h = () => {
              s(!1), i.legacy__buttonLeftUp(), a();
            },
            m = () => {
              d(!0), i.legacy__buttonRightDown();
            },
            A = () => {
              d(!1), i.legacy__buttonRightUp(), a();
            };
          return (0, o.jsxs)(r.Fragment, {
            children: [
              (0, o.jsx)(n8, {
                onMouseDown: g,
                onMouseUp: h,
                onTouchStart: g,
                onTouchEnd: h,
                onTouchCancel: h,
                $isLeft: !0,
              }),
              (0, o.jsx)(n8, {
                onMouseDown: m,
                onMouseUp: A,
                onTouchStart: m,
                onTouchEnd: A,
                onTouchCancel: A,
                $isRight: !0,
              }),
              t > n &&
                (0, o.jsxs)(n9, {
                  $height: u,
                  children: [
                    (0, o.jsx)(te, {
                      $isActive: l,
                      $size: p,
                      children: (0, o.jsx)(ni.JO, {
                        type: "chevron-left",
                        size: Math.round(p / 2),
                        color: nr.Il.BLACK_50,
                      }),
                    }),
                    (0, o.jsx)(te, {
                      $isActive: c,
                      $size: p,
                      children: (0, o.jsx)(ni.JO, {
                        type: "chevron-right",
                        size: Math.round(p / 2),
                        color: nr.Il.BLACK_50,
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        tt = e => {
          let n = ep(e3);
          return 30 === n
            ? (0, o.jsx)(n3, { ...e })
            : 31 === n
            ? (0, o.jsx)(tn, { ...e })
            : null;
        };
      function to() {
        let e = (0, el.Z)([
          "\n  position: relative;\n  z-index: 1;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n",
        ]);
        return (
          (to = function () {
            return e;
          }),
          e
        );
      }
      function tr() {
        let e = (0, el.Z)([
          "\n  color-scheme: none;\n  flex: 1;\n  width: ",
          ";\n  height: ",
          ";\n  opacity: ",
          ";\n  transition: opacity 1000ms ease;\n",
        ]);
        return (
          (tr = function () {
            return e;
          }),
          e
        );
      }
      let ti = es.ZP.div.withConfig({ componentId: "sc-1ac167b9-0" })(to()),
        ta = es.ZP.iframe.withConfig({ componentId: "sc-1ac167b9-1" })(
          tr(),
          e => {
            let { $width: n } = e;
            return n;
          },
          e => {
            let { $height: n } = e;
            return n;
          },
          e => {
            let { $opacity: n } = e;
            return n;
          }
        ),
        tl = () => {
          let { iframeRef: e } = (0, r.useContext)(nK),
            n = (0, r.useRef)(null),
            { width: t, height: i } = (0, ed.hV)(n),
            [a, l] = (0, r.useState)(!1),
            s = ep(eQ),
            c = ep(e$),
            d = ep(e3),
            u = ep(e4),
            p = ep(e7);
          if (!u) throw Error(Y.U.GAME_ERROR_SOURCE.toString());
          if (!p) throw Error(Y.U.GAME_ERROR_ORIGIN.toString());
          if (!s || !c || !d) throw Error(Y.U.GAME_ERROR_DATA.toString());
          let g = nl.includes(s),
            h = na.includes(d),
            m = h && i > t,
            { iframeWidth: A, iframeHeight: f } = (0, r.useMemo)(() => {
              let e = t,
                n = i;
              if (h || g) {
                let o = Math.min(t, i);
                (e = o), (n = o);
              }
              return { iframeWidth: e, iframeHeight: n };
            }, [i, t, h, g]);
          return (0, o.jsxs)(ti, {
            ref: n,
            children: [
              !!A &&
                !!f &&
                (0, o.jsx)(ta, {
                  ref: e,
                  src: u,
                  title: c,
                  scrolling: "no",
                  frameBorder: "0",
                  onLoad: () => l(!0),
                  $opacity: a ? 1 : 0,
                  $width: m || g ? "".concat(A, "px") : "100%",
                  $height: m || g ? "".concat(f, "px") : "100%",
                }),
              h && (0, o.jsx)(tt, { width: t, height: i }),
            ],
          });
        };
      var ts = t(8430);
      function tc() {
        let e = (0, el.Z)([
          "\n  position: relative;\n  height: 48px;\n  padding: 0 8px;\n  background: ",
          ";\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n",
        ]);
        return (
          (tc = function () {
            return e;
          }),
          e
        );
      }
      function td() {
        let e = (0, el.Z)(["\n  width: 32px;\n  margin-right: 8px;\n"]);
        return (
          (td = function () {
            return e;
          }),
          e
        );
      }
      function tu() {
        let e = (0, el.Z)(["\n  min-width: 0;\n"]);
        return (
          (tu = function () {
            return e;
          }),
          e
        );
      }
      function tp() {
        let e = (0, el.Z)(["\n  width: 32px;\n  margin-left: 8px;\n"]);
        return (
          (tp = function () {
            return e;
          }),
          e
        );
      }
      function tg() {
        let e = (0, el.Z)([
          "\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 24px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  ",
          "\n",
        ]);
        return (
          (tg = function () {
            return e;
          }),
          e
        );
      }
      let th = es.ZP.div.withConfig({ componentId: "sc-b13b4596-0" })(
          tc(),
          nr.Il.GRAY_700
        ),
        tm = es.ZP.div.withConfig({ componentId: "sc-b13b4596-1" })(td()),
        tA = es.ZP.div.withConfig({ componentId: "sc-b13b4596-2" })(tu()),
        tf = es.ZP.div.withConfig({ componentId: "sc-b13b4596-3" })(tp()),
        tx = (0, es.ZP)(ni.xv).withConfig({ componentId: "sc-b13b4596-4" })(
          tg(),
          e => {
            let { $isLarge: n } = e;
            return n && "font-size: 28px; line-height: 36px; font-weight: 900;";
          }
        ),
        tb = () => {
          let e = eu(),
            { emitter: n } = (0, r.useContext)(nK),
            t = ep(e$),
            i = ep(eF),
            a = ep(eY),
            l = ep(eW),
            s = ep(eH),
            c = ep(eB),
            d = ep(eU),
            u = ep(eV),
            p = () => {
              a ? e(nq()) : e(nN()), n.pause();
            },
            g = () => {
              e(z()), a ? e(nJ()) : e(nM()), n.start();
            },
            h = () => {
              n.mute(), e(nU());
            },
            m = () => {
              n.unmute(), e(nB());
            };
          return (0, o.jsxs)(th, {
            children: [
              (0, o.jsx)(tm, {
                children:
                  !c &&
                  d &&
                  u &&
                  (0, o.jsx)(ni.zx, {
                    bg: nr.Il.WHITE_15,
                    size: nr.qE.S,
                    isIcon: !0,
                    onClick: p,
                    children: (0, o.jsx)(ni.JO, {
                      type: "pause",
                      color: nr.Il.WHITE,
                      size: 22,
                    }),
                  }),
              }),
              (0, o.jsx)(tA, {
                children: (0, o.jsx)(tx, {
                  asComponent: "p",
                  type: "text",
                  color: nr.Il.WHITE,
                  $isLarge: !c && Number.isInteger(i),
                  children: c
                    ? "Paused"
                    : "number" == typeof i
                    ? (0, ts.u)(i)
                    : t,
                }),
              }),
              (0, o.jsxs)(tf, {
                children: [
                  (!u || s) &&
                    (0, o.jsx)(ni.zx, {
                      bg: nr.Il.WHITE_15,
                      size: nr.qE.S,
                      isIcon: !0,
                      onClick: l ? h : m,
                      children: (0, o.jsx)(ni.JO, {
                        type: l ? "sound-off" : "sound-on",
                        color: nr.Il.WHITE,
                        size: 22,
                      }),
                    }),
                  c &&
                    (0, o.jsx)(ni.zx, {
                      bg: nr.Il.WHITE_15,
                      size: nr.qE.S,
                      isIcon: !0,
                      onClick: g,
                      children: (0, o.jsx)(ni.JO, {
                        type: "restart",
                        color: nr.Il.WHITE,
                        size: 22,
                      }),
                    }),
                ],
              }),
            ],
          });
        },
        tE = e => e[U.name],
        tw = e => tE(e).surrounding,
        tv = e => tE(e).group,
        tR = e => tE(e).groupHasMore,
        tI = e => tE(e).groupRequestCount,
        ty = e => tE(e).global,
        t_ = e => tE(e).globalHasMore,
        tC = e => tE(e).globalRequestCount,
        tj = () => (e, n) => {
          let t = window.location.pathname,
            o = n(),
            r = tR(o),
            i = tI(o);
          r &&
            t.startsWith("/game-bot/") &&
            et({ type: "bot", gameUrl: t, offset: i, limit: 50 }).then(n => {
              n.error || e(W({ ranking: n.result.ranking, limit: 50 }));
            });
        },
        tS = () => (e, n) => {
          let t = window.location.pathname,
            o = n(),
            r = t_(o),
            i = tC(o);
          r &&
            t.startsWith("/game-bot/") &&
            et({ type: "global", gameUrl: t, offset: i, limit: 100 }).then(
              n => {
                n.error || e(F({ ranking: n.result.ranking, limit: 100 }));
              }
            );
        },
        tP = e => {
          let { gameName: n, gameUrl: t } = e,
            o = (0, ed.Gq)("https://telegram.org/js/games.js"),
            r = () => {
              try {
                window.TelegramGameProxy.shareScore();
              } catch (e) {
                console.error("Telegram share error: ", e);
              }
            },
            i = () => {
              let e =
                "https://t.me/share/url" +
                "?url=".concat(encodeURIComponent(t)) +
                "&text=".concat(
                  encodeURIComponent("Play ".concat(n, " NOW! \uD83C\uDFAE"))
                );
              console.log("deepLink -> ", e);
            },
            a = () => ("ready" === o ? r() : i());
          return { handleShare: a, isReady: "ready" === o };
        };
      function tO() {
        let e = (0, el.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 4px;\n  padding: 0 48px;\n\n  > span {\n    letter-spacing: 0.1em;\n  }\n",
        ]);
        return (
          (tO = function () {
            return e;
          }),
          e
        );
      }
      function tG() {
        let e = (0, el.Z)(["\n  position: absolute;\n  left: 12px;\n"]);
        return (
          (tG = function () {
            return e;
          }),
          e
        );
      }
      let tk = (0, es.ZP)(ni.zx).withConfig({ componentId: "sc-63a53369-0" })(
          tO()
        ),
        tT = (0, es.ZP)(ni.JO).withConfig({ componentId: "sc-63a53369-1" })(
          tG()
        ),
        tZ = () => {
          let e = ep(e$),
            n = ep(e6);
          if (!e || !n) throw Error(Y.U.GAME_ERROR_SHARE.toString());
          let { handleShare: t, isReady: r } = tP({ gameName: e, gameUrl: n });
          return (0, o.jsxs)(tk, {
            bg: nr.Il.TELEGRAM,
            size: nr.qE.XL,
            isDisabled: !r,
            onClick: t,
            isFullWidth: !0,
            children: [
              (0, o.jsx)(tT, {
                type: "social-telegram",
                size: 32,
                color: nr.Il.WHITE,
              }),
              (0, o.jsx)(ni.xv, {
                asComponent: "span",
                type: "caption",
                color: nr.Il.WHITE,
                fontWeight: 900,
                isUppercase: !0,
                children: "Send game",
              }),
              (0, o.jsx)(ni.xv, {
                asComponent: "span",
                type: "caption-small",
                color: nr.Il.WHITE_75,
                fontWeight: 700,
                isUppercase: !0,
                children: "Challenge more friends!",
              }),
            ],
          });
        };
      var tM = t(5675),
        tN = t.n(tM),
        tz = t(2294);
      let tD = e =>
        "en" === ew
          ? "".concat((0, ts.u)(e, ",")).concat((0, tz.indicator)(e))
          : (0, ts.u)(e, ",") + ".";
      var tL = {
          src: "/_next/static/media/emoji-gold-medal.8fdbf082.png",
          height: 160,
          width: 160,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEVMaXG/gJnv/0vYh57oqwj/YlFCYrr40FzhVgLotQiodJj1yBP50w7koEFgb73TkAWxiEnxtwPgoADcmgDUkgD1zxDy13TgmwH2twD4yRPlqxPntSf50jGe7jTrAAAAF3RSTlMA/AjdjlNG+QpJ7Wq7mN44pr27c8E//GKBk4kAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA+SURBVHicJYrdGkAgFMCGOJXfQqfw/s/pk91sFwMG3/RUls7+sc1V9rjK1AK7JskjYLKIGuAsz63rN7kQHbw7xgIZsBkXxQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        tU = {
          src: "/_next/static/media/emoji-silver-medal.bbf33c41.png",
          height: 160,
          width: 160,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXFDY7+/gp3/ZFS9vb2JiYmEhIXFg4OEhIWwsLCodpzeipiwsLBocrm/vr+2lZh9fX2BfZOVlZV7e3zJyMiXl5alpqaMjIy4Jk8xAAAAFXRSTlMARvxT+o5DCb7+7d1q3ruYc6ZMOPzosMAGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nCWKWxKAIAzEohZofYMW7n9TB9yfZDILTOu8MHZs6Zd8DST1evZ0N3ttB4KLeABiFWtPPxXVCB8ziQGvq0BH+QAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        tB = {
          src: "/_next/static/media/emoji-bronze-medal.c586701c.png",
          height: 160,
          width: 160,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXGBLgOod5vAg52JNQXUfiqUPg/ESyLAZx2VPg5GZL3/Zlffk6NresKjTRe7ai2vYUd+UE57KwKUPgqvWRqaQwqMNQRngQ0pAAAAFHRSTlMAvu38jvk7CfxJRlPd3mq7mKZzvSLlMMUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA9SURBVHicJYpJDsAgDMRMyxIodE34/1MRdC62rAHKth+stZp+ee6F5Eyvmd4uQU/AmwTzQFTRHucpfy7DADU8AbEjLCk5AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        };
      function tH() {
        let e = (0, el.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  padding: 4px 6px;\n  border-radius: 24px;\n  background: ",
          ";\n  box-shadow: 1px 3px 6px ",
          ";\n\n  ",
          ";\n  ",
          ";\n  ",
          ";\n",
        ]);
        return (
          (tH = function () {
            return e;
          }),
          e
        );
      }
      function tW() {
        let e = (0, el.Z)(["\n  filter: drop-shadow(1px 1px 2px ", ");\n"]);
        return (
          (tW = function () {
            return e;
          }),
          e
        );
      }
      let tF = es.ZP.div.withConfig({ componentId: "sc-9f11354c-0" })(
          tH(),
          nr.Il.WHITE,
          nr.Il.BLACK_25,
          e => {
            let { $rank: n } = e;
            return (
              1 === n &&
              "background: "
                .concat(nr.ph.GOLD, "; > span { font-weight: 600; color: ")
                .concat(nr.Il.YELLOW_900, "; }")
            );
          },
          e => {
            let { $rank: n } = e;
            return (
              2 === n &&
              "background: "
                .concat(nr.ph.SILVER, "; > span { font-weight: 600; color: ")
                .concat(nr.Il.BLACK, "; }")
            );
          },
          e => {
            let { $rank: n } = e;
            return (
              3 === n &&
              "background: "
                .concat(nr.ph.BRONZE, "; > span { font-weight: 600; color: ")
                .concat(nr.Il.WHITE_75, "; }")
            );
          }
        ),
        tJ = es.ZP.div.withConfig({ componentId: "sc-9f11354c-1" })(
          tW(),
          nr.Il.BLACK_50
        ),
        tq = e => {
          let { rank: n, ...t } = e;
          return n <= 3
            ? (0, o.jsxs)(tJ, {
                ...t,
                children: [
                  1 === n &&
                    (0, o.jsx)(tN(), {
                      src: tL,
                      alt: "Gold medal emoji icon",
                      width: 32,
                      height: 32,
                      unoptimized: !0,
                      priority: !0,
                    }),
                  2 === n &&
                    (0, o.jsx)(tN(), {
                      src: tU,
                      alt: "Silver medal emoji icon",
                      width: 32,
                      height: 32,
                      unoptimized: !0,
                      priority: !0,
                    }),
                  3 === n &&
                    (0, o.jsx)(tN(), {
                      src: tB,
                      alt: "Bronze medal emoji icon",
                      width: 32,
                      height: 32,
                      unoptimized: !0,
                      priority: !0,
                    }),
                ],
              })
            : (0, o.jsx)(tF, {
                $rank: n,
                ...t,
                children: (0, o.jsx)(ni.xv, {
                  asComponent: "span",
                  type: "caption-small",
                  color: nr.Il.GRAY_700,
                  className: "ml-2",
                  children: tD(n),
                }),
              });
        };
      var tV = {
        src: "/_next/static/media/fallback-avatar.5e000b1d.jpg",
        height: 300,
        width: 300,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAaEAACAwEBAAAAAAAAAAAAAAABAwACBCET/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKd7aFbVhtarQ2h8iT1hB7ERA//Z",
        blurWidth: 8,
        blurHeight: 8,
      };
      function tY() {
        let e = (0, el.Z)([
          "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 104px;\n  padding: 16px 4px;\n  border-radius: 16px;\n\n  > img {\n    border-radius: 50%;\n  }\n\n  ",
          "\n",
        ]);
        return (
          (tY = function () {
            return e;
          }),
          e
        );
      }
      function tK() {
        let e = (0, el.Z)([
          "\n  position: absolute;\n  top: ",
          ";\n  left: 12px;\n",
        ]);
        return (
          (tK = function () {
            return e;
          }),
          e
        );
      }
      function tQ() {
        let e = (0, el.Z)([
          "\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 500;\n  margin-top: 8px;\n  max-width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n",
        ]);
        return (
          (tQ = function () {
            return e;
          }),
          e
        );
      }
      let tX = es.ZP.div.withConfig({ componentId: "sc-261ebab9-0" })(
          tY(),
          e => {
            let { $isHighlighted: n } = e;
            return n && "background: ".concat(nr.Il.GRAY_100);
          }
        ),
        t$ = (0, es.ZP)(tq).withConfig({ componentId: "sc-261ebab9-1" })(
          tK(),
          e => {
            let { $isMedal: n } = e;
            return n ? "4px" : "8px";
          }
        ),
        t0 = (0, es.ZP)(ni.xv).withConfig({ componentId: "sc-261ebab9-2" })(
          tQ()
        ),
        t1 = e => {
          let { rank: n, score: t, user: r, isHighlighted: i = !1 } = e;
          return (0, o.jsxs)(tX, {
            $isHighlighted: i,
            children: [
              n && (0, o.jsx)(t$, { rank: n, $isMedal: n <= 3 }),
              (0, o.jsx)(ni.JG, {
                fallback: tV.src,
                src: r.photo || tV.src,
                alt: "Profile picture",
                width: 56,
                height: 56,
                unoptimized: !0,
                draggable: !1,
              }),
              (0, o.jsx)(t0, {
                asComponent: "p",
                type: "caption",
                color: nr.Il.BLACK,
                isCentered: !0,
                children: i ? "You" : r.firstname || r.nickname || r.id,
              }),
              (0, o.jsx)(ni.xv, {
                asComponent: "p",
                color: nr.Il.GREEN_700,
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 700,
                isCentered: !0,
                children: null === t ? "—" : (0, ts.u)(t),
              }),
            ],
          });
        };
      function t2() {
        let e = (0, el.Z)(["\n  .carousel-content {\n    ", "\n  }\n"]);
        return (
          (t2 = function () {
            return e;
          }),
          e
        );
      }
      let t6 = (0, es.ZP)(ni.lr).withConfig({ componentId: "sc-b2832c6c-0" })(
          t2(),
          e => {
            let { $isCentered: n } = e;
            return n && "justify-content: center";
          }
        ),
        t3 = () => {
          var e;
          let n = ep(eO),
            t = ep(ez),
            r = ep(tw),
            i = r.findIndex(e => e.user.id === n);
          return 0 === r.length || (1 === r.length && 0 === i)
            ? (0, o.jsx)(ni.xu, {
                justifyContent: "center",
                className: "my-8",
                children: (0, o.jsx)(t1, {
                  rank: null,
                  score:
                    (null === (e = r[0]) || void 0 === e ? void 0 : e.score) ||
                    null,
                  user: t,
                  isHighlighted: !0,
                }),
              })
            : (0, o.jsx)(t6, {
                startIndex: -1 === i ? 9 : i,
                gap: 4,
                withArrows: !0,
                className: "my-8",
                $isCentered: r.length < 4,
                children: r.map(e =>
                  (0, o.jsx)(
                    t1,
                    { isHighlighted: e.user.id === n, ...e },
                    e.user.id
                  )
                ),
              });
        };
      function t4() {
        let e = (0, el.Z)([
          "\n  display: flex;\n  align-items: center;\n  border-radius: 24px;\n  padding: 4px 8px;\n  background: ",
          ";\n",
        ]);
        return (
          (t4 = function () {
            return e;
          }),
          e
        );
      }
      let t7 = es.ZP.div.withConfig({ componentId: "sc-5a38b5b0-0" })(
          t4(),
          nr.Il.GREEN_500
        ),
        t5 = () => {
          let e = ep(e$),
            n = ep(e0),
            t = ep(e1),
            i = ep(eJ);
          return (0, o.jsxs)(r.Fragment, {
            children: [
              (0, o.jsx)(ni.JG, {
                src: n || t || "",
                alt: "Game icon",
                width: 48,
                height: 48,
                unoptimized: !0,
                style: { borderRadius: "8px" },
                draggable: !1,
              }),
              (0, o.jsxs)(ni.xu, {
                flexDirection: "column",
                gap: "4px",
                className: "ml-12 mr-auto",
                children: [
                  (0, o.jsx)(ni.xv, {
                    asComponent: "p",
                    type: "text",
                    color: nr.Il.GRAY_700,
                    fontWeight: 700,
                    children: e,
                  }),
                  (0, o.jsxs)(t7, {
                    children: [
                      (0, o.jsx)(ni.xv, {
                        asComponent: "span",
                        type: "caption-small",
                        color: nr.Il.GREEN_900,
                        isUppercase: !0,
                        fontWeight: 500,
                        className: "mr-8 mt-2",
                        children: "highscore:",
                      }),
                      (0, o.jsx)(ni.xv, {
                        asComponent: "span",
                        color: nr.Il.GREEN_900,
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: 700,
                        isUppercase: !0,
                        children: (0, ts.u)(i || 0),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function t8() {
        let e = (0, el.Z)([
          "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  border-radius: 24px;\n  box-shadow: ",
          ";\n  background: ",
          ";\n",
        ]);
        return (
          (t8 = function () {
            return e;
          }),
          e
        );
      }
      function t9() {
        let e = (0, el.Z)([
          "\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  border-bottom: 1px solid ",
          ";\n",
        ]);
        return (
          (t9 = function () {
            return e;
          }),
          e
        );
      }
      function oe() {
        let e = (0, el.Z)([
          "\n  align-self: center;\n\n  ",
          " {\n    display: none;\n  }\n",
        ]);
        return (
          (oe = function () {
            return e;
          }),
          e
        );
      }
      let on = es.ZP.div.withConfig({ componentId: "sc-4cbc318-0" })(
          t8(),
          nr.jX.DARK,
          nr.Il.WHITE
        ),
        ot = es.ZP.div.withConfig({ componentId: "sc-4cbc318-1" })(
          t9(),
          nr.Il.GRAY_100
        ),
        oo = (0, es.ZP)(ni.zx).withConfig({ componentId: "sc-4cbc318-2" })(
          oe(),
          nr.tA.mediaMax(375, !1)
        ),
        or = e => {
          let { toggleLeaderboard: n } = e,
            t = eu(),
            r = () => {
              n(), t(tj());
            };
          return (0, o.jsxs)(on, {
            children: [
              (0, o.jsxs)(ot, {
                children: [
                  (0, o.jsx)(t5, {}),
                  (0, o.jsx)(oo, {
                    bg: nr.Il.GRAY_100,
                    onClick: r,
                    isIcon: !0,
                    children: (0, o.jsx)(ni.JO, {
                      type: "trophy",
                      size: 32,
                      color: nr.Il.GRAY_700,
                    }),
                  }),
                ],
              }),
              (0, o.jsx)(t3, {}),
              (0, o.jsx)(ni.xu, {
                width: "100%",
                padding: "0 8px 8px 8px",
                children: (0, o.jsx)(tZ, {}),
              }),
            ],
          });
        };
      var oi = t(6701);
      function oa() {
        let e = (0, el.Z)([
          "\n  position: absolute;\n  z-index: 999;\n  top: 48px;\n  left: 8px;\n  padding: 8px;\n  border-radius: 16px;\n  background: ",
          ";\n",
        ]);
        return (
          (oa = function () {
            return e;
          }),
          e
        );
      }
      let ol = es.ZP.div.withConfig({ componentId: "sc-73fc2a83-0" })(
          oa(),
          nr.Il.BLACK_50
        ),
        os = () => {
          let e = ep(e2),
            n = ep(eq),
            t = ep(e3);
          return (0, o.jsxs)(ol, {
            children: [
              (0, o.jsx)(ni.xv, {
                asComponent: "p",
                isMonospace: !0,
                color: nr.Il.WHITE,
                children: "GameeJS: ".concat(n || "..."),
              }),
              (0, o.jsx)(ni.xv, {
                asComponent: "p",
                isMonospace: !0,
                color: nr.Il.WHITE,
                className: "mt-8",
                children: "Game version: ".concat(
                  (null == e ? void 0 : e.number) || "..."
                ),
              }),
              (0, o.jsx)(ni.xv, {
                asComponent: "p",
                isMonospace: !0,
                color: nr.Il.WHITE,
                className: "mt-8",
                children: "Game controller: ".concat(
                  t
                    ? 30 === t
                      ? "One button"
                      : 31 === t
                      ? "Two buttons"
                      : "Fullscreen"
                    : "..."
                ),
              }),
            ],
          });
        };
      function oc() {
        let e = (0, el.Z)([
          "\n  position: absolute;\n  z-index: 999;\n  top: 8px;\n  left: 8px;\n",
        ]);
        return (
          (oc = function () {
            return e;
          }),
          e
        );
      }
      let od = es.ZP.div.withConfig({ componentId: "sc-1022571c-0" })(oc()),
        ou = () => {
          let [e, n, t] = (0, ed.VP)(),
            r = ep(eX),
            i = () => {
              n(window.location.href), setTimeout(t, 1e3);
            };
          return (0, o.jsxs)(od, {
            children: [
              (0, o.jsx)(ni.zx, {
                asComponent: "a",
                href: "/devonly",
                size: nr.qE.S,
                bg: nr.ph.NEON,
                shadow: nr.jX.NEON,
                isIcon: !0,
                className: "px-16 mr-4",
                children: (0, o.jsx)(ni.JO, {
                  type: "home",
                  size: 16,
                  color: nr.Il.WHITE,
                }),
              }),
              (0, o.jsx)(ni.zx, {
                asComponent: "a",
                href: "/devonly/game/".concat(r),
                size: nr.qE.S,
                bg: nr.ph.NEON,
                shadow: nr.jX.NEON,
                isIcon: !0,
                className: "px-16 mr-4",
                children: (0, o.jsx)(ni.JO, {
                  type: "bug",
                  size: 16,
                  color: nr.Il.WHITE,
                }),
              }),
              (0, o.jsx)(ni.zx, {
                size: nr.qE.S,
                bg: e ? nr.ph.MINT : nr.ph.NEON,
                shadow: e ? nr.jX.MINT : nr.jX.NEON,
                onClick: i,
                isIcon: !0,
                className: "px-16",
                children: (0, o.jsx)(ni.JO, {
                  type: e ? "check" : "copy",
                  size: 16,
                  color: e ? nr.Il.BLACK : nr.Il.WHITE,
                }),
              }),
            ],
          });
        };
      function op() {
        let e = (0, el.Z)([""]);
        return (
          (op = function () {
            return e;
          }),
          e
        );
      }
      function og() {
        let e = (0, el.Z)([
          "\n  cursor: inherit;\n  z-index: 1;\n  font-weight: 900;\n  font-size: 16px;\n  line-height: 16px;\n  letter-spacing: 0.1em;\n",
        ]);
        return (
          (og = function () {
            return e;
          }),
          e
        );
      }
      function oh() {
        let e = (0, el.Z)([
          "\n  @keyframes load {\n    0% {\n      width: 0;\n    }\n\n    25% {\n      width: 0;\n    }\n\n    100% {\n      width: 100%;\n    }\n  }\n\n  ",
          ";\n  background: ",
          ";\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  animation: load ",
          "ms ease-out;\n",
        ]);
        return (
          (oh = function () {
            return e;
          }),
          e
        );
      }
      let om = es.ZP.div.withConfig({ componentId: "sc-457640dd-0" })(op()),
        oA = (0, es.ZP)(ni.xv).withConfig({ componentId: "sc-457640dd-1" })(
          og()
        ),
        of = es.ZP.div.withConfig({ componentId: "sc-457640dd-2" })(
          oh(),
          nr.tA.allAbs(0),
          nr.ph.MINT,
          3e3
        ),
        ox = () => {
          let e = eu(),
            { emitter: n, focusIframe: t } = (0, r.useContext)(nK),
            [i, a] = (0, r.useState)(!1);
          (0, ed.KS)(() => a(!0), 3e3);
          let l = ep(eY),
            s = ep(eL),
            c = ep(eB),
            d = ep(eV),
            u = () => {
              l ? e(nJ()) : e(nM()), n.start(), t();
            },
            p = () => {
              e(nz()), n.unpause(), t();
            };
          return (0, o.jsx)(om, {
            children:
              d || (i && s)
                ? (0, o.jsx)(ni.zx, {
                    bg: nr.ph.MINT,
                    shadow: nr.jX.MINT,
                    size: nr.qE.XL,
                    isFullWidth: !0,
                    onClick: c ? p : u,
                    children: (0, o.jsx)(oA, {
                      asComponent: "span",
                      type: "text",
                      isUppercase: !0,
                      color: nr.Il.GREEN_900,
                      children: c ? "continue" : "play",
                    }),
                  })
                : (0, o.jsxs)(ni.zx, {
                    asComponent: "span",
                    bg: nr.Il.GREEN_200,
                    size: nr.qE.XL,
                    isFullWidth: !0,
                    children: [
                      (0, o.jsx)(of, {}),
                      (0, o.jsx)(oA, {
                        asComponent: "span",
                        type: "text",
                        isUppercase: !0,
                        color: nr.Il.BLACK_75,
                        children: "Loading",
                      }),
                    ],
                  }),
          });
        };
      function ob() {
        let e = (0, el.Z)([
          "\n  z-index: 2;\n  position: absolute;\n  top: 48px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  backdrop-filter: blur(12px);\n",
        ]);
        return (
          (ob = function () {
            return e;
          }),
          e
        );
      }
      function oE() {
        let e = (0, el.Z)(["\n  ", ";\n  background: ", ";\n"]);
        return (
          (oE = function () {
            return e;
          }),
          e
        );
      }
      function ow() {
        let e = (0, el.Z)([
          "\n  z-index: 1;\n  padding: 0 8px;\n  width: 100%;\n  max-width: 420px;\n  padding-bottom: calc(16px + var(--safe-area-inset-bottom));\n",
        ]);
        return (
          (ow = function () {
            return e;
          }),
          e
        );
      }
      let ov = es.ZP.div.withConfig({ componentId: "sc-6fcda24f-0" })(ob()),
        oR = es.ZP.div.withConfig({ componentId: "sc-6fcda24f-1" })(
          oE(),
          nr.tA.allAbs(0),
          nr.Il.BLACK_75
        ),
        oI = es.ZP.div.withConfig({ componentId: "sc-6fcda24f-2" })(ow()),
        oy = e => {
          let { children: n } = e,
            t = (0, r.useRef)(null),
            i = ep(eU);
          return (0, o.jsx)(oi.Z, {
            nodeRef: t,
            in: !i,
            timeout: { enter: 200, exit: 0 },
            classNames: "game-overlay-",
            mountOnEnter: !0,
            unmountOnExit: !0,
            appear: !0,
            children: (0, o.jsxs)(ov, {
              ref: t,
              children: [
                (0, o.jsx)(oR, { className: "backdrop" }),
                (0, o.jsxs)(oI, {
                  className: "group",
                  children: [n, (0, o.jsx)(ox, {})],
                }),
                !ef.BB &&
                  (0, o.jsxs)(r.Fragment, {
                    children: [(0, o.jsx)(os, {}), (0, o.jsx)(ou, {})],
                  }),
              ],
            }),
          });
        };
      var o_ = {
        src: "/_next/static/media/hand-with-phone.10dc4dc0.png",
        height: 512,
        width: 512,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVMaXFHS1zlqqH84Lk/Rl3qycRJSFo5PlEuM0QwNknzwm3YhjQtLz4rLj6ggoRraHYvMT/iopf/3LdGSlzPkVfy1nyokJRkVl/3yHYvNUp1YGehdmvimTnpqVKmGoBAAAAAFnRSTlMA6XQdUTn+/v77b68+4PGIXU7Trt5TtB/lBQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwVy0USwCAQAMFBF4kLEPv/N1P0vQGsUjvd7MU7wEwiVQOuSLw1nFuJoa6k1p4rjJC+97DLAORs+v0BRnoCSdTW9v8AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
      function oC() {
        let e = (0, el.Z)([
          "\n  z-index: 1002;\n  ",
          ";\n  background: ",
          ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n",
        ]);
        return (
          (oC = function () {
            return e;
          }),
          e
        );
      }
      let oj = es.ZP.div.withConfig({ componentId: "sc-a0741c57-0" })(
          oC(),
          nr.tA.allFix(0),
          nr.Il.GRAY_700
        ),
        oS = () => {
          let e = eu(),
            { device: n } = (0, r.useContext)(ec.I),
            { emitter: t } = (0, r.useContext)(nK),
            i = n.isMobile || n.isTablet,
            a = (0, ed.R3)(),
            l = ep(eY),
            s = ep(eU),
            c = (0, r.useCallback)(() => {
              l ? e(nq()) : e(nN()), t.pause();
            }, [e, t, l]);
          return ((0, r.useEffect)(() => {
            i && "landscape" === a && s && c();
          }, [i, a, s, c]),
          "landscape" === a && i)
            ? (0, o.jsxs)(oj, {
                children: [
                  (0, o.jsx)(tN(), {
                    src: o_,
                    alt: "Hand holding phone in portrait mode",
                    height: 192,
                    width: 192,
                    quality: 100,
                    className: "mr-32",
                  }),
                  (0, o.jsx)(ni.xv, {
                    asComponent: "p",
                    type: "title-xs",
                    color: nr.Il.WHITE_50,
                    fontWeight: 500,
                    isCentered: !0,
                    children: "Please rotate your phone to enjoy GAMEE",
                  }),
                ],
              })
            : null;
        };
      var oP = t(5639);
      function oO() {
        let e = (0, el.Z)(["\n  z-index: 1001;\n  ", ";\n  ", ";\n"]);
        return (
          (oO = function () {
            return e;
          }),
          e
        );
      }
      function oG() {
        let e = (0, el.Z)([
          "\n  ",
          ";\n  opacity: 0.75;\n  background: ",
          ";\n",
        ]);
        return (
          (oG = function () {
            return e;
          }),
          e
        );
      }
      let ok = es.ZP.div.withConfig({ componentId: "sc-a461b0c2-0" })(
          oO(),
          nr.tA.allFix(0),
          nr.tA.flexCenter
        ),
        oT = es.ZP.div.withConfig({ componentId: "sc-a461b0c2-1" })(
          oG(),
          nr.tA.allAbs(0),
          nr.Il.BLACK
        ),
        oZ = e => {
          let {
              children: n,
              isVisible: t,
              timeout: i = 200,
              cssPrefix: a = "dialog-",
              mountOnEnter: l = !0,
              unmountOnExit: s = !0,
              withScrollLock: c = !0,
              withOverlay: d = !0,
              handleHide: u,
              onEntering: p,
              onEntered: g,
              onExited: h,
            } = e,
            m = (0, r.useRef)(null),
            A = () => {
              c && (0, oP.Q)(), "function" == typeof p && p();
            },
            f = () => {
              "function" == typeof g && g();
            },
            x = () => {
              let e = (0, ex.v8)(window.location.pathname);
              c && !e && (0, oP.t)(), "function" == typeof h && h();
            };
          return (0, o.jsx)(oi.Z, {
            nodeRef: m,
            in: t,
            timeout: i,
            classNames: a,
            onEntering: A,
            onEntered: f,
            onExited: x,
            mountOnEnter: l,
            unmountOnExit: s,
            children: d
              ? (0, o.jsxs)(ok, {
                  ref: m,
                  children: [
                    (0, o.jsx)(oT, { onClick: u, className: "backdrop" }),
                    n,
                  ],
                })
              : (0, o.jsx)("div", { ref: m, children: n }),
          });
        };
      var oM = t(4184),
        oN = t.n(oM);
      function oz() {
        let e = (0, el.Z)([
          "\n  z-index: inherit;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  max-width: 580px;\n  border-radius: 32px;\n  background: ",
          ";\n  margin: 0 16px;\n",
        ]);
        return (
          (oz = function () {
            return e;
          }),
          e
        );
      }
      function oD() {
        let e = (0, el.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  right: 0;\n  top: 0;\n  padding-bottom: 16px;\n  padding-top: 16px;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: ",
          ";\n  backdrop-filter: saturate(180%) blur(20px);\n\n  ",
          " {\n    padding-bottom: 24px;\n    padding-top: 24px;\n  }\n",
        ]);
        return (
          (oD = function () {
            return e;
          }),
          e
        );
      }
      function oL() {
        let e = (0, el.Z)([
          "\n  z-index: 3;\n  position: absolute;\n  backdrop-filter: blur(4px);\n  top: 16px;\n\n  ",
          ";\n  ",
          ";\n\n  ",
          " {\n    top: 24px;\n    ",
          ";\n    ",
          ";\n  }\n",
        ]);
        return (
          (oL = function () {
            return e;
          }),
          e
        );
      }
      function oU() {
        let e = (0, el.Z)([
          "\n  overflow-y: overlay;\n  width: 100%;\n  padding: 64px 24px 0;\n\n  ",
          " {\n    padding: 80px 48px 0;\n  }\n",
        ]);
        return (
          (oU = function () {
            return e;
          }),
          e
        );
      }
      let oB = es.ZP.div.withConfig({ componentId: "sc-2583e776-0" })(
          oz(),
          nr.Il.WHITE
        ),
        oH = es.ZP.div.withConfig({ componentId: "sc-2583e776-1" })(
          oD(),
          nr.Il.WHITE_50,
          nr.tA.mediaMin(768)
        ),
        oW = (0, es.ZP)(ni.zx).withConfig({ componentId: "sc-2583e776-2" })(
          oL(),
          e => {
            let { $slot: n } = e;
            return "left" === n && "left: 16px;";
          },
          e => {
            let { $slot: n } = e;
            return "right" === n && "right: 16px;";
          },
          nr.tA.mediaMin(768),
          e => {
            let { $slot: n } = e;
            return "left" === n && "left: 24px;";
          },
          e => {
            let { $slot: n } = e;
            return "right" === n && "right: 24px;";
          }
        ),
        oF = es.ZP.div.withConfig({ componentId: "sc-2583e776-3" })(
          oU(),
          nr.tA.mediaMin(768)
        ),
        oJ = e => {
          let {
            children: n,
            header: t,
            handleBack: r,
            handleHide: i,
            className: a,
            ...l
          } = e;
          return (0, o.jsxs)(oB, {
            className: oN()("modal", a),
            ...l,
            children: [
              "function" == typeof r &&
                (0, o.jsx)(oW, {
                  size: nr.qE.S,
                  bg: nr.Il.TRANSPARENT,
                  isIcon: !0,
                  onClick: r,
                  $slot: "left",
                  children: (0, o.jsx)(ni.JO, {
                    type: "chevron-left",
                    color: nr.Il.BLACK,
                    size: 16,
                  }),
                }),
              (0, o.jsx)(oW, {
                size: nr.qE.S,
                bg: nr.Il.BLACK_10,
                isIcon: !0,
                onClick: i,
                $slot: "right",
                children: (0, o.jsx)(ni.JO, {
                  type: "close",
                  color: nr.Il.GRAY_700,
                  size: 20,
                }),
              }),
              t && (0, o.jsx)(oH, { children: t }),
              (0, o.jsx)(oF, { className: "modal-content", children: n }),
            ],
          });
        };
      function oq() {
        let e = (0, el.Z)([
          "\n  z-index: inherit;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: calc(100% - 24px);\n  align-self: flex-end;\n  background: ",
          ";\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n",
        ]);
        return (
          (oq = function () {
            return e;
          }),
          e
        );
      }
      function oV() {
        let e = (0, el.Z)([
          "\n  z-index: 2;\n  ",
          ";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 56px;\n  overflow: hidden;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: ",
          ";\n  backdrop-filter: saturate(180%) blur(20px);\n",
        ]);
        return (
          (oV = function () {
            return e;
          }),
          e
        );
      }
      function oY() {
        let e = (0, el.Z)([
          "\n  z-index: 3;\n  position: absolute;\n  backdrop-filter: blur(4px);\n  top: 12px;\n\n  ",
          ";\n  ",
          ";\n",
        ]);
        return (
          (oY = function () {
            return e;
          }),
          e
        );
      }
      function oK() {
        let e = (0, el.Z)([
          "\n  height: 100%;\n  overflow-y: overlay;\n  padding: 56px 16px 0;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n",
        ]);
        return (
          (oK = function () {
            return e;
          }),
          e
        );
      }
      let oQ = es.ZP.div.withConfig({ componentId: "sc-1964d9dd-0" })(
          oq(),
          nr.Il.WHITE
        ),
        oX = es.ZP.div.withConfig({ componentId: "sc-1964d9dd-1" })(
          oV(),
          nr.tA.flexCenter,
          nr.Il.WHITE_50
        ),
        o$ = (0, es.ZP)(ni.zx).withConfig({ componentId: "sc-1964d9dd-2" })(
          oY(),
          e => {
            let { $slot: n } = e;
            return "left" === n && "left: 12px;";
          },
          e => {
            let { $slot: n } = e;
            return "right" === n && "right: 12px;";
          }
        ),
        o0 = es.ZP.div.withConfig({ componentId: "sc-1964d9dd-3" })(oK()),
        o1 = e => {
          let {
            children: n,
            header: t,
            handleBack: r,
            handleHide: i,
            className: a,
            ...l
          } = e;
          return (0, o.jsxs)(oQ, {
            className: oN()("bottom-sheet", a),
            ...l,
            children: [
              "function" == typeof r &&
                (0, o.jsx)(o$, {
                  size: nr.qE.S,
                  bg: nr.Il.TRANSPARENT,
                  isIcon: !0,
                  onClick: r,
                  $slot: "left",
                  children: (0, o.jsx)(ni.JO, {
                    type: "arrow-left",
                    color: nr.Il.WHITE,
                    size: 16,
                  }),
                }),
              i &&
                (0, o.jsx)(o$, {
                  size: nr.qE.S,
                  bg: nr.Il.BLACK_10,
                  isIcon: !0,
                  onClick: i,
                  $slot: "right",
                  children: (0, o.jsx)(ni.JO, {
                    type: "close",
                    color: nr.Il.GRAY_700,
                    size: 20,
                  }),
                }),
              t && (0, o.jsx)(oX, { children: t }),
              (0, o.jsx)(o0, {
                className: "bottom-sheet-content",
                children: n,
              }),
            ],
          });
        },
        o2 = e => {
          let { children: n, className: t, ...i } = e,
            { device: a } = (0, r.useContext)(ec.I);
          return a.isMobile
            ? (0, o.jsx)(o1, { className: t, ...i, children: n })
            : (0, o.jsx)(oJ, { className: t, ...i, children: n });
        };
      var o6 = t(5276);
      function o3() {
        let e = (0, el.Z)([
          "\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 16px;\n  padding-left: 24px;\n  ",
          "\n\n  &:not(:last-child) {\n    border-bottom: 1px solid ",
          ";\n  }\n\n  ",
          " {\n    padding: 8px 24px 8px 32px;\n  }\n\n  > img {\n    border-radius: 50%;\n  }\n",
        ]);
        return (
          (o3 = function () {
            return e;
          }),
          e
        );
      }
      function o4() {
        let e = (0, el.Z)([
          "\n  position: absolute;\n  top: 4px;\n  left: 4px;\n\n  ",
          " {\n    left: 12px;\n  }\n",
        ]);
        return (
          (o4 = function () {
            return e;
          }),
          e
        );
      }
      function o7() {
        let e = (0, el.Z)([
          "\n  font-weight: 500;\n  line-height: 24px;\n  max-width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-right: auto;\n  margin-left: 8px;\n",
        ]);
        return (
          (o7 = function () {
            return e;
          }),
          e
        );
      }
      let o5 = es.ZP.div.withConfig({ componentId: "sc-35a2a372-0" })(
          o3(),
          e => {
            let { $isHighlighted: n } = e;
            return n && "background: ".concat(nr.Il.GRAY_100);
          },
          nr.Il.GRAY_200,
          nr.tA.mediaMin(576)
        ),
        o8 = (0, es.ZP)(tq).withConfig({ componentId: "sc-35a2a372-1" })(
          o4(),
          nr.tA.mediaMin(576)
        ),
        o9 = (0, es.ZP)(ni.xv).withConfig({ componentId: "sc-35a2a372-2" })(
          o7()
        ),
        re = r.forwardRef((e, n) => {
          let { rank: t, score: r, user: i, isHighlighted: a = !1 } = e;
          return (0, o.jsxs)(o5, {
            ref: n,
            $isHighlighted: a,
            children: [
              t && (0, o.jsx)(o8, { rank: t }),
              (0, o.jsx)(ni.JG, {
                fallback: tV.src,
                src: i.photo || tV.src,
                alt: "Profile picture",
                width: 48,
                height: 48,
                unoptimized: !0,
                draggable: !1,
              }),
              (0, o.jsx)(o9, {
                asComponent: "p",
                type: "caption",
                color: nr.Il.BLACK,
                isCentered: !0,
                children: Q(i.firstname, i.lastname, i.nickname, "full"),
              }),
              (0, o.jsx)(ni.xv, {
                asComponent: "p",
                type: "text",
                color: nr.Il.GREEN_700,
                fontWeight: 700,
                isCentered: !0,
                children: null === r ? "—" : (0, ts.u)(r),
              }),
            ],
          });
        });
      function rn() {
        let e = (0, el.Z)([""]);
        return (
          (rn = function () {
            return e;
          }),
          e
        );
      }
      re.displayName = "UserRankRow";
      let rt = es.ZP.div.withConfig({ componentId: "sc-9272474f-0" })(rn()),
        ro = e => {
          let { leaderboard: n, hasMore: t, handleFetch: r } = e,
            i = ep(eO),
            a = ep(ez),
            { observe: l } = (0, o6.Y)({
              onEnter: e => {
                let { unobserve: n } = e;
                n(), r();
              },
            });
          return (0, o.jsxs)(rt, {
            children: [
              0 === n.length &&
                (0, o.jsx)(re, {
                  isHighlighted: !0,
                  rank: null,
                  score: null,
                  user: a,
                }),
              n.map((e, r) =>
                (0, o.jsx)(
                  re,
                  {
                    ref: t && r === n.length - 1 ? l : null,
                    isHighlighted: e.user.id === i,
                    ...e,
                  },
                  e.user.id
                )
              ),
            ],
          });
        };
      function rr() {
        let e = (0, el.Z)([
          "\n  color-scheme: none;\n\n  &.modal {\n    flex-grow: 1;\n    display: flex;\n    height: min(900px, 95vh);\n\n    .modal-content {\n      padding: 80px 0 calc(120px + var(--safe-area-inset-bottom));\n    }\n  }\n\n  &.bottom-sheet {\n    padding: 0;\n\n    .bottom-sheet-content {\n      padding: 56px 0 calc(120px + var(--safe-area-inset-bottom));\n    }\n  }\n",
        ]);
        return (
          (rr = function () {
            return e;
          }),
          e
        );
      }
      function ri() {
        let e = (0, el.Z)([
          "\n  display: flex;\n  gap: 16px;\n  padding: 0 16px;\n",
        ]);
        return (
          (ri = function () {
            return e;
          }),
          e
        );
      }
      function ra() {
        let e = (0, el.Z)([
          "\n  cursor: pointer;\n  padding-top: 12px;\n  padding-bottom: 16px;\n  margin-bottom: 12px;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  border-bottom: 2px solid ",
          ";\n  transition: border-bottom 100ms ease;\n\n  span {\n    cursor: pointer;\n    letter-spacing: 0.1em;\n    transition: color 100ms ease;\n  }\n",
        ]);
        return (
          (ra = function () {
            return e;
          }),
          e
        );
      }
      function rl() {
        let e = (0, el.Z)([
          "\n  z-index: 2;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  height: calc(112px + var(--safe-area-inset-bottom));\n  background: ",
          ";\n",
        ]);
        return (
          (rl = function () {
            return e;
          }),
          e
        );
      }
      function rs() {
        let e = (0, el.Z)([
          "\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 16px;\n  padding-bottom: calc(16px + var(--safe-area-inset-bottom));\n",
        ]);
        return (
          (rs = function () {
            return e;
          }),
          e
        );
      }
      let rc = (0, es.ZP)(o2).withConfig({ componentId: "sc-b4a3b2f-0" })(rr()),
        rd = es.ZP.div.withConfig({ componentId: "sc-b4a3b2f-1" })(ri()),
        ru = es.ZP.div.withConfig({ componentId: "sc-b4a3b2f-2" })(ra(), e => {
          let { $isActive: n } = e;
          return n ? nr.Il.TELEGRAM : nr.Il.TRANSPARENT;
        }),
        rp = es.ZP.div.withConfig({ componentId: "sc-b4a3b2f-3" })(
          rl(),
          "linear-gradient(180deg, "
            .concat(nr.Il.TRANSPARENT, " 0%, ")
            .concat(nr.Il.WHITE, " 50%)")
        ),
        rg = es.ZP.div.withConfig({ componentId: "sc-b4a3b2f-4" })(rs()),
        rh = e => {
          let { handleHide: n } = e,
            t = eu(),
            [i, a] = (0, r.useState)("group"),
            l = ep(tv),
            s = ep(tR),
            c = ep(ty),
            d = ep(t_);
          return (0, o.jsxs)(rc, {
            handleHide: n,
            header: (0, o.jsx)(ni.xv, {
              asComponent: "p",
              color: nr.Il.GRAY_700,
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "32px",
              children: "Leaderboard",
            }),
            children: [
              (0, o.jsxs)(rd, {
                children: [
                  (0, o.jsx)(ru, {
                    $isActive: "group" === i,
                    onClick: () => a("group"),
                    children: (0, o.jsx)(ni.xv, {
                      asComponent: "span",
                      type: "caption",
                      color: "group" === i ? nr.Il.GRAY_700 : nr.Il.GRAY_400,
                      isUppercase: !0,
                      children: "Chat",
                    }),
                  }),
                  (0, o.jsx)(ru, {
                    $isActive: "global" === i,
                    onClick: () => a("global"),
                    children: (0, o.jsx)(ni.xv, {
                      asComponent: "span",
                      type: "caption",
                      color: "global" === i ? nr.Il.GRAY_700 : nr.Il.GRAY_400,
                      isUppercase: !0,
                      children: "Global",
                    }),
                  }),
                ],
              }),
              "group" === i &&
                (0, o.jsx)(ro, {
                  leaderboard: l,
                  hasMore: s,
                  handleFetch: () => t(tj()),
                }),
              "global" === i &&
                (0, o.jsx)(ro, {
                  leaderboard: c,
                  hasMore: d,
                  handleFetch: () => t(tS()),
                }),
              (0, o.jsx)(rp, {}),
              (0, o.jsx)(rg, { children: (0, o.jsx)(tZ, {}) }),
            ],
          });
        };
      function rm() {
        let e = (0, el.Z)([
          "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  max-height: 100vh;\n  overflow: hidden;\n  background: ",
          ";\n\n  ",
          ";\n",
        ]);
        return (
          (rm = function () {
            return e;
          }),
          e
        );
      }
      let rA = es.ZP.div.withConfig({ componentId: "sc-c092eb27-0" })(
          rm(),
          nr.Il.BLACK,
          nr.pB.gameOverlay
        ),
        rf = () => {
          let { device: e } = (0, r.useContext)(ec.I),
            [n, t] = (0, ed.OT)(!1),
            i = ep(no),
            l = ep(eK),
            s = ep(eL),
            c = ep(eP),
            d = (0, r.useMemo)(() => (l ? Date.now() : null), [l]);
          if (
            ((0, r.useEffect)(() => {
              if (!l || !s || !d) return;
              let n = Date.now();
              (0, a.PR)(eg(e), l.name, Math.round(((n - d) / 1e3) * 100) / 100);
            }, [e, l, s, d]),
            (0, r.useEffect)(() => {
              l && (0, a.OT)(eg(e), l.name);
            }, [e, l]),
            i)
          )
            throw Error(i.toString());
          return (0, o.jsx)(ni.p9, {
            isLoaded: !!l && c,
            isFullscreen: !0,
            children: (0, o.jsxs)(nQ, {
              children: [
                (0, o.jsxs)(rA, {
                  children: [
                    (0, o.jsx)(tb, {}),
                    (0, o.jsx)(tl, {}),
                    (0, o.jsx)(oy, {
                      children: (0, o.jsx)(or, { toggleLeaderboard: t }),
                    }),
                    (0, o.jsx)(oS, {}),
                  ],
                }),
                (0, o.jsx)(oZ, {
                  isVisible: n,
                  handleHide: t,
                  children: (0, o.jsx)(rh, { handleHide: t }),
                }),
              ],
            }),
          });
        };
      var rx = t(7899);
      function rb() {
        let e = (0, el.Z)(["\n  flex: 1;\n  background: ", ";\n"]);
        return (
          (rb = function () {
            return e;
          }),
          e
        );
      }
      function rE() {
        let e = (0, el.Z)([
          "\n  flex: 1;\n  align-items: center;\n  min-height: 100vh;\n  min-height: 100svh;\n  padding-top: 48px;\n  padding-bottom: 64px;\n",
        ]);
        return (
          (rE = function () {
            return e;
          }),
          e
        );
      }
      function rw() {
        let e = (0, el.Z)([
          "\n  position: relative;\n  width: clamp(128px, 40vw, 228px);\n  height: clamp(128px, 40vw, 228px);\n",
        ]);
        return (
          (rw = function () {
            return e;
          }),
          e
        );
      }
      function rv() {
        let e = (0, el.Z)([
          "\n  margin: 16px 0;\n  font-size: 32px;\n\n  ",
          " {\n    font-size: 36px;\n  }\n\n  ",
          " {\n    font-size: 40px;\n  }\n\n  ",
          " {\n    font-size: 48px;\n  }\n\n  ",
          " {\n    font-size: 56px;\n  }\n",
        ]);
        return (
          (rv = function () {
            return e;
          }),
          e
        );
      }
      function rR() {
        let e = (0, el.Z)([
          "\n  max-width: 460px;\n\n  ",
          " {\n    max-width: unset;\n  }\n",
        ]);
        return (
          (rR = function () {
            return e;
          }),
          e
        );
      }
      let rI = es.ZP.div.withConfig({ componentId: "sc-ef69d305-0" })(
          rb(),
          nr.Il.GRAY_700
        ),
        ry = (0, es.ZP)(ni.W2).withConfig({ componentId: "sc-ef69d305-1" })(
          rE()
        ),
        r_ = es.ZP.div.withConfig({ componentId: "sc-ef69d305-2" })(rw()),
        rC = (0, es.ZP)(ni.xv).withConfig({ componentId: "sc-ef69d305-3" })(
          rv(),
          nr.tA.mediaMin(nr.Uo.MOBILE_M),
          nr.tA.mediaMin(nr.Uo.TABLET),
          nr.tA.mediaMin(nr.Uo.LAPTOP_S),
          nr.tA.mediaMin(nr.Uo.LAPTOP_M)
        ),
        rj = (0, es.ZP)(ni.xv).withConfig({ componentId: "sc-ef69d305-4" })(
          rR(),
          nr.tA.mediaMin(nr.Uo.TABLET)
        );
      class rS extends r.Component {
        static getDerivedStateFromError(e) {
          let n = Number(e.message);
          return Number.isInteger(n) && 0 !== n
            ? { hasError: !0, code: Number(e.message) }
            : { hasError: !0, code: null };
        }
        render() {
          return this.state.hasError
            ? (0, o.jsx)(rI, {
                children: (0, o.jsxs)(ry, {
                  children: [
                    (0, o.jsx)(r_, {
                      children: (0, o.jsx)(tN(), {
                        src: rx.Z,
                        alt: "Sad face emoji",
                        fill: !0,
                        quality: 100,
                        priority: !0,
                        draggable: !1,
                        className: "no-select no-callout",
                      }),
                    }),
                    (0, o.jsx)(rC, {
                      asComponent: "h1",
                      color: nr.Il.WHITE,
                      isCentered: !0,
                      children: "Ooops!",
                    }),
                    (0, o.jsx)(rj, {
                      asComponent: "p",
                      type: "text",
                      color: nr.Il.WHITE_75,
                      isCentered: !0,
                      children:
                        "Your action cannot be completed at the moment. Come back later and try again.",
                    }),
                    "number" == typeof this.state.code &&
                      (0, o.jsx)(ni.xv, {
                        asComponent: "p",
                        type: "caption-small",
                        color: nr.Il.WHITE_50,
                        isCentered: !0,
                        className: "mt-16",
                        children: "Error: ".concat(this.state.code),
                      }),
                  ],
                }),
              })
            : this.props.children;
        }
        constructor(...e) {
          super(...e), (this.state = { hasError: !1, code: null });
        }
      }
      let rP = e => {
        let { code: n, userAgent: t } = e;
        return (
          (0, r.useEffect)(() => {
            if (!window.location) return;
            let e = window.location.pathname.split("/");
            if (3 !== e.length) return;
            let n =
              window.location.origin + "/game-bot/".concat(e[2].split("-")[0]); //! remove personal data from Bot url
            (0, a.jd)(n);
          }, []),
          (0, r.useEffect)(() => {
            let e = !1,
              t = "/game-bot/".concat(n);
            return (
              er({ gameUrl: t })
                .then(n => {
                  if (e) return;
                  if (!n) throw Y.U.API_FAILED_BATCH.toString();
                  let { gameResponse: o, userResponse: r } = n;
                  if (o.error) throw Y.U.FETCH_ERROR_GAME.toString();
                  if (r.error || !r.user) throw Y.U.FETCH_ERROR_USER.toString();
                  let i = r.result.tokens;
                  (0, ea.wq)(i.authenticate), (0, ea.gE)(i.refresh);
                  let a = o.result.botData,
                    l = K(r.result.user, r.user),
                    s = o.result.game;
                  (s.description = o.result.gameDescription),
                    ei({ gameUrl: t, gameId: s.id, userId: l.id })
                      .then(e => {
                        var n, t, o;
                        if (!e) throw Y.U.API_FAILED_BATCH.toString();
                        let {
                          groupLeaderboardsResponse: r,
                          globalLeaderboardsResponse: i,
                        } = e;
                        if (r.error) throw Y.U.FETCH_ERROR_GROUP_LB.toString();
                        let c = r.result.saveStateData || null,
                          u =
                            (null === (n = i.result) || void 0 === n
                              ? void 0
                              : null === (t = n.myRanking) || void 0 === t
                              ? void 0
                              : t.score) || null,
                          p =
                            (null === (o = i.result) || void 0 === o
                              ? void 0
                              : o.ranking) || [],
                          g = r.result.surroundingRankings[0].ranking.sort(
                            (e, n) => n.rank - e.rank
                          );
                        V.dispatch(d({ bot: a })),
                          V.dispatch(L({ user: l })),
                          V.dispatch(
                            h({ game: s, savedState: c, highscore: u })
                          ),
                          V.dispatch(B({ surrounding: g, global: p }));
                      })
                      .catch(e => {
                        "string" != typeof e || Number.isNaN(e)
                          ? V.dispatch(u({ code: 9999 }))
                          : V.dispatch(u({ code: Number(e) }));
                      });
                })
                .catch(n => {
                  e ||
                    ("string" != typeof n || Number.isNaN(n)
                      ? V.dispatch(u({ code: 9999 }))
                      : V.dispatch(u({ code: Number(n) })));
                }),
              () => {
                e = !0;
              }
            );
          }, [n]),
          (0, o.jsxs)(rS, {
            children: [
              (0, o.jsx)(ni.yG, { noZoom: !0 }),
              (0, o.jsx)(ec.Z, {
                userAgent: t,
                children: (0, o.jsx)(i.zt, {
                  store: V,
                  children: (0, o.jsx)(nA, { children: (0, o.jsx)(rf, {}) }),
                }),
              }),
            ],
          })
        );
      };
      var rO = !0,
        rG = rP;
    },
  },
  function (e) {
    e.O(0, [668, 592, 836, 774, 888, 179], function () {
      return e((e.s = 8674));
    }),
      (_N_E = e.O());
  },
]);
