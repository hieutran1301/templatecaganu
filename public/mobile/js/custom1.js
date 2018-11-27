webpackJsonp([0, 35, 39, 51, 58, 60, 62], Array(504).concat([function (n, t, i) {
	"use strict";
	var e = i(560),
		o = i(1),
		r = i(4),
		h = i.n(r),
		a = i(72),
		c = i(785),
		u = i(579),
		s = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		g = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var l = 200;

	function p(n, t) {
		var i = function (i) {
			function e(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e);
				var t = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
				return t.track = Object(u.a)(t.track.bind(t), l), t.onChange = t.onChange.bind(t), t
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(e, o["Component"]), g(e, [{
				key: "track",
				value: function (n) {
					this.context.track && this.context.track(n)
				}
			}, {
				key: "getTargetType",
				value: function () {
					return this.props.targetType || t || "unknown"
				}
			}, {
				key: "maketrackingInputChangeEvent",
				value: function (n) {
					var t = s({}, Object(c.a)(this.context.targetData), Object(c.a)(this.props)),
						i = this.getTargetType();
					return {
						type: "input",
						timestamp: Date.now(),
						info: {
							targetType: this.context.targetType + "." + i,
							targetData: Object(a.b)(t),
							targetValue: n,
							componentType: i
						}
					}
				}
			}, {
				key: "onChange",
				value: function (n) {
					var t = n.currentTarget.value,
						i = this.maketrackingInputChangeEvent(t);
					this.track(i)
				}
			}, {
				key: "render",
				value: function () {
					var t = s({}, this.props, {
						trackingInputChange: this.onChange
					});
					return o.createElement(n, t)
				}
			}]), e
		}();
		return i.contextTypes = {
			track: h.a.func,
			targetType: h.a.string,
			targetData: h.a.object
		}, i
	}
	var m = i(686),
		d = i(569);
	i.d(t, "c", function () {
		return e.a
	}), i.d(t, "d", function () {
		return e.b
	}), i.d(t, "f", function () {
		return p
	}), i.d(t, "a", function () {
		return m.a
	}), i.d(t, "e", function () {
		return d.b
	}), i.d(t, "b", function () {
		return d.a
	})
}, function (n, t, i) {
	"use strict";
	var e = i(219),
		o = i(732),
		r = i(261),
		h = "https://amp-html." + i(28).o + "/";

	function a(n, t) {
		return "" + h + Object(r.a)(t + "-cat." + n)
	}
	i.d(t, "c", function () {
		return e.c
	}), i.d(t, "I", function () {
		return e.K
	}), i.d(t, "J", function () {
		return e.L
	}), i.d(t, "K", function () {
		return e.M
	}), i.d(t, !1, function () {}), i.d(t, "H", function () {
		return e.J
	}), i.d(t, "i", function () {
		return e.i
	}), i.d(t, "C", function () {
		return e.C
	}), i.d(t, "v", function () {
		return e.v
	}), i.d(t, "O", function () {
		return e.P
	}), i.d(t, "N", function () {
		return e.O
	}), i.d(t, "Q", function () {
		return e.R
	}), i.d(t, "P", function () {
		return e.Q
	}), i.d(t, "u", function () {
		return e.u
	}), i.d(t, "f", function () {
		return e.f
	}), i.d(t, "a", function () {
		return e.a
	}), i.d(t, "W", function () {
		return e.X
	}), i.d(t, "S", function () {
		return e.T
	}), i.d(t, "b", function () {
		return e.b
	}), i.d(t, "V", function () {
		return e.W
	}), i.d(t, "e", function () {
		return e.e
	}), i.d(t, "w", function () {
		return e.w
	}), i.d(t, "z", function () {
		return e.z
	}), i.d(t, "x", function () {
		return e.x
	}), i.d(t, "y", function () {
		return e.y
	}), i.d(t, "k", function () {
		return e.k
	}), i.d(t, "j", function () {
		return e.j
	}), i.d(t, "g", function () {
		return e.g
	}), i.d(t, "B", function () {
		return e.B
	}), i.d(t, "l", function () {
		return e.l
	}), i.d(t, "r", function () {
		return e.r
	}), i.d(t, "m", function () {
		return e.m
	}), i.d(t, "T", function () {
		return e.U
	}), i.d(t, "U", function () {
		return e.V
	}), i.d(t, "L", function () {
		return e.N
	}), i.d(t, "F", function () {
		return e.F
	}), i.d(t, "E", function () {
		return e.E
	}), i.d(t, "G", function () {
		return e.G
	}), i.d(t, !1, function () {
		return e.H
	}), i.d(t, "n", function () {
		return e.n
	}), i.d(t, "o", function () {
		return e.o
	}), i.d(t, "p", function () {
		return e.p
	}), i.d(t, "D", function () {
		return e.D
	}), i.d(t, "A", function () {
		return e.A
	}), i.d(t, "h", function () {
		return e.h
	}), i.d(t, "d", function () {
		return e.d
	}), i.d(t, "q", function () {
		return e.q
	}), i.d(t, "R", function () {
		return e.S
	}), i.d(t, "s", function () {
		return e.s
	}), i.d(t, "t", function () {
		return e.t
	}), i.d(t, !1, function () {
		return e.I
	}), i.d(t, "M", function () {
		return o.a
	}), i.d(t, "X", function () {
		return a
	})
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			e = t.iconClassNames,
			r = t.styles,
			a = void 0 === r ? {} : r,
			c = t.basePath,
			u = void 0 === c ? "./svgs/" : c,
			s = i(787)(u + n + ".svg"),
			g = ["stardust-icon", "stardust-icon-" + n];
		return function (n) {
			var t = n.classNames,
				i = n.onClick,
				r = n.className;
			return o.a.createElement(s, {
				onClick: i || function () {},
				className: h()(g, e, t, r),
				style: a
			})
		}
	};
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r),
		a = i(786);
	i.n(a)
}, , , , , function (n, t, i) {
	"use strict";
	i.d(t, "e", function () {
		return r
	}), i.d(t, "d", function () {
		return h
	}), i.d(t, "c", function () {
		return a
	}), i.d(t, "g", function () {
		return c
	}), i.d(t, "b", function () {
		return u
	}), i.d(t, "f", function () {
		return s
	}), i.d(t, "a", function () {
		return g
	});
	var e = i(215),
		o = Object(e.getUtilsByCountry)("VN"),
		r = o.formatServerCurrency,
		h = o.formatCurrencyNumber,
		a = (o.formatServerNumber, o.deflateServerNumber),
		c = o.parseServerNumber,
		u = o.compactServerCurrency,
		s = o.localizeCompactNumber,
		g = (o.localizeCompactServerNumber, o.getCurrencySymbol())
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("arrow-right")
}, function (n, t, i) {
	"use strict";
	i.d(t, "l", function () {
		return e
	}), i.d(t, "p", function () {
		return o
	}), i.d(t, "q", function () {
		return r
	}), i.d(t, "m", function () {
		return h
	}), i.d(t, "h", function () {
		return a
	}), i.d(t, "i", function () {
		return c
	}), i.d(t, "j", function () {
		return u
	}), i.d(t, "k", function () {
		return s
	}), i.d(t, "o", function () {
		return g
	}), i.d(t, "b", function () {
		return l
	}), i.d(t, "a", function () {
		return p
	}), i.d(t, "r", function () {
		return m
	}), i.d(t, "c", function () {
		return d
	}), i.d(t, "d", function () {
		return f
	}), i.d(t, "e", function () {
		return y
	}), i.d(t, "g", function () {
		return v
	}), i.d(t, "f", function () {
		return _
	}), i.d(t, "n", function () {
		return b
	});
	var e = {
			GLOBAL: "GLOBAL",
			COLLECTION: "COLLECTION",
			HASHTAG: "HASHTAG",
			SHOP: "SHOP",
			SHOP_CATEGORY: "SHOP_CATEGORY",
			SUBCATEGORY: "SUBCATEGORY",
			CATEGORY: "CATEGORY",
			ATTRIBUTE: "ATTRIBUTE",
			PREFILL: "PREFILL",
			VOUCHER: "VOUCHER"
		},
		o = {
			RELEVANCY: "relevancy",
			TIME: "ctime",
			POPULAR: "pop",
			PRICE: "price",
			DISTANCE: "distance",
			SALES: "sales"
		},
		r = {
			ASC: "asc",
			DESC: "desc"
		},
		h = {
			ERROR: -1,
			NORMAL: 0,
			TOO_FEW: 1,
			EMPTY: 2,
			RECOMMEND: 3,
			FILTER_APPLIED: 4,
			NO_RESULT: 5,
			UPDATE_RESERVED_KEYWORD_STATE: 6
		},
		a = {
			facet: "FACET",
			officialMall: "OFFICIAL_MALL",
			preferred: "PREFERRED",
			locations: "LOCATIONS",
			shippingOptions: "SHIPPING_OPTIONS",
			freeShipping: "FREE_SHIPPING",
			withDiscount: "WITH_DISCOUNT",
			wholesale: "WHOLESALE",
			payCOD: "PAY_COD",
			payCreditCard: "PAY_CREDIT_CARD",
			installment: "INSTALLMENT",
			hasLowestPriceGuarantee: "HAS_LOWEST_PRICE_GUARANTEE",
			serviceByShopee: "SERVICE_BY_SHOPEE",
			newItem: "NEW_ITEM",
			usedItem: "USED_ITEM",
			priceRange: "PRICE_RANGE",
			rating: "RATING"
		},
		c = Object.keys(a),
		u = Object.values(a),
		s = {
			facet: a.facet,
			locations: a.locations,
			shippingOptions: a.shippingOptions,
			priceRange: a.priceRange,
			serviceAndPromotion: "SERVICE_AND_PROMOTION",
			condition: "CONDITION",
			shopType: "SHOP_TYPE",
			rating: "RATING"
		},
		g = {
			NONE: 0,
			WITHIN_8H: 1,
			WITHIN_24H: 2,
			WITHIN_48H: 3,
			NON_SPECIAL: 4
		},
		l = "FILTER_SHORTCUT",
		p = "FILTER_PANEL",
		m = {
			facet: "categoryids",
			locations: "locations",
			shippingOptions: "shippings",
			minPrice: "price_min",
			maxPrice: "price_max",
			withDiscount: "with_discount",
			freeShipping: "shipping_fee_included",
			wholesale: "wholesale",
			hasLowestPriceGuarantee: "filter_lowest_price_guarantee",
			payCreditCard: "pay_credit_card",
			payCOD: "pay_cod",
			ccInstallment: "cc_installment",
			nonCCInstallment: "non_cc_installment",
			serviceByShopee: "filter_service_by_shopee",
			preferred: "shopee_verified",
			officialMall: "official_mall",
			filterSoldOut: "only_soldout",
			skipShuffle: "skip_shuffle",
			isBuyerPerspective: "is_buyer_perspective"
		},
		d = {
			OTHER: "0",
			DOMESTIC: "-1",
			OVERSEAS: "-2"
		},
		f = 4,
		y = 4,
		v = {
			RELEVANCY_DESC: 0,
			SALES_DESC: 1,
			PRICE_DESC: 2,
			PRICE_ASC: 3
		},
		_ = {
			NEW: 1,
			HOT: 2
		},
		b = {
			BASIC_SEARCH: 1,
			HASHTAG_SEARCH: 2,
			IN_SHOP_SEARCH: 3,
			IN_OFFICIAL_SHOP_SEARCH: 4,
			CATEGORY: 5,
			SUBCATEGORY: 6,
			THIRD_LEVEL_CATEGORY: 7
		}
}, , function (n, t, i) {
	"use strict";
	t.a = function (n) {
		var t = n.children,
			i = n.disabled,
			o = n.active,
			r = n.size,
			c = n.type,
			u = n.className,
			s = n.onClick,
			g = function (n, t) {
				var i = {};
				for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
				return i
			}(n, ["children", "disabled", "active", "size", "type", "className", "onClick"]),
			l = c ? "stardust-button--" + c : null,
			p = r ? "stardust-button--" + r : null,
			m = i ? "stardust-button--disabled" : null,
			d = o ? "stardust-button--active" : null;
		return e.createElement("button", a({
			className: h()("stardust-button", l, p, d, m, u),
			disabled: i,
			onClick: i ? function () {} : s
		}, g), t)
	};
	var e = i(1),
		o = (i.n(e), i(696)),
		r = (i.n(o), i(90)),
		h = i.n(r),
		a = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}
}, function (n, t, i) {
	"use strict";
	t.c = a, t.b = function (n) {
		var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			i = h({
				page_type: "search"
			}, l(n));
		t && (i.is_official_shop = !0);
		return Object(r.b)(i)
	}, t.a = function (n, t) {
		var i = {};
		switch (t = t || Object(o.c)(n), i.search_keyword = n.catalogue || n.keyword || "", i.page_type = "search", t) {
			case e.l.GLOBAL:
				i.official_mall = n.officialMall ? "1" : void 0;
				break;
			case e.l.PREFILL:
				i.search_prefill = n.searchPrefill;
				break;
			case e.l.SHOP:
			case e.l.SHOP_CATEGORY:
				i.page_type = "shop", i.main_catid = n.shop, void 0 !== n.shopCollection && (i.shop_categoryids = n.shopCollection), n.originalCategoryId && (i.shop_categoryids = void 0, i.original_categoryid = n.originalCategoryId);
				break;
			case e.l.HASHTAG:
				i.page_type = "hashtag", i.hashtag = n.hashtag;
				break;
			case e.l.COLLECTION:
				i.page_type = "collection", i.main_catid = n.collection;
				break;
			case e.l.CATEGORY:
				i.main_catid = n.category;
				break;
			case e.l.SUBCATEGORY:
				i.main_catid = n.category, i.sub_catid = n.subcategory
		}
		return Object(r.b)(i)
	}, t.d = function (n) {
		return a(n, null, null, !0)
	}, t.e = function (n) {
		var t = n.locations ? h({}, n, {
			locations: n.locations.map(function (n) {
				return encodeURIComponent(n)
			})
		}) : n;
		return Object(r.b)(t)
	}, t.g = d, t.f = function (n) {
		return d(Object(r.d)(n))
	};
	var e = i(513),
		o = i(517),
		r = i(29),
		h = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		};

	function a(n) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
			o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
			a = h({
				page_type: "search"
			}, c(n), u(n), l(n));
		return ["filterSoldOut", "skipShuffle", "isBuyerPerspective"].forEach(function (t) {
			n[t] && (a[e.r[t]] = "1")
		}), o || (a.newest = t, a.limit = i), Object(r.b)(a)
	}
	var c = function (n) {
			var t = {};
			return t.by = "string" == typeof n.sortBy && n.sortBy || e.p.RELEVANCY, t.by === e.p.PRICE ? t.order = n.order : t.order = e.q.DESC, t.by === e.p.DISTANCE && (void 0 !== n.lat && (t.lat = n.lat), void 0 !== n.lon && (t.lon = n.lon)), t
		},
		u = function (n) {
			var t = h({}, s(n), g(n));
			return ["wholesale", "hasLowestPriceGuarantee", "payCreditCard", "payCOD", "ccInstallment", "nonCCInstallment", "preferred", "officialMall"].forEach(function (i) {
				n[i] && (t[e.r[i]] = "1")
			}), ["withDiscount", "freeShipping"].forEach(function (i) {
				n[i] && (t[e.r[i]] = !0)
			}), (n.serviceByShopee || 0 === n.serviceByShopee) && (t.filter_service_by_shopee = n.serviceByShopee), n.ratingFilter && (t.rating_filter = n.ratingFilter), n.facet && n.facet.length > 0 && (t.categoryids = n.facet), Array.isArray(n.locations) && n.locations.length > 0 && (t.locations = n.locations.map(function (n) {
				return encodeURIComponent(n)
			})), n.shippingOptions && n.shippingOptions.length > 0 && (t.shippings = n.shippingOptions), n.labelIds && n.labelIds.length > 0 && (t.label_ids = n.labelIds), t
		},
		s = function (n) {
			var t = {};
			return n.newItem && (t.conditions = "new"), n.usedItem && (t.conditions ? delete t.conditions : t.conditions = "used"), t
		},
		g = function (n) {
			var t = {},
				i = parseInt(n.minPrice, 10),
				e = parseInt(n.maxPrice, 10);
			return isNaN(i) || (t.price_min = i), isNaN(e) || (t.price_max = e), t
		},
		l = function (n) {
			var t = h({}, p(n), m(n));
			return n.catalogue ? t.keyword = n.catalogue : n.keyword && (t.keyword = n.keyword), n.attrId && (t.page_type = "attribute", t.match_id = n.attrId, t.keyword = n.attrVal), n.hashtag && (t.page_type = "hashtag", t.hashtag = n.hashtag), n.collection && (t.page_type = "collection", t.match_id = n.collection), n.promotionId && (t.promotionid = n.promotionId), n.searchPrefill && (t.search_prefill = n.searchPrefill, t.peep_signature = n.peep_signature), t
		},
		p = function (n) {
			var t = {};
			return n.subcategory ? t.match_id = n.subcategory : n.category && (t.match_id = n.category), t
		},
		m = function (n) {
			var t = {};
			return n.shop && (t.page_type = "shop", t.match_id = n.shop, void 0 !== n.shopCollection && (t.shop_categoryids = n.shopCollection), n.originalCategoryId && (t.shop_categoryids = void 0, t.original_categoryid = n.originalCategoryId)), t
		};

	function d(n) {
		var t = h({}, n);
		if (["facet", "labelIds"].forEach(function (i) {
				if (n[i]) {
					var e = Object(r.c)(n[i]);
					Array.isArray(e) && (t[i] = e.map(function (n) {
						return parseInt(n, 10)
					}).filter(function (n) {
						return n > 0
					}))
				}
			}), n.shippingOptions) {
			var i = Object(r.c)(n.shippingOptions);
			Array.isArray(i) && (t.shippingOptions = i.map(function (n) {
				return parseInt(n, 10)
			}).filter(function (n) {
				return !isNaN(n)
			}))
		}
		if (n.locations) {
			var e = Object(r.c)(n.locations);
			Array.isArray(e) && (t.locations = e.map(function (n) {
				return decodeURIComponent(n)
			}))
		}
		return ["minPrice", "maxPrice", "filterSoldOut", "shop", "subcategory", "category", "attrId", "shopCollection", "originalCategoryId", "collection", "serviceByShopee", "promotionId", "searchPrefill", "ratingFilter"].forEach(function (i) {
			var e = parseInt(n[i], 10);
			isFinite(e) && (t[i] = e)
		}), ["lat", "lon"].forEach(function (i) {
			var e = n[i];
			null != e && (t[i] = parseFloat(e))
		}), ["withDiscount", "freeShipping", "newItem", "usedItem", "preferred", "wholesale", "skipShuffle", "officialMall", "payCreditCard", "payCOD", "installment", "ccInstallment", "nonCCInstallment", "noCorrection", "hasLowestPriceGuarantee", "hideRemainingPrice"].forEach(function (i) {
			var e = n[i];
			e && (t[i] = "true" === e || !0 === e)
		}), t
	}
}, function (n, t, i) {
	"use strict";
	t.c = function (n) {
		var t = void 0;
		void 0 !== n.shop ? (t = e.l.SHOP, void 0 === n.shopCollection && void 0 === n.originalCategoryId || (t = e.l.SHOP_CATEGORY)) : void 0 !== n.collection ? t = e.l.COLLECTION : void 0 !== n.hashtag ? t = e.l.HASHTAG : void 0 !== n.category ? (t = e.l.CATEGORY, void 0 !== n.subcategory && (t = e.l.SUBCATEGORY)) : t = n.searchPrefill ? e.l.PREFILL : void 0 !== n.attrId ? e.l.ATTRIBUTE : n.promotionId ? e.l.VOUCHER : e.l.GLOBAL;
		return t
	}, t.a = function (n) {
		if (n.attrId) return o.a.ATTRIBUTE;
		if (n.shop) return n.originalCategoryId || n.shopCollection ? o.a.SHOP_CATEGORY : o.a.SHOP;
		if (n.collection) return o.a.COLLECTION;
		if (n.subcategory) return o.a.SUBCATEGORY;
		if (n.category) return o.a.CATEGORY;
		if (n.hashtag) return o.a.HASHTAG;
		return o.a.GLOBAL
	}, t.b = function (n) {
		var t = n || {},
			i = t.keyword,
			e = t.catalogue,
			o = t.attrVal,
			r = t.hashtag;
		return e || i || o || r || ""
	}, t.e = function (n) {
		var t = r({}, n);
		return ["keyword", "catalogue", "attrVal", "hashtag"].forEach(function (i) {
			n[i] && (t[i] = n[i].toLowerCase())
		}), t
	}, t.d = function (n) {
		if (!n) return {};
		var t = {};
		n.keyword && (t.keyword = n.keyword);
		n.catalogue && (t.catalogue = n.catalogue, t.facet = n.facet);
		n.hashtag ? t.hashtag = n.hashtag : n.shop ? t = r({}, t, function (n) {
			var t = {};
			t.shop = n.shop, n.shopCollection ? t.shopCollection = n.shopCollection : n.originalCategoryId && (t.originalCategoryId = n.originalCategoryId);
			return t
		}(n)) : n.collection ? t.collection = n.collection : n.promotionId ? t.promotionId = n.promotionId : n.category ? (t.category = n.category, n.subcategory && (t.subcategory = n.subcategory)) : n.searchPrefill ? t.searchPrefill = n.searchPrefill : t = r({}, t, function (n) {
			var t = {};
			n.attrId && (t.attrId = n.attrId);
			n.attrVal && (t.attrVal = n.attrVal);
			n.attrName && (t.attrName = n.attrName);
			return t
		}(n));
		return t
	}, t.f = function (n) {
		var t = n.minPrice,
			i = n.maxPrice;
		if (null != t || null != i) return function (n) {
			var t = n.maxPrice,
				i = n.minPrice;
			if (t = parseFloat(t), i = parseFloat(i), t < i || 0 === t && 0 === i || isNaN(t) && isNaN(i)) return "msg_min_price_must_small_than_maximum_price"
		}(n)
	};
	var e = i(513),
		o = i(518),
		r = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}
}, function (n, t, i) {
	"use strict";
	i.d(t, "b", function () {
		return e
	}), i.d(t, "c", function () {
		return o
	}), i.d(t, "a", function () {
		return r
	});
	var e = {
			MATCH_SHOP: 1,
			MATCH_CATEGORY: 2,
			MATCH_COLLECTION: 3,
			MATCH_HASHTAG: 4,
			MATCH_SHOP_CATE: 5,
			MATCH_KEYWORD: 6,
			MATCH_ITEM: 7,
			MATCH_ATTRIBUTE: 8,
			MATCH_SKU: 9,
			MATCH_ADDRESS: 10
		},
		o = {
			SORTBY_POPULAR_DESC: 1,
			SORTBY_LATEST_DESC: 2,
			SORTBY_DISTANCE_DESC: 3,
			SORTBY_PRICE_DESC: 4,
			SORTBY_POPULAR_ASC: 5,
			SORTBY_LATEST_ASC: 6,
			SORTBY_DISTANCE_ASC: 7,
			SORTBY_PRICE_ASC: 8,
			SORTBY_RELEVANCE: 9,
			SORTBY_DISCOUNT_ASC: 10,
			SORTBY_DISCOUNT_DESC: 11,
			SORTBY_SHOP_REVIEW: 12,
			SORTBY_ITEM_SOLD_DESC: 13,
			OFFICIAL_SHOP_PAGE_SEARCH: 115,
			HOME_OFFICIAL_SHOP: 116,
			TRENDING_SHOPS_LANDING: 117
		},
		r = {
			SHOP_PAGE_SHOP_TAB: "SHOP_PAGE_SHOP_TAB",
			SHOP_PAGE_PRODUCT_TAB: "SHOP_PAGE_PRODUCT_TAB",
			SHOP_PAGE_SOLD_OUT: "SHOP_PAGE_SOLD_OUT",
			SHOP_PAGE_CATEGORIES_HIGHLIGHT: "SHOP_PAGE_CATEGORIES_HIGHLIGHT",
			SHOP_PAGE_LIKED_ITEMS: "SHOP_PAGE_LIKED_ITEMS",
			GLOBAL: "GLOBAL_SEARCH",
			COLLECTION: "COLLECTION",
			HASHTAG: "HASHTAG",
			SHOP: "SEARCH_IN_SHOP",
			SHOP_CATEGORY: "SHOP_CATEGORY",
			SUBCATEGORY: "SUB_CATEGORY",
			CATEGORY: "CATEGORY",
			ATTRIBUTE: "ATTRIBUTE",
			RECOMMEND_SEARCH_EMPTY: "RECOMMEND_SEARCH_EMPTY",
			RECOMMEND_SEARCH_TOO_FEW: "RECOMMEND_SEARCH_TOO_FEW",
			RECOMMEND_FROM_SAME_SHOP: "RECOMMEND_FROM_SAME_SHOP",
			RECOMMEND_SIMILIAR_PRODUCT: "RECOMMEND_SIMILIAR_PRODUCT",
			RECOMMEND_POPULAR_PRODUCTS: "RECOMMEND_POPULAR_PRODUCTS",
			RECOMMEND_YOU_MAY_ALSO_LIKE: "RECOMMEND_YOU_MAY_ALSO_LIKE",
			OFFICIAL_SHOP_PAGE: "OFFICIAL_SHOP_PAGE",
			OFFICIAL_SHOP_POPULAR_PRODUCTS: "OFFICIAL_SHOP_POPULAR_PRODUCTS",
			OFFICIAL_SHOP_JUST_FOR_YOU_PRODUCTS: "OFFICIAL_SHOP_JUST_FOR_YOU_PRODUCTS",
			DAILY_DISCOVER: "DAILY_DISCOVER",
			FLASH_SALE_OVERVIEW: "FLASH_SALE_OVERVIEW",
			FLASH_SALE_LANDING: "FLASH_SALE_LANDING",
			CATEGORY_BROWSE: "CATEGORY_BROWSE"
		}
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return y
	});
	var e, o, r, h, a = i(1),
		c = (i.n(a), i(90)),
		u = i.n(c),
		s = i(657),
		g = i(690),
		l = (i.n(g), function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}());

	function p(n, t) {
		if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function m(n, t) {
		if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? n : t
	}

	function d(n, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		n.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: n,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
	}
	var f = {},
		y = (o = e = function (n) {
			function t() {
				return p(this, t), m(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return d(t, a["Component"]), l(t, [{
				key: "render",
				value: function () {
					var n = this.props,
						t = n.src,
						i = n.className,
						e = n.placeholderClassName,
						o = n.wrapperClassName,
						r = n.hidePlaceholder,
						h = n.style,
						c = void 0 === h ? f : h,
						s = n.children;
					return t ? a.createElement(_, n) : a.createElement("div", {
						className: u()("animated-lazy-image--no-src", o),
						style: c
					}, !!i && a.createElement("div", {
						className: i
					}), a.createElement(v, {
						className: e,
						hidePlaceholder: !!r
					}), s)
				}
			}]), t
		}(), e.disableLazyAnimation = !1, o);

	function v(n) {
		var t = n.className,
			i = n.hidePlaceholder;
		return a.createElement("div", {
			className: "animated-lazy-image__placeholder-wrapper"
		}, !i && a.createElement("svg", {
			viewBox: "0 0 54 61",
			x: "0",
			y: "0",
			className: u()("animated-lazy-image__placeholder", t)
		}, a.createElement("path", {
			d: "M 99.2 59.9 H 86.7 c 0 -5.3 -2.7 -16.3 -11.7 -16.4 c -9.6 -.1 -11.8 11.9 -11.8 16.4 H 50.8 c -3.4 0 -2.7 3.4 -2.7 3.4 l 2.4 33 c 0 0 -.1 7.3 6.3 7.5 c .4 0 35.7 0 36.5 0 c 6.2 -.4 6.3 -7.5 6.3 -7.5 l 2.4 -33 C 102 63.2 102.5 59.8 99.2 59.9 z M 75.1 47.2 c 7.1 .2 7.9 11.7 7.7 12.6 H 67.1 C 67 58.9 67.5 47.4 75.1 47.2 z M 84.2 91.8 c -1 1.7 -2.7 3 -5 3.7 C 78 95.9 76.8 96 75.6 96 c -3.2 0 -6.5 -1.1 -9.3 -3.3 c -.8 -.6 -1 -1.5 -.5 -2.3 c .2 -.4 .7 -.7 1.2 -.8 c .4 -.1 .9 0 1.2 .3 c 3.2 2.4 8.3 4 11.9 1.6 c 1.4 -.9 2.1 -2.7 1.6 -4.3 c -.5 -1.6 -2.2 -2.7 -3.5 -3.4 c -1 -.6 -2.1 -1 -3.3 -1.4 c -.9 -.3 -1.9 -.7 -2.9 -1.2 c -2.4 -1.2 -4 -2.6 -4.8 -4.2 c -1.2 -2.3 -.6 -5.4 1.4 -7.5 c 3.6 -3.8 10 -3.2 14 -.4 c .9 .6 .9 1.7 .4 2.5 c -.5 .8 -1.4 .9 -2.2 .4 c -2 -1.4 -4.4 -2 -6.4 -1.7 c -2 .3 -4.7 2 -4.4 4.6 c .2 1.5 2 2.6 3.3 3.3 c .8 .4 1.5 .7 2.3 .9 c 4.3 1.3 7.2 3.3 8.6 5.7 C 85.4 86.9 85.4 89.7 84.2 91.8 z",
			transform: "translate(-48 -43)",
			stroke: "none"
		})))
	}
	var _ = (h = r = function (n) {
		function t(n) {
			p(this, t);
			var i = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i.state = {
				imageReady: !!n.disabled || y.disableLazyAnimation
			}, i._mounted = !1, i.handleEnterViewport = i.handleEnterViewport.bind(i), i.handleImageOnLoad = i.handleImageOnLoad.bind(i), i.handleImageError = i.handleImageError.bind(i), i.onRef = i.onRef.bind(i), i
		}
		return d(t, a["Component"]), l(t, [{
			key: "componentDidMount",
			value: function () {
				this._mounted = !0, Object(s.a)(this._wrapper, this.handleEnterViewport)
			}
		}, {
			key: "componentWillUnmount",
			value: function () {
				this._mounted = !1, Object(s.b)(this._wrapper), cancelAnimationFrame(this.handleCallback)
			}
		}, {
			key: "handleEnterViewport",
			value: function () {
				var n = this;
				this.handleCallback = requestAnimationFrame(function () {
					var t = new Image(0, 0);
					"decode" in t ? (t.src = n.props.src, t.decode().then(n.handleImageOnLoad).catch(n.handleImageError)) : (t.onload = n.handleImageOnLoad, t.onerror = n.handleImageError, t.src = n.props.src)
				}), setTimeout(this.handleImageOnLoad, 1e3)
			}
		}, {
			key: "handleImageOnLoad",
			value: function () {
				this._mounted && !this.state.imageReady && this.setState({
					imageReady: !0
				})
			}
		}, {
			key: "handleImageError",
			value: function (n) {}
		}, {
			key: "onRef",
			value: function (n) {
				this._wrapper = n
			}
		}, {
			key: "render",
			value: function () {
				var n = this.props,
					t = n.src,
					i = n.className,
					e = n.placeholderClassName,
					o = n.wrapperClassName,
					r = n.isCovered,
					h = n.hidePlaceholder,
					c = n.useImgTag,
					s = n.alt,
					g = n.style,
					l = void 0 === g ? f : g,
					p = n.children,
					m = void 0;
				if (this.state.imageReady) {
					var d = c ? {
							objectFit: r ? "cover" : "contain"
						} : {
							backgroundImage: "url(" + t + ")",
							backgroundSize: r ? "cover" : "contain",
							backgroundRepeat: "no-repeat"
						},
						y = u()(i, "animated-lazy-image__image--ready");
					m = c ? a.createElement("img", {
						alt: s,
						src: t,
						className: y,
						style: d
					}) : a.createElement("div", {
						className: y,
						style: d
					})
				} else {
					var _ = u()(i, "animated-lazy-image__image--loading");
					m = c ? a.createElement("img", {
						className: _
					}) : a.createElement("div", {
						className: _
					})
				}
				return a.createElement("div", {
					ref: this.onRef,
					className: u()("animated-lazy-image", o),
					style: l
				}, m, !this.state.imageReady && a.createElement(v, {
					className: e,
					hidePlaceholder: h
				}), p)
			}
		}]), t
	}(), r.defaultProps = {
		disabled: !1
	}, h)
}, function (n, t, i) {
	"use strict";
	t.a = function () {
		var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown",
			t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		return function (i) {
			var h = function (o) {
				function h(n) {
					! function (n, t) {
						if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, h);
					var t = function (n, t) {
						if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? n : t
					}(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, n));
					return t.previousPageParams = null, t
				}
				return function (n, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					n.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: n,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
				}(h, o), s(h, [{
					key: "componentDidMount",
					value: function () {
						this.trackPageStateEvent(this.props, !0, !0)
					}
				}, {
					key: "componentWillReceiveProps",
					value: function (n) {
						var t = n.location,
							i = this.props.location;
						this.trackPageStateEvent(n, t.pathname !== i.pathname)
					}
				}, {
					key: "getPageParams",
					value: function (n) {
						var t = n.location,
							i = n.match,
							e = n.trackParams,
							o = i.params,
							h = Object(r.d)(t.search);
						return Object(c.b)(u({}, o, h, e))
					}
				}, {
					key: "trackPageStateEvent",
					value: function (i) {
						var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
							r = i.location,
							h = i.history,
							a = "POP" === h.action,
							c = this.getPageParams(i);
						if (JSON.stringify(c) !== JSON.stringify(this.previousPageParams) && (this.previousPageParams = c, o || !t || t && e)) {
							var u = {
								type: "pageState",
								timestamp: Date.now(),
								info: {
									id: r.key,
									pageType: n,
									initial: e,
									isBack: a,
									pageParams: c
								}
							};
							this.context.track(u)
						}
					}
				}, {
					key: "getChildContext",
					value: function () {
						return {
							targetType: n,
							targetData: {
								context: this.getPageParams(this.props)
							}
						}
					}
				}, {
					key: "render",
					value: function () {
						return e.createElement(i, this.props)
					}
				}]), h
			}(e.Component);
			return h.childContextTypes = {
				targetType: a.a.string,
				targetData: a.a.object
			}, h.contextTypes = {
				track: a.a.func
			}, Object(o.withRouter)(h)
		}
	};
	var e = i(1),
		o = (i.n(e), i(70)),
		r = i(29),
		h = i(4),
		a = i.n(h),
		c = i(72),
		u = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		s = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}()
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return v
	});
	var e, o, r = i(1),
		h = (i.n(r), i(92)),
		a = i.n(h),
		c = i(90),
		u = i.n(c),
		s = i(610),
		g = i(611),
		l = (i.n(g), Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}),
		p = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var m = 0,
		d = 1,
		f = 2,
		y = a.a.unstable_renderSubtreeIntoContainer,
		v = (o = e = function (n) {
			function t(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var i = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
				return i.prepareAnchor = i.prepareAnchor.bind(i), i.resetToast = i.resetToast.bind(i), i.renderToast = i.renderToast.bind(i), i.onClick = i.onClick.bind(i), i
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, r["Component"]), p(t, [{
				key: "componentWillMount",
				value: function () {
					this.prepareAnchor()
				}
			}, {
				key: "componentDidMount",
				value: function () {
					var n = this.props,
						t = n.showToast,
						i = n.toastIcon,
						e = n.toastText,
						o = n.toastDuration,
						r = n.onToastDismiss;
					t && this.queueToast({
						toastIcon: i,
						toastText: e,
						toastDuration: o,
						onToastDismiss: r,
						showToast: t
					})
				}
			}, {
				key: "componentWillReceiveProps",
				value: function (n) {
					var t = n.showToast,
						i = n.toastIcon,
						e = n.toastText,
						o = n.toastDuration,
						r = n.onToastDismiss;
					!this.props.showToast && t && (i || e) && this.queueToast({
						toastIcon: i,
						toastText: e,
						toastDuration: o,
						onToastDismiss: r,
						showToast: t
					})
				}
			}, {
				key: "componentWillUnmount",
				value: function () {
					this.resetToast()
				}
			}, {
				key: "prepareAnchor",
				value: function () {
					if (!t.node && document && document.createElement) {
						t.node = document.createElement("div"), t.node.className = "stardust-toast__overlay", this.props.anchorClassName && (t.node.className += " " + this.props.anchorClassName), t.node.style.cssText = "position:fixed;top:0;left:0;height:100%;width:100%;pointer-events:none;";
						var n = this.props.toastContainerSelector || function () {
							return document.body
						};
						t.container = n(), t.container && t.node && t.container.appendChild(t.node)
					}
				}
			}, {
				key: "resetToast",
				value: function () {
					t.container && t.node && t.container.removeChild(t.node), t.node = null, t.toastMessages = [], t.toastInPlay = m, this.delayHandlerID && clearTimeout(this.delayHandlerID)
				}
			}, {
				key: "queueToast",
				value: function (n) {
					t.toastMessages ? t.toastMessages.push(n) : t.toastMessages = [n], t.toastInPlay === m && this.popToast()
				}
			}, {
				key: "toastMessage",
				value: function (n) {
					var i = this,
						e = n.toastDuration,
						o = n.onToastDismiss,
						r = n.toastText,
						h = n.toastIcon;
					t.toastInPlay = d, this.renderToast(n), e && e > 0 && (this.delayHandlerID = setTimeout(function () {
						i.dismissToast({
							toastText: r,
							toastIcon: h,
							onToastDismiss: o
						})
					}, e))
				}
			}, {
				key: "popToast",
				value: function () {
					t.toastMessages.length > 0 && 1 !== t.toastInPlay && this.toastMessage(t.toastMessages.shift())
				}
			}, {
				key: "dismissToast",
				value: function (n) {
					var i = this;
					t.toastInPlay = f, this.renderToast(n), n.onToastDismiss && n.onToastDismiss(), this.delayHandlerID && clearTimeout(this.delayHandlerID), setTimeout(function () {
						t.toastInPlay = m, i.popToast()
					}, s.a)
				}
			}, {
				key: "onClick",
				value: function (n) {
					this.dismissToast(n)
				}
			}, {
				key: "renderToast",
				value: function (n) {
					var i = this;
					t.node || this.prepareAnchor(), y(this, n ? r.createElement(_, l({}, n, {
						showToast: t.toastInPlay === d,
						onClick: function () {
							n && i.onClick(n)
						}
					})) : r.createElement("div", null), t.node)
				}
			}, {
				key: "render",
				value: function () {
					return null
				}
			}]), t
		}(), e.toastMessages = [], e.toastInPlay = m, e.defaultProps = {
			showToast: !1,
			toastDuration: s.b
		}, o),
		_ = function (n) {
			var t = n.toastText,
				i = n.toastIcon,
				e = n.showToast,
				o = n.onClick,
				h = n.classNames,
				a = n.style;
			return r.createElement("div", {
				className: u()("stardust-toast", {
					"stardust-toast--hidden": !e
				}, h),
				style: a,
				onClick: o
			}, r.createElement("div", {
				className: "stardust-toast__container"
			}, r.createElement("div", {
				className: "stardust-toast__icon"
			}, i), r.createElement("div", {
				className: "stardust-toast__text"
			}, t)))
		}
}, function (n, t, i) {
	"use strict";
	i(871);
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r);
	i(872);

	function a(n) {
		var t = n.children,
			i = n.type;
		return o.a.createElement("div", {
			className: h()(["badge-text", "badge-text--" + i])
		}, o.a.createElement("div", {
			className: "badge-text__text typo-r12"
		}, t))
	}
	var c = i(89);
	i(873);

	function u() {
		return o.a.createElement(a, {
			type: "new"
		}, o.a.createElement("div", {
			className: "badge__new"
		}, Object(c.c)("label_new").toUpperCase()))
	}
	var s = i(28),
		g = (i(691), i(874)),
		l = i.n(g),
		p = i(875),
		m = i.n(p);

	function d(n) {
		var t = n.leftTriangle,
			i = void 0 !== t && t;
		return o.a.createElement("div", {
			className: h()("badge__horizontal", "badge__official-shop", {
				"badge__official-shop--left-triangle": i
			})
		}, "TW" === s.k ? o.a.createElement("img", {
			src: m.a,
			className: "badge__mall-img"
		}) : o.a.createElement("img", {
			src: l.a,
			className: "badge__mall-img"
		}))
	}
	var f = i(734),
		y = i(532);
	i(692);

	function v(n) {
		var t = n.leftTriangle,
			i = void 0 !== t && t;
		return o.a.createElement("div", {
			className: h()("badge__horizontal", "badge__preferred", {
				"badge__preferred--left-triangle": i
			})
		}, o.a.createElement(y.a, null), " ", Object(c.c)("label_preferred"))
	}

	function _() {
		return o.a.createElement(v, {
			leftTriangle: !0
		})
	}
	i(876);

	function b(n) {
		var t = n.discountText;
		return o.a.createElement(a, {
			type: "promotion"
		}, o.a.createElement("div", {
			className: "badge__promotion"
		}, t + "\n", " ", o.a.createElement("div", {
			className: "badge__promotion-off"
		}, Object(c.c)("label_promotion_off"))))
	}
	i(877);

	function T() {
		return o.a.createElement(a, {
			type: "soldout"
		}, o.a.createElement("div", {
			className: "badge__soldout"
		}, Object(c.c)("label_sold_out")))
	}
	var C = i(735);
	i(878);

	function N(n) {
		var t = n.leftTriangle,
			i = void 0 !== t && t,
			e = n.hasIcon,
			r = void 0 === e || e;
		return o.a.createElement("div", {
			className: h()("badge__horizontal", "badge__wholesale", {
				"badge__wholesale--left-triangle": i,
				"badge__wholesale--has-icon": r
			})
		}, r ? [o.a.createElement(C.a, {
			key: "icon"
		}), "&nbsp;"] : null, Object(c.c)("label_wholesale"))
	}
	i(879);

	function S() {
		return o.a.createElement("div", {
			className: "badge__horizontal badge__installment"
		}, Object(c.c)("label_installment"))
	}
	i(880);

	function M(n) {
		var t = n.bundleDeal,
			i = n.className;
		return t && t.bundle_deal_label ? o.a.createElement("div", {
			className: h()("badge__horizontal badge__bundle-deals typo-r10", i)
		}, t.bundle_deal_label) : null
	}
	var E = i(881),
		H = i.n(E),
		k = function (n) {
			var t = n.className;
			return o.a.createElement("span", {
				className: h()(H.a.badge, t || "")
			}, Object(c.c)("label_new"))
		};
	i(882);

	function G() {
		return o.a.createElement("div", {
			className: "badge__free"
		}, o.a.createElement("span", null, Object(c.c)("label_welcome_pkg_badge_free")))
	}
	i(612);

	function A(n) {
		var t = n.leftTriangle,
			i = void 0 === t || t,
			e = n.cashbackText,
			r = void 0 === e ? "x% Cashback" : e;
		return o.a.createElement("div", {
			className: h()("badge__horizontal", "badge__coinsback", {
				"badge__coinsback--left-triangle": i
			})
		}, r)
	}

	function O(n) {
		var t = n.cashbackText,
			i = void 0 === t ? "x% Cashback" : t;
		return o.a.createElement("div", {
			className: "badge__coinsback badge__coinsback--inline"
		}, i)
	}

	function P(n) {
		var t = n.cashbackText,
			i = void 0 === t ? "x% Cashback" : t;
		return o.a.createElement("div", {
			className: "badge__coinsback badge__coinsback--flashsale"
		}, i)
	}
	i.d(t, "f", function () {
		return u
	}), i.d(t, "h", function () {
		return d
	}), i.d(t, "i", function () {
		return f.a
	}), i.d(t, "j", function () {
		return _
	}), i.d(t, "k", function () {
		return v
	}), i.d(t, "l", function () {
		return b
	}), i.d(t, "m", function () {
		return T
	}), i.d(t, "n", function () {
		return N
	}), i.d(t, "e", function () {
		return S
	}), i.d(t, "a", function () {
		return M
	}), i.d(t, "g", function () {
		return k
	}), i.d(t, "d", function () {
		return G
	}), i.d(t, "b", function () {
		return A
	}), i.d(t, "c", function () {
		return O
	}), i.d(t, "o", function () {
		return P
	})
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return s
	});
	var e, o, r = i(1),
		h = (i.n(r), i(90)),
		a = i.n(h),
		c = i(897),
		u = (i.n(c), function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}());
	var s = (o = e = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i.state = {
				isActive: i.props.isActive,
				isBackgroundActive: i.props.isActive
			}, i.drawer = null, i.style = i.props.style || "right", i.handleBackgroundClick = i.handleBackgroundClick.bind(i), i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, r["Component"]), u(t, [{
			key: "handleBackgroundClick",
			value: function (n) {
				this.props.onClickOverlay && this.props.onClickOverlay(n), this.closeDrawer(), this.drawerBackground && this.drawerBackground.removeEventListener("click", this.handleBackgroundClick)
			}
		}, {
			key: "openDrawer",
			value: function () {
				var n = this;
				if (this.setState({
						isActive: !0,
						isBackgroundActive: !0
					}), this.drawer) {
					var t = function t() {
						clearTimeout(i), n.drawer && n.drawer.removeEventListener("transitionend", t), n.drawerBackground && n.drawerBackground.addEventListener("click", n.handleBackgroundClick), n.props.onOpen && n.props.onOpen()
					};
					this.drawer.addEventListener("transitionend", t);
					var i = setTimeout(t, this.props.transitionTimeout);
					document && document.querySelector && document.querySelector("body").classList.add("stardust-no-scroll")
				}
			}
		}, {
			key: "closeDrawer",
			value: function () {
				var n = this;
				if (this.setState({
						isActive: !1
					}), this.drawer) {
					var t = function t() {
						clearTimeout(i), n.setState({
							isBackgroundActive: !1
						}), n.drawer && n.drawer.removeEventListener("transitionend", t), n.props.onClose && n.props.onClose()
					};
					this.drawer.addEventListener("transitionend", t);
					var i = setTimeout(t, this.props.transitionTimeout);
					document && document.querySelector && document.querySelector("body").classList.remove("stardust-no-scroll")
				}
			}
		}, {
			key: "componentWillReceiveProps",
			value: function (n) {
				this.state.isActive && !n.isActive ? this.closeDrawer() : !this.state.isActive && n.isActive && this.openDrawer()
			}
		}, {
			key: "render",
			value: function () {
				var n = this,
					t = this.state.isActive,
					i = this.state.isBackgroundActive;
				return r.createElement("div", {
					className: "stardust-drawer"
				}, r.createElement("div", {
					className: a()("stardust-drawer__background", {
						"stardust-drawer__background--active": i
					}),
					ref: function (t) {
						n.drawerBackground = t
					}
				}), r.createElement("div", {
					className: a()("stardust-drawer__container", {
						"stardust-drawer__container--active": t
					}, "stardust-drawer__container--" + this.style),
					ref: function (t) {
						n.drawer = t
					}
				}, this.props.body))
			}
		}]), t
	}(), e.defaultProps = {
		transitionTimeout: 1050
	}, o)
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(504),
		h = i(537),
		a = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		c = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var u = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i.handleClick = i.handleClick.bind(i), i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, o.a.Component), c(t, [{
			key: "handleClick",
			value: function () {
				this.props.trackingClick(), "function" == typeof this.props.onClick && this.props.onClick()
			}
		}, {
			key: "render",
			value: function () {
				var n = this.props,
					t = (n.trackingClick, n.targetType, function (n, t) {
						var i = {};
						for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
						return i
					}(n, ["trackingClick", "targetType"]));
				return o.a.createElement(h.a, a({}, t, {
					onClick: this.handleClick
				}))
			}
		}]), t
	}();
	t.a = Object(r.c)(u, "Link")
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r),
		a = i(4),
		c = i.n(a),
		u = i(70),
		s = i(91),
		g = i(140),
		l = i(688),
		p = i(689),
		m = i(660),
		d = i(519),
		f = i(521),
		y = i(528);
	var v = i(214),
		_ = i(581),
		b = i(142),
		T = i(547),
		C = i(28),
		N = i(69),
		S = i(522),
		M = i(594),
		E = i(533),
		H = i(571),
		k = i(71),
		G = i(89),
		A = i(505),
		O = i(217),
		P = i(548),
		w = i(549),
		R = i(504),
		B = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		L = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var D = i(554),
		x = i(555),
		Y = i(595),
		j = i(582),
		I = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		};

	function X(n) {
		return o.a.createElement("svg", I({
			height: "13",
			viewBox: "0 0 26 13",
			width: "26",
			xmlns: "http://www.w3.org/2000/svg"
		}, n), o.a.createElement("g", {
			fill: "#d0011b",
			stroke: "none",
			transform: "translate(0.5 0)"
		}, o.a.createElement("path", {
			d: "m12.3506541 11.2079003h-7.1834146l-.2218386.2442242h7.3467847l-.1204652.5031849h-12.1717204l.8228945-.8788778 6.6758479-7.1296523c.3941623-.4691756.2527844-1.0545265-.4412844-1.2244861-.5568003-.133342-1.0467017.1342408-1.4510512.560694-.2511389.2670521-.4641763.6621942-.6391121 1.1854262h-3.1714836l.1386081-.6381452c.2128216-.9798207.7089944-1.7996866 1.3823467-2.4217079.917475-.8436201 2.2809184-1.4085603 3.7406921-1.4085603 1.3822408 0 2.2295649.2060842 3.130911.8854159.8530934.6633991 1.3603984 1.7751089 1.0140477 2.8713824-.0561905.2438155-.2346383.6238542-.6016217 1.0992703-.137083.1775869-1.4070253 1.6228763-3.890184 4.4284733h6.1005053l-.1174187.4904599h-6.4565508l-.2147274.2442242h6.6128097l-.1130532.4722251h-6.812797l-.2117934.2442241h6.9661218zm5.2045893 0h-3.2391975l.119235-.4722251h3.2367726zm-.0604116.2442242l-.1273673.5149041h-3.2430956l.1300113-.5149041zm.2376333-.9606734h-3.2355186l.119235-.4722251h3.2330937zm.1772217-.7164493h-3.2318396l.3071248-1.2163545h-6.2621493l7.0601447-7.993289c.270102-.3058016.6857301-.484706 1.1260615-.484706h3.3986634zm-4.2785185-3.3055316h2.090663l1.2095546-3.7173503z",
			fillRule: "nonzero"
		}), o.a.createElement("g", {
			stroke: "#d0011b",
			strokeWidth: ".5"
		}, o.a.createElement("path", {
			d: "m20.5001502 5.2201961l2.9892134.0002314.6673848-1.5602326-3.2713706-.0010991z"
		}), o.a.createElement("path", {
			d: "m19.6944298 8.4916992l4.1298662-.0070572.7071562-1.6652238-4.41185-.002256z"
		}), o.a.createElement("path", {
			d: "m19.3166252 10.153131l-.4178309 1.6221282 5.2008035.0002314.7411468-1.6223596z"
		}))))
	}
	var U = Object.assign || function (n) {
		for (var t = 1; t < arguments.length; t++) {
			var i = arguments[t];
			for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
		}
		return n
	};

	function K(n) {
		return o.a.createElement("svg", U({
			viewBox: "0 0 18 14",
			width: "18",
			height: "14"
		}, n), o.a.createElement("path", {
			fill: "#FF5722",
			stroke: "none",
			d: "M5.64677563 1.76190436c.00164444.00082222.00246667.00082222.00411111.00164444l-.00411111-.00164444zM17.1356869 11.2758378H8.04273121c-1.38626668 0-2.51517781-1.1428889-2.51517781-2.54806669V1.71750436l-1.59100002-.60022223c-.29682222-.11182223-.44728889-.44400001-.33464444-.74164446.111-.29764445.44317778-.44811111.74164445-.33546667l1.70775558.6438c.37246667.13566668.62817778.50155557.62817778.90773335v7.13606676c0 .77042224.61173334 1.39695559 1.36324446 1.39695559h9.09295569c.3182 0 .5755556.2573555.5755556.5755555 0 .3182001-.2573556.5755556-.5755556.5755556z"
		}), o.a.createElement("path", {
			fill: "#FF5722",
			stroke: "none",
			d: "M4.21109339 4.72322002H.53411556c-.29517778 0-.53444445-.23926667-.53444445-.53444445 0-.29517778.23926667-.53444445.53444445-.53444445H4.2110934c.29517778 0 .53444445.23926667.53444445.53444445 0 .29517778-.23926667.53444445-.53444445.53444445m-1e-8 1.76687329H1.66960447c-.29517779 0-.53444446-.23926667-.53444446-.53444445 0-.29517779.23926667-.53444446.53444446-.53444446h2.54148892c.29517778 0 .53444445.23926667.53444445.53444446 0 .29517778-.23926667.53444445-.53444445.53444445m0 1.76695557H2.80427115c-.29517778 0-.53444445-.23926666-.53444445-.53444445 0-.296.23926667-.53444445.53444445-.53444445h1.40682224c.29517778 0 .53444445.23844445.53444445.53444445 0 .29517779-.23926667.53444445-.53444445.53444445m6.1425753 4.69003758c0 .54431112-.44235556.98666668-.98666668.98666668-.54513334 0-.98666668-.44235556-.98666668-.98666668 0-.54513334.44153334-.98666668.98666668-.98666668.54431112 0 .98666668.44153334.98666668.98666668m6.09957379 0c0 .54431112-.44153334.98666668-.98666668.98666668s-.98666668-.44235556-.98666668-.98666668c0-.54513334.44153334-.98666668.98666668-.98666668s.98666668.44153334.98666668.98666668m.11321992-3.71153092H8.34424011c-.36177778 0-.65777779-.29517778-.65777779-.65777779V2.65777768c0-.36095556.29600001-.65777779.65777779-.65777779h8.22222229c.3617778 0 .6577778.29682223.6577778.65777779v5.92000007c0 .36260001-.296.65777779-.6577778.65777779"
		}), o.a.createElement("path", {
			fill: "#FFF",
			stroke: "none",
			d: "M12.4946535 8.02855344c-.1373111-.00164445-.2820222-.01973333-.4374222-.05262222-.3691778-.07728889-.7161556-.2548889-1.0910889-.5582889-.1356667-.10853333-.1808889-.30093334-.1027778-.43824445.0444-.07728889.1175778-.13237778.2006222-.14964445.0789333-.01973333.1603333-.00082222.2244667.04686667.0337111.02466667.0682444.0518.1027778.07811111.1340222.10277778.2729777.20966667.4234444.28037778.1784222.08304445.407.13977778.629.15457778.3239556.02137778.629-.09126666.8057778-.30422222.0748222-.09126667.1282667-.24091112.1348445-.38233334.0049333-.12908889-.0435778-.32642223-.1973334-.49580001-.1496444-.16526667-.2968222-.24502222-.4752444-.333-.1093556-.05262222-.2326889-.09948889-.3642445-.14882222-.1776-.06742223-.3617778-.1364889-.5377333-.23186667-.3420445-.18500001-.5961111-.4916889-.6783334-.82222224-.1077111-.43166667.0444-.95295557.3617778-1.24155557.5837778-.52786667 1.5671556-.39384445 2.1435334.03288889.1751333.13648889.1644444.333.0805778.45797778-.0830445.12580001-.2474889.19404445-.4004223.08633334-.2828444-.21542223-.6405111-.31737778-.962-.27873334-.2261111.02795556-.6100889.13895556-.6413333.56075556-.0205556.28037779.0846889.47031112.3420444.61420001.1907556.10688889.2869556.14882223.4464667.21295556l.0970222.03782222c.3971334.15704445.8074223.31902223 1.0935556.68737779.2647555.34286667.3543778.74411112.2581778 1.15933335-.0879778.38397778-.3667111.71451112-.7441112.88224445-.2294.10195556-.4596222.14882223-.7120444.14553334"
		}))
	}
	var V = i(583),
		z = i(227),
		F = i(561),
		W = i(617),
		q = i.n(W),
		Q = i(618),
		J = i.n(Q),
		Z = i(619),
		$ = i.n(Z),
		nn = i(620),
		tn = i.n(nn),
		en = i(621),
		on = i.n(en),
		rn = i(622),
		hn = i.n(rn),
		an = {
			ID: q.a,
			MY: J.a,
			SG: $.a,
			VN: tn.a,
			TH: on.a,
			PH: $.a,
			TW: hn.a
		},
		cn = (i(623), i(584)),
		un = i(562);
	i.d(t, "c", function () {
		return bn
	}), i.d(t, "a", function () {
		return Sn
	});
	var sn, gn, ln = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		pn = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var mn = C.a,
		dn = i(544)("./ic_warning_" + mn + "only@3x.png");
	var fn, yn, vn, _n, bn = {
			r10: "typo-r10",
			r12: "typo-r12",
			r14: "typo-r14",
			l12: "typo-l12",
			l14: "typo-l14",
			m12: "typo-m12"
		},
		Tn = (gn = sn = function (n) {
			function t(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var i = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
				return i.handleCommentButtonClick = i.handleCommentButtonClick.bind(i), i.handleLikeButtonClick = i.handleLikeButtonClick.bind(i), i.handleToastDismissed = i.handleToastDismissed.bind(i), i.handleItemCardClick = i.handleItemCardClick.bind(i), i.state = {
					showLikeToast: !1,
					likeToastText: ""
				}, i
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, e["Component"]), pn(t, [{
				key: "handleCommentButtonClick",
				value: function (n) {
					var t = this.props.item;
					t && window && ((t && t.item_rating ? t.item_rating.rating_count[0] : 0) > 0 && (n.preventDefault(), n.stopPropagation(), window.location.href = Object(A.k)(t.shopid, t.itemid)))
				}
			}, {
				key: "handleLikeButtonClick",
				value: function (n) {
					n.preventDefault(), n.stopPropagation();
					var t = this.props.item;
					if (!this.props.isLoggedIn && window) window.location.href = Object(A.l)();
					else if (t) {
						var i = t.liked;
						i ? this.props.unlikeItem(t.itemid, t.shopid, t.liked_count) : i || this.props.likeItem(t.itemid, t.shopid, t.liked_count), this.setState({
							showLikeToast: !0,
							likeToastText: i ? Object(G.c)("msg_deleted_from_your_favorite") : Object(G.c)("msg_added_to_your_favorite")
						})
					}
				}
			}, {
				key: "handleToastDismissed",
				value: function () {
					this.setState({
						showLikeToast: !1
					})
				}
			}, {
				key: "handleItemCardClick",
				value: function () {
					var n = this.props,
						t = n.passItemDataFromList,
						i = n.item;
					i && (t(i), this.props.setOfficialShopTheme(i.is_official_shop), this.props.trackClick())
				}
			}, {
				key: "componentWillMount",
				value: function () {
					this.props.fetchAccountInfo()
				}
			}, {
				key: "render",
				value: function () {
					var n = this.props.item,
						t = this.props,
						i = t.isCcInstallmentPaymentWhitelist,
						o = t.isNonCcInstallmentPaymentWhitelist,
						r = t.setShowNoRatingMessage,
						a = t.setShowSoldCount,
						c = t.setShowVideoIcon,
						u = t.setShowNewBadge,
						g = t.setShowFreeShippingIconBesideName,
						y = t.setShowFreeShippingIcon,
						_ = t.setShowHeartsAndStars,
						b = t.setShowPriceBeforeDiscount,
						C = t.setShowSoldOutBadge,
						P = t.setShowPromotionBadge,
						w = t.setShowLowestPriceGuarantee,
						R = t.setShowLeftBadgeOfficialMall,
						B = t.setShowLeftBadgePreferredItem,
						L = t.setShowLeftBadgeWholesale,
						D = t.setShowBuyNowButton,
						x = t.setShowAddToCartButton,
						I = t.setShowOfficialShopInlineBadge,
						U = t.setShowGroupBuyExtraBadge,
						z = t.setShowInstallmentExtraBadge,
						W = t.setShowBundleDealExtraBadge,
						q = t.setShowSBSBadge,
						Q = t.setShowPreviewOverlay,
						J = t.setShowWelcomePkg,
						Z = t.typoProductName,
						$ = t.typoPriceMain,
						nn = t.disableClicks,
						tn = t.setShowCoinsbackTag,
						en = t.setShowFreeBadge,
						on = t.isOwnItem,
						rn = t.trackingRef,
						hn = a && n && n.sold ? n.sold : 0,
						sn = n && 0 === n.price,
						gn = n ? Object(H.a)(n, "VN", null, null, {
							groupBuy: !1,
							welcomePkg: J,
							overrideShowDiscount: !0
						}) : null,
						ln = Q ? Object(cn.a)(n, "VN") : null,
						pn = Q && (!!ln || !!n && !!n.preview_info),
						mn = !(!n || !n.is_adult) && !Object(E.c)(n.is_adult),
						fn = n && n.video_info_list && n.video_info_list.length > 0,
						yn = !1;
					n && "number" == typeof n.adsid && "number" == typeof n.campaignid && (yn = n.adsid > 0 && n.campaignid > 0);
					var vn = mn ? dn : J && n && n.welcome_package_info && n.welcome_package_info.custom_image ? Object(A.i)(n.welcome_package_info.custom_image, !0) : n && n.images && n.images.length > 0 ? Object(A.i)(n.images[0], !0) : null,
						_n = n ? function (n, t) {
							var i = Object(O.e)(n, O.b.OFFENSIVE_HIDE);
							return t.status >= 2 && t.status <= 5 ? "banned" : 6 === t.status && i ? "offensive_hide" : 0 === t.status ? "delete" : 0 === t.stock ? "sold_out" : ((new Date).getTime() / 1e3 - t.ctime) / 3600 < 24 ? "new" : "normal"
						}("VN", n) : null,
						bn = !!(n && n.flag & T.a.FREE_SHIPPING),
						Tn = y && bn ? e.createElement(Y.a, {
							key: "free-shipping",
							className: "shopee-icon item-card__free-shipping-icon"
						}) : null,
						Cn = [q && n ? function (n) {
							switch (n) {
								case V.a.SERVICE_BY_SHOPEE_NON_SPECIAL:
									return e.createElement(K, {
										key: "sbs",
										className: "shopee-icon item-card__sbs-icon"
									});
								case V.a.SERVICE_BY_SHOPEE_24H:
									return e.createElement(j.a, {
										key: "sbs",
										className: "shopee-icon item-card__24hour-icon"
									});
								case V.a.SBS_ID_SHOPEE_24:
									return e.createElement(X, {
										key: "sbs",
										className: "shopee-icon item-card__24-icon"
									});
								default:
									return null
							}
						}(n.service_by_shopee_flag) : null, !g && Tn],
						Nn = n && n.liked ? e.createElement(p.a, {
							className: "item-card__likes-icon item-card__likes-icon--liked",
							onClick: nn ? void 0 : this.handleLikeButtonClick
						}) : e.createElement(l.a, {
							className: "item-card__likes-icon",
							onClick: nn ? void 0 : this.handleLikeButtonClick
						}),
						Sn = n && n.item_rating ? n.item_rating.rating_count[0] : 0,
						Mn = U && N.a.GROUP_BUY && n && n.is_group_buy_item,
						En = [];
					!pn && C && "sold_out" === _n && En.push(e.createElement(S.m, {
						key: "badge-soldout"
					})), "new" === _n && u && En.push(e.createElement(S.f, {
						key: "badge-new"
					})), !sn && !en && !pn && P && n && n.discount && En.push(e.createElement(S.l, {
						discountText: n.discount,
						key: "badge-promotion"
					})), en && "sold_out" !== _n && C && n && sn && En.push(e.createElement(S.d, {
						key: "badge-free"
					}));
					var Hn = null;
					n && n.is_official_shop && n.show_official_shop_label && n.show_official_shop_label_in_title && I && (Hn = e.createElement(S.i, null));
					var kn = [];
					R && n && n.is_official_shop && n.show_official_shop_label && n.show_official_shop_label_in_normal_position ? kn.push(e.createElement(S.h, {
						key: "badge-official-shop",
						leftTriangle: !0
					})) : B && n && n.shopee_verified && n.show_shopee_verified_label && !Object(k.f)() && kn.push(e.createElement(S.j, {
						key: "badge-preferred"
					})), tn && n && n.coin_earn_label && kn.push(e.createElement(S.b, {
						cashbackText: n.coin_earn_label
					})), !pn && L && n && n.can_use_wholesale && n.wholesale_tier_list && n.wholesale_tier_list.length > 0 && kn.push(e.createElement(S.n, {
						key: "badge-wholesale",
						leftTriangle: !0,
						hasIcon: !1
					}));
					var Gn = [];
					!pn && Mn && Gn.push(e.createElement(F.b, {
						key: "badge-group-buy",
						groupSize: 0,
						showGroupSize: !1,
						className: "item-card__badge-group-buy",
						shortText: !0,
						badgeSize: "s"
					}));
					var An = N.a.RW_ONE_PAGE_CHECKOUT && (n && n.is_cc_installment_payment_eligible && i || n && n.is_non_cc_installment_payment_eligible && o);
					z && !pn && An && Gn.push(e.createElement(S.e, {
						key: "installment"
					})), Gn.length < 2 && !Mn && !pn && W && N.a.BUNDLE_DEALS && n && n.bundle_deal_info && Gn.push(e.createElement(S.a, {
						bundleDeal: n.bundle_deal_info,
						key: "bundle-deal"
					}));
					var On = e.createElement("div", null, e.createElement(f.a, {
						onToastDismiss: this.handleToastDismissed,
						showToast: this.state.showLikeToast,
						toastText: this.state.likeToastText,
						anchorClassName: "stardust-toast__anchor"
					}), e.createElement("div", {
						className: "item-card__cover-image-wrapper",
						ref: rn
					}, pn && !!n && !!n.preview_info && !!n.preview_info.preview_end_time && e.createElement("div", {
						className: "preview-overlay"
					}, Object(G.c)("label_product_coming_soon")), !!vn && e.createElement(d.a, {
						wrapperClassName: "item-card__cover-image",
						className: "item-card__cover-image",
						src: vn,
						useImgTag: !0
					}), !pn && !yn && fn && c ? e.createElement(m.a, {
						className: "item-card__video-icon"
					}) : null, yn && e.createElement("div", {
						className: "item-card__ads"
					}, Object(G.c)("label_ads")), n && !pn && w && n.has_lowest_price_guarantee ? e.createElement("img", {
						src: an.VN,
						className: "item-card__lowest-price-icon",
						alt: "lowest price"
					}) : null), e.createElement("div", {
						className: "item-card__info"
					}, e.createElement("div", {
						className: h()("item-card__name", Z, !g && 0 === Gn.length && "item-card__name--two-lines")
					}, g && Tn, Hn, J && n && n.welcome_package_info && n.welcome_package_info.custom_name ? n.welcome_package_info.custom_name : !!n && n.name), e.createElement(v.a, null, !g && Gn.length > 0 && e.createElement("div", {
						className: "item-card__extra-badges"
					}, Gn)), e.createElement("div", {
						className: "item-card__price-shipping"
					}, (!pn || J) && b && gn && gn.priceBeforeDiscount ? e.createElement(e.Fragment, null, e.createElement("div", {
						className: "item-card__price-before-discount typo-l12",
						key: "original-price"
					}, gn.priceBeforeDiscount), e.createElement("div", {
						className: "item-card__spacer-price",
						key: "spacer"
					})) : null, e.createElement("div", {
						className: h()("item-card__actual-price", $, bn && !g && "item-card__actual-price--has-free-shipping", q && n && n.service_by_shopee_flag === V.a.SERVICE_BY_SHOPEE_24H && "item-card__actual-price--has-24h", q && n && n.service_by_shopee_flag === V.a.SBS_ID_SHOPEE_24 && "item-card__actual-price--has-24", q && n && n.service_by_shopee_flag === V.a.SERVICE_BY_SHOPEE_NON_SPECIAL && "item-card__actual-price--has-sbs")
					}, ln || gn && gn.actualPrice), e.createElement("div", {
						className: "item-card__spacer"
					}), e.createElement(v.a, null, Cn)), e.createElement(v.a, null, _ && e.createElement("div", {
						className: "item-card__popularity"
					}, a ? e.createElement("div", {
						className: "item-card__sold-count typo-l12"
					}, e.createElement("div", {
						className: "item-card__sold-count-text"
					}, Object(un.a)(n ? n.shopid : void 0) && !on ? "" : hn > 0 ? Object(G.c)("label_sold_n", {
						sold: hn
					}) : Object(G.c)("label_no_recent_sales"))) : e.createElement("div", {
						className: "item-card__likes typo-r12"
					}, Nn, e.createElement("div", {
						className: "item-card__likes-text"
					}, n ? n.liked_count : 0)), a && 0 === hn && 0 === Sn ? null : e.createElement(M.a, {
						ratingCount: Sn,
						ratingStar: n && n.item_rating ? n.item_rating.rating_star : null,
						showNoRatingMessage: r,
						className: "item-card__ratings",
						onClick: nn ? void 0 : this.handleCommentButtonClick
					}))), D || x ? pn ? e.createElement("div", {
						className: "item-card__buy-now-placeholder"
					}) : e.createElement("button", {
						className: h()(n && n.stock > 0 ? "item-card__buy-now-button" : "item-card__buy-now-button-sold-out")
					}, D ? Object(G.c)("label_buy") : Object(G.c)("label_add_to_cart")) : null), e.createElement(v.a, null, kn.length > 0 && e.createElement("div", {
						className: "item-card__badge-left-wrapper"
					}, kn), En.length > 0 && e.createElement("div", {
						className: "item-card__badge-right-wrapper"
					}, En)));
					return nn ? On : e.createElement(s.Link, {
						onClick: nn ? void 0 : this.handleItemCardClick,
						className: "item-card hairline-border",
						to: n ? Object(A.N)(n.name, n.shopid, n.itemid) : "#"
					}, On)
				}
			}]), t
		}(), sn.displayName = "ItemCard", sn.defaultProps = {
			setShowSoldCount: !1,
			setShowNoRatingMessage: !0,
			setShowVideoIcon: !0,
			setShowFreeShippingIconBesideName: !1,
			setShowFreeShippingIcon: !0,
			setShowHeartsAndStars: !0,
			setShowPriceBeforeDiscount: !0,
			setShowNewBadge: !0,
			setShowSoldOutBadge: !0,
			setShowPromotionBadge: !0,
			setShowBuyNowButton: !1,
			setShowAddToCartButton: !1,
			setShowOfficialShopInlineBadge: !0,
			setShowLowestPriceGuarantee: !0,
			setShowLeftBadgeOfficialMall: !0,
			setShowLeftBadgePreferredItem: !0,
			setShowLeftBadgeWholesale: !0,
			setShowGroupBuyExtraBadge: !0,
			setShowInstallmentExtraBadge: !0,
			setShowBundleDealExtraBadge: !0,
			setShowSBSBadge: !0,
			setShowPreviewOverlay: !0,
			disableClicks: !1,
			setShowCoinsbackTag: !0,
			setShowFreeBadge: !1,
			setShowWelcomePkg: !1,
			typoProductName: bn.l14,
			typoPriceMain: bn.m12
		}, gn),
		Cn = Object(D.a)(function (n, t) {
			return function (n) {
				var i = t.searchParams,
					e = t.listType,
					o = t.algorithm,
					r = t.colorfulBlocks;
				return Object(P.c)(n, i, e, {
					algorithm: o,
					colorful_blocks: r
				})
			}
		}, function (n) {
			return n.item
		}, (fn = function (n) {
			return n.item
		}, yn = Tn, Object(R.c)((_n = vn = function (n) {
			function t(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var i = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
				return i.trackClick = i.trackClick.bind(i), i
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, e.Component), L(t, [{
				key: "trackClick",
				value: function () {
					var n = fn(this.props, this.context);
					if (n) {
						var t = this.context,
							i = t.searchParams,
							e = t.listType,
							o = t.algorithm;
						Object(w.a)(Object(P.a)(n, i, e, {
							algorithm: o
						})), this.props.trackingClick()
					}
				}
			}, {
				key: "render",
				value: function () {
					return e.createElement(yn, B({}, this.props, {
						trackClick: this.trackClick
					}))
				}
			}]), t
		}(), vn.contextTypes = {
			listType: c.a.string,
			searchParams: c.a.object,
			algorithm: c.a.string,
			colorfulBlocks: c.a.arrayOf(c.a.string)
		}, _n), yn.displayName || yn.name || "Item")), "ItemCard", w.a, {
			searchParams: c.a.object,
			listType: c.a.string,
			algorithm: c.a.string,
			colorfulBlocks: c.a.arrayOf(c.a.string)
		}),
		Nn = Object(v.b)(Object(u.withRouter)(Object(g.connect)(function (n, t) {
			var i = t.item,
				e = i ? i.itemid : t.itemid,
				o = i ? i.shopid : t.shopid,
				r = e ? Object(b.c)(n, e) : null,
				h = Object(b.a)(n);
			return {
				item: t.item || r ? ln({}, i, r) : null,
				itemId: e,
				shopId: o,
				isLoggedIn: !!h && !!h.username,
				isCcInstallmentPaymentWhitelist: !!h && !!h.is_cc_installment_payment_eligible,
				isNonCcInstallmentPaymentWhitelist: !!h && !!h.is_non_cc_installment_payment_eligible,
				isOwnItem: h && i && h.userid === i.shopid
			}
		}, {
			likeItem: _.a,
			unlikeItem: _.c,
			passItemDataFromList: _.b,
			setOfficialShopTheme: z.b,
			fetchAccountInfo: function (n) {
				var t, i, e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				return t = regeneratorRuntime.mark(function t(i, r) {
						return regeneratorRuntime.wrap(function (t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									if (!r().account || !r().account.isLoading) {
										t.next = 4;
										break
									}
									return t.abrupt("return");
								case 4:
									return t.next = 6, i(Object(y.a)(n, e, o));
								case 6:
									return t.abrupt("return", t.sent);
								case 7:
								case "end":
									return t.stop()
							}
						}, t, this)
					}), i = function () {
						var n = t.apply(this, arguments);
						return new Promise(function (t, i) {
							return function e(o, r) {
								try {
									var h = n[o](r),
										a = h.value
								} catch (n) {
									return void i(n)
								}
								if (!h.done) return Promise.resolve(a).then(function (n) {
									e("next", n)
								}, function (n) {
									e("throw", n)
								});
								t(a)
							}("next")
						})
					},
					function (n, t) {
						return i.apply(this, arguments)
					}
			}
		})(Cn))),
		Sn = (t.b = Nn, Object(x.a)(Nn))
}, , , function (n, t, i) {
	"use strict";
	t.a = function (n) {
		var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
		return r = regeneratorRuntime.mark(function r(h) {
				var a, c, u, s;
				return regeneratorRuntime.wrap(function (r) {
					for (;;) switch (r.prev = r.next) {
						case 0:
							return r.next = 2, h(Object(e.d)(n, t, i));
						case 2:
							return a = r.sent, c = a.response, !(u = a.error) && c && (s = c.userid, h(Object(o.b)(s))), r.abrupt("return", {
								response: c,
								error: u
							});
						case 7:
						case "end":
							return r.stop()
					}
				}, r, this)
			}), h = function () {
				var n = r.apply(this, arguments);
				return new Promise(function (t, i) {
					return function e(o, r) {
						try {
							var h = n[o](r),
								a = h.value
						} catch (n) {
							return void i(n)
						}
						if (!h.done) return Promise.resolve(a).then(function (n) {
							e("next", n)
						}, function (n) {
							e("throw", n)
						});
						t(a)
					}("next")
				})
			},
			function (n) {
				return h.apply(this, arguments)
			};
		var r, h
	};
	var e = i(224),
		o = i(236)
}, function (n, t, i) {
	"use strict";
	i(557);
	var e = i(624);
	i.d(t, "a", function () {
		return e.a
	}), i.d(t, "b", function () {
		return e.b
	});
	var o = i(238);
	i.d(t, "c", function () {
		return o.a
	})
}, function (n, t, i) {
	"use strict";
	i.d(t, "b", function () {
		return s
	}), i.d(t, "a", function () {
		return g
	});
	var e = i(1),
		o = (i.n(e), i(140)),
		r = i(557),
		h = i(550),
		a = i(29),
		c = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		u = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var s = function (n, t, i, s, l) {
			return function (p) {
				var m, d, f = (d = m = function (n) {
					function i() {
						return function (n, t) {
								if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, i),
							function (n, t) {
								if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !t || "object" != typeof t && "function" != typeof t ? n : t
							}(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
					}
					return function (n, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						n.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: n,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
					}(i, e["Component"]), u(i, [{
						key: "shouldComponentUpdate",
						value: function (n) {
							var t = this.props,
								i = t.recommendParams,
								e = t.recommendation,
								o = n.recommendParams,
								r = n.recommendation;
							if (t.recommendQuery !== n.recommendQuery || t.limit !== n.limit || t.offset !== n.offset || i.recommendType !== o.recommendType || i.shopId !== o.shopId || i.categoryId !== o.categoryId || i.itemId !== o.itemId) return !0;
							if (e === r) return !1;
							if (e && r || !e && r || e.nextOffset !== r.nextOffset || e.updateTime !== r.updateTime || e.total !== r.total || e.hasMore !== r.hasMore || e.items.length !== r.items.length) return !0;
							for (var h = e.items, a = r.items, c = 0; c < h.length; c++)
								if (h[c].itemid !== a[c].itemid || h[c].price !== a[c].price) return !0;
							return !1
						}
					}, {
						key: "componentWillMount",
						value: function () {
							this.props.fetchRecommendItems(function (n) {
								return n.Recommendation
							}, this.props.recommendParams, this.props.limit, this.props.offset, this.props.onFetch, this.props.forceRefresh, "", this.props.userid)
						}
					}, {
						key: "render",
						value: function () {
							var n = this,
								i = this.props,
								o = i.recommendation,
								r = i.recommendParams,
								h = i.limit,
								a = void 0 === h ? 0 : h,
								u = i.offset,
								s = void 0 === u ? 0 : u,
								m = function (n, t) {
									var i = {};
									for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
									return i
								}(i, ["recommendation", "recommendParams", "limit", "offset"]),
								d = o && o.total;
							if (!o) return null;
							switch (t) {
								case g.PAGING:
									return e.createElement(p, c({
										items: o && o.items && o.items.length && o.total ? o.items.slice(s, Math.min(o.nextOffset, o.total)) : [],
										updateTime: o.updateTime,
										hasMore: o.hasMore,
										totalPageCount: o && o.total && a ? Math.ceil(o.total / a) : 0,
										loadPage: function (t, i) {
											return n.props.fetchRecommendItems(function (n) {
												return n.Recommendation
											}, r, a, t * a, i, !0)
										},
										total: d,
										loading: o.loading
									}, l, m));
								case g.INFINITE:
									return e.createElement(p, c({
										items: o && o.items && o.items.length ? o.items.slice(0, Math.min(o.nextOffset, o.total)) : [],
										updateTime: o.updateTime,
										hasMore: o.hasMore,
										loadNextBatch: o.hasMore ? function (t, i) {
											return n.props.fetchRecommendItems(function (n) {
												return n.Recommendation
											}, r, i || a, o.nextOffset, t, !0)
										} : function () {},
										total: d,
										loading: o.loading
									}, l, m));
								default:
									return e.createElement(p, c({
										items: o && o.items ? o.items.slice(0, Math.min(o.total, s + a)) : [],
										hasMore: o.hasMore,
										updateTime: o.updateTime,
										recommendParams: r,
										offset: s,
										limit: a,
										loading: o.loading,
										total: d
									}, l, m))
							}
						}
					}]), i
				}(), m.defaultProps = {
					offset: 0
				}, d);
				return Object(o.connect)(function (t, e) {
					var o = e.itemId,
						r = e.shopId,
						c = e.categoryId,
						u = {
							recommendType: n
						};
					o && (u.itemId = o), r && (u.shopId = r), c && (u.categoryId = c);
					var g = Object(h.a)(u);
					return {
						recommendParams: u,
						queryKey: g,
						recommendation: t.Recommendation[g],
						limit: e.limit ? e.limit : i || i,
						offset: e.offset ? e.offset : e.offset || s,
						userid: Object(a.a)(t, ["account", "info", "userid"], 0)
					}
				}, {
					fetchRecommendItems: r.a
				})(f)
			}
		},
		g = {
			DEFAULT: "default",
			PAGING: "paging",
			INFINITE: "infinite"
		}
}, function (n, t, i) {
	"use strict";
	i.d(t, "e", function () {
		return e
	}), i.d(t, "f", function () {
		return o
	}), i.d(t, "g", function () {
		return r
	}), i.d(t, "d", function () {
		return h
	}), i.d(t, "c", function () {
		return a
	}), i.d(t, "a", function () {
		return c
	}), i.d(t, "b", function () {
		return u
	}), i.d(t, "h", function () {
		return s
	});
	var e = {
			STARTED: 1,
			PENDING_PAYMENT: 4,
			DISMISSED: 5,
			FORMED: 7
		},
		o = {
			PAY: 0,
			CANCEL_PAYMENT: 1,
			INVITE: 2,
			GROUP_DETAIL: 3,
			ORDER_DETAIL: 4,
			DOWNLOAD: 5,
			CANCEL: 6
		},
		r = {
			PAID: 2,
			UNPAID: 1,
			INVALID: 6
		},
		h = 0,
		a = 16,
		c = 16,
		u = 10,
		s = 2
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("tick")
}, function (n, t, i) {
	"use strict";
	t.b = function (n) {
		o = n, Object(e.a)(r, n ? "1" : "0")
	}, t.a = h, t.c = function (n) {
		return n && h() || !n
	};
	var e = i(231),
		o = void 0,
		r = "SPC_IA";

	function h() {
		return void 0 === o && (o = "1" === Object(e.b)(r)), o
	}
}, function (n, t, i) {
	"use strict";
	var e, o, r = i(1),
		h = (i.n(r), i(90)),
		a = i.n(h),
		c = i(883),
		u = (i.n(c), function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}());
	var s = (o = e = function (n) {
		function t() {
			return function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, r["Component"]), u(t, [{
			key: "componentWillUnmount",
			value: function () {
				"function" == typeof this.props.onPopupDismissed && this.props.onPopupDismissed()
			}
		}, {
			key: "render",
			value: function () {
				var n = this.props,
					t = n.title,
					i = n.children,
					e = n.mainButtonLabel,
					o = n.secondaryButtonLabel,
					h = n.onClickMainButton,
					c = n.onClickSecondaryButton,
					u = n.onClickOverlay;
				return r.createElement("div", {
					className: a()("stardust-popup")
				}, r.createElement("div", {
					className: "stardust-popup__dialog--wrapper"
				}, r.createElement("div", {
					className: "stardust-popup__dialog"
				}, r.createElement("div", {
					className: "stardust-popup__dialog--wrapper-top"
				}, t && r.createElement("div", {
					className: "stardust-popup-title"
				}, t), r.createElement("div", {
					className: "stardust-popup-content"
				}, i)), r.createElement("div", {
					className: "stardust-popup-buttons"
				}, o && r.createElement("span", {
					className: "stardust-popup-button stardust-popup-button--secondary",
					onClick: c
				}, o), r.createElement("span", {
					className: "stardust-popup-button stardust-popup-button--main",
					onClick: h
				}, e)))), r.createElement("div", {
					className: "stardust-popup__overlay",
					onClick: u
				}))
			}
		}]), t
	}(), e.defaultProps = {
		mainButtonLabel: "OK"
	}, o);
	t.a = s
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("arrow-up")
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		var t = n.className,
			i = n.children,
			o = n.style;
		return e.createElement("div", {
			className: r()("stardust-horizontal-scroll-view", t),
			style: o
		}, i)
	};
	var e = i(1),
		o = (i.n(e), i(90)),
		r = i.n(o),
		h = i(626);
	i.n(h)
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		var t = n._ref,
			i = n.to,
			e = function (n, t) {
				var i = {};
				for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
				return i
			}(n, ["_ref", "to"]);
		return "string" == typeof i && (a = i, /^http/.test(a)) ? o.a.createElement("a", h({
			href: i,
			ref: t
		}, e)) : o.a.createElement(r.Link, h({
			to: i,
			innerRef: t
		}, e));
		var a
	};
	var e = i(1),
		o = i.n(e),
		r = i(91),
		h = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return s
	});
	var e = i(1),
		o = (i.n(e), i(657)),
		r = i(16),
		h = i.n(r),
		a = i(745),
		c = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		u = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var s = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i.state = {
				inViewport: !1
			}, i.handleEnterViewport = i.handleEnterViewport.bind(i), i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, e["Component"]), u(t, [{
			key: "handleEnterViewport",
			value: function () {
				var n = this;
				this.handleCallback = Object(a.b)(function () {
					n.setState({
						inViewport: !0
					})
				}, {
					timeout: 200
				})
			}
		}, {
			key: "render",
			value: function () {
				var n = this,
					t = this.props,
					i = t.src,
					o = function (n, t) {
						var i = {};
						for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
						return i
					}(t, ["src"]);
				return h()(i, "it is compulsory to pass a src as props for LazyImage"), e.createElement("img", c({
					src: this.state.inViewport ? i : null
				}, o, {
					ref: function (t) {
						return n._wrapper = t
					}
				}))
			}
		}, {
			key: "componentDidMount",
			value: function () {
				Object(o.a)(this._wrapper, this.handleEnterViewport)
			}
		}, {
			key: "componentWillUnmount",
			value: function () {
				Object(o.b)(this._wrapper), Object(a.a)(this.handleCallback)
			}
		}]), t
	}()
}, , function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return u
	});
	var e = i(1),
		o = i.n(e),
		r = i(683),
		h = i(274),
		a = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var c = Object(h.b)(!1),
		u = function (n) {
			function t() {
				return function (n, t) {
						if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function (n, t) {
						if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? n : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, c), a(t, [{
				key: "render",
				value: function () {
					var n = this;
					return this.state.mod ? function n(t, i, e) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, i);
						if (void 0 === o) {
							var r = Object.getPrototypeOf(t);
							return null === r ? void 0 : n(r, i, e)
						}
						if ("value" in o) return o.value;
						var h = o.get;
						return void 0 !== h ? h.call(e) : void 0
					}(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "render", this).call(this) : o.a.createElement(r.a, {
						onEnterViewPort: function () {
							n.load(n.props)
						}
					})
				}
			}]), t
		}()
}, function (n, t, i) {
	"use strict";
	t.a = function (n, t) {
		return Object(r.e)({
			SHOPEE_BASE_URL: o.e,
			product: n,
			shop: t,
			getImageUrl: e.i,
			getProductUrl: e.v,
			getShopUrl: e.U,
			countryCurrency: o.m
		})
	}, t.b = function (n) {
		return Object(r.f)({
			SHOPEE_BASE_URL: o.e,
			shop: n,
			getImageUrl: e.i,
			getShopUrl: e.U
		})
	};
	var e = i(505),
		o = i(28),
		r = i(542)
}, function (n, t, i) {
	"use strict";
	var e = i(865),
		o = i.n(e),
		r = (i(866), o.a),
		h = i(867),
		a = i.n(h),
		c = (i(868), i(869), a.a),
		u = i(687),
		s = i(733);
	t.c = function (n) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
			i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_";
		return t && t.length && t.find(function (n) {
			return "VN" === n
		}) ? "" + n + i + "VN" : n
	}, i.d(t, "a", function () {
		return r
	}), i.d(t, "b", function () {
		return c
	}), i.d(t, !1, function () {}), i.d(t, "e", function () {
		return u.d
	}), i.d(t, "f", function () {
		return u.e
	}), i.d(t, !1, function () {}), i.d(t, "d", function () {
		return u.a
	}), i.d(t, !1, function () {}), i.d(t, !1, function () {
		return u.b
	}), i.d(t, !1, function () {
		return u.c
	}), i.d(t, !1, function () {
		return s.a
	})
}, , function (n, t, i) {
	var e = {
		"./ic_warning_18only@3x.png": 585,
		"./ic_warning_21only@3x.png": 586
	};

	function o(n) {
		return i(r(n))
	}

	function r(n) {
		var t = e[n];
		if (!(t + 1)) throw new Error("Cannot find module '" + n + "'.");
		return t
	}
	o.keys = function () {
		return Object.keys(e)
	}, o.resolve = r, n.exports = o, o.id = 544
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		return function (t) {
			function i(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, i);
				var t = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, n));
				return t.state = {
					popupMainButtonOnClick: function () {},
					popupSecondaryButtonOnClick: function () {},
					popupOnDismiss: function () {},
					popupElement: null
				}, t.showPopup = t.showPopup.bind(t), t.hidePopup = t.hidePopup.bind(t), t.handlePopupMainButtonOnClick = t.handlePopupMainButtonOnClick.bind(t), t.handlePopupSecondaryButtonOnClick = t.handlePopupSecondaryButtonOnClick.bind(t), t
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(i, t), a(i, [{
				key: "showPopup",
				value: function (n) {
					var t = n.title,
						i = n.message,
						h = n.mainButtonLabel,
						a = n.secondaryButtonLabel,
						c = n.onClickMainButton,
						u = n.onClickSecondaryButton,
						s = n.onDismiss,
						g = !!this.state.popupElement;
					this.setState({
						popupMainButtonOnClick: c,
						popupSecondaryButtonOnClick: u || null,
						popupOnDismiss: s || null,
						popupElement: e.createElement(o.a, {
							mainButtonLabel: h,
							secondaryButtonLabel: a || null,
							onClickMainButton: this.handlePopupMainButtonOnClick,
							onClickSecondaryButton: this.handlePopupSecondaryButtonOnClick,
							title: t
						}, i)
					}, function () {
						g || r.a.prevent()
					})
				}
			}, {
				key: "hidePopup",
				value: function () {
					this.state.popupOnDismiss && "function" == typeof this.state.popupOnDismiss && this.state.popupOnDismiss(), this.setState({
						popupMainButtonOnClick: function () {},
						popupSecondaryButtonOnClick: function () {},
						popupOnDismiss: function () {},
						popupElement: null
					}, function () {
						r.a.resume()
					})
				}
			}, {
				key: "handlePopupMainButtonOnClick",
				value: function () {
					this.state.popupMainButtonOnClick && "function" == typeof this.state.popupMainButtonOnClick && this.state.popupMainButtonOnClick(), this.hidePopup()
				}
			}, {
				key: "handlePopupSecondaryButtonOnClick",
				value: function () {
					this.state.popupSecondaryButtonOnClick && "function" == typeof this.state.popupSecondaryButtonOnClick && this.state.popupSecondaryButtonOnClick(), this.hidePopup()
				}
			}, {
				key: "shouldComponentUpdate",
				value: function (n, t) {
					return n !== this.props || this.state.popupElement !== t.popupElement && (!this.state.popupElement || !t.popupElement)
				}
			}, {
				key: "render",
				value: function () {
					return e.createElement(n, h({}, this.props, {
						popupElement: this.state.popupElement,
						showPopup: this.showPopup,
						hidePopup: this.hidePopup
					}))
				}
			}]), i
		}(e.Component)
	};
	var e = i(1),
		o = (i.n(e), i(534)),
		r = i(216),
		h = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		a = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}()
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("arrow-down")
}, function (n, t, i) {
	"use strict";
	t.a = {
		IS_FAKE_ITEM: 1,
		FREE_SHIPPING: 2,
		SEO_DESCRIPTION: 4,
		INTEGRATED_FREE_SHIPPING: 8,
		OFFLINE_DEAL: 16,
		NO_SEARCHABLE: 32,
		IS_SYSTEM_UNLIST: 128,
		IS_USER_UNLIST: 256
	}
}, function (n, t, i) {
	"use strict";
	t.c = function (n, t, i) {
		var e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
			o = t ? c(t, e) : {};
		return {
			operation: a.a.IMPRESSION,
			items: n.filter(function (n) {
				return !!n
			}).map(function (n) {
				return u(n, i, o, e)
			})
		}
	}, t.a = function (n, t, i) {
		var e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
			o = t ? c(t, e) : {};
		return {
			operation: a.a.CLICK,
			items: [u(n, i, o, e)]
		}
	}, t.e = function (n) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
		return {
			operation: a.a.VIEW,
			items: [u(n)],
			refer_urls: [t.refer_url]
		}
	}, t.b = function (n, t) {
		var i = t ? c(t) : {};
		return {
			operation: a.a.SHOP_CLICK,
			shops: [s(n, i)]
		}
	}, t.d = function (n, t) {
		var i = t ? c(t) : {};
		return {
			operation: a.a.SHOP_IMPRESSION,
			shops: n.filter(function (n) {
				return !!n
			}).map(function (n) {
				return s(n, i)
			})
		}
	};
	var e = i(517),
		o = i(513),
		r = i(547),
		h = i(518),
		a = i(145);

	function c(n) {
		var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			r = Object(e.c)(n);
		return {
			keyword: n.keyword,
			sorttype: function (n) {
				switch (n.sortBy) {
					case o.p.RELEVANCY:
					case o.p.POPULAR:
						return h.c.SORTBY_RELEVANCE;
					case o.p.TIME:
						return h.c.SORTBY_LATEST_DESC;
					case o.p.PRICE:
						return n.order === o.q.ASC ? h.c.SORTBY_PRICE_ASC : h.c.SORTBY_PRICE_DESC;
					case o.p.SALES:
						return h.c.SORTBY_ITEM_SOLD_DESC;
					case o.p.DISTANCE:
						return h.c.SORTBY_DISTANCE_ASC;
					default:
						return
				}
			}(n),
			colorful_blocks: i.colorful_blocks,
			filter_price_min: n.minPrice ? 1 : 0,
			filter_price_max: n.maxPrice ? 1 : 0,
			filter_include_sf: n.freeShipping ? 1 : 0,
			filter_with_discount: n.withDiscount ? 1 : 0,
			wholesale: n.wholesale ? 1 : 0,
			filter_item_condition: n.usedItem || n.newItem ? 1 : 0,
			filter_user_verified: n.preferred ? 1 : 0,
			filters: [{
				match_type: (t = r, t === o.l.COLLECTION ? h.b.MATCH_COLLECTION : t === o.l.CATEGORY || t === o.l.SUBCATEGORY ? h.b.MATCH_CATEGORY : t === o.l.HASHTAG ? h.b.MATCH_HASHTAG : t === o.l.SHOP ? h.b.MATCH_SHOP : t === o.l.ATTRIBUTE ? h.b.MATCH_ATTRIBUTE : t === o.l.SHOP_CATEGORY ? h.b.MATCH_SHOP_CATE : void 0),
				match_id: [function (n, t) {
					switch (n) {
						case o.l.COLLECTION:
							return t.collection;
						case o.l.CATEGORY:
							return t.category;
						case o.l.SUBCATEGORY:
							return t.subcategory;
						case o.l.SHOP:
							return t.shop;
						case o.l.ATTRIBUTE:
							return t.attrId;
						case o.l.SHOP_CATEGORY:
							return t.shopCollection;
						default:
							return
					}
				}(r, n)],
				hashtag: n.hashtag ? [n.hashtag] : void 0
			}]
		}
	}

	function u(n, t, i) {
		var e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
		return {
			itemid: n.itemid,
			shopid: n.shopid,
			discount: n.show_discount,
			free_shipping: !!(n.flag & r.a.FREE_SHIPPING),
			is_prefered: !!n.shopee_verified,
			algorithm: n.algorithm,
			campaignid: n.campaignid,
			query: i,
			refer_urls: e.refer_url,
			item_modelid: e.item_modelid,
			list_type: t,
			adsid: n.adsid,
			location_in_ads: n.locationInAds,
			location: n.location,
			ads_keyword: n.ads_keyword,
			match_type: n.match_type,
			deduction_info: n.deduction_info
		}
	}

	function s(n, t) {
		return {
			shopid: n.shopid,
			location: n.location,
			query: t
		}
	}
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		g || (g = Object(r.d)("SPC_F"));
		var t = Object(o.c)(c({
			userid: parseInt(Object(r.d)("SPC_U"), 10),
			sessionid: Object(r.d)("SPC_T_ID"),
			token: Object(r.d)("SPC_T_IV"),
			from: "rw",
			deviceid: g,
			platform: u,
			timestamp: (new Date).getTime(),
			country: s
		}, n));
		if (h.l) Object.keys(o.a)[Object.values(o.a).indexOf(n.operation)];
		else Object(e.e)("/__t__", t)
	};
	var e = i(10),
		o = i(145),
		r = i(53),
		h = i(28),
		a = i(241),
		c = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		u = Object(a.a)(),
		s = h.k,
		g = void 0
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return o
	});
	var e = i(597),
		o = Object(e.a)({
			recommendType: "recommend_type",
			categoryId: "catid",
			itemId: "itemid",
			shopId: "shopid",
			minCount: "min_count"
		});
	Object(e.a)({
		recommendType: "recommend_type",
		categoryId: "catid",
		limit: "limit",
		offset: "offset"
	})
}, , function (n, t, i) {
	"use strict";
	t.c = function (n) {
		var t = a.create(1e3 * n),
			i = a.create(new Date);
		return t.formatFrom(i, 1)
	}, i.d(t, "a", function () {
		return c
	}), i.d(t, "b", function () {
		return u
	});
	var e = i(242),
		o = i.n(e),
		r = i(28),
		h = i(260),
		a = new o.a;
	a.locale.set(Object(h.c)(r.k, r.r));
	var c = function (n, t) {
			return a.create(n, "s").format(t)
		},
		u = function (n) {
			var t = 1e3 * n,
				i = a.create(t);
			return i.format("hh:mm, ") + i.format("LHDS")
		}
}, function (n, t, i) {
	"use strict";
	t.c = h, t.g = a, t.b = function (n) {
		if ("TW" === n) return o.o.WITHIN_24H;
		if ("ID" === n) return o.o.NON_SPECIAL;
		return o.o.NONE
	}, t.e = function (n, t) {
		var i = n && Object(e.a)(n, [o.b, t], Object(e.a)(n, [o.b, "default"]));
		return Array.isArray(i) ? i : []
	}, t.d = function (n, t) {
		var i = n && Object(e.a)(n, [o.a, t], Object(e.a)(n, [o.a, "default"], {}));
		return r({}, i, {
			groups: Array.isArray(i.groups) && i.hasOwnProperty("groups") ? i.groups.filter(function (n) {
				return n && (!n.filters || Array.isArray(n.filters))
			}) : []
		})
	}, t.h = function (n, t) {
		if (t === o.h.installment) return !(!n.ccInstallment && !n.nonCCInstallment);
		var i = h(t);
		return !(!i || !n[i] && 0 !== n[i])
	}, t.f = function (n) {
		var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		if (function (n) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (n.preferred) return !0;
				if (n.officialMall && !t) return !0;
				if (n.serviceByShopee || 0 === n.serviceByShopee) return !0;
				return !1
			}(n, t) || function (n) {
				if (n.withDiscount) return !0;
				if (n.freeShipping) return !0;
				if (n.wholesale) return !0;
				if (n.payCOD) return !0;
				if (n.payCreditCard) return !0;
				if (n.ccInstallment) return !0;
				if (n.nonCCInstallment) return !0;
				if (n.hasLowestPriceGuarantee) return !0;
				return !1
			}(n) || function (n) {
				if (n.newItem) return !0;
				if (n.usedItem) return !0;
				return !1
			}(n)) return !0;
		if (n.minPrice || n.maxPrice) return !0;
		if (!n.catalogue && n.facet && n.facet.length) return !0;
		if (n.filterSoldOut) return !0;
		if (n.locations && n.locations.length) return !0;
		if (n.shippingOptions && n.shippingOptions.length) return !0;
		if (n.ratingFilter) return !0;
		if (n.labelIds && n.labelIds.length) return !0;
		return !1
	}, t.a = function (n) {
		var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		return r({}, n, {
			withDiscount: void 0,
			freeShipping: void 0,
			newItem: void 0,
			usedItem: void 0,
			preferred: void 0,
			minPrice: void 0,
			maxPrice: void 0,
			facet: n.catalogue ? n.facet : void 0,
			filterSoldOut: void 0,
			wholesale: void 0,
			locations: void 0,
			shippingOptions: void 0,
			officialMall: t ? n.officialMall : void 0,
			payCOD: void 0,
			payCreditCard: void 0,
			installment: void 0,
			ccInstallment: void 0,
			nonCCInstallment: void 0,
			hasLowestPriceGuarantee: void 0,
			serviceByShopee: void 0,
			ratingFilter: void 0,
			labelIds: void 0
		})
	};
	var e = i(29),
		o = i(513),
		r = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		};

	function h(n) {
		return o.i[o.j.indexOf(n)]
	}

	function a(n, t) {
		return !t || !t.includes(n)
	}
}, function (n, t, i) {
	"use strict";
	t.a = function (n, t, i, e, a, c) {
		var u = Object(r.e)(i, e, {
			onTrack: function (i, e) {
				Object(o.a)(n(i, e), t(i, e || {}), a)
			}
		});
		return u.contextTypes = h({}, u.contextTypes, c), u
	};
	var e = i(1),
		o = (i.n(e), i(616)),
		r = i(504),
		h = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = (i.n(e), Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		});
	t.a = function (n) {
		return function (t) {
			return function (i) {
				return e.createElement(n, o({}, i, t))
			}
		}
	}
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var h, a, c, u, s, g = i(4),
		l = i.n(g),
		p = i(504),
		m = (h = {
			listType: l.a.string,
			searchParams: l.a.object,
			algorithm: l.a.string,
			referUrls: l.a.string,
			colorfulBlocks: l.a.arrayOf(l.a.string),
			targetType: l.a.string
		}, a = function (n) {
			return n.contextValue
		}, c = function (n) {
			var t = n.contextValue,
				i = n.children,
				e = n.targetType;
			return o.a.createElement(p.a, {
				targetType: (e || null === e ? e : t && t.listType) || null
			}, i)
		}, s = u = function (n) {
			function t() {
				return function (n, t) {
						if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function (n, t) {
						if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? n : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, e.Component), r(t, [{
				key: "getChildContext",
				value: function () {
					return a(this.props)
				}
			}, {
				key: "render",
				value: function () {
					return e.createElement(c, this.props)
				}
			}]), t
		}(), u.childContextTypes = h, s);
	t.a = m
}, function (n, t, i) {
	"use strict";
	var e = i(239),
		o = i(220),
		r = i(10),
		h = i(35);

	function a(n) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h._1;
		return Object(r.b)("" + t + n)
	}
	var c = i(550),
		u = i(3);
	t.a = function (n, t, i) {
		var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
			s = arguments[4],
			g = arguments[5],
			l = arguments[6],
			p = arguments[7];
		return m = regeneratorRuntime.mark(function m(d, f) {
				var y, v, _, b, T, C, N, S, M, E;
				return regeneratorRuntime.wrap(function (m) {
					for (;;) switch (m.prev = m.next) {
						case 0:
							if (y = Object(c.a)(t), v = y + "&" + Object(o.a)({
									limit: i,
									offset: r,
									userid: p || null
								}).slice(1), _ = 0 !== r, b = n(f()) || {}, _ || g || !b[y]) {
								m.next = 8;
								break
							}
							s && s(!0), m.next = 16;
							break;
						case 8:
							return d(Object(u.a)(e.a.REQUESTED, {
								queryKey: y,
								loadMore: _,
								offset: r,
								limit: i
							})), m.next = 11, a(v, l || h._1);
						case 11:
							T = m.sent, C = T.response, !(N = T.error) && C ? (S = r + i, M = C.data, E = !M || !M.items || M.items.length >= i, d(Object(u.a)(e.a.SUCCESS, {
								queryKey: y,
								loadMore: _,
								hasMore: E,
								response: M,
								offset: r,
								nextOffset: S,
								limit: i
							}))) : d(Object(u.a)(e.a.FAILED, {
								queryKey: y,
								loadMore: _
							})), s && s(!N);
						case 16:
						case "end":
							return m.stop()
					}
				}, m, this)
			}), d = function () {
				var n = m.apply(this, arguments);
				return new Promise(function (t, i) {
					return function e(o, r) {
						try {
							var h = n[o](r),
								a = h.value
						} catch (n) {
							return void i(n)
						}
						if (!h.done) return Promise.resolve(a).then(function (n) {
							e("next", n)
						}, function (n) {
							e("throw", n)
						});
						t(a)
					}("next")
				})
			},
			function (n, t) {
				return d.apply(this, arguments)
			};
		var m, d
	}
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("help")
}, function (n, t, i) {
	"use strict";
	i.d(t, "d", function () {
		return e
	}), i.d(t, "f", function () {
		return o
	}), i.d(t, "e", function () {
		return r
	}), i.d(t, "b", function () {
		return h
	}), i.d(t, "a", function () {
		return a
	}), i.d(t, "c", function () {
		return c
	});
	var e = 44,
		o = 44,
		r = 41,
		h = 50,
		a = 52,
		c = 32
}, function (n, t, i) {
	"use strict";
	t.a = s, t.b = function (n) {
		return function (t) {
			return s(t, n)
		}
	};
	var e = i(1),
		o = (i.n(e), i(4)),
		r = i.n(o),
		h = i(72),
		a = i(785),
		c = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		u = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();

	function s(n, t) {
		var i = function (i) {
			function o(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, o);
				var t = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, n));
				return t.onClick = t.onClick.bind(t), t
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(o, e["Component"]), u(o, [{
				key: "getTargetType",
				value: function () {
					return this.props.targetType || t || "unknown"
				}
			}, {
				key: "makeTrackingClickEvent",
				value: function () {
					var n = c({}, Object(a.a)(this.context.targetData), Object(a.a)(this.props)),
						t = this.getTargetType();
					return {
						type: "click",
						timestamp: Date.now(),
						info: {
							targetType: this.context.targetType + "." + t,
							targetData: Object(h.b)(n),
							componentType: t
						}
					}
				}
			}, {
				key: "onClick",
				value: function () {
					this.context.track(this.makeTrackingClickEvent())
				}
			}, {
				key: "render",
				value: function () {
					var t = c({}, this.props, {
						trackingClick: this.onClick
					});
					return e.createElement(n, t)
				}
			}]), o
		}();
		return i.contextTypes = {
			track: r.a.func,
			targetType: r.a.string,
			targetData: r.a.object
		}, i
	}
}, function (n, t, i) {
	"use strict";
	t.a = s, t.b = function (n) {
		var t = n.groupSize,
			i = n.badgeSize,
			e = n.shortText,
			r = n.className,
			c = n.showGroupSize,
			s = void 0 === c || c,
			g = {
				size: t
			};
		return o.a.createElement("div", {
			className: h()(u.a.badgeGroupBuy, "s" === i && u.a.smallBadge, "m" === i && u.a.mediumBadge, "l" === i && u.a.largeBadge, "l" !== i ? "typo-m10" : "typo-m14", r)
		}, o.a.createElement("div", {
			className: h()(u.a.badgeIconWrapper, "center")
		}, o.a.createElement("svg", {
			viewBox: "0 0 12 12",
			xmlns: "http://www.w3.org/2000/svg",
			className: u.a.badgeIcon
		}, o.a.createElement("defs", null, o.a.createElement("linearGradient", {
			x1: "50%",
			y1: "2.87578064%",
			x2: "50%",
			y2: "100%",
			id: "1"
		}, o.a.createElement("stop", {
			stopColor: "#FFF",
			offset: "0%"
		}), o.a.createElement("stop", {
			stopColor: "#FFF5E8",
			offset: "100%"
		})), o.a.createElement("path", {
			d: "M9.01433703,3.91520208 C9.01289646,3.91499025 9.01181411,3.91445948 9.01110241,3.91359928 C8.2690921,3.01677238 7.38900806,2.57464812 6.35918627,2.57464812 C5.37490226,2.57464812 4.55639903,2.90546463 3.89019337,3.57211998 C3.22549655,4.22546938 2.89446917,5.04087002 2.89446917,6.03020701 C2.89446917,7.048964 3.26253848,7.88009352 4.00288327,8.5369975 C4.70010999,9.15101608 5.44715207,9.45452215 6.25111252,9.45452215 C6.93136867,9.45452215 7.53973764,9.23003657 8.08339855,8.77757138 C8.56066218,8.37693949 8.84886613,7.91293914 8.95341645,7.37993706 L6.56054533,7.37993706 C6.55163316,7.38020264 6.54268787,7.38033638 6.53371135,7.38033638 C6.04526057,7.38033638 5.64929298,6.98436879 5.64929298,6.49591801 C5.64929298,6.00746724 6.04526057,5.61149965 6.53371135,5.61149965 C6.53658656,5.61149965 6.53945857,5.61151337 6.54232732,5.61154074 L10.5096452,5.61154074 C10.8365484,5.61154074 11,5.78442283 11,6.13018701 C11,6.87391778 10.9104728,7.53498205 10.7295275,8.11619037 C10.551218,8.65951347 10.2510192,9.16660347 9.82976829,9.63732 C8.87966509,10.6884818 7.66505043,11.2166697 6.20025429,11.2166697 C4.77243905,11.2166697 3.54428279,10.7076924 2.52688619,9.69467639 C1.51047876,8.67832098 1,7.45323467 1,6.03020701 C1,4.57749372 1.51939233,3.33919789 2.55354471,2.32702629 C3.58782474,1.31040306 4.85173707,0.800003052 6.33375715,0.800003052 C7.13054263,0.800003052 7.87642513,0.960514986 8.57252114,1.28304527 C9.21649274,1.59531441 9.84535592,2.0927656 10.4603528,2.77384116 C10.4606949,2.77421999 10.4604496,2.77506992 10.4596401,2.77637133 C10.5851785,2.93364473 10.6602229,3.13299598 10.6602229,3.34987478 C10.6602229,3.85798155 10.248321,4.26988347 9.74021421,4.26988347 C9.44524516,4.26988347 9.18269813,4.13106837 9.01433703,3.91520208 Z",
			id: "2"
		})), o.a.createElement("g", null, o.a.createElement("use", {
			fill: "url(#1)",
			fillRule: "evenodd",
			xlinkHref: "#2"
		})))), o.a.createElement("div", {
			className: h()(u.a.badgeText, "vcenter text-trunc-1")
		}, s ? e ? Object(a.c)("label_group_buy_badge", g) : Object(a.c)("label_group_buy_badge_long", g) : Object(a.c)("group_deals")))
	};
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r),
		a = i(89),
		c = i(694),
		u = i.n(c);

	function s(n) {
		var t = n.badgeSize,
			i = n.className;
		return t = t || "m", o.a.createElement("div", {
			className: h()(u.a.badgeGroupBuy, u.a.noBorder, "s" === t && u.a.smallBadge, "m" === t && u.a.mediumBadge, "l" === t && u.a.largeBadge, "l" !== t ? "typo-m10" : "typo-m14", i)
		})
	}
	s.defaultProps = {
		size: "m"
	}
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		return e.some(function (t) {
			return t === Number(n)
		}) || !1
	};
	var e = [68876894]
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r),
		a = (i(898), Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}),
		c = function (n) {
			var t = n.type,
				i = void 0 === t ? "rounded" : t,
				o = n.size,
				r = void 0 === o ? "large" : o,
				a = n.style,
				c = n.children,
				u = n.className,
				s = n.onClick;
			return e.createElement("div", {
				style: a,
				className: h()("stardust-avatar", "stardust-avatar--" + i, "stardust-avatar--" + r, u),
				onClick: s
			}, c)
		},
		u = function (n) {
			return e.createElement(c, a({}, n, {
				type: "rounded",
				size: "medium"
			}))
		},
		s = c,
		g = i(743),
		l = i(744),
		p = i(522);
	i(899);
	i.d(t, "a", function () {
		return m
	});
	var m = function (n) {
		var t = n.imgSrc,
			i = n.isPreferred,
			e = void 0 !== i && i,
			r = n.isOfficial,
			h = void 0 !== r && r,
			a = n.isBordered,
			c = void 0 !== a && a,
			m = n.useHorizontalBadge,
			d = void 0 !== m && m,
			f = n.classNames,
			y = t ? o.a.createElement("img", {
				src: t,
				className: "avatar__img"
			}) : o.a.createElement("div", {
				className: "avatar__placeholder"
			}, o.a.createElement(g.a, null)),
			v = null;
		return h ? v = d ? o.a.createElement("div", {
			className: "avatar__preferred-badge avatar__preferred-badge--large avatar__preferred-badge--official"
		}, o.a.createElement(p.h, null)) : o.a.createElement("div", {
			className: "avatar__preferred-badge avatar__preferred-badge--official"
		}, o.a.createElement(l.a, null)) : e && (v = d ? o.a.createElement("div", {
			className: "avatar__preferred-badge avatar__preferred-badge--large"
		}, o.a.createElement(p.k, null)) : o.a.createElement("div", {
			className: "avatar__preferred-badge"
		}, o.a.createElement(l.a, null))), o.a.createElement("div", {
			className: "avatar"
		}, c ? o.a.createElement(s, {
			className: f
		}, y) : o.a.createElement(u, {
			className: f
		}, y), v)
	}
}, , , function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("arrow-right-bold-circle")
}, function (n, t, i) {
	"use strict";
	i.d(t, "b", function () {
		return e
	}), i.d(t, "c", function () {
		return o
	}), i.d(t, "a", function () {
		return r
	}), i.d(t, "e", function () {
		return h
	}), i.d(t, "f", function () {
		return a
	}), i.d(t, "d", function () {
		return c
	});
	var e = 15,
		o = 12,
		r = 6,
		h = {
			default: "flash_sale",
			SG: "flash_deal",
			PH: "flash_deal",
			MY: "shocking_sale",
			ID: "flash_sale",
			TW: "flash_sale",
			VN: "flash_sale",
			TH: "flash_sale"
		},
		a = {
			default: "flash_sale",
			SG: "flash_deals",
			PH: "flash_deals",
			MY: "shocking_sale",
			ID: "flash_sale",
			TW: "flash_sale",
			VN: "flash_sale",
			TH: "flash_sale"
		},
		c = {
			HOME_PAGE: "home-page",
			LANDING_PAGE: "landing-page",
			FLASH_SALE_LANDING: "flash-sale-landing",
			PRODUCT_BAND: "product-band"
		}
}, function (n, t, i) {
	"use strict";
	var e = i(10),
		o = i(220),
		r = "/api/v2/group_buy/get_group",
		h = "/api/v2/group_buy/get_items",
		a = "/api/v2/group_buy/get_my_groups",
		c = "/api/v2/group_buy/get_group",
		u = "/api/v2/group_buy/get_group_detail",
		s = "/api/v2/group_buy/get_settings";

	function g(n) {
		return Object(e.b)(h + Object(o.a)(n))
	}
	var l = "/api/v2/order/buyer_cancel_order",
		p = "/api/v2/checkout/cancel";
	var m = i(928),
		d = i(531);

	function f(n) {
		return function () {
			var t = n.apply(this, arguments);
			return new Promise(function (n, i) {
				return function e(o, r) {
					try {
						var h = t[o](r),
							a = h.value
					} catch (n) {
						return void i(n)
					}
					if (!h.done) return Promise.resolve(a).then(function (n) {
						e("next", n)
					}, function (n) {
						e("throw", n)
					});
					n(a)
				}("next")
			})
		}
	}
	t.h = function () {
		var n = this;
		return t = f(regeneratorRuntime.mark(function t(i) {
				var o, r, h;
				return regeneratorRuntime.wrap(function (n) {
					for (;;) switch (n.prev = n.next) {
						case 0:
							return i({
								type: m.f.REQUESTED
							}), n.next = 3, Object(e.b)(s);
						case 3:
							return o = n.sent, r = o.response, h = o.error, i(h ? {
								type: m.f.FAILED,
								payload: h
							} : {
								type: m.f.SUCCESS,
								payload: r
							}), n.abrupt("return", {
								response: r,
								error: h
							});
						case 8:
						case "end":
							return n.stop()
					}
				}, t, n)
			})),
			function (n) {
				return t.apply(this, arguments)
			};
		var t
	}, t.i = function (n) {
		var t = this,
			i = n.catid,
			e = n.offset,
			o = void 0 === e ? 0 : e,
			r = n.limit,
			h = void 0 === r ? d.c : r,
			a = n.getGroupBuyState,
			c = void 0 === a ? function (n) {
				return n.groupBuy
			} : a;
		return u = f(regeneratorRuntime.mark(function n(e, r) {
				var a, u, s, l, p, d;
				return regeneratorRuntime.wrap(function (n) {
					for (;;) switch (n.prev = n.next) {
						case 0:
							if (a = {
									catid: i,
									offset: o,
									limit: h,
									preserve_soldout: !0
								}, !((u = c(r())) && u.homePage && u.homePage.items && u.homePage.items.length)) {
								n.next = 4;
								break
							}
							return n.abrupt("return");
						case 4:
							return e({
								type: m.g.REQUESTED
							}), n.next = 7, g(a);
						case 7:
							s = n.sent, l = s.response, s.error ? e({
								type: m.g.FAILED
							}) : (p = l && l.data ? l.data : y, d = p.items, e({
								type: m.g.SUCCESS,
								payload: {
									items: d
								}
							}));
						case 11:
						case "end":
							return n.stop()
					}
				}, n, t)
			})),
			function (n, t) {
				return u.apply(this, arguments)
			};
		var u
	}, t.f = function (n) {
		var t = this,
			i = n.catid,
			e = n.offset,
			o = void 0 === e ? 0 : e,
			r = n.limit,
			h = void 0 === r ? d.a : r,
			a = n.getGroupBuyState,
			c = void 0 === a ? function (n) {
				return n.groupBuy
			} : a;
		return u = f(regeneratorRuntime.mark(function n(e, r) {
				var a, u, s, l, p, d, f, v, _, b, T, C;
				return regeneratorRuntime.wrap(function (n) {
					for (;;) switch (n.prev = n.next) {
						case 0:
							if (a = c(r()), u = a.itemsByCategory && a.itemsByCategory[i], !((s = u && u.items) && Array.isArray(s) && s.length > o + h)) {
								n.next = 5;
								break
							}
							return n.abrupt("return", {
								response: {
									data: s,
									total: s.length
								}
							});
						case 5:
							return l = {
								catid: i,
								offset: o,
								limit: h,
								preserve_soldout: !0
							}, e({
								type: m.c.REQUESTED,
								input: l
							}), n.next = 9, g(l);
						case 9:
							return p = n.sent, d = p.response, (f = p.error) ? e({
								type: m.c.FAILED,
								payload: f,
								input: l
							}) : (v = d && d.data ? d.data : y, _ = v.items, b = v.total, T = Math.min(o + h, b || 0), C = !_ || _.length >= h, e({
								type: m.c.SUCCESS,
								payload: {
									items: _,
									hasMore: C,
									offset: o,
									limit: h,
									nextOffset: T,
									total: b
								},
								input: l
							})), n.abrupt("return", {
								response: d,
								error: f
							});
						case 14:
						case "end":
							return n.stop()
					}
				}, n, t)
			})),
			function (n, t) {
				return u.apply(this, arguments)
			};
		var u
	}, t.g = function (n) {
		var t = this,
			i = n.listType,
			r = void 0 === i ? m.h.ALL : i,
			h = n.offset,
			c = void 0 === h ? 0 : h,
			u = n.limit,
			s = void 0 === u ? d.b : u,
			g = n.getGroupBuyState,
			l = void 0 === g ? function (n) {
				return n.groupBuy
			} : g,
			p = n.getGroupByGroupId,
			v = void 0 === p ? function (n, t) {
				return n.groupByGroupid[t]
			} : p;
		return _ = f(regeneratorRuntime.mark(function n(i, h) {
				var u, g, p, d, f, _, b, T, C, N, S, M;
				return regeneratorRuntime.wrap(function (n) {
					for (;;) switch (n.prev = n.next) {
						case 0:
							if (u = l(h()), g = u.myGroups && u.myGroups[r], !((p = g && g.groups) && Array.isArray(p) && p.length > c + s)) {
								n.next = 5;
								break
							}
							return n.abrupt("return", {
								response: {
									data: p.map(function (n) {
										return v(u, n)
									}),
									total: p.length
								}
							});
						case 5:
							return d = {
								list_type: r,
								offset: c,
								limit: s
							}, i({
								type: m.e.REQUESTED,
								query: d
							}), n.next = 9, t = d, Object(e.b)(a + Object(o.a)(t));
						case 9:
							return f = n.sent, _ = f.response, (b = f.error) ? i({
								type: m.e.FAILED,
								payload: b,
								query: d
							}) : (T = _ && _.data ? _.data : y, C = T.groups, N = T.total, S = Math.min(c + s, N || 0), M = !C || C.length >= s, i({
								type: m.e.SUCCESS,
								payload: {
									groups: C,
									hasMore: M,
									nextOffset: S,
									limit: s,
									offset: c,
									total: N || 0
								},
								query: d
							})), n.abrupt("return", {
								response: _,
								error: b
							});
						case 14:
						case "end":
							return n.stop()
					}
					var t
				}, n, t)
			})),
			function (n, t) {
				return _.apply(this, arguments)
			};
		var _
	}, t.d = v, t.a = function (n) {
		var t = this,
			i = n.groupId,
			r = n.orderId,
			h = n.checkoutId;
		return a = f(regeneratorRuntime.mark(function n(a) {
				var c, u, s;
				return regeneratorRuntime.wrap(function (n) {
					for (;;) switch (n.prev = n.next) {
						case 0:
							if (h && r) {
								n.next = 3;
								break
							}
							return n.abrupt("return");
						case 3:
							return n.next = 5, t = {
								checkout_id: h
							}, Object(e.b)(p + Object(o.a)(t));
						case 5:
							return c = n.sent, u = c.error, s = c.response, u || a(v({
								groupId: i,
								orderId: r
							})), n.abrupt("return", {
								error: u,
								response: s
							});
						case 10:
						case "end":
							return n.stop()
					}
					var t
				}, n, t)
			})),
			function (n) {
				return a.apply(this, arguments)
			};
		var a
	}, t.c = function (n) {
		var t = this,
			i = n.groupId;
		return h = f(regeneratorRuntime.mark(function n(h) {
				var a, c, u, s, g;
				return regeneratorRuntime.wrap(function (n) {
					for (;;) switch (n.prev = n.next) {
						case 0:
							return h({
								type: m.a.REQUESTED
							}), a = {
								groupid: i
							}, n.next = 4, t = a, Object(e.b)(r + Object(o.a)(t));
						case 4:
							c = n.sent, u = c.response, (s = c.error) ? h({
								type: m.a.FAILED,
								payload: {
									error: s
								},
								query: a
							}) : (g = u && u.data ? u.data : y, h({
								type: m.a.SUCCESS,
								payload: {
									group: g
								},
								query: a
							}));
						case 8:
						case "end":
							return n.stop()
					}
					var t
				}, n, t)
			})),
			function (n) {
				return h.apply(this, arguments)
			};
		var h
	}, t.e = function (n) {
		return t = f(regeneratorRuntime.mark(function t(i) {
				var r, h, a, u;
				return regeneratorRuntime.wrap(function (t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return i({
								type: m.d.REQUESTED,
								query: n
							}), t.next = 3, s = n, Object(e.b)(c + Object(o.a)(s));
						case 3:
							return r = t.sent, h = r.error, a = r.response, u = r.error_response, i(h ? {
								type: m.d.FAILED,
								error: h,
								query: n
							} : {
								type: m.d.SUCCESS,
								payload: a && a.data || y,
								query: n
							}), t.abrupt("return", {
								response: a,
								error: h,
								error_response: u
							});
						case 9:
						case "end":
							return t.stop()
					}
					var s
				}, t, this)
			})),
			function (n) {
				return t.apply(this, arguments)
			};
		var t
	}, t.b = function (n) {
		var t = this,
			i = n.orderId,
			o = n.shopId,
			r = n.groupId;
		return h = f(regeneratorRuntime.mark(function n(h) {
				var a, c, u;
				return regeneratorRuntime.wrap(function (n) {
					for (;;) switch (n.prev = n.next) {
						case 0:
							if (i && r) {
								n.next = 2;
								break
							}
							return n.abrupt("return");
						case 2:
							return n.next = 4, t = {
								orderid: i,
								is_group_buy: !0,
								reason: 0,
								shopid: o
							}, Object(e.d)(l, t);
						case 4:
							return a = n.sent, c = a.error, u = a.response, c || h(v({
								groupId: r,
								orderId: i
							})), n.abrupt("return", {
								error: c,
								response: u
							});
						case 9:
						case "end":
							return n.stop()
					}
					var t
				}, n, t)
			})),
			function (n) {
				return h.apply(this, arguments)
			};
		var h
	};
	var y = {};

	function v(n) {
		var t, i = this,
			r = n.groupId,
			h = n.orderId;
		return t = f(regeneratorRuntime.mark(function n(t) {
				var a, c, s, g, l;
				return regeneratorRuntime.wrap(function (n) {
					for (;;) switch (n.prev = n.next) {
						case 0:
							return a = {
								groupid: r,
								orderid: h
							}, t({
								type: m.b.REQUESTED,
								query: a
							}), n.next = 4, i = a, Object(e.b)(u + Object(o.a)(i));
						case 4:
							return c = n.sent, s = c.response, g = c.error, l = s && s.data || y, t(g ? {
								type: m.b.FAILED,
								payload: g,
								query: a
							} : {
								type: m.b.SUCCESS,
								payload: l,
								query: a
							}), n.abrupt("return", {
								response: s,
								error: g
							});
						case 10:
						case "end":
							return n.stop()
					}
					var i
				}, n, i)
			})),
			function (n) {
				return t.apply(this, arguments)
			}
	}
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return y
	}), t.b = v;
	var e = i(1),
		o = (i.n(e), i(4)),
		r = i.n(o),
		h = i(579),
		a = i(72),
		c = i(785),
		u = i(1063),
		s = i(560),
		g = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		l = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();

	function p(n, t) {
		if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function m(n, t) {
		if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? n : t
	}

	function d(n, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		n.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: n,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
	}
	var f = 100,
		y = v(function (n) {
			function t(n) {
				p(this, t);
				var i = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
				return i.state = {
					mounted: !1
				}, i.onRef = i.onRef.bind(i), i
			}
			return d(t, e["Component"]), l(t, [{
				key: "onRef",
				value: function (n) {
					this.setState({
						mounted: !0
					}), this.props.trackingRef(n)
				}
			}, {
				key: "render",
				value: function () {
					var n = this.props,
						t = (n.trackingRef, function (n, t) {
							var i = {};
							for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
							return i
						}(n, ["trackingRef"]));
					return Object.keys(t).every(function (n) {
						return null !== t[n] && void 0 !== t[n]
					}) || this.state.mounted ? e.createElement("div", {
						style: {
							position: "fixed",
							zIndex: 99999,
							bottom: 0,
							left: 0
						},
						className: "tracking-impression-placeholder",
						ref: this.onRef
					}) : null
				}
			}]), t
		}(), "Self", {
			reportOnce: !0
		});

	function v(n, t, i) {
		var o, y, v = Object(s.a)(n, t);
		return y = o = function (n) {
			function o(n) {
				p(this, o), n.targetType;
				var t = m(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, n));
				return t.onObserve = t.onObserve.bind(t), t.track = Object(h.a)(t.track.bind(t), f), t.trackingRef = t.trackingRef.bind(t), t
			}
			return d(o, e["PureComponent"]), l(o, [{
				key: "getComponentType",
				value: function () {
					return this.props.targetType || t || -1
				}
			}, {
				key: "getTargetType",
				value: function () {
					return this.context.targetType + "." + this.getComponentType()
				}
			}, {
				key: "componentDidUpdate",
				value: function (n, t) {
					i && (i.reportOnce || i.shouldReport && !i.shouldReport(this.props, n, this.state, t)) || this.onObserve()
				}
			}, {
				key: "componentWillUnmount",
				value: function () {
					this.domElement && Object(u.b)(this.domElement)
				}
			}, {
				key: "onObserve",
				value: function () {
					var n = this;
					this.domElement && Object(u.a)(this.domElement, function () {
						var t = n.getTargetType(),
							i = o.impressionsToReportMap.get(t) || [],
							e = g({}, Object(c.a)(n.context.targetData), Object(c.a)(n.props));
						i.push({
							targetData: Object(a.b)(e)
						}), o.impressionsToReportMap.set(t, i), n.track(), Object(u.b)(n.domElement)
					})
				}
			}, {
				key: "track",
				value: function () {
					var n = this.getTargetType(),
						t = o.impressionsToReportMap.get(n);
					if (t && 0 !== t.length) {
						var e = this.makeTrackingImpressionsEvent(t);
						o.impressionsToReportMap.set(n, []), this.context.track(e), i && "function" == typeof i.onTrack && i.onTrack(this.props, this.context)
					}
				}
			}, {
				key: "makeTrackingImpressionsEvent",
				value: function (n) {
					return {
						type: "impression",
						timestamp: Date.now(),
						info: {
							targetType: this.getTargetType(),
							componentType: this.getComponentType(),
							impressions: n
						}
					}
				}
			}, {
				key: "trackingRef",
				value: function (n) {
					this.domElement = n, this.onObserve()
				}
			}, {
				key: "render",
				value: function () {
					var n = g({}, this.props, {
						trackingRef: this.trackingRef
					});
					return e.createElement(v, n)
				}
			}]), o
		}(), o.impressionsToReportMap = new Map, o.contextTypes = {
			track: r.a.func,
			targetType: r.a.string,
			targetData: r.a.object
		}, y
	}
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(613),
		h = i(693),
		a = i(614),
		c = (i.n(a), [1, 2, 3, 4, 5]);
	t.a = function (n) {
		var t = n.ratingStar;
		return o.a.createElement("div", {
			className: "rating-stars"
		}, c.map(function (n) {
			var i = Math.max(0, Math.min(100 * (t - n + 1), 100));
			return 100 === i ? o.a.createElement(h.a, {
				className: "rating-stars__star",
				key: n
			}) : 0 === i ? o.a.createElement(r.a, {
				className: "rating-stars__star",
				key: n
			}) : o.a.createElement("div", {
				className: "rating-stars__star",
				key: n
			}, o.a.createElement("div", {
				className: "rating-stars__star-lit",
				style: {
					width: i + "%"
				}
			}, o.a.createElement(h.a, {
				className: ["rating-stars__star-solid"]
			})), o.a.createElement(r.a, {
				classNames: ["rating-stars__star-hollow"]
			}))
		}))
	}
}, function (n, t, i) {
	"use strict";
	t.a = function (n, t, i, a, c) {
		var u = r.a.bind(null, i, a, t),
			s = c && c.welcomePkg,
			g = c && c.overrideShowDiscount,
			l = s ? null : function (n, t) {
				var i = function (n) {
						return Object(e.formatCurrency)(t, Object(e.deflateServerNumber)(n, t))
					},
					o = n.price_min || 0,
					r = n.price_max || 0;
				return -1 !== o && -1 !== r && o !== r ? i(o) + " - " + i(r) : null
			}(n, t);
		if ((!c || c && c.groupBuy) && n.is_group_buy_item) {
			var p = Object(o.a)(n) || {},
				m = n && n.group_buy_info ? n : Object(o.c)(n);
			return {
				priceBeforeDiscount: u(m ? m.price || m.price_before_discount : 0),
				actualPrice: u(p.group_buy_price)
			}
		}
		var d = {};
		if (c && c.findSimilarProducts) return d.actualPrice = l || (n.price > 0 ? u(n.price) : void 0), d.priceBeforeDiscount = h(n, t, {
			withPriceRange: !0
		}), d;
		if (l) return {
			actualPrice: l
		};
		d.priceBeforeDiscount = h(n, t, s ? {
			lowestPriceRange: !0,
			overrideShowDiscount: g
		} : {
			withPriceRange: !0,
			overrideShowDiscount: g
		}), n.price >= 0 && (d.actualPrice = u(s ? function (n) {
			var t = n.price_min;
			return t > 0 ? t : n.price
		}(n) : function (n) {
			var t = n.price_min || 0,
				i = n.price_max || 0;
			return t > 0 && i > 0 && t === i && i < n.price ? i : n.price
		}(n)));
		return d
	};
	var e = i(215),
		o = i(222),
		r = i(662);

	function h(n, t) {
		var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
			o = i.withPriceRange,
			r = i.overrideShowDiscount,
			h = i.lowestPriceRange;
		if (!!n.show_discount || r) {
			var a = function (n) {
					return Object(e.formatCurrency)(t, Object(e.deflateServerNumber)(n, t))
				},
				c = n.price_before_discount || 0,
				u = n.price_min_before_discount || 0,
				s = n.price_max_before_discount || 0;
			return u && s && u !== s ? o ? a(u) + " - " + a(s) : h && n && n.price > u ? a(u) : void 0 : 0 === c ? u > 0 ? h && n && n.price !== u ? a(u) : null : void 0 : a(c)
		}
	}
}, , function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("cross")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("arrow-right-bold")
}, , function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r),
		a = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		};

	function c(n) {
		return o.a.createElement("svg", a({
			viewBox: "0 0 54 61",
			x: "0",
			y: "0"
		}, n), o.a.createElement("path", {
			d: "M 99.2 59.9 H 86.7 c 0 -5.3 -2.7 -16.3 -11.7 -16.4 c -9.6 -.1 -11.8 11.9 -11.8 16.4 H 50.8 c -3.4 0 -2.7 3.4 -2.7 3.4 l 2.4 33 c 0 0 -.1 7.3 6.3 7.5 c .4 0 35.7 0 36.5 0 c 6.2 -.4 6.3 -7.5 6.3 -7.5 l 2.4 -33 C 102 63.2 102.5 59.8 99.2 59.9 z M 75.1 47.2 c 7.1 .2 7.9 11.7 7.7 12.6 H 67.1 C 67 58.9 67.5 47.4 75.1 47.2 z M 84.2 91.8 c -1 1.7 -2.7 3 -5 3.7 C 78 95.9 76.8 96 75.6 96 c -3.2 0 -6.5 -1.1 -9.3 -3.3 c -.8 -.6 -1 -1.5 -.5 -2.3 c .2 -.4 .7 -.7 1.2 -.8 c .4 -.1 .9 0 1.2 .3 c 3.2 2.4 8.3 4 11.9 1.6 c 1.4 -.9 2.1 -2.7 1.6 -4.3 c -.5 -1.6 -2.2 -2.7 -3.5 -3.4 c -1 -.6 -2.1 -1 -3.3 -1.4 c -.9 -.3 -1.9 -.7 -2.9 -1.2 c -2.4 -1.2 -4 -2.6 -4.8 -4.2 c -1.2 -2.3 -.6 -5.4 1.4 -7.5 c 3.6 -3.8 10 -3.2 14 -.4 c .9 .6 .9 1.7 .4 2.5 c -.5 .8 -1.4 .9 -2.2 .4 c -2 -1.4 -4.4 -2 -6.4 -1.7 c -2 .3 -4.7 2 -4.4 4.6 c .2 1.5 2 2.6 3.3 3.3 c .8 .4 1.5 .7 2.3 .9 c 4.3 1.3 7.2 3.3 8.6 5.7 C 85.4 86.9 85.4 89.7 84.2 91.8 z",
			transform: "translate(-48 -43)",
			stroke: "none"
		}))
	}
	i(912);
	t.a = function (n) {
		var t = n.className;
		return o.a.createElement("div", {
			className: h()("image-placeholder", t || "")
		}, o.a.createElement(c, {
			className: "shopee-icon image-placeholder__icon"
		}))
	}
}, , , function (n, t, i) {
	"use strict";
	t.a = function (n, t) {
		var i = this,
			e = null;
		return function () {
			for (var o = arguments.length, r = Array(o), h = 0; h < o; h++) r[h] = arguments[h];
			e && clearTimeout(e), e = setTimeout(function () {
				n.apply(i, r), e = null
			}, t)
		}
	}
}, function (n, t, i) {
	"use strict";
	t.a = function () {
		var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			t = n.items,
			i = n.loadMore,
			e = void 0 === i ? function () {} : i,
			r = n.hasMore,
			g = void 0 !== r && r,
			p = n.loading,
			m = void 0 !== p && p,
			d = n.setShowSoldCount,
			f = void 0 !== d && d,
			y = n.isShowNoMore,
			v = void 0 !== y && y,
			_ = n.loadOnceAtBeginning,
			b = void 0 !== _ && _,
			T = n.scrollThreshold,
			C = function (n, t) {
				var i = {};
				for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
				return i
			}(n, ["items", "loadMore", "hasMore", "loading", "setShowSoldCount", "isShowNoMore", "loadOnceAtBeginning", "scrollThreshold"]);
		return o.a.createElement("div", {
			className: "item-card-list"
		}, t && o.a.createElement(h.a, null, t.map(function (n) {
			return o.a.createElement("script", {
				type: "application/ld+json",
				key: n.itemid
			}, Object(a.a)(n))
		})), !!t && t.map(function (n, t) {
			return !!n && o.a.createElement("div", {
				key: n.itemid + "." + t,
				className: "item-card-list__item-card-wrapper"
			}, o.a.createElement(c.b, l({
				item: n,
				index: t,
				setShowSoldCount: f
			}, C)))
		}), !g && v && o.a.createElement("div", {
			className: "item-card-list__no-more"
		}, Object(s.c)("label_nomore")), o.a.createElement(u.a, {
			isFetching: m,
			loadMore: e,
			hasMore: g,
			loadOnceAtBeginning: b,
			threshold: T
		}))
	};
	var e = i(1),
		o = i.n(e),
		r = i(141),
		h = i.n(r),
		a = i(541),
		c = i(525),
		u = i(587),
		s = i(89),
		g = i(695),
		l = (i.n(g), Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		})
}, function (n, t, i) {
	"use strict";
	i(151);
	var e = i(221);
	i.d(t, "a", function () {
		return e.g
	}), i.d(t, "b", function () {
		return e.h
	}), i.d(t, "c", function () {
		return e.i
	});
	i(661)
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		return o.a.createElement("svg", r({
			height: "14",
			viewBox: "0 0 35 14",
			width: "35",
			xmlns: "http://www.w3.org/2000/svg"
		}, n), o.a.createElement("path", {
			d: "m13.4440685 12.9851755l-.197669.8802689-13.1930566.0000662.8919441-1.0156892 7.2360221-8.23896c.4272368-.5421749.2739957-1.218601-.4783128-1.4150047-.6035217-.1540887-1.134531.1551274-1.5728097.6479328-.2722122.3086029-.5031256.7652254-.6927404 1.3698675h-3.4376046l.1502388-.7374346c.2306795-1.1322718.7684864-2.0797012 1.4983401-2.7985032.9944609-.9748795 2.4723117-1.6277192 4.0545758-1.6277192 1.4982254 0 2.416649.238149 3.3936276 1.0231784.924677.7666178 1.4745503 2.0512993 1.0991371 3.3181428-.0609056.2817509-.254327.7209202-.6521042 1.2703065-.1485857.2052178-1.5250896 1.8753808-4.2166116 5.1175026h6.6124023l-.1957827.8718687h-7.0138364l-.2295651.2822232h7.1800268l-.1728469.7697301h-7.502998l-.2404531.2822232zm5.7069138-.2822232h-3.5095614l.1822983-.7697301h3.505854zm-.0654808.2822232l-.20738.8938115h-3.5152257l.2116851-.8938115zm.3095524-1.3341765h-3.5044946l.4051534-1.7107057h-6.7876099c5.8585002-6.5313949 8.7877503-9.7970923 8.7877503-9.7970923h3.7692124zm-4.5667434-4.1249394h2.2660917l1.2180246-3.7792711zm11.0550816-1.3141151c1.992865 0 2.8717986 1.0974144 2.4664475 3.0527617l-1.0092154 4.6181734h-2.7280084l.0631179-.2801133c.3102538-1.3768875.5429439-2.4096491.6980701-3.0982832.1066484-.4734564.1066484-.4734564.1745123-.7748383.0493628-.2233956.0493628-.2233956.0575982-.2560493.1124481-.5292808-.0377849-.6884638-.6743606-.6884638h-.7497804l-1.268667 5.0977479-2.9705875.0000662 3.27786-13.7242222h1.2768304c.2088279 0 .6133024.0111276.7002162.0284016.6969974.1385279.8144508.6503444.613651 1.4571966l-.9889189 4.5676227zm7.5465395 7.6535661h-5.2657819l.3945836-1.8214286h5.5910888zm-.4221296-2.335662h-4.3571672l.3762625-1.8214286h4.7430141zm-.4166015-2.3025181h-3.4918492c.1911156-.8975912.1911156-1.504734 0-1.8214286 0 .0188942 1.4435268.0188942 4.3305803 0z",
			fill: "#d0011b",
			stroke: "none"
		}))
	};
	var e = i(1),
		o = i.n(e),
		r = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}
}, function (n, t, i) {
	"use strict";
	t.a = {
		SERVICE_BY_SHOPEE_NONE: 0,
		SERVICE_BY_SHOPEE_8H: 1,
		SERVICE_BY_SHOPEE_24H: 2,
		SERVICE_BY_SHOPEE_48H: 3,
		SERVICE_BY_SHOPEE_NON_SPECIAL: 4,
		SBS_ID_SHOPEE_24: 5
	}
}, function (n, t, i) {
	"use strict";
	t.a = function (n, t) {
		if (n) {
			if (null === n.preview_info) return null;
			if (n.hidden_price_display || n.preview_info && n.preview_info.hide_price) return o(n, t)
		}
		return null
	}, t.b = o;
	var e = i(215);

	function o(n, t) {
		var i = Object(e.getCurrencySymbol)(t);
		return n && n.hidden_price_display ? i + n.hidden_price_display : i + " ???"
	}
}, function (n, t, i) {
	n.exports = i.p + "79f115d733ee8bbbf3c6a6daeacd3897.png"
}, function (n, t, i) {
	n.exports = i.p + "d54b1b9e480a733545aeb7e23474b75c.png"
}, function (n, t, i) {
	"use strict";
	var e, o, r = i(1),
		h = (i.n(r), i(683)),
		a = i(89),
		c = i(596),
		u = (i.n(c), function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}());
	var s = (o = e = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i.onLoadMore = i.onLoadMore.bind(i), i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, r["Component"]), u(t, [{
			key: "componentWillMount",
			value: function () {
				this.props.loadOnceAtBeginning && this.props.loadMore()
			}
		}, {
			key: "onLoadMore",
			value: function () {
				var n = this.props,
					t = n.hasMore,
					i = n.isFetching;
				t && !i && this.props.loadMore()
			}
		}, {
			key: "render",
			value: function () {
				var n = this.props,
					t = n.threshold,
					i = n.isFetching,
					e = n.hasMore,
					o = n.loadIndicator;
				return r.createElement("div", {
					className: "infinite-scroll",
					style: {
						position: "relative"
					}
				}, r.createElement("div", {
					style: {
						position: "absolute",
						top: "-" + t + "px"
					}
				}, r.createElement(h.a, {
					onEnterViewPort: this.onLoadMore,
					observeMultipleTime: !0
				})), i && e ? o || r.createElement("div", {
					className: "infinite-scroll__loading"
				}, Object(a.c)("label_loading")) : null)
			}
		}]), t
	}(), e.defaultProps = {
		loadMore: function () {},
		hasMore: !1,
		threshold: 400,
		isFetching: !1,
		loadOnceAtBeginning: !1
	}, o);
	t.a = s
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(140),
		h = i(70),
		a = i(504),
		c = i(142),
		u = i(698),
		s = i(737),
		g = i(891),
		l = i(993),
		p = i(994),
		m = i(995),
		d = i(892),
		f = i(505),
		y = i(996),
		v = i(89),
		_ = (i(997), Object(a.c)(Object(h.withRouter)(Object(r.connect)(function (n) {
			var t = Object(c.a)(n);
			return {
				isLoggedIn: !!t && !!t.username
			}
		}, {})(function (n) {
			var t = n.title,
				i = n.isLoggedIn,
				e = n.className,
				r = [{
					icon: o.a.createElement(p.a, {
						className: "shopee-menu__item-icon"
					}),
					label: Object(v.c)("label_back_to_homepage"),
					targetType: "BackToHomepage",
					onClick: function () {
						n.trackingClick(), n.history.push("/")
					}
				}, {
					icon: o.a.createElement(m.a, {
						className: "shopee-menu__item-icon navbar-generic__help-icon"
					}),
					label: Object(v.c)("label_need_help"),
					onClick: function () {
						location.href = y.a
					}
				}];
			return i && r.unshift({
				icon: o.a.createElement(l.a, {
					className: "shopee-menu__item-icon"
				}),
				label: Object(v.c)("label_my_orders"),
				targetType: "MyOrders",
				onClick: function () {
					n.trackingClick(), location.href = Object(f.r)()
				}
			}), o.a.createElement(u.a, {
				leftButton: o.a.createElement(s.a, null),
				mainContent: o.a.createElement("div", {
					className: "navbar-generic__title typo-l14"
				}, t),
				rightButtons: [o.a.createElement(d.a, {
					className: "navbar-generic__cart",
					key: "cart"
				}), o.a.createElement(g.a, {
					items: r,
					className: "navbar-generic__menu",
					key: "menu"
				})],
				className: e
			})
		})))),
		b = i(598),
		T = i(893),
		C = (i(1095), Object(a.c)(function (n) {
			var t = n.title;
			return o.a.createElement(u.a, {
				leftButton: null,
				mainContent: o.a.createElement("div", {
					className: "navbar-generic__title typo-l14"
				}, t),
				rightButtons: []
			})
		}));
	i.d(t, "a", function () {
		return N
	}), i.d(t, "c", function () {
		return _
	}), i.d(t, "d", function () {
		return b.a
	}), i.d(t, "e", function () {
		return T.a
	}), i.d(t, "b", function () {
		return C
	});
	var N = {
		GENERIC: "generic",
		PLAIN: "plain",
		SEARCH: "search",
		BUTTONLESS: "buttonless"
	}
}, , , function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("plus-sign")
}, , , function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r),
		a = i(570),
		c = i(89),
		u = i(615),
		s = i.n(u);
	t.a = function (n) {
		var t = n.ratingCount,
			i = n.ratingStar,
			e = n.showNoRatingMessage,
			r = n.className,
			u = n.onClick;
		return o.a.createElement("div", {
			className: h()(s.a.ratings, "typo-r10", r || ""),
			onClick: u
		}, t > 0 && o.a.createElement(a.a, {
			ratingStar: i
		}), o.a.createElement("div", {
			className: s.a.ratingsText
		}, t > 0 ? "(" + t + ")" : e && Object(c.c)("msg_no_ratings_yet")))
	}
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		return o.a.createElement("svg", r({
			viewBox: "0 0 20 12",
			height: "12",
			width: "20"
		}, n), o.a.createElement("path", {
			fill: "#00bfa5",
			d: "M5 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1z"
		}), o.a.createElement("path", {
			fill: "#00bfa5",
			d: "M14 2h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z"
		}), o.a.createElement("circle", {
			fill: "#00bfa5",
			cx: "8",
			cy: "10",
			r: "2"
		}), o.a.createElement("circle", {
			fill: "#00bfa5",
			cx: "15",
			cy: "10",
			r: "2"
		}), o.a.createElement("path", {
			fill: "#fff",
			d: "M17.3 5.9h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6s.6-1.7 1.6-1.7 1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zm-.8-1.8c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zm-2.7 1.8h.7c-.2.6-.7.9-1.5.9-1 0-1.6-.6-1.6-1.6S12 3.5 13 3.5s1.5.6 1.5 1.6v.2h-2.4c0 .6.4.9.9.9.4.1.7 0 .8-.3zM13 4.1c-.5 0-.9.3-.9.8h1.7c0-.5-.3-.8-.8-.8zM9.4 6.8V3.6h.6v.5h.1c.1-.3.5-.5.9-.5h.3v.6h-.4c-.5 0-.9.3-.9.8v1.9h-.6zm-2.7 0H6V2.6h2.8v.6H6.7v1.3h2V5h-2v1.8z"
		}), o.a.createElement("path", {
			fill: "#00bfa5",
			d: "M.5 8.5H4v.8H.5z"
		}), o.a.createElement("path", {
			fill: "#00bfa5",
			d: "M0 10.2h3.5v.8H0z"
		}), o.a.createElement("circle", {
			fill: "#047565",
			cx: "8",
			cy: "10",
			r: "1"
		}), o.a.createElement("circle", {
			fill: "#047565",
			cx: "15",
			cy: "10",
			r: "1"
		}))
	};
	var e = i(1),
		o = i.n(e),
		r = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}
}, function (n, t) {}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		return function (t) {
			if (!t) return "";
			var i = {};
			for (var o in n) t.hasOwnProperty(o) && (i[n[o]] = t[o]);
			return Object(e.a)(i)
		}
	};
	var e = i(220)
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		var t = n.title,
			i = n.titleClassName,
			e = void 0 === i ? "" : i;
		return o.a.createElement("div", {
			className: "navbar-plain hairline-border-bottom"
		}, o.a.createElement("div", {
			className: "navbar-plain__back-button"
		}, o.a.createElement(a.a, null)), o.a.createElement("div", {
			className: h()("navbar-plain__title typo-r20", e)
		}, t))
	};
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r),
		a = i(737),
		c = i(1081),
		u = (i.n(c), i(997));
	i.n(u)
}, , , , function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return p
	});
	var e, o, r = i(1),
		h = (i.n(r), i(90)),
		a = i.n(h),
		c = i(1102),
		u = (i.n(c), i(745)),
		s = i(610),
		g = i(1001),
		l = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var p = (o = e = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i, e, o, r = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n)),
				h = r.constructBanners(r.props.banners);
			return r.state = {
				size: h.length,
				position: r.props.looping ? 1 : 0,
				isSliding: !1,
				banners: h,
				showArrows: !1,
				showDots: r.props.showDots,
				autoPlayId: null
			}, r.requestIdleCallbackSlide = r.requestIdleCallbackSlide.bind(r), r.slide = r.slide.bind(r), r.renewAutoPlay = r.renewAutoPlay.bind(r), r.stopAutoPlay = r.stopAutoPlay.bind(r), r.hideArrows = r.hideArrows.bind(r), r.showArrows = r.showArrows.bind(r), r.showDots = r.showDots.bind(r), r.hideDots = r.hideDots.bind(r), r.finishSliding = r.finishSliding.bind(r), r.handleSwipeStart = r.handleSwipeStart.bind(r), r.handleSwipeMove = r.handleSwipeMove.bind(r), r.handleSwipeEnd = r.handleSwipeEnd.bind(r), r.tabs = r.tabs.bind(r), r.isSwiping = !1, r.vx = 0, r.swipeStarted = !1, r.swipeMoved = !1, r._transitionTimeout = null, r._bannerVisible = (i = {}, e = r.state.position, o = !0, e in i ? Object.defineProperty(i, e, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : i[e] = o, i), r
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, r["Component"]), l(t, [{
			key: "constructBanners",
			value: function (n) {
				var t = [];
				return n && n.length && (t = n.slice(), this.props.looping && (t.unshift(n[n.length - 1]), t.push(n[0]))), t
			}
		}, {
			key: "componentDidMount",
			value: function () {
				if (this.props.autoPlay) {
					if (this._carousel) {
						var n = this.getCurrentCarouselTransform(this.props.looping ? 1 : 0);
						this.props.onSlide && "function" == typeof this.props.onSlide && this.props.onSlide(this.props.looping ? 1 : 0), this._carouselItemList.style.transform = n, this._carouselItemList.style.webkitTransform = n, this.props.autoPlay && this.renewAutoPlay()
					}
				} else this.finishSliding(this.props.looping ? 1 : 0);
				this._carousel && this._carousel.addEventListener("touchmove", this.handleSwipeMove, {
					passive: !1
				})
			}
		}, {
			key: "componentWillUnmount",
			value: function () {
				this.props.autoPlay && this.stopAutoPlay(), this._transitionTimeout && clearTimeout(this._transitionTimeout), this._carousel && this._carousel.removeEventListener("touchmove", this.handleSwipeMove, {
					passive: !1
				})
			}
		}, {
			key: "componentDidUpdate",
			value: function (n) {
				n.autoPlay && !this.props.autoPlay ? this.stopAutoPlay() : !n.autoPlay && this.props.autoPlay && this.renewAutoPlay(), n.banners !== this.props.banners && n.banners.length !== this.props.banners.length && this.props.autoPlay && this.renewAutoPlay()
			}
		}, {
			key: "componentWillReceiveProps",
			value: function (n) {
				if (n.banners !== this.props.banners) {
					var t = this.constructBanners(n.banners);
					this.setState({
						banners: t,
						size: t.length
					})
				}
			}
		}, {
			key: "getCurrentCarouselTransform",
			value: function (n) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				return this._carouselItemList ? "translate(" + (-n * this.carouselListWidth + t) + "px, 0px)" : ""
			}
		}, {
			key: "handleSwipeStart",
			value: function (n) {
				this.state.banners && this.state.banners.length <= 1 || (n.stopPropagation(), this.startX = n.changedTouches[0].pageX, this.startY = n.changedTouches[0].pageY, this.vx = 0, this.lastX = this.startX, this.swipeStarted = !0, this.swipeMoved = !1)
			}
		}, {
			key: "handleSwipeMove",
			value: function (n) {
				if (this.swipeStarted) {
					var t = n.changedTouches[0].pageX,
						i = n.changedTouches[0].pageY,
						e = t - this.startX;
					if (n.stopPropagation(), !this.swipeMoved) {
						var o = i - this.startY;
						this.isSwiping = Math.abs(e) > Math.abs(o) && Math.abs(e) > s.d, (this.isSwiping || o > s.d) && (this.swipeMoved = !0, this.startX = t, e = t - this.startX)
					}
					if (this.isSwiping) {
						if (this._carouselItemList) {
							this._carouselItemList.style.transition = "0ms";
							var r = this.getCurrentCarouselTransform(this.state.position, e);
							this._carouselItemList.style.webkitTransform = r, this._carouselItemList.style.transform = r
						}
						this.vx = .5 * this.vx + .5 * (t - this.lastX), this.lastX = t
					}
				}
			}
		}, {
			key: "handleSwipeEnd",
			value: function (n) {
				var t = this;
				if (this.swipeStarted && this.isSwiping) {
					this.swipeStarted = !1, this.swipeMoved = !1, this.isSwiping = !1, n.stopPropagation();
					var i = n.changedTouches[0].pageX - this.startX,
						e = this.state.position;
					if (Math.abs(this.vx) > this.props.swipeThreshold ? this.vx > 0 ? e -= 1 : e += 1 : i > .5 * this.carouselListWidth ? e -= 1 : i < .5 * -this.carouselListWidth && (e += 1), this.props.looping || (e < 0 || e >= this.props.banners.length) && (e = this.state.position), this._carouselItemList) {
						this._carouselItemList.style.transition = this.props.swipeTransitionTime + "ms";
						var o = this.getCurrentCarouselTransform(e);
						this._carouselItemList.style.webkitTransform = o, this._carouselItemList.style.transform = o
					}
					e !== this.state.position && (this.props.onSwipe && "function" == typeof this.props.onSwipe && this.props.onSwipe(e), this.props.onUserInteraction && "function" == typeof this.props.onUserInteraction && this.props.onUserInteraction(), this._transitionTimeout = setTimeout(function () {
						t.finishSliding(e)
					}, this.props.swipeTransitionTime))
				}
			}
		}, {
			key: "render",
			value: function () {
				var n = this,
					t = this.props.banners ? this.props.banners.length : 0,
					i = this.props,
					e = i.looping,
					o = i.showDots,
					h = i.showTabs,
					c = i.tabNames,
					u = i.classNames,
					s = i.forceRenderArrows,
					g = i.displayAllBanner,
					l = this.state,
					p = l.banners,
					m = l.position,
					d = l.showArrows,
					f = p.length;
				return r.createElement("div", {
					className: a()("stardust-carousel", u),
					onMouseEnter: this.showArrows,
					onMouseLeave: this.hideArrows,
					onTouchStart: this.handleSwipeStart,
					onTouchEnd: this.handleSwipeEnd,
					ref: function (t) {
						return n._carousel = t
					},
					style: {
						width: this.props.width ? this.props.width : null
					}
				}, r.createElement("div", {
					className: "stardust-carousel__item-list-wrapper"
				}, r.createElement("ul", {
					className: "stardust-carousel__item-list",
					style: {
						width: 100 * f + "%",
						height: this.carouselHeight ? this.carouselHeight : null,
						overflow: this.carouselHeight ? "hidden" : null
					},
					ref: function (t) {
						if (n._carouselItemList = t, n._carouselItemList && n._carouselItemList.firstElementChild && n._carouselItemList.firstElementChild instanceof HTMLElement && (n.carouselListWidth = n._carouselItemList.firstElementChild.getBoundingClientRect().width), !n.props.height && n.props.forceHeightFirstItem && n._carouselItemList) {
							var i = n.props.looping && n._carouselItemList.childElementCount > 0 ? 1 : 0;
							n._carouselItemList.childNodes[i] && n._carouselItemList.childNodes[i] instanceof HTMLElement && (n.carouselHeight = n._carouselItemList.childNodes[i].getBoundingClientRect().height)
						}
						n.props.height && (n.carouselHeight = n.props.height)
					}
				}, p.map(function (t, i) {
					return r.createElement("li", {
						className: "stardust-carousel__item",
						key: i,
						style: {
							width: 100 / f + "%"
						}
					}, r.createElement("div", {
						style: {
							display: i === m || n._bannerVisible[i] || g ? null : "none",
							height: "100%",
							width: "100%"
						}
					}, t))
				}))), (s || t > 1 && (e || m > 0)) && this.arrow(-1, d), (s || t > 1 && (e || m < f - 1)) && this.arrow(1, d), f > 1 && r.createElement("div", {
					className: a()("stardust-carousel__dots", !this.state.showDots && "stardust-carousel__dots--hidden")
				}, this.props.banners.map(function (t, i) {
					var o = i + (e ? 1 : 0),
						h = a()("stardust-carousel__dot", {
							"stardust-carousel__dot--active": m === o
						});
					return r.createElement("div", {
						key: i,
						className: h,
						onClick: function (t) {
							t.preventDefault(), n.props.onUserInteraction && "function" == typeof n.props.onUserInteraction && n.props.onUserInteraction(), n.slide(o)
						}
					})
				})), h && !o && this.tabs(c))
			}
		}, {
			key: "arrow",
			value: function (n, t) {
				var i = this,
					e = this.state.position + n,
					o = e < 0 || e >= this.props.banners.length;
				return r.createElement("div", {
					className: a()("stardust-carousel__arrow", "stardust-carousel__arrow--" + (n < 0 ? "prev" : "next"), o ? "stardust-carousel__arrow--disabled" : null),
					style: {
						opacity: !this.props.isOnlyShowArrowOnHover || t ? "1" : "0",
						display: this.props.forceHideArrows ? "none" : null
					},
					onClick: function (n) {
						n.preventDefault(), o || (i.props.onUserInteraction && "function" == typeof i.props.onUserInteraction && i.props.onUserInteraction(), i.slide(e))
					}
				}, n < 0 ? r.createElement(g.a, null) : r.createElement(g.b, null))
			}
		}, {
			key: "tabs",
			value: function (n) {
				var t = this;
				return n && n.length > 0 ? r.createElement("div", {
					className: "stardust-carousel__tabs"
				}, this.props.banners.map(function (i, e) {
					var o = e + (t.props.looping ? 1 : 0),
						h = a()("stardust-carousel__tab", {
							"stardust-carousel__tab--active": t.state.position === o
						});
					return r.createElement("div", {
						key: e,
						className: h,
						onClick: function (n) {
							n.preventDefault(), t.props.onUserInteraction && "function" == typeof t.props.onUserInteraction && t.props.onUserInteraction(), t.slide(o)
						}
					}, r.createElement("span", {
						className: "stardust-carousel__tab-name"
					}, n[e] || ""))
				})) : null
			}
		}, {
			key: "renewAutoPlay",
			value: function () {
				this.stopAutoPlay(), this.props.autoPlayDelay && this.setState({
					autoPlayId: setTimeout(this.requestIdleCallbackSlide, this.props.autoPlayDelay)
				})
			}
		}, {
			key: "stopAutoPlay",
			value: function () {
				this.state.autoPlayId && clearTimeout(this.state.autoPlayId)
			}
		}, {
			key: "requestIdleCallbackSlide",
			value: function () {
				var n = this,
					t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.position + 1;
				Object(u.b)(function () {
					return n.slide(t)
				}, {
					timeout: 2e3
				})
			}
		}, {
			key: "slide",
			value: function () {
				var n = this,
					t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.position + 1;
				if (this.props.banners && this.props.banners.length <= 1 && (t = this.state.position), this._bannerVisible[t] || (this._bannerVisible[t] = !0), !this.state.isSliding) {
					if (this.props.onSlide && "function" == typeof this.props.onSlide && this.props.onSlide(t), this.setState({
							isSliding: !0
						}), this._carouselItemList) {
						this._carouselItemList.style.transition = this.props.transitionTime + "ms";
						var i = this.getCurrentCarouselTransform(t);
						this._carouselItemList.style.webkitTransform = i, this._carouselItemList.style.transform = i
					}
					this._transitionTimeout = setTimeout(function () {
						n.finishSliding(t)
					}, this.props.transitionTime)
				}
			}
		}, {
			key: "finishSliding",
			value: function (n) {
				var t = n;
				this._transitionTimeout = null;
				var i = this.state.banners.length;
				if (this.props.looping && (0 === t || t === i - 1) && (t = Math.abs(i - 2 - t), this._carouselItemList)) {
					this._carouselItemList.style.transition = "0ms";
					var e = this.getCurrentCarouselTransform(t);
					this._carouselItemList.style.webkitTransform = e, this._carouselItemList.style.transform = e
				}
				this.props.autoPlay && this.renewAutoPlay(), this.setState({
					isSliding: !1,
					position: t
				})
			}
		}, {
			key: "showArrows",
			value: function () {
				this.setState({
					showArrows: !0
				})
			}
		}, {
			key: "hideArrows",
			value: function () {
				this.setState({
					showArrows: !1
				})
			}
		}, {
			key: "showDots",
			value: function () {
				this.setState({
					showDots: !0
				})
			}
		}, {
			key: "hideDots",
			value: function () {
				this.setState({
					showDots: !1
				})
			}
		}]), t
	}(), e.defaultProps = {
		transitionTime: 500,
		swipeTransitionTime: 100,
		autoPlayDelay: 5e3,
		dragPickPoint: 1 / 3,
		isOnlyShowArrowOnHover: !0,
		forceHideArrows: !1,
		looping: !0,
		autoPlay: !0,
		showDots: !0,
		showTabs: !1,
		tabNames: [],
		swipeThreshold: 5,
		forceHeightFirstItem: !1
	}, o)
}, , function (n, t, i) {
	"use strict";
	t.b = d, t.c = function (n, t, i) {
		var e = d(n, t, i);
		return c(e)
	}, t.a = function (n) {
		if (!n.appUrl || !n.rwUrl || !n.pcUrl) return null;
		var t = {
				paths: [{
					webNav: {
						url: n.appUrl
					}
				}]
			},
			i = "#home?navRoute=" + m(t),
			e = encodeURIComponent(n.appUrl),
			o = encodeURIComponent(n.pcUrl),
			r = encodeURIComponent(i);
		return window.location.origin + "/bridge_cmd/?cmd=navigate_all_platform&mobile=" + e + "&pc=" + o + "&deeplink=" + r + "&inplace=1"
	};
	var e, o, r = i(147),
		h = i(256),
		a = (i(220), Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}),
		c = (e = regeneratorRuntime.mark(function n(t) {
			return regeneratorRuntime.wrap(function (n) {
				for (;;) switch (n.prev = n.next) {
					case 0:
						return n.abrupt("return", new Promise(function (n, i) {
							if (Object(r.b)()) location.href = t, l(i, 1500);
							else if (Object(r.a)()) {
								if (g) location.href = t, l(i);
								else p(window.open(t)), l(i)
							} else i()
						}));
					case 1:
					case "end":
						return n.stop()
				}
			}, n, this)
		}), o = function () {
			var n = e.apply(this, arguments);
			return new Promise(function (t, i) {
				return function e(o, r) {
					try {
						var h = n[o](r),
							a = h.value
					} catch (n) {
						return void i(n)
					}
					if (!h.done) return Promise.resolve(a).then(function (n) {
						e("next", n)
					}, function (n) {
						e("throw", n)
					});
					t(a)
				}("next")
			})
		}, function (n) {
			return o.apply(this, arguments)
		});
	var u = {
			SG: "shopeesg://",
			MY: "shopeemy://",
			TH: "shopeeth://",
			VN: "shopeevn://",
			PH: "shopeeph://",
			TW: "shopeetw://",
			ID: "shopeeid://"
		},
		s = navigator.userAgent,
		g = s ? s.indexOf("Chrome/4") >= 0 || s.indexOf("MiuiBrowser/") >= 0 : null;

	function l(n) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
		setTimeout(n, t)
	}

	function p(n) {
		n.close(), n.window && setTimeout(function () {
			p(n)
		}, 50)
	}
	var m = function (n) {
		return encodeURIComponent(h.a.encode(JSON.stringify(n)))
	};

	function d(n, t, i) {
		var e = [{
				webNav: {
					url: t
				}
			}],
			o = m(i ? {
				paths: e,
				lastPageTrigger: JSON.stringify(a({
					action: i.actionType
				}, i.params))
			} : {
				paths: e
			});
		return u[n] + "home?navRoute=" + o
	}
}, , , function (n, t, i) {
	"use strict";
	i.d(t, "b", function () {
		return p
	}), i.d(t, "c", function () {
		return m
	}), i.d(t, "a", function () {
		return d
	});
	var e, o, r = i(1),
		h = (i.n(r), i(90)),
		a = i.n(h),
		c = i(966),
		u = i(1430),
		s = (i.n(u), i(147)),
		g = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();

	function l(n, t) {
		if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? n : t
	}
	var p = {
			WHITE: "white",
			BLACK: "black"
		},
		m = {
			COUNT_UP: -1,
			COUNT_DOWN: 1
		},
		d = {
			HOUR: 36e5,
			MINUTE: 6e4,
			SECOND: 1e3
		},
		f = {
			SENARY: ["09", "54", "43", "32", "21", "10", "09"],
			DECIMAL: ["09", "98", "87", "76", "65", "54", "43", "32", "21", "10", "09"]
		},
		y = function (n) {
			var t = n.colonState,
				i = n.theme,
				e = n.style;
			return r.createElement("div", {
				className: a()("shopee-countdown-timer__colon", "shopee-countdown-timer__colon--flashing-" + t, i && "shopee-countdown-timer__colon--" + i),
				style: e
			}, r.createElement("div", {
				className: "colon-dot__wrapper"
			}, r.createElement("span", {
				className: "colon-dot"
			})), r.createElement("div", {
				className: "colon-dot__wrapper"
			}, r.createElement("span", {
				className: "colon-dot"
			})))
		},
		v = (o = e = function (n) {
			function t() {
				var n, i, e;
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				for (var o = arguments.length, r = Array(o), h = 0; h < o; h++) r[h] = arguments[h];
				return i = e = l(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(r))), e.state = {
					isCountdownEnded: 1e3 * e.props.targetTimeInSeconds - new Date <= 0
				}, e.onSafariVisibilityChange = function () {
					e.setState({
						isCountdownEnded: document.hidden || 1e3 * e.props.targetTimeInSeconds - new Date <= 0
					})
				}, l(e, i)
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, r["Component"]), g(t, [{
				key: "componentDidMount",
				value: function () {
					var n = this;
					this.countdownEndTimer = setTimeout(function () {
						n.state.isCountdownEnded || (n.setState({
							isCountdownEnded: !0
						}), n.props.onCountdownEnded && n.props.onCountdownEnded())
					}, 1e3 * this.props.targetTimeInSeconds - new Date), Object(s.c)() && document.addEventListener("visibilitychange", this.onSafariVisibilityChange, !1)
				}
			}, {
				key: "componentWillUnmount",
				value: function () {
					clearTimeout(this.countdownEndTimer), Object(s.c)() && document.removeEventListener("visibilitychange", this.onSafariVisibilityChange, !1)
				}
			}, {
				key: "render",
				value: function () {
					var n = this.props,
						t = n.flipRate,
						i = n.nonFlashing,
						e = n.flipBoardStyle,
						o = n.colonStyle,
						h = n.targetTimeInSeconds,
						u = this.state.isCountdownEnded,
						s = +new Date,
						g = Math.max(0, (1e3 * h - s) * this.props.type),
						l = Object(c.c)(g),
						p = l.hour,
						m = l.minute,
						v = l.second,
						b = _(p, m, v),
						T = b.hourHundDelay,
						C = b.hourDecaDelay,
						N = b.hourHexaDelay,
						S = b.minuteDecaDelay,
						M = b.minuteHexaDelay,
						E = b.secondDecaDelay,
						H = b.secondHexaDelay,
						k = i ? "on" : "off";
					return r.createElement("div", {
						className: a()("shopee-countdown-timer", this.props.classNames)
					}, r.createElement("div", {
						className: "shopee-countdown-timer__number",
						style: e
					}, p > 99 && r.createElement("div", {
						className: a()("shopee-countdown-timer__number__hexa", u ? "" : "shopee-countdown-timer__number__hund--hour"),
						style: {
							animationDelay: T
						}
					}, f.DECIMAL.map(function (n, t) {
						return r.createElement("div", {
							className: a()("shopee-countdown-timer__number__item", "shopee-countdown-timer__number__item--" + n),
							key: t
						})
					})), r.createElement("div", {
						className: a()("shopee-countdown-timer__number__hexa", u ? "" : "shopee-countdown-timer__number__hexa--hour"),
						style: {
							animationDelay: N
						}
					}, f.DECIMAL.map(function (n, t) {
						return r.createElement("div", {
							className: a()("shopee-countdown-timer__number__item", "shopee-countdown-timer__number__item--" + n),
							key: t
						})
					})), r.createElement("div", {
						className: a()("shopee-countdown-timer__number__deca", u ? "" : "shopee-countdown-timer__number__deca--hour"),
						style: {
							animationDelay: C
						}
					}, f.DECIMAL.map(function (n, t) {
						return r.createElement("div", {
							className: a()("shopee-countdown-timer__number__item", "shopee-countdown-timer__number__item--" + n),
							key: t
						})
					}))), t <= d.MINUTE && [r.createElement(y, {
						key: "colon-before-minute",
						colonState: k,
						theme: this.props.theme,
						style: o
					}), r.createElement("div", {
						key: "digit-minute",
						className: "shopee-countdown-timer__number",
						style: e
					}, r.createElement("div", {
						className: a()("shopee-countdown-timer__number__hexa", u ? "" : "shopee-countdown-timer__number__hexa--minute"),
						style: {
							animationDelay: M
						}
					}, f.SENARY.map(function (n, t) {
						return r.createElement("div", {
							className: a()("shopee-countdown-timer__number__item", "shopee-countdown-timer__number__item--" + n),
							key: t
						})
					})), r.createElement("div", {
						className: a()("shopee-countdown-timer__number__deca", u ? "" : "shopee-countdown-timer__number__deca--minute"),
						style: {
							animationDelay: S
						}
					}, f.DECIMAL.map(function (n, t) {
						return r.createElement("div", {
							className: a()("shopee-countdown-timer__number__item", "shopee-countdown-timer__number__item--" + n),
							key: t
						})
					})))], t <= d.SECOND && [r.createElement(y, {
						key: "colon-before-second",
						colonState: k,
						theme: this.props.theme,
						style: o
					}), r.createElement("div", {
						key: "digit-second",
						className: "shopee-countdown-timer__number",
						style: e
					}, r.createElement("div", {
						className: a()("shopee-countdown-timer__number__hexa", u ? "" : "shopee-countdown-timer__number__hexa--second"),
						style: {
							animationDelay: H
						}
					}, f.SENARY.map(function (n, t) {
						return r.createElement("div", {
							className: a()("shopee-countdown-timer__number__item", "shopee-countdown-timer__number__item--" + n),
							key: t
						})
					})), r.createElement("div", {
						className: a()("shopee-countdown-timer__number__deca", u ? "" : "shopee-countdown-timer__number__deca--second"),
						style: {
							animationDelay: E
						}
					}, f.DECIMAL.map(function (n, t) {
						return r.createElement("div", {
							className: a()("shopee-countdown-timer__number__item", "shopee-countdown-timer__number__item--" + n),
							key: t
						})
					})))])
				}
			}]), t
		}(), e.defaultProps = {
			type: m.COUNT_DOWN,
			flipRate: d.SECOND
		}, o),
		_ = function (n, t, i) {
			return {
				secondDecaDelay: i % 10 - 9 + "s",
				secondHexaDelay: i - 68 + "s",
				minuteDecaDelay: t % 10 * 60 + i - 658 + "s",
				minuteHexaDelay: 60 * t + i - 4198 + "s",
				hourDecaDelay: n % 10 * 3600 + 60 * t + i - 39598 + "s",
				hourHexaDelay: n % 100 * 3600 + 60 * t + i - 395998 + "s",
				hourHundDelay: n % 1e3 * 3600 + 60 * t + i - 3959998 + "s"
			}
		};
	t.d = v
}, , , function (n, t, i) {
	"use strict";
	i.d(t, "c", function () {
		return e
	}), i.d(t, "d", function () {
		return o
	}), i.d(t, "a", function () {
		return r
	}), i.d(t, "b", function () {
		return h
	});
	var e = 300,
		o = 3,
		r = 100,
		h = 3e3
}, function (n, t) {}, function (n, t) {}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("rating")
}, function (n, t) {}, function (n, t) {
	n.exports = {
		ratings: "_3W1_tA",
		ratingsText: "_1Zv2U_"
	}
}, function (n, t, i) {
	"use strict";
	(function (n) {
		t.a = function (n, t, i) {
			c.has(i) || c.set(i, []);
			var e = c.get(i);
			e && e.push(t);
			u(n, i)
		};
		var e = i(228),
			o = (i.n(e), i(579)),
			r = i(240),
			h = (i(554), new n.IntersectionObserver(function (n, t) {
				n.forEach(function (n) {
					var i = n.target;
					n.intersectionRatio < .5 ? a.has(i) && (clearTimeout(a.get(i)), a.delete(i)) : h.has(i) && a.set(i, setTimeout(function () {
						a.delete(i);
						var n = h.get(i);
						n && "function" == typeof n && (t.unobserve(i), n())
					}, 1e3))
				})
			}, {
				threshold: .5
			}), new WeakMap),
			a = new WeakMap,
			c = new WeakMap;
		var u = Object(o.a)(function (n) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.a,
				i = c.get(t);
			i && t(n(i)), c.set(t, [])
		}, 2e3)
	}).call(t, i(23))
}, function (n, t, i) {
	n.exports = i.p + "3a20aab251bd05f4ccaac15c855f68c7.png"
}, function (n, t, i) {
	n.exports = i.p + "91b3c5fbe39a7e53ae9e8b23bbc8a925.png"
}, function (n, t, i) {
	n.exports = i.p + "00dee914ab62e30d733d6044ffa46ca7.png"
}, function (n, t, i) {
	n.exports = i.p + "d7cb3c110ef860cca3969ab0cd6c2ac9.png"
}, function (n, t, i) {
	n.exports = i.p + "9a37178e53eb04fdfcb289855e5cbeb1.png"
}, function (n, t, i) {
	n.exports = i.p + "b88b1bc8c6a98e58035ffa9549441668.png"
}, function (n, t) {}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return e
	}), i.d(t, "b", function () {
		return o
	});
	var e = {
			SIMILAR_PRODUCTS: 0,
			CATEGORY: 1,
			COUNTRY: 2,
			SIMILAR_ITEM: 3,
			POPULAR: 4,
			DAILY_DISCOVER: 5,
			OFFICIAL_SHOP: 6,
			OFFICIAL_SHOP_POPULAR: 7,
			TRENDING_SEARCHES: 8,
			FROM_SAME_SHOP: 9,
			SHOPPING_CART: 10,
			RECENTLY_VIEWED: 11,
			YMAL: 16,
			FIND_SIMILAR_PRODUCTS_FROM_ITEM_CARD: 17,
			FIND_SIMILAR_PRODUCTS_FROM_SHOPPING_CART: 18
		},
		o = {
			YMAL: "YouMayAlsoLike",
			CATEGORY: "Category",
			COUNTRY: "Country",
			SIMILAR_ITEM: "SimilarItem",
			POPULAR: "Popular",
			DAILY_DISCOVER: "DailyDiscover",
			OFFICIAL_SHOP: "OfficialShop",
			OFFICIAL_SHOP_POPULAR: "OfficialShopPopular",
			TRENDING_SEARCHES: "TrendingSearches",
			FROM_SAME_SHOP: "FromSameShop",
			SHOPPING_CART: "ShoppingCart",
			RECENTLY_VIEWED: "RecentlyViewed"
		}
}, , function (n, t) {}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(1096),
		h = (i.n(r), function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}());
	var a = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i.state = {
				isShown: !1
			}, i.handleClick = i.handleClick.bind(i), i.onScroll = i.onScroll.bind(i), i.scrollThreshold = 3 * window.innerHeight / 2, i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, o.a.Component), h(t, [{
			key: "handleClick",
			value: function () {
				var n = this;
				requestAnimationFrame(function () {
					window.scrollTo(0, 0), n.setState({
						isShown: !1
					})
				})
			}
		}, {
			key: "onScroll",
			value: function () {
				var n = this;
				requestAnimationFrame(function () {
					window.scrollY > n.scrollThreshold && !1 === n.state.isShown ? n.setState({
						isShown: !0
					}) : window.scrollY < n.scrollThreshold && !0 === n.state.isShown && n.setState({
						isShown: !1
					})
				})
			}
		}, {
			key: "componentDidMount",
			value: function () {
				window.addEventListener("scroll", this.onScroll)
			}
		}, {
			key: "componentWillUnmount",
			value: function () {
				window.removeEventListener("scroll", this.onScroll)
			}
		}, {
			key: "render",
			value: function () {
				return o.a.createElement("svg", {
					className: "scroll-to-top",
					xmlns: "http://www.w3.org/2000/svg",
					width: "44",
					height: "44",
					version: "1",
					onClick: this.handleClick,
					style: {
						display: this.state.isShown ? "block" : "none"
					}
				}, o.a.createElement("defs", null, o.a.createElement("circle", {
					id: "b",
					cx: "22",
					cy: "21",
					r: "20"
				}), o.a.createElement("filter", {
					id: "a",
					width: "118%",
					height: "118%",
					x: "-9%",
					y: "-6%",
					filterUnits: "objectBoundingBox"
				}, o.a.createElement("feOffset", {
					dy: "1",
					in: "SourceAlpha",
					result: "f"
				}), o.a.createElement("feGaussianBlur", { in: "f",
					result: "f",
					stdDeviation: "1"
				}), o.a.createElement("feComposite", { in: "f",
					in2: "SourceAlpha",
					operator: "out",
					result: "f"
				}), o.a.createElement("feColorMatrix", { in: "f",
					values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
				}))), o.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, o.a.createElement("use", {
					fill: "#000",
					filter: "url(#a)",
					xlinkHref: "#b"
				}), o.a.createElement("use", {
					fill: "#fff",
					xlinkHref: "#b"
				}), o.a.createElement("circle", {
					cx: "22",
					cy: "21",
					r: "20"
				}), o.a.createElement("path", {
					fill: this.props.color || "#FF5722",
					d: "M12 13h20v2H12zm11 7v13h-2V20l-6 6-1-2 8-8 9 8-2 2z"
				})))
			}
		}]), t
	}();
	t.a = a
}, , , , , , , , , , , , , , , , , , , , function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return e
	}), i.d(t, "b", function () {
		return o
	}), i.d(t, "c", function () {
		return r
	});
	var e = 60,
		o = [0, 0],
		r = [0, 0, 0, .54]
}, , , function (n, t, i) {
	"use strict";
	t.a = function () {
		var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			t = n.transparentBackground,
			i = void 0 !== t && t,
			o = n.showScreenOnMount,
			c = void 0 === o || o;
		return function (n) {
			return function (t) {
				function o(n) {
					! function (n, t) {
						if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, o);
					var t = function (n, t) {
						if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? n : t
					}(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, n));
					return t.state = {
						isLoading: c
					}, t.endLoading = t.endLoading.bind(t), t.startLoading = t.startLoading.bind(t), t
				}
				return function (n, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					n.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: n,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
				}(o, t), s(o, [{
					key: "componentDidMount",
					value: function () {
						c && !this.state.isLoading && a.b.prevent()
					}
				}, {
					key: "componentWillUnmount",
					value: function () {
						a.b.resume()
					}
				}, {
					key: "endLoading",
					value: function () {
						this.setState({
							isLoading: !1
						}), a.b.resume()
					}
				}, {
					key: "startLoading",
					value: function () {
						this.setState({
							isLoading: !0
						}), a.b.prevent()
					}
				}, {
					key: "render",
					value: function () {
						return e.createElement("div", {
							className: r()("with-loading-wrapper", {
								"with-loading-wrapper--transparent-background": i
							})
						}, e.createElement(h.a, {
							show: this.state.isLoading
						}), e.createElement(n, u({}, this.props, {
							endLoading: this.endLoading,
							startLoading: this.startLoading
						})))
					}
				}]), o
			}(e.Component)
		}
	};
	var e = i(1),
		o = (i.n(e), i(90)),
		r = i.n(o),
		h = i(143),
		a = i(216),
		c = i(1123),
		u = (i.n(c), Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}),
		s = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}()
}, , , , , , , function (n, t, i) {
	"use strict";
	(function (n) {
		i.d(t, "a", function () {
			return a
		}), i.d(t, "b", function () {
			return c
		});
		var e = i(228),
			o = (i.n(e), window && window.innerWidth <= 640 ? 80 : 300),
			r = new WeakMap,
			h = new n.IntersectionObserver(function (n, t) {
				n.forEach(function (n) {
					var i = n.target,
						e = void 0 === n.isIntersecting || n.isIntersecting;
					if (r.has(i) && e) {
						var o = r.get(i);
						o && "function" == typeof o.callback && (o.callback(), o.isMultiple || (t.unobserve(i), r.delete(i)))
					}
				})
			}, {
				rootMargin: "0px -1px " + o + "px -1px"
			}),
			a = function (n, t, i) {
				r.set(n, {
					isMultiple: !!i,
					callback: t
				}), h.observe(n)
			},
			c = function (n) {
				r.delete(n), h.unobserve(n)
			}
	}).call(t, i(23))
}, , , function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("camera")
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return l
	});
	var e = i(1),
		o = (i.n(e), i(140)),
		r = i(221),
		h = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		a = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();

	function c(n, t) {
		var i = {};
		for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
		return i
	}

	function u(n, t) {
		if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(n, t) {
		if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? n : t
	}

	function g(n, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		n.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: n,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
	}
	var l = function (n, t) {
		var i = function (t) {
			function i() {
				return u(this, i), s(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
			}
			return g(i, e["Component"]), a(i, [{
				key: "componentWillMount",
				value: function () {
					this.props.fetchBatchItem(this.props.item_shop_ids.map(function (n) {
						var t = n.itemid,
							i = n.shopid;
						return {
							itemid: parseInt(t, 10),
							shopid: parseInt(i, 10)
						}
					}))
				}
			}, {
				key: "render",
				value: function () {
					var t = this.props,
						i = t.items,
						o = c(t, ["items"]);
					return e.createElement(n, h({
						items: i
					}, o))
				}
			}]), i
		}();
		return Object(o.connect)(function (n, i) {
			var e = i.item_shop_ids,
				o = [],
				r = t(n);
			return e.forEach(function (n) {
				var t = r && r.items ? r.items[n.itemid] : null;
				t && o.push(t)
			}), {
				items: o
			}
		}, {
			fetchBatchItem: r.a
		})(i)
	}
}, function (n, t, i) {
	"use strict";
	t.a = h, t.b = function (n, t, i, a, c, u) {
		var s = h.bind(null, i, a, t),
			g = r({}, n, n.flash_sale),
			l = g.price,
			p = g.price_before_discount,
			m = g.price_min,
			d = g.price_max,
			f = g.price_min_before_discount,
			y = g.price_max_before_discount,
			v = {};
		v.currencySymbol = Object(e.getCurrencySymbol)(t);
		var _ = Object(o.a)(n);
		_ && !u && c ? (v.priceBeforeDiscount = s(Object(o.b)(n)), v.actualPrice = s(_.group_buy_price)) : (-1 !== f && -1 !== y && f && y && (m !== f || d !== y) && f !== y ? v.priceBeforeDiscount = i && a ? [s(f), " - ", s(y)] : s(f) + " - " + s(y) : -1 !== p && p && p !== l && (v.priceBeforeDiscount = s(p)), v.actualPrice = -1 === d || m === d ? s(l) : i && a ? [s(m), " - ", s(d)] : s(m) + " - " + s(d));
		return v
	};
	var e = i(215),
		o = i(222),
		r = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		};

	function h(n, t, i, o) {
		var r = Object(e.getCurrencySymbol)(i),
			h = o || 0 === o ? Object(e.formatCurrencyNumber)(i, Object(e.deflateServerNumber)(o, i)) : null;
		return n && t ? h ? [n(r), t(h)] : "" : "" + r + (h || "")
	}
}, function (n, t, i) {
	"use strict";
	i.d(t, "c", function () {
		return o
	}), i.d(t, "d", function () {
		return r
	}), i.d(t, "a", function () {
		return h
	}), i.d(t, "b", function () {
		return a
	});
	var e = i(1e3);
	i.d(t, "e", function () {
		return e.a
	});
	var o = [208, 2, 27, 1],
		r = [255, 87, 34, 1],
		h = [0, 0, 0, .54],
		a = [0, 0, 0, .87]
}, , , function (n, t, i) {
	"use strict";
	var e = i(3),
		o = i(54),
		r = i(30),
		h = i(10),
		a = i(35),
		c = i(29);

	function u(n, t) {
		return Object(h.b)("" + a.b + Object(c.b)({
			type: "category",
			category_id: n,
			version: t
		}))
	}

	function s(n, t) {
		return Object(h.b)("" + a.b + Object(c.b)({
			type: "group",
			group_id: n,
			version: t
		}))
	}
	var g = i(248);
	i.d(t, "a", function () {
		return d
	}), i.d(t, "f", function () {
		return f
	}), t.e = function (n) {
		var t = this;
		return i = m(regeneratorRuntime.mark(function i(e, h) {
				return regeneratorRuntime.wrap(function (t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, Object(r.a)({
								apiCall: function () {
									return o.d(n)
								},
								actions: [{
									type: g.e.REQUESTED
								}, {
									type: g.e.SUCCESS,
									payload: function (t, i, e) {
										return l({}, e, {
											categoryId: n
										})
									}
								}, {
									type: g.e.FAILED,
									payload: function (n, t, i) {
										return {
											error: i.error
										}
									}
								}]
							}, e, h);
						case 2:
						case "end":
							return t.stop()
					}
				}, i, t)
			})),
			function (n, t) {
				return i.apply(this, arguments)
			};
		var i
	}, t.c = function (n) {
		var t = this;
		return i = m(regeneratorRuntime.mark(function i(e, o) {
				return regeneratorRuntime.wrap(function (t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, Object(r.a)({
								apiCall: function () {
									var t = o(),
										i = null;
									return t && t.banner && t.banner.categoryBanners && t.banner.categoryBanners[n] && t.banner.categoryBanners[n].version && (i = t.banner.categoryBanners[n].version), u(n, i)
								},
								actions: [{
									type: g.c.REQUESTED
								}, {
									type: g.c.SUCCESS,
									payload: function (t, i, e) {
										return l({}, e, {
											categoryId: n
										})
									}
								}, {
									type: g.c.FAILED,
									payload: function (n, t, i) {
										return {
											error: i.error
										}
									}
								}]
							}, e, o);
						case 2:
						case "end":
							return t.stop()
					}
				}, i, t)
			})),
			function (n, t) {
				return i.apply(this, arguments)
			};
		var i
	}, t.b = function () {
		for (var n = this, t = arguments.length, i = Array(t), e = 0; e < t; e++) i[e] = arguments[e];
		return o = m(regeneratorRuntime.mark(function t(e, o) {
				return regeneratorRuntime.wrap(function (n) {
					for (;;) switch (n.prev = n.next) {
						case 0:
							return n.next = 2, Object(r.a)({
								apiCall: function () {
									var n, t = o(),
										e = i.filter(function (n) {
											return !!n
										}).map(function (n) {
											var i = t.banner && t.banner[n] && t.banner[n].version;
											return i ? {
												type: n,
												version: i
											} : {
												type: n
											}
										});
									return n = e, Object(h.d)(a.c, {
										types: n
									})
								},
								actions: [{
									type: g.b.REQUESTED
								}, {
									type: g.b.SUCCESS,
									payload: function (n, t, i) {
										return i
									}
								}, {
									type: g.b.FAILED,
									payload: function (n, t, i) {
										return {
											error: i.error
										}
									}
								}]
							}, e, o);
						case 2:
						case "end":
							return n.stop()
					}
				}, t, n)
			})),
			function (n, t) {
				return o.apply(this, arguments)
			};
		var o
	}, t.d = function (n) {
		var t = this;
		return i = m(regeneratorRuntime.mark(function i(e, o) {
				return regeneratorRuntime.wrap(function (t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, Object(r.a)({
								apiCall: function () {
									var t = o(),
										i = null;
									return t && t.banner && t.banner.groupBanners && t.banner.groupBanners[n] && t.banner.groupBanners[n].version && (i = t.banner.groupBanners[n].version), s(n, i)
								},
								actions: [{
									type: g.d.REQUESTED
								}, {
									type: g.d.SUCCESS,
									payload: function (t, i, e) {
										return l({}, e, {
											groupId: n
										})
									}
								}, {
									type: g.d.FAILED,
									payload: function (n, t, i) {
										return {
											error: i.error
										}
									}
								}]
							}, e, o);
						case 2:
						case "end":
							return t.stop()
					}
				}, i, t)
			})),
			function (n, t) {
				return i.apply(this, arguments)
			};
		var i
	};
	var l = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		p = this;

	function m(n) {
		return function () {
			var t = n.apply(this, arguments);
			return new Promise(function (n, i) {
				return function e(o, r) {
					try {
						var h = t[o](r),
							a = h.value
					} catch (n) {
						return void i(n)
					}
					if (!h.done) return Promise.resolve(a).then(function (n) {
						e("next", n)
					}, function (n) {
						e("throw", n)
					});
					n(a)
				}("next")
			})
		}
	}
	var d = function () {
			return n = m(regeneratorRuntime.mark(function n(t) {
					return regeneratorRuntime.wrap(function (n) {
						for (;;) switch (n.prev = n.next) {
							case 0:
								t(Object(e.a)(g.a));
							case 1:
							case "end":
								return n.stop()
						}
					}, n, p)
				})),
				function (t) {
					return n.apply(this, arguments)
				};
			var n
		},
		f = function () {
			return n = m(regeneratorRuntime.mark(function n(t) {
					return regeneratorRuntime.wrap(function (n) {
						for (;;) switch (n.prev = n.next) {
							case 0:
								t(Object(e.a)(g.g));
							case 1:
							case "end":
								return n.stop()
						}
					}, n, p)
				})),
				function (t) {
					return n.apply(this, arguments)
				};
			var n
		}
}, function (n, t, i) {
	"use strict";
	var e, o, r = i(1),
		h = i.n(r),
		a = i(4),
		c = i.n(a),
		u = i(277),
		s = i.n(u),
		g = i(1013),
		l = i(16),
		p = i.n(l),
		m = i(1015),
		d = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var f = (o = e = function (n) {
			function t(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var i = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
				return i.setRef = i.setRef.bind(i), i._ref = null, i.state = {
					shouldLoad: n.shouldLoad
				}, i
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, h.a.Component), d(t, [{
				key: "setRef",
				value: function (n) {
					this._ref = n
				}
			}, {
				key: "componentWillReceiveProps",
				value: function (n) {
					n.shouldLoad && !this.state.shouldLoad && this.setState({
						shouldLoad: !0
					})
				}
			}, {
				key: "shouldComponentUpdate",
				value: function (n, t) {
					return t.shouldLoad !== this.state.shouldLoad
				}
			}, {
				key: "render",
				value: function () {
					if (p()("function" == typeof this.props.contentCreator, "swipeable-tabs: You should put a function that returns a component in `contents.children`"), !this.state.shouldLoad) return h.a.createElement("div", null);
					var n = this.props.header,
						t = void 0 === n ? {} : n,
						i = {
							willChange: "transform, opacity",
							overflowY: "auto",
							height: "calc(100vh - " + ((t.top || m.b) + (t.tabHeight || m.a)) + "px)",
							WebkitOverflowScrolling: "touch"
						};
					return h.a.createElement("div", {
						ref: this.setRef,
						style: i
					}, this.props.contentCreator())
				}
			}]), t
		}(), e.contextTypes = {
			onDeviceOrientationChanged: c.a.func,
			springConfig: c.a.object
		}, o),
		y = i(907);
	i.d(t, "a", function () {
		return C
	});
	var v, _, b = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		T = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var C = (_ = v = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i._tabHeader = null, i._swipeableView = null, i._tabs = [], i._scrollPosition = [], i._deviceOrientationChangedListener = [], i._swipingListener = [], i.addSwipingListener = i.addSwipingListener.bind(i), i.onSwitching = i.onSwitching.bind(i), i.swipeTabContent = i.swipeTabContent.bind(i), i.rAFCallback = null, i.state = {
				selectedIndex: n.selectedIndex
			}, i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, r["Component"]), T(t, [{
			key: "getChildContext",
			value: function () {
				var n = this.props.springConfig;
				return {
					snapTransition: "all " + n.duration + " " + n.easeFunction + " " + n.delay,
					springConfig: this.props.springConfig,
					onSwiping: this.addSwipingListener,
					selectedIndex: this.props.selectedIndex
				}
			}
		}]), T(t, [{
			key: "componentDidMount",
			value: function () {
				this.onSwitching(this.props.selectedIndex, "end")
			}
		}, {
			key: "componentWillReceiveProps",
			value: function (n) {
				this.props.selectedIndex !== n.selectedIndex && this.swipeTabContent(n.selectedIndex)
			}
		}, {
			key: "addSwipingListener",
			value: function (n) {
				var t = this;
				return this._swipingListener.push(n),
					function () {
						return t.removeSwipingListener(n)
					}
			}
		}, {
			key: "notifySwipingListener",
			value: function (n, t) {
				this._swipingListener.forEach(function (i) {
					i(n, t)
				})
			}
		}, {
			key: "removeSwipingListener",
			value: function (n) {
				var t = this._swipingListener.indexOf(n);
				this._swipingListener.splice(t, 1)
			}
		}, {
			key: "onSwitching",
			value: function (n, t) {
				var i = this;
				if (this.notifySwipingListener(n, t), this.rAFCallback && (cancelAnimationFrame(this.rAFCallback), this.rAFCallback = null), this._tabHeader) this._tabHeader.syncScroll(n, t, "end" === t ? function () {
					if (i._swipeableView && Object(y.b)(i._swipeableView.containerNode, null), i.state.selectedIndex !== n) {
						for (var t = [-1, 0, 1], e = 0; e < t.length; e++) {
							if ((a = t[e] + i.state.selectedIndex) >= 0 && a < i._tabs.length && i._tabs[a]) {
								var o = i._tabs[a]._ref;
								o && (o.style.display = "none")
							}
						}
						for (var r = [-1, 0, 1], h = 0; h < r.length; h++) {
							var a;
							if ((a = r[h] + n) >= 0 && a < i._tabs.length && i._tabs[a]) {
								var c = i._tabs[a]._ref;
								c && (c.style.display = null)
							}
						}
						var u = !0,
							s = !1,
							g = void 0;
						try {
							for (var l, p = i._tabs[Symbol.iterator](); !(u = (l = p.next()).done); u = !0) {
								var m = l.value;
								m._ref && (m._ref.style.opacity = "1")
							}
						} catch (n) {
							s = !0, g = n
						} finally {
							try {
								!u && p.return && p.return()
							} finally {
								if (s) throw g
							}
						}
						i.rAFCallback = requestAnimationFrame(function () {
							i.rAFCallback = null, i.setState({
								selectedIndex: n
							}, function () {
								i.props.onChangeIndex(n)
							})
						})
					}
				} : null);
				else if ("end" === t) {
					if (this.state.selectedIndex === n) return;
					for (var e = [-1, 0, 1], o = 0; o < e.length; o++) {
						if ((c = e[o] + this.state.selectedIndex) >= 0 && c < this._tabs.length && this._tabs[c]) {
							var r = this._tabs[c]._ref;
							r && (r.style.display = "none")
						}
					}
					for (var h = [-1, 0, 1], a = 0; a < h.length; a++) {
						var c;
						if ((c = h[a] + n) >= 0 && c < this._tabs.length && this._tabs[c]) {
							var u = this._tabs[c]._ref;
							u && (u.style.display = null)
						}
					}
					var s = !0,
						g = !1,
						l = void 0;
					try {
						for (var p, m = this._tabs[Symbol.iterator](); !(s = (p = m.next()).done); s = !0) {
							var d = p.value;
							d._ref && (d._ref.style.opacity = "1")
						}
					} catch (n) {
						g = !0, l = n
					} finally {
						try {
							!s && m.return && m.return()
						} finally {
							if (g) throw l
						}
					}
					this.rAFCallback = requestAnimationFrame(function () {
						i.rAFCallback = null, i.setState({
							selectedIndex: n
						}, function () {
							i.props.onChangeIndex(n)
						})
					})
				}
			}
		}, {
			key: "swipeTabContent",
			value: function (n) {
				if (Math.abs(n - this.state.selectedIndex) > 1) {
					var t = void 0,
						i = void 0;
					n < this.state.selectedIndex ? (t = n + 1, i = this.state.selectedIndex - 1) : (t = this.state.selectedIndex + 1, i = n - 1);
					for (var e = t; e <= i; e++) {
						var o = this._tabs[e];
						o._ref && (o._ref.style.opacity = "0")
					}
				}
				this._swipeableView && this._swipeableView.setIndexCurrent(n), this._swipeableView && Object(y.b)(this._swipeableView.containerNode, this.getChildContext().snapTransition), this.onSwitching(n, "end")
			}
		}, {
			key: "render",
			value: function () {
				var n = this,
					t = this.props,
					i = t.header,
					e = t.contents,
					o = t.cacheRange,
					h = t.springConfig,
					a = t.disabledSwipe,
					c = this.state.selectedIndex,
					u = e.children;
				return r.createElement("div", null, !i.hide && r.createElement(g.a, b({
					ref: function (t) {
						return n._tabHeader = t
					},
					index: c,
					onChangeIndex: this.swipeTabContent
				}, i)), r.createElement(s.a, {
					ref: function (t) {
						return n._swipeableView = t
					},
					index: c,
					onSwitching: this.onSwitching,
					resistance: !0,
					springConfig: h,
					disabled: a
				}, u.map(function (t, h) {
					var a = r.createElement(f, {
						key: h,
						index: h,
						shouldLoad: h >= c + o[0] && h <= c + o[1],
						isShown: h === c,
						ref: function (t) {
							return n._tabs[h] = t
						},
						contentCreator: t,
						header: i
					});
					return e.decorator ? e.decorator(a, h) : a
				})))
			}
		}]), t
	}(), v.defaultProps = {
		cacheRange: [-1, 1],
		springConfig: {
			duration: "0.35s",
			easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
			delay: "0s"
		}
	}, v.childContextTypes = {
		snapTransition: c.a.string,
		springConfig: c.a.object,
		onSwiping: c.a.func,
		onChangeIndex: c.a.func,
		selectedIndex: c.a.number
	}, _)
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return e
	}), i.d(t, "c", function () {
		return o
	}), i.d(t, "b", function () {
		return r
	});
	var e = 1,
		o = 2,
		r = 3
}, , function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(580),
		h = i(556),
		a = i(143),
		c = i(588),
		u = i(712),
		s = i(627),
		g = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		l = function (n) {
			var t = n.items,
				i = n.hasMore,
				e = n.header,
				l = n.loadNextBatch,
				p = n.adsTrackingListType,
				m = n.navbarType,
				d = n.itemCardProps;
			return o.a.createElement("div", {
				className: "page-shopee-recommend"
			}, o.a.createElement(s.a, null), m === c.a.GENERIC ? o.a.createElement(c.c, {
				title: e
			}) : o.a.createElement(c.d, {
				title: e
			}), t && t.length ? o.a.createElement(h.a, {
				contextValue: {
					listType: p
				}
			}, o.a.createElement("div", {
				role: "main"
			}, o.a.createElement(r.a, g({
				items: t
			}, d)))) : null, o.a.createElement(u.a, {
				loadMore: l,
				hasMore: i,
				loadIndicator: o.a.createElement(a.a, null),
				threshold: 0
			}))
		};
	l.defaultProps = {
		navbarType: "generic"
	}, t.a = l
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return e
	});
	var e = {
		OK: 0,
		UNKNOWN: -1,
		PARAM: 1,
		PERM: 2,
		LIMIT: 3,
		NOTFOUND: 4,
		EXIST: 5,
		OUTSTOCK: 6,
		EXPIRE: 7,
		INVITATION: 8,
		BANNED: 9,
		DUPCMD: 10,
		DUPLICATE: 11,
		COUNTRY_RESTRICT: 12,
		DELETED: 13,
		PROMOTION: 14,
		FREQUENT: 15,
		SHADOW_ACC: 16,
		PRICE_LIMIT: 17,
		PRICERULE: 18,
		NOT_LOGIN: 19,
		FRAUD: 20,
		HASHTAG_LIMIT: 21,
		LOCKED: 22,
		SELLER_PROMOTION: 23,
		USER_FREEZED: 24,
		LOGIN_DEVICE_LIMIT: 25,
		ESTIMATED_DAYS_LIMIT: 26,
		ITEM_EMPTY_DESC: 27,
		BE_BLOCKED: 28,
		I_BLOCKED: 29,
		CATEGORY_LEVEL: 30,
		CATEGORY_REMOVED: 31,
		CATEGORY_CONSISTENT: 32,
		NAME_LIMIT: 33,
		DISABLED: 34,
		NEED_OTP: 35,
		PASSWORD_CHANGE: 36,
		VERSION: 37,
		NEED_VOICE_OTP: 38,
		HOLIDAY: 39,
		SHADOW: 40,
		NEED_VERIFY_PHONE: 41,
		PRICE: 42,
		LISTING_PENALTY: 43,
		NEWLY_REGISTERED: 44,
		NO_ORDER: 45,
		PHONE_REGISTERED: 46,
		REFERRAL_FULLY_REDEEMED: 47,
		TOKEN_INVALID: 1e4,
		CREDIT_CART_CHANNEL_NOT_EXISTED: 10001,
		BE_ERROR: 10002,
		NO_PHONE: 10003,
		LOGISTIC_CANCELLATION_ERROR: 10004,
		SERVER_ERROR: 10005,
		UNDEFINED_VALIDATION_SEED: 10006,
		INVALID_ACTION: 10007,
		NO_VALID_PAYMENT_METHODS: 10008,
		INVALID_DATA_FORMAT: 10009,
		INVALID_DEVICE_FINGERPRINT: 10010,
		NO_CHALLENGE_TOKEN_FOUND: 10011,
		CART_ORDER_HAS_PREVIEW_ITEM: 10012,
		WRONG_ANSWER: 10051,
		TRIES_EXCEEDED: 10052,
		INVALID_CHALLENGE: 10054,
		CHALLENGE_UNAVAILABLE: 10055,
		TAXABLE_ADDRESS: 10083,
		NOT_SERVICEABLE_ADDRESS: 10084,
		INVALID_BUYER_ADDRESS: 10085,
		SINGNATURE_VERIFICATION_FAILED: 10086
	}
}, , , , , , , , , , , , function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return u
	});
	var e = i(1),
		o = i.n(e),
		r = i(657),
		h = i(16),
		a = i.n(h),
		c = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var u = function (n) {
		function t(n) {
			return function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t), a()(n.onEnterViewPort, "it's compulsory to pass onEnterViewPort function as props to LazyTrigger"),
				function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n))
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, o.a.Component), c(t, [{
			key: "componentDidMount",
			value: function () {
				Object(r.a)(this._ref, this.props.onEnterViewPort, !!this.props.observeMultipleTime)
			}
		}, {
			key: "componentWillUnmount",
			value: function () {
				Object(r.b)(this._ref)
			}
		}, {
			key: "render",
			value: function () {
				var n = this;
				return o.a.createElement("div", {
					ref: function (t) {
						n._ref = t
					}
				})
			}
		}]), t
	}()
}, function (n, t, i) {
	"use strict";
	t.__esModule = !0;
	var e = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		o = c(i(4)),
		r = i(1),
		h = c(r),
		a = i(1057);

	function c(n) {
		return n && n.__esModule ? n : {
			default: n
		}
	}
	var u = Object.values || function (n) {
			return Object.keys(n).map(function (t) {
				return n[t]
			})
		},
		s = (o.default.any, o.default.node, o.default.bool, o.default.bool, o.default.bool, o.default.func, function (n) {
			function t(i, o) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var h = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, n.call(this, i, o));
				return h.handleExited = function (n, t, i) {
					var o = (0, a.getChildMapping)(h.props.children);
					n in o || (i && i(t), h.setState(function (t) {
						var i = e({}, t.children);
						return delete i[n], {
							children: i
						}
					}))
				}, h.state = {
					children: (0, a.getChildMapping)(i.children, function (n) {
						return (0, r.cloneElement)(n, {
							onExited: function (t) {
								h.handleExited(n.key, t, n.props.onExited)
							},
							in: !0,
							appear: h.getProp(n, "appear"),
							enter: h.getProp(n, "enter"),
							exit: h.getProp(n, "exit")
						})
					})
				}, h
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, n), t.prototype.getChildContext = function () {
				return {
					transitionGroup: {
						isMounting: !this.appeared
					}
				}
			}, t.prototype.getProp = function (n, t) {
				var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.props;
				return null != i[t] ? i[t] : n.props[t]
			}, t.prototype.componentDidMount = function () {
				this.appeared = !0
			}, t.prototype.componentWillReceiveProps = function (n) {
				var t = this,
					i = this.state.children,
					e = (0, a.getChildMapping)(n.children),
					o = (0, a.mergeChildMappings)(i, e);
				Object.keys(o).forEach(function (h) {
					var a = o[h];
					if ((0, r.isValidElement)(a)) {
						var c = function (n) {
								t.handleExited(a.key, n, a.props.onExited)
							},
							u = h in i,
							s = h in e,
							g = i[h],
							l = (0, r.isValidElement)(g) && !g.props.in;
						!s || u && !l ? s || !u || l ? s && u && (0, r.isValidElement)(g) && (o[h] = (0, r.cloneElement)(a, {
							onExited: c,
							in: g.props.in,
							exit: t.getProp(a, "exit", n),
							enter: t.getProp(a, "enter", n)
						})) : o[h] = (0, r.cloneElement)(a, { in: !1
						}) : o[h] = (0, r.cloneElement)(a, {
							onExited: c,
							in: !0,
							exit: t.getProp(a, "exit", n),
							enter: t.getProp(a, "enter", n)
						})
					}
				}), this.setState({
					children: o
				})
			}, t.prototype.render = function () {
				var n = this.props,
					t = n.component,
					i = n.childFactory,
					e = function (n, t) {
						var i = {};
						for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
						return i
					}(n, ["component", "childFactory"]),
					o = this.state.children;
				return delete e.appear, delete e.enter, delete e.exit, h.default.createElement(t, e, u(o).map(i))
			}, t
		}(h.default.Component));
	s.childContextTypes = {
		transitionGroup: o.default.object.isRequired
	}, s.propTypes = {}, s.defaultProps = {
		component: "div",
		childFactory: function (n) {
			return n
		}
	}, t.default = s, n.exports = t.default
}, function (n, t, i) {
	"use strict";
	t.__esModule = !0;
	var e = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		o = function (n) {
			if (n && n.__esModule) return n;
			var t = {};
			if (null != n)
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
			return t.default = n, t
		}(i(4)),
		r = s(i(1058)),
		h = s(i(1060)),
		a = s(i(1)),
		c = s(i(1061)),
		u = i(988);

	function s(n) {
		return n && n.__esModule ? n : {
			default: n
		}
	}

	function g(n, t) {
		if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? n : t
	}
	var l = function (n, t) {
			return t && t.split(" ").forEach(function (t) {
				return (0, r.default)(n, t)
			})
		},
		p = function (n, t) {
			return t && t.split(" ").forEach(function (t) {
				return (0, h.default)(n, t)
			})
		},
		m = (e({}, c.default.propTypes, {
			classNames: u.classNamesShape,
			onEnter: o.func,
			onEntering: o.func,
			onEntered: o.func,
			onExit: o.func,
			onExiting: o.func,
			onExited: o.func
		}), function (n) {
			function t() {
				var i, e;
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				for (var o = arguments.length, r = Array(o), h = 0; h < o; h++) r[h] = arguments[h];
				return i = e = g(this, n.call.apply(n, [this].concat(r))), e.onEnter = function (n, t) {
					var i = e.getClassNames(t ? "appear" : "enter").className;
					e.removeClasses(n, "exit"), l(n, i), e.props.onEnter && e.props.onEnter(n)
				}, e.onEntering = function (n, t) {
					var i = e.getClassNames(t ? "appear" : "enter").activeClassName;
					e.reflowAndAddClass(n, i), e.props.onEntering && e.props.onEntering(n)
				}, e.onEntered = function (n, t) {
					e.removeClasses(n, t ? "appear" : "enter"), e.props.onEntered && e.props.onEntered(n)
				}, e.onExit = function (n) {
					var t = e.getClassNames("exit").className;
					e.removeClasses(n, "appear"), e.removeClasses(n, "enter"), l(n, t), e.props.onExit && e.props.onExit(n)
				}, e.onExiting = function (n) {
					var t = e.getClassNames("exit").activeClassName;
					e.reflowAndAddClass(n, t), e.props.onExiting && e.props.onExiting(n)
				}, e.onExited = function (n) {
					e.removeClasses(n, "exit"), e.props.onExited && e.props.onExited(n)
				}, e.getClassNames = function (n) {
					var t = e.props.classNames,
						i = "string" != typeof t ? t[n] : t + "-" + n;
					return {
						className: i,
						activeClassName: "string" != typeof t ? t[n + "Active"] : i + "-active"
					}
				}, g(e, i)
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, n), t.prototype.removeClasses = function (n, t) {
				var i = this.getClassNames(t),
					e = i.className,
					o = i.activeClassName;
				e && p(n, e), o && p(n, o)
			}, t.prototype.reflowAndAddClass = function (n, t) {
				n.scrollTop, l(n, t)
			}, t.prototype.render = function () {
				var n = e({}, this.props);
				return delete n.classNames, a.default.createElement(c.default, e({}, n, {
					onEnter: this.onEnter,
					onEntered: this.onEntered,
					onEntering: this.onEntering,
					onExit: this.onExit,
					onExiting: this.onExiting,
					onExited: this.onExited
				}))
			}, t
		}(a.default.Component));
	m.propTypes = {}, t.default = m, n.exports = t.default
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return c
	}), i.d(t, "b", function () {
		return u
	});
	var e = i(1),
		o = (i.n(e), i(4)),
		r = i.n(o),
		h = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		a = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var c = function (n) {
		function t() {
			return function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, e["Component"]), a(t, [{
			key: "getChildContext",
			value: function () {
				var n = this.context.targetType || "",
					t = this.context.targetData || {};
				return {
					targetType: n && this.props.targetType ? n + "." + this.props.targetType : n || this.props.targetType,
					targetData: h({}, t, this.props.targetData)
				}
			}
		}, {
			key: "render",
			value: function () {
				return this.props.children
			}
		}]), t
	}();
	c.contextTypes = {
		targetType: r.a.string,
		targetData: r.a.object
	}, c.childContextTypes = {
		targetType: r.a.string,
		targetData: r.a.object
	};
	var u = function (n, t, i) {
		return function (o) {
			return e.createElement(c, {
				targetType: t,
				targetData: i
			}, e.createElement(n, o))
		}
	}
}, function (n, t, i) {
	"use strict";
	t.d = function (n) {
		var t = n.product,
			i = n.shop,
			o = n.SHOPEE_BASE_URL,
			a = n.getProductUrl,
			c = n.getShopUrl,
			u = n.getImageUrl,
			s = n.countryCurrency;
		if (!t) return "";
		var g = {
				"@context": "http://schema.org",
				"@type": "Product",
				name: t.name,
				description: t.description && "string" == typeof t.description ? t.description : "",
				url: o + a(t.shopid, t.itemid, t.name),
				image: u(t.image)
			},
			l = t.price_min,
			p = t.price_max,
			m = Object(e.a)(t),
			d = m && m.end_time && 1e3 * m.end_time > Date.now(),
			f = l > 0 && l < p;
		d || f ? (f ? m && "number" == typeof m.group_buy_price && m.group_buy_price < l && (l = m.group_buy_price) : (l = m && m.group_buy_price || l, p = t.price), g.offers = {
			"@type": "AggregateOffer",
			lowPrice: r(l),
			highPrice: r(p),
			priceCurrency: s
		}) : g.offers = {
			"@type": "Offer",
			price: r(t.price),
			priceCurrency: s
		};
		if (i && g.offers) {
			var y = h({
				shop: i,
				SHOPEE_BASE_URL: o,
				getShopUrl: c,
				getImageUrl: u
			});
			g.offers.seller = y
		}
		0 !== t.stock && (g.offers.availability = "http://schema.org/InStock");
		var v = t.item_rating ? t.item_rating.rating_count[0] : t.rating_count ? t.rating_count[0] : 0;
		v && (g.aggregateRating = {
			"@type": "AggregateRating",
			bestRating: 5,
			worstRating: 1,
			ratingCount: v + "",
			ratingValue: (t.item_rating ? t.item_rating.rating_star || 0 : t.rating_star || 0).toFixed(2)
		});
		return JSON.stringify(g)
	}, t.e = function (n) {
		var t = n.shop,
			i = n.SHOPEE_BASE_URL,
			e = n.getShopUrl,
			o = n.getImageUrl;
		return JSON.stringify(h({
			shop: t,
			SHOPEE_BASE_URL: i,
			getShopUrl: e,
			getImageUrl: o
		}))
	}, t.a = function (n) {
		return JSON.stringify({
			"@context": "http://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: n.map(function (n, t) {
				return {
					"@type": "ListItem",
					position: t + 1,
					item: {
						"@id": n.id,
						name: n.name
					}
				}
			})
		})
	}, t.b = function (n) {
		var t = n.campaign,
			i = n.SHOPEE_BASE_URL,
			e = n.COUNTRY,
			o = n.getImageUrl;
		return JSON.stringify(function (n) {
			var t = n.name,
				i = n.description,
				e = n.image,
				o = n.startDate,
				r = n.endDate,
				h = n.location,
				a = n.SHOPEE_BASE_URL,
				c = n.COUNTRY;
			return {
				"@context": "http://schema.org",
				"@type": "SaleEvent",
				name: t,
				description: i,
				image: e,
				startDate: o,
				endDate: r,
				location: h,
				organizer: {
					"@type": "Organization",
					name: "TW" === c ? "蝦皮購物" : "Shopee",
					URL: a
				}
			}
		}({
			name: t.name,
			description: t.desc,
			image: o(t.banner),
			startDate: new Date(1e3 * t.start_time).toISOString(),
			endDate: new Date(1e3 * t.end_time).toISOString(),
			location: {
				"@type": "place",
				url: t.landing_page,
				address: {
					"@type": "PostalAddress",
					url: t.landing_page
				}
			},
			SHOPEE_BASE_URL: i,
			COUNTRY: e
		}))
	}, t.c = function (n) {
		var t = n.start_time,
			i = n.end_time,
			e = n.title,
			o = n.url;
		return JSON.stringify({
			"@context": "http://schema.org",
			"@type": "SaleEvent",
			name: e,
			startDate: new Date(1e3 * t).toISOString(),
			endDate: new Date(1e3 * i).toISOString(),
			location: {
				"@type": "place",
				url: o,
				address: {
					"@type": "PostalAddress",
					url: o
				}
			},
			organizer: {
				"@type": "Organization",
				name: "Shopee",
				URL: o
			}
		})
	};
	i(29);
	var e = i(222),
		o = i(215);
	Object.assign;

	function r(n) {
		return Object(o.formatNumber)(Object(o.deflateServerNumber)(n), 2)
	}

	function h(n) {
		var t = n.shop,
			i = n.SHOPEE_BASE_URL,
			e = n.getShopUrl,
			o = n.getImageUrl;
		if (!t) return "";
		var r = {
				"@context": "http://schema.org",
				"@type": "Organization",
				name: t.name,
				url: i + e(t.shopid, t.account && t.account.username ? t.account.username : t.username),
				image: o(t.account && t.account.portrait ? t.account.portrait : t.portrait)
			},
			h = t.rating_bad + t.rating_good + t.rating_normal;
		return h > 0 && (r.aggregateRating = {
			"@type": "AggregateRating",
			bestRating: 5,
			worstRating: 1,
			ratingCount: h + "",
			ratingValue: t.account && t.account.total_avg_star ? t.account.total_avg_star.toFixed(2) : t.total_avg_star ? t.total_avg_star.toFixed(2) : ""
		}), r
	}
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("like-2")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("like-2-solid")
}, function (n, t) {}, function (n, t) {}, function (n, t) {}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("rating-solid")
}, function (n, t) {
	n.exports = {
		badgeGroupBuy: "_2JoMTH",
		noBorder: "_3TVLfa",
		badgeIconWrapper: "_1ZEmSK",
		badgeText: "_3T3-m8",
		badgeIcon: "_2mWFzF",
		smallBadge: "_1uNLJN",
		mediumBadge: "_2REE8M",
		largeBadge: "_1fvrMj"
	}
}, function (n, t) {}, function (n, t) {}, , function (n, t, i) {
	"use strict";
	var e = i(1),
		o = (i.n(e), i(1077)),
		r = (i.n(o), i(90)),
		h = i.n(r),
		a = i(504);
	t.a = function (n) {
		var t = n.leftButton,
			i = n.mainContent,
			o = n.rightButtons,
			r = n.isTransparent,
			c = n.className;
		return e.createElement(a.a, {
			targetType: "Navbar"
		}, e.createElement("div", {
			className: h()("shopee-navbar", {
				"shopee-navbar--transparent": r
			}, c || "")
		}, t && e.createElement("div", {
			className: "shopee-navbar__left-btn"
		}, t), e.createElement("div", {
			className: "shopee-navbar__main-content"
		}, i), e.createElement("div", {
			className: "shopee-navbar__right-part"
		}, !!o && o.map(function (n, t) {
			return n ? e.createElement("div", {
				key: t,
				className: "shopee-navbar__right-part-btn"
			}, n) : null
		}))))
	}
}, , , , function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("exclamation-mark")
}, , , , , , , function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r),
		a = i(91),
		c = i(538),
		u = i(504),
		s = i(710),
		g = i(1016),
		l = i(511),
		p = i(522),
		m = i(561),
		d = i(910),
		f = i(28),
		y = i(89),
		v = i(505),
		_ = i(711),
		b = i(29),
		T = i(914),
		C = i(567),
		N = i(668);

	function S(n) {
		var t = n.isFlashSaleComingSoon,
			i = n.isSoldOut,
			e = n.useShortActionText,
			r = void 0 !== e && e,
			a = n.className;
		return t ? o.a.createElement("div", {
			className: h()("flash-sale-view-details-button", {
				"flash-sale-view-details-button": !!i
			}, a)
		}, o.a.createElement("div", {
			className: "horizontal-item-card__buy-now-button"
		}, window.innerWidth > 320 && !r ? Object(y.c)("label_view_details") : Object(y.c)("label_details"))) : o.a.createElement("div", {
			className: h()("flash-sale-buy-now-button", {
				"flash-sale-buy-now-button--hidden": !!i
			}, a)
		}, o.a.createElement("div", {
			className: "horizontal-item-card__buy-now-button"
		}, window.innerWidth > 320 && !r ? Object(y.c)("label_flash_sale_buy_long") : Object(y.c)("label_flash_sale_buy_short")))
	}
	var M = i(594);
	i(1110);
	i.d(t, "a", function () {
		return T.a
	});
	var E = f.a,
		H = i(544)("./ic_warning_" + E + "only@3x.png");
	t.b = Object(u.e)(Object(a.withRouter)(function (n) {
		var t = n.item,
			i = n.startTime,
			o = n.layout,
			r = void 0 === o ? T.a.DEFAULT : o,
			a = n.history,
			u = n.className,
			f = n.trackingRef,
			E = n.trackingClick,
			k = n.rank,
			G = n.showMonthlySold,
			A = n.showRatingStars,
			O = n.hideBuyButton,
			P = n.hideSoldoutBadge,
			w = n.hideDiscountBadge,
			R = n.hideSoldoutWatermark,
			B = n.useOneLinePrice,
			L = n.toUrl,
			D = n.useShortActionText,
			x = void 0 !== D && D,
			Y = n.isFlashSaleComingSoon,
			j = n.isFindSimilarProductsItem,
			I = n.allowHiddenPrice,
			X = void 0 === I || I,
			U = r === T.a.FLASH_SALE,
			K = r === T.a.GROUP_BUY_LIST,
			V = t,
			z = (0 === t.stock || 0 === t.flash_sale_stock || K && !t.has_group_buy_stock) && !P;
		Y && (z = !1);
		var F = t.discount,
			W = Object(v.i)(K ? _.c(t) : V.promo_images && V.promo_images.length > 0 ? V.promo_images[0] : t.image, !1),
			q = K ? _.d(t) : V.promo_name,
			Q = t.price ? Object(l.e)(t.price) : null,
			J = Q ? {
				symbol: Q.match(/^\D*/),
				number: Q.match(/\d.*/)
			} : null;
		null === J && (J = V.hidden_price_display);
		var Z = e.createElement(S, {
				isFlashSaleComingSoon: !!Y,
				isSoldOut: z,
				useShortActionText: x,
				className: "horizontal-item-card__buy-button--" + r
			}),
			$ = _.b(t),
			nn = _.a(t);
		return e.createElement("div", {
			className: h()("horizontal-item-card", "horizontal-item-card--" + "VN".toLowerCase(), "horizontal-item-card--" + r, {
				"horizontal-item-card--sold-out": z && !R
			}, u),
			style: {
				backgroundPositionX: window.innerWidth - 100
			},
			onClick: function () {
				E()
			},
			ref: f
		}, e.createElement("div", {
			className: "horizontal-item-card__link horizontal-item-card__link--" + r,
			onClick: function () {
				L && a.push(L)
			}
		}, e.createElement("div", {
			className: h()("horizontal-item-image", "horizontal-item-image--" + r)
		}, e.createElement("div", {
			className: "horizontal-item-image__wrapper"
		}, !!z && e.createElement("div", {
			className: "horizontal-item-card__badge-wrapper"
		}, e.createElement(p.m, null)), !z && !w && !Y && !!F && e.createElement("div", {
			className: "horizontal-item-card__badge-wrapper"
		}, e.createElement(p.l, {
			discountText: F,
			key: "badge-promotion"
		})), !t.is_adult || n.userIsAdult || K ? W && (k ? e.createElement(d.a, {
			src: W,
			rank: k,
			className: "horizontal-item-image__image-with-rank",
			rankClassName: k < N.b ? "horizontal-item-image__rank" : ""
		}) : e.createElement(c.a, {
			src: W
		})) : e.createElement(function () {
			return e.createElement("img", {
				className: "product-carousel__item product-carousel__item--adult",
				src: H
			})
		}, null))), e.createElement("div", {
			className: "horizontal-item-card-info horizontal-item-card-info--" + r
		}, e.createElement("div", {
			className: "horizontal-item-name typo-r14 horizontal-item-name--" + r
		}, q || t.name), G && e.createElement("div", {
			className: "horizontal-item-card-info__sales"
		}, t.sold ? Object(y.c)("label_monthly_sales") + ":" + (t.sold || 0) : ""), K && e.createElement("div", {
			className: "horizontal-item-card__group-buy-badges"
		}, $ > 0 && e.createElement(m.b, {
			groupSize: $,
			badgeSize: "l"
		}), !!nn && !z && e.createElement("div", {
			className: "horizontal-item-card__group-buy-join"
		}, Object(y.c)("label_group_buy_people_joined", {
			count: nn,
			interpolation: {
				escape: !1
			}
		}))), e.createElement("div", {
			className: "horizontal-item-card-item-info horizontal-item-card-item-info--" + r
		}, e.createElement("div", {
			className: h()("horizontal-item-card-meta", "horizontal-item-card-meta--" + r)
		}, e.createElement("div", {
			className: "horizontal-item-card-price-section"
		}, e.createElement(s.a, {
			item: t,
			objPrice: J,
			layout: U ? C.d.FLASH_SALE_LANDING : r,
			strOriginalPrice: Object(l.e)(t.price_before_discount),
			oneLinePrice: B,
			options: {
				findSimilarProducts: j,
				groupBuy: K,
				overrideShowDiscount: !0
			},
			allowHiddenPrice: X
		})), U && !Y && e.createElement(g.a, {
			sold: !t || !V.flash_sale_stock && 0 !== V.flash_sale_stock || !t.stock && 0 !== t.stock ? 0 : V.flash_sale_stock - t.stock,
			total: V.flash_sale_stock ? V.flash_sale_stock : 0,
			soldOutTime: V.end_time,
			startTime: i || V.start_time,
			layout: C.d.FLASH_SALE_LANDING
		})), !O && Z, A && O && e.createElement(M.a, {
			ratingCount: t && t.item_rating ? t.item_rating.rating_count[0] : 0,
			ratingStar: t && t.item_rating ? t.item_rating.rating_star : null,
			showNoRatingMessage: !0,
			className: "horizontal-item-card__ratings",
			onClick: function (n) {
				Object(b.a)(t, ["item_rating", "rating_count", 0], 0) > 0 && (n.stopPropagation(), n.preventDefault(), a.push(Object(v.k)(t.shopid, t.itemid)))
			}
		})))))
	}), "HorizontalItemCard", {
		shouldReport: function (n, t) {
			return n.item.itemid !== t.item.itemid
		}
	})
}, function (n, t, i) {
	"use strict";
	t.a = u;
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r),
		a = i(571),
		c = i(1108);
	i.n(c);

	function u(n) {
		var t = n.layout,
			i = n.item,
			e = n.renderOriginalPrice,
			r = void 0 === e || e,
			c = n.oneLinePrice,
			u = n.strOriginalPrice,
			s = n.options,
			g = n.allowHiddenPrice,
			l = void 0 === g || g,
			p = i ? Object(a.a)(i, "VN", function (n) {
				return o.a.createElement("span", {
					className: "price-dollar-sign",
					key: "dollar-sign"
				}, n)
			}, function (n) {
				return n
			}, s) : null,
			m = l && i.hidden_price_display,
			d = r && p && !!p.priceBeforeDiscount,
			f = c && p && "string" == typeof p.actualPrice;
		return o.a.createElement("div", {
			className: h()("price-info", "price-info--" + t, {
				"price-info--one-line": c
			})
		}, d && p && o.a.createElement("div", {
			className: h()("typo-l10", "original-price", "original-price--" + t)
		}, p.priceBeforeDiscount ? p.priceBeforeDiscount : u), p && o.a.createElement("div", {
			className: h()("current-price", "current-price--" + t, {
				"current-price--full-width": !d && c
			})
		}, m ? o.a.createElement("span", null, o.a.createElement("span", {
			className: "price-dollar-sign",
			key: "dollar-sign"
		}, p.currencySymbol), m) : o.a.createElement("span", null, f ? p.actualPrice.split(" ")[0] : p.actualPrice)))
	}
	u.defaultProps = {
		options: {}
	}
}, function (n, t, i) {
	"use strict";
	t.c = function (n) {
		if (!n) return null;
		var t = Object(e.a)(n);
		return t && t.custom_images && Array.isArray(t.custom_images) && t.custom_images[0] ? t.custom_images[0] : n.image
	}, t.d = function (n) {
		if (!n) return null;
		var t = Object(e.a)(n);
		return t && t.custom_name ? t.custom_name : n.name
	}, t.b = function (n) {
		if (!n) return 0;
		var t = Object(e.a)(n);
		return t && "number" == typeof t.group_size ? t.group_size : 0
	}, t.a = function (n) {
		if (!n) return null;
		var t = Object(e.a)(n);
		return t && "number" == typeof t.users_paid ? t.users_paid : 0
	};
	var e = i(222)
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return g
	});
	var e, o, r = i(1),
		h = (i.n(r), i(747)),
		a = i(89),
		c = i(216),
		u = i(596),
		s = (i.n(u), function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}());
	var g = (o = e = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i._lastLoading = (new Date).getTime() - n.loadDelay, i._waitingLoad = null, i.scrollListener = i.scrollListener.bind(i), i.throttleScrollHandler = Object(h.a)(i.scrollListener, 50), i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, r["Component"]), s(t, [{
			key: "render",
			value: function () {
				var n = this;
				return r.createElement("div", {
					className: "infinite-scroll",
					ref: function (t) {
						return n._el = t
					}
				}, this.props.hasMore ? this.props.loadIndicator ? this.props.loadIndicator : r.createElement("div", {
					className: "infinite-scroll__loading"
				}, Object(a.c)("label_loading")) : null)
			}
		}, {
			key: "scrollListener",
			value: function () {
				if (this.props.hasMore && !this.props.isFetching) {
					var n = (new Date).getTime(),
						t = this._el;
					if (t && null !== t.offsetParent) {
						var i = this.props.window.innerHeight || this.props.window.offsetHeight;
						if (Object(c.d)(t) + t.offsetHeight - Object(c.c)(t) - i <= Number(this.props.threshold)) {
							var e = this.props.loadDelay - (n - this._lastLoading);
							e <= 0 ? this.loadMore() : this._waitingLoad || (this._waitingLoad = setTimeout(this.loadMore.bind(this), e))
						}
					}
				}
			}
		}, {
			key: "loadMore",
			value: function () {
				this.props.hasMore && (this._waitingLoad && (clearTimeout(this._waitingLoad), this._waitingLoad = null), this._lastLoading = (new Date).getTime(), this.props.loadMore())
			}
		}, {
			key: "attachScrollListener",
			value: function () {
				this.props.window.addEventListener("scroll", this.throttleScrollHandler, !0), this.props.window.addEventListener("resize", this.throttleScrollHandler), setTimeout(this.scrollListener, 0)
			}
		}, {
			key: "detachScrollListener",
			value: function () {
				this.props.window.removeEventListener("scroll", this.throttleScrollHandler, !0), this.props.window.removeEventListener("resize", this.throttleScrollHandler)
			}
		}, {
			key: "componentDidMount",
			value: function () {
				this.attachScrollListener(), this.props.loadOnceAtBeginning && this.loadMore()
			}
		}, {
			key: "componentWillUnmount",
			value: function () {
				this.detachScrollListener()
			}
		}]), t
	}(), e.defaultProps = {
		loadMore: function () {},
		hasMore: !1,
		threshold: 800,
		loadDelay: 1e3,
		isFetching: !1,
		window: window,
		loadOnceAtBeginning: !1
	}, o)
}, , , , , , , , , function (n, t, i) {
	"use strict";
	var e, o = i(12),
		r = i(928),
		h = i(1022),
		a = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		};

	function c(n, t, i) {
		return t in n ? Object.defineProperty(n, t, {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : n[t] = i, n
	}
	t.a = Object(o.a)((c(e = {}, r.f.REQUESTED, function (n) {
		return a({}, n, {
			settings: {
				isFetching: !0
			}
		})
	}), c(e, r.f.SUCCESS, function (n, t) {
		return a({}, n, {
			settings: a({}, t.payload.data, {
				isFetching: !1
			})
		})
	}), c(e, r.f.FAILED, function (n, t) {
		return a({}, n, {
			settings: 4 === t.payload ? null : {
				isFetching: !1
			}
		})
	}), c(e, r.g.REQUESTED, function (n) {
		return a({}, n, {
			homePage: a({}, n.homePage, {
				items: [],
				isFetching: !0
			})
		})
	}), c(e, r.g.SUCCESS, function (n, t) {
		var i = t && t.payload && t.payload.items || [];
		return a({}, n, {
			homePage: a({}, n.homePage, {
				items: i,
				isFetching: !1
			})
		})
	}), c(e, r.g.FAILED, function (n) {
		return a({}, n, {
			homePage: a({}, n.homePage, {
				isFetching: !1
			})
		})
	}), c(e, r.c.REQUESTED, function (n, t) {
		var i = t.input.catid,
			e = n && n.itemsByCategory && n.itemsByCategory[i] ? n.itemsByCategory[i] : {
				items: [],
				hasMore: !0,
				isFetching: !0
			};
		return a({}, n, {
			itemsByCategory: a({}, n.itemsByCategory, c({}, i, a({}, e, {
				isFetching: !0
			})))
		})
	}), c(e, r.c.SUCCESS, function (n, t) {
		var i = t.input,
			e = i.catid,
			o = n && n.itemsByCategory && n.itemsByCategory[e],
			r = o && o.items && o.items.length > 0 ? o.items : [],
			h = t.payload,
			u = h.items,
			s = h.hasMore,
			g = h.limit,
			l = h.offset,
			p = h.nextOffset,
			m = h.total;
		return a({}, n, {
			itemsByCategory: a({}, n.itemsByCategory, c({}, e, {
				items: r.slice(0, i.offset).concat(u).concat(r.slice(i.offset + u.length)),
				hasMore: s,
				limit: g,
				offset: l,
				nextOffset: p,
				total: m,
				isFetching: !1,
				error: null
			}))
		})
	}), c(e, r.c.FAILED, function (n, t) {
		var i = t.input.catid,
			e = t.payload,
			o = n && n.itemsByCategory && n.itemsByCategory[i] ? n.itemsByCategory[i] : {
				items: [],
				hasMore: !0,
				isFetching: !1
			};
		return a({}, n, {
			itemsByCategory: a({}, n.itemsByCategory, c({}, i, 4 === e ? void 0 : a({}, o, {
				isFetching: !1,
				hasMore: !1,
				error: e
			})))
		})
	}), c(e, r.e.REQUESTED, function (n, t) {
		var i = t.query.list_type;
		return a({}, n, {
			myGroups: a({}, n.myGroups, c({}, i, a({}, n.myGroups[i], {
				isFetching: !0,
				hasMore: !0
			})))
		})
	}), c(e, r.e.SUCCESS, function (n, t) {
		for (var i = t.payload, e = i.groups, o = i.hasMore, r = i.nextOffset, h = i.limit, u = i.offset, s = i.total, g = t.query.list_type, l = n.myGroups[g] && n.myGroups[g].groups || [], p = [], m = {}, d = {}, f = 0; f < e.length; f++) {
			var y = e[f].group_info ? e[f].group_info.groupid : null,
				v = e[f].orderid ? e[f].orderid : null;
			if (v && y) {
				p.push(v), d[y] = a({}, e[f].group_info);
				var _ = a({}, e[f], {
					groupid: y,
					group_info: void 0
				});
				m[v] = {
					isFetching: !1,
					info: _
				}
			}
		}
		return a({}, n, {
			groupByGroupid: a({}, n.groupByGroupid, d),
			myGroups: a({}, n.myGroups, c({}, g, {
				isFetching: !1,
				groups: l.slice(0, u).concat(p).concat(l.slice(u + p.length)),
				hasMore: o,
				nextOffset: r,
				limit: h,
				offset: u,
				total: s
			})),
			orderDetail: a({}, n.orderDetail, m)
		})
	}), c(e, r.e.FAILED, function (n, t) {
		var i = t.query.list_type;
		return a({}, n, {
			myGroups: a({}, n.myGroups, c({}, i, a({}, n.myGroups[i], {
				isFetching: !1,
				hasMore: !1
			})))
		})
	}), c(e, r.b.REQUESTED, function (n, t) {
		var i = t.query.orderid;
		return a({}, n, {
			orderDetail: a({}, n.orderDetail, c({}, i, a({}, n.orderDetail[i], {
				isFetching: !0
			})))
		})
	}), c(e, r.b.SUCCESS, function (n, t) {
		var i = t.payload,
			e = t.query.groupid,
			o = i.orderid,
			r = a({}, i.group_info),
			h = a({}, i, {
				groupid: e,
				group_info: void 0
			});
		return a({}, n, {
			groupByGroupid: a({}, n.groupByGroupid, c({}, e, a({}, r))),
			orderDetail: a({}, n.orderDetail, c({}, o, {
				isFetching: !1,
				info: h
			}))
		})
	}), c(e, r.b.FAILED, function (n, t) {
		var i = t.query.orderid;
		return a({}, n, {
			orderDetail: a({}, n.orderDetail, c({}, i, a({}, n.orderDetail[i], {
				isFetching: !1
			})))
		})
	}), c(e, r.d.REQUESTED, function (n, t) {
		var i = t.query;
		return i.groupid ? a({}, n, {
			groupByGroupid: a({}, n.groupByGroupid, c({}, i.groupid, {
				progress: h.a.REQ
			}))
		}) : i.group_code ? a({}, n, {
			groupByCode: a({}, n.groupByCode, c({}, i.group_code, {
				progress: h.a.REQ
			}))
		}) : n
	}), c(e, r.d.SUCCESS, function (n, t) {
		var i = t.payload;
		return a({}, n, {
			groupByGroupid: a({}, n.groupByGroupid, c({}, i.groupid, a({
				progress: h.a.OK
			}, i)))
		})
	}), c(e, r.d.FAILED, function (n, t) {
		var i = t.query,
			e = t.error;
		return i.groupid ? a({}, n, {
			groupByGroupid: a({}, n.groupByGroupid, c({}, i.groupid, {
				progress: h.a.ERR,
				error: e
			}))
		}) : i.group_code ? a({}, n, {
			groupByCode: a({}, n.groupByCode, c({}, i.group_code, {
				progress: h.a.ERR,
				error: e
			}))
		}) : n
	}), c(e, r.a.REQUESTED, function (n) {
		return a({}, n, {
			groupInvite: {
				isFetching: !0,
				error: null
			}
		})
	}), c(e, r.a.SUCCESS, function (n, t) {
		var i = t.payload.group,
			e = t.query.groupid;
		return a({}, n, {
			groupByGroupid: a({}, n.groupByGroupid, c({}, e, i)),
			groupInvite: {
				isFetching: !1,
				group: e
			}
		})
	}), c(e, r.a.FAILED, function (n, t) {
		var i = t.payload.error;
		return a({}, n, {
			groupInvite: {
				isFetching: !1,
				error: i
			}
		})
	}), e), {
		settings: null,
		itemsByCategory: {},
		groupByItemid: {},
		groupByGroupid: {},
		groupByCode: {},
		myGroups: {},
		orderDetail: {},
		groupInvite: {},
		homePage: {}
	})
}, , , , , , , , , , , function (n, t, i) {
	"use strict";
	var e = i(261);
	t.a = function (n) {
		var t = document.createElement("a");
		t.href = n;
		var i = t.host,
			o = t.pathname,
			r = t.hash,
			h = t.search,
			a = t.href,
			c = "shopee.vn" === i || "shopee.vn" === i.replace("mall.", ""),
			u = function (n) {
				for (var t = [], i = 0; i < n.length; i++) "/" === n[i] && t.push(i);
				for (var o = Object(e.a)(n), r = 0; r < t.length; r++) o = o.slice(0, t[r]) + "/" + o.slice(t[r] + 1);
				return o
			}(o);
		return {
			url: c ? "" + u + h + r : a,
			sameDomain: c
		}
	}
}, function (n, t, i) {
	"use strict";
	t.a = function () {
		return o.a ? o.a.txt_shopee_intro_full + " " + o.a.txt_shopee_key_features : ""
	};
	var e = i(870),
		o = i.n(e)
}, function (n, t, i) {
	"use strict";
	var e = i(90),
		o = i.n(e),
		r = i(1),
		h = i.n(r),
		a = i(28);
	i(691);

	function c() {
		return h.a.createElement("svg", {
			height: "11",
			viewBox: "0 0 24 11",
			width: "24",
			xmlns: "http://www.w3.org/2000/svg"
		}, h.a.createElement("g", {
			fill: "#fff",
			fillRule: "evenodd"
		}, h.a.createElement("path", {
			d: "M19.615 7.143V1.805c0-.444-.36-.805-.805-.805-.445 0-.806.36-.806.805V7.182H18c0 1.438.634 2.36 1.902 2.77V9.95c.09.032.19.05.293.05.444 0 .805-.334.805-.746 0-.312-.206-.578-.498-.69v-.002c-.59-.22-.885-.694-.885-1.42h-.002zM22.615 7.143V1.805c0-.444-.36-.805-.805-.805-.445 0-.806.36-.806.805V7.182H21c0 1.438.634 2.36 1.902 2.77V9.95c.09.032.19.05.293.05.444 0 .805-.334.805-.746 0-.312-.206-.578-.498-.69v-.002c-.59-.22-.885-.694-.885-1.42h-.002zM15.124 4.158c.01-.366.37-.726.813-.726.45 0 .814.37.814.742v5.058c0 .37-.364.73-.813.73-.395 0-.725-.278-.798-.598-.544.427-1.224.68-1.964.68-1.77 0-3.268-1.456-3.268-3.254 0-1.797 1.497-3.328 3.268-3.328.733 0 1.408.262 1.948.696zm-.146 2.594c0-.996-.806-1.8-1.802-1.8-.995 0-1.798.804-1.798 1.8s.803 1.804 1.798 1.804c.996 0 1.802-.808 1.802-1.804z"
		}), h.a.createElement("path", {
			d: "M.078 1.563C.086 1.28.258 1 .565.89c.423-.15.832.16 1.008.52.512 1.056 1.57 1.88 2.99 1.9s2.158-.85 2.71-1.882c.19-.356.626-.74 1.13-.537.342.138.477.4.472.65.003.025.004.052.004.08v7.63c0 .414-.337.75-.75.75s-.75-.336-.75-.75V3.67c-.763.72-1.677 1.18-2.842 1.16-1.117-.02-2.15-.436-2.965-1.096V9.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V1.648c0-.03.002-.057.005-.085z",
			fillRule: "nonzero"
		})))
	}

	function u() {
		return h.a.createElement("svg", {
			height: "16",
			viewBox: "0 0 31 16",
			width: "31",
			xmlns: "http://www.w3.org/2000/svg"
		}, h.a.createElement("g", {
			fill: "none",
			fillRule: "evenodd"
		}, h.a.createElement("g", {
			transform: "translate(.25 .125)"
		}, h.a.createElement("rect", {
			fill: "#d0021b",
			height: "15.17",
			rx: "2",
			width: "29.77",
			x: ".518",
			y: ".46"
		}), h.a.createElement("path", {
			d: "m16.09 6.925h3.038v-1.23h-3.04",
			fill: "#ffffff"
		}), h.a.createElement("path", {
			d: "m17.205 3.45v4.085s.113 2.318-.966 2.874v1.336c2.277-.362 2.157-4.21 2.157-4.21v-4.085z",
			fill: "#ffffff"
		}), h.a.createElement("path", {
			d: "m16.28 10.386s1.378-.187 2.735-1.488c-.437.993-1.17 2.57-2.757 2.833.02-.622.02-1.344.02-1.344z",
			fill: "#ffffff"
		}), h.a.createElement("path", {
			d: "m20.716 8.064s.316 4.58-3.102 5.482v-1.256s1.96-.66 1.96-4.226v-4.596h7.66c.996.042.874 1.195.874 1.195l-6.072-.013h-1.321zm4.734-5.271c-.024.127.02.257.055.394l1.442.024-.27-.527c-.062-.125-.167-.3-.38-.36-.213-.074-.743 0-.847.47z",
			fill: "#ffffff"
		}), h.a.createElement("path", {
			d: "m23.53 10.6c0 1.37-.886 2.404-2.193 2.194.028 0-.68-.11-1.127-.434.296-.5.51-1.036.51-1.036.302.205.614.243.617.243.672.106 1.075-.485 1.06-1.195-.013-.663 0-2.06 0-2.06v-.525c0-.196-.175-.196-.388-.196h-1.626v-1.251h2.26c.43 0 .885.393.885.885v1.085zm3.232-4.64s-.565 4.69-3.296 6.512l.467.98s3.127-1.032 3.987-7.492z",
			fill: "#ffffff"
		}), h.a.createElement("path", {
			d: "m26.905 11.498c.28.364 1.03.673 1.524.673v1.258c-.763 0-1.435-.1-2.094-.677-2.802-2.768-2.925-10.26-2.95-10.26 0-.358.205-.59.57-.594.362-.003.583.216.63.624.264 5.578 1.546 7.898 2.32 8.978z",
			fill: "#ffffff"
		})), h.a.createElement("g", {
			fill: "#ffffff"
		}, h.a.createElement("path", {
			d: "m11.265 7.665c0 .196.067.378.386.378h.688c.215 0 .5.148.5.52s-.21.59-.452.59h-1.527c-.41 0-.777-.398-.777-.787v-1.45h1.184l-.002.883zm-.775 3.915-2.432.003-.005-.964h2.044c.364 0 .38.196.38.493zm-3.625 1.203h4.823v-2.575c0-.432-.323-.78-.777-.783l-3.676-.003c-.214 0-.37.176-.37.393zm.185-5.88h1.204c0 2.008-1.204 2.123-1.397 2.193-.07.025-.406.108-.553.108-.286 0-.444-.108-.53-.33 0 0-.173-.475.244-.643 1.354-.491 1.032-1.327 1.032-1.327z"
		}), h.a.createElement("path", {
			d: "m13.613 12.21c-.003.43-.21.69-.586.69v1.215c1.38 0 1.783-.636 1.783-1.52v-5.75c0-.458-.36-.784-.748-.786h-9.972c-.242 0-.446.13-.446.392v6.712s0 .807 1.22.807v-6.71h8.454c.194 0 .295.087.295.303zm1.697-8.943h-11.4s-.85.08-.735 1.205h12.135zm-9.12 2.593h1.375l-.318-.716c-.14-.357-.377-.468-.675-.468-.263 0-.63.132-.6.554.006.073.018.14.047.202zm6.103 0h-1.375l.318-.715c.14-.357.378-.468.676-.468.263 0 .63.132.6.554-.007.073-.018.14-.048.202zm-3.773-3.446c-.023.128-.03.34.086.552h1.374l-.204-.497c-.09-.15-.21-.373-.414-.45-.213-.074-.738-.075-.84.394z"
		}))))
	}
	t.a = function (n) {
		var t = n.className,
			i = "TW" === a.k;
		return h.a.createElement("div", {
			className: o()("badge__horizontal", "badge__official-shop", "badge__official-shop--inline", {
				"badge__official-shop--tw": i
			}, t)
		}, i ? h.a.createElement(u, null) : h.a.createElement(c, null))
	}
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("wholesale")
}, , function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(140),
		h = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		};

	function a(n) {
		return o.a.createElement("svg", h({
			viewBox: "0 0 22 17"
		}, n), o.a.createElement("g", {
			stroke: "none",
			strokeWidth: "1",
			fillRule: "evenodd"
		}, o.a.createElement("g", {
			transform: "translate(-10.000000, -34.000000)"
		}, o.a.createElement("g", {
			transform: "translate(0.000000, 20.000000)"
		}, o.a.createElement("g", {
			transform: "translate(7.000000, 8.000000)"
		}, o.a.createElement("path", {
			d: "M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z"
		}))))))
	}
	var c = i(70),
		u = i(504);
	i(91), i(1078), t.a = Object(u.c)(Object(c.withRouter)(Object(r.connect)(function (n) {
		return {
			previousLocation: n.history.previousLocation
		}
	}, {})(function (n) {
		var t = n.history,
			i = n.previousLocation,
			e = n.trackingClick;
		return o.a.createElement(a, {
			onClick: function () {
				e(), null !== i ? t.goBack() : window.history.back()
			},
			className: "navbar-generic__back"
		})
	})), "BackButton")
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		var t = n.action,
			i = void 0 === t ? "unknown" : t,
			o = n.data;
		return (0, n.track)({
			type: "action",
			timestamp: Date.now(),
			info: {
				action: i,
				data: Object(e.b)(o || {})
			}
		})
	};
	var e = i(72)
}, , function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("arrow-left")
}, , , function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("headshot")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("tick-bold")
}, function (n, t, i) {
	"use strict";
	t.b = function (n, t) {
		return e ? window.requestIdleCallback(n, t) : setTimeout(n, 1)
	}, t.a = function (n) {
		return e ? window.cancelIdleCallback(n) : clearTimeout(n)
	};
	var e = "requestIdleCallback" in window
}, , function (n, t, i) {
	"use strict";
	t.a = function (n, t) {
		var i = this,
			e = null,
			o = null;
		return function () {
			for (var r = arguments.length, h = Array(r), a = 0; a < r; a++) h[a] = arguments[a];
			var c = Date.now(),
				u = i,
				s = e ? e + t - c : 0;
			s <= 0 ? (e = c, n.apply(u, h)) : (o && clearTimeout(o), o = setTimeout(function () {
				e = Date.now(), n.apply(u, h), o = null
			}, s))
		}
	}
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return h
	}), i.d(t, "b", function () {
		return a
	});
	var e = {
			latin_map: {
				"Á": "A",
				"Ă": "A",
				"Ắ": "A",
				"Ặ": "A",
				"Ằ": "A",
				"Ẳ": "A",
				"Ẵ": "A",
				"Ǎ": "A",
				"Â": "A",
				"Ấ": "A",
				"Ậ": "A",
				"Ầ": "A",
				"Ẩ": "A",
				"Ẫ": "A",
				"Ä": "A",
				"Ǟ": "A",
				"Ȧ": "A",
				"Ǡ": "A",
				"Ạ": "A",
				"Ȁ": "A",
				"À": "A",
				"Ả": "A",
				"Ȃ": "A",
				"Ā": "A",
				"Ą": "A",
				"Å": "A",
				"Ǻ": "A",
				"Ḁ": "A",
				"Ⱥ": "A",
				"Ã": "A",
				"Ꜳ": "AA",
				"Æ": "AE",
				"Ǽ": "AE",
				"Ǣ": "AE",
				"Ꜵ": "AO",
				"Ꜷ": "AU",
				"Ꜹ": "AV",
				"Ꜻ": "AV",
				"Ꜽ": "AY",
				"Ḃ": "B",
				"Ḅ": "B",
				"Ɓ": "B",
				"Ḇ": "B",
				"Ƀ": "B",
				"Ƃ": "B",
				"Ć": "C",
				"Č": "C",
				"Ç": "C",
				"Ḉ": "C",
				"Ĉ": "C",
				"Ċ": "C",
				"Ƈ": "C",
				"Ȼ": "C",
				"Ď": "D",
				"Ḑ": "D",
				"Ḓ": "D",
				"Ḋ": "D",
				"Ḍ": "D",
				"Ɗ": "D",
				"Ḏ": "D",
				"ǲ": "D",
				"ǅ": "D",
				"Đ": "D",
				"Ƌ": "D",
				"Ǳ": "DZ",
				"Ǆ": "DZ",
				"É": "E",
				"Ĕ": "E",
				"Ě": "E",
				"Ȩ": "E",
				"Ḝ": "E",
				"Ê": "E",
				"Ế": "E",
				"Ệ": "E",
				"Ề": "E",
				"Ể": "E",
				"Ễ": "E",
				"Ḙ": "E",
				"Ë": "E",
				"Ė": "E",
				"Ẹ": "E",
				"Ȅ": "E",
				"È": "E",
				"Ẻ": "E",
				"Ȇ": "E",
				"Ē": "E",
				"Ḗ": "E",
				"Ḕ": "E",
				"Ę": "E",
				"Ɇ": "E",
				"Ẽ": "E",
				"Ḛ": "E",
				"Ꝫ": "ET",
				"Ḟ": "F",
				"Ƒ": "F",
				"Ǵ": "G",
				"Ğ": "G",
				"Ǧ": "G",
				"Ģ": "G",
				"Ĝ": "G",
				"Ġ": "G",
				"Ɠ": "G",
				"Ḡ": "G",
				"Ǥ": "G",
				"Ḫ": "H",
				"Ȟ": "H",
				"Ḩ": "H",
				"Ĥ": "H",
				"Ⱨ": "H",
				"Ḧ": "H",
				"Ḣ": "H",
				"Ḥ": "H",
				"Ħ": "H",
				"Í": "I",
				"Ĭ": "I",
				"Ǐ": "I",
				"Î": "I",
				"Ï": "I",
				"Ḯ": "I",
				"İ": "I",
				"Ị": "I",
				"Ȉ": "I",
				"Ì": "I",
				"Ỉ": "I",
				"Ȋ": "I",
				"Ī": "I",
				"Į": "I",
				"Ɨ": "I",
				"Ĩ": "I",
				"Ḭ": "I",
				"Ꝺ": "D",
				"Ꝼ": "F",
				"Ᵹ": "G",
				"Ꞃ": "R",
				"Ꞅ": "S",
				"Ꞇ": "T",
				"Ꝭ": "IS",
				"Ĵ": "J",
				"Ɉ": "J",
				"Ḱ": "K",
				"Ǩ": "K",
				"Ķ": "K",
				"Ⱪ": "K",
				"Ꝃ": "K",
				"Ḳ": "K",
				"Ƙ": "K",
				"Ḵ": "K",
				"Ꝁ": "K",
				"Ꝅ": "K",
				"Ĺ": "L",
				"Ƚ": "L",
				"Ľ": "L",
				"Ļ": "L",
				"Ḽ": "L",
				"Ḷ": "L",
				"Ḹ": "L",
				"Ⱡ": "L",
				"Ꝉ": "L",
				"Ḻ": "L",
				"Ŀ": "L",
				"Ɫ": "L",
				"ǈ": "L",
				"Ł": "L",
				"Ǉ": "LJ",
				"Ḿ": "M",
				"Ṁ": "M",
				"Ṃ": "M",
				"Ɱ": "M",
				"Ń": "N",
				"Ň": "N",
				"Ņ": "N",
				"Ṋ": "N",
				"Ṅ": "N",
				"Ṇ": "N",
				"Ǹ": "N",
				"Ɲ": "N",
				"Ṉ": "N",
				"Ƞ": "N",
				"ǋ": "N",
				"Ñ": "N",
				"Ǌ": "NJ",
				"Ó": "O",
				"Ŏ": "O",
				"Ǒ": "O",
				"Ô": "O",
				"Ố": "O",
				"Ộ": "O",
				"Ồ": "O",
				"Ổ": "O",
				"Ỗ": "O",
				"Ö": "O",
				"Ȫ": "O",
				"Ȯ": "O",
				"Ȱ": "O",
				"Ọ": "O",
				"Ő": "O",
				"Ȍ": "O",
				"Ò": "O",
				"Ỏ": "O",
				"Ơ": "O",
				"Ớ": "O",
				"Ợ": "O",
				"Ờ": "O",
				"Ở": "O",
				"Ỡ": "O",
				"Ȏ": "O",
				"Ꝋ": "O",
				"Ꝍ": "O",
				"Ō": "O",
				"Ṓ": "O",
				"Ṑ": "O",
				"Ɵ": "O",
				"Ǫ": "O",
				"Ǭ": "O",
				"Ø": "O",
				"Ǿ": "O",
				"Õ": "O",
				"Ṍ": "O",
				"Ṏ": "O",
				"Ȭ": "O",
				"Ƣ": "OI",
				"Ꝏ": "OO",
				"Ɛ": "E",
				"Ɔ": "O",
				"Ȣ": "OU",
				"Ṕ": "P",
				"Ṗ": "P",
				"Ꝓ": "P",
				"Ƥ": "P",
				"Ꝕ": "P",
				"Ᵽ": "P",
				"Ꝑ": "P",
				"Ꝙ": "Q",
				"Ꝗ": "Q",
				"Ŕ": "R",
				"Ř": "R",
				"Ŗ": "R",
				"Ṙ": "R",
				"Ṛ": "R",
				"Ṝ": "R",
				"Ȑ": "R",
				"Ȓ": "R",
				"Ṟ": "R",
				"Ɍ": "R",
				"Ɽ": "R",
				"Ꜿ": "C",
				"Ǝ": "E",
				"Ś": "S",
				"Ṥ": "S",
				"Š": "S",
				"Ṧ": "S",
				"Ş": "S",
				"Ŝ": "S",
				"Ș": "S",
				"Ṡ": "S",
				"Ṣ": "S",
				"Ṩ": "S",
				"Ť": "T",
				"Ţ": "T",
				"Ṱ": "T",
				"Ț": "T",
				"Ⱦ": "T",
				"Ṫ": "T",
				"Ṭ": "T",
				"Ƭ": "T",
				"Ṯ": "T",
				"Ʈ": "T",
				"Ŧ": "T",
				"Ɐ": "A",
				"Ꞁ": "L",
				"Ɯ": "M",
				"Ʌ": "V",
				"Ꜩ": "TZ",
				"Ú": "U",
				"Ŭ": "U",
				"Ǔ": "U",
				"Û": "U",
				"Ṷ": "U",
				"Ü": "U",
				"Ǘ": "U",
				"Ǚ": "U",
				"Ǜ": "U",
				"Ǖ": "U",
				"Ṳ": "U",
				"Ụ": "U",
				"Ű": "U",
				"Ȕ": "U",
				"Ù": "U",
				"Ủ": "U",
				"Ư": "U",
				"Ứ": "U",
				"Ự": "U",
				"Ừ": "U",
				"Ử": "U",
				"Ữ": "U",
				"Ȗ": "U",
				"Ū": "U",
				"Ṻ": "U",
				"Ų": "U",
				"Ů": "U",
				"Ũ": "U",
				"Ṹ": "U",
				"Ṵ": "U",
				"Ꝟ": "V",
				"Ṿ": "V",
				"Ʋ": "V",
				"Ṽ": "V",
				"Ꝡ": "VY",
				"Ẃ": "W",
				"Ŵ": "W",
				"Ẅ": "W",
				"Ẇ": "W",
				"Ẉ": "W",
				"Ẁ": "W",
				"Ⱳ": "W",
				"Ẍ": "X",
				"Ẋ": "X",
				"Ý": "Y",
				"Ŷ": "Y",
				"Ÿ": "Y",
				"Ẏ": "Y",
				"Ỵ": "Y",
				"Ỳ": "Y",
				"Ƴ": "Y",
				"Ỷ": "Y",
				"Ỿ": "Y",
				"Ȳ": "Y",
				"Ɏ": "Y",
				"Ỹ": "Y",
				"Ź": "Z",
				"Ž": "Z",
				"Ẑ": "Z",
				"Ⱬ": "Z",
				"Ż": "Z",
				"Ẓ": "Z",
				"Ȥ": "Z",
				"Ẕ": "Z",
				"Ƶ": "Z",
				"Ĳ": "IJ",
				"Œ": "OE",
				"ᴀ": "A",
				"ᴁ": "AE",
				"ʙ": "B",
				"ᴃ": "B",
				"ᴄ": "C",
				"ᴅ": "D",
				"ᴇ": "E",
				"ꜰ": "F",
				"ɢ": "G",
				"ʛ": "G",
				"ʜ": "H",
				"ɪ": "I",
				"ʁ": "R",
				"ᴊ": "J",
				"ᴋ": "K",
				"ʟ": "L",
				"ᴌ": "L",
				"ᴍ": "M",
				"ɴ": "N",
				"ᴏ": "O",
				"ɶ": "OE",
				"ᴐ": "O",
				"ᴕ": "OU",
				"ᴘ": "P",
				"ʀ": "R",
				"ᴎ": "N",
				"ᴙ": "R",
				"ꜱ": "S",
				"ᴛ": "T",
				"ⱻ": "E",
				"ᴚ": "R",
				"ᴜ": "U",
				"ᴠ": "V",
				"ᴡ": "W",
				"ʏ": "Y",
				"ᴢ": "Z",
				"á": "a",
				"ă": "a",
				"ắ": "a",
				"ặ": "a",
				"ằ": "a",
				"ẳ": "a",
				"ẵ": "a",
				"ǎ": "a",
				"â": "a",
				"ấ": "a",
				"ậ": "a",
				"ầ": "a",
				"ẩ": "a",
				"ẫ": "a",
				"ä": "a",
				"ǟ": "a",
				"ȧ": "a",
				"ǡ": "a",
				"ạ": "a",
				"ȁ": "a",
				"à": "a",
				"ả": "a",
				"ȃ": "a",
				"ā": "a",
				"ą": "a",
				"ᶏ": "a",
				"ẚ": "a",
				"å": "a",
				"ǻ": "a",
				"ḁ": "a",
				"ⱥ": "a",
				"ã": "a",
				"ꜳ": "aa",
				"æ": "ae",
				"ǽ": "ae",
				"ǣ": "ae",
				"ꜵ": "ao",
				"ꜷ": "au",
				"ꜹ": "av",
				"ꜻ": "av",
				"ꜽ": "ay",
				"ḃ": "b",
				"ḅ": "b",
				"ɓ": "b",
				"ḇ": "b",
				"ᵬ": "b",
				"ᶀ": "b",
				"ƀ": "b",
				"ƃ": "b",
				"ɵ": "o",
				"ć": "c",
				"č": "c",
				"ç": "c",
				"ḉ": "c",
				"ĉ": "c",
				"ɕ": "c",
				"ċ": "c",
				"ƈ": "c",
				"ȼ": "c",
				"ď": "d",
				"ḑ": "d",
				"ḓ": "d",
				"ȡ": "d",
				"ḋ": "d",
				"ḍ": "d",
				"ɗ": "d",
				"ᶑ": "d",
				"ḏ": "d",
				"ᵭ": "d",
				"ᶁ": "d",
				"đ": "d",
				"ɖ": "d",
				"ƌ": "d",
				"ı": "i",
				"ȷ": "j",
				"ɟ": "j",
				"ʄ": "j",
				"ǳ": "dz",
				"ǆ": "dz",
				"é": "e",
				"ĕ": "e",
				"ě": "e",
				"ȩ": "e",
				"ḝ": "e",
				"ê": "e",
				"ế": "e",
				"ệ": "e",
				"ề": "e",
				"ể": "e",
				"ễ": "e",
				"ḙ": "e",
				"ë": "e",
				"ė": "e",
				"ẹ": "e",
				"ȅ": "e",
				"è": "e",
				"ẻ": "e",
				"ȇ": "e",
				"ē": "e",
				"ḗ": "e",
				"ḕ": "e",
				"ⱸ": "e",
				"ę": "e",
				"ᶒ": "e",
				"ɇ": "e",
				"ẽ": "e",
				"ḛ": "e",
				"ꝫ": "et",
				"ḟ": "f",
				"ƒ": "f",
				"ᵮ": "f",
				"ᶂ": "f",
				"ǵ": "g",
				"ğ": "g",
				"ǧ": "g",
				"ģ": "g",
				"ĝ": "g",
				"ġ": "g",
				"ɠ": "g",
				"ḡ": "g",
				"ᶃ": "g",
				"ǥ": "g",
				"ḫ": "h",
				"ȟ": "h",
				"ḩ": "h",
				"ĥ": "h",
				"ⱨ": "h",
				"ḧ": "h",
				"ḣ": "h",
				"ḥ": "h",
				"ɦ": "h",
				"ẖ": "h",
				"ħ": "h",
				"ƕ": "hv",
				"í": "i",
				"ĭ": "i",
				"ǐ": "i",
				"î": "i",
				"ï": "i",
				"ḯ": "i",
				"ị": "i",
				"ȉ": "i",
				"ì": "i",
				"ỉ": "i",
				"ȋ": "i",
				"ī": "i",
				"į": "i",
				"ᶖ": "i",
				"ɨ": "i",
				"ĩ": "i",
				"ḭ": "i",
				"ꝺ": "d",
				"ꝼ": "f",
				"ᵹ": "g",
				"ꞃ": "r",
				"ꞅ": "s",
				"ꞇ": "t",
				"ꝭ": "is",
				"ǰ": "j",
				"ĵ": "j",
				"ʝ": "j",
				"ɉ": "j",
				"ḱ": "k",
				"ǩ": "k",
				"ķ": "k",
				"ⱪ": "k",
				"ꝃ": "k",
				"ḳ": "k",
				"ƙ": "k",
				"ḵ": "k",
				"ᶄ": "k",
				"ꝁ": "k",
				"ꝅ": "k",
				"ĺ": "l",
				"ƚ": "l",
				"ɬ": "l",
				"ľ": "l",
				"ļ": "l",
				"ḽ": "l",
				"ȴ": "l",
				"ḷ": "l",
				"ḹ": "l",
				"ⱡ": "l",
				"ꝉ": "l",
				"ḻ": "l",
				"ŀ": "l",
				"ɫ": "l",
				"ᶅ": "l",
				"ɭ": "l",
				"ł": "l",
				"ǉ": "lj",
				"ſ": "s",
				"ẜ": "s",
				"ẛ": "s",
				"ẝ": "s",
				"ḿ": "m",
				"ṁ": "m",
				"ṃ": "m",
				"ɱ": "m",
				"ᵯ": "m",
				"ᶆ": "m",
				"ń": "n",
				"ň": "n",
				"ņ": "n",
				"ṋ": "n",
				"ȵ": "n",
				"ṅ": "n",
				"ṇ": "n",
				"ǹ": "n",
				"ɲ": "n",
				"ṉ": "n",
				"ƞ": "n",
				"ᵰ": "n",
				"ᶇ": "n",
				"ɳ": "n",
				"ñ": "n",
				"ǌ": "nj",
				"ó": "o",
				"ŏ": "o",
				"ǒ": "o",
				"ô": "o",
				"ố": "o",
				"ộ": "o",
				"ồ": "o",
				"ổ": "o",
				"ỗ": "o",
				"ö": "o",
				"ȫ": "o",
				"ȯ": "o",
				"ȱ": "o",
				"ọ": "o",
				"ő": "o",
				"ȍ": "o",
				"ò": "o",
				"ỏ": "o",
				"ơ": "o",
				"ớ": "o",
				"ợ": "o",
				"ờ": "o",
				"ở": "o",
				"ỡ": "o",
				"ȏ": "o",
				"ꝋ": "o",
				"ꝍ": "o",
				"ⱺ": "o",
				"ō": "o",
				"ṓ": "o",
				"ṑ": "o",
				"ǫ": "o",
				"ǭ": "o",
				"ø": "o",
				"ǿ": "o",
				"õ": "o",
				"ṍ": "o",
				"ṏ": "o",
				"ȭ": "o",
				"ƣ": "oi",
				"ꝏ": "oo",
				"ɛ": "e",
				"ᶓ": "e",
				"ɔ": "o",
				"ᶗ": "o",
				"ȣ": "ou",
				"ṕ": "p",
				"ṗ": "p",
				"ꝓ": "p",
				"ƥ": "p",
				"ᵱ": "p",
				"ᶈ": "p",
				"ꝕ": "p",
				"ᵽ": "p",
				"ꝑ": "p",
				"ꝙ": "q",
				"ʠ": "q",
				"ɋ": "q",
				"ꝗ": "q",
				"ŕ": "r",
				"ř": "r",
				"ŗ": "r",
				"ṙ": "r",
				"ṛ": "r",
				"ṝ": "r",
				"ȑ": "r",
				"ɾ": "r",
				"ᵳ": "r",
				"ȓ": "r",
				"ṟ": "r",
				"ɼ": "r",
				"ᵲ": "r",
				"ᶉ": "r",
				"ɍ": "r",
				"ɽ": "r",
				"ↄ": "c",
				"ꜿ": "c",
				"ɘ": "e",
				"ɿ": "r",
				"ś": "s",
				"ṥ": "s",
				"š": "s",
				"ṧ": "s",
				"ş": "s",
				"ŝ": "s",
				"ș": "s",
				"ṡ": "s",
				"ṣ": "s",
				"ṩ": "s",
				"ʂ": "s",
				"ᵴ": "s",
				"ᶊ": "s",
				"ȿ": "s",
				"ɡ": "g",
				"ᴑ": "o",
				"ᴓ": "o",
				"ᴝ": "u",
				"ť": "t",
				"ţ": "t",
				"ṱ": "t",
				"ț": "t",
				"ȶ": "t",
				"ẗ": "t",
				"ⱦ": "t",
				"ṫ": "t",
				"ṭ": "t",
				"ƭ": "t",
				"ṯ": "t",
				"ᵵ": "t",
				"ƫ": "t",
				"ʈ": "t",
				"ŧ": "t",
				"ᵺ": "th",
				"ɐ": "a",
				"ᴂ": "ae",
				"ǝ": "e",
				"ᵷ": "g",
				"ɥ": "h",
				"ʮ": "h",
				"ʯ": "h",
				"ᴉ": "i",
				"ʞ": "k",
				"ꞁ": "l",
				"ɯ": "m",
				"ɰ": "m",
				"ᴔ": "oe",
				"ɹ": "r",
				"ɻ": "r",
				"ɺ": "r",
				"ⱹ": "r",
				"ʇ": "t",
				"ʌ": "v",
				"ʍ": "w",
				"ʎ": "y",
				"ꜩ": "tz",
				"ú": "u",
				"ŭ": "u",
				"ǔ": "u",
				"û": "u",
				"ṷ": "u",
				"ü": "u",
				"ǘ": "u",
				"ǚ": "u",
				"ǜ": "u",
				"ǖ": "u",
				"ṳ": "u",
				"ụ": "u",
				"ű": "u",
				"ȕ": "u",
				"ù": "u",
				"ủ": "u",
				"ư": "u",
				"ứ": "u",
				"ự": "u",
				"ừ": "u",
				"ử": "u",
				"ữ": "u",
				"ȗ": "u",
				"ū": "u",
				"ṻ": "u",
				"ų": "u",
				"ᶙ": "u",
				"ů": "u",
				"ũ": "u",
				"ṹ": "u",
				"ṵ": "u",
				"ᵫ": "ue",
				"ꝸ": "um",
				"ⱴ": "v",
				"ꝟ": "v",
				"ṿ": "v",
				"ʋ": "v",
				"ᶌ": "v",
				"ⱱ": "v",
				"ṽ": "v",
				"ꝡ": "vy",
				"ẃ": "w",
				"ŵ": "w",
				"ẅ": "w",
				"ẇ": "w",
				"ẉ": "w",
				"ẁ": "w",
				"ⱳ": "w",
				"ẘ": "w",
				"ẍ": "x",
				"ẋ": "x",
				"ᶍ": "x",
				"ý": "y",
				"ŷ": "y",
				"ÿ": "y",
				"ẏ": "y",
				"ỵ": "y",
				"ỳ": "y",
				"ƴ": "y",
				"ỷ": "y",
				"ỿ": "y",
				"ȳ": "y",
				"ẙ": "y",
				"ɏ": "y",
				"ỹ": "y",
				"ź": "z",
				"ž": "z",
				"ẑ": "z",
				"ʑ": "z",
				"ⱬ": "z",
				"ż": "z",
				"ẓ": "z",
				"ȥ": "z",
				"ẕ": "z",
				"ᵶ": "z",
				"ᶎ": "z",
				"ʐ": "z",
				"ƶ": "z",
				"ɀ": "z",
				"ﬀ": "ff",
				"ﬃ": "ffi",
				"ﬄ": "ffl",
				"ﬁ": "fi",
				"ﬂ": "fl",
				"ĳ": "ij",
				"œ": "oe",
				"ﬆ": "st",
				"ₐ": "a",
				"ₑ": "e",
				"ᵢ": "i",
				"ⱼ": "j",
				"ₒ": "o",
				"ᵣ": "r",
				"ᵤ": "u",
				"ᵥ": "v",
				"ₓ": "x"
			}
		},
		o = function (n) {
			return n ? n.replace(/[^A-Za-z0-9\[\] ]/g, function (n) {
				return e.latin_map[n] || n
			}) : null
		};

	function r(n, t, i) {
		return !(!t || !i) && n(t.toString().toLowerCase(), i.toString().toLowerCase())
	}
	var h = function (n, t) {
			return r(function (n, t) {
				return n === t
			}, n, t)
		},
		a = function (n, t) {
			return function (n, t, i) {
				return r(n, t, i) || r(n, o(t), i)
			}(function (n, t) {
				return n.indexOf(t) >= 0
			}, n, t)
		}
}, , function (n, t, i) {
	"use strict";
	t.a = function (n) {
		var t = o({}, n);
		return delete t.children, delete t.style, delete t.targetType, Object.keys(t).forEach(function (n) {
			var i = t[n];
			Object(e.isValidElement)(i) ? delete t[n] : (Array.isArray(i) && (t[n] = i.filter(function (n) {
				return !Object(e.isValidElement)(n)
			})), "function" != typeof i || delete t[n])
		}), t
	};
	var e = i(1),
		o = (i.n(e), Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		})
}, function (n, t) {}, function (n, t, i) {
	var e = {
		"./svgs/activity.svg": 788,
		"./svgs/add-to-cart.svg": 789,
		"./svgs/all-cate.svg": 790,
		"./svgs/arrow-down-filled.svg": 791,
		"./svgs/arrow-down.svg": 792,
		"./svgs/arrow-left-bold.svg": 793,
		"./svgs/arrow-left.svg": 794,
		"./svgs/arrow-right-bold-circle.svg": 795,
		"./svgs/arrow-right-bold.svg": 796,
		"./svgs/arrow-right-solid.svg": 797,
		"./svgs/arrow-right.svg": 798,
		"./svgs/arrow-up.svg": 799,
		"./svgs/block.svg": 800,
		"./svgs/bold-arrow.svg": 801,
		"./svgs/btn-chat.svg": 802,
		"./svgs/btn-shop.svg": 803,
		"./svgs/camera.svg": 804,
		"./svgs/comment.svg": 805,
		"./svgs/cross.svg": 806,
		"./svgs/default-image.svg": 807,
		"./svgs/delete.svg": 808,
		"./svgs/edit.svg": 809,
		"./svgs/exclamation-mark.svg": 810,
		"./svgs/filter-selected.svg": 811,
		"./svgs/filter.svg": 812,
		"./svgs/followers.svg": 813,
		"./svgs/following.svg": 814,
		"./svgs/headshot.svg": 815,
		"./svgs/help.svg": 816,
		"./svgs/input-warning.svg": 817,
		"./svgs/joined.svg": 818,
		"./svgs/like-2-solid.svg": 819,
		"./svgs/like-2.svg": 820,
		"./svgs/like-solid.svg": 821,
		"./svgs/like.svg": 822,
		"./svgs/loading-image.svg": 823,
		"./svgs/loading.svg": 824,
		"./svgs/login-2.svg": 825,
		"./svgs/login-fb.svg": 826,
		"./svgs/login-sms.svg": 827,
		"./svgs/minus-sign.svg": 828,
		"./svgs/my-purchase.svg": 829,
		"./svgs/navbar-shopping-cart.svg": 830,
		"./svgs/notification-2.svg": 831,
		"./svgs/notification-marketing-center.svg": 832,
		"./svgs/notification.svg": 833,
		"./svgs/notifications-wallet.svg": 834,
		"./svgs/order-order.svg": 835,
		"./svgs/order-paid.svg": 836,
		"./svgs/order-problem.svg": 837,
		"./svgs/order-rating.svg": 838,
		"./svgs/order-received.svg": 839,
		"./svgs/order-shipping.svg": 840,
		"./svgs/order.svg": 841,
		"./svgs/play-error.svg": 842,
		"./svgs/plus-sign.svg": 843,
		"./svgs/preorder.svg": 844,
		"./svgs/prep-time.svg": 845,
		"./svgs/products.svg": 846,
		"./svgs/promotion.svg": 847,
		"./svgs/rating-solid.svg": 848,
		"./svgs/rating-star-colored.svg": 849,
		"./svgs/rating.svg": 850,
		"./svgs/reply.svg": 851,
		"./svgs/response-rate.svg": 852,
		"./svgs/response-time.svg": 853,
		"./svgs/search-2.svg": 854,
		"./svgs/search-shop.svg": 855,
		"./svgs/search.svg": 856,
		"./svgs/shopping-cart-2.svg": 857,
		"./svgs/tick-bold.svg": 858,
		"./svgs/tick.svg": 859,
		"./svgs/video-play.svg": 860,
		"./svgs/video-replay.svg": 861,
		"./svgs/web-chat.svg": 862,
		"./svgs/wholesale.svg": 863,
		"./svgs/zoom.svg": 864
	};

	function o(n) {
		return i(r(n))
	}

	function r(n) {
		var t = e[n];
		if (!(t + 1)) throw new Error("Cannot find module '" + n + "'.");
		return t
	}
	o.keys = function () {
		return Object.keys(e)
	}, o.resolve = r, n.exports = o, o.id = 787
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m1.2 6.8s.3 1 1.3 2.1c1.6 2 4.7 4.6 8.2 5.1m.9-2.4c.1.1.1.4.2.5.1.2.1.4.1.6 0 .7-.6 1.3-1.3 1.3-.1 0-.5-.1-.5-.1m1.6-2.1c-.4-1.1-.2-2.3.4-3.5l0 0c .6-1.3 1.3-1.9 1.5-3 .3-1.9-1.6-3.6-3.6-3.6-1.7-.1-2.6 1.2-3.7 2.3-.9 1.2-3.1 1.1-4 1.1-.7 0-1.3.6-1.3 1.3 0 .2 0 .3.1.4",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m2.7 9.4s-.4 2.1 1.3 3.4c1.4 1 3.4.3 3.4.3s-4.2-3.1-4.7-3.7z",
			fill: "none",
			strokeMiterlimit: "10",
			key: 1
		})])
	}
	o.displayName = "Activity", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m .5.5h2.2l2.5 10.5h7.2l2.1-7.5h-10.8",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("circle", {
			cx: "6",
			cy: "13.5",
			r: "1",
			key: 1
		}), e.createElement("circle", {
			cx: "11.5",
			cy: "13.5",
			r: "1",
			key: 2
		}), e.createElement("path", {
			d: "m7.5 7h3",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 3
		}), e.createElement("path", {
			d: "m9 8.5v-3",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 4
		})])
	}
	o.displayName = "AddToCart", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("g", {
			fillOpacity: ".8",
			fillRule: "evenodd",
			stroke: "none",
			strokeWidth: "1"
		}, [e.createElement("path", {
			d: "m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z",
			key: 0
		}), e.createElement("path", {
			d: "m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z",
			key: 1
		}), e.createElement("path", {
			d: "m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z",
			key: 2
		})]))
	}
	o.displayName = "AllCate", o.defaultProps = {
		viewBox: "0 0 12 10"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m6.5 12.9l-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z"
		}))
	}
	o.displayName = "ArrowDownFilled", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"
		}))
	}
	o.displayName = "ArrowDown", o.defaultProps = {
		enableBackground: "new 0 0 11 11",
		viewBox: "0 0 11 11"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z"
		}))
	}
	o.displayName = "ArrowLeftBold", o.defaultProps = {
		enableBackground: "new 0 0 13 20",
		viewBox: "0 0 13 20"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z"
		}))
	}
	o.displayName = "ArrowLeft", o.defaultProps = {
		enableBackground: "new 0 0 11 11",
		viewBox: "0 0 11 11"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("circle", {
			cx: "20",
			cy: "20",
			fill: "none",
			r: "18.5",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z",
			transform: "translate(15 9)",
			key: 1
		})])
	}
	o.displayName = "ArrowRightBoldCircle", o.defaultProps = {
		enableBackground: "new 0 0 40 40",
		viewBox: "0 0 40 40"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"
		}))
	}
	o.displayName = "ArrowRightBold", o.defaultProps = {
		enableBackground: "new 0 0 13 21",
		viewBox: "0 0 13 21"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			d: "m7.287199 1.7079539c.3919673-.3919672.7497626-.2732696.8007137.282072l.5251183 5.7235239c.0502548.5477513-.3454556.9517483-.9007972.9007972l-5.7235239-.5251183c-.5477513-.0502547-.6728263-.4099593-.2820719-.8007138z",
			fillRule: "evenodd",
			transform: "matrix(.70710678 -.70710678 .70710678 .70710678 -6.091079 5.048312)"
		}))
	}
	o.displayName = "ArrowRightSolid", o.defaultProps = {
		height: "10",
		viewBox: "0 0 6 10",
		width: "6"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"
		}))
	}
	o.displayName = "ArrowRight", o.defaultProps = {
		enableBackground: "new 0 0 11 11",
		viewBox: "0 0 11 11"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m11 8.5c0-.1 0-.2-.1-.3l-5-6c-.1-.1-.3-.2-.4-.2s-.3.1-.4.2l-5 6c-.2.2-.1.5.1.7s.5.1.7-.1l4.6-5.5 4.6 5.5c.2.2.5.2.7.1.1-.1.2-.3.2-.4z"
		}))
	}
	o.displayName = "ArrowUp", o.defaultProps = {
		enableBackground: "new 0 0 11 11",
		viewBox: "0 0 11 11"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("circle", {
			cx: "7.5",
			cy: "7.5",
			fill: "none",
			r: "6.5",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m3.2 12.8l9.6-9.6",
			fill: "none",
			strokeMiterlimit: "10",
			key: 1
		})])
	}
	o.displayName = "Block", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m173.5 93.6l-4-4.1 1-1 3 2.9 3-2.9 1 1z",
			transform: "translate(-169 -88)"
		}))
	}
	o.displayName = "BoldArrow", o.defaultProps = {
		enableBackground: "new 0 0 9 6",
		viewBox: "0 0 9 6"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m14 7.1c0 3.1-2.9 5.6-6.5 5.6-.6 0-4.3.8-4.3.8s.4-1.9.3-2c-1.5-1-2.5-2.6-2.5-4.4 0-3.1 2.9-5.6 6.5-5.6s6.5 2.5 6.5 5.6z",
			fill: "none",
			strokeMiterlimit: "10",
			strokeWidth: "2",
			key: 0
		}), e.createElement("circle", {
			stroke: "none",
			cx: "5.3",
			cy: "7",
			r: "1.4",
			key: 1
		}), e.createElement("circle", {
			stroke: "none",
			cx: "9.9",
			cy: "7",
			r: "1.4",
			key: 2
		})])
	}
	o.displayName = "BtnChat", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m15 4.8c-.1-1-.8-2-1.6-2.9-.4-.3-.7-.5-1-.8-.1-.1-.7-.5-.7-.5h-8.5s-1.4 1.4-1.6 1.6c-.4.4-.8 1-1.1 1.4-.1.4-.4.8-.4 1.1-.3 1.4 0 2.3.6 3.3.1.1.1.1.3.3v3.5c0 1.5 1.1 2.6 2.6 2.6h8c1.5 0 2.5-1.1 2.5-2.6v-3.7c.1-.1.1-.3.3-.3.4-.8.7-1.7.6-3zm-3 7c0 .4-.1.5-.4.5h-8c-.3 0-.5-.1-.5-.5v-3.1c.3 0 .5-.1.8-.4.1 0 .3-.1.3-.1.4.4 1 .7 1.5.7.7 0 1.2-.1 1.6-.5.5.3 1.1.4 1.6.4.7 0 1.2-.3 1.8-.7.1.1.3.3.5.4.3.1.5.3.8.3zm.5-5.2c0 .1-.4.7-.3.5l-.1.1c-.1 0-.3 0-.4-.1s-.3-.3-.5-.5l-.5-1.1-.5 1.1c-.4.4-.8.7-1.4.7-.5 0-.7 0-1-.5l-.6-1.1-.5 1.1c-.3.5-.6.6-1.1.6-.3 0-.6-.2-.9-.8l-.5-1-.7 1c-.1.3-.3.4-.4.6-.1 0-.3.1-.3.1l0 0s-.4-.4-.4-.5c-.4-.5-.5-.9-.4-1.5 0-.1.1-.4.3-.5.3-.5.4-.8.8-1.2.7-.8.8-1 1-1h7s .3.1.8.7c.5.5 1.1 1.2 1.1 1.8-.1.7-.2 1.2-.5 1.5z"
		}))
	}
	o.displayName = "BtnShop", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("circle", {
			stroke: "none",
			cx: "7.5",
			cy: "7.5",
			fill: "#040000",
			opacity: ".5",
			r: "7.5",
			key: 0
		}), e.createElement("path", {
			stroke: "none",
			clipRule: "evenodd",
			d: "m9.8 8.5v.8c0 .7-.5 1.2-1.1 1.2h-4.6c-.6 0-1.1-.5-1.1-1.2v-3.6c0-.7.5-1.2 1.1-1.2h4.5c.5 0 .9.3 1 .7.1.1.1.3.1.5v.8l2-1.4c.2 0 .3.1.3.3v4.2c0 .2-.1.3-.3.3z",
			fill: "#fff",
			fillRule: "evenodd",
			key: 1
		})])
	}
	o.displayName = "Camera", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m14 10.8h-7l-4 3v-3h-2v-9.6h13z",
			fill: "none",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m4 4.2h7",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 1
		}), e.createElement("path", {
			d: "m4 7.2h7",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 2
		})])
	}
	o.displayName = "Comment", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m10.7 9.2l-3.8-3.8 3.8-3.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-3.8 3.7-3.8-3.7c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.8 3.7-3.8 3.8c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3l3.8-3.8 3.8 3.8c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z"
		}))
	}
	o.displayName = "Cross", o.defaultProps = {
		enableBackground: "new 0 0 11 11",
		viewBox: "0 0 11 11"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			clipRule: "evenodd",
			d: "m1.5 3.5h12v2h-12z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("circle", {
			clipRule: "evenodd",
			cx: "8.8",
			cy: "2.2",
			fill: "none",
			r: "1.2",
			strokeMiterlimit: "10",
			key: 1
		}), e.createElement("circle", {
			clipRule: "evenodd",
			cx: "6.2",
			cy: "2.2",
			fill: "none",
			r: "1.2",
			strokeMiterlimit: "10",
			key: 2
		}), e.createElement("path", {
			clipRule: "evenodd",
			d: "m2.5 5.5h10v8.5h-10z",
			fill: "none",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 3
		}), e.createElement("path", {
			clipRule: "evenodd",
			d: "m2.5 9.8h10",
			fill: "none",
			strokeMiterlimit: "10",
			key: 4
		}), e.createElement("path", {
			clipRule: "evenodd",
			d: "m7.6 5.3v8.2",
			fill: "none",
			strokeMiterlimit: "10",
			key: 5
		})])
	}
	o.displayName = "DefaultImage", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m5 1.2h5v2h-5z",
			fill: "none",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m2.5 3.2h10v10.5h-10z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 1
		}), e.createElement("path", {
			d: "m5 7.8v3",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 2
		}), e.createElement("path", {
			d: "m7.5 6.8v4",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 3
		}), e.createElement("path", {
			d: "m10 7.8v3",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 4
		}), e.createElement("path", {
			d: "m1 3.2h13",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 5
		})])
	}
	o.displayName = "Delete", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m9.7 2.5c.8-.8 2-.8 2.8 0s .8 2 0 2.8",
			fill: "none",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m3.3 8.9l-1.4 3.5.7.7 3.5-1.4",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 1
		}), e.createElement("path", {
			d: "m5.9 2.6h4v9h-4z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			transform: "matrix(.7071 .7071 -.7071 .7071 7.3284 -3.5208)",
			key: 2
		})])
	}
	o.displayName = "Edit", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			stroke: "none",
			d: "m7.5 10.6c.6 0 1-.5 1-1.1v-8.3c0-.6-.4-1.1-1-1.1s-1 .5-1 1.1v8.3c0 .6.4 1.1 1 1.1z",
			key: 0
		}), e.createElement("circle", {
			stroke: "none",
			cx: "7.5",
			cy: "13.4",
			r: "1.5",
			key: 1
		})])
	}
	o.displayName = "ExclamationMark", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m5.5 13.2v-7.4l-4-4.6h12l-4 4.6v4.4",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			id: "icon-filter-selected-tick",
			d: "m9.2 11.3l1.1.8 1.5-1.7",
			fill: "none",
			stroke: "#fff",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: ".5",
			key: 1
		}), e.createElement("circle", {
			stroke: "none",
			cx: "10.5",
			cy: "11.2",
			r: "2.5",
			key: 2
		}), e.createElement("use", {
			xlinkHref: "#icon-filter-selected-tick",
			key: 3
		})])
	}
	o.displayName = "FilterSelected", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			d: "m5.5 13.2v-7.4l-4-4.6h12l-4 4.6v4.4",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10"
		}))
	}
	o.displayName = "Filter", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("circle", {
			cx: "5.5",
			cy: "5",
			fill: "none",
			r: "4",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m8.4 7.5c.7 0 1.1.7 1.1 1.6v4.9h-8v-4.9c0-.9.4-1.6 1.1-1.6",
			fill: "none",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 1
		}), e.createElement("path", {
			d: "m12.6 6.9c.7 0 .9.6.9 1.2v5.7h-2",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 2
		}), e.createElement("path", {
			d: "m9.5 1.2c1.9 0 3.5 1.6 3.5 3.5 0 1.4-.9 2.7-2.1 3.2",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 3
		})])
	}
	o.displayName = "Followers", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("circle", {
			cx: "7",
			cy: "4.5",
			fill: "none",
			r: "3.8",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m12 11.2v3",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 1
		}), e.createElement("path", {
			d: "m10.5 12.8h3",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 2
		}), e.createElement("path", {
			d: "m1.5 13.8c0-3 2.5-5.5 5.5-5.5 1.5 0 2.9.6 3.9 1.6",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 3
		})])
	}
	o.displayName = "Following", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("circle", {
			cx: "7.5",
			cy: "4.5",
			fill: "none",
			r: "3.8",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 1
		})])
	}
	o.displayName = "Headshot", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("circle", {
			cx: "7.5",
			cy: "7.5",
			fill: "none",
			r: "6.5",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			stroke: "none",
			d: "m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z",
			key: 1
		})])
	}
	o.displayName = "Help", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			clipRule: "evenodd",
			d: "m13.6 3.4l-12.6 19.7s-2.9 3.9 1.1 3.9h25.9s3.6.1 1.2-3.8l-11.6-19.8s-1.7-3.1-4 0z",
			fillRule: "evenodd"
		}))
	}
	o.displayName = "InputWarning", o.defaultProps = {
		enableBackground: "new 0 0 30 30",
		viewBox: "0 0 30 30"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("circle", {
			cx: "6.8",
			cy: "4.2",
			fill: "none",
			r: "3.8",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m9.2 12.5l2 2 3-3.5",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 1
		}), e.createElement("path", {
			d: "m .8 14c0-3.3 2.7-6 6-6 2.1 0 3.9 1 5 2.6",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 2
		})])
	}
	o.displayName = "Joined", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			d: "m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "2"
		}))
	}
	o.displayName = "Like2Solid", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			d: "m7.5 4.2l1.3-1.3c1.2-1.2 3.1-1.2 4.3 0l0 0c1.2 1.2 1.2 3.2 0 4.4l-5.6 5.8-5.6-5.8c-1.2-1.2-1.2-3.2 0-4.4l0 0c1.2-1.2 3.1-1.2 4.3 0z",
			fill: "none",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "2"
		}))
	}
	o.displayName = "Like2", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m15 4.4c-.1-1.6-1.1-2.8-2.6-3.3h0c-2.4-.6-4.1.8-4.9 2.2-.8-1.4-2.5-2.8-4.9-2.1-1.5.4-2.4 1.6-2.6 3.2-.2 2.8 1.9 6.9 7.3 9.5 0 .1.1.1.2.1s.2 0 .2-.1c5.3-2.6 7.5-6.7 7.3-9.5z"
		}))
	}
	o.displayName = "LikeSolid", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			d: "m7.5 3.9l1.4-1.5c1.3-1.3 3.4-1.3 4.6 0l0 0c1.3 1.3 1.3 3.5 0 4.8l-6 6.2-6-6.2c-1.3-1.2-1.3-3.4 0-4.7l0 0c1.3-1.3 3.4-1.3 4.6 0z",
			fill: "none",
			strokeLinejoin: "round",
			strokeMiterlimit: "10"
		}))
	}
	o.displayName = "Like", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m1 4.5h10v8h-10z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m1 6.5h10",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 1
		}), e.createElement("path", {
			d: "m11 6.5h3v3h-3z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 2
		}), e.createElement("path", {
			d: "m1 14.5h10",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 3
		}), e.createElement("path", {
			d: "m6 .5v2.5",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 4
		}), e.createElement("path", {
			d: "m3.5 1v2",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 5
		}), e.createElement("path", {
			d: "m8.5 1v2",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 6
		})])
	}
	o.displayName = "LoadingImage", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m7.5 1v3",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m7.5 11v3",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 1
		}), e.createElement("path", {
			d: "m14 7.5h-3",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 2
		}), e.createElement("path", {
			d: "m4 7.5h-3",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 3
		}), e.createElement("path", {
			d: "m12.1 12.1l-2.1-2.1",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 4
		}), e.createElement("path", {
			d: "m5 5l-2.1-2.1",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 5
		}), e.createElement("path", {
			d: "m2.9 12.1l2.1-2.1",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 6
		}), e.createElement("path", {
			d: "m10 5l2.1-2.1",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 7
		})])
	}
	o.displayName = "Loading", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m8.9 8.1c1.2-.8 1.9-2.2 1.9-3.7 0-2.4-2-4.4-4.4-4.4s-4.5 2-4.5 4.5c0 1.5.7 2.8 1.9 3.7-2.2.9-3.8 3.2-3.8 5.7v.2 0 .1.3h.3.7.4v-.4s0 0 0-.1v0c0-.1 0-.1 0-.2 0-2.8 2.2-5 5-5s5 2.2 5 5v .2.1.4h.4.6.3v-.3s0 0 0-.1v0c0-.1 0-.1 0-.2 0-2.5-1.5-4.8-3.8-5.8zm-2.5-.5c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1z"
		}))
	}
	o.displayName = "Login2", o.defaultProps = {
		enableBackground: "new 0 0 13 15",
		viewBox: "0 0 13 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			stroke: "none",
			d: "m9.6 0h76.8c5.3 0 9.6 4.3 9.6 9.6v76.8c0 5.3-4.3 9.6-9.6 9.6h-76.8c-5.3 0-9.6-4.3-9.6-9.6v-76.8c0-5.3 4.3-9.6 9.6-9.6z",
			fill: "#fff",
			key: 0
		}), e.createElement("path", {
			stroke: "none",
			d: "m65.4 32.9v10.3h11.4v14.4h-11.4v38.4h-14.4v-38.4h-11.6v-14.4h11.6v-12.2s-1.2-16.8 11-16.8h17.8v14.4h-9.6s-4.8-.5-4.8 4.3z",
			fill: "#4163aa",
			key: 1
		})])
	}
	o.displayName = "LoginFb", o.defaultProps = {
		enableBackground: "new 0 0 96 96",
		viewBox: "0 0 96 96"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m10.5 0c-5.8 0-10.5 4.5-10.5 10 0 1.6.4 3.1 1.1 4.4 0 0 .6 2.6-.9 4.9 0 0-.5.5 0 .6 1.8.3 3.7-.7 4.8-1.4 1.6.9 3.5 1.5 5.5 1.5 5.8 0 10.5-4.5 10.5-10s-4.7-10-10.5-10zm-5 11c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm5 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm5 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
		}))
	}
	o.displayName = "LoginSms", o.defaultProps = {
		enableBackground: "new 0 0 21 20",
		viewBox: "0 0 21 20"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m4.5 4.5h-1-3.5v1h3.5 1 5.5v-1z"
		}))
	}
	o.displayName = "MinusSign", o.defaultProps = {
		enableBackground: "new 0 0 10 10",
		viewBox: "0 0 10 10"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m4.5 1.5h8v10h-8z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m2.5 1.5v12h10",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 1
		}), e.createElement("path", {
			d: "m6.5 4h4",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 2
		}), e.createElement("path", {
			d: "m6.5 6.5h4",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 3
		}), e.createElement("path", {
			d: "m6.5 9h4",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 4
		})])
	}
	o.displayName = "MyPurchase", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("circle", {
			stroke: "none",
			cx: "16.7",
			cy: "19.2",
			r: "1.8",
			key: 0
		}), e.createElement("circle", {
			stroke: "none",
			cx: "8.7",
			cy: "19.2",
			r: "1.8",
			key: 1
		}), e.createElement("path", {
			stroke: "none",
			d: "m20.6 4.5h-14.6l-.8-3.3v-.1l-.1-.1c0-.1-.1-.1-.1-.2-.3-.3-.7-.5-1-.5h-2.6c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h1.9l3.2 13.4c.2.6.5.8 1.1.8h5 .4 4.6c.5 0 1.1-.4 1.2-1 .3-1 .3-1 1.1-3.9.4-1.5.4-1.5.7-2.7.2-.6.2-.6.4-1.3.4-1.5.4-1.5.5-2 .3-.8-.2-1.3-.9-1.3zm-1.5 2.2l-2.1 7.8h-8.7s-1.3-5.7-1.8-7.9h12.6z",
			key: 2
		})])
	}
	o.displayName = "NavbarShoppingCart", o.defaultProps = {
		enableBackground: "new 0 0 22 22",
		viewBox: "0 0 22 22"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			stroke: "none",
			d: "m14.9 15.1l-.2-.4-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-.6s-.1-.1-.2-.2-.1-.2-.2-.2c-.1-.1-.2-.2-.3-.3-.1 0-.2-.1-.3-.2-.1 0-.2-.1-.3-.1s-.2-.1-.3-.1c-.3-.1-.5-.1-.8-.1v0 0c-.2 0-.5 0-.7.1-.1 0-.2.1-.3.1s-.3.1-.4.2c-.1 0-.2.1-.3.1-.1.1-.2.2-.3.3 0 0-.1.1-.2.2s-.1.2-.2.3h-.6c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.4-.2.4h0l0 0zm-6.8-12.8v0h-.8v0c .3-.1.5-.1.8 0zm-5 10.3l0 0v-.1-7.5c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2 0 0h-10.3l.1-.2z",
			key: 0
		}), e.createElement("path", {
			stroke: "none",
			d: "m7.7 17.1c1 0 1.9-.6 2.3-1.4h-4.6c.4.8 1.3 1.4 2.3 1.4z",
			key: 1
		})])
	}
	o.displayName = "Notification2", o.defaultProps = {
		enableBackground: "new 0 0 15 18",
		viewBox: "0 0 15 18"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m11.8 8.8l-.8 4.7h-7l-.8-4.7-.7.6-1.5-1.5 6.5-6.4 6.5 6.4-1.5 1.5z",
			fill: "none",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			stroke: "none",
			d: "m6.6 10.6h-1l2.5-4h1z",
			key: 1
		}), e.createElement("circle", {
			stroke: "none",
			cx: "5.8",
			cy: "7.5",
			r: ".6",
			key: 2
		}), e.createElement("circle", {
			stroke: "none",
			cx: "9.2",
			cy: "9.7",
			r: ".6",
			key: 3
		})])
	}
	o.displayName = "NotificationMarketingCenter", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m12 10.2l1.5 2h-12l1.5-2v-7.4c0-.5.5-1 1-1h7c .6 0 1 .5 1 1z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m6 2c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5",
			fill: "none",
			strokeMiterlimit: "10",
			key: 1
		}), e.createElement("path", {
			d: "m5.8 13.5c.4.6 1 1 1.8 1s1.4-.4 1.8-1z",
			key: 2
		})])
	}
	o.displayName = "Notification", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m12.2 13.5h-10c-.5 0-1-.4-1-1v-10c0-.5.5-1 1-1h10c .6 0 1 .5 1 1v10c0 .6-.4 1-1 1z",
			fill: "none",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("circle", {
			stroke: "none",
			cx: "8.3",
			cy: "7.5",
			r: "1",
			key: 1
		}), e.createElement("path", {
			d: "m13.8 10h-5.8c-1.4 0-2.5-1.1-2.5-2.5v0c0-1.4 1.1-2.5 2.5-2.5h5.8",
			fill: "none",
			strokeMiterlimit: "10",
			key: 2
		})])
	}
	o.displayName = "NotificationsWallet", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m5 3.4v23.7c0 .4.3.7.7.7.2 0 .3 0 .3-.2.5-.4 1-.5 1.7-.5.9 0 1.7.4 2.2 1.1.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1s1.7.4 2.2 1.1c.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1.9 0 1.7.4 2.2 1.1.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1.7 0 1.2.2 1.7.5.2.2.3.2.3.2.3 0 .7-.4.7-.7v-23.7z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 0
		}), e.createElement("path", {
			d: "m10 11.5h12",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 1
		}), e.createElement("path", {
			d: "m10 18.5h12",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 2
		})])
	}
	o.displayName = "OrderOrder", o.defaultProps = {
		enableBackground: "new 0 0 32 32",
		viewBox: "0 0 32 32"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			clipRule: "evenodd",
			d: "m24 22h-21c-.5 0-1-.5-1-1v-15c0-.6.5-1 1-1h21c .5 0 1 .4 1 1v15c0 .5-.5 1-1 1z",
			fill: "none",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 0
		}), e.createElement("path", {
			clipRule: "evenodd",
			d: "m24.8 10h4.2c.5 0 1 .4 1 1v15c0 .5-.5 1-1 1h-21c-.6 0-1-.4-1-1v-4",
			fill: "none",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 1
		}), e.createElement("path", {
			stroke: "none",
			d: "m12.9 17.2c-.7-.1-1.5-.4-2.1-.9l.8-1.2c.6.5 1.1.7 1.7.7.7 0 1-.3 1-.8 0-1.2-3.2-1.2-3.2-3.4 0-1.2.7-2 1.8-2.2v-1.3h1.2v1.2c.8.1 1.3.5 1.8 1l-.9 1c-.4-.4-.8-.6-1.3-.6-.6 0-.9.2-.9.8 0 1.1 3.2 1 3.2 3.3 0 1.2-.6 2-1.9 2.3v1.2h-1.2z",
			key: 2
		})])
	}
	o.displayName = "OrderPaid", o.defaultProps = {
		enableBackground: "new 0 0 32 32",
		viewBox: "0 0 32 32"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m5 3.4v23.7c0 .4.3.7.7.7.2 0 .3 0 .3-.2.5-.4 1-.5 1.7-.5.9 0 1.7.4 2.2 1.1.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1s1.7.4 2.2 1.1c.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1.9 0 1.7.4 2.2 1.1.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1.7 0 1.2.2 1.7.5.2.2.3.2.3.2.3 0 .7-.4.7-.7v-23.7z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 0
		}), e.createElement("path", {
			d: "m16 9v6",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 1
		}), e.createElement("circle", {
			stroke: "none",
			cx: "16",
			cy: "20.5",
			r: "2",
			key: 2
		})])
	}
	o.displayName = "OrderProblem", o.defaultProps = {
		enableBackground: "new 0 0 32 32",
		viewBox: "0 0 32 32"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			d: "m16 3.2l4.2 8.7 9.3 1.1-7.3 6 2.1 9.8-8.3-5-8.3 5 2.1-9.8-7.3-6 9.3-1.1z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3"
		}))
	}
	o.displayName = "OrderRating", o.defaultProps = {
		enableBackground: "new 0 0 32 32",
		viewBox: "0 0 32 32"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m2 28v-8.8h8.6l1.1 2.3h8.1l1.1-2.3 9.1-.1v8.9z",
			fill: "none",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 0
		}), e.createElement("path", {
			d: "m21 8h6l3 11.1",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 1
		}), e.createElement("path", {
			d: "m2 19.2l3-11.2h6",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 2
		}), e.createElement("path", {
			d: "m16 4v10",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 3
		}), e.createElement("path", {
			d: "m20.1 13.4l-3.6 3.6c-.3.3-.7.3-.9 0l-3.6-3.6c-.4-.4-.1-1.1.5-1.1h7.2c.5 0 .8.7.4 1.1z",
			key: 4
		})])
	}
	o.displayName = "OrderReceived", o.defaultProps = {
		enableBackground: "new 0 0 32 32",
		viewBox: "0 0 32 32"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m18.1 20.5h-8.5",
			fill: "none",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 0
		}), e.createElement("circle", {
			cx: "7.5",
			cy: "23.5",
			fill: "none",
			r: "4",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 1
		}), e.createElement("circle", {
			cx: "20.5",
			cy: "23.5",
			fill: "none",
			r: "4",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 2
		}), e.createElement("path", {
			d: "m19.7 15.5h10.3",
			fill: "none",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 3
		}), e.createElement("path", {
			d: "m4.6 20.5h-3.1v-16h19v13.9",
			fill: "none",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 4
		}), e.createElement("path", {
			d: "m20.5 9h9l1 13h-5.8",
			fill: "none",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 5
		})])
	}
	o.displayName = "OrderShipping", o.defaultProps = {
		enableBackground: "new 0 0 32 32",
		viewBox: "0 0 32 32"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m5 3.4v23.7c0 .4.3.7.7.7.2 0 .3 0 .3-.2.5-.4 1-.5 1.7-.5.9 0 1.7.4 2.2 1.1.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1s1.7.4 2.2 1.1c.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1.9 0 1.7.4 2.2 1.1.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1.7 0 1.2.2 1.7.5.2.2.3.2.3.2.3 0 .7-.4.7-.7v-23.7z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 0
		}), e.createElement("path", {
			d: "m10 11.5h12",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 1
		}), e.createElement("path", {
			d: "m10 18.5h12",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			strokeWidth: "3",
			key: 2
		})])
	}
	o.displayName = "Order", o.defaultProps = {
		enableBackground: "new 0 0 32 32",
		viewBox: "0 0 32 32"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			stroke: "none",
			d: "m7.5 0c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5zm0 14.5c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z",
			key: 0
		}), e.createElement("path", {
			stroke: "none",
			d: "m8.5 9.6l-2.6 1.8c-.3.2-.5.1-.5-.2v-4.7zm1.1-.8l1.4-1c .3-.2.3-.5 0-.7l-5.1-3.5c-.3-.2-.5-.1-.5.2v.8z",
			key: 1
		}), e.createElement("path", {
			stroke: "none",
			d: "m12.5 13l-10.3-10.3c-.1-.1-.1-.2 0-.3l.1-.1c.1-.1.2-.1.3 0l10.3 10.3c.1.1.1.2 0 .3l-.1.1c-.1.1-.2.1-.3 0z",
			key: 2
		})])
	}
	o.displayName = "PlayError", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m10 4.5h-4.5v-4.5h-1v4.5h-4.5v1h4.5v4.5h1v-4.5h4.5z"
		}))
	}
	o.displayName = "PlusSign", o.defaultProps = {
		enableBackground: "new 0 0 10 10",
		viewBox: "0 0 10 10"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("g", {
			transform: "translate(1 1)"
		}, [e.createElement("path", {
			stroke: "none",
			d: "m13.6 11.7h-1.3v-1.3c0-.2-.2-.4-.4-.4h0c-.2 0-.4.2-.4.4v1.6 0c0 .2.2.4.4.4h0 1.7c.2 0 .4-.2.4-.4v0c0-.2-.2-.3-.4-.3z",
			key: 0
		}), e.createElement("path", {
			stroke: "none",
			d: "m11.9 7.8c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1 4.1-1.8 4.1-4.1c0-2.2-1.8-4.1-4.1-4.1zm0 7.4c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3c0 1.9-1.4 3.3-3.3 3.3z",
			key: 1
		}), e.createElement("path", {
			stroke: "none",
			d: "m7 14.2v0h-5.5c-.4 0-.7-.3-.7-.7v-6.7h13.4.8v-.8-3.4c0-.7-.6-1.4-1.4-1.4h-2v-1c0-.1-.1-.2-.2-.2h-.6c-.1 0-.2.1-.2.2v1.1h-6.3v-1.1c0-.1-.1-.2-.2-.2h-.6c-.1 0-.2.1-.2.2v1.1h-1.9c-.8 0-1.4.6-1.4 1.3v3.4.8 6.8c0 .8.6 1.4 1.4 1.4h5.6v0 0c .2 0 .4-.2.4-.4s-.2-.4-.4-.4zm-6.2-11.4c0-.4.3-.7.7-.7h1.8v.7c0 .1.1.2.2.2h.6c.1 0 .2-.1.2-.2v-.7h6.3v.7c0 .1.1.2.2.2h.6c.1 0 .2-.1.2-.2v-.7h1.9c.4 0 .7.3.7.7v3.2h-13.4z",
			key: 2
		}), e.createElement("path", {
			stroke: "none",
			d: "m4.1 12.4l0 0c .2 0 .4-.2.4-.4v-1.3h1.3c.2 0 .4-.2.4-.4v0c-.1-.1-.2-.3-.4-.3h-1.3v-1.2c0-.2-.2-.4-.4-.4h0c-.2 0-.4.2-.4.4v1.2h-1.2c-.2 0-.4.2-.4.4v0c0 .2.2.4.4.4h1.3v1.2c-.1.2.1.4.3.4z",
			key: 3
		})]))
	}
	o.displayName = "Preorder", o.defaultProps = {
		enableBackground: "new 0 0 18 18",
		viewBox: "0 0 18 18"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m3.7 13h10.8",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m .5 1h2v11",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 1
		}), e.createElement("path", {
			d: "m4.5 1.5h9.5v9.5h-9.5z",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 2
		}), e.createElement("path", {
			d: "m8.5 1.5h2v4h-2z",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 3
		}), e.createElement("circle", {
			cx: "2.5",
			cy: "13",
			fill: "none",
			r: "1",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 4
		})])
	}
	o.displayName = "PrepTime", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m10 1l4.5 2.5-.5 3h-2v7.5h-9v-7.5h-2l-.5-3 4.6-2.5c.3 1.1 1.3 1.9 2.4 1.9s2.1-.8 2.5-1.9z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m3 11.5h9",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 1
		})])
	}
	o.displayName = "Products", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m13.9 8.2l-5.7 5.7-7.1-7.1v-5.7h5.7z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			stroke: "none",
			d: "m10 8c0 .5-.2 1-.5 1.3l-.8-.4c.3-.4.5-.7.5-1.1s-.2-.6-.5-.6c-.8 0-.7 2-2.1 2-.8 0-1.3-.5-1.4-1.2h-.8v-.7h.7c.1-.5.3-.8.6-1.1l.6.5c-.1.3-.3.6-.3.9 0 .4.1.5.5.5.7 0 .6-1.9 2.1-1.9.7 0 1.3.4 1.4 1.2h.8v.6z",
			key: 1
		}), e.createElement("ellipse", {
			stroke: "none",
			cx: "3.8",
			cy: "3.8",
			rx: ".8",
			ry: ".8",
			transform: "matrix(.7071 -.7071 .7071 .7071 -1.5689 3.7877)",
			key: 2
		})])
	}
	o.displayName = "Promotion", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			d: "m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10"
		}))
	}
	o.displayName = "RatingSolid", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("defs", {
			key: 0
		}, [e.createElement("linearGradient", {
			id: "icon-rating-star-colored-linearGradient-1",
			x1: "50%",
			x2: "50%",
			y1: "0%",
			y2: "100%",
			key: 0
		}, [e.createElement("stop", {
			offset: "0",
			stopColor: "#ffd310",
			key: 0
		}), e.createElement("stop", {
			offset: "1",
			stopColor: "#ffad27",
			key: 1
		})]), e.createElement("path", {
			id: "icon-rating-star-colored-path-2",
			d: "m14.910357 6.35294118l-2.4894434 1.30877785.4754414-2.77203598-2.0140021-1.96316679 2.7832824-.4044346 1.2447217-2.52208166 1.2447217 2.52208166 2.7832824.4044346-2.0140021 1.96316679.4754414 2.77203598z",
			key: 1
		}), e.createElement("filter", {
			id: "icon-rating-star-colored-filter-3",
			filterUnits: "objectBoundingBox",
			height: "200%",
			width: "200%",
			x: "-50%",
			y: "-50%",
			key: 2
		}, [e.createElement("feOffset", {
			dx: "0",
			dy: ".8",
			in: "SourceAlpha",
			result: "shadowOffsetInner1",
			key: 0
		}), e.createElement("feComposite", { in: "shadowOffsetInner1",
			in2: "SourceAlpha",
			k2: "-1",
			k3: "1",
			operator: "arithmetic",
			result: "shadowInnerInner1",
			key: 1
		}), e.createElement("feColorMatrix", { in: "shadowInnerInner1",
			type: "matrix",
			values: "0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0",
			key: 2
		})])]), e.createElement("g", {
			fill: "none",
			fillRule: "evenodd",
			stroke: "none",
			strokeWidth: "1",
			transform: "translate(-10)",
			key: 1
		}, [e.createElement("use", {
			fill: "url(#icon-rating-star-colored-linearGradient-1)",
			fillRule: "evenodd",
			xlinkHref: "#icon-rating-star-colored-path-2",
			key: 0
		}), e.createElement("use", {
			fill: "#000",
			fillOpacity: "1",
			filter: "url(#icon-rating-star-colored-filter-3)",
			xlinkHref: "#icon-rating-star-colored-path-2",
			key: 1
		}), e.createElement("use", {
			stroke: "#ffa727",
			strokeWidth: ".5",
			xlinkHref: "#icon-rating-star-colored-path-2",
			key: 2
		})])])
	}
	o.displayName = "RatingStarColored", o.defaultProps = {
		height: "8",
		viewBox: "0 0 9 8",
		width: "9"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			d: "m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10"
		}))
	}
	o.displayName = "Rating", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m12 7.5v6h-10v-12h7",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m8 7.5l5-6",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 1
		})])
	}
	o.displayName = "Reply", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m14 10.8h-7l-4 3v-3h-2v-9.6h13z",
			fill: "none",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("circle", {
			stroke: "none",
			cx: "4",
			cy: "5.8",
			r: "1",
			key: 1
		}), e.createElement("circle", {
			stroke: "none",
			cx: "7.5",
			cy: "5.8",
			r: "1",
			key: 2
		}), e.createElement("circle", {
			stroke: "none",
			cx: "11",
			cy: "5.8",
			r: "1",
			key: 3
		})])
	}
	o.displayName = "ResponseRate", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m7.2 3.5v4.3h3.3",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("circle", {
			cx: "7.5",
			cy: "7.5",
			fill: "none",
			r: "6.5",
			strokeMiterlimit: "10",
			key: 1
		})])
	}
	o.displayName = "ResponseTime", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("g", {
			fillRule: "evenodd",
			stroke: "none",
			strokeWidth: "1"
		}, [e.createElement("path", {
			d: "m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z",
			key: 0
		}), e.createElement("path", {
			d: "m12.2972351 13.7114222l4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z",
			key: 1
		})]))
	}
	o.displayName = "Search2", o.defaultProps = {
		height: "19",
		viewBox: "0 0 19 19",
		width: "19"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3 0 0c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4l1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7l0 0h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8l0 0h-1l0 0c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"
		}))
	}
	o.displayName = "SearchShop", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("circle", {
			cx: "6.8",
			cy: "6.8",
			fill: "none",
			r: "5.5",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m10.8 11l3 2.8",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "1.5",
			key: 1
		})])
	}
	o.displayName = "Search", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("path", {
			d: "m .5.5h2.2l2.5 10.5h7.2l2.1-7.5h-10.8",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("circle", {
			stroke: "none",
			cx: "6",
			cy: "13.5",
			r: "1",
			key: 1
		}), e.createElement("circle", {
			stroke: "none",
			cx: "11.5",
			cy: "13.5",
			r: "1",
			key: 2
		})])
	}
	o.displayName = "ShoppingCart2", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"
		}))
	}
	o.displayName = "TickBold", o.defaultProps = {
		enableBackground: "new 0 0 12 12",
		viewBox: "0 0 12 12"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("path", {
			stroke: "none",
			d: "m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z"
		}))
	}
	o.displayName = "Tick", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("g", {
			opacity: ".54",
			stroke: "none",
			key: 0
		}, [e.createElement("circle", {
			cx: "7.5",
			cy: "7.5",
			fill: "#040000",
			r: "7.3",
			key: 0
		}), e.createElement("path", {
			d: "m7.5.5c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7m0-.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5z",
			fill: "#fff",
			key: 1
		})]), e.createElement("path", {
			stroke: "none",
			d: "m6.1 5.1c0-.2.1-.3.3-.2l3.3 2.3c.2.1.2.3 0 .4l-3.3 2.4c-.2.1-.3.1-.3-.2z",
			fill: "#fff",
			key: 1
		})])
	}
	o.displayName = "VideoPlay", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("g", {
			opacity: ".54",
			stroke: "none",
			key: 0
		}, [e.createElement("circle", {
			cx: "7.5",
			cy: "7.5",
			fill: "#040000",
			r: "7.3",
			key: 0
		}), e.createElement("path", {
			d: "m7.5.5c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7m0-.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5z",
			fill: "#fff",
			key: 1
		})]), e.createElement("path", {
			stroke: "none",
			clipRule: "evenodd",
			d: "m10.2 5.3v0c .5.7.8 1.4.8 2.2 0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5v.5c-1.6 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3c0-.7-.2-1.3-.6-1.8-.1-.1-.1-.1-.1-.1-.1-.1-.1-.3 0-.4s.3-.1.4.1c0-.1 0 0 0 0z",
			fill: "#fff",
			fillRule: "evenodd",
			key: 1
		}), e.createElement("path", {
			stroke: "none",
			clipRule: "evenodd",
			d: "m7.5 2.9c0-.1.1-.1.1-.1l1.4 1.5-1.4 1.4c0 .1-.1.1-.1 0z",
			fill: "#fff",
			fillRule: "evenodd",
			key: 2
		})])
	}
	o.displayName = "VideoReplay", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("g", {
			stroke: "none"
		}, [e.createElement("path", {
			d: "m11.2 4.1c-1.1-1.3-3-2.2-5-2.2-3.4 0-6.2 2.3-6.2 5.2 0 1.7.9 3.2 2.4 4.2l-.7 1.4s-.2.4.1.6c.3.3 1.1-.1 1.1-.1l2.4-.9c.3.1.6.1.9.1.7 0 1.5-.1 2.1-.3.5.2 1 .2 1.6.2h.6l2.1 1.5c.6.4.8.1.8-.4v-2.2c.9-.8 1.5-1.8 1.5-3 0-2-1.6-3.6-3.7-4.1zm-5.6 7.3h-.5-.2l-1.8.7.5-1.1-.7-.5c-1.3-.8-2-2-2-3.4 0-2.3 2.3-4.2 5.2-4.2 2.8 0 5.2 1.9 5.2 4.2s-2.4 4.3-5.2 4.3c-.2 0-.4 0-.5 0zm6.8-.8v1.2c0 .6-.1.4-.4.2l-1-.8c-.4.1-.8.1-1.2.1 1.5-1 2.5-2.5 2.5-4.2 0-.6-.1-1.1-.3-1.7 1.2.6 1.9 1.6 1.9 2.7 0 1-.5 1.9-1.5 2.5z",
			key: 0
		}), e.createElement("circle", {
			cx: "3.1",
			cy: "7.1",
			r: ".8",
			key: 1
		}), e.createElement("circle", {
			cx: "9.1",
			cy: "7.1",
			r: ".8",
			key: 2
		}), e.createElement("circle", {
			cx: "6.1",
			cy: "7.1",
			r: ".8",
			key: 3
		})]))
	}
	o.displayName = "WebChat", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, e.createElement("g", {
			stroke: "none"
		}, [e.createElement("path", {
			clipRule: "evenodd",
			d: "m6.1 1h-4.2c-.5 0-.9.4-.9.8v3.3c0 .5.4.9.9.9h4.3c.4 0 .8-.4.8-.8v-3.4c0-.4-.4-.8-.9-.8zm-.5 2h-3.2c-.2 0-.4-.2-.4-.5s.2-.5.4-.5h3.2c.2 0 .4.2.4.5s-.2.5-.4.5z",
			fillRule: "evenodd",
			key: 0
		}), e.createElement("path", {
			d: "m14.6 13h-14.2c-.2 0-.4.2-.4.4v.7c0 .2.2.4.4.4h14.1c.2 0 .4-.2.4-.4v-.7c.1-.2-.1-.4-.3-.4z",
			key: 1
		}), e.createElement("path", {
			clipRule: "evenodd",
			d: "m6.1 7h-4.2c-.5 0-.9.4-.9.8v3.3c0 .5.4.9.9.9h4.3c.4 0 .8-.4.8-.8v-3.4c0-.4-.4-.8-.9-.8zm-.5 2h-3.2c-.2 0-.4-.2-.4-.5s.2-.5.4-.5h3.2c.2 0 .4.2.4.5s-.2.5-.4.5z",
			fillRule: "evenodd",
			key: 2
		}), e.createElement("path", {
			clipRule: "evenodd",
			d: "m13.1 7h-4.2c-.5 0-.9.4-.9.8v3.3c0 .5.4.9.9.9h4.3c.5 0 .9-.4.9-.8v-3.4c-.1-.4-.5-.8-1-.8zm-.5 2h-3.2c-.2 0-.4-.2-.4-.5s.2-.5.4-.5h3.2c.2 0 .4.2.4.5s-.2.5-.4.5z",
			fillRule: "evenodd",
			key: 3
		})]))
	}
	o.displayName = "Wholesale", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	var e = i(1);

	function o(n) {
		return e.createElement("svg", n, [e.createElement("circle", {
			cx: "6.8",
			cy: "6.8",
			fill: "none",
			r: "5.5",
			strokeMiterlimit: "10",
			key: 0
		}), e.createElement("path", {
			d: "m10.8 10.9l3 2.9",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: "1.5",
			key: 1
		}), e.createElement("path", {
			d: "m4.1 6.8h5",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 2
		}), e.createElement("path", {
			d: "m6.8 9.1v-5",
			fill: "none",
			strokeLinecap: "round",
			strokeMiterlimit: "10",
			key: 3
		})])
	}
	o.displayName = "Zoom", o.defaultProps = {
		enableBackground: "new 0 0 15 15",
		viewBox: "0 0 15 15"
	}, n.exports = o, o.default = o
}, function (n, t, i) {
	n.exports = i.p + "6ce1f4f6d79353c5f24ee047a5132d77.jpg"
}, function (n, t, i) {
	n.exports = i.p + "a22e87039c3b8a568c95ceb8f0bc33f4.jpg"
}, function (n, t, i) {
	n.exports = i.p + "8ede428e01c6e3450cfac16576f2ecdf.png"
}, function (n, t, i) {
	n.exports = i.p + "85267dfc46571c8bbb4c6ec205974a66.png"
}, function (n, t, i) {
	n.exports = i.p + "5572d811a718f1b25b2528e1bbdd9aab.png"
}, function (n, t) {
	n.exports = {
		txt_shopee_brand: "Shopee Việt Nam",
		txt_best_deals_intro: "",
		txt_seller_highlight: "Shop Yêu Thích✔️",
		cats: {
			77: {
				intro: "Hàng trăm áo sơ mi nữ đẹp, áo croptop thời trang, đồ lót nữ chính hãng từ Triump; Sonkim mode; The Cosmo... Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			78: {
				intro: "Hàng ngàn sản phẩm Thời Trang Nam như Áo Thun Nam, Áo Sơ Mi Nam, Quần Tây, Áo Khoác, Áo Vest Nam,...từ Gucci, Calvin Klein với giá tốt. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			80: {
				intro: "Rất nhiều Phụ Kiện Thời Trang, Nón, Kính Mắt, Trang Sức Nữ đẹp, mẫu mã mới, giá hợp lý với ưu đãi hấp dẫn, giao hàng miễn phí & trả hàng - hoàn tiền đơn giản tại Shopee. Mua ngay!",
				intro_short: "0"
			},
			84: {
				intro: "Mua ngay Điện Thoại và Phụ Kiện Điện Thoại Nokia, Samsung, Sony, iPhone,... chính hãng, bảo hành uy tín, giá cực hấp dẫn, cùng với dịch vụ giao hàng tận nhà chuyên nghiệp, tận tình. Click mua ngay!",
				intro_short: "0"
			},
			87: {
				intro: "Rất nhiều Đồ Dùng Nhà Cửa & Đời Sống từ Lock&Lock, Sunhouse, Everon,... cao cấp, thiết kế đẹp, đa dạng kiểu dáng, giá cực ưu đãi. Giao hàng miễn phí, trả hàng dễ dàng. Mua ngay!",
				intro_short: "0"
			},
			91: {
				intro: "Hàng trăm Đồ Dùng Tiện Ích, Đồ Handmade, Đồ Điện Tử đa dạng, tiện lợi, chất liệu an toàn, giá tốt. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. Đảm Bảo Nhận Hàng hoặc Hoàn Lại Tiền. MUA NGAY!",
				intro_short: "0"
			},
			160: {
				intro: "Rất nhiều Mỹ Phẩm Trang Điểm, Chăm Sóc Da & Sức Khỏe từ 3CE, MAC, Tomford,... cao cấp, chính hãng, giá ưu đãi. Miễn phí giao hàng, trả hàng đơn giản, tư vấn miễn phí bởi Shop. XEM NGAY!",
				intro_short: "0"
			},
			161: {
				intro: "Nhiều giày thể thao nữ, giày cao gót đế vuông chính hãng từ Bitis; Juno; Tuvis. Mẫu Mã Mới Cập Nhật Liên Tục ☑️ Giá Tốt Tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			162: {
				intro: "Rất nhiều Túi, Ví Nữ thời trang, mẫu mã mới, đẹp, đa dạng, cập nhập liên tục. giá hấp dẫn. Cùng trải nghiệm dịch vụ giao hàng tận nơi, chuyên nghiệp và chính sách trả hàng - hoàn tiền uy tín của Shopee. Mua ngay!",
				intro_short: "0"
			},
			163: {
				intro: "Rất nhiều Sản Phẩm Mẹ Và Bé như Tã và Bỉm, Sữa, Nôi, Dịu Trẻ Em,..hàng chính hãng đảm bảo chất lượng với giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			312: {
				intro: "Hàng trăm Sản Phẩm Tiện Ích, Phụ Kiện Thời Trang, Sản Phẩm Chăm Sóc Sức Khỏe Và Làm Đẹp với giá ưu đãi tại Shopee. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			314: {
				intro: "Rất nhiều Phụ Kiện & Dụng Cụ Tiện Ích Nhà Cửa như Hũ, Chai, Dung Dịch Vệ Sinh Nhà Cửa,... chất lượng cao, giá tốt. Miễn phí vận chuyển, thanh toán linh hoạt, nhiều ưu đãi. XEM NGAY!",
				intro_short: "0"
			},
			320: {
				intro: "Mua ngay Dầu Nóng, Kem Dưỡng Đặc Trị Thâm Mắt, Trắng Da, Mờ Nám,...an toàn hiệu quả từ các thương hiệu Siang Pure Relief, HoangZN,...giá ưu đãi. Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			1871: {
				intro: "Nhiều áo thun nữ hàn quốc, áo thun nữ trơn, áo kiểu nữ, áo croptop công sở cao cấp, mẫu mã mới 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			1875: {
				intro: "Nhiều áo khoác nữ adidas, áo khoác bomber nữ, áo khoác nữ chống nắng mẫu mới, áo khoác nữ 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			1877: {
				intro: "Rất nhiều Quần Short, Quần Jeans, Legging, Quần Yếm Nữ, kiểu dáng thời trang, chính hãng từ Zara, Uni, Zmicc, H&C, Levis,...Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY",
				intro_short: "0"
			},
			1879: {
				intro: "Nhanh tay sắm ngay những bộ Đồ Lót, Đồ Ngủ, Đồ Mặc Nhà Thời Trang, Gợi Cảm cho phái đẹp tại Shopee.vn cùng mức giá hấp dẫn, dịch vụ giao hàng tận nhà nhanh chóng tiện lợi. Click mua ngay!",
				intro_short: "0"
			},
			1881: {
				intro: "Bộ sưu tập bikini nữ thời trang, đồ bơi nữ hai mảnh cao cấp, đồ bơi nữ kín đáo mẫu mới 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			1885: {
				intro: "Có rất nhiều mẫu Trang Sức mới, kiểu dáng sang trọng như lắc tay, nhẫn đính đá, vòng cổ,...giá cực hấp dẫn. Shopee.vn hỗ trợ giao hàng tận nơi toàn quốc.",
				intro_short: "0"
			},
			1889: {
				intro: "Sắm ngay một chiếc Kính Mắt thời trang, cá tính vừa giúp bảo vệ đôi mắt, vừa giúp thể hiện bản thân. Chọn mua Kính Mắt tại Shopee.vn để nhận ngay được những ưu đãi hấp dẫn cùng dịch vụ bán hàng chuyên nghiệp. MUA NGAY!",
				intro_short: "0"
			},
			1891: {
				intro: "Rất nhiều Mũ Lưỡi Trai, Mũ Len, Nón Rộng Vành,..kiểu dáng thời trang, đa dạng màu sắc. Shopee giao hàng miễn phi, thanh toán linh hoạt. MUA NGAY!",
				intro_short: "0"
			},
			1893: {
				intro: "Rất nhiều mặt hàng Khăn, Tất Và Găng Tay chất lượng từ các thương hiệu Velvet, HM, Muji,...giá cực ưu dãi. Chat ngay với Shop để được tư vấn tận tình!",
				intro_short: "0"
			},
			1899: {
				intro: "Thêm vào tủ quần áo của bạn những chiếc Quần Nam cá tính, dễ dàng kết hợp để tạo thành những bộ trang phục mang đậm phong cách. Cùng đến với Shopee.vn để chọn ngay những chiếc Quần Nam giá hấp dẫn cùng dịch vụ giao hàng chuyên nghiệp. Mua ngay!",
				intro_short: "0"
			},
			1913: {
				intro: "Rất nhiều Kem Nền, Phấn Nền, Phấn Nước, Kem Lót, Má Hồng,... từ Innisfree, The Face Shop, Maybelline,... chính hãng, giao hàng tận nơi, Shopee bảo đảm chất lượng! Xem ngay!",
				intro_short: "0"
			},
			1915: {
				intro: "Tìm mua ngay những Sản Phẩm Chăm Sóc Tóc hiệu quả, an toàn đến từ các thương hiệu lớn như Dove, Sunsilk, Tresemme,...tại Shopee.vn với giá thành ưu đãi, dịch vụ giao hàng tận nhà an toàn chu đáo. Click ngay!",
				intro_short: "0"
			},
			1917: {
				intro: "Đa dạng các dòng Nước Hoa Nam Nữ, Xịt Thơm Toàn Thân chính hãng từ Chanel, Versace, Lancome,...cao cấp, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			1919: {
				intro: "Rất nhiều Máy Chăm Sóc Da, Dụng Cụ Trang Điểm, Dụng Cụ Làm Móng cao cấp, chính hãng từ Sigma, Zoeve, Morphe, Real Techniques,...giá tốt. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			1921: {
				intro: "Bổ sung ngay những Thực Phẩm Chức Năng giúp giảm cân, bổ sung Vitamin C, B2 giúp tăng cường sức khỏe. Truy cập Shopee.vn để mua hàng với giá tốt, dịch vụ giao hàng, trả hàng tiện lợi. Click mua ngay!",
				intro_short: "0"
			},
			1923: {
				intro: "Rất nhiều sản phẩm Chăm Sóc Cho Nam Giới, Mỹ Phẩm Nam Giới từ Romano, Nivea, GIlete,...giá cực ưu đãi. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền.XEM NGAY!",
				intro_short: "0"
			},
			1927: {
				intro: "Bộ sưu tập giày cao gót đẹp, giày cao gót trong suốt, giày cao gót Juno chính hãng 2018, mẫu mới cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			1929: {
				intro: "Nhiều giày thể thao nữ chính hãng, cao cấp từ các thương hiệu Adidas, Nike. Mẫu mã mới 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			1931: {
				intro: "Rất nhiều Giày Bốt Da, Bốt Nhung từ Gosto, Senta,... êm chân, tôn dáng với giá cực hấp dẫn, giao hàng miễn phí, trả hàng - hoàn tiền uy tín. Chat với nhà bán hàng để được tư vấn. Xem ngay!",
				intro_short: "0"
			},
			1933: {
				intro: "Hàng trăm mẫu Giày Đế Bằng mẫu mới, êm ái, kiểu dáng trẻ trung với giày lười, giày slipon, giày búp bê, giá siêu hấp dẫn. Chat trực tiếp với Shopee được tư vấn tận tình. Xem ngay!",
				intro_short: "0"
			},
			1935: {
				intro: "Rất nhiều Sandal Quai Ngang, Quai Chéo, Sandal Bánh Mì, Sandal Xỏ Ngón với kiểu dáng thời trang, cá tính, bền đẹp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			1979: {
				intro: "Hàng trăm mẫu Điện Thoại Phím Bấm, Điện Thoại Thông Minh, từ các thương hiệu nổi tiếng như Sony. Samsung, Xiaomi, Nokia,...với giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			1981: {
				intro: "Rất nhiều Pin Gắn Trong Điện Thoại, Pin Dự Phòng, Bộ Sạc Điện Thoại chính hãng Samsung, Xiaomi, Pisen, Sony,.. giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng MIễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			1985: {
				intro: "Nhiều ốp lưng iphone 7 plus cao cấp, ốp lưng oppo f5 thời trang, ốp lưng iphone x, ốp lưng note 8 chất lượng cao. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			1997: {
				intro: "Trang bị cho tổ ấm của bạn những bộ Đồ Dùng Nhà Bếp & Phòng Ăn cao cấp, tiện nghi cùng giá thành hợp lý, dịch vụ giao hàng tận nhà tiện ích chỉ có ở Shopee.vn. Nhanh tay mua hàng để nhận được ưu đãi khủng!",
				intro_short: "0"
			},
			1999: {
				intro: "Chọn ngay Bộ Chăn Ga Gối Nệm cao cấp từ các nhã hiệu lớn, nổi tiếng như KyDan, Sông Hồng, Everon, Poly,...với giá cực ưu đãi tại Shopee. Shopee Đảm Bảo Nhạn Hàng, Hoặc Tả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			2001: {
				intro: "Rất nhiều Đồ Nội Thất Phòng Ngủ, Nội Thất Phòng Bếp,...cao cấp, kiểu dáng sang trọng. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY",
				intro_short: "0"
			},
			2003: {
				intro: "Nhiều mẫu Đồ Dùng Trang Trí Nhà Cửa, Decal gián tường, Tranh Treo Tường, Hoa Giả đẹp đang được phân phối tại Shopee.vn với giá tốt. Xem Ngay!",
				intro_short: "0"
			},
			2007: {
				intro: "Trang bị cho không gian nhà tắm của bạn những bộ Đồ Dùng Phòng Tắm cao cấp, đa dạng như kệ để đồ, khăn tắm, gương phòng tắm với giá hấp dẫn tại Shopee.vn cùng với dịch vụ giao hàng tận nhà tiện lợi. Nhanh tay chọn mua ngay!",
				intro_short: "0"
			},
			2334: {
				intro: "Nhiều mẫu jumpsuit thời trang, jumpsuit ngắn, jumpsuit lửng mẫu mới 2018, chất liệu cao cấp, cập nhật hàng liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			2335: {
				intro: "Rất nhiều Đồ Đôi Cho Người Yêu, Đồ Đôi Mẹ & Bé đẹp, dễ thương, cá tính với mức giá ưu đãi chỉ có tại Shopee.vn. Shopee còn có dịch vụ giao hàng miễn phí, chính sách trả hàng - hoàn tiền uy tín. Mua ngay!",
				intro_short: "0"
			},
			2336: {
				intro: "Hàng trăm mẫu Phụ Kiện Tóc xinh xắn, cá tính giúp bạn trở nên thu hút trong mắt người đối diện.  Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			2337: {
				intro: "Rất nhiều mẫu Hình Xăm Giả mới lạ, hợp thời, có cả Hình Xăm Nam và Hình Xăm Cho Nữ đầy phong cách. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí. XEM NGAY! ",
				intro_short: "0"
			},
			2339: {
				intro: "Nhiều son môi hàn quốc chất lượng cao, son môi 3ce đẹp, son môi mac chính hãng, màu mới 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			2340: {
				intro: "Eyeliner, Mascara, Chì Kẻ Lông Mày,... chính hãng từ The Face Shop, Innisfree, NARS, NUDES, Maybeline,... giá cực hấp dẫn, giao hàng tận nơi tại Shopee. Xem ngay!",
				intro_short: "0"
			},
			2341: {
				intro: "Rất nhiều Sữa Rửa Mặt, Kem Dưỡng Da, Serum, Mặt Nạ,... từ Laneign, Timeless, Muji, Innisfree,... đảm bảo chính hãng bởi Shopee, giá cạnh tranh, nhiều ưu đãi, vận chuyển tận nơi COD. Mua ngay!",
				intro_short: "0"
			},
			2346: {
				intro: "Rất nhiều Áo Bé Trai, Set Đồ Bé Trai, Quần Áo Bé Trai, Giày Bé Trai cao cấp, kiểu dáng xinh xắn, gá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			2348: {
				intro: "Rất nhiều Sữa Bột cho bé, Ngũ Cốc, Bột Ăn Dặm từ Nestle', Vinamilk, Similac,.. chính hãng, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí, nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			2349: {
				intro: "Rất nhiều loại Tã Quần, Tã Dán, Miếng Lót Tã từ Bobby, Huggies, Merries, MamyPoko, Pampers,... chính hãng, êm dịu cho bé với giá ưu đãi sốc. Giao hàng miễn phí, Shopee đảm bảo chất lượng. Mua ngay!",
				intro_short: "0"
			},
			2350: {
				intro: "Rất nhiều Phụ Kiện Bảo Vệ Bé nhà bạn như Xe Tập Đi, Xe Đẩy Trẻ Em, Nôi Trẻ Em,  Địu Trẻ Em từ các thương hiệu Combi, Chicco,...giá cực kỳ ưu đãi. Chat ngay với Shop để được tư vấn tận tình nhé!. XEM NGAY!",
				intro_short: "0"
			},
			2351: {
				intro: "Sắm ngay cho bé những bộ Quần Áo Và Phụ Kiện Trẻ Sơ Sinh với mẫu mã đa dạng từ các thương hiệu lớn tại Shopee.vn. Bên cạnh đó, Shopee sẽ cung cấp dịch vụ giao hàng tận nhà, trả hàng hoàn tiền tiện lợi. Click mua ngay!",
				intro_short: "0"
			},
			2352: {
				intro: "Hàng ngàn Đồ Dùng Cho Bé, Tã Bỉm, Bình Sữa, Ghế Ngồi Cho Bé,... từ Chicco, Pigeon, NUK,... chính hãng với giá siêu hấp dẫn. Giao hàng miễn phí. Mua ngay!",
				intro_short: "0"
			},
			2353: {
				intro: "Hàng trăm Thiết Bị Điện Gia Dụng đến từ những thương hiệu nổi tiếng như Phillips,Raden, Comet,...với giá cực kỳ hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			2354: {
				intro: "Rất nhiều Dụng Cụ và Thiết Bị Điện như Ổ Cắm Điện, Đèn, Phích Cắm Điện,..chính hãng từ Điện Quang, Samsung.Shopee Giao Hàng Miễn Phí, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			2355: {
				intro: "Rất nhiều sản phẩm Đồ Gia Dụng đến từ các thương hiệu lớn như Sharp, Toshiba, Sanaky,...hàng chính hãng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. Mua ngay kẻo lỡ!",
				intro_short: "0"
			},
			2356: {
				intro: "Rất nhiều Quạt, Máy Nóng Lạnh từ nhiều thương hiệu nổi tiếng như Sharp, Hitachi, HItor,... giá tốt, bảo hành uy tín. Chat trực tiếp với Shopee để được tư vấn nhé!",
				intro_short: "0"
			},
			2358: {
				intro: "Rất nhiều máy hút bụi gia đình, máy hút bụi công nghiệp công suất lớn, giá cực rẻ từ Hitachi, HiClean tại Shopee.vn. Giao hàng miễn phí toàn quốc. Xem ngay!",
				intro_short: "0"
			},
			2359: {
				intro: "Rất nhiều Dụng Cụ Vệ Sinh, Ổ Cắm Điện , Hộp Đựng Đồ, Móc Treo tiện ích, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí, nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			2360: {
				intro: "Hàng trăm loại bột giặt, chất tẩy rửa và nước rửa chén an toàn, hiệu quả giá rẻ đang khuyến mãi tại Shopee. Giao hàng miễn phí, nhanh chóng toàn quốc. Mua ngay!",
				intro_short: "0"
			},
			2365: {
				intro: "Rất nhiều Tai Nghe Bluetooth, Thiết Bị Âm Thanh, Phụ Kiện chính hãng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			2371: {
				intro: "Rất nhiều Loa, Micro, Thiết bị Âm Thanh từ Remax, Sony, Soundmax,... chính hãng, cao cấp, giá cực ưu đãi, giao hàng tận nơi, bảo hành uy tín, thanh toán COD. MUA NGAY!",
				intro_short: "0"
			},
			2381: {
				intro: "Rất nhiều Quần Áo, Đầm Váy & Phụ Kiện Thời Trang Bé Gái đẹp, xinh xắn, đa dạng mẫu mã, giá cực ưu đãi, giao hàng miễn phí, trả hàng dễ dàng với Shopee. Xem ngay!",
				intro_short: "0"
			},
			2403: {
				intro: "Rất nhiều loại Gậy Chụp Hình, Chân Máy Ảnh, Tripob từ Benro, Yunteng,... chắc chắn, dễ sử dụng với giá cực ưu đãi, giao hàng nhanh chóng, Shopee đảm bảo chất lượng. Mua ngay!",
				intro_short: "0"
			},
			2429: {
				intro: "Nhiều giày lười nam, dép nam, giày thể thao nam chính hãng từ Bitis; Converse...cập nhật mẫu mới liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			2431: {
				intro: "Nhiều giầy thể thao nam đẹp, giày chạy bộ, giày nike nam, giầy thể thao nam adidas mẫu mới 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			2432: {
				intro: "Nhiều giày lười nam đẹp, giày lười nam hàn quốc 2018 giày lười nam cao cấp, mẫu mới cập nhật liên tục mỗi ngày. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			2434: {
				intro: "Truy cập Shopee.vn và sắm ngay một đôi Giày Tây Nam thời trang, đẳng cấp với mức giá ưu đãi,. Shopee sẽ đảm bảo giao hàng tận nhà bạn nhanh chóng và luôn giải đáp thắc mắc khách hàng liên tục. MUA NGAY!",
				intro_short: "0"
			},
			2435: {
				intro: "Hàng trăm mẫu Dép Thời Trang, Dép Quai Ngang, Dép Bít Đầu,...từ các thương hiệu nổi tiếng như Adidas, Supreme, Biti's,...giá vô cùng hấp dẫn. Chat ngay với Shop để được tư vấn tận tình!",
				intro_short: "0"
			},
			2436: {
				intro: "Nhanh tay mua ngay những đôi Sandal cá tính dễ dàng kết hợp được với những bộ trang phục ấn tượng chỉ có tại trang Shopee.vn. Bên cạnh đó còn có dịch vụ giao hàng tận nhà, trả hàng và hoàn tiền tiện lợi của Shopee. Click mua ngay!",
				intro_short: "0"
			},
			2802: {
				intro: "Hàng trăm Miếng Dán Màn Hình Điện Thoại, Miếng Dán Cường Lực đa dạng và phù hợp với nhiều dòng điện thoại, giá tốt. Chat ngay với người bán trên Shopee để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			2803: {
				intro: "Rất nhiều Sim Điện Thoại, Sim 3G, Sim 4G, Phụ Kiện Điện Thoại Tiện Ích, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			2804: {
				intro: "Rất nhiều Quần Áo, Vitamin & Đồ Dùng Chăm Sóc Mẹ cao cấp, an toàn, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, nhanh chóng, Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			2805: {
				intro: "Hàng trăm máy lọc nước, máy giặt Toshiba, Sanyo, LG, Kangaroo,... giá sốc tại Shopee. Giao hàng miễn phí nhanh chóng toàn quốc, thanh toàn linh hoạt. Click ngay!",
				intro_short: "0"
			},
			2806: {
				intro: "Hàng trăm Tủ Đựng Và Hộp Lưu Trữ Đa Năng với kiểu dáng hiện đại, tiện ích, chất liệu cao cấp. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			2809: {
				intro: "Mua Dụng Cụ Làm Vườn, Hạt Giống, Đồ Ngoại Thất tiện ích, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Thanh Toán Lính Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			2811: {
				intro: "Hàng trăm mẫu Đèn Bàn, Đèn Trang Trí Tường, Đèn Trần ấn tượng, công suất mạnh mẽ cùng giá ưu đãi đang được bán tại Shopee.vn. Bạn hãy nhanh tay chọn Shopee để được trải nghiệm kênh mua sắm trực tuyến hiện đại cùng những dịch vụ tiện ích. Click ngay!",
				intro_short: "0"
			},
			2817: {
				intro: "Nhiều pin sạc dự phòng xiaomi mẫu mới, pin sạc Rosmoss chất lượng cao, pin sạc dự phòng anker chính hãng, cao cấp, dung lượng lớn ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			2818: {
				intro: "Rất nhiều sữa tắm, xịt khử mùi, tẩy tế bào chết cơ thể,... từ Nivea, Hazeline, Dove,... dưỡng da hiệu quả, giá tốt với giá cực hấp dẫn, giao hàng miễn phí. Xem ngay!",
				intro_short: "0"
			},
			2820: {
				intro: "Các Dụng Cụ Chăm Sóc Móng như Sơn Móng, Móng Giả, Kiềm Cắt Móng,...hàng chính hãng, an toàn cho quá trình sử dụng. Chat ngay với Shop để dược tư vấn tận tình! XEM NGAY!",
				intro_short: "0"
			},
			2821: {
				intro: "Rất nhiều Đầm Dự Tiệc, Đầm Ôm, Đầm Dáng Suông kiểu dáng thời trang, vải tốt, thoáng mát, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			2822: {
				intro: "Nhiều chân váy dài, chân váy ngắn, chân váy chữ A mẫu mã đẹp, chân váy bút chì mẫu mới 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			2823: {
				intro: "Rất nhiều mẫu Trang Phục Thể Thao như áo tập gym, quần short thể thao,... Shopee giao hàng tận nơi, chat ngay với Shop để được tư vấn tận tình!",
				intro_short: "0"
			},
			2827: {
				intro: "Hàng trăm áo thun nam đẹp 2018, áo thun nam tay dài, áo thun nam adidas cao cấp, mẫu mới cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			2828: {
				intro: "Nhiều áo sơ mi nam họa tiết, áo sơ mi nam owen cao cấp, áo sơ mi nam công sở mẫu mới 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			2829: {
				intro: "Hàng trăm áo khoác nam đẹp, áo khoác nam bomber cao cấp, mẫu mới cập nhật liên tục từ các thương hiệu Nike, Adidas. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			2831: {
				intro: "Hàng trăm Dây Lưng Nam, Mũ Nón, Tất, Cà Vạt, Phụ Kiện Trang Sức Nam,..từ Loveless, Supreme, Adidas,..chính hãng, cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			6001: {
				intro: "Hàng trăm mẫu Đầm Nữ, Đầm Xòe, Đầm Ôm Body từ Enati, Poxi, Greda, Chiko,.. kiểu dáng trẻ trung, màu sắc tao nhã, vải thoáng mát. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			6002: {
				intro: "Rất nhiều Chân Váy Đuôi Cá, Quần Giả Váy kiểu đáng thời trang, vải đẹp, thoàng mát. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			6003: {
				intro: "Hàng trăm mẫu Đồ Thể Thao Nữ, Bra Thể Thao Nữ chính hãng từ Nike, Adidas, Elisa Fashion,.. giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Trả Hàng Hoàn Tiền đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			6006: {
				intro: "Hàng trăm Áo Thun Ngắn Tay, Áo Thun Dài Tay với chất liệu vải thoáng mát, kiểu dáng thời trang, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			6007: {
				intro: "Chọ ngay Áo Sơ Mi Nam Cổ Tàu, Áo Sơ Mi Nam Cổ Bẻ kiểu dáng thời trang, sang trọng, lịch lãm, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Tiện Lợi. MUA NGAY! ",
				intro_short: "0"
			},
			6008: {
				intro: "Rất nhiều mẫu Áo Khoác Nam thời trang, mẫu mới, xu hướng 2018, khuyến mãi cực sốc, giao hàng tận nơi, dễ dàng trả hàng - hoàn tiền. Chat với shop để được tư vấn. Xem ngay!",
				intro_short: "0"
			},
			6010: {
				intro: "Rất nhiều mẫu Đồ Lót Nam, Lót Giày Nam, Tất, Vớ Nam, chất liệu cao cấp, thoáng mát. Chat ngay với Shop để được tư vấn rận tình. Shopee Giao Hàng Miễn Phí. CLICK MUA NGAY!",
				intro_short: "0"
			},
			6027: {
				intro: "Hàng trăm Hình Xăm Truyền Thống, Hình Xăm Màu độc đáo, nhiều họa tiết thú vị, giá cực ưu đãi tại Shopee. Chat ngya với Shop để được tư vấn tận tình, trả hàng hoàn tiền. MUA NGAY!",
				intro_short: "0"
			},
			6028: {
				intro: "Rất nhiều Băng Độ, Kẹp Tóc đẹp, dễ thương, đa dạng mẫu mã với giá siêu hấp dẫn, giao hàng tận nơi miễn phí. Chat với chủ shop để được giải đáp mọi thắc mắc. Mua ngay!",
				intro_short: "0"
			},
			6029: {
				intro: "Rất nhiều Phụ Kiện Thời Trang Nữ, Vớ Nữ, Găng Tay Nữ, Khăn Choàng,... đẹp, thời trang, mẫu mới, giá ưu đãi. Miễn phí vận chuyển, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			6030: {
				intro: "Rất nhiều Phụ Kiện Thời Trang, Dù Thời Trang, Mũ Nồi,... đẹp, cập nhật mẫu mới liên tục, ưu đãi sốc. Giao hàng miễn phí, trả hàng đơn giản, thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			6031: {
				intro: "Chọn ngay Kinh Cận, Phụ Kiện Kính Mắt, Túi Đựng Mắt Kính cao cấp, tiện lợi từ Rayban, Charming Charlie, Porshe,…giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			6033: {
				intro: "Rất nhiều Khuyên Tai, Nhẫn từ bạc, hoặc hợp kim không gỉ, nhiều kích cỡ, khắc tên theo yêu cầu. Chat ngay với Shop để được tư vấn tận tình,Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			6036: {
				intro: "Rất nhiều mẫu Xăng Đan Nữ đẹp, thời trang, mẫu mới 2018, đa dạng kiểu dáng. Giao hàng miễn phí, trả hàng đơn giản, tư vấn bởi Shop. MUA NGAY!",
				intro_short: "0"
			},
			6042: {
				intro: "Rất nhiều Dép Xỏ Ngón Nam Dép Đi Trong Nhà từ Doctor, Vento, Easy Life,..chính hãng, giá tốt. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			6043: {
				intro: "Hàng trăm mẫu Sandal Nam với chất liệu da và vải cao cấp, sangg trọng, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			6044: {
				intro: "Rất nhiều Giày Tây đẹp, thời trang, đa dạng mẫu mã, thanh lịch. Giao hàng tận nơi miễn phí, trả hàng đơn giản, thanh toán COD linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			6046: {
				intro: "Nhiều mẫu Giày Lười Nam như Giày Lười Da, Giày Lười Vải, Giày Lười Tăng Chiều Cao với chất liệu cao cấp, bền đẹp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			6047: {
				intro: "Rất nhiều Giày Thể Thao Vải, Giày Thể Thao Da, Lót Giày cao cấp chinh hãng từ Converse, Puma, Reebok, Asics, Christina - Q...giá tốt. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			6051: {
				intro: "Rất nhiều Quần Nam Thời Trang, Quần Tây Nam, Quần Lót Nam ",
				intro_short: "0"
			},
			6061: {
				intro: "Rất nhiều Ổ Cắm Điện, Bộ Công Tắc, Đồ Điện Chăm Sóc Cá Nhân,...cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			6062: {
				intro: "Hàng trăm Đồ Gia Dụng Nhà Bếp: Tủ Lạnh, Bếp Điện, Máy Bơm Điện,...giá cực ưu đãi. Shopee Giao Hàng Miễn Phí,Thanh Toán Linh Hoạt, Trả Hàng Hoàn Tiền Tiện Lợi. XEM NGAY!",
				intro_short: "0"
			},
			6063: {
				intro: "Hàng trăm Máy Làm Sạch Vết Bẩn, Máy Hút Bụi cao cấp, thiết kế tiện ích, hiện đại, giá tốt. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			6065: {
				intro: "Rất nhiều Sản Phẩm Tiện Ích như Quạt Mini, Máy Sấy Tóc, Máy Làm Mát Không Khí, ...từ Toshiba, Panasonic, Nova,...chính hãng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Tận Nơi, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			6066: {
				intro: "Rất nhiều Đồ Gia Dụng Nhà Bếp, Nồi Cơm, Máy Xay,... từ Sunhouse, Philips, Panasonic,... nhiều dòng, công suất lớn, bền bỉ, tiết kiệm điện, dễ sử dụng, bảo hành uy tín, giao hàng miễn phí. Mua ngay!",
				intro_short: "0"
			},
			6068: {
				intro: "Rất nhiều Tủ Giày, Thảm Lót, Ghế Lười , Thảm Lót Sàn với chất liệu cao cấp, thiết kế tiện lợi, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			6069: {
				intro: "Hàng trăm Đèn Xông Tinh Dầu, Đèn Led, Đèn Nháy,..với nhiều kiểu dáng, thiết kế độc đáo, giá tốt. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			6071: {
				intro: "Hàng trăm Vật Dụng Làm Vườn, Đồ Dùng Ngoài Trời đa dạng, thiết kế tiện lợi, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			6074: {
				intro: "Hàng trăm Súng Bắn Keo, Phụ Kiện Nhà Bếp tiện ích, cao cấp, giá cực ưu đãi tại Shopee. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			6075: {
				intro: "Hàng trăm Sản Phẩm Giữ Vệ Sinh Phòng Tắm, Vệ Sinh Máy Giặt, cao cấp, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY! ",
				intro_short: "0"
			},
			6076: {
				intro: "Rất nhiều Túi Đựng Đồ, Hộp Đựng Đồ, Hộp Đựng Giày nhiều kích cỡ, chất lượng cao, bền bỉ, giá cực ưu đãi, giao hàng tận nơi miễn phí, trả hàng đơn giản. Mua ngay!",
				intro_short: "0"
			},
			6077: {
				intro: "Rất nhiều mẫu Chăn Nệm, Túi Ngủ Văn Phòng, với chất liệu êm ái, hàng cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Tận Nơi, Miễn Phí. XE,M NGAY!",
				intro_short: "0"
			},
			6078: {
				intro: "Rất nhiều Phụ Kiện Trang Trí Bàn, Phụ Kiện Trang Trí cao cấp, giá tốt. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY! ",
				intro_short: "0"
			},
			6079: {
				intro: "Rất nhiều Phụ Kiện Nhà Bếp, Phụ Kiện Phòng Ăn cao cấp, tiện lợi, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			6081: {
				intro: "Hàng trăm Áo Ngực Bầu, Quần Lót Bầu với chất liệu cao cấp, tiện ích cho mẹ, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			6084: {
				intro: "Rất nhiều Đồ Ăn Cho Bé, Bột, Bánh Ăn Dặm từ Meiji, Ridielac, Gerber, Mug,..nhiều dĩnh dưỡng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí.XEM NGAY!",
				intro_short: "0"
			},
			6085: {
				intro: "Rất nhiều loại Tã Bỉm, Sản Phẩm Chăm Sóc Cơ Thể Bé, thành phần an toàn, dịu nhẹ. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			6086: {
				intro: "Rất nhiều Mũ Trẻ Em, Khăn Cho Bé, Tất Trẻ Em chất liệu cao cấp, giữ ấm tốt, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			6088: {
				intro: "Chọn Quần Áo Cho Bé Trai với kiểu dáng thời trang, đáng yêu, vải cotton, vải nỉ, len cao cấp, dễ giặt ủi. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			6089: {
				intro: "Nhiều mẫu Đồ Thời Trang Bé Gái: Đồ Bộ Bé Gái, Đầm Váy Cho Bé Gái,...với chất liệu vải thoáng mát, sang trọng, cao cấp. Shopee Giao Hàng Miễn Phí, Hoặc  Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			6098: {
				intro: "Rất nhiều Sim Điện Thoại số đẹp, và Thẻ Cảo Điện Thoài từ các nhà mạng Viettel, Vinaphone, Mobifone, Vietnamobile với giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			6099: {
				intro: "Rất nhiều Miếng Dán Điện Thoại, Miếng Dán Cường Lực chất lượng cao, chống trầy xước, giá cực ưu đãi, dễ sử dụng. Miễn phí vận chuyển, trả hàng đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			6101: {
				intro: "Hàng Trăm Dòng Điện Thoại Thông Minh từ các thương hiệu như Nokia, Phillips, Land Rovers,... chính hãng, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng.MUA NGAY!",
				intro_short: "0"
			},
			6102: {
				intro: "Rất nhiều Pin Sạc Dự Phòng Vỏ Nhựa & Kim Loại, đa dạng mẫu mã kiểu dáng, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			6103: {
				intro: "Chọn ngay những mẫu Phụ Kiện Điện Thoại như: Lens Điện Thoại, Gậy Chụp Hình, Đèn Led Flash,...hành chính hãng, giá cực ưu đãi. Chat ngay vơi Shopee để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			6104: {
				intro: "Hàng trăm Cốc Sạc, Cáp Sạc, Đầu Đọc Thẻ Nhớ hàng chính hãng, cao cấp, giá cực ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			6107: {
				intro: "Rất nhiều Túi Chống Nước, Nút Che Bụi Tai Nghe, Dây Đeo Điện Thoại, Bao Da với chất liệu cao cấp, thiết kế đẹp, giá tốt. Chta ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			6122: {
				intro: "Chọn ngay Đồ Bơi Hai Mảnh, Đồ Bơi Một Mảnh chất liệu thun cao cấp, co giãn 4 chiều, với giá tốt tại Shopee. Giao Hàng Miễn Phí, Nhanh Chóng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			6123: {
				intro: "Rất nhiều Quần Mặc Trong Váy, Miếng Dán Ngực, Đồ Bộ dành cho nữ, với kiểu dáng và thiết kế tiện lợi, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			6124: {
				intro: "Rất nhiều Áo Sơ Mi Đôi, Đồ Đôi Đi Biển, Áo Thun Đôi kiểu dáng thời trang, trẻ trung, giá ưu đãi. Shopee đảm bảo nhận hàng, thanh toán linh hoạt, trả hàng hoàn tiền. MUA NGAY!",
				intro_short: "0"
			},
			6125: {
				intro: "Rất nhiều Đồ Bộ & Jumpsuit Nữ đẹp, mẫu mới, chất vải tốt, sang trọng, giá cực ưu đãi. Giao hàng tận nơi miễn phí, trả hàng nhanh chóng. Xem ngay!",
				intro_short: "0"
			},
			6126: {
				intro: "Rất nhiều Quần Leggind, Quần Jogger, Quần Culottes,... đẹp, mẫu mới, đa dạng kích thước, ưu đãi hấp dẫn. Miễn phí vận chuyển, tư vấn miễn phí bởi shop. MUA NGAY!",
				intro_short: "0"
			},
			6127: {
				intro: "Rất nhiều Áo Khoác Nữ, Áo Phao, Áo Dạ đẹp, thời trang, mẫu mới 2018 giá cực ưu đãi. Giao hàng tận nơi miễn phí, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			6129: {
				intro: "Rất nhiều mẫu Áo Thun Nữ, Áo Sơ Mi Nữ, Áo Khoác Nữ,...chất liệu cao cấp, thoáng mát, vải nỉ, bông, len, kiểu dáng thời trang. Shopee Giao Hàng Tận Nơi, Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			6130: {
				intro: "Rất nhiều Hóa Mỹ Phẩm, Dụng Cụ Làm Đẹp Cao Cấp, Tiện Ích, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			6131: {
				intro: "Rất nhiều Sơn Móng Tay với màu sơn đẹp, độc lạ cùng nhiều Sản Phẩm Chăm Sóc Móng từ Essie, Sally, Hansen,.. với giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			6132: {
				intro: "Rất nhiều dòng Nước Hoa Cho Nam, Cho Nữ từ Chanel, Dior, Versace, Gucci,... chính hãng với giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			6133: {
				intro: "Rất nhiều Khay, Kệ Mỹ Phẩm, Gương Trang Điểm, Bông Tẩy Trang,.. cao cấp, giá ưu đãi. Chat ngay với Shop để đươc tư vấn tận tình, Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			6135: {
				intro: "Nhanh tay chọn ngay những Sản Phẩm Chăm Sóc Cơ Thể, Sản Phẩm Chăm Sóc Da, Kem Tẩy Lông, Trị Mụn,...hàng chất lượng, hiệu quả, an toàn. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			6136: {
				intro: "Rất nhiều Dầu Gội, Dầu Xả, Máy Làm Tóc Tại Nhà cao cấp, tiện lợi, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			6137: {
				intro: "Hàng trăm Nhũ Mắt, Khuôn Kẻ Chân Mày, Lông Mi Giả cao cấp, tụ nhiên, đẹp, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Thanh Toán Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			6138: {
				intro: "Rất nhiều Mỹ Phẩm Trang Điểm từ Innisfree, Shiseido, Maybelline,... chính hãng, phù hợp nhiều loại da, giá cực ưu đãi. Miễn phí vận chuyển, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			6139: {
				intro: "Rất nhiều Sản Phẩm Chăm Sóc Da: Kem Đặc Trị,  Kem Dưỡng Da, Mặt  Nạ Chăm Sóc Da từ Ohui, Innisfree, Laneige,... chính hãng, hiệu quả. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			6140: {
				intro: "Hàng trăm Son Kem, Son Dưỡng từ Bourjois, Peripera, Clinique, Laneige,.. chính hãng, giá cực ưu đãi. Shopee Đảm Bảo Nhận Nhàng, Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8535: {
				intro: "Hàng trăm dòng Son Dưỡng Môi Có Màu, Son Dưỡng Môi Không Màu cao cấp, hạn chế khô môi. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			8536: {
				intro: "Rất nhiều dòng Son Lì như Son Lì Dạng Thỏi, Dạng Kem, Dạng Nước,.. từ 3CE, NYX, Perfect Kissing,.. chính hãng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			8537: {
				intro: "Rất nhiều Son Kem Lì Dạng Thỏi & Dạng Nước cao cấp, màu cực đẹp, lâu trôi, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8538: {
				intro: "Hàng trăm dòng Son Tint Lì, Son Tint Bóng, cao cấp, chính hãng, màu đẹp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			8539: {
				intro: "Rất nhiều dòng Son Bóng Không Màu, Son Bóng Có Màu cao cấp. chính hãng từ 3CE, Etude House, MAC, Lancome... giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			8541: {
				intro: "Rất nhiều Sản Phẩm Tẩy Da Chết, Tẩy Tế Bảo Chết Dạng Thỏi, Tẩy Tế Bào Chết Dạng Sáp,...hàng chất lượng, hiệu quả tốt, giá ưu đãi. Chat ngay với Shop đê đươc tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			8542: {
				intro: "Nhiều loại Kem Dưỡng Ẩm, Kem Dưỡng Trắng Da chính hãng từ Vichy, Olay, Shisheido,... chính hãng. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			8543: {
				intro: "Hàng trăm Sản Phẩm Tẩy Trang Dạng Nước, Tẩy Trang Dạng Kem, Tẩy Trang Dạng Dầu hiệu quả, an toàn cho da. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8544: {
				intro: "Rất nhiều dòng Sữa Rửa Mặt tử Nivee, Clean & Clear, Hazeline... chính hãng, hiệu quả, trắng hồng, sạch mụn. Shopee Giao Hàng Miễn Phí, Thanh Toán Khi Nhận Hàng, Trả Hàng Và Hoàn Tiền đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			8545: {
				intro: "Hàng trăm Toner Cho Da Dầu & Hồn Hợp, Toner Dưỡng Trắng Da cao cấp, an toàn, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			8546: {
				intro: "Nhiều loại Serum Chăm Sóc Da như Serum Dưỡng Ẩm, Serum Trị Thâm, Serum Trẻ Hóa Làn Dan, Serum Trị Mụn,...hàng chính hãng, an toàn và hiệu quả. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			8547: {
				intro: "Rất nhiều Kem Dưỡng Mắt Ban Ngày & Ban Đêm hiệu quả, an toàn, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Thanh Toán COD. XEM NGAY!",
				intro_short: "0"
			},
			8548: {
				intro: "Rất nhiều Kem Chống Nắng Vật Lí, Kem Chống Năng Hóa Học cao cấp, an toàn, giá ưu đãi. Chat ngay với nhà bán háng trên Shopee để được tư ván tận tình. XEM NGAY!",
				intro_short: "0"
			},
			8549: {
				intro: "Rất nhiều Mặt Nạ Giấy, Mặt Nạ Đất Sét, Mặt Nạ Lột Mụn, chính hãng từ Biore, Vedette, Miniso,...Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8551: {
				intro: "Rất nhiều dòng Xịt Khoáng Dưỡng Da, Xịt Khoáng Khóa Lớp Trang Điểm chính hãng từ MAC, L.A,  NYX, Balea,.. giá cực ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			8553: {
				intro: "Rất nhiều Kem Đặc Trị Mụn, Kem Đặc Trị Thâm Nám, hiệu quả, an toàn, giá tốt. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			8554: {
				intro: "Rất nhiều Bộ Chăm Sóc Da Cho Nam, Nữ từ Acnes, Innisfree, The Body Shop,.. chính hãng, hiệu quả, an toàn cho da. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			8555: {
				intro: "Hàng trăm BB Cream, CC Cream cao cấp, an toàn cho da, giá ưu đãi. Chat ngay với Shop để được tự vấn tận tình. Shopee Giao Hàng Miễn Phí, Thanh Toán COD. XEM NGAY!",
				intro_short: "0"
			},
			8556: {
				intro: "Hàng trăm Kem Lót Cho Da Khô, Da Dầu, Da Hỗn Hợp an toàn, không kích ứng da, giá ưu đãi. Chat với Shop để được tư vấn tận tình, giao hàng miễn phí, nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			8557: {
				intro: "Hàng trăm Phấn Nền Tích Hợp Phấn Phủ, Phần Nền Dang Nước, Kiềm Dầu an toàn cho da, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8558: {
				intro: "Hàng trăm dòng Phấn Phủ Dạng Nén, Phấn Phủ Dạng Bột từ Skin Food, Innisfree, Catrice, Lime,... chính hãng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao  Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8559: {
				intro: "Rất nhiều dòng Kem Che Khuyết Điểm Dạng Thỏi, Nén, Lỏng, giúp bạn che khuyết điểm hiệu quả. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8560: {
				intro: "Rất nhiều Phấn Tạo Khối, Kem Tạo Khối NYX, Wet'n'Wild, Tonymoly,... chính hãng, nhiều bảng màu, giá cực ưu đãi, giao hàng tận nơi miễn phí. Chat với chủ shop để được tư vấn. Xem ngay!",
				intro_short: "0"
			},
			8561: {
				intro: "Rất nhiều Phấn Má Hồng đẹp, nhiều thông màu, thích hợp cho mọi loại da, chính hãng. Giao hàng tận nơi miễn phí, trả hàng nhanh, đơn giản. Chat ngay với chủ shop đê được tư vẤn. MUA NGAY!",
				intro_short: "0"
			},
			8562: {
				intro: "Rất nhiều Bộ Trang Điểm Diện, Bộ Trang Điểm Mắt, Môi, Má, Bảng Màu Trang Điểm cao cấp,chính hãng, màu đẹp. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8563: {
				intro: "Chọn ngay Sản Phẩm Trang Điểm Mắt, Mascara Dưỡng Mi, Mascara Trang Điểm, Mascara Làm Dài Mi,.. với giá hấp dẫn tại Shopee. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. CLICK MIUA NGAY!",
				intro_short: "0"
			},
			8564: {
				intro: "Rất nhiều Gel Kẻ Mắt, Chì Kẻ Mắt, Kẻ Mắt Nước cao cấp, màu đẹp, giá hấp dấn. Shopp Thanh Toán Tiện Lợi, Giao Hàng Miên Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			8565: {
				intro: "Rất nhiều Phấn Mắt từ ZA, Maybelline, Innisfree,... chính hãng, đa dạng tông, dễ sử dụng, giá cực ưu đãi. Miễn phí vận chuyển, trả hàng dễ dàng. XEM NGAY!",
				intro_short: "0"
			},
			8566: {
				intro: "Hàng trăm dòng Chỉ Kẻ Chân Mày, Gel Kẻ Chân Mày, Bột Tán Chân Mày, Mascara Kẻ Chân Mày cao cấp, màu đẹp. Shopee Giao Hàng Miễn Phí, Trả Hàng và Hoàn Tiền Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			8567: {
				intro: "Rất nhiều Dầu Gội Xả Chăm Sóc & Phục Hồi Tóc cao cấp, hiệu quả, giúp tóc khỏe, giá tốt. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			8568: {
				intro: "Rất nhiều Dầu Dưỡng Tóc Uốn Nhuộm Xoăn, Dầu Dừa, Dầu Hạnh Nhân,... từ thiên nhiên, giúp tóc mềm mượt, giữ nếp. Giao hàng tận nơi, ưu đãi khủng. MUA NGAY!",
				intro_short: "0"
			},
			8569: {
				intro: "Rất nhiều sản phẩm Chăm Sóc Tóc như Dầu Hấp Tóc, Kem Ủ Tóc,.. từ các nhãn hàng như Karseell, Fanola, Ganier với giá ưu đãi, hàng chất lượng. Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8570: {
				intro: "Đa dạng Thuốc Nhuộm Tóc từ L'Oreal, Bigen, 3CE,... chính hãng, giá cực ưu đãi, giao hàng miễn phí tận nơi, trả hàng - hoàn tiền đơn giản. Chat ngay với nhà bán hàng để được tư vấn!",
				intro_short: "0"
			},
			8571: {
				intro: "Hàng trăm sản phẩm Sữa Tắm, Xà Phòng Tắm từ các thương hiệu như Dove, Camy, Olay, Lux,.. với giá cực hấp dẫn. Chat ngay với Shop đẻ được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8572: {
				intro: "Rất nhiều Xà Phòng Tắm, Xà Phòng Rửa Tay, Xà Phòng Rửa Mặt, từ các nhãn hãng như Lifebouy, Camay, Dove, Lux...cao cấp, giá tốt. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			8573: {
				intro: "Hàng trăm Sản Phẩm Tẩy Da Chết Mặt, Môi, Tẩy Da Chết Cho Cơ Thể,.. hiểu quả, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			8574: {
				intro: "Đa dạng những Sản Phẩm Kem Dưỡng, Kem Dưỡng Da, Kem Dưỡng Da Trị Thâm, Kem Tan Mỡ Bụng,...chính hãng từ Nivea, KBone, Pink,...Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí Trên Toàn Quốc. XEM NGAY! ",
				intro_short: "0"
			},
			8575: {
				intro: "Hàng trăm Kem Dưỡng Da Tay, Kem Dưỡng Da Chân an toàn, hiệu quả, giá ưu đãi. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			8576: {
				intro: "Hàng trăm Lăn Khử Mùi, Xịt Khử Mùi cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí, Thanh Toán COD. MUA NGAY!",
				intro_short: "0"
			},
			8577: {
				intro: "Hàng trăm Kem Tẩy Lông, Wax Tẩy Lông, Máy Tẩy Lông chính hãng từ Veet, OE Creme, Evoluderm,...giá tốt. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			8580: {
				intro: "Rất nhiều Vitanmin & Khoáng Chất Dạng Viên Và Nước hiệu quả, bổ dưỡng, tăng cường sức khỏe, giá cực ưu đãi tại Shopee. Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			8584: {
				intro: "Hàng trăm Cọ trang Điểm Mắt, Cọ Trang Điểm Mặt chính hãng, giúp bạn make up dễ dàng, đơn giản. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Giá Tốt. XEM NGAY!",
				intro_short: "0"
			},
			8585: {
				intro: "Rất nhiều Dụng Cụ Bấm Tóc, Dụ Cụ Uốn Tóc Không Dùng Nhiệt, cao cấp, tiện ích. giá hấp dẫn. Chat ngay để được để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			8586: {
				intro: "Rất nhiều mẫu Kính Áp Tròng, Kính Giãn Tròng từ Doll Eye, SEED, Vassen,... an toàn y tế, nhiều màu, giá cực ưu đãi. Giao hàng tận nơi, đảm bảo chất lượng từ Shopee. Mua ngay!",
				intro_short: "0"
			},
			8587: {
				intro: "Nhiều dòng Kẹp Mi Điện, Máy Kẹp Mi, Kẹp Mi Inox, và Phụ Kiện Kẹp Mi từ BH Cosmetic, AOA, Innisfree,... chính hãng, cao cấp, an toàn, hiệu quả. Shopee Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			8588: {
				intro: "Rất nhiều loại Mi Giả đẹp tự nhiên, dày, độ dài ngắn đa dạng với giá siêu ưu đãi, giao hàng tận nơi miễn phí. Chat với chủ shop để được tư vấn tận tình. Mua ngay!",
				intro_short: "0"
			},
			8589: {
				intro: "Đa dạng Sản Phẩm Tạo Khuôn Mày, Dụng Cụ Tạo Kiểu Chân Mày Đẹp, dễ sử dụng, hiệu quả cao, giá cực ưu đãi, giao hàng tận nơi miễn phí, trả hàng - hoàn tiền theo quy định. Xem ngay!",
				intro_short: "0"
			},
			8590: {
				intro: "Nhiều Dòng Nước Hoa Nữ full size, Nước Hoa Nữ Mini, Vial,.. chính hãng từ Dior, Chanel Coco Noir, Set Marc Jacobs,..giá hấp dẫn. Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8591: {
				intro: "Rất nhiều Bộ Nước Hoa Kèm Lotion, Nước Hoa Mini Cao Cấp, giá cực ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí, nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			8592: {
				intro: "Rất nhiều dòng Nước Hoa Cho Nam, Nữ, Nước Hoa Mini từ Gucci, Dior, Versace, Chanel, Lancome,... chính hãng, hương thơm lưu lâu, dịu nhẹ. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8593: {
				intro: "Rất nhiều Nước Hoa Nam, Nước Hoa Nữ từ Victoria Secret, Lacoste, Valentino,... chính hãng, đa dạng dòng, giá cực sốc, giao hàng miễn phí, trả hàng uy tín. Chat ngay với người bán để được tư vấn!",
				intro_short: "0"
			},
			8594: {
				intro: "Mua Nước Hoa Nam chính hãng từ Chanel, Dior, Versace, Guess, CK,.. cao cấp, mùi hương quyến rũ, nam tính, giá cực ưu đãi. Giao hàng miễn phí, thanh toán COD. MUA NGAY!",
				intro_short: "0"
			},
			8595: {
				intro: "Chọn ngay mẫu Áo Croptop, Áo Crop Tank Top, Áo Croptop Sweater kiểu dáng trẻ trung, phong cách, thời trang với giá tốt. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền Đơn Giản. CLICK MUA NGAY!",
				intro_short: "0"
			},
			8596: {
				intro: "Hàng trăm Áo Hai Dây, Áo Ba Lô Nữ với chất liệu cao cấp, thoáng mát, kiểu dáng thời trang, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8597: {
				intro: "Rất nhiều Áo Kiểu Công Sở, Áo Baby Doll, Áo Bẹt Vai với chất liệu cao cấp, thoáng mát, bền đẹp, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			8598: {
				intro: "Nhiều Sơ mi nữ đẹp, áo sơ mi nữ công sở, áo sơ mi form rộng, sơ mi nữ caro mẫu mới 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			8599: {
				intro: "Rất nhiều Áo Thun Nữ Tay Dài & Tay Ngắn thời trang, mẫu mới 2018, cập nhật liên tục, giá cực ưu đãi, giao hàng miễn phí. Chat với chủ shop để được tư vấn. Xem ngay!",
				intro_short: "0"
			},
			8600: {
				intro: "Rất nhiều mẫu Đầm Nữ, Đầm Dự Tiệc với kiểu dáng ôm, xòe sang trọng, phong cách được bán với giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			8601: {
				intro: "Nhiều đầm maxi đi biển đẹp, đầm maxi trắng thời trang, đầm maxi voan cao cấp, mẫu mới 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			8602: {
				intro: "Nhiều mẫu Đầm Dáng Suông thời trang, Đầm Dáng Suông Trơn, Đầm Dáng Suông Họa Tiết, với chất liệu vải thoáng mát, co giãn tốt, bền đẹp. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			8603: {
				intro: "Rất nhiều mẫu Đầm Dáng Ôm Trễ Vai, Đầm Dáng Ôm Đuôi Cá, Đầm Ôm Sexy thời trang, vải thoáng mát, giá tốt. Cha ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			8604: {
				intro: "Hàng trăm Đầm Dáng Xòe Dự Tiệc, Đầm Mặc Thường Ngay với chất liệu vải cao cấp thoáng mát, dễ giặt ủi, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8605: {
				intro: "Rất nhiều Chân Váy Xòe, Chân Váy Ngắn, Chân Váy Xếp Ly kiểu dáng thời trang, chất liệu vải thoáng mát, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8606: {
				intro: "Rất nhiều mẫu Chân Váy đẹp, thời trang, mẫu mới cập nhật mỗi ngày với ưu đãi siêu hấp dẫn. Shopee giao hàng miễn phí, đảm bảo chất lượng & bạn có thể chat với người bán để được tư vấn. Mua ngay!",
				intro_short: "0"
			},
			8607: {
				intro: "Chọn ngay Chân Váy Dài Trơn Công Sở, Chân Váy Dài Thời Trang, vải jeans, kaki cao cấp. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			8608: {
				intro: "Rất nhiều Áo Khoác Da Cổ Trụ, Áo Jacket Da, Áo Khoác Da Cổ Vest, kiểu dáng thời trang, phong cách, chất liệu cao cấp, giá cực tốt. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			8609: {
				intro: "Rất nhiều mẫu Áo Khoác Phao đẹp, màu sắc đa dạng, chất liệu mát, giữ ấm tốt, dễ giặt, giá cực ưu đãi, giao hàng miễn phí. Chat với shop để được tư vấn tận tình. Mua ngay!",
				intro_short: "0"
			},
			8610: {
				intro: "Rất nhiều mẫu Áo Khoác Nữ, Áo Dạ Dáng Dài, Áo Khoác Dạ, Áo Dạ Dáng Ngắn,...vải tốt, đường may đẹp. Chat với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. CLICK XEM NGAY!",
				intro_short: "0"
			},
			8611: {
				intro: "Nhiều Áo Chống Nắng Thời Trang từ LimeOrange, Uniqlo,... mẫu mới, chất vải thoáng mát, giá cực sốc. Miễn phí vận chuyển, ưu đãi bất ngờ, trả hàng dễ dàng cùng Shopee. NHANH MUA!",
				intro_short: "0"
			},
			8612: {
				intro: "Rất nhiều Áo Khoác Jeans Lửng, Áo Khoác Jean Nữ Form Rộng với kiểu dáng thời trang, phong cách, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Thanh Toán COD. MUA NGAY!",
				intro_short: "0"
			},
			8613: {
				intro: "Rất nhiều Áo Khoác Thun, Áo Khoác Nỉ, Áo Hoodie với kiểu dáng thời trang, trẻ trung, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			8614: {
				intro: "Rất nhiều Áo Khoác Cardigan Ngắn & Dài, Áo Khoác Cardigan Tay Phòng, Form Rộng với chất liệu cao cấp, thoáng mát, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8615: {
				intro: "Rất nhiều Áo Vest & Blazer Nữ hàng cao cấp, form chuẩn. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt, Trả Hàng Hoàn Tiền đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			8616: {
				intro: "Nhiều mẫu Quần Legging, Quần Tregging, kiểu dáng trẻ trung, chất liệu vải cao cấp, giá ưu đãi. Chat với Shop để được tư ván tận tình. Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8617: {
				intro: "Nhiều mẫu Quần Yếm Dài, Quần Yếm Ngắn với chất liệu kaki, jeans, cotton cao cấp. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Tận Nơi. XEM NGAY!",
				intro_short: "0"
			},
			8618: {
				intro: "Rất nhiều Quần Dài Kaki Nữ, Quần Short & Quần Lừng Kaki Nữ kiểu dáng thời trang, vải bền đẹp, giá tốt. Chat ngay với Shop để được tư vấn tận tình, nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			8619: {
				intro: "Rất nhiều mẫu Quần Tây Ống Suông, Quần Tây Baggy, Quần Tây Ống Rộng kiểu dáng sang trọng, thời trang, chất liệu vải thoáng mát. Chat ngay với Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8620: {
				intro: "Rất nhiều Quần Jeans Nữ mẫu mới 2018, xu hướng mới, dáng đẹp, chất vải bền, co giãn tốt, nhiều khuyến mãi. Giao hàng miễn phí tận nơi, trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			8621: {
				intro: "Đa dạng những mẫu Đồ Mặc Nhà với thiết kế trẻ trung, kiều dang hợp thời trang như Đầm Mặc Nhà, Đồ Bộ Mặc Nhà,... Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. CLICK MUA NGAY!",
				intro_short: "0"
			},
			8622: {
				intro: "Rất nhiều Đồ Bộ Ngủ, Váy Ngủ, kiểu dáng thời trang, chất liệu vải thoáng mát, giá hâp dẫn. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận HànG. MUA NGAY!",
				intro_short: "0"
			},
			8623: {
				intro: "Rất nhiều mẫu Đồ Lót Nữ, Bộ Đồ Lot Cotton, Đồ Lót Ren từ Bonbon, Wanabe, Lover, Triumph,.. chính hãng, chất liệu thoáng mát, form chuẩn. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			8624: {
				intro: "Rất nhiều Quần Bikini, Quần Lọt Khe, Quần Control Briefs, kiểu dáng quyến rũ, vải mềm, cao cấp. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8625: {
				intro: "Hàng trăm mẫu Áo Lót Có Dây, Áo Lót Không Dây, Áo Lót Thể Thao, vải tốt, con giãn, mềm mại, giá tốt. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Toàn Quốc. XEM NGAY!",
				intro_short: "0"
			},
			8626: {
				intro: "Hàng trăm mẫu Quần Short Jean Nữ, Quần Short Kaki Nữ, Short Thun Nữ với kiểu dáng trẻ trung năng động, kích cỡ size đa dạng. Chat ngay với Shopee để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Thanh Toán Khi Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			8688: {
				intro: "Rất nhiều Ốp Điện Thoại Oppo nhựa, kim loại, silicon cao cấp, giá cực ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giáo Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			8689: {
				intro: "Hàng trăm Bao Da Má Tính Bảng, Túi Đựng Máy Ảnh, cao cấp, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí,Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			8690: {
				intro: "Rất nhiều Bao Da Samsung chất lượng cao, chất liệu tốt, bền bỉ, thiết kế đẹp, tiện dụng, miễn phí vận chuyển, giao hàng tận nơi. Xem ngay!",
				intro_short: "0"
			},
			8691: {
				intro: "Rất nhiều mẫu Ốp Lưng Điện Thoại Samsung với chất liệu silion, màu sắc trang nhã, kiểu dáng cá tính, đáng yêu, xinh xắn. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			8692: {
				intro: "Rất nhiều Bao Da Iphone, Bao Da Iphone Màn Hình Sview, thiết kế đẹp, chất liệu cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			8693: {
				intro: "Hàng trăm Ốp Lưng Điện Thoại, Ốp Lưng Chịu Lực, Ốp Viền dành cho Iphone cao cấp, giá hấp dẫn. Shopee giao hàng miễn phí, thanh toán linh hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8705: {
				intro: "Rất nhiều Đế Sạc Không Dây, Đế sạc Không Dây Cho Ô Tô, thiết kế hiện đại, cao cấp, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8706: {
				intro: "Hàng trăm dòng Cáp Sạc, Cáp Type, Cáp Lightning, Cáp OTG,..chính hãng từ Samsung, Baseus, Dtech với giá tốt. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền Đơn Giản. MAU NGAY!",
				intro_short: "0"
			},
			8707: {
				intro: "Hàng trăm Cốc Sạc Điện Thoại, Cốc Sạc Điện Thoại Trên Ô Tô từ Huawei, Pisen, Remax, Hôc, Joyroom,.. chính hãng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Trả Hàng Và Hoàn Tiền đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			8708: {
				intro: "Rất nhiều Phụ Kiện Chụp Ảnh như Remote Chụp Hình Từ Xa Cho Điện Thoại, Remote Chụp Hình Kiêm Tay Cầm Gamepad với thiết kế tiện lợi. Shopee Giao Hàng Miên Phí, Trả Hàng Hoàn Tiền đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			8709: {
				intro: "Rất nhiều Gậy Selfie Chuyên Dụng, Gậy Selfie Mini Thời Trang thiết kế tiện lợi, đa dạng màu sắc, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			8710: {
				intro: "Rất nhiều Gậy Selfie Bluetooth có chân, có gương xoay tiện ích, thiết kế hiện đại, giá ưu đãi. Chta ngay với Shop để dược tư vấn nhanh chóng, tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			8711: {
				intro: "Mua Máy Tính Bảng và Phụ Kiện Máy Tính Bảng từ các thương hiệu lớn như Apple, Samsung, Acer, Asus, Lenovo. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8712: {
				intro: "Hàng trăm Điện Thoại Phổ Thông  1 Sim, & 2 Sim từ các thương hiệu như  Nokia, Viettel, Samsung,... giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giáo Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8713: {
				intro: "Hàng trăm dòng Điện Thoại Oppo : Oppo F3, Oppo A37, Oppo F5, cùng Ốp Lưng, Phụ Kiện Oppo chính hãng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			8714: {
				intro: "Hàng trăm Dòng Điện Thoại Thông Minh tầm trung, cao cấp, chính hãng từ Samsung, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8715: {
				intro: "Rất nhiều dòng Ipjhone như, iIhone 5s Iphone 6, 6s, 6 Plus, Iphone 7, 7s, 7 Plus , Iphone *, Iphone X,..chính hãng với giá ưu đãi. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY! ",
				intro_short: "0"
			},
			8716: {
				intro: "Rất nhiều iPad Air, iPad Pro, IPad Mini,..chính hãng từ Apple, bảo hành uy tín. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8719: {
				intro: "Rất nhiều Miếng Dán Màn Hình Tablet, Miếng dán mặt lưng vân Carbon, Miếng dán decal cho iPad,.. giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			8720: {
				intro: "Hàng trăm Miếng Dán Dẻo, Miếng Dán Cường Lực chính hãng từ Sony, thiết kế sang trọng. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			8721: {
				intro: "Rất nhiều Miếng Dán Màn Hình, Miếng Dán Full Màn Hình Điện Thoại cao cấp, giá cực ưu đãi. Shopee Giao Hang Miễn Phí, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			8722: {
				intro: "Hàng trăm Miếng Dán Điện Thoại, Miếng Dán Cường Lực, Dán Cường Lực Nano Film,...đa dạng cho các dòng điện thoại. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Trả Hàng Hoàn Tiền đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			8723: {
				intro: "Rất nhiều Miếng Dán Ipad, Dán Ipad Cường Lực coa cấp, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, nhanh chóng. Shopee Giao Hàng Toàn Quốc. MUA NGAY!",
				intro_short: "0"
			},
			8724: {
				intro: "Rất nhiều Miếng Dán Chống Trầy, Miếng Dán Cường Lươ dành riêng cho các dòng Iphone, với giá ưu đãi. Shopee Giao Hàng  Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			8725: {
				intro: "Rất nhiều SIM Viettel, SIM 4G Viettel đẹp, ý nghĩa, hợp mệnh với giá khuyến mãi hấp dẫn, đa dạng lựa chọn. Thanh toán COD, miễn phí vận chuyển. Xem ngay!",
				intro_short: "0"
			},
			8726: {
				intro: "Rất nhiều SIM Vinaphone, SIM 3G/4G Vinaphone đẹp, ý nghĩa, hợp mệnh với giá khuyến mãi hấp dẫn, đa dạng lựa chọn. Thanh toán COD, miễn phí vận chuyển. Xem ngay!",
				intro_short: "0"
			},
			8727: {
				intro: "Rất nhiều SIM Mobifone, SIM 4G Mobifone đẹp, ý nghĩa, số đẹp sinh viên, hợp mệnh với giá khuyến mãi sốc. Thanh toán COD, miễn phí vận chuyển. Xem ngay!",
				intro_short: "0"
			},
			8728: {
				intro: "Bộ sưu tập giá đỡ điện thoại xe máy cứng cáp, chắc chắn, kẹp điện thoại cao cấp mẫu mới 2018 từ Hoco; Baseus. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			8729: {
				intro: "Rất nhiều Giá Đỡ Điện Thoại, Phụ Kiện Điện Thoại như Nút Chơi Game, Nhẫn Điện Thoại,..kiểu dáng tiện lợi. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng,  Hoặc Trả Hàng Hoàn Tiền đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			8753: {
				intro: "Rất nhiều mẫu Phụ Kiện Âm Thanh, Các Thiết Bị Khuyết Đại Âm Thanh, Loa Bass,... chính hãng tuewf Yamaha, Boya, Crown,...giá ưu đãi. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			8754: {
				intro: "Rất nhiều Máy Nghe Nhạc MP3, MP4 chính hãng từ Apple, Sony, Samsung,...giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			8755: {
				intro: "Rất nhiều dòng Loa Kéo Bluetooth Di Đông, Loa Kéo MIni, Micro cao cấp, âm thanh trong, bass tốt chính hãng từ Aige, MBA, CXF,... Shopee Giao Hàng Miễn Phí, Nhanh Chóng.,Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			8756: {
				intro: "Rất nhiều Loa Vi Tính Có Dây, Loa Vi Tính Không Dây, từ các thương hiệu như Ruizu, Microlab, Joyroom, Crown.... chính hãng, giá cực tốt. Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt XEM NGAY!",
				intro_short: "0"
			},
			8757: {
				intro: "Hàng trăm Loa Bluetooth Mini, Loa Bluetooth Di Động chính hãng từ JBL, Logitech, Divoom,..âm thanh ấm, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8758: {
				intro: "Rất nhiều Loa Di Động, Loa Bluetooth từ Sony, Bose, JBL, Logitech,... chính hãng, chất âm tốt, bền bỉ, giá cực ưu đãi, bảo hành chính hãng. Giao hàng miễn phí & được đảm bảo bởi Shopee. Xem ngay!",
				intro_short: "0"
			},
			8798: {
				intro: "Rất nhiều Ghế Ăn Dặm, Bộ Dụng Cự Ăn Dặm, Bình Ăn Dặm cao cấp, chất liệu an toàn. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			8799: {
				intro: "Rất nhiều Đồ Dùng Bảo Vệ Trẻ, Thiết Bị Y Tế Cho Trẻ cao cấp, chất lượng, an toàn cho bé, giá cực ưu đãi. Vận chuyển tận nơi, trả hàng đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			8800: {
				intro: "Rất nhiều Dụng Cụ Tắm & Vệ Sinh Cho Bé từ PAPA, Chicco, KUKU, Ami,... giá cực ưu đãi, chất liệu tốt, an toàn, thiết kế đẹp. Vận chuyển miễn phí, bảo hành uy tín. Xem ngay!",
				intro_short: "0"
			},
			8801: {
				intro: "Hàng trăm dòng Máy Tiệt Trùng Bình Sữa, Máy Hâm Sữa cao cấp, an toàn vệ sinh, giá cả hợp lí. Chat ngay với Shop để được tư ván tận tình, giao hàng nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			8802: {
				intro: "Rất nhiều Đồ Dùng Phòng Ngủ Cho Bé như Gà Giường, Gối, Vỏ Gối, Chăn Cho Bé, hàng cao cấp, chất lượng, êm ái. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			8803: {
				intro: "Hàng trăm Phụ Kiện Bình Sữa, Núm Ty, Bình Sữa cao cấp, tiện ích từ Nuk, Simba, NIP,...với giá ưu đãi. Chat ngay với Shop đẻ được tư vấn nhiệt tình, Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			8819: {
				intro: "Hàng trăm Bô Quần Áo Dài Tay, Tay Ngắn, Bộ Áo Liền Quần, vải mềm mại, thoải mái cho bé. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8821: {
				intro: "Rất nhiều Tã Vải Cho Bé , Miếng Lót Tã cao cấp, an toàn cho bé, chất liệu mềm mại, giá cực ưu đãi. Shopee Giao Hàng Miễn Phí, Thanh Toán Liinh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8822: {
				intro: "Rất nhiều Bỉm, Tã Giấy, Tã Dán, Tã Quần Bobby, Huggies, Pampers, Caryn... chính hãng, đa dạng kích cỡ, siêu thấm hút, mềm mại, giá cực hấp dẫn, giao hàng miễn phí, ưu đãi bất ngờ. Xem ngay!",
				intro_short: "0"
			},
			8823: {
				intro: "Chọn mua Khăn Giấy Ướt, Giấy Ăn, Khăn Khô Đa Năng,.. từ các nhãn hàng nổi tiếng Mamamy, Thái Hòa, Pubbi với giá tốt. Chat ngay với nhà bán hàng để được tư vấn tận tình. CLICK XEM NGAY!",
				intro_short: "0"
			},
			8824: {
				intro: "Rất nhiều Bộ Khăn Mũ, Găng Tay, Tất Cho Bé Trai, với chất liệu cao cấp, an toàn cho bé, giá hấp dẫn. Chat ngay với Shop để được tư vân tận tình, giao hàng miễn phí, nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			8825: {
				intro: "Hàng trăng Giày Thể Thao, Giày Sandal, Giày Tập Đi Cho Bé Trai xinh xắn, chất liệu cao cấp, giá hấp dẫn. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			8826: {
				intro: "Rất nhiều Set Đồ Cho Bé Trai đẹp, mẫu mới, chất liệu vải tốt, thoáng mát, kiểu dáng năng động, ưu đãi hấp dẫn. Vận chuyển tận nơi miễn phí, trả hàng đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			8827: {
				intro: "Hàng ngàn mẫu Quần Cho Bé Trai cao cấp, mẫu mã đa dạng, chất vải tốt, thiết kế thoải mái cho bé, khuyến mãi siêu hấp dẫn, giao hàng tận nơi miễn phí. Mua ngay!",
				intro_short: "0"
			},
			8828: {
				intro: "Rất nhiều Áo Thun Bé Trai, Áo Khoác Bé Trai, Áo Sơ Mi Bé Trai, kiểu dáng xinh xắn, chất liệu thoáng mát. Chat ngay với Shop để được tư vấn tận tình, Shop Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			8830: {
				intro: "Rất nhiều Set Phụ Kiện Làm Tóc Cho Bé Gái, Túi, Tất Nón Cho Bé Gái, kiểu dáng xinh xắn, đáng yêu, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8831: {
				intro: "Hàng trăm mẫu Giày Búp Bê, Giày Thể Thao , Giày Sandal, Dép Cho Bé Gái, kiểu dáng thời trang, xinh xắn. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, MUA NGAY!",
				intro_short: "0"
			},
			8832: {
				intro: "Hàng trăm Quần Legging, Quần Short, Quần Yếm Cho Bé Gái, chất liệu vải thoáng mát, màu sắc tươi sáng, giá tốt. Shopee Đảm Bảo Nhân Hàng, Trả Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8833: {
				intro: "Rất nhiều Đồ Nguyên Set Bé Gái, Set Đồ Bé Gái đẹp, mẫu mã đa dạng, vải mềm, thoải mái cho bé, giá cực ưu đãi, giao hàng miễn phí nhanh chóng, trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			8834: {
				intro: "Nhiều mẫu Váy Đầm Bé Gái, Chân Váy Bé Gái kiểu dáng thời trang, dễ thương xinh xắn, chất liệu vải cao cấp, thoáng mát. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. CLICK XEM NGAY!",
				intro_short: "0"
			},
			8835: {
				intro: "Hàng trăm mẫu Áo Bé Gái, Áo Khoác Áo Thun, Áo Sơ Mi, xinh xắn, họa tiết đáng yêu, ngộ nghĩnh, vải mềm, thoáng mát, giá tốt. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8836: {
				intro: "Rất nhiều thực phẩm bổ sung, thực phẩm chức năng Nature Made, PediaKid, Blackmores,... chính hãng, hiệu quả, giá tốt. Thanh toán COD, giao hàng nhanh. Xem ngay! ",
				intro_short: "0"
			},
			8837: {
				intro: "Rất nhiều Thực Phẩm Ăn Dặm, Thực Phẩm Bổ Sung, Tăng Cường Sức Đề Kháng, thành phần an toàn, bổ dưỡng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			8838: {
				intro: "Rất nhiều sữa công thức cho bé dinh dưỡng từ Aptamil, Pedia Smart, NAN,... chính hãng, giá ưu đãi. Thanh toán COD, giao hàng miễn phí tận nơi nhanh chóng. Xem ngay!",
				intro_short: "0"
			},
			8849: {
				intro: "Rất nhiều Xe Tập Đi, Dụng Cụ Tập Đi từ Song Long, Chicco, Winfun,... cao cấp, an toàn cho bé, giá ưu đãi, bảo hành uy tín. Vận chuyển miễn phí, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			8850: {
				intro: "Rất nhiều mẫu Ghế Ngồi Cho Bé từ Mastela, Fisher Price, Richell,... chính hãng, đa dạng mẫu mã, bảo hành uy tín, giao hàng tận nơi miễn phí, trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			8851: {
				intro: "Hàng trăm mẫu Xe Đẩy Hai Chiều, Xe Đẩy Một Chiều, Nôi Cũi,...chính hãng từ Combi, Seebaby, Zaracos, Saor,..giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8852: {
				intro: "Hàng trăm Địu Em Bé 4 Tư Thế và 6 Tư Thế tiện lợi, an toàn cho bé, chất liệu cao cấp, thoáng mát, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			8853: {
				intro: "Hàng trăm Váy Bầu & Đầm Bầu đẹp, thời trang, mẫu mới, thiết kế trang nhã, thoáng mát, chất vải nhẹ, giá cực ưu đãi, giao hàng tận nơi miễn phí, trả hàng đơn giản. Mua ngay!",
				intro_short: "0"
			},
			8854: {
				intro: "Rất nhiều Quần Áo Bầu đẹp, mẫu mới, thoải mái, chất liệu mềm mại, an toàn cho mẹ, giá ưu đãi. Miễn phí vận chuyển, trả hàng đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			8855: {
				intro: "Rất nhiều Kem Dưỡng Ẩm, Kem Dưỡng Đặc Trị, Vitamin Cho Mẹ, an toàn hiệu quả, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			8856: {
				intro: "Hàng trăm Quần Lót, Áo Hút Sữa Cho Mẹ, Vớt Tất tiện lợi, hàng chất lượng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			8857: {
				intro: "Hàng trăm Set Đồ Sơ Sinh, Set Túi Đựng Đồ Sơ Sinh, Phụ Kiện Chăm Sóc Bé Sơ Sinh cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8888: {
				intro: "Hàng trăm Dụng Cụ Bào Gọt, Dụng Cụ Làm Bún, Bộ Dao Kéo, cao cấp, đa dạng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giá ưu đãi. MUA NGAY!",
				intro_short: "0"
			},
			8890: {
				intro: "Hàng trăm mẫu Dao Nhà Bếp, Dao Cắt Hoa Quả từ Kiwi, Sharp, Nakamura, Sunhouse,... chính hãng, bền, sắc. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Tận Nơi, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8891: {
				intro: "Rất nhiều trà & cafe thơm ngon, trà giảm cân, cafe Robusta, Arabica,... từ Trung Nguyên, Gudeli, Civet,... giá tốt. Giao hàng miễn phí, thanh toán COD. Xem ngay! ",
				intro_short: "0"
			},
			8893: {
				intro: "Rất nhiều Đồ Dùng Bàn Ăn từ Minh Long, Luminarc,... cao cấp, sang trọng, mẫu mới, ưu đãi cực sốc. Miễn phí vận chuyển, thanh toán linh hoạt. CHỌN NGAY! ",
				intro_short: "0"
			},
			8894: {
				intro: "Hàng trăm Nồi Chảo, Giá Đựng Đồ Dùng Nhà Bếp, Dụng Cụ Cawsrt Gọt. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8896: {
				intro: "Rất nhiều đồ trang trí nhà cửa, trang trí tiệc, trang trí sinh nhật đẹp, nhiều chủ đề, phong cách với giá ưu đãi. Thanh toán nhanh, giao hàng miễn phí. Xem ngay!",
				intro_short: "0"
			},
			8897: {
				intro: "Rất nhiều Giấy Dán Tường & Đồ Trang Trí Tường chất lượng cao, ",
				intro_short: "0"
			},
			8898: {
				intro: "Rất nhiều thảm trang trí phòng khách, thảm phòng ngủ cao cấp, thiết kế đẹp, nổi bật, đa dạng kích cỡ, giá ưu đãi. Thanh toán nhanh, vận chuyển miễn phí. Xem ngay!",
				intro_short: "0"
			},
			8899: {
				intro: "Rất nhiều mẫu gương soi đẹp, sang trọng, đa dạng kích cỡ, tiện dụng, chất liệu sáng bóng, bền bỉ, giá ưu đãi. Miễn phí giao hàng, thanh toán đơn giản. Mua ngay!",
				intro_short: "0"
			},
			8900: {
				intro: "Rất nhiều mẫu đồng hồ treo tường đẹp, sang trọng, thiết kế tinh xảo, chính xác với ưu đãi hấp dẫn. Miễn phí vận chuyển tận nhà, thanh toán đơn giản. Mua ngay!",
				intro_short: "0"
			},
			8901: {
				intro: "Hàng trăm Dây Nẹp Ga Giường, Túi Đựng,Ga Giường, Dung Dịch Diệt Khuẩn Ga Giường cao cấp, tiện ích. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8902: {
				intro: "Rất nhiều Nệm Cao Su & Nệm Cao Cấp từ Vạn Thành, Kim Cương, Juno,... bảo hành uy tín, đa dạng kích thước, ưu đãi cực sốc. Miễn phí vận chuyển tận nơi, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			8903: {
				intro: "Hàng trăm loại Gối Nằm, Gối Ôm cao cấp, chất liệu mềm mại, êm ái, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn. XEM NGAY!",
				intro_short: "0"
			},
			8904: {
				intro: "Hàng trăm loại chăn phòng ngủ ấm áp, chất lượng cao, giá rẻ bất ngờ tại Shopee.vn. Giao hàng tận nơi miễn phí, nhanh chóng toàn quốc, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			8905: {
				intro: "Chọn ngay Ga Trải Giường Chống Thấm, Bộ Chăn Ga Gối Nệm, Ga Trải Giương Spa cao cấp, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			8906: {
				intro: "Rất nhiều Hộp Đựng Giày, Hộp Đựng Mỹ Phẩm, Hộp ĐỰng Bánh tiện ích, đa dạng mẫu mã, màu sắc, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8907: {
				intro: "Rất nhiều mẫu Tủ Quần Áo, Kệ Giày Dép, Hộp Đựng Đồ đa năng, tiện ích, kiểu dáng sang trọng, bền đẹp. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8908: {
				intro: "Rất nhiều khăn tắm mềm mịn, chất liệu cotton 100% an toàn, siêu thấm, mau khô, giá cực ưu đãi, đa dạng kích cỡ. Thanh toán COD, giao hàng nhanh. Click ngay!",
				intro_short: "0"
			},
			8909: {
				intro: "Rất nhiều phụ kiện nhà tắm, nhà vệ sinh, bộ phụ kiện nhà tắm 6 món cao cấp, chất liệu chống gỉ, sáng bóng, giá tốt. Giao hàng miễn phí, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			8912: {
				intro: "Mua ngay Đồ Dùng Làm Vườn , Cây Cảnh & Hạt Giống, Nội Thất Ngoài Trời tiện ích, đa dạng. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XME NGAY!",
				intro_short: "0"
			},
			8913: {
				intro: "Hàng trăm Hạt Giống Cay Trồng, Hạt Giống Hoa cao cấp, giá cực ưu đãi tại Shopee. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tinh, nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			8914: {
				intro: "Hàng ngàn bếp nấu, bếp từ, bếp hồng ngoại cao cấp từ Panasonic, Hitachi, Bosch, Midea, Canzy,... chính hãng. Ưu đãi sốc, thanh toán nhanh, giao miễn phí. Xem ngay!",
				intro_short: "0"
			},
			8915: {
				intro: "Rất nhiều máy làm kem, máy làm sữa chua từ Chefman, Tiross Hitop, Fujika,... cao cấp, dễ sử dụng, giá ưu đãi. Thanh toán đơn giản, giao hàng nhanh. Mua ngay!",
				intro_short: "0"
			},
			8916: {
				intro: "Chọn ngay chiếc Máy Làm Bánh với khuôn bánh phủ men chống dính, cao cấp đến từ các thương hiệu nổi tiếng Sonaky, Panasonic, Phillips với giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			8917: {
				intro: "Hàng trăm Nồi Cơm Điện Điện Tử, Nồi Cơm Điện Nắp Rời, Nồi Hấp, chính hãng từ Sharp,  Happy Cook, Electrolux, Kangaroo,... chính hãng, giá ưu đãi. Shopee Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8918: {
				intro: "Hàng trăm Lò Vi Sóng, Lò Nướng từ các thương hiệu như Sanaky, Mishio, Comet, Bosh,.. chính hãng, tiết kiệm điện, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng trên toàn quốc, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			8921: {
				intro: "Rất nhiều ấm siêu tốc & bình thủy tốt từ Comet, Philips, Panasonic, Sunhouse,... đẹp, giữ nhiệt tốt với giá ưu đãi. Thanh toán đơn giản, miễn phí giao. Click ngay!",
				intro_short: "0"
			},
			8922: {
				intro: "Hàng trăm Máy Xay, Máy Nghiền, Máy Trộn Thực Phẩm tiện lợi, hoạt động ổn định, chính hãng từ Osaka, Philip, MAGIC BULLET, Sony,...giá tốt. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			8944: {
				intro: "Hàng ngàn mẫu áo len nam đẹp, áo len dài tay, áo len cổ lọ thời trang, chất liệu đẹp, thoải mái, đa dạng phong cách. Giao hàng tận nơi, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			8945: {
				intro: "Rất nhiều Ảo Nỉ với kiểu dáng trẻ trung, thời trang: Áo Nỉ Hoodie, Áo Nỉ Sweater, Áo Nỉ Lốt Lông,..hàng chất lượng, mặc thoải mái, dễ chịu. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			8946: {
				intro: "Rất nhiều mẫu Áo Thun Dài Tay trơn, họa tiết đẹp, mẫu mới, xu hướng 2018, giá cực ưu đãi. Miễn phí vận chuyển, trả hàng đơn giản, thanh toán COD. XEM NGAY!",
				intro_short: "0"
			},
			8947: {
				intro: "Hơn 80000 áo thun nam không cổ, áo thun cổ tròn, áo cổ tim,... đẹp, chất vải thoáng mát, đa dạng kiểu dáng, kích cỡ. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			8948: {
				intro: "Rất nhiều áo ngắn tay có cổ nam, áo polo, áo thun cổ trụ,... đẹp, chất vải đẹp, thoáng mát với giá cực ưu đãi. Giao hàng miễn phí, thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			8949: {
				intro: "Hàng trăm Áo Khoác Phao Nam Có Nón, Áo Khoác Phao Không Nón kiểu dáng thời trang, chất liệu cao cấp, giá tốt. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			8950: {
				intro: "Mua Áo Dạ Nam với kiểu dáng thanh lịch, trẻ trung, thời trang. có cả Áo Dạ Nam Dáng Dài, Áo Dạ Nam Dáng Ngắn, với chất liệu cao cấp. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			8951: {
				intro: "Hàng trăm Áo Vest Nam kiểu dáng thời trang, sang trọng, chất liệu vải cao cấp, thoáng mát. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8952: {
				intro: "Rất nhiều mẫu Áo Khoác Dù mới, xu hướng 2018, chất vải tốt, bền & ấm áp. Giao hàng tận nơi miễn phí, ưu đãi hấp dẫn, trả hàng - hoàn tiền đơn giản. Xem ngay!",
				intro_short: "0"
			},
			8953: {
				intro: "Hàng trăm mẫu Áo Khoác Nam Có Mũ, Áo Khoác Nhẹ Nam,...kiểu dáng thời trang, lịch lãm, trẻ trung. Chat ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			8954: {
				intro: "Rất nhiều Quần Lót Nam Cơ Bản, Quần Lót Nam Dạng Đùi với chất liệu cao cấp, thoáng mát, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			8955: {
				intro: "Đa dạng mẫu Quần Đùi Thể Thao, Quần Dài Thể Thao, Quần Jogger Thể Thao, cao cấp, co giãn tốt, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8956: {
				intro: "Rất nhiều mẫu quần short nam, quần short jeans nam,... cao cấp, mẫu mới, đa dạng kiểu dáng, kích cỡ với ưu đãi cực sốc. Giao hàng miễn phí, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			8957: {
				intro: "Chọn ngay Quần Kaki Dài, Kaki Lửng, kiểu dáng thời trang, chất liệu thoáng mát, giá tốt. Shopee Thanh Toán Linh Hoạt, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8958: {
				intro: "Hàng trăm mẫu Quần Jeans Dài, Jeans Rách, Short Jeans, màu sắc nam tinh, trẻ trung, vải đẹp. Shopee Giao Hàng Miễn Phí, Nhanh Chóng trên toàn quốc. MUA NGAY!",
				intro_short: "0"
			},
			8998: {
				intro: "Hàng trăm mẫu Giày Mọi Mũi Nhọn, Giày Mọi Mũi Nhọn, Mũi Vuông cao cấp, kiểu dáng thời trang, giá tốt. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			8999: {
				intro: "Rất nhiều mẫu Giày Oxford Nữ đẹp, êm ái, tôn dáng chân, kiểu dáng đa dạng, mẫu mới, giá cực ưu đãi. Giao hàng miễn phí, trả hàng dễ dàng. Xem ngay!",
				intro_short: "0"
			},
			9000: {
				intro: "Rất nhiều mẫu Giày Búp Bê đẹp, thời trang, mẫu mới, êm chân, nhiều kích cỡ, ưu đãi cực sốc. Giao hàng tận nơi miễn phí, trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			9033: {
				intro: "Rất nhiều mẫu Cài Áo Vải, Cài Áo Đình Đá, Cài Áo Kim Loại,..độ bền cao, kiểu dáng độc đáo, xinh xắn. Chat ngay với Shopee để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			9034: {
				intro: "Rất nhiều Bộ Trang Sức đẹp, sang trọng, mẫu mới 2018, cập nhật mỗi ngày. Giá cực ưu đãi, miễn phí vận chuyển, trả hàng - hoàn tiền đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			9035: {
				intro: "Rất nhiều Lắc Chân Nữ với chất liệu như vàng, bạc, inox,...kiểu dáng độc đáo, cá tính, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			9036: {
				intro: "Hàng trăm Nhẫn Nữ, Nhẫn Nam Thời Trang, với chất liệu inox, bạc, mạ vàng, đá quý,...giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			9037: {
				intro: "Chọn ngay những chiếc Vòng Cổ  Vàng, Bạc, Vòng Cổ Thời Trang, Vòng Cổ Choker đa kiểu,...với giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			9038: {
				intro: "Rất nhiều mẫu Bông Tai Giọt Nước, Bông Tai Dài, Bông Tai Sát Tai, Bông Tai Sát Tai,..từ chất liệu bạc, vàng,..cao cấp. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Tận Nơi. XEM NGAY!",
				intro_short: "0"
			},
			9039: {
				intro: "Rất nhiều Vòng Tay Trang Sức, Vòng Tay Phong Thủy, chất liệu inox, đồng, gỗ, đã cao cấp. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			9040: {
				intro: "Rất nhiều mẫu Găng Tay Chống Nắng, Găng Tay Thể Thao, Găng Tay Phượt với chất liệu dạ, len, thun cao cấp. Shopee Giao Hàng  Miễn Phí, Nhanh Chóng, Trả Hàng Hoàn Tiền Đơn Giản. XEM NGAY!",
				intro_short: "0"
			},
			9041: {
				intro: "Hàng trăm Sản Phẩm Tất đa dạng về kiều dáng: Tất Cổ Cao, Tất Cổ Ngắn, Tất Len, Tất Da,..với chất liệu Cotton, Len, Da cao cấp. Chat ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			9042: {
				intro: "Nhiều mẫu Khăn Choàng Tua Rua,  Khăn Choàng Lụa, Khăn Choàng Len,...màu sắc thanh lịch, nhiều kích cỡ khác nhau. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			9303: {
				intro: "Hàng trăm Balo Bes Gái, Balo Bé Trai cao cấp, kiểu dáng xinh xắn, gọn nhẹ, họa tiết và màu sắc gần gũi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			9566: {
				intro: "Rất nhiều Áo Len & Áo Nỉ Nam thời trang, cao cấp, mẫu mới, giá cực hấp dẫn, giao hàng tận nơi miễn phí. Shopee đảm bảo chất lượng hàng hóa với chính sách trả hàng - hoàn tiền. Mua ngay!",
				intro_short: "0"
			},
			9567: {
				intro: "Hàng trăm Áo Nỉ Cổ Tròn, Áo Len Cổ Tim, Cổ Lọ kiểu dáng thời trang, chất liệu cao cấp, giá ưu đãi. Shopee Giao Hàng Tận Nơi, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			9568: {
				intro: "Rất nhiều mẫu Đồ Bộ Thời Trang, Đồ Bộ Thể Thao, Đồ Bộ Mặc Nhà, với chất liệu vải thoáng mát, cao cấp, bền đẹp, kiểu dáng trẻ trung. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			9569: {
				intro: "Rất nhiều Đồ Bộ Thể Thao, Đồ Bộ Mặc Nhà Cho Nam, vải thun, nỉ cao cấp, giá tốt. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt, Giao Hàng Nhanh. XEM NGAY!",
				intro_short: "0"
			},
			9570: {
				intro: "Đa dạng nhiều mẫu đồ đôi như áo khoác đôi, áo thun đôi kiểu dáng trẻ trung. Shopee Giao Hàng Miễn Phí. Đảm Bảo Nhận Hàng, Hoặc Được Hoàn Lại Tiền. XEM NGAY",
				intro_short: "0"
			},
			9571: {
				intro: "Nhiều mẫu Đồ Đôi như Dép Đôi, Quần Áo Đôi, Trang Sức Đôi,.. kiểu dáng trẻ trung, năng động, cá tính. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Chính Sách Trả Hàng Và Hoàn Tiền đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			9572: {
				intro: "Nhiều balo nam đẹp, balo hàn quốc, túi đeo hông cao cấp, túi đeo chéo thời trang 2018, mẫu mã mới cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			9573: {
				intro: "Hàng trăm mẫu Túi Nam ,Ví Nam chính hãng từ Praza, Kangaru, LW, Baellery, Hanama,.. cao cấp giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng MUA NGAY!",
				intro_short: "0"
			},
			9574: {
				intro: "Rất nhiều Thắt Lưng Nam Khóa Kim, Thắt Lưng Nam Trượt, cao cấp, kiểu dáng thời trang. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			9575: {
				intro: "Hàng trăm Dây Chuyền, Mặt Dây Chuyền với chất liệu cao cấp, sang trọng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Thanh Toán COD. MUA NGAY!",
				intro_short: "0"
			},
			9576: {
				intro: "Nhiều Găng Tay Chống Năng, Găng Tay Đi Xe, Găng Tay Cảm Ứng,... chất liệu cao cấp, đa dạng kích cỡ, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			9577: {
				intro: "Chọn ngay cho mình Nón Mũ Thời Trang, Mũ Len , Mũ Vành, Mũ Snapback , Mũ Lưỡi Trai,..được bán với giá tốt tại Shopee. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			9594: {
				intro: "Rất nhiều mẫu mắt kính nam thời trang từ Porsche, Rayban, Xiaomi, Exfash,... đẹp, mẫu mới, chống UV tốt với giá ưu đãi. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			9595: {
				intro: "Rất nhiều Kính Mắt Nam thời trang, mẫu mới 2018, phù hợp nhiều khuôn mặt, giá ưu đãi, giao hàng tận nơi, trả hàng đơn giản, bảo hành uy tín. Mua ngay!",
				intro_short: "0"
			},
			9607: {
				intro: "Đồng Hồ chính hãng, đồng hồ cơ cao cấp từ các thương hiệu Timex; DW, Julius... mẫu mã mới cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			9608: {
				intro: "Nhiều Phụ Kiện Đồng Hồ chính hãng, cao cấp từ các thương hiệu Skmei, Wwor,... Shopee Đảm Bảo Nhận Hàng, Hoặc Được Hoàn Lại Tiền. Giao Hàng Miễn Phí. XEM NGAY.",
				intro_short: "0"
			},
			9610: {
				intro: "Nhiều đồng hồ nam đẹp 2018, đồng hồ nam dây da cao cấp mẫu mới từ các thương hiệu chính hãng như Orient, Seiko... Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			9612: {
				intro: "Nhiều đồng hồ nữ đẹp mẫu mới 2018 cập nhật liên tục, đồng hồ nữ dây da cao cấp từ các thương hiệu Casio, Timex, DW... Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			9615: {
				intro: "Mua ngay cho bé yêu những chiếc Đồng Hồ Trẻ Em thời trang, cá tính và ấn tượng với mức giá hấp dẫn, dịch vụ giao hàng tận nhà an toàn, chuyên nghiệp chỉ có tại Shopee.vn. Mua ngay!",
				intro_short: "0"
			},
			9669: {
				intro: "Rất nhiều Sản Phẩm Vệ Sinh Phụ Nữ như Cốc Nguyệt San, Que Thử Thai, Dung Dịch Vệ Sinh Phụ Nữ, an toàn hiệu quả. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			9671: {
				intro: "Rất nhiều Kem Đánh Răng, Bàn Chải Răng từ P/S, Close Up, Colgate,... diệt khuẩn, khử mùi, làm trắng răng hiệu quả với giá tốt. Shopee giao hàng miễn phí. Xem ngay! ",
				intro_short: "0"
			},
			9672: {
				intro: "Rất nhiều Bàn Chải Răng, Kem Đánh Răng Chăm Sóc Răng Miệng từ Colgate, P/S, Crest,... chăm sóc nhẹ nhàng, hiệu quả cho hàm răng chắc khỏe. Giao hàng miễn phí, ưu đãi cực sốc. MUA NGAY!",
				intro_short: "0"
			},
			9673: {
				intro: "Rất nhiều Máy Massage Và Thiết Bị Y Tế với thương hiệu nổi tiếng như Claigio Gavanic, Ohui, Hitachi,...Shopee sẽ Giao Hàng Miễn Phí. Xem Ngay!",
				intro_short: "0"
			},
			9674: {
				intro: "Rất nhiều Cân Phân Tích Mỡ Thừa, Máy Rung Giảm Mỡ cao cấp từ các thương hiệu  Omron, Laica, Camy, Vibro, X5,.. chính hãng. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			9675: {
				intro: "Hàng trăm Đồ Thể Thao & Đồ Du Lịch, Vali, Túi Xách,... chính hãng, cao cấp với giá cực kỳ ưu đãi, chat trực tiếp với shop, giao hàng tận nơi tại Shopee. Mua ngay!",
				intro_short: "0"
			},
			9676: {
				intro: "Nhiều Gối Cổ Du Lịch, Bình, Cốc Đựng Nước, Vali Du Lịch,..chất liệu cao cấp, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			9677: {
				intro: "Rất nhiều Túi Ngủ, Dụng Cụ Du Lịch, Võng Du Lịch tiện lợi, màu sắc đa dạng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			9678: {
				intro: "Rất nhiều Máy Tập Thể Dục Tại Nhà, Dụng Cụ Thể Thao, Đồ Tập Yoga,... cao cấp, chính hãng với giá tốt, chat trực tiếp với shop để được tư vấn tận tình tại Shopee! Mua ngay!",
				intro_short: "0"
			},
			9679: {
				intro: "Hàng trăm Găng Tay Boxing, Vợt Cầu Lông, Tất Bóng Rổ cao cấp, chất lượng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng MIễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			9680: {
				intro: "Rất nhiều phụ kiện thể thao như vợt cầu lông, trái cầu lông, quả bóng đá, bóng rổ chất lượng cao, giá cực tốt tại Shopee.vn. Giao hàng miễn phí toàn quốc. Mua ngay!",
				intro_short: "0"
			},
			9681: {
				intro: "Nhiều Quần Áo Thể Thao, Dụng Cụ Thể Thao, Bóng Thể Thao Cao Cấp từ Nike, Adidas, Coolstep, Somoon,..chính hãng. Shop Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			9682: {
				intro: "Rất nhiều mẫu Quần Áo Bơi, Dung Cụ Bơi Lội cao cấp, chất liệu an toàn, bền đẹp được phân phối tại Shopee với giá ưu đãi, Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Và Hoàn Tiền. XEM NGAY! ",
				intro_short: "0"
			},
			9683: {
				intro: "Rất nhiều Cần Câu, Phao Bơi, Kính Bơi với chất liệu an toàn, bền, dẻo. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			9684: {
				intro: "Rất nhiều Giày Và Trang Phục Thể Thao thời trang, sành điệu từ NIke, Adidas, Vancy,...giá cực ưu đãi. Shopee Đảm Bảo Nhận Hàng, chát ngay với Shop để được tư vấn tận tình!",
				intro_short: "0"
			},
			9685: {
				intro: "Rất nhiều mẫu Giày Thể Thao và Trang Phục Thể Thao từ Addidas, Nike, Converse,... chính hãng, kiểu dáng thời trang, cá tính với giá tốt. Chat ngay với Shopee để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			9686: {
				intro: "Rất nhiều mẫu Túi Xách Du Lịch, Vali Du Lịch, kiểu dáng tiện lợi, sang trọng, ngăn chứa rộng rãi, chính hãng từ Leave Sking, Kittym, Lock & Lock. Shopee Giao Hàng Miễn Phí, Hoặc Trả Hàng Và Hoàn Tiền đơn giản. XEM NGAY! ",
				intro_short: "0"
			},
			9687: {
				intro: "Hàng ngàn mẫu Vali, Túi Xách Du Lịch từ Samsonite, Macat, Hanama,... cao cấp với giá cực ưu đãi, giao hàng nhanh chóng, miễn phí, Shopee đảm bảo chất lượng. Xem ngay!",
				intro_short: "0"
			},
			9688: {
				intro: "Rất nhiều sản phẩm Đồ Bảo Hộ như găng tay, nón bảo hiểm, bằng bảo vệ đùi, gối,...hàng đảm bảo chất lượng. Chat ngay với Shop để được tư vấn tận tình.Xem Ngay!",
				intro_short: "0"
			},
			9689: {
				intro: "Hàng trăm Khăn Đa Năng, Mũ Bảo Hiểm, Khẩu Trang Ninja, chất liệu cotton thoàng mát, cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt.MUA NGAY!",
				intro_short: "0"
			},
			9690: {
				intro: "Rất nhiều Phụ Kiện Thể Thao, Phụ Kiện Du Lịch cao cấp từ các thương hiệu như Adidas, Nikula, Miniso, Tmax, Yonex,..chính hãng, giá tốt. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			9691: {
				intro: "Hàng trăm Phụ Kiện Du Lịch, Phụ Kiện Thể Thao chất liệu cao cấp, thiết kế tiện lợi, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			9696: {
				intro: "Hàng trăm mẫu Balo Trẻ Em, Balo Thời Trang, kiểu dáng trẻ trung, thanh lịch, chất liệu cao cấp, bền đẹp. Shopee Đảm Bảo Nhân Hàng, Giao Hàng Miễn Phí, Trả Hàng và Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			9697: {
				intro: "Rất nhiều Túi Xách Tay, Túi Vali Kéo, Túi Xách Du Lịch thiết kế tiện lợi, kiểu dáng thời trang, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			9698: {
				intro: "Rất nhiều Vali Vải, Bộ Vali, Vali Nhựa từ các thương hiệu Sakos, TRIP, Lock & Lock,  Macat, Bi&Ti,... chính hãng. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			9824: {
				intro: "Rất nhiều Đồ Ăn Vặt, Đồ Đóng Hộp, Đồ Dùng, Gia Vị Làm Bánh tiện lợi, an toàn vệ sinh thực phẩm, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			9827: {
				intro: "Rất nhiều Đồ Ăn Vặt như Thực Phẩm Đóng Gói, Đồ Ăn Đóng Hộp, Thực Phẩm Sấy Khô,...thơm ngon khó cưỡng. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			9828: {
				intro: "Rất nhiều Đồ Ăn Vặt & Đồ Khô thơm ngon, an toàn thực phẩm, rõ ràng nguồn gốc, giá cực ưu đãi. Giao hàng miễn phí nhanh chóng, thanh toán linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			9829: {
				intro: "Rất nhiều loại Đậu & Hạt Dinh Dưỡng từ KirkLand, Hương Việt, Bioitalia,... cao cấp, chính hãng, giàu dinh dưỡng với giá siêu hấp dẫn, giao hàng miễn phí. Xem ngay!",
				intro_short: "0"
			},
			9830: {
				intro: "Hàng trăm Hạt Dinh Dưỡng, Quả Sấy, Đồ Ăn Vặt, an toàn vệ sinh thực phẩm, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt, Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			9831: {
				intro: "Rất nhiều Đồ Hộp & Đồ Đóng Gói từ Nestle, Vissa, Kirkland,... cao cấp, hương vị thơm ngon, dinh dưỡng, giá cực hấp dẫn, giao hàng miễn phí tận nơi. Xem ngay!",
				intro_short: "0"
			},
			9832: {
				intro: "Hàng trăm Đồ Ăn Vặt, Thức Uống Đóng Gói, Hộp cao cấp, an toàn vệ sinh thực phẩm, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			9833: {
				intro: "Hàng ngàn Đồ Dùng Nấu Ăn & Dụng Cụ Làm Bánh cao cấp, đa dạng mẫu mã, chất liệu tốt với giá cực ưu đãi chỉ có tại Shopee. Giao hàng miễn phí, khuyến mãi hấp dẫn, trả hàng đơn giản. Mua ngay!",
				intro_short: "0"
			},
			9834: {
				intro: "Rát nhiều  Nguyên Liệu, Bột Làm Bánh, Dụng Cụ Làm Bánh chính hãng từ  UBL, Panasonic, Toshiba,...Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			9835: {
				intro: "Đa dạng nhiều sản phẩm Đồ Uống như Nước Giải Khát, Sữa, Trà,... từ PEPSI, COCACOLA,... cung cấp năng lượng và dinh dưỡng cho cơ thể. Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			9836: {
				intro: "Rất nhiều loại Đồ Uống như Trà, Nước Ngọt, Bột Pha Hương Liệu, Sữa Dinh Dưỡng,...bổ dưỡng, an toàn. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			9837: {
				intro: "Rất nhiều Đặc Sản Việt Sấy Khô cao cấp, ngon bổ dưỡng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			9838: {
				intro: "Rất nhiều Thực Phẩm Dạng Hạt, Thực Phẩm Khô, Nguyên Liệu Thực Phẩm cao cấp, an toàn vệ sinh thực phẩm. Chat ngay với Shop để được tư vấn tận tình, Shop Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			9839: {
				intro: "Rất nhiều Quà Biếu Lưu Niệm, Quà Biếu Thực Phẩm từ Daedong, King Baraka, Ensure, Siang,..chính hãng, cao cấp. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Giao Hàng Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			9840: {
				intro: "Hàng trăm Quà Tặng Trang Trí, Quà Tặng Dinh Dưỡng & Sức Khỏe cao cấp, bổ dưỡng, giá ưu đãi. Shopee Giao Hàng Nhanh Chóng Toàn Quốc, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			9861: {
				intro: "Rất nhiều Đồ Dùng Cho Thú Cưng như Quần Áo, Thực Phẩm, Đồ Dùng Sinh Hoạt Cho Thú đẹp, cao cấp, chất lượng, ưu đãi lớn. Giao hàng tận nơi, trả hàng đơn giản. Mua ngay!",
				intro_short: "0"
			},
			9862: {
				intro: "Chọn ngay Thức Ăn Thú Cưng, Tã Lót Vệ Sinh, Sữa Tắm Thú Cưng từ Royal Cabin, Whiskas, Friskies, Purmi,..chính hãng, an toàn. Shopee Giao Hàng MIễn Phí, Trả Hàng Hoàn Tiền đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			9865: {
				intro: "Nhanh tay sắm ngay những bộ Trang Phục Mùa Đông ấn tượng cho phái đẹp với những chiếc áo khoác, váy và quần mùa đông sang trọng, cá tính cùng mức giá ưu đãi, dịch vụ giao hàng tận nhà chỉ có tại Shopee.vn. Mua ngay!",
				intro_short: "0"
			},
			9866: {
				intro: "Đa dạng nhiều mẫu Quần Áo Thời Trang, Áo Khoác Nữ, Quần Nữ, Phụ Kiện Quần Áo với kiểu dáng thể thao, trẻ trung, sang trọng. Shopee Đảm Bảo Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền, Giao Hàng Tận Nơi Trên Toàn Quốc. MUA NGAY!",
				intro_short: "0"
			},
			9901: {
				intro: "Rất nhiều quạt trần, quạt bàn, treo tường,... từ Kangaroo, Panasonic, Senko, Asia,... đẹp, tiết kiệm điện. Ưu đãi sốc, giao miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			9902: {
				intro: "Hàng trăm Máy Điều Hòa 1 Chiều, Điều Hòa 2 Chiều hoạt động ổn định, thiết kế hiện đại, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí, trả hàng hoàn tiền. XEM NGAY!",
				intro_short: "0"
			},
			9903: {
				intro: "Hàng Trăm Máy Tạo Độ Ẩm, Máy Lọc Không Khí từ Xiaomi, Beurer, Cuckoo, Sharp,.. chính hãng, giá cực hấp dẫn. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			9904: {
				intro: "Nhiều máy nước nóng trực tiếp & gián tiếp Ferroli, Ariston, Legend, Panasonic,... uy tín, tính năng an toàn, giá ưu đãi. Miễn phí giao, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			9905: {
				intro: "Rất nhiều Đèn Sưởi, Quạt Sưởi tù Panasonic, Toshiba, Senko,... chính hãng, tiết kiệm điện giá cực đãi. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			9906: {
				intro: "Rất nhiều Bàn Ủi Hơi Nước, Bàn Ủi Khô từ Philips, Bluehouse, Kangaroo, Toptek, Riccar,.. chính hãng, cao cấp, giá hấp dẫn. Chat ngay với Shop dể được tư vấn tận tình, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			9907: {
				intro: "Chọn ngay các Thiết Bị Chăm Sóc Quần Áo,  Máy Sấy Quần Áo, Máy Cắt Lông Xù,  từ các thương hiệu Toshiba, Ariston, Electrolux, LG,..với giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			9908: {
				intro: "Mua Bàn Ủi Hơi Nước Philips, Sunhouse, Tefal,... cao cấp, nhiều dòng, ủi nhanh, tiết kiệm điện, dễ sử dụng, giá cực ưu đãi, giao hàng miễn phí, bảo hành uy tín. Xem ngay!",
				intro_short: "0"
			},
			9909: {
				intro: "Chọn ngay Bàn Ủi  Khô, Bàn Ủi Khô Phổ Thông , Bàn Ủi Khô Cao Cấp, với các chức năng ưu việt, hiện đại, có thể sử dụng cho nhiều loại vải,...Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			9910: {
				intro: "Chọn ngay Máy May Gia Đình, Máy May Mini, Máy May Đa Chức Năng,..hỗ trợ công việc may vá quần áo tiện lợi, nhanh chóng. Shopee Đảm Bảo Nhận hàng, Giao Hàng Miễn Phí/. XEM NGAY!",
				intro_short: "0"
			},
			9911: {
				intro: "Rất nhiều máy hút bụi gia đình từ Hitachi, Electrolux, Sharp, Xiaomi,... công suất lớn, hút nhanh, dễ vệ sinh, ưu đãi lớn. Giao hàng nhanh, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			9912: {
				intro: "Mua robot hút bụi thông minh từ Xiaomi, Medion, Eufy, Haier, Toshiba... dễ sử dụng, hút sạch, giá ưu đãi. Thanh toán COD, bảo hành uy tín, giao miễn phí. Click ngay!",
				intro_short: "0"
			},
			9914: {
				intro: "Hàng trăm Máy Giặt Lồng Nghiêng, Máy Giặt Lồng Nghiêng, tiết kiệm điện, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			9916: {
				intro: "Rất nhiều  dòng Tủ Lạnh: Tủ Lạnh 1 Cửa, 2 Cửa, Tủ Lạnh Miini,... chính hãng, bảo hành uy tín. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			9917: {
				intro: "Rất nhiều Máy Hút Khói Âm Tủ, Máy Hút Khói Có Ống Khói chính hãng từ Malloca, Teka, Taka,...giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Tận Nơi. MUa MUA NGAY!",
				intro_short: "0"
			},
			9943: {
				intro: "Hàng ngàn dụng cụ cầm tay, dụng cụ điện chính hãng từ Bosch, Makita, Hitachi,... bảo hành uy tín, giá tốt bất ngờ. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			9944: {
				intro: "Rất nhiều Dụng Cụ Sửa Chữa Và Dụng Cụ Cẩm Tay Gia Đình tiện ích, giá hấp dẫn. Shopee Giao Hàng MIễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			10033: {
				intro: "Rất nhiều mẫu Tóc Giả như Tóc Giả Làm Từ Tóc Thật hoặc Tóc Giả Làm Từ Sợi Nhân Tạo, cao cấp, đẹp, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			10034: {
				intro: "Rất nhiều Phụ Kiện Tóc, Kẹp Tóc, Cột Tóc, Băng Đô, Tóc Giả,... đẹp, chất lượng tốt, hàng mới mỗi ngày, giá cực ưu đãi, giao hàng miễn phí. Chat ngay với shop để được tư vấn!",
				intro_short: "0"
			},
			10035: {
				intro: "Hàng trăm Kính Mát Thời Trang, Kính Mát Giả Cận, Kính Mát Bảo Hộ, đa dạng kiểu dáng, màu sắc. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			10174: {
				intro: "Hàng trăm mẫu Đồng Hồ Nam Dây Da, Dây Kim Loại tử Casio, DW, Channel,... chính hãng, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Đảm Bảo Nhận Hàng. MIUA NGAY!",
				intro_short: "0"
			},
			10175: {
				intro: "Hàng trăm mẫu Đồng Hồ Điện Tử Nam, Đồng Hồ Điện Tử Kết Hợp Cơ, Đồng Hồ Thông MInh từ Skmei, Casio, Swatch, Apple,...chính hãng. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			10176: {
				intro: "Rất nhiều Đồng Hồ Kim Dây Da, Đồng Hồ Kim Dây Kim Loại, cao cấp, kiểu dáng sang trọng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng mễn phí. MUA NGAY!",
				intro_short: "0"
			},
			10177: {
				intro: "Rất nhiều Đồng Hồ Điện Tử Nữ đẹp, chính hãng từ Skmei, Casio,... mẫu mới mỗi ngày, giá cực sốc. Miễn phí vận chuyển, bảo hành uy tín, trả hàng nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			10178: {
				intro: "Hàng trăm mẫu Đồng Hồ Kim Dây Da Cho Bé, Đồng Hồ Kim Để Bàn,..từ các thương hiệu như Casio, Citizen, Skmei,...với giá ưu đãi, hàng chất lượng. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			10179: {
				intro: "Hàng trăm Đồng Hồ Led, Đòng Hồ Định Vị Chống Nước, màn hiinh cảm ứng, kiểu dáng xinh xắn, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			10183: {
				intro: "Rất nhiều Gọng Kính Cận Nhựa Dẻo, Nhựa Cứng, Gọng Kính Cận Kim Loại cao cấp, kiểu dáng thời trang. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			10205: {
				intro: "Hàng trăm đôi giày cao gót, giày đế xuồng nữ đẹp, giá rẻ hấp dẫn tại Shopee.vn. Cam kết giao hàng tận nhà miễn phí toàn quốc. Thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			10206: {
				intro: "Hàng trăm Giày Búp Bê Thuê, Giày Búp Bê Đế Độn cao cấp, kiểu dáng thời trang, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			10238: {
				intro: "Hàng trăm phụ kiện giày như dây giày, hộp đựng giày, xịt khử mùi hôi giày,...đa dạng mẫu mã, giá cực tốt tại Shopee.vn. Giao hàng miễn phí tận nhà. Mua ngay!",
				intro_short: "0"
			},
			10239: {
				intro: "Hàng trăm Thiết Bị Vệ Sinh, Bảo Quản Giày cao cấp, tiện ích, giá cực ưu đãi. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			10256: {
				intro: "Nhiều sách online hay và hấp dẫn, sách dạy nấu ăn, sách giáo khoa, tiểu thuyết ngôn tình lôi cuốn, thú vị. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			10260: {
				intro: "Rất nhiều Đồ Dùng Học Tập, Văn Phòng Phẩm, Sách Truyện mới, cao cấp từ Deli, Thiên Long, M&G,... với giá cực ưu đãi, mẫu mã đẹp, giao hàng miễn phí tại Shopee. Xem ngay!",
				intro_short: "0"
			},
			10261: {
				intro: "Rất nhiều Flashcard Tiếng Anh, Flashcard thần tượng K-POP, Flashcard cho bé,... chất lượng tốt, giá ưu đãi, giao hàng tận nơi nhanh chóng, trả hàng - hoàn tiền đơn giản theo quy định. Xem ngay!",
				intro_short: "0"
			},
			10262: {
				intro: "Rất nhiều loại Tập Vở, Sổ Ghi Chú với giấy đẹp, trắng, không nhòe mực, bìa đẹp. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. CLICK MUA NGAY!",
				intro_short: "0"
			},
			10263: {
				intro: "Hàng trăm Đồ Dùng Văn Phòng, Đồ Trang Trí  tiện ích. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			10323: {
				intro: "Rất nhiều Sách Giáo Dục Chuyên Môn, Sách Giáo Dục Cho Bé từ NXB Nhi Đồng, NXB Trẻ, Alpha Book. Shopee Giao Hàng Miễn Phí, Thanh Toán Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			10325: {
				intro: "Rất nhiều Sách Y Học, Sách Giáo Dục Trẻ Em , Sách Kiến Thức Mang Thai Đơn Giản với nhiều thông tin bổ ích, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			10330: {
				intro: "Rất nhiều Sách Học Tiếng Ngoại Ngữ, Sách Truyện Ngoại Ngữ, giúp bạn cải thiện ngoại ngữ của mình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			10332: {
				intro: "Rất nhiều truyện tranh thiếu nhi bổ ích cho trẻ như truyện tranh Nhật Bản, truyện tranh giúp bé phát triển trí tuệ. Shopee hỗ trợ giao hàng tận nhà. Click ngay!",
				intro_short: "0"
			},
			10333: {
				intro: "Rất nhiều Truyện Tranh Cho Bé 3 - 4 Tuổi, Truyện Tranh Thiếu Niên hay, nội dung phong phú với giá ưu đãi tại Shopee. Giao Hàng Miễn Phí, Nhanh Chóng, Thanh Toán Tiện Lợi. XEM NGAY!",
				intro_short: "0"
			},
			10335: {
				intro: "Rất nhiều đầu Sách Kinh Tế, Sách Marketing hay từ tác giả nổi tiếng trên toàn Thế Giới với giá tốt, giao hàng tận nơi, trả hàng đơn giản với Shopee. Xem ngay!",
				intro_short: "0"
			},
			10337: {
				intro: "Rất nhiều Sách Kỹ Năng Tư Duy, Sách Kỹ Năng Sống, Sách Nghệ Thuật Giao Tiếp, nội dung hay, gần gũi, phong phú, bổ ích, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			10339: {
				intro: "Rất nhiều thể loại Sách Văn Hoc, Tiểu Thuyết Hay từ các NXB Trẻ, Nhã Nam, Lao Động,...Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền XEM NGAY!",
				intro_short: "0"
			},
			10340: {
				intro: "Rất nhiều Sách Văn Học, Sách Tiểu Thuyết từ các tác giả như Hạ Vũ, Du Phong, Diệp Lạc Vô Tâm, Ngô Tát Tố,.. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			10341: {
				intro: "Rất nhiều Dụng Cụ Văn Phòng Phẩm như Bút Bi, Bút Dạ, Giấy Kiểm Tra, Giấy Note, Dụng Cụ Làm Đồ Handmade,...ngộ nghĩnh, xinh xắn. Chat ngay với người bán trên Shopee để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			10342: {
				intro: "Hàng trăm Sách, Truyện Đĩa, Đồ Dùng Trang Trí, Đồ Dùng Văn Phòng tiện ích, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			10354: {
				intro: "Rất nhiều Máy Massage Trị Thâm Mắt, Máy Massage Trị Liệu Cầm Tay cao cấp, tiện lợi, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí, nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			10356: {
				intro: "Rất nhiều Máy Đo Huyết Áp Omron, Microlife, Medilife,... chính hãng, đo chính xác, dễ sử dụng, giá cực cạnh tranh, bảo hành uy tín, giao hàng miễn phí, trả hàng dễ dàng. Xem ngay!",
				intro_short: "0"
			},
			10357: {
				intro: "Hàng trăm Nhiệt Kế Điện Tử, Nhiệt Kế Hồng Ngoại tiện lợi, cao cấp, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, giao hàng toàn quốc nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			10358: {
				intro: "Rất nhiều Máy Đo Đường Huyết, Bút Lấy Máu, Que Thử Đường Huyết chính hãng từ Beurer, Gluco Dr Auto, Accu Chek, Uright, Omron,...chính hãng, giá tốt. Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			10360: {
				intro: "Rất nhiều Thiết Bị Y Tế Kháng Khuẩn, Bông Băng Y Tế, Thiết Bị Điều Trị Theo Dõi Sức Khỏe cao cấp, giá cực ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			10361: {
				intro: "Rất nhiều loại Băng Vệ Sinh như Diana, Kotex, Laurier,...mặt băng khô thoáng, thấm hút tốt, chống tràn. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			10362: {
				intro: "Rất nhiều dung dịch vệ sinh phụ nữ, xịt phụ khoa từ Dạ Hương, Femfresh, Lactacyd,... kháng khuẩn vùng kín, cân bằng pH. Giao hàng nhanh, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			10363: {
				intro: "Mua que thử thai QuickSeven, QuickStrip, Happy Tick, Power Test,... dễ sử dụng, đo chính xác, giá cực ưu đãi. Giao hàng miễn phí, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			10364: {
				intro: "Mua Online Cốc Nguyệt San  Silicon, Cốc Nguyện San TPE,... từ các nhãn hiệu như Lincup, Yuuki, Diva CupMasmi, Meluna,...giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoat. MUA NGAY!",
				intro_short: "0"
			},
			10365: {
				intro: "Rất nhiều loại Bao Cao Su như Bao Cao Su Có Gai, Bao Cao Su Siêu Mỏng, Bao Cao Su Có Hương Thơm,...từ Durex, Sagami, Niptex. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			10366: {
				intro: "Rất nhiều Gel Bôi Trơn từ các thương hiệu nổi tiếng như Durex, Provocativem Lexy,.. chính hãng, hiệu quả, an toàn sức khỏe. Shopee Giao Hàng Miễn Phí, Tiện Lợi. XEM NGAY!",
				intro_short: "0"
			},
			10367: {
				intro: "Rất nhiều Sản Phẩm Vệ Sinh & Hỗ Trợ Sinh Lý Nam, Nữ từ các nhãn hàng Bảo Xuân, Dr Skin, Dạ Hương,Môc Linh,...với giá ưu đãi. Shopee Đảm Bảo Nhận  Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			10369: {
				intro: "Rất nhiều Sản Phẩm Chăm Sóc Râu như Geil Cạo Râu, Kem Cạo Râu, Dưỡng Da Sau Cạo Râu, Sản Phẩm Kích Thích Mọc Râu,...từ Gillette, Careen, Romano. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			10371: {
				intro: "Hàng trăm Gôm Tạo Kiểu, Sáp Tạo Kiểu, Wax Tạo Kiểu Tóc tiwf Luxurious, L'oreal,..Romano,..chính hãng, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			10372: {
				intro: "Rất nhiều Sữa Tắm, Dầu Gội Cho Nam từ Clear, Nivea Men, Oxy Men,... dưỡng da & tóc hiệu quả, đem lại mùi hương nam tính với ưu đãi hấp dẫn. Giao hàng miễn phí & được đảm bảo chất lượng bởi Shopee. Mua ngay!",
				intro_short: "0"
			},
			10373: {
				intro: "Rất nhiều loại Mỹ Phẩm Chăm Sóc Da Mặt Cho Nam như sữa rửa mặt, gel rửa mặt, kem dưỡng da, dụng cụ chăm sóc râu,..với hàng cao cấp, giá ưu đãi. Chta ngay với Shop để được tư vấn tận tình và giải đáp thắc mắc. XEM NGAY!",
				intro_short: "0"
			},
			10374: {
				intro: "Rất nhiều Xịt & Lăn Khử Mùi Nam từ Adidas, AXE, Romano,... chính hãng, mau khô, mùi hương nam tính, quyến rũ, ưu đãi sốc. Giao hàng miễn phí, thanh toán linh hoạt, trả hàng dễ dàng. MUA NGAY!",
				intro_short: "0"
			},
			10376: {
				intro: "Rất nhiều Băng Keo Trong, Băng Keo Màu tiện dụng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí, nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			10377: {
				intro: "Rất nhiều Bookmark Kim Loại, Bookmark Giấy, Bookmark Nam Châm,... kiểu dáng ngộ nghĩnh, đáng yêu. Chat ngay với Shop để được tư vấn tận tình, Shopee Thanh Toán Linh Hoạt, Tiện Lợi. XEM NGAY!",
				intro_short: "0"
			},
			10378: {
				intro: "Hàng trăm Bút Viết, Dụng Cụ Học Tập với chất liệu, nhựa, gỗ,.. cao cấp, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Thanh Toán COD, Tiện Lợi. XEM NGAY!",
				intro_short: "0"
			},
			10379: {
				intro: "Rất nhiều dòng Máy Tình Bỏ Túi Cơ Bản, Nâng Cao, giải được hệ phương trình, tích phân,...được bán tại Shopee với giá tốt. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền Theo Quy Định. XEM NGAY!",
				intro_short: "0"
			},
			10380: {
				intro: "Mua ngay Bột Dinh Dưỡng Tự Nhiên, Thức Uống Đóng Hộp, hàng cao cấp, an toàn cho sức khỏe, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			10381: {
				intro: "Rất nhiều Viên Uống Chăm Sóc, Hỗ Trợ Điều Trị, Thực Phẩm Chức Bổ Sung Vitamin & Khoáng Chất, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			10382: {
				intro: "Rất nhiều Trả, Cà Phê, Bột Ngũ Cốc & Sản Phẩm Giảm Cân cao cấp, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			10383: {
				intro: "Hàng trăm Thực Phẩm Chức Năng Hỗ Trợ Làm Trắng Da, Trị Nám, Thực Phẩm Chức Năng Hỗ Trợ Cho Tóc, Móng, Da,... từ Swisse Hair Skin Nails, Blackmores Bio Zinc,.. chính hãng. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			10384: {
				intro: "Rất nhiều Bột Thảo Mộc, Bột Nghệ, Bột Trà Xanh,... nguyên chất, rõ ràng xuất xứ, hiệu quả dưỡng da cao. Ưu đãi cực sốc, miễn phí vận chuyển, thanh toán COD. XEM NGAY!",
				intro_short: "0"
			},
			10433: {
				intro: "Rất nhiều Sách Truyện Chữ Cho Bé từ như truyện Nguyễn Nhật Ánh, truyện cổ Grimm, truyện cổ tích,... thú vị, thu hút bé, chất giấy tốt với giá cực ưu đãi. Miễn phí vận chuyển, trả hàng đơn giản với Shopee. Mua ngay!",
				intro_short: "0"
			},
			10434: {
				intro: "Mua ngay Bộ Truyện Doreamon của Nhật Bản với nội dung vui nhộn, phù hợp cho bé, giá cực đãi tại Shopee. Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			10435: {
				intro: "Đầy đủ Truyện Thám Tử Lừng Danh Conan tập mới nhất, truyện bản quyền với giá cực ưu đãi. Giao hàng miễn phí, trả hàng đơn giản. Chat với nhà bán hàng để được tư vấn ngay! ",
				intro_short: "0"
			},
			10436: {
				intro: "Chọn ngay Bộ Truyện One Piece, với các Phiên Bản One Piece độc đáo, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			10437: {
				intro: "Mua ngay Bộ Truyện Naruto của Nhật Bản nội dung hay, bìa đẹp, giá ưu đãi tại Shopee. Chat ngay với nhà bán hàng trên Shopee để dược tư vấn tận tình, nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			10438: {
				intro: "Rất nhiều Truyện Ô Long Viên Dài Kì, Ô Long Viện Kinh Điển hay, tình tiết hấp dẫn.Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Trả Hàng Hoàn Tiền tiện lợi. MUA NGAY!",
				intro_short: "0"
			},
			10439: {
				intro: "Hàng trăm mẫu Thiệp Cưới, Thiệp Sinh Nhật, Thiệp Mừng, Phong Bì với thiết kế đẹp, kiểu dáng sang trọng, xinh xắn. Chat ngay với Shop đẻ được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			10448: {
				intro: "Hàng trăm Sách Tiềng Hàn, Sách Tiếng Nhật, Sách Tiếng Pháp,..giúp bạn trau dồi kiến thức, từ vựng hiệu quả. Shopee Giao Hàng Miễn Phí Thanh Toán Liinh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			10458: {
				intro: "Rất nhiều Từ Điển Từ Vựng, Từ Điển Ngữ Pháp nhiều ngôn ngữ Anh, Pháp, Nhật,..cực hữu ích, giá tốt. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			10459: {
				intro: "Mua sách giáo khoa lớp 1 đến lớp 12 nguyên bộ và từng môn với phiên bản mới nhất, sách chính hãng, với giá cực ưu đãi. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			10460: {
				intro: "Rất nhiều đầu sách giáo dục tham khảo cho người lớn & trẻ em hay, chất liệu bìa đẹp, đa dạng chủ đề. Giao hàng tận nơi miễn phí, thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			10462: {
				intro: "Rất nhiều Sách Tô Màu với những chủ đề đa dạng như xe cộ, con vật, nhà cửa, chữ và số,...giấy đẹp, không lem. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			10568: {
				intro: "Rất nhiều Kính Áp Tròng Không Độ, Kính Áp Tròng Có Độ cao cấp, an toàn. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			10569: {
				intro: "Đa dạng các sản phẩm Phụ Kiện Thắt Lưng Nam Nữ từ Gucci, Dior, Milano, Prada tại Shopee với giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			10570: {
				intro: "Mua ngay Thắt Lưng Nam, Thắt Lưng Nữ đẹp, thời trang, mẫu mới, giá cực ưu đãi. Giao hàng tận nơi miễn phí, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			10571: {
				intro: "Hàng trăm Phụ Kiện Làm Tóc Cô Dâu,  Phụ Kiện Trang Phục Cô Dâu, Chú Rể,.. đa dạng, sang trọng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Tận Nơi. MUA NGAY!",
				intro_short: "0"
			},
			10572: {
				intro: "Chọn ngay Phụ Kiện Cưới, Hộp Quà Cưới sang trọng, cao cấp, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			10573: {
				intro: "Rất nhiều Set Trang Phục, Đồ Nguyên Set, Đồ Bộ Nữ mẫu mới, thời trang, giá cực ưu đãi. Giao hàng tận nơi, khuyến mãi sốc, trả hàng - hoàn tiền nhanh chóng. Xem ngay!",
				intro_short: "0"
			},
			10574: {
				intro: "Hàng trăm mẫu Jumpsuit Dáng Dài, Jumpsuit Dáng Ngắn, Body Jumpsuit với chất liệu thoáng mát, sang trọng, giá tốt. Chat ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			10575: {
				intro: "Rất nhiều mẫu Áo Dài Truyền Thống, Áo Dài Cách tân với chất liệu vải cao cấp, kiểu dáng thời trang trẻ trung, giá uu đãi. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			10576: {
				intro: "Rất nhiều Vải May Mặc, Dụng Cụ May Mặc, May Giày đa dạng, tiện lợi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			10917: {
				intro: "Hàng trăm quần baggy nữ thời trang, quần baggy jean nữ cao cấp, quần baggy nữ công sở mẫu mới 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			10918: {
				intro: "Rất nhiều kiểu Chân Váy Nữ, Chân Vất Xếp Ly, Chân Váy Dài, Chân Váy Ngăn, kiểu dáng thời trang, trẻ trung. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			10919: {
				intro: "Hàng trăm Chân Váy Xếp Ly Dài, Váy Xếp Ly Ngắn với kiểu dáng thời trang, phong cách, giá tốt. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tình, nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			10920: {
				intro: "Rất nhiều mẫu Chân Váy Chữ A đẹp, mẫu mới 2018 thích hợp đi làm, đi chơi, chất vải tốt, nhiều ưu đãi sốc. Giao hàng miễn phí, trả hàng đơn giản, thanh toán linh hoạt với Shopee. Mua ngay!",
				intro_short: "0"
			},
			10921: {
				intro: "Hàng trăm mẫu Đồ Lót Định Hình, Quần Gen Nịt Bụng, Bodysuit Định Hình, Gen Nịt Bụng, với chất liệu cao cấp, từ thương hiệu như Elize, Mollifix, Enfant, Spanx,..Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Nhanh Chóng Trên Toàn Quốc. XEM NGAY!",
				intro_short: "0"
			},
			10922: {
				intro: "Rất nhiều Áo Khoác Bomber Jacket 1 lớp & 2 lớp kiểu dáng thời trang, vải bền đẹp, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Thanh Toán Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			10923: {
				intro: "Hàng trăm Phụ Kiện May Mặc như vải các loại, các loại hạt, khuy khóa và đồ trang trí, len cuộn, với giá cực ưu đãi. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			11087: {
				intro: "Rất nhiều Khẩu Trang Y Tế, Khẩu Trang Vải cao cấp, đa dạng kiểu dáng, với giá cực ưu đãi. Giao hàng miễn phí tận nơi, thanh toán COD, trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			11212: {
				intro: "Rất nhiều Khẩu Trang Bịt Tai, Khẩu Trang Y Tế an toàn, cao cấp, giá cực ưu đãi tại Shopee. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			11265: {
				intro: "Rất nhiều Phụ Kiện Làm Móng, Sơn Móng Tay cao cấp, màu đẹp, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt, Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			11266: {
				intro: "Rất nhiều Bàn Chải Răng Điện Tự Động, Bàn chải răng Cơ Bản từ PS, Colgate, Curaprox,...cao cấp, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			11267: {
				intro: "Rất nhiều Kem Đánh Răng uy tín, giá cực ưu đãi, từ Colgate, Sensodyne, P/S, Crest,... trắng răng, làm giảm ê buốt hiệu quả. Giao hàng miễn phí, trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			11268: {
				intro: "Nhiều Sản Phẩm Làm Trắng Răng như Miếng Dán Trăng Răng, Kem Tẩy Trăng Răng, Máy Laser,..chính hãng  từ Oral Herbal, Green Herb,.. Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			11269: {
				intro: "Rất nhiều Xịt Thơm Miệng, Nước Súc Miệng cho người lớn và trẻ em, an toàn, hiệu quả, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			11270: {
				intro: "Rất nhiều đồ nội thất phòng ngủ đẹp, tủ quần áo, giường ngủ, bàn trang điểm,... đẹp, mẫu mới, chất lượng tốt, ưu đãi lớn. Miễn phí giao, thanh toán COD. Xem ngay! ",
				intro_short: "0"
			},
			11271: {
				intro: "Rất nhiều Đồ Nội Thất Phòng Tắm cao cấp, sang trọng, giá cực ưu đãi, giao hàng miễn phí, bảo hành uy tín, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			11272: {
				intro: "Rất nhiều Bàn Ghế Ăn, Tủ Bếp & Đồ Nội Thất Nhà Bếp, Phòng Ăn đẹp, mẫu mã đa dạng, giá cực ưu đãi, miễn phí vận chuyển, bảo hành uy tín. Mua ngay!",
				intro_short: "0"
			},
			11273: {
				intro: "Hàng trăm Giường Trẻ Em, Bàn Học, Tủ Quần Áo,...chất liệu cao cấp, thiết kế xinh xắn, đáng yêu, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			11274: {
				intro: "Rất nhiều Bàn, Ghế, Tủ & Nội Thất Phòng Làm Việc cao cấp, đẹp, chất lượng tốt, đa dạng kích thước, mẫu mã. Giao hàng miễn phí tận nơi, bảo hành uy tín. Xem ngay!",
				intro_short: "0"
			},
			11275: {
				intro: "Rất nhiều Tủ Giày, Ván Gỗ & Đồ Trang Trí Nội Thất Hành Lang & Lối Vào đa dạng, độc đáo với giá siêu sốc. Giao hàng miễn phí, bảo hành uy tín, trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			11276: {
				intro: "Rất nhiều kệ phòng tắm đẹp bằng inox, nhựa,... cao cấp, đa năng, thông minh, đẹp với giá ưu đãi. Mẫu mã đa dạng, giao hàng miễn phí, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			11277: {
				intro: "Hàng trăm mẫu Rèm Phòng Tắm từ IKEA, Bjornan,... đẹp, cao cấp, đa dạng mẫu mã, họa tiết, chất liệu tốt, bền, giá cực ưu đãi. Shopee đảm bảo chất lượng hàng & giao hàng miễn phí. Mua ngay!",
				intro_short: "0"
			},
			11278: {
				intro: "Hàng trăm Túi Giặt Quần Áo, Kẹp Quần Áo,  Nước Giặt Xả tiện ích, giá ưu đãi tại Shopee. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			11279: {
				intro: "Đa dạng kiểu Thùng Rác tiện lợi, Thùng Rác Cỡ Lỡn, Thùng Rác Mini Văn Phòng,...với chất liệu cao cấp, kiểu dáng đẹp. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miền Phí, Nhanh Chóng. CLICK  MUA NGAY!",
				intro_short: "0"
			},
			11280: {
				intro: "Rất nhiều dụng cụ thông cống, vệ sinh toilet tiện lợi, giá rẻ tại Shopee.vn hỗ trợ vệ sinh nhà cửa thật hiệu quả. Shopee giao hàng tận nơi miễn phí. Xem ngay!",
				intro_short: "0"
			},
			11281: {
				intro: "Đa dạng các đồ Phụ Kiện Bàn Ủi, Cầu Là Quần Áo, Cây Phủi Bụi, Xịt Thơm Làm Phẳng Quần Áo,..sản phẩm tiện ích, giá thành hợp lí. Shopee Đẩm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			11282: {
				intro: "Rất nhiều Khăn Lau Có Móc Treo, Khăn Lau Không Móc Treo, vải thấm hút tốt, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			11283: {
				intro: "Hàng trăm Thùng Rác Sinh Hoạt, Thùng Rác Mini, Túi Đụng Rác cao cấp, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			11284: {
				intro: "Rất nhiều Chổi Lau Nhà Tự Động, Chổi Lau Nhà Tự Vắt, Xoay 360 độ, thiết kệ hiện đại, tiện lợi. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			11285: {
				intro: "Rất nhiều Chổi Quét Nhà, Chổi Quét Bụi Đa Năng, tiện lợi, giá cực hấp dẫn. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt, Tiện Lợi. XEM NGAY!",
				intro_short: "0"
			},
			11286: {
				intro: "Chọn ngay Đồ Lau Bụi Quần Áo, Sàn, Tường & Đồ Nội Thất, thiết kế heieejnd đại, tiện ích, giá tốt. Shoppe Giao Hàng Miễn Phí, Thanh Toán Tiện Lợi. XEM NGAY!",
				intro_short: "0"
			},
			11288: {
				intro: "Hàng trăm dây đai di chuyển hàng hóa, bánh xe đẩy chuyên dụng giá cực rẻ tại Shopee.vn. Giao hàng tận nơi miễn phí, nhanh chóng, thanh toán COD linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			11289: {
				intro: "Rất nhiều Khay Xếp Quần Áo tốt, tiện dụng, bền bỉ, đa dạng kích cỡ, giá cực ưu đãi. Miễn phí vận chuyển, thanh toán linh hoạt, trả hàng dễ dàng. XEM NGAY!",
				intro_short: "0"
			},
			11290: {
				intro: "Tủ đựng hồ sơ văn phòng cao cấp, giá hấp dẫn tại Shopee.vn. Đến với Shopee để trải nghiệm kênh mua hàng trực tuyến tiện lợi, giao hàng miễn phí tận nhà. Mua ngay!",
				intro_short: "0"
			},
			11291: {
				intro: "Nhiều kiều Tủ Thuốc Cao, Tủ Thuốc Treo Tường, Hộp Thuốc tiện ích, chất liêu cao cấp, bền đẹp. Chat ngay với Shop để được tư tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA  NGAY!",
				intro_short: "0"
			},
			11292: {
				intro: "Rất nhiều Tủ Giày, Kệ Giày vải, nhựa cao cấp, gấp mở linh hoạt, chất lượng tốt, bảo hành uy tín, giao hàng miễn phí, trả hàng đơn giản. Chat với shop để được tư vấn. Xem ngay!",
				intro_short: "0"
			},
			11295: {
				intro: "Rất nhiều dụng cụ làm vườn như găng tay làm vườn, cuốc, xẻng,... cao cấp, độ bền cao với khuyến mãi hấp dẫn. Miễn phí vận chuyển, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			11296: {
				intro: "Rất nhiều Dụng Cụ Làm Vườn, Nội Thất Ngoài Trời, tư các nhãn hàng như Tiến Đạt, Nội Thất Phậm Hùng, Intex, Karcher,...Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			11297: {
				intro: "Rất nhiều Bàn Ghế, Ô Dù Ngoài Trời, Kệ, Chậu Cây Trồng với chất liệu cao cấp, đa dạng, giá hấp dẫn. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tình, nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			11298: {
				intro: "Rất nhiều loại Đèn Gia Dụng như Đèn Bàn, Đèn Treo Tường, Đèn Cầm Tay, Đèn Xông Tinh Dầu,..,được bán với giá tốt tại Shopee. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			11299: {
				intro: "Rất nhiều Đèn Pin Cầm Tay, Đèn Pin Đội Đầu với thiết kế gọn nhẹ, chất liệu cao cấp, bền, giá ưu đãi. Chat ngay với Shop để đươc tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			11300: {
				intro: "Rất nhiều các loại Bóng Đèn, Linh Kiện Bóng Đèn chính hãng rừ Sharp, General Electric, Sharp, Ikea- thuỵ điển ,.. cao cấp, giá tốt. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			11301: {
				intro: "Rất nhiều đèn ngoài trời, đèn năng lượng mặt trời đẹp, chịu nắng, chịu mưa, độ bền cao với giá cực ưu đãi. Miễn phí vận chuyển, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			11302: {
				intro: "Rất nhiều đèn trần trang trí phòng khách, phòng ngủ, đèn chùm, đèn LED ốp trần,... đẹp, tiết kiệm điện, giá ưu đãi. Giao hàng nhanh, thanh toán đơn giản. Xem ngay! ",
				intro_short: "0"
			},
			11303: {
				intro: "Rất nhiều đèn phòng tắm, đèn tinh dầu, đèn LED dây đồng, đèn cảm biến... đa dạng mẫu mã, tiết kiệm điện, giá ưu đãi. Miễn phí giao hàng, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			11304: {
				intro: "Rất nhiều Chụp Đèn Trang Trí, Chụp Đèn Xông Tinh Dầu chất liệu sứ, kiều dáng đa dạng, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			11310: {
				intro: "Chọn ngay Máy Hàn, Máy Hàn Túi Nilon, Hàn Que, Hàn Thiết,...và Phụ Kiện Máy Hàn tiện ích. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			11311: {
				intro: "Rất nhiều loại Máy Khoan Cầm Tay như Máy Khoan Cầm Tay Động Lực, Máy Khoan Cầm Tay Dùng Pin,... với giá ưu đãi tại Shopee.vn. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			11312: {
				intro: "Rất nhiều Máy Khoan, Máy Cắt Bê Tông tiện dụng, đa năng. Chat ngay với Shop để được tự vấn tận tình, Shopee Giao  Hàng Miễn Phí, Tận Noi. MUA NGAY!",
				intro_short: "0"
			},
			11313: {
				intro: "Hàng trăm Máy Khoan Đa Năng Dùng Điện & Pin cao cấp, tiện ích, giá cực ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			11314: {
				intro: "Hàng trăm Dụng Cụ Sửa Chữa  Xe Máy, Dụng Cụ Sửa Chữa Đồ Dùng Gia Đình tiện ích, giá cực ưu đãi tại Shopee. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			11315: {
				intro: "Chọn ngay Bộ Dụng Cụ Sửa Chữa, Dụng Cụ Cầm Tay đa năng, hàng chất lượng, an toàn khi sử dụng, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình. CLICK MUA NGAY!",
				intro_short: "0"
			},
			11316: {
				intro: "Rất nhiều Máy Ép Trái Cây tốt từ Philips, Bluestone,... chính hãng, bảo hành uy tín, đa dạng công suất. Miễn phí vận chuyển, tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			11317: {
				intro: "Rất nhiều Dụng Cụ Hàng, Máy Hàn Đa Năng, Máy Hàn Miệng Túi,...hàng đảm bảo chất lượng, sử dụng an toàn, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng Trên Toàn Quốc. XEM NGAY!",
				intro_short: "0"
			},
			11318: {
				intro: "Rất nhiều Máy Xịt Rửa từ Yokota, Yamaha, Stanley,... chính hãng, công suất lớn, bảo hành uy tín. Miễn phí vận chuyển tận nơi, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			11319: {
				intro: "Rất nhiều Máy Mài Thẳng, Máy Mài Góc chất liệu cao cấp, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			11320: {
				intro: "Rất nhiều Máy Cắt Sắt, Máy Cắt Bê Tông & Gạch tiện lợi, dễ sử dụng, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			11321: {
				intro: "Nhiều Máy Thổi Hơi Dùng Trong Gia Đình, Máy Thổi Hơi Công Nghiệp, PengLong, Osuka, Zento, Total, Dewalt,... chính hãng, cao cấp. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Khi Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			11322: {
				intro: "Rất nhiều máy vặn vít Bosch, Joust Max, Makita, Total,... cầm tay, dễ sử dụng, đầy đủ phụ kiện, có bảo hành. Ưu đãi sốc, miễn phí giao, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			11323: {
				intro: "Nhiều súng phun sơn điện, súng phun sơn cầm tay từ Total, Joust Max, IWATA,... bảo hành uy tín, dễ sử dụng. Ưu đãi lớn, giao hàng nhanh, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			11324: {
				intro: "Rất nhiều mẫu Áo Sơ Mi Ngắn Tay Nam thời trang, chất liệu thoáng mát, phom áo đẹp, tôn dáng, đa dạng mẫu mã với ưu đãi cực sốc. Giao hàng tận nơi miễn phí, thanh toán COD & chuyển khoản. XEM NGAY!",
				intro_short: "0"
			},
			11325: {
				intro: "Chọn ngay Áo Sơ Mi Nam Tay Dài, Áo Sơ Mi Tay Ngắn với kiểu dáng sang trọng, trẻ trung, chất liệu vải thoáng mát. Chat ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			11326: {
				intro: "Rất nhiều mẫu Áo Sơ Mi Cổ Tàu Cho Nam đẹp, chất vải thoáng mát, bền, khuyến mãi cực sốc. Giao hàng tận nơi miễn phí, trả hàng - hoàn tiền đơn giản. Xem ngay!",
				intro_short: "0"
			},
			11327: {
				intro: "Hàng trăm mẫu Áo Sơ Mi Nam, Áo Sơ Mi Nam Công Sở, Áo Sơ Mi Nam Họa Tiết,...với chất liệu đũi, vải lanh thái thoáng mát, ít nhăn. Shopee Giao Hàng Miễn Phí, Nhanh Chóng Trên Toàn Quốc. XEM NGAY!",
				intro_short: "0"
			},
			11328: {
				intro: "Rất nhiều mẫu Cà Vạt Nam Bản To, Cà Vạt Nam Bản Nhỏ với kiếu dang thanh lịch, vải đẹp, họa tiết độc đáo. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			11329: {
				intro: "Nhiều mẫu Khăn Choàng Nam Len, Khăn Choàng Thổ Cẩm, Khăn Choàng Ô Vuông,.. chất liệu cao cấp, thiết kế đẹp. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			11330: {
				intro: "Hàng trăm mẫu Vòng Tay Nam Dạng Hạt, Vòng Tay Nam Dây Đan, kiểu dáng nam tình, thời trang, phong cách. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			11331: {
				intro: "Rất nhiều Khuyên Tai Nam Dạng Bấm, Khuyên Tai Dạng Chốt với kiểu dáng độc đáo, cá tính, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			11332: {
				intro: "Rất nhiều Hình Xăm Dán, Găng Tay Hình Xăm với các họa tiết độc đáo, cá tình, giá cực ưu đãi. Shopee Giao Hàng Tận Nơi, Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			11333: {
				intro: "Rất nhiều Bộ Đồ Thể Thao, Bộ Ngủ Đông chất vải mềm mịn, kiểu dáng thời trang, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			11334: {
				intro: "Rất nhiều Bộ Quần Đùi, Bộ Quần Dài dành cho nam với thiết kế thời trang, mạnh mẽ cá tính, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng tận nơi. XEM NGAY!",
				intro_short: "0"
			},
			11335: {
				intro: "Rất nhiều Đồ Thể Thao Dạng Dài, Đồ Thể Thao Dạng Ngắn, chất liệu cao cấp, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Giá Tốt . MUA NGAY! ",
				intro_short: "0"
			},
			11336: {
				intro: "Rất nhiều Áo Thun Đôi, Áo Hoodie Đôi, Áo Khoác Đôi kiểu dáng thời trang, trẻ trung, vải mát, co giãn tốt. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí.MUA NGAY!",
				intro_short: "0"
			},
			11337: {
				intro: "Rất nhiều Quần Short Đôi, Quần Đôi Đi Biển, Quần Lót Đôi với chất liệu vải cotton cao cấp, con giãn thoải mái. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			11338: {
				intro: "Hàng trăm Nhẫn Đôi, Dây Chuyên, Quần Sịp Đôi độc đáo, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			11339: {
				intro: "Đa dạng kiểu Áo Gia Đình Cổ Tròn, Áo Sơ Mi Gia Đình thiết kế phong cách, chất liệu vải thoáng mát. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			11340: {
				intro: "Hàng trăm mẫu Balo Nam Đẹp, Balo Du Lịch, Balo Chống Trộm chính hãng từ Coolbell, Bobby, Kos, Wolfskin,.. giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			11341: {
				intro: "Rất nhiều mẫu Cặp Công Sở, Túi Xách Công Sở Nam chất liệu da & vải chống thấm tốt, kiểu mới, đẹp, thời thượng, độ bền cao. Miễn phí vận chuyển, thanh toán linh hoạt. MUA NGAY! ",
				intro_short: "0"
			},
			11342: {
				intro: "Rất nhiều mẫu Túi Đeo Chéo, Túi Sling,... từ chất liệu da, vải dù, canvas,... đa dạng mẫu mã, xu hướng mới 2018. Giao hàng miễn phí, trả hàng đơn giản. Chat với Shop để được tư vấn. MUA NGAY!",
				intro_short: "0"
			},
			11343: {
				intro: "Rất nhiều Túi Bao Tử Da, Túi Bao Tử Vải cao cấp, kiểu dáng tiện ích, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			11344: {
				intro: "Rất nhiều mẫu túi đeo hông, túi đeo bụng, túi bao tử thể thao, chống nước, nhiều ngăn đa năng, bền bỉ với giá sốc. Giao hàng tận nơi, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			11345: {
				intro: "Rất nhiều mẫu Ví Thời Trang đẹp, mẫu mới 2018, đa dạng mẫu mã, chất liệu tốt, bền, nam tính. Giao hành nhanh miễn phí, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			11346: {
				intro: "Rất nhiều mẫu Ví Đứng Nam chất liệu da cao cấp, kiểu dáng sang trọng, thời trang từ các thương hiệu uy tín như Burberry. Cnk, Boss,..với giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			11347: {
				intro: "Rất nhiều mẫu Kính Cận Gọng Tròn , Gọng Vuông, kiểu dáng thời trang, chất liệu cao cấp, giá ưu đãi. Chat nagy với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			11348: {
				intro: "Đa dạng Kính Lão chất lượng cao, giá tốt, thời trang, tròng cao cấp, chống trầy với giá ưu đãi. Giao hàng miễn phí, bảo hành uy tín, trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			11349: {
				intro: "Hàng trăm Kính Mát Nam Gọng Nhựa & Gọng Kim Loại với kiểu dáng thời trang, trẻ trung, chất liệu tốt, giá mềm. Chat ngay với Shop để được tư vấn tận tình, nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			11350: {
				intro: "Hàng trăm mẫu Kính Thời Trang Nam Gọng Kim Loại & Gọng Nhựa cao cấp, lịch lãm, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			11351: {
				intro: "Rất nhiều Giày Thể Thao Cổ Cao, Giày Thể Thao Cổ Thấp, chất liệu cổ cao, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			11352: {
				intro: "Rất nhiều Giày Thể Thao, Giày Boot Nam Cổ Cao, kiểu dáng thời, chất liệu bền đẹp, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			11353: {
				intro: "Rất nhiều Giày Thể Thao Tăng Chiều Cao Cổ Cao & Cổ Ngắn với kiểu dáng sang trọng, phong cách, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			11354: {
				intro: "Rất nhiều mẫu Giày Lười Vải Nam đẹp, trang nhã, mẫu mới mỗi ngày, dễ phối đồ, giá khuyến mãi sốc. Giao hàng miễn phí, trả hàng nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			11355: {
				intro: "Rất nhiêu Giày Lười Da Công Sở, Giày Lười Da Casual cao cấp, kiểu dáng thời trang.Shopee Giao Hàng Miễn, Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			11356: {
				intro: "Rất nhiều Giày Lười Nam Tăng Chiều Cao Cột Dây & Không Cột Dây, kiểu dáng sang trọng, nam tính, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			11357: {
				intro: "Hàng trăm mẫu Giày Tây Cột Dây, Giây Tây Mũi Nhọn, Giày Tây Truyền Thống với chất liệu da cao cấp, kiểu dáng sang trọng, giá tốt. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			11358: {
				intro: "Hàng trăm giày tây nam không dây bền đẹp, thời trang, giá cực hấp dẫn tại Shopee.vn. Giao hàng miễn phí, nhanh chóng toàn quốc, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			11359: {
				intro: "Hàng trăm giày tây nam tăng chiều cao giá rẻ bất ngờ đã có tại Shopee.vn. Truy cập Shopee để mua hàng giá rẻ, trải nghiệm dịch vụ giao hàng tận nơi nhé. Click ngay!",
				intro_short: "0"
			},
			11360: {
				intro: "Rất nhiều mẫu Dép Xỏ Ngón cho Nam từ Nike, Adidas, Converse,.. chính hãng, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MAU NGAY!",
				intro_short: "0"
			},
			11361: {
				intro: "Rất nhiều mẫu Dép Quai Ngang từ Nike, adidas, Depkool,... cao cấp, giá ưu đãi, mẫu mới cập nhật nhanh, giao hàng miễn phí, đảm bảo trả hàng - hoàn tiền khi không đúng chất lượng. Xem ngay!",
				intro_short: "0"
			},
			11362: {
				intro: "Rất nhiều mẫu Dép Quai Ngang với kiểu dáng thời trang như Dép Crocs Nam, Dép Bít Mũi, Dép Nam Trong Nhà,...hàng chất lượng, giá tốt. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			11363: {
				intro: "Hàng trăm mẫu Sandal Quai Ngang, Dép Quai Ngang,.. với chất liệu da cao cấp, kiểu dáng thời trang, trẻ trung. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Và Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			11364: {
				intro: "Rất nhiều mẫu Giày Sandal Quai Chéo Nam mẫu mới, thời trang, đa dạng kiểu dáng, kích cỡ, giá cực ưu đãi. Vận chuyển miễn phí, trả hàng đơn giản. THAM KHẢO NGAY!",
				intro_short: "0"
			},
			11365: {
				intro: "Hàng trăm Giày Sandal Nam, Giày Sandal Đế Cao Dây Da & Dây Vải cao cấp, bền đẹp, giá tốt. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			11370: {
				intro: "Rất nhiều Pin Sạc Dự Phòng 20000mAh chính hãng từ Xiaomi, Aukey, Yoobao,... bảo hành uy tín, độ bền cao, sạc nhanh. Miễn phí vận chuyển, thanh toán COD đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			11371: {
				intro: "Hàng trăm Pin Sạc 10000Mah bình dân và cao cấp, chính hãng, giá cực ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			11372: {
				intro: "Chọn ngay Pin Sạc Dự Phòng,  Pin sạc lõi  Lithium-Polymer, lõi Cell, lõi Lithium-ion chính hãng, bảo hành uy tín. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			11373: {
				intro: "Rất nhiều Giá Đỡ Điện Thoại Dạng Kẹp, Giá Đỡ Nam Châm, Giá Đỡ Điện Thoại 3 Chân vợi thiết kế tiện lợi, hiện đại. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			11374: {
				intro: "Chọn ngay Kẹp Điện Thoại Để Bàn, Kẹp Điện Thoại Trên Xe Hơi, hàng cao cấp, tiện lợi, thiết kế đẹp. Chat ngay với Shop để được tư vấn. Shopee Giao Hàng Miễn Phí, Tận Nơi Nhanh Chóng.  XEM NGAY!",
				intro_short: "0"
			},
			11375: {
				intro: "Rất nhiều Giá Đỡ Điện Thoại & Máy Tính Bảng với thiết kế hiện đại, tiện ích, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			11376: {
				intro: "Rất nhiều Đồng Hồ Kim Điện Tử Mini & Thể Thao cao cấp, kiểu dáng phong cách cá tính, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			11377: {
				intro: "Hàng trăm Đồng Hồ Kim Điện Tử, Đồng Hồ Kim Điện Tử  Dây Kim Loại cao cấp, giá ưu đãi. Chat ngay với Shop để dược  tư vấn tận tình, giao hàng nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			11378: {
				intro: "Rất nhiều mẫu Áo Bơi, Bikini, Áo Bơi 1 Mảnh,... đẹp, xu hướng mới, chất liệu tốt, bền bỉ, tôn dáng. Giao hàng tận nơi miễn phí, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			11379: {
				intro: "Hàng trăm Quần Bơi Bikini, Quần Bơi Ngắn, Dài dành cho nữ, chất liệu cao cấp, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			11380: {
				intro: "Hàng ngàn mẫu Đồ Bơi Nữ đẹp, gợi cảm, mẫu mới cập nhật liên tục, chất lượng tốt với giá siêu hấp dẫn, giao hàng miễn phí, trả hàng - hoàn tiền theo quy định. Mua ngay!",
				intro_short: "0"
			},
			11381: {
				intro: "Rất nhiều mẫu Áo Thun Đôi, Áo Sơ Mi Đôi kiểu dáng thời trang, trẻ trung, chất liệu vải cao cấp, thoáng mát,...Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			11382: {
				intro: "Hàng trăm mẫu Quần Đôi với kiểu dang thời trang, trẻ trung, phong cách, chất liệu vải thoáng mát được bán tại Shopee với giá ưu đãi. Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			11383: {
				intro: "Hàng trăm mẫu Áo Khoác Đôi Mùa Lạnh, Mùa Hè, Áo Khoác Đôi Thời Trang, chất liệu vải thoáng mát, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Thanh Toán Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			11384: {
				intro: "Rất nhiều Áo Thun Gia Đình, Đồ Cặp Cho Mẹ & Bé cao cấp, vải đẹp, bền, thoáng mát. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			11385: {
				intro: "Hàng trăm Án Thun Tập Nữ, Áo Ngực Thể Thao cao cấp, chất liệu thoáng mát, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí, nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			11386: {
				intro: "Rất nhiều Quần Tập Thể Dục Nam & Nữ cao cấp, vải thoáng mát, thiết kế thoải mái, mẫu mới 2018, giá siêu sốc, ưu đãi khủng. Giao hàng miễn phí, trả hàng dễ dàng. MUA NGAY!",
				intro_short: "0"
			},
			11387: {
				intro: "Rất nhiều Đồ Tập Gym, Đồ Tập Belly Dance, Đồ Tập Ngoài Trời chất liệu vải co giãn, thoáng mát, kiểu dáng thời trang. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			11389: {
				intro: "Hàng trăm váy len, áo len nữ đẹp, cao cấp và thời trang với mức giá cực rẻ tại Shopee.vn. Giao hàng tại nhà miễn phí, tiện lợi, thanh toán linh hoạt. Tìm hiểu ngay!",
				intro_short: "0"
			},
			11390: {
				intro: "Rất nhiều đồ nỉ, đồ bộ nỉ, áo khoác nỉ ấm áp, chất vải tốt, cao cấp, kiểu dáng trẻ trung, năng động với ưu đãi sốc. Giao hàng miễn phí, thanh toán dễ dàng. Xem ngay!",
				intro_short: "0"
			},
			11391: {
				intro: "Rất nhiều bộ đồ lông thú, áo khoác lông thú giá rẻ thời trang, cá tính tại Shopee.vn. Cam kết giao hàng tận nơi miễn phí toàn quốc. Thanh toán linh hoạt. Mua ngay! ",
				intro_short: "0"
			},
			11392: {
				intro: "Rất nhiều Áo Khoác Dạ, Áo Măng Tô Dạ, Chân Váy Dạ, kiểu dáng thời trang, sang trọng. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí, nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			11393: {
				intro: "Rất nhiều Giày Cao Gót trên 10cm, Giày Gót Nhọn, Giày Gót Vuông, Giày Đế Xuồng, kiểu dáng thời trang, cao cấp, giá tốt. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY! ",
				intro_short: "0"
			},
			11394: {
				intro: "Rất nhiều Giày Cao Gót Đế Trụ, Giày Gót Nhọn, Giày Sandal cao cấp, kiểu dáng thời trang, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt, Đơn Giản. MUA NGAY!",
				intro_short: "0"
			},
			11395: {
				intro: "Rất nhiều mẫu Giày Cao Gót Dưới 7cm: Giày Cao Gót Đế Vuông, Giày Cao Gót Đế Vuông,.. kiểu dáng thời trang, trẻ trung. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			11400: {
				intro: "Hàng trăm mẫu Dây Đeo Đồng Hồ Cao Su, Kim Loại, Dây Đeo Đồng Hồ Vải,... cùng Dụng Cụ Thay Dây Đồng Hồ đa dạng. Shopee Giao Hàng Miễn Phí, Nhanh Chóng trên toàn quốc. XEM NGAY!",
				intro_short: "0"
			},
			11402: {
				intro: "Rất nhiều mẫu Phụ Kiện Đồng Hồ như Mặt Đồng Hồ, Pin Đồng Hồ, Máy Đồng Hồ,..được bán tại Shopee với giá ưu đãi. Chat ngay vơi Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			11403: {
				intro: "Rất nhiều Bột Giặt, Nước Giặt, Nước Xả Vải từ Comfort, Downy, OMO, Ariel,... mềm vải, an toàn cho da, giá cực ưu đãi, miễn phí vận chuyển. Chat với nhà bán hàng để được tư vấn thêm nhé!",
				intro_short: "0"
			},
			11404: {
				intro: "Rất nhiều Dung Dịch Lau Sàn, Dung Dịch Vệ Sinh Nhà Bếp cao cấp, giá ưu đãi. Shopee Đảm Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			11406: {
				intro: "Rất nhiều Sẩn Phẩm Khử Mùi Giày Dép, Khử Mùi Cơ Thể, Khử Mùi Phòng, lưu hương lâu, hương thơm dễ chịu. Chat ngay với Shop dể được tư vấn tận tình, nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			11407: {
				intro: "Hàng trăm mẫu Quần Tay Dáng Ôm, Quần Tây Dáng Suông, vải bền, đẹp, ít nhăn, giá tốt. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			11408: {
				intro: "Rất nhiều Áo Khoác Nỉ Nam, Áo Hoodie Nỉ Nam kiểu dáng trẻ trung, cá tính, vải đẹp, giá tốt. Chat ngay với Shop để được tư vấn tận tình, nhanh chóng, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			11409: {
				intro: "Rất nhiều Áo Cardigan nam đẹp, chất liệu len đa dạng thích hợp mùa thu & đông, giá cực ưu đãi, vận chuyển miễn phí, trả hàng - hoàn tiền đơn giản theo quy định. Mua ngay!  ",
				intro_short: "0"
			},
			11410: {
				intro: "Rất nhiều mẫu Áo Mangto Nam đẹp, chất vải tốt, đa dạng mẫu mã, giữ ấm tốt. Giao hàng tận nơi miễn phí, trả hàng đơn giản, thanh toán linh hoạt & nhiều khuyến mãi. Xem ngay!",
				intro_short: "0"
			},
			11411: {
				intro: "Hàng trăm Áo Khoác Jean phối nón và không nón, kiểu dáng thời trang, phongc cách, giá ưu đái. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			11412: {
				intro: "Rất nhiều Mẫu Áo Khoác Nam Ngắn Tay đẹp, chất vải đa dạng, tốt, tôn dáng, giá cực ưu đãi. Vận chuyển tận nơi, thanh toán COD linh hoạt. MUA NGAY!",
				intro_short: "0"
			},
			11413: {
				intro: "Hàng trăm Áo Ghi Lê Casual, Ghi Lê Dự Tiệc kiểu dáng thời trang ",
				intro_short: "0"
			},
			11414: {
				intro: "Rất nhiều Áo Blazer với kiểu dáng 1 khuy, 2 khuy, 3 khuy thời trang, chất liệu cao cấp, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt, Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			11415: {
				intro: "Nhiều mẫu Đồng Hồ Kim , Đồng Hồ Số Cho Bé, kiểu dáng đẹp, màu sắc tươi sáng, xinh xắn phù hợp cho bé trai và bé gái. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			11416: {
				intro: "Rất nhiều Bikini Đẹp, nhiều kích cỡ, mẫu mới, cập nhật liên tục, chất vải tốt, bền, giá ưu đãi, khuyến mãi lớn. Giao hàng tận nơi miễn phí, thanh toán linh hoạt. MUA NGAY!",
				intro_short: "0"
			},
			11417: {
				intro: "Hàng trăm mẫu Dây Giày Thể Thao, Dây Giày Đèn Led, Dây Giày Vải,...cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			11418: {
				intro: "Hàng trăm Miếng Lót Giày, Miếng Lót Tăng Chiều Cao, Dây Buộc Giày thiết kế tiện ích, giá cực ưu đãi. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			11419: {
				intro: "Rất nhiều Dung Dịch Vệ Sinh Giày, Đồ Dùng Bảo Quản Giày cao cấp, hiệu quả nhanh, dễ sử dụng. Ưu đãi hấp dẫn, vận chuyển miễn phí, thanh toán linh hoạt. XEM NGAY!",
				intro_short: "0"
			},
			11809: {
				intro: "Hàng trăm Áo Ba Lỗ Nam Trơn,  Áo Ba Lỗ Nam Họa Tiết chất liệu thoáng mát, cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY! ",
				intro_short: "0"
			},
			11810: {
				intro: "Rất nhiều mẫu Áo Cổ Trụ Nam thời trang, chất liệu đa dạng, mát mẻ, dáng áo đẹp, tôn dáng, giá cực sốc. Giao hàng miễn phí, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			11816: {
				intro: "Mua Nhạc Cụ, Đàn Ghi-ta, Sáo, Kèn,... từ Suzuki, Yamaha, Samick,... chính hãng, bảo hành uy tín, giá cực ưu đãi, giao hàng tận nơi miễn phí, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			11817: {
				intro: "Rất nhiều Nhạc Cụ Hiện Đại, Nhạc Cự Truyền Thống cao cấp, âm thanh cực hay, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			11841: {
				intro: "Nhiều mẫu Đàn Ukulele Tenor, Đàn Ukulele Concert,..chính hãng, tiếng hay, thanh, với giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			11842: {
				intro: "Rất nhiều Ghi-ta chính hãng từ Yamaha, Alice, Stagg,... từ cơ bản tới chuyên nghiệp, bảo hành uy tín, ưu đãi hấp dẫn, giao hàng tận nơi tại Shopee. Chat ngay với Shop để được tư vấn nhé!",
				intro_short: "0"
			},
			11843: {
				intro: "Hàng trăm Đản Piano Cơ, Đàn Piano ĐIện, Đàn KeyBoard cao cấp, chính hãng, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			11844: {
				intro: "Rất nhiều sản phảm Trống Và Bộ Gõ như Trống Lắc Tay, Trống Điện Tử, Trống Hộp Gỗ, Trống Cajon,..chất liệu gỗ cao câp, âm thanh trong, ấm. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			11845: {
				intro: "Rất nhiều Dây Đàn, Bao Đựng Nhạc Cụ, Phụ Kiện Đàn cao cấp, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, nhanh chóng. Shopee Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			11846: {
				intro: "Rất nhiều Sáo, Kèn các loại, đa dang, thiết kế đẹp, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. Trả Hàng Hoàn Tiền đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			12494: {
				intro: "Hàng trăm Dụng Cụ chăm Sóc, Sửa chữa Ô tô - Xe Máy - Xe Đạp, Phụ Tùng Xe, Mũ Bảo Hiểm cao cấp, tiện lợi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí.MUA NGAY!",
				intro_short: "0"
			},
			12495: {
				intro: "Hàng trăm mặt hàng về Sản Phẩm Chăm Sóc Sửa Chữa Xe như Dầu Nhớt, Decal, Phụ Kiện Làm Đẹp Xe, Dụng Cụ Sửa Chữa Xe,...Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			12496: {
				intro: "Rất nhiều Dàu Nhớt Cho Xe Số, Tay Côn, Xe Tay Ga, nhiều dung tích khác nhau, đa dạng, giá cao cấp. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			12680: {
				intro: "Rất nhiều mẫu Quà Lưu Niệm đẹp như tranh ảnh, móc khóa, hộp quà tặng,... thú vị, đa dạng mẫu mã, giá cực ưu đãi, giao hàng miễn phí & đảm bảo chất lượng từ Shopee. Xem ngay!",
				intro_short: "0"
			},
			12681: {
				intro: "Hàng trăm Hoa Sáp, Móc Khóa, Đồ Handmade với thiết kế xinh xắn, ngộ nghĩnh, đáng yêu, giá tốt. Chat ngay với Shop để được tư vấn tận tình, giao hàng nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			12790: {
				intro: "Rất nhiều Phụ Tùng Nguồn Xe, Phụ Tùng Ngoài Xe, Mũ Bảo Hiểm,..chính hãng từ GRS, Asia, Andes. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			12791: {
				intro: "Rất nhiều Dây Móc Khóa Xe, Loa Còi, Phụ Kiện Trang Trí Xe độc đáo, đa dạng, giá ưu đãi. Chat ngay với Shop để đươc tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			12792: {
				intro: "Rất nhiều Phụ Kiện & Phụ Tùng Ô Tô từ Romoss, Liqui Moly, Ambi,... cao cấp, đa dạng sản phẩm, giá ưu đãi, vận chuyển tận nơi miễn phí, thanh toán linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			12793: {
				intro: "Hàng trăm giá đỡ, kẹp điện thoại & bộ chia tẩu sạc trong xe hơi giá rẻ bất ngờ tại Shopee.vn. Giao hàng miễn phí toàn quốc. Thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			12798: {
				intro: "Rất nhiều Sản Phẩm Xe Mô Tô, Xe Đạp Điện, Xe Thăng Bằng,...dành cho trẻ em an toàn tiện lợi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng Trên Toàn Quốc. XEM NGAY !",
				intro_short: "0"
			},
			12799: {
				intro: "Rất nhiều Mô Tô, Xe Máy , Xe Tay Côn, Xe Máy Điện chính hãng, uy tín, giá cực ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Ph, Nhanh Chóng, MUA NGAY!",
				intro_short: "0"
			},
			12800: {
				intro: "Rất nhiều Thiết Bị Tiện Ích Cho Ô Tô, Xe Máy & Xe Đạp đa dạng, tiện lơi, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Thanh Toán COD. MUA NGAY!",
				intro_short: "0"
			},
			12801: {
				intro: "Hàng trăm Thiết Bị Định Định Vị, Thiết Cảm Biến Ô Tô tiện lợi, cao cấp, giá thành ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			12804: {
				intro: "Hàng trăm Phụ Kiện Sửa Chửa Xe, Phụ Kiện Hỗ Trợ Thiết Bị Công Nghệ, tiện ích, cao cấp, giá cực ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			12805: {
				intro: "Hàng trăm Dụng Cụ Sửa Chữa Xe Chuyên Biệt Và Đa Năng vô cùng tiện ích, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			12806: {
				intro: "Hàng trăm Sản Phẩm Chăm Sóc, Làm Đẹp Xe từ các thương hiệu như Sonax, 3M, Turtle,.. chính hãng. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			12809: {
				intro: "Rất nhiều Phụ Tùng Xe Máy như Gương Chiếu Hậu, Gù Chống Đổ Sau, Ổ Khóa,...chính hãng, cao cấp, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí.XEM NGAY!",
				intro_short: "0"
			},
			12813: {
				intro: "Hàng trăm mẫu tem dán sườn xe ô tô chất lượng cao, đa dạng mẫu mã với giá cực tốt tại Shopee.vn. Cam kết giao hàng tận nhà. miễn phí. Thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			12814: {
				intro: "Hàng trăm Phụ Tùng Xe, Phụ Gia Cho Xe, Linh Kiện Phụ Trợ Cho Xe Máy, Ô Tô, hàng cao cấp, chất lượng, giá tốt. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			12817: {
				intro: "Rất nhiều Xe Đạp Điện Thông Thường, Xe Đạp Điện Mini, tiện ích với giá tốt. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			12819: {
				intro: "Rất nhiều dòng xe đạp, xe đạp đua, xe đạp trẻ em, xe fixed gear từ Martin, Galaxy,... giá cực sốc. Bảo hành uy tín, giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			12938: {
				intro: "Rất nhiều Voucher giảm giá, Khóa Học Online, Dịch Vụ Nạp Tiền Điện Thoại, tiện ích. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			12939: {
				intro: "Rất nhiều Voucher Nhà Hàng, Quán Ăn, Cafe, Kem & Voucher Bánh từ địa điểm cực HOT tại TP.HCM, Hà Nội, Đà Nẵng,... Giảm giá cực hấp dẫn, giao hàng miễn phí tận nơi. Mua ngay!",
				intro_short: "0"
			},
			12940: {
				intro: "Rất nhiều Voucher Buffet, Voucher Quán Ăn Gia Đình nổi tiếng, món ăn ngon, đa dạng món ăn Á Âu. Giao voucher miễn phí, thanh toán linh hoạt. MUA NGAY!",
				intro_short: "0"
			},
			12941: {
				intro: "Hàng trăm Voucher Du Lịch, Voucher Khách Sạn từ các công ty du lịch như Saigontourist, Hanoitourist,...với giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			12942: {
				intro: "Hàng trăm Tour Du Lịch Trong & Ngoài Nước, nhiều điểm đến thú vị, độc đáo, mới mẻ. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			12943: {
				intro: "Hàng trăm Voucher Làm Đẹp, Voucher Nha Khoa, Voucher Làm Tóc với dịch vụ cao cấp, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			12944: {
				intro: "Rất nhiều voucher Spa & Massage body, đá nóng tại TP.HCM, Hà Nội, dịch vụ chuyên nghiệp, Spa uy tín, giá ưu đãi. Giao hàng tận nơi, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			12945: {
				intro: "Rất nhiều Voucher Khóa Học, Dịch Vụ, Voucher Chụp Ảnh Đẹp, dịch vụ tốt, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			12946: {
				intro: "Rất nhiều Voucher Hôi Thảo, Vé Tham Dự Sự Kiện , Sản Phẩm Trang Trí với giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí.MUA NGAY!",
				intro_short: "0"
			},
			12947: {
				intro: "Rất nhiều Khóa Học Online đa dạng lĩnh vực như Khóa Học Kinh Doanh, Khóa Học Marketing - Bán Hàng, Kinh Doanh Qua Facebook,.. với mức giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			12948: {
				intro: "Rất nhiều Voucher Tài Liệu Học Ngoại Ngữ, Voucher Khóa Học Ngoại Ngữ Online & Offline. Chat ngay với Shop để được tư vấn tận tình, nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			12949: {
				intro: "Nhiều Voucher, Coupon Giảm Giá, từ Highland Coffee, Baskins Robbin, Hương Việt Bakery,..món ăn cực ngon. Chat ngay với Shop để được tư vấn tận tình,Shopee Giao Hàng Miễn Phí, Toàn Quốc. XEM NGAY!",
				intro_short: "0"
			},
			12950: {
				intro: "Rất nhiều loại Thức Ăn Nhanh, Hoa Quả Hạt, Thực Phẩm Khô thơm ngon, dinh dưỡng, nguyên liệu an toàn, rõ ràng nguồn gốc. Miễn phí vận chuyển, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			12951: {
				intro: "Sở hữu ngay Voucher Khách Sạn, Voucher Du Lịch Phan Thiết, Đà Lạt, Phú Quốc với giá cực ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, XEM NGAY!",
				intro_short: "0"
			},
			12952: {
				intro: "Hàng trăm Vé Máy Bay Trong Nước & Nước Ngoài với giá ưu đãi tại Shopee. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			12953: {
				intro: "Rất nhiều Voucher Làm Tóc, Cắt Duỗi Nhuộm chuyên nghiệp, uy tín, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			12954: {
				intro: "Rất nhiều Voucher Tập Gy, Voucher Tập Yoga với giá ưu đãi. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA  NGAY!",
				intro_short: "0"
			},
			12955: {
				intro: "Hàng trăm Voucher Lấy Vôi Răng, Voucher Trồng Răng Sứ, Voucher Tẩy Trắng Răng với dịch vụ tốt. Shopee Giao Hàng MIễn Phí, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			12956: {
				intro: "Rất nhiều voucher dịch vụ chăm sóc sức khỏe da mặt, toàn thân, sức khỏe tổng quát ở Hoàn Mỹ, Vinmec,... với giá ưu đãi. Giao tận nơi, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			12957: {
				intro: "Rất nhiều Gói Chụp Hình Gia Đình, Chụp Hình Cho Bé đẹp, chụp studio & ngoại cảnh, giá ưu đãi sốc. Tư vấn tận tình bởi Shop. MUA NGAY!",
				intro_short: "0"
			},
			12958: {
				intro: "Hàng trăm Dàn Karaoke Di Động, Dàn Karaoke Gia Đình, âm thanh sống động, bền, giá tốt. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			12959: {
				intro: "Hàng trăm  Voucher Vé Xem Phim, Xem Kịch hay, hấp dẫn với giá cực ưu đãi tại Shopee. Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			12960: {
				intro: "Rất nhiều Voucher Học Đàn Piano, Khóa Học Âm Nhạc, Khoác Học Trang Điểm, Cắm Hoa,..với mức giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			12961: {
				intro: "Rất nhiều Voucher Khóa Học Kinh Doanh Online, Khóa Học Kinh Doanh Offline bổ ích, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí, Thanh Toán Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			12962: {
				intro: "Rất nhiều Voucher Khóa Học Giao Tiếp, Giao Tiếp Ngoại Ngữ như Anh, Hàn, Nhật giúp bạn năng cao kỹ năng giao tiếp, nghệt thuật giao tiếp,...Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			12990: {
				intro: "Rất nhiều Tem Trang Trí, Decal Báo Hiệu, Tem Trùm Xe, hàng cao cấp, giá tốt. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			12991: {
				intro: "Rất nhiều Mũ Bảo Hiểm Full - Face, Mũ Bảo Hiểm 3/4,  Mũ Bảo Hiểm Nửa Đầu chính hãng từ Andes, Royal, Chita,.. cao cấp, giá tốt. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			12992: {
				intro: "Rất nhiều Thiết Bị Chống Trộm Xe Máy, Thiết Bị Định Vị,... an toàn, đơn giản, tính năng hiện đại, giá cực ưu đãi. Giao hàng miễn phí, bảo hành uy tín. Xem ngay!",
				intro_short: "0"
			},
			12993: {
				intro: "Hàng trăm Sản Phẩm Chăm Sóc Xe như Bơm Lốp, Sản Phẩm Chăm Sóc Kính, Lốp Xe,... hàng cao cấp chất lượng. Chat ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			12995: {
				intro: "Mua Xe Ô Tô chính hãng, giá hấp dẫn từ các thương hiệu nổi tiếng thế giới như BMV, Sedan chỉ có tại Shopee.vn. Chúng tôi tự tin mang lại dịch vụ mua sắm online hấp dẫn, giao hàng tận nhà an toàn, chu đáo. Mua ngay!",
				intro_short: "0"
			},
			13030: {
				intro: "Hàng trăm dòng Máy Tính Để Bàn, Laptop, Phụ Kiện Máy Tính, Thiết Bị Mạng chính hãng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13033: {
				intro: "Rất nhiều dòng Máy Ảnh Du Lịch, Máy Ảnh Chuyên Nghiệp, Máy Quay Phim, Webcame,..chính hãng từ Sony, Leica, Canon, Nikon,..giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13036: {
				intro: "Rất nhiều Máy Ảnh Du Lịch & Máy Ảnh Chụp Lấy Liền từ Canon, Fujifilm, Nikon,... chính hãng, bảo hành uy tín, nhiều dòng, giá cực ưu đãi. Miễn phí vận chuyển, trả hàng đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			13037: {
				intro: "Nhiều dòng Máy Ảnh Du Lịch hiện đại, với nhiều chức năng tiện ích đến từ các hãng như Nikon, Fujifil Instax, Sony,...với giá thành cực hấp dẫn, chế độ bảo hành tốt. Chay ngay với Shop để được tư vấn tận tình. CLICK XEM NGAY!",
				intro_short: "0"
			},
			13038: {
				intro: "Rất nhiều thẻ nhớ & đầu đọc thẻ nhớ máy ảnh Canon, Nikon tiện lợi, giá cực tốt. Shopee hỗ trợ giao hàng tận nhà, thanh toán linh hoạt trên Shopee App. Click ngay!",
				intro_short: "0"
			},
			13040: {
				intro: "Hàng trăm Camera Ip, Camera Hồng Ngoại, Webcam chính hãng từ Yoosee, Panorama, Xiaomi,…giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13042: {
				intro: "Hàng trăm máy ảnh DSLR cùng phụ kiện máy ảnh Sony, Canon, Nikon chuyên nghiệp, giá rẻ bất ngờ. Shope cam kết giao hàng tận nơi, thanh toán COD tiện lợi. Mua ngay!",
				intro_short: "0"
			},
			13043: {
				intro: "Hàng trăm Máy Ảnh DLSR, Dây Đeo Máy Ảnh, Hạt Hút Ẩm, cao cấp, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13044: {
				intro: "Đa dạng các dòng Máy Ảnh Không Gương Lật từ Sony, Cano, Fuljifilm, Nikon,...với nhiều thiết kế hiện đại : Máy Ảnh Mirrolesss Selfie, Máy Ảnh Mirroless Chuyên Nghiệp,...Chat ngày với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			13045: {
				intro: "Mua Máy Ảnh Không Gương Lật và Phụ Kiện Chính Hãng từ Casio, Nikon, Benro, Fuljifilm, Canon,..với giá ưu đãi, hàng chất lượng. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13046: {
				intro: "Hàng trăm món Phụ Kiện Máy Ảnh: Đèn Flash, Chân Máy Ảnh, Thẻ Nhớ Máy Ảnh, Sạc Pin Máy Ảnh,... chính hãng, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13048: {
				intro: "Hàng trăm Camera Giám Sát, Phụ Kiện Camera Cao Cấp từ Yoosee, Dahua, KBVision,..giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13049: {
				intro: "Hàng trăm Đầu Ghi Hình DVR, HVR, NVR Full HD, thiết kế hiện đại, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt . XEM NGAY!",
				intro_short: "0"
			},
			13050: {
				intro: "Đa dạng kiểu dáng Webcam với các tính năng thông dụng đến hiện đại như: Webcam Máy Tính, Webcam Có Mic, Webcam Bluetooth,...với giá cực ưu đãi tại Shopee. Shopee Đảm Bảo Nhận Hàng, Giao Hàng MIễn Phí, Nhanh Chóng.  XEM NGAY!",
				intro_short: "0"
			},
			13051: {
				intro: "Rất nhiều Sản Phẩm Camera Giám Sát thông minh như Camera Hồng Ngoại, Camera MIni, Camera IP,...với giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13052: {
				intro: "Chọn ngay những mẫu Máy Quay Phim, Camera Hành Trình, Phụ Kiện Máy Quay Phim, với giá cực ưu đãi tại Shopee. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Hoặc Trả Hàng Hoàn Tiền. CLICK XEM NGAY!",
				intro_short: "0"
			},
			13054: {
				intro: "Hàng trăm Máy Quay Phim, May Quay Hành Động, Máy Quay Hành Trình chính hãng Eken, Xiaomi, Sony,...giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			13057: {
				intro: "Rất nhiều Máy Quay Hành Động, Flycam chính hãng từ các thương hiệu như GoPro, EKEN, Sony, Osmo,...giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13058: {
				intro: "Rất nhiều Camera Hành Trình  Cho Xe Máy & Ô Tô tiện lợi, cao cấp, độ phân giải tốt, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13059: {
				intro: "Hàng trăm Máy Quay Phim, Phụ Kiện Máy Quay Phim, Móc Khóa Camera từ Star, Concox, Sjcam, Gopro,..Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			13060: {
				intro: "Rất nhiều ống kính máy ảnh Canon, Nikon, Sony, Yongnuo, Sigma,... chính hãng, đa dạng tiêu cự, giá ưu đãi. Miễn phí giao, có bảo hành, thanh toán đơn giản. Mua ngay!",
				intro_short: "0"
			},
			13061: {
				intro: "Rất nhiều Pin Máy Ảnh & Sạc Máy Ảnh từ Panasonic, Camelion, Duracell,... cao cấp, chính hãng, giá cực ưu đãi, giao hàng miễn phí, thanh toán nhanh chóng, bảo hành uy tín. Xem ngay!",
				intro_short: "0"
			},
			13062: {
				intro: "Rất nhiều Chân Máy Ảnh từ Benro, Yunteng,... chất lượng cao, bền bỉ, vững trãi, giá cực ưu đãi, giao hàng miễn phí, bảo hành uy tín. MUA NGAY!",
				intro_short: "0"
			},
			13063: {
				intro: "Rất nhiều Phụ Kiện Bảo Vệ Máy Ảnh như Túi Đựng Máy Ảnh, Ba Lô Máy Ảnh, Bao Da Máy Ảnh,...hàng cao cấp, giá hấp dẫn. Chat ngat với Shop để dduwoj tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			13064: {
				intro: "Rất nhiều Phụ Kiện Máy Ảnh, Linh Kiện Máy Ảnh, Phụ  Kiện Camera Hành Trình,...chính hãng, giá tốt. Shopee Giao Hàng Miễn Phí, Dảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13065: {
				intro: "Hàng trăm Laptop cơ bản, Laptop Chơi Game chính hãng từ Asus, Dell, Acer, HP, Macbook,...giá ưu đãi. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13067: {
				intro: "Mua ngay một bộ Máy Tính Bàn cấu hình mạnh phục vụ bạn làm việc, chơi game ấn tượng chỉ với mức giá cực kì ưu đãi. Bên cạnh đó Shopee còn có dịch vụ giao hàng tận nhà, trả hàng hoàn tiền tiện lợi. Click mua ngay!",
				intro_short: "0"
			},
			13069: {
				intro: "Rất nhiều Nguồn Máy Tính, Đế Tản Nhiệt, Vỏ Case Máy Tính chính hãng Coolermaster, Xigmatex, Dtech, Vision,… giá ưu đãi. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			13071: {
				intro: "Đa dạng các Phụ Kiện Máy Tính như Đầu Đọc Thẻ Nhớ, Cáp Chuyển Đổi từ Pisen, IDragon, Ugreen,... chính hãng, cao cấp. Shopee Giao Hàng Miễn Phí, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13074: {
				intro: "Rất nhiều Thẻ Nhớ Micro SD, Thẻ Nhớ Micro SDHC, SDXC chính hãng Kingston, Toshiba, Transcend, Sandisk...cao cấp, giá ưu đãi. Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13075: {
				intro: "Hàng trăm thẻ nhớ máy ảnh MicroSD với dung lượng 4GB, 16GB, 32GB, 64GB giá rẻ tại Shopee.vn. Mua hàng tại Shopee.vn để được miễn phí giao hàng tận nơi. Mua ngay!",
				intro_short: "0"
			},
			13076: {
				intro: "Nhiều dòng Thể Nhớ Máy Ảnh, Đầu Đọc Thẻ Nhớ, Thiết Bị Mở Rộng Bộ Nhớ, Hộp Đựng Thẻ Nhớ,...chính hãng từ Sony, Sandisk,... Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			13077: {
				intro: "Rất nhiều Phụ Kiện Máy Tính, Chuột Máy Tính, Bàn Phím từ Logitech, Genius, E-Blue,... chính hãng, giá ưu đãi, giao hàng tận nơi miễn phí, bảo hành uy tín. Xem ngay!",
				intro_short: "0"
			},
			13079: {
				intro: "Rất nhiều Thiết Bị Mạng, Thiết Bị Kích Sóng Wifi từ Totolink, Huawei, Tenda,... chính hãng, bảo hành uy tín, giá cực hấp dẫn, đảm bảo nhận được hàng hoặc hoàn lại tiền từ Shopee. Xem ngay!",
				intro_short: "0"
			},
			13081: {
				intro: "Rất nhiều Máy In, Máy Chiếu, Máy Scan chính hãng từ các thương hiệu như Canon, HP, Brother, Unic, Panasonic...với giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			13083: {
				intro: "Hàng trăm Usb 16GB, 32Gb lưu trữ dữ liệu an toàn, tốc độ tải dữ liệu nhanh chóng, kiểu dáng đa dạng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13085: {
				intro: "Hàng trăm Bàn Phím, Chuột Chơi Game cao cấp chính hãng từ Geerzer, COMANRO, Rapoo, Logitech, Genius, Rapoo, Fuhlen,…giá ưu dãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13087: {
				intro: "Rất nhiều laptop cơ bản, laptop sinh viên, laptop văn phòng từ Dell, HP, Acer,... chính hãng, cấu hình mạnh, ưu đãi sốc. Giao hàng nhanh, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13088: {
				intro: "Hàng trăm Laptop 2 trong 1, Laptop Bàn Phím Xoay 360 cao cấp, chính hãng tử Acer, HP, Dell, Lenovo, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13089: {
				intro: "Rất nhiều dòng Macbook như: Macbook Pro Retina,  MacBook Pro, The New MacBook chính hãng từ Apple, giá cực sốc. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAYq",
				intro_short: "0"
			},
			13090: {
				intro: "Rất nhều Máy Tính Chơi Game, cấu hình mạnh, từ các thương hiệu như Dell, MSI, Asus, HP, Acer,...chính hãng, cao cấp, giá tốt. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13091: {
				intro: "Rất nhiều laptop cũ giá rẻ, cho bạn trải nghiệm tuyệt vời từ Dell, HP, Acer,...cấu hình mạnh tại Shopee.vn. Giao hàng tận nơi, thanh toán COD tiện lợi. Xem ngay!",
				intro_short: "0"
			},
			13092: {
				intro: "Hàng trăm Bộ Máy Tính Cơ Bản & Chơi Game chính hãng từ Dell, Acer, HP, Asus,...với mức giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13093: {
				intro: "Rất nhiều thùng máy CPU từ Dell, Lenovo, Intex,... thùng máy chơi game, thùng máy mini,... cao cấp với giá ưu đãi. Giao hàng miễn phí, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			13094: {
				intro: "Hàng trăm Màn Hình Máy Tính từ các thương hiệu như Samsung, Asus, Prolink, HP,... chính hãng, màn hình mỏng. Shopee Giao Hàng Miễn Phí, Nhanh Chóng trên toàn quốc. XEM NGAY!",
				intro_short: "0"
			},
			13095: {
				intro: "Hàng trăm Máy Tính All In One màn hình thường và màn hình cảm ứng cao cấp, hiện đại, với giá cực ưu đãi tại Shopee. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			13096: {
				intro: "Rất nhiều Bo Mạch Chủ tương thích với các dòng máy mới hiện nay như AT, ATX, BTX, DTX, LPX, FullATX, microATX, NLX,…giá ưu dãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			13097: {
				intro: "Rất nhiều Card Màn Hình tầm trung và cao cấp, với nhiều mức giá đa dạng,  cực ưu đãi. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13098: {
				intro: "Rất nhiều Nguồn Máy Tính, Dây Nguồn Máy Tính chính hãng từ Samsung, Dell, Huntkey,...cao cấp, giá tốt. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13099: {
				intro: "Với các Bộ Vi Xử Lý như Intel Corei3, Corei5, Corei7, Intel Pentium, AMD,.. chính hãng được phân phối tại Shopee với giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miên Phí. XEM NGAY!",
				intro_short: "0"
			},
			13100: {
				intro: "Rất nhiều Đế Tản Nhiệt, Quạt Tản Nhiệt Máy Tính từ Cooler Master, Age Cooler,... chất lượng cao, bền, phù hợp với nhiều dòng laptop & PC, giá cực ưu đãi, giao hàng miễn phí. Xem ngay!",
				intro_short: "0"
			},
			13101: {
				intro: "Hàng trăm dòng Ram Máy Tính như Static RAM, Dynamic RAM,...chính hãng giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, nhanh chóng. Shopee Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			13102: {
				intro: "Mua Case Thùng Máy Tính, Case Thùng Máy Tính Gaming, Case Thùng Máy Tính Đèn Led, Case Laptop, hàng chất lượng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13103: {
				intro: "Hàng trăm Bộ Sạc Laptop chính hãng từ Lenovo, LG, Asus, Dell, hàng chất lượng, cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Tiện Lợi khi  nhận hàng. MUA NGAY!",
				intro_short: "0"
			},
			13104: {
				intro: "Rát nhiều Dây Cáp Mạng, Dây Cá HDMI, Dây Cáp VGA với nhiều kich cỡ đa dạng, giá cực ưu đãi. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13105: {
				intro: "Hàng Trăm Ổ Cứng Ngoài, Usb, Adapter, Cáp, Đế Tản Nhiệt từ các thương hiệu Kingston, Adata, Sandisk, Samsung…chính hãng, giá tốt, Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13106: {
				intro: "Hàng trăm Bàn Phím Cơ Bản, Bàn Phím Chơi Game cao cấp, tích hợp đèn led độc đáo, giá hấp dẫn tại Shopee. Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13107: {
				intro: "Hàng trăm Bàn Phím Bluetooth, Bàn Phím Không Dây Kết Nối Qua Thiết Bị Nhận Sóng, thiết kế hiện đại, mẫu mã đẹp, giá tốt. Shopee Giao Hàng Miễn Phí, Thanh Toán COD. MUA NGAY!",
				intro_short: "0"
			},
			13108: {
				intro: "Rất nhiều Chuột Máy Tính Có Dây Cơ Bản bà Chuột Chuyên Game Cao Cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phó. MUA NGAY!",
				intro_short: "0"
			},
			13109: {
				intro: "Mua Bộ Nguồn Máy Tính, Chuột Máy Tinh chính hãng, bảo hành uy tín, giá cực hấp dẫn từ Xiaomi, Simetech, Logitech,...Giao Hàng Tận Nơi, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13110: {
				intro: "Bàn Di Chuột với nhiều mẫu mã đa dạng như bàn di chuột LED, bàn di chuột bản đồ, Bàn di chuột cỡ lớn,...từ Over Waytch, Dareu. Shopee Đảm Bảo Nhận Hàng, có thể Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13111: {
				intro: "Rất nhiều Chuột, Bàn Phím Có Dây Cơ Bàn, Chuột & Bàn Phím Game, thiết kế độc đáo, cao cấp, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13112: {
				intro: "Hàng trăm Bộ Chuột, Bàn Phím Có Dây, Không Dây cao cấp, bền, đẹp. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Trả Hàng Và Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13114: {
				intro: "Mua ngay Phụ Kiện Máy TÍnh, Cáp HDMI, Bộ Vệ SInh Máy Tính, Đế Tản Nhiệt,.. hàng cao cấp, giá cực ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13115: {
				intro: "Rất nhiều Bộ Phát Wifi Từ Sim 3G, Bộ Phát Wifi Wireless Modem & Wireless Router chính hãng từ FPT, Toto Link, Huawei, Viettel, TP-Link,.. giá tốt. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			13116: {
				intro: "Nhiều Bộ Kích Wifi như Bộ Kích Wifi 1 Cửa, 2 Cửa, 3 Cửa,...tốc độ truyền dữ liệu tốt. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. Shopee Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			13117: {
				intro: "Rất nhiều Bộ Thu Wifi Ăng Ten, và Bộ Thu Wfii Không Ăng Ten cao cấp, chính hãng từ TP-Link, Mercusys, Tenda,...giá tốt. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13118: {
				intro: "Hàng trăm Usb 3G một nhà mạng và nhiều nhà mạng chính hãng từ FB Link, Huawei, Dongle, giá ưu đãi. Chat ngay với Shop để được tư vấn taakn tình, Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13119: {
				intro: "Rất nhiều Bộ Phát Wifi Cơ Bả, Bộ Phát Wifi Đa Năng từ Huawei, TP Link, Xiaomi, Lenovo,... chính hãng, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Nhanh Chóng trên toàn quốc. MUA NGAY!",
				intro_short: "0"
			},
			13120: {
				intro: "Rất nhiều Đầu Nối Mạng, Dây Cáp Mạng, Bộ Chia Mạng tiện ích, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13121: {
				intro: "Rất nhiều Thiết Bị Mạng, Kèm Bấm Mạng, Bộ Kích Wiffi, Bộ Phát Wifi, chính hãng từ TP Link, Posi, Sunkit. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			13122: {
				intro: "Hàng trăm Máy Scan, Máy Scan Mã Vạch chính hãng từ  Honeywell, Zebex, NET HUNDRED…giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, trả hàng hoàn tiền. MUA NGAY!",
				intro_short: "0"
			},
			13123: {
				intro: "Nhiều dòng Máy In, Phụ Kiện Máy In từ Canon, Sony, HP, Panasonic,... chính hãng, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13124: {
				intro: "Rất nhiều Máy Chiếu & Phụ Kiện Máy Chiếu từ Dell, Unic, Panasonic,... chất lượng ảnh tốt, bảo hành đầy đủ, đa dạng dòng máy, giá siêu ưu đãi, giao hàng tận nơi. Xem ngay!",
				intro_short: "0"
			},
			13125: {
				intro: "Nhiều loại Mực In Phun, Mực In Laser từ Canon, HP, Vmax,... chính hãng, màu mực đẹp, không lem, giá tốt. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13126: {
				intro: "Chọn ngay chiếc Máy In, Máy Scan, Máy Chiếu và các Phụ Kiện Cao Cấp từ thương hiệu nổi tiếng Canon, Panasonic, Epson,...với giá tốt. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13127: {
				intro: "Hàng trăm dòng Máy In, Máy Photocopy, Máy Đọc Mã Vạch, Mực In, Giấy In,.. chất lượng đảm bảo, giá tốt. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13129: {
				intro: "Rất nhiều Usb, Bộ Chia Cổng Usb cao cấp, chính hãng từ Orico, Ugreen, D - Tech, Hub, Kingtson,.. giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13131: {
				intro: "Rất nhiều Bộ Chia Cổng USB, HUB USB từ Unitek, Hoco, Ugreen,... giá cực ưu đãi, chính hãng, bảo hành uy tín, Shopee đảm bảo chất lượng & giao hàng miễn phí. Xem ngay!",
				intro_short: "0"
			},
			13132: {
				intro: "Chọn ngay Usb OTG với dung lượng đa dạng  16Gb, 32Gb, 64Gb, 128Gb và Phụ Kiện OTG cao cấp, chính hãng. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13133: {
				intro: "Chọn ngay Ổ Cứng SSD từ các thương hiệu như Samsung, Kingston, Sandisk,.. chính hãng, cao cấp. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13134: {
				intro: "Mua Ổ Cứng Trong HDD cao cấp, cổng Sata kết nối với tất cả máy tính, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13135: {
				intro: "Rất nhiều Ổ Cứng Di Động 1.8 inch, 2.5 inch, 3.5 inch chính hãng từ Samsung, Kingston,..giá cực ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			13136: {
				intro: "Rất nhiều Phụ Kiện Máy Tính như Box HDD, Cáp USB, Đầu Đọc Thẻ Nhớ,... chính hãng với giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13143: {
				intro: "Rất nhiều mẫu Tivi như Tivi LED, Smart Tivi, Internet Tivi, Tivi Oled,...từ các thương hiệu nổi tiếng như Sony, LG, Samsung, Panasonic,...giá cực ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng, XEM NGAY!",
				intro_short: "0"
			},
			13145: {
				intro: "Rất nhiều Android Tivi Box & phụ kiện từ Kiwi, Xiaomi, FPT, VNPT,... tốt, truyền ổn định, nhiều ứng dụng, giá ưu đãi. Bảo hành uy tín, giao hàng tận nơi. Xem ngay!",
				intro_short: "0"
			},
			13147: {
				intro: "Rất nhiều Đồng Hồ Thông Minh, Mắt Kính Thông Minh, Camera Hành Trình hiện đại, cao cấp, chính hãng với tính năng độc đáo. Ưu đãi cực hấp dẫn & chính sách giao hàng miễn phí chỉ có tại Shopee. Xem ngay!",
				intro_short: "0"
			},
			13149: {
				intro: "Hàng trăm Voucher Nhà Hàng, Ẩm Thực, đồ ăn ngon, dịch vụ tốt, giá hấp dẫn. Shopee Đảm Bảo Nhân Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13150: {
				intro: "Mua ngay Voucher Du Lịch, Voucher Khách Sạn với nhiều tiện ích, dịch vụ cao cấp với giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền vô cùng tiện lợi. XEM NGAY!",
				intro_short: "0"
			},
			13151: {
				intro: "Hàng trăm Voucher Chăm Sóc Da, Voucher Mua Mỹ Phẩm với nhiều ưu đãi hấp dẫn. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13152: {
				intro: "Hàng trăm  Voucher Hát Karaoke, Voucher Thuê Loa, Voucher In Ảnh hấp dẫn, giá cực ưu đãi tại Shopee. Chat ngay với Shop để được tư vấn tận tình, thanh toán linh hoạt. XEM NGAY!",
				intro_short: "0"
			},
			13153: {
				intro: "Rất nhiều Khóa Học Excel, Khóa Học Nấu Ăn với nhiều kiến thúc bổ ích, giá cực ưu đãi tại Shopee. Chat ngay với Shop để được tư vấn tận tình, nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			13157: {
				intro: "Rất nhiều dòng Tivi Dưới 33 Inches sắc nét, nhiều tính năng, thiết kế đẹp, sang trọng, hiện đại, bảo hành uy tín. Miễn phí vận chuyển, trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			13158: {
				intro: "Rất nhiều dòng Tivi LED, Smart Tivi chính hãng từ Sony, Samsung, LG, Asanzo cao cấp, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí, Tận Nơi. MUA NGAY!",
				intro_short: "0"
			},
			13159: {
				intro: "Rất nhiều mẫu Tivi 44-49 Inches đến từ các thương hiệu nổi tiếng như Sony, Pansonic, Samsung,..với thiết kế và tính năng hiện đại được phân phối tại Shopee. Shopee Giao Hàng Miễn Phí, Nhanh Chóng.  MUA NGAY!",
				intro_short: "0"
			},
			13160: {
				intro: "Hằng Trăm Tivi LED, Smart tivi,.. từ các thương hiệu nổi tiếng Sharp, Panasonic, Sony, Samsung,.. chính hãng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình.MUA NGAY!",
				intro_short: "0"
			},
			13161: {
				intro: "Rất nhiều Tivi Led, Smart Tivi 60 - 69 inch chính hãng, tình năng hiện đại, giá cực ưu đãi tại Shopee. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13162: {
				intro: "Mua Smart Tivi Trên 70inches từ Sony, Samsung, Sharp,... chính hãng, màn hình siêu nét, kho ứng dụng khủng, giá cực ưu đãi, giao hàng miễn phí, bảo hành rõ ràng. Xem ngay!",
				intro_short: "0"
			},
			13163: {
				intro: "Rất nhiều Đầu Phát Phim, Đầu Phát Android Tivi Box chình hãng từ FPT, Vaio, MXQ, Kiwibox, Vinabox,.. giá ưu đãi. Chat ngay với Shopee để được tư vấn tận tình, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13164: {
				intro: "Hàng trăm dòng Adroid Tivi Box chính hãng từ Viettel, VNPT,..giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13165: {
				intro: "Rất nhiều Tivi Box Ram 3GB truyền hình kỹ thuật số, Android Tivi Box cao cấp, chính hãng từ FPT Telecom, VNPT, Vinabox, TX8 Max, Forter, Kiwi Box,..giá ưu đãi, Shopee Giao Hàng Miễn Phí, Giao Hàng Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			13166: {
				intro: "Hàng trăm Chuột Bay, Nguồn Tivibox, Dây AV cao cấp, tiện ích, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			13167: {
				intro: "Rất nhiều Thiết Bị Định Vị GPS, Thiết Bị Định Vị 2 Chiều tiện lợi, hiện đại, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			13168: {
				intro: "Rất nhiều Kính Thực Tế Ảo, Kính VR chất lượng ảnh tốt, dễ sử dụng, rõ nét, giá cực ưu đãi. Miễn phí vận chuyển, bảo hành uy tín, nhiều khuyến mãi. Xem ngay!",
				intro_short: "0"
			},
			13169: {
				intro: "Rất nhiều Mắt Kính Camera, Mắt Kính Ngụy Trang hay, độc đáo, đa năng, tiện ích, chất lượng tốt, giá ưu đãi sốc. Miễn phí vận chuyển, bảo hành uy tín. MUA NGAY!",
				intro_short: "0"
			},
			13170: {
				intro: "Hàng trăm Đồng Hồ Thông Minh Màn Hình Màu & Trắng Đen cao cấp, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, giao hàng nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			13171: {
				intro: "Hàng trăm Vòng Đeo Tay Sức Khỏe, Đồng Hồ Thông MInh, Phu Kiện Chính Hãng từ Sony, Samsung, Xaomi, Fitbit,.. giá ưu đãi. Chat ngay với Shopee để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			13172: {
				intro: "Rất nhiều Dây Đeo Đồng Hồ Thông Minh, Kính Cường Lực Dán Đồng Hồ cao cấp, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt, Đơn Giản. XEM NGAY!",
				intro_short: "0"
			},
			13174: {
				intro: "Rất nhiều Bao Da OPPO nhiều dòng, thiết kế đẹp, bảo vệ điện thoại, giá siêu hấp dẫn. Miễn phí vận chuyển, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			13175: {
				intro: "Rất nhiều Miếng Dán Màn Hình Laptop, Tablet chất lượng cao, bảo vệ laptop tuyệt đối, giá cực ưu đãi. Miễn phí vận chuyển tận nơi, thanh toán đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			13176: {
				intro: "Hàng trăm sim 3G/4G truy cập internet với tốc độ cao với giá cực ưu đãi tại Shopee. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí, nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			13177: {
				intro: "Rất nhiều Sim 3G, 4G với tôc độ truy cập nhanh, dung lượng lớn. Chat ngay với Shop để được tự vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13178: {
				intro: "Rất nhiều Sim Số Đẹp, Sim 3G, 4G với dung lượng truy cập intermet thoái mái, tốc độ cao. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Chính Sách Trả Hàng Hoàn Tiền Đơn Giản. XEM NGAY!",
				intro_short: "0"
			},
			13179: {
				intro: "Rất nhiều Thẻ Cào Điện Thoại với nhiều mệnh giá khác nhau, nhiều nhà mạng, giá cực ưu đãi tại Shopee. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			13180: {
				intro: "Rất nhiều Thẻ Nạp Tiền Điện Thoại từ các nhà Mạng như Viettel, Vinaphone, Mobifone với giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			13181: {
				intro: "Hàng trăm Thẻ Cào từ nhà mạng Viettel, Vinaphone, Mobifone với các mệnh giá khác nhau với giá cực ưu đãi. Shopee Đảm Bảo Nhận Hàng,  Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13183: {
				intro: "Hàng trăm Thẻ Cào Viettel từ mệnh giá 10.000đ đến 500.000đ được phân phối tại Shopee với giá cực ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng  Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13185: {
				intro: "Đa dạng những mẫu Dây Quấn Cáp Sạc, Dây Quấn Tai Nghe, Thẻ Nhớ MicroSD,...cao cấp, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13186: {
				intro: "Rất nhiều Phần Mềm Máy Tính, Phần Mềm Văn Phòng như Microsoft, Avira,... phiên bản mới, dễ cài đặt với giá cực ưu đãi, giao hàng tận nơi, trả hàng dễ dàng theo quy định. Mua ngay!",
				intro_short: "0"
			},
			13187: {
				intro: "Rất nhiều Phần Mềm Máy Tính, Phần Mềm Bán Hàng,... từ BKAV, KiotViet, Microsoft,... bản quyền 100%, version mới, giá ưu đãi. Thanh toán đơn giản, giao hàng miễn phí. Xem ngay!",
				intro_short: "0"
			},
			13188: {
				intro: "Nhiều túi đeo chéo nữ 2018 thời trang, túi đeo chéo hàn quốc, túi đeo chéo adidas thể thao. Mẫu mã cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			13189: {
				intro: "Rất nhiều mẫu Túi Đeo Chéo, Túi Da, Túi Vải, Túi Đeo Chéo Thể Thao, kiểu dáng sang trọng, cá tính, giá hấp dẫn. Shopee Thanh Toán Linh Hoạt, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13190: {
				intro: "Nhiều túi xách nữ hàn quốc thời trang, túi xách nữ vascara chính hãng, túi xách nữ đẹp mẫu mới 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			13191: {
				intro: "Hàng trăm mẫu Túi Du Lịch, Túi Xách Nữ, Ba Lô Nữ kiểu dáng thời trang, chất liệu cao cấp, ngăn chứa đô rộng rãi. Shopee Đảm Bảo Nhận Hàng, Thanh Toán tiện lợi. XEM NGAY!",
				intro_short: "0"
			},
			13192: {
				intro: "Hàng trăm mẫu Ví Nữ, Clutch Nữ đẹp, xu hướng mới, chất liệu bền, sang trọng, giá cực ưu đãi, miễn phí vận chuyển tận nơi, trả hàng đơn giản. Chat ngay với chủ shop để được tư vấn miễn phí!",
				intro_short: "0"
			},
			13193: {
				intro: "Chọn ngay Ví Dài Nữ, Ví Ngắn Nữ, Túi Đựng Mỹ Phẩm kiểu dáng thời trang, chất liệu cao cấp, giá tốt. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí, Toàn Quốc. XEM NGAY!",
				intro_short: "0"
			},
			13194: {
				intro: "Nhiều mẫu Túi Xách Công Sở Cho Nam, Nữ với chất liệu da, vải cao cấp, từ Channel, Hopp, Dior,.. giá cực hấp dẫn. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Trà Hàng Và Hoàn Tiền Đơn Giản. XEM NGAY!",
				intro_short: "0"
			},
			13195: {
				intro: "Rất nhiều Cặp, Túi Văn Công Sở, chất liệu cao cấp, kiểu dáng thời trang, phong cách, giá tốt. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13196: {
				intro: "Rất nhiều Túi Đựng Tiện Ích, Túi Đựng Mỹ Phẩm, Túi Du Lịch,... đa năng, chất lượng bền, chống thấm, giá ưu đãi. Giao hàng miễn phí nhanh chóng, trả hàng đơn giản. Mua ngay!",
				intro_short: "0"
			},
			13197: {
				intro: "Rất nhiều Túi Giữ Nhiệt, Túi Đựng Mỹ Phẩm, Túi Du Lịch cao cấp, rộng rãi, giá tốt. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			13198: {
				intro: "Nhiều túi vải thời trang, túi tote đeo chéo cá tính, chất liệu cao cấp, mẫu mã mới 2018 cập nhật liên tục. Giá cực tốt tại Shopee ☑️ Giao Hàng Miễn Phí ☑️",
				intro_short: ""
			},
			13199: {
				intro: "Rất nhiều Túi Tote Canvans, Túi Tote Da, Túi Vải với kiểu dáng thời trang, tiện ích, chất liệu cao cấp, giá tốt. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13200: {
				intro: "Rất nhiều Túi Đựng Đồ, Túi Đeo Chéo, Phụ Kiện Cho Túi cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13201: {
				intro: "Rất nhiều Phụ Kiện Trang Trí Túi, Kem Lau Túi, Phụ Kiện May Túi cao cấp, tiện lợi. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Giao Hàng Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			13202: {
				intro: "Rất nhiều mẫu Ví Cầm Tay, Ví Dự Tiệc, Ví Đa Năng, Ví Thời Trang,... với nhiều kiểu dáng thời trang, chất liệu da cao cấp. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13203: {
				intro: "Rất nhiều Ví Dài Khóa Kéo, Nắp Gập, Ví Dài Cầm Tay kiểu dáng thời trang, sang trọng, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			13204: {
				intro: "Hàng trăm Bóp, Ví Cầm Tay, Ví Dự Tiệc, Ví Đeo Vai chất liệu cao cấp, kiểu dáng thời trang, giá hấp dẫn | Shopee.vn",
				intro_short: "0"
			},
			13205: {
				intro: "Hàng trăm kiểu Ví Đựng Hộ Chiếu, Bao Da Đựng Hộ Chiếu,.. kiểu dáng thanh lịch, thời trang. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY! ",
				intro_short: "0"
			},
			13206: {
				intro: "Rất nhiều Balo Thời Trang Nam Nữ đẹp, mẫu mã đa dạng, giá cực ưu đãi, Shopee đảm bảo chất lượng, giao hàng tận nơi miễn phí, trả hàng dễ dàng. Chat ngay với chủ shop để được tư vấn!",
				intro_short: "0"
			},
			13207: {
				intro: "Chọn ngay Balo Thời Trang, Balo Chống Gù Lưng, chất liệu cao cấp, nhiều ngăn chứa đồ, kiểu dáng trẻ trung, giá tốt. Chat ngay với Shop để được tư vấn tân tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13208: {
				intro: "Hàng trăm mẫu Túi Đeo Chéo Nữ, Ví Nữ Đeo Chéo, từ Lata, Blanda, Miha, Anya, Hindmarch,.. chính hãng giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13209: {
				intro: "Rất nhiều Túi Xách Nữ, Túi Cầm Tay nhỏ gọn, thời trang, tiện dụng, mẫu mới liên tục, giá cực ưu đãi. Miễn phí vận chuyển, rả hàng đơn giản, thanh toán đơn giản với Shopee. Xem ngay!",
				intro_short: "0"
			},
			13210: {
				intro: "Rất nhiều Balo Thời Trang, Balo Du Lịch Nam & Nữ đẹp, thời trang, mẫu mới cập nhật liên tục, giá cực ưu đãi. Miễn phí vận chuyển, thanh toán COD & chuyển khoản. MUA NGAY!",
				intro_short: "0"
			},
			13211: {
				intro: "Hàng trăm mẫu Cặp Văn Phòng Da, Cặp Vải kiểu dáng thời trang, chất liệu cao cấp, bền đẹp. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13212: {
				intro: "Rất nhiều Ví Đựng,Túi Đựng Tiện Ích, Túi Đựng Laptop  cao cấp, giá ưu đãi  Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13213: {
				intro: "Hàng trăm Túi Vải Đeo Vai, Túi Dây Rút, chất liệu vải bố, vải nỉ, vải dù,..kiểu dáng thời trang, thanh lịch, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13214: {
				intro: "Hàng trăm Túi Đựng Mỹ Phẩm, Móc Treo Túi, Dây Đeo Túi, Khóa Túi Xách tiện lợi, cao cấp, kiểu dáng thời trang, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13215: {
				intro: "",
				intro_short: "0"
			},
			13216: {
				intro: "Hàng trăm mẫu mã Tai Nghe như Tai Nghe In Ear, Tai Nghe On Ear, Tai Nghe Over Ear,...từ các thương hiệu lớn như Sony, Koss, Xaomi,..Shopee Đảm Bảo Nhận Hàng, Trà Hàng Hoàn Tiền, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13218: {
				intro: "Rất nhiều mẫu Tai Nghe Nhét Tai Bluetooth từ Sony, Samsung, Xiaomi,... cao cấp, chất âm tốt, sống động, thiết kế đẹp, thời trang với giá ưu đãi. Miễn phí vận chuyển, bảo hành uy tín. MUA NGAY!",
				intro_short: "0"
			},
			13219: {
				intro: "Rất nhiều loại Tai Nghe Chụp Tai Bluetooth, Tai Nghe Chụp Vành Tai với kiểu dáng sành điệu, sang trọng, trẻ trung, âm thanh sống động từ Sony, Bose, JBL,.. giá ưu đãi. Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13220: {
				intro: "Rất nhiều Tai Nghe Có Mic từ Xiaomi, Sennheiser, Sony,... chính hãng, cao cấp, bảo hành uy tín. Giao hàng miễn phí, trả hàng nhanh chóng, Shopee đảm bảo chất lượng. Xem ngay!",
				intro_short: "0"
			},
			13221: {
				intro: "Rất nhiều Tai Nghe Nhét Tai Có Dấy, Tai Nghe Nhét Tay Không Dây cao cấp, âm thanh cực đã, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13222: {
				intro: "Rất nhiều loại Tai Nghe Chụp Tai Bluetooth, Tai Nghe Chuyên Game,... với kiểu dáng trẻ trung, âm thanh sống động từ Sony, Bose, JBL,.. giá ưu đãi. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			13223: {
				intro: "Hàng trăm Tai Nghe On Ear có dây và Không Dây cao cấp, âm thanh ấm, bass cực đã, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13224: {
				intro: "Trang bị cho chiếc tivi nhà bạn những Phụ Kiện Tivi phù hợp như dây cáp kết nối, remote, khung treo tivi,...giúp bạn trải nghiệm tivi dễ dàng hơn. Shopee hiện đang có bán Phụ Kiện Tivi giá ưu đãi, dịch vụ chuyên nghiệp. Mua ngay!",
				intro_short: "0"
			},
			13226: {
				intro: "Rất nhiều Đầu Thu Kỹ Thuật Số Truyền Hình, Đầu Thu 2 trong 1 cao cấp, tính hiệu tốt, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền.XEM NGAY!",
				intro_short: "0"
			},
			13242: {
				intro: "Đồ chơi trẻ em chính hãng, đồ chơi giáo dục cao cấp, giá tốt nhất từ các thương hiệu Lego; Disney, Gundam... ☑️ Giao Hàng Miễn Phí ☑️ Ở Đâu Rẻ Hơn Shopee Hoàn Tiền ☑️",
				intro_short: ""
			},
			13246: {
				intro: "Rất nhiều Đồ Chơi Cho Trẻ Sơ Sinh & Trẻ Nhỏ từ Avent, Combi, Chicco, Anto,... chất liệu cao cấp, chính hãng, giá siêu hấp dẫn, Shopee đảm bảo chất lượng cho mẹ. MUA NGAY!",
				intro_short: "0"
			},
			13255: {
				intro: "Hàng trăm sản phẩm Đồ Chơi Giáo Dục giúp bé phát triển các kỹ năng như Đồ Chơi Học Chữ Và HÌnh Thù, Đồ Chơi Xếp Hình  và các Đồ Chơi của Lego cao cấp với giá tốt tại Shopee. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			13259: {
				intro: "Rất nhiều Đồ Chơi Vận Động Cho Bé từ Bestway, Intex, Little Tikes,... chính hãng, cao cấp, chất liệu an toàn, giá siêu hấp dẫn, giao hàng tận nơi miễn phí. Xem ngay!",
				intro_short: "0"
			},
			13261: {
				intro: "Rất nhiều mẫu Búp Bê, Đồ Chơi Nhồi Bông, Phụ Kiện Búp Bê từ Barbie, Toyroyal, Disney,... dễ thương, chất lượng an toàn, giá siêu hấp dẫn, giao hàng miễn phí, Shopee đảm bảo chất lượng. Xem ngay!",
				intro_short: "0"
			},
			13263: {
				intro: "Rất nhiều Đồ Chơi Nhân Vật Nhập Vai tư Hasbro, Toyland, Cobi, LEGO,... thú vị, hấp dẫn, chính hãng với giá cực ưu đãi, giao hàng miễn phí & được đảm bảo trả hàng - hoàn tiền khi không vừa lòng. Xem ngay!",
				intro_short: "0"
			},
			13265: {
				intro: "Rất nhiều Đồ Chơi Giải Trí Cho Bé cực thú vị, đa dạng như con quay, đồ chơi âm nhạc, đồ chơi mô hình,... cao cấp, chất liệu an toàn, giá cực ưu đãi, giao hàng miễn phí, trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			13274: {
				intro: "Rất nhiều Đồ Chơi Mô Hình như Sách Vải, Đồ Chơi Âm Thanh, Rối Ngón Tay, Kệ Chữ A,... chất liệu cao cấp an toàn. Shopee Đảm Bảo Giao Hàng Tận Nơi, Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13275: {
				intro: "Hàng trăm mẫu Thảm Chơi Cho Bé, Thảm Chơi Ấm Nhạc, Thảm Chơi Kích Thích Tri Tuệ,.. ngộ nghĩnh, độc đáo. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13293: {
				intro: "Rất nhiều Đồ Chơi Treo Nôi, Đồ Chơi Treo Nôi Có Nhạc xinh xắn, đáng yêu, chất liệu nhụa an toàn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng MIễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			13295: {
				intro: "Rất nhiều Đồ Chơi Nhà Tắm cho bé từ 0-1 tuổi và cho bé từ 1-3 tuổi với nhiều hình thù ngộ nghĩnh, đáng yêu, chất liệu cao cấp. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13297: {
				intro: "Rất nhiều Đồ Chơi Xếp Hình, Đồ Chơi Láp Ráp, chất liệu an toàn, mảnh ghép thú vị, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng tận nơi, nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			13298: {
				intro: "Rất nhiều đồ chơi phát triển kỹ năng cơ bản cho bé như Rubik, Bowling,... thú vị, chất liệu an toàn, giá ưu đãi. Miễn phí vận chuyển, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			13299: {
				intro: "Chọn ngay những món Đồ Chơi: Đồ Chơi Toán Học Có Số Que Tính, Đồ Chơi Gỗ Toán Học,.. giúp bé phát triển tư duy toàn diện. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng trên toàn quốc. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			13300: {
				intro: "Đa dạng nhiều loại đồ chơi như Giấy Thủ Công, Dụng Cụ làm Đồ Handmade, Đồ Chơi Thủ Công,.. ngộ nghĩnh, xinh xắn, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chóng, Chính Sách Trả Hàng Và Hoàn Tiền đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			13301: {
				intro: "Rất nhiều Đồ Chơi Cho Bé: Đồ Chơi Khoa Hoc, Đồ Chơi Mô Phỏng Nghề Nghiệp, Đồ Chơi Thẻ Học,..giúp bé phát triển kỹ năng, trí tuệ. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13302: {
				intro: "Rất nhiều Lều Bóng, Đồ Chơi Bắn Súng với chất liệu, an toàn cao cấp, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13303: {
				intro: "Rất nhiều Lều Chơi & Nhà Banh đẹp, chất lượng cao cấp, đa dạng mẫu mã với ưu đãi sốc. Miễn phí vận chuyển, trả hàng đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			13304: {
				intro: "Rất nhiều Bề Bơi, Phao Bơi, Phụ Kiện Bể Bơi  cho bé với chất liệu cao cấp,  nhiều kích cỡ cho lứa tuổi của bé, giá ưu dãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13305: {
				intro: "Rất nhiều Đồ Chơi Vận Động Ngoài Trời & Trong Nhà tiện lợi, thú vị, giá ưu đãi. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			13306: {
				intro: "Hàng trăm Đồ Chơi Vận Động, Đồ Chơi Ngoài Trời, Đồ Chơi Đấm Boxing, Đồ Chơi Bóng Rỗ,...với chất liệu an toàn, với giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13307: {
				intro: "Rất nhiều Búp Bê và Phụ Kiện Búp Bê ngộ nghĩnh, xinh xắn từ thương hiệu Búp bê Barbie, búp bê Baby Doll. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM  NGAY!",
				intro_short: "0"
			},
			13308: {
				intro: "Với nhiều món Đồ Chơi Cho Bé Gái hấp dẫn, Nhà Búp Bê Tự Lắp, Nhà Búp Bê Lắp Sẵn, chất liệu cao cấp, an toàn cho bé, giá ưu đãi. Chat ngày với Shop để được tư vấn tận tình. CLICK XEM NGAY!",
				intro_short: "0"
			},
			13310: {
				intro: "Rất nhiều Thú Nhồi Bông, Thú Nhồi Bông Pin đẹp, ngộ nghĩnh, kích thước đa dạng, đa dạng hình nhân vật. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			13318: {
				intro: "Rât nhiều Đồi Chơi Nhồi Bông, Đồ Chơi Nhồi Bông Biết Đi,.. hàng cao cấp, mềm mại, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13319: {
				intro: "Rất nhiều Đồ Chơi Nhập Vai, Đồ Chơi Hóa Trang & Bộ Sưu Tập Nhân Vật cho bé, chất liệu an toàn từ Lego, Finger Monkeys, Shin,..chính hãng. Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13320: {
				intro: "Rất nhiều Đồ Chơi Nhập Vai Cho Bé Trai & Bé Gái cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			13321: {
				intro: "Rất nhiều Đồ Chơi Nhận Vai Cho Bé, Đồ Hóa Trang Cho Bé Gái, giúp bé sáng tạo, vui chơi lành mạnh. Chat ngya với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13322: {
				intro: "Hàng trăm Đồ Chơi Nấu Ăn, Đất Nặn, Giỏ Đồ Chơi với nhiều đồ chơi thú vị, chất liệu an toàn cho bé, giá hấp dẫn. Chat ngay với Shop để dược tư vấn tận tình, Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13323: {
				intro: "Hàng trăm Con Quay Spinner 2 cánh, Spinner nhiều cánh với thiết kế đa dạng, độc đáo Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			13324: {
				intro: "Hàng trâm Đồ Chơi Cho Bé Trai, Đồ Chơi Cho Bé Gái, Dồ Chơi Xếp Hình, Đồ Chơi Dùng Pin,...chất liêu nhựa, gỗ, an toàn. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí..MUA NGAY!",
				intro_short: "0"
			},
			13325: {
				intro: "Rất nhiều Đồ Chơi Mô Hình & Điều Khiển Từ Xa đẹp, vui, nhiều tính năng, hoạt động êm ái, cao cấp, chính hãng. Giao hàng miễn phí tận nơi, ưu đãi sốc, trả hàng đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			13326: {
				intro: "Rất nhiều Phi Tiêu Chân Kim, Phi Tim Nam Châm, Phi Tiêu Kim Loại độc đáo, giúp bạn giảm căng thăng. Chat ngay với Shop để dược tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13327: {
				intro: "Rất nhiều Đồ Chơi Điện Tử Cho Bé Trai & Bé Gái cao cấp, đa dạng mẫu mã, đảm bảo an toàn, xuất xứ rõ ràng, giá cực ưu đãi. Giao hàng miễn phí, trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			13329: {
				intro: "Rát nhiều mẫu Đồ Chơi Âm Thanh, Đồ Chơi Mô Phỏng Nhạc Cụ,...chất liệu cao cấp, an toàn cho bé. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM  NGAY!",
				intro_short: "0"
			},
			13330: {
				intro: "Hàng trăm Thẻ Bài Tây, Thẻ Bài Chiến Thuật nhiều màu sắc, thú vị, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí, Nhanh Chóng. Shopee Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			13334: {
				intro: "Rất nhiều Sách Dành Cho Mẹ Bầu, Sách Dạy Con Từ Trong Bụng Mẹ bổ ích, ý nghĩa. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Thanh Toán Tiện Lợi. XEM NGAY!",
				intro_short: "0"
			},
			13335: {
				intro: "Rất nhiều Sách Kiến Thức, Sách Kỹ Năng Cho Trẻ thú vụ, đa dạng chủ đề, từ NXB nổi tiếng, giá ưu đãi. Giao hàng tận nơi miễn phí, trả hàng đơn giản. Mua ngay!",
				intro_short: "0"
			},
			13336: {
				intro: "Rất nhiều Sách Hay như Sách Kiến Thức Ăn Dặm, Sách Kỹ Năng Dạy Con,...với nhiều lời khuyên hay, ý nghĩa. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13337: {
				intro: "Rất nhiều Sách Kỹ Năng Chăm Sóc Bé, Sách Nuôi Dạy Con, Sách Dạy Làm Cha Mẹ hay, bìa đẹp. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí MUA NGAY!",
				intro_short: "0"
			},
			13338: {
				intro: "Hàng trăm Sách Nuôi Dạy Còn Bằng Tiếng Anh cho bé chưa biết đọc và đã biết đọc bổ ích, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			13339: {
				intro: "Hàng trăm Sách Tư Duy, Sách Kỹ Năng với kiến thức bổ ích, nội dung đa dạng, giấy đẹp, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13340: {
				intro: "Rất nhiều Sách Hướng Nghiệp Dành Cho Sinh Viện, Sách Hướng Dẫn Khởi Nghiệp, kiến thức rộng, bổ ích, giá ưu đãi. Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13341: {
				intro: "Hàng trăm Sách Kỹ Năng Sống, Sách Kỹ Năng Giao Tiếp, Kỹ Năng Bài Trí,...nội dung hay, gần gũi, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Nhanh Chong, Thanh Toán Linh Hoạt, XEM NGAY!",
				intro_short: "0"
			},
			13342: {
				intro: "Rất nhiều Sách Kĩ Năng Tiếng Anh hay, bìa đẹp, được viết bởi các tác giả nổi tiếng như Lily Collins, Chris Skellete, Hiromi Shinya,... Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13343: {
				intro: "Rất nhiều Sách Kỹ Năng Sống Cho Bé, Sách Kỹ Năng Giao Tiếp hay, ý nghĩa, giá ưu đãi. Chat ngay với Shop để đươc tư vấn tận tình, Shopee Giao Hàng Miễn Phí, Tận Nơi. MUA NGAY!",
				intro_short: "0"
			},
			13344: {
				intro: "Rất nhiều Sách Marketing, Sách Kỹ Năng Bán Hàng bổ ích, nội dung phong phú, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13345: {
				intro: "Hàng tram Sách Bài Học Kinh Doanh với nội dung phong phú, hấp dẫn, bổ ích, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13346: {
				intro: "Hàng trăm Sách Chia Sẽ, Sách Dạy Kỹ Năng, Sách Kinh Tế, kiến thức đa dạng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			13347: {
				intro: "Rất nhiều Sách Doanh Nhân, Câu Chuyện Doanh Nhân, Bí Quyết Thành Công, từ nhiều tác giả nổi tiếng. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13348: {
				intro: "Hang trăm Sách Quản Trị, Sách Lãnh Đạo từ NXB Trẻ, NXb Lao Động, NXB First News,.. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13349: {
				intro: "Rất nhiều Sách Tài Chính - Kế Toán Chuyên Ngành, Sách Dạy Làm Giàu với nội dung đa dạng, hấp dẫn. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13350: {
				intro: "Rất nhiều Sách Kỹ Năng Làm Việc, Kỹ Năng Bán Hàng, nội dung phong phú, độc đáo, giá cực ưu đãi tại Shopee. Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			13351: {
				intro: "Hàng trăm thể loại Sách Kinh Tế, Sách Kinh Doanh, Sách Khởi Nghiệp, Sách Kĩ Năng Làm Việc, Sách Marketing - Bán Hàng,...được phân phối tại Shopee với giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			13352: {
				intro: "Rất nhiều Giáo Trình, Sách Về Quản Trị Nguồn Nhân Lực, kiến thức rộng, bổ ích, giá uu đãi tại Shopee. Chat ngay với Shop để được tư vấn tận tình, thanh toán linh hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13353: {
				intro: "Rất nhiều Sách Tiền Tệ, Sách Chứng Khoán, Sách Tiền Điện Tử,..giúp bạn có thêm nhiền thông tin, kiến thức bổ ích. Chat ngay với Shop để được tư vấn tận tình, GIao Hàng Miên Phí. MUA NGAY!",
				intro_short: "0"
			},
			13355: {
				intro: "Rất nhiều Sách Luyện Thi THPT, Sách Tiếng Anh Cho Trẻ Em, bổ ích, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13356: {
				intro: "Rất nhiều Sách Dạy Tiếng Hoa, Giáo Trình Tiếng Hoa hay, bổ ích, minh họa dễ hiểu, giúp nhớ lâu và sâu. Ưu đãi hấp dẫn, vận chuyển miễn phí, trả sách dễ dàng. MUA NGAY!",
				intro_short: "0"
			},
			13357: {
				intro: "Đa dạng nhiều thể lại Sách Học Tiếng Hàn giúp cải thiện trình độ tiếng Hàn của bạn như: Sách Học Từ Vựng Tiếng Hàn, Sách Ngữ Pháp Tiếng Hàn,...Shopee Đảm Bảo Nhận Hàng, Hoặc Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13358: {
				intro: "Rất nhiều Sách Học Tiếng Anh hay, từ cơ bản đến nâng cao, dễ hiểu, ví dụ minh họa, đúng chuẩn, ưu đãi hấp dẫn. Giao sách miễn phí, thanh toán COD. MUA NGAY!",
				intro_short: "0"
			},
			13359: {
				intro: "Rất nhiều Sách Tiếng Nhật Dành Cho Người Mới Học, Đi Làm, Sách Tiếng Nhật Nâng Cao, kiến thức bổ ích, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			13360: {
				intro: "Rất nhiều Tiểu Thuyết Tình Cảm Lãng Mạn Việt Nam & Nước Ngoài hay, giá cực hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13361: {
				intro: "Rất nhiều Sách Văn Học Cổ Điển Phương Đông, Phương Tây hay, bìa đẹp, chất lượng giấy tốt, từ NXB nổi tiếng. Giao hàng miễn phí, trả hàng dễ dàng. MUA NGAY!",
				intro_short: "0"
			},
			13362: {
				intro: "Hàng trăm Sách Văn Học, Tiểu Thuyết  Tình Cảm Lãng Mạn với nội dung đa dạng, hấp dẫn, giá tốt. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13363: {
				intro: "Rất nhiều Sách Văn Học Nước Ngoài, Sách Trinh Thám, Sách Võ Thuật, Sách Tình Cảm,...hay, nội dung hấp dẫn. Shopee Giáo Hàng Miễn Phí, Hoặc Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13364: {
				intro: "Hàng trăm Truyện Ngắn, Tản Văn với nội dung đa dạng, hấp dẫn, nhân văn, giá ưu đãi tại Shopee. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			13365: {
				intro: "Rất nhiều Truyện Kinh Dị, Truyện Trinh Thám hay, lôi cuốn, hấp dẫn, nổi tiếng Thế Giới, chất giấy đẹp, giá cực ưu đãi. Vận chuyển miễn phí, trả hàng đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			13366: {
				intro: "Hàng trăm tác phẩm hay, Sách Hồi Ký, Sách Tiểu Sử với nội dụng hấp dẫn, chân thật từ các nhà xuất bản như Nhã Nam, Trí Việt, AlphaBooks, NXB Trẻ,...Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13367: {
				intro: "Hàng trăm Truyện Kiếm Hiệp, Truyện Kiếm Hiệp Phiêu Lưu Dài Tập, nội dung đặc sắc, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền.XEM NGAY!",
				intro_short: "0"
			},
			13368: {
				intro: "Rất nhiều Sách Văn Học, Tiểu Thuyết  Lãng Mạn, Truyện Trinh Thám Tiếng Anh với nội dung hấp dẫn, giá cực ưu đãi. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng. MUA NGAY!",
				intro_short: "0"
			},
			13369: {
				intro: "Rất nhiều Khóa Đồng Hồ Dây Da, Đồng Hồ Dây Cao Su,... đẹp, chất lượng tốt, giá cực ưu đãi. Giao hàng miễn phí, trả hàng - hoàn tiền đơn giản. Xem ngay tại Shopee!",
				intro_short: "0"
			},
			13370: {
				intro: "Rất nhiều Hộp Đựng Đồng Hồ tiện ích, Hộp Đựng Đồng Hồ Thông Thường, Hộp Đựng Đồng Hồ Đa Năng với giá ưu đãi, hàng chất lượng. Chat ngya với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			13371: {
				intro: "Đa dạng Hộp Lắc Đồng Hồ Cơ chất lượng cao, đa dạng mẫu mã, giá cực ưu đãi. Giao hàng miễn phí, trả hàng - hoàn tiền nhanh, thanh toán linh hoạt, Shopee đảm bảo chất lượng hàng. Mua ngay!",
				intro_short: "0"
			},
			13381: {
				intro: "Rất nhiều mẫu Guốc Nữ, Dép Nữ từ Biti's, Bita's,... thời trang, đẹp, xu hướng mới, giá cực ưu đãi, giao hàng miễn phí tận nơi, trả hàng - hoàn tiền nhanh chóng. Xem ngay!",
				intro_short: "0"
			},
			13383: {
				intro: "Hàng trăm dòng Pin Điện Thoại Các Loại, Pin Sạc Dự Phòng, Bộ Sạc Điên Thoại,.. chính hãng, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13392: {
				intro: "Rất nhiều Hộp Đựng Giày Nhựa & Giấy cao cấp, bền bỉ, đa dạng kích cỡ, giá ưu đãi. Miễn phí vận chuyển tận nơi, thanh toán COD, trả hàng đơn giản. XEM NGAY!",
				intro_short: "0"
			},
			13393: {
				intro: "Hàng trăm mẫu Giày Mũi Nhọn, Giày Platform, Giày Đế Xuồng,... cao cấp, kiểu dáng thời trang, trẻ trung. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			13394: {
				intro: "Hàng trăm mẫu giày cao gót nữ 7cm đẹp, giá rẻ từ Vascara, Juno, Đông Hải sang trọng tại Shopee.vn. Giao hàng miễn phí, nhanh chóng toàn quốc. Click mua ngay!",
				intro_short: "0"
			},
			13395: {
				intro: "Hàng trăm mẫu giày cao gót nữ 10cm giá rẻ, đẹp từ Vascara, Juno tại Shopee.vn. Giao hàng miễn phí, nhanh chóng toàn quốc, thanh toán linh hoạt. Click mua ngay!",
				intro_short: "0"
			},
			13402: {
				intro: "Rất nhiều Bốt Nữ Đẹp, thời trang, đa dạng mẫu mã, chất liệu đẹp, bền bỉ, giá cực ưu đãi. Giao hàng tận nơi miễn phí, trả hàng dễ dàng. MUA NGAY!",
				intro_short: "0"
			},
			13403: {
				intro: "Rất nhiều Dép Nhựa, Dép Bông Đi Trong Nhà Tiện Ích, Xinh Xắn, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền Tiện Lợi. MUA NGAY!",
				intro_short: "0"
			},
			13407: {
				intro: "Hàng trăm mẫu Dép, Guốc Thời Trang, kiểu dáng sang trọng, chất liệu cao cấp, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13413: {
				intro: "Hàng trăm Guốc Gót Nhọn, Guốc Gỗ, Guống Gót Vuông kiều dáng thời trang, chất liệu cao cấp, bền đẹp, giá hấp dẫn. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13414: {
				intro: "Rất nhiều Giày Thể Thao, Giày Sneaker với kiểu dáng thời trang, chất liệu cao cấp, bền đẹp, giá tốt. Shopee Giao Hàng Miễn Phí, Đảm Bảo Nhận Hàng.. XEM NGAY!",
				intro_short: "0"
			},
			13415: {
				intro: "Rất nhiều Bộ Phát Wifi, Kềm Bấm Mạng, Bộ Kích Wifi chính hãng từ Totolink, TP LInk, Bosi, Sunkit,...giá ưu đãi. Chat ngay với Shop để được tư vấn tân tình, Shopee Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13416: {
				intro: "Nhanh mua Phụ Kiện Bàn Phím & Chuột chất lượng như Keycap, Bộ Vệ Sinh Bàn Phím,.. đa dạng với giá cực ưu đãi. Shopee đảm bảo chất lượng hàng hóa, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			13417: {
				intro: "Hàng trăm Máy In Mã Vạch, Máy Quét Mã Vạch, Bút Trình Chiếu chính hãng, cao cấp, giá tốt. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền Đơn Giản. MUA NGAY!",
				intro_short: "0"
			},
			13418: {
				intro: "Hàng trăm dòng Camera Giám Sát , Camera du lịch từ các Hikvision, Smart Bell, Yoosee,... chính hãng với giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giiao Hàng Miễn, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13419: {
				intro: "Rất nhiều sản phẩm Camera Ngụy Trang, Camera Hồng Ngoại, Camera Wifi, với thiết kế hiện đại, giá ưu đãi. Chat ngay với Shopee để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Giao Miễn Phí, Nhanh Chóng. Hoặc Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13420: {
				intro: "Rất nhiều Bộ Vệ Sinh Máy Ảnh, Hộp, Tủ Chống Ẩm, Dây & Đai Đeo cao cấp, giá hấp dẫn. Chat ngay với Shop để dược tư vấn tận tình, giao hàng miễn phí, nhanh chóng. XEM NGAY!",
				intro_short: "0"
			},
			13421: {
				intro: "Rất nhiều Thiết Bị Đeo Thông Minh đa năng, cao cấp, chất lượng tốt, giá cực ưu đãi. Vận chuyển tận nơi, thanh toán đơn giản, bảo hành uy tín. XEM NGAY!",
				intro_short: "0"
			},
			13422: {
				intro: "Hàng trăm Card Âm Thanh, Micro, Loa Bluetooth cao cấp, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			13423: {
				intro: "Hàng trăm dòng Android Tivi,  Android TV box 3C, Android TV box plus, Android TV box Apple 4K, Android TV box Ram 3G,... chính hãng, giá tốt. Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13424: {
				intro: "Rất nhiều Đầu Thu Truyền  Hình Kỹ Thuật Số, Dây Cáp HDMI, Điểu Khiển Tivi, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13425: {
				intro: "Rất nhiều Phụ Kiện Tivi, Khung Treo Tivi, Bao Bảo Vệ Remote Tivi, Cổng Nối Thiết Bị Với Tivi,..hàng cao cấp, chất lượng. Shopee Giao Hàng Miễn Phí,  Nhanh Chóng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13426: {
				intro: "Rất nhiều Vật Dungjg Văn Phòng Phẩm, Dụng Cụ Trang Trí tiện ích, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			13427: {
				intro: "Đa dang các Dụng Cụ Sửa Chữa, Chăm Sóc Xe: Dụng Cụ Sửa Chữa Xe Máy, Dụng Cụ Sửa Chữa Xe Đạp, Dụng Cụ Sửa Chữa Chăm Sóc Ô Tô,..giá tốt tại Shopee. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13428: {
				intro: "Rất nhiều Phụ Kiện Cho Xe Máy, Ô Tô, Xe Đạp cao cấp, thiết kế hiện đại, tiện ích, giá tốt. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13429: {
				intro: "Rất nhiều Dụng Dịch Đánh Bóng & Đồng Hồ Đo Lốp Xe, Kem Xóa Vết Xước,.. cao cấp, giá cực hấp dẫn. Shopee Giao Hàng Toàn Quốc, Nhanh Chóng, Thanh Toán COD. MUA NGAY!",
				intro_short: "0"
			},
			13430: {
				intro: "Rất nhiều Phụ Kiện Dành Cho Xe Đạp, Xe Đạp Điện, Xe Máy, Phụ Kiện Đi Phượt cao cấp, giá tốt. Chat ngay với Shop để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			13433: {
				intro: "Hàng trăm Thẻ Nhớ USB, Hộp Đựng Thẻ Nhớ Micro SD cao cấp, chính hãng, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13436: {
				intro: "Hàng trăm Cáp Chia Âm Thanh, Hộp Đựng Tai Nghe, Dây Quấn Cáp Sạc, Núm  Cao Su,..hàng cao cấp, tương thích với nhiều dòng máy, giá tốt. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			13437: {
				intro: "Rất nhiều dòng Điện Thoại Thông MInh, ĐIện Thoại Cơ Bản từ Nokia, Oppo, Asus,.. chính hãng, giá ưu đãi, thiết kệ đẹp. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			13438: {
				intro: "Rất nhiều Phụ Kiện Điện Thoại: Cốc Sạc, Cáp Sạc Điện Thoại, Dock Điện Thoại,.. chính hãng từ Samsung, Oppo, Apple, Anker, Ego. Shopee Giao Hàng Miễn Phí, Thanh Toán Khi Nhận Hàng. XEM NGAY!",
				intro_short: "0"
			},
			13439: {
				intro: "Hàng trăm máy sấy tóc tạo kiểu từ Panasonic, Philips chính hãng, giá rẻ bất ngờ tại website Shopee.vn. Giao hàng miễn phí tận nơi, thanh toán linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			13440: {
				intro: "Chọn ngay Máy Uốn Tóc, Máy Duỗi Tóc chính hãng từ các thương hiệu nổi tiếng như Davines, Shinon, Sonaky, Kemei, Phillips,..giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13441: {
				intro: "Hàng trăm Máy Xông Mặt Để Bàn, Máy Xong Mặt Cầm Tay cao cấp, tiện lợi, dễ sử dụng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Tiện Lợi. XEM NGAY!",
				intro_short: "0"
			},
			13442: {
				intro: "Rất nhiều Máy Rửa Mặt, Cây Lăn Massage Mặt cao cấp, hiện đại, giá cực hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13443: {
				intro: "Chọn ngay Thiết Bị Lăn Kim Hàn Quốc, Cây Lăn Kim Cầm Tay, Máy Lăn Kim từ các thương hiệu như ZGTS, Nano Care, Skin Roller,..Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt, Tiện Lợi. XEM NGAY!",
				intro_short: "0"
			},
			13444: {
				intro: "Rất nhiều Máy Wax Lông từ Shinon, Pri-wax. Wizzit,... cao cấp, đa năng, dễ sử dụng, giá cực ưu đãi, giao hàng tận nơi miễn phí, bảo hành uy tín. Shopee đảm bảo chất lượng với chính sách trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			13445: {
				intro: "Rất nhiều Tông Đơ Cawsrt Tóc Dùng Pin, Tông Đơ Cắt Tóc Dùng Điện Trực Tiê[s, thiết kế nhỏ gọn, tiện ích. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13446: {
				intro: "Nhiều mẫu Giày Cao Gọt Nhọn, Giày Cao Gót Đế Vuông, Đế Xuồng kiểu dáng sang trọng, chất liệu cao cấp. Chat ngay với Shop để được tư vấn tận tình, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13447: {
				intro: "Hàng trăm Sản Phẩm Chăm Sóc Cho Nam: Dạo Cạo và Máy Cạo Râu,..hàng cao cấp, đảm bảo chất lượng, giá ưu đãi. Giao Hàng Miễn Phí, Nhanh Chóng, Toàn Quốc CLICK MUA NGAY!",
				intro_short: "0"
			},
			13448: {
				intro: "Rất nhiều Dầu Gió, Cao Dán, Băng Keo Cá Nhân & Sản Phẩm Chăm Sóc Vết Thương cao cấp, đảm bảo chất lượng, giá tốt với ưu đãi hấp dẫn, giao hàng miễn phí. Mua ngay!",
				intro_short: "0"
			},
			13451: {
				intro: "Hàng trăm Thực Phẩm Chức Năng Hỗ Trợ Xương Khớp Nội Và Ngoại  cao cấp, an toàn, giá ưu đãi. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			13452: {
				intro: "Mua ngay Thực Phẩm Chức Năng Giảm Cân, Chăm Sóc Sắc Đẹp, Vitamin tốt cho sức khỏe, an toàn, giá ưu đãi tại Shopee. Giao Hàng Miễn Phó, Thanh Toán Linh Hoạt.XEM NGAY!",
				intro_short: "0"
			},
			13453: {
				intro: "Rất nhiều Dụng Cụ Làm Móng, Máy Làm Móng cao cấp, chính hãng, an toàn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Tận Nơi, Nhanh Chóng. XEM NGAY! ",
				intro_short: "0"
			},
			13458: {
				intro: "Rất nhiều Đồng Hồ & Phụ Kiện Đồng Hồ như Dây Đồng Hồ, Pin Đồng Hồ,... cao cấp, chính hãng, giá cực ưu đãi. Giao hàng miễn phí, trả hàng đơn giản. Mua ngay!",
				intro_short: "0"
			},
			13459: {
				intro: "Rất nhiều Đô Chơi Vận Động, Đồ Chơi Giáo Dục, Đồ Chơi Dành Cho Trẻ Sơ Sinh với chất liệu nhựa PVC an toàn, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13460: {
				intro: "Rất nhiều Hộp Màu Vẽ, Bộ Chữ Gỗ Nam Châm, Thước Đo Chiều Cao Cho Bé độc đáo, chất liệu an toàn, giá tốt. Chat ngay với Shop để dược tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			13461: {
				intro: "Rất nhiều Đồ Chơi Bong Bóng, Đồ Chơi Thú Cưng, Đồ Chơi Mô Hình đa dạng, với chất liệu cao cấp, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13464: {
				intro: "Rất nhiều Đồ Chơi Nhân Vật, Đồ Chơi Nhập Vai, Bộ Đồ Chơi Đầu Bếp Nấu Ăn từ các thương hiệu nổi tiếng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			13465: {
				intro: "Hàng trăm Đồ Chơi Giải Trí Ngoài Trời , Slime cao cấp, an toàn cho bé, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, XEM NGAY!",
				intro_short: "0"
			},
			13466: {
				intro: "Hàng trăm Bộ Cờ Vua, Cờ Tướng, Bài Tây, Bài UNO,... cao cấp, đa dạng, giá cực hấp dẫn, giao hàng tận nơi, trả hàng - hoàn tiền khi không đạt chất lượng theo quy định. Mua ngay!",
				intro_short: "0"
			},
			13467: {
				intro: "Rất nhiều Bộ bài giải trí, Board Game Luyện Phản Xạ, Board Game Suy Luận, Phán Đoán,...giúp bạn thư giãn tiện ích. Chat ngay với Shop để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			13468: {
				intro: "Rất nhiều Bộ Cờ Tướng Bằng Nhựa & Gỗ cao cấp, với mức giá ưu đãi tại Shopee. Chat ngay với nhà bán hàng trên Shopee để được tư vấn tận tình. MUA NGAY!",
				intro_short: "0"
			},
			13469: {
				intro: "Hàng trăm Cờ Vua Giấy, Gỗ, Cờ Vua Nam Châm với chất liệu cao cấp, giá cả hợp lý. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. XEM NGAY!",
				intro_short: "0"
			},
			13470: {
				intro: "Hàng trăm Bài Uno, Bài Tây, Bài Ma Soi giúp bạn giảm stress, dễ chơi, giá cực ưu đãi tại Shopee. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13471: {
				intro: "Rất nhiều Bài Uno, Bài Tây, Bai Ma Sói độc đáo, hấp dẫn, giá cả ưu đãi. Shopee Đảm Bảo Nhận Hàng,  Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			13472: {
				intro: "Rất nhiều Loại Cờ Đồ Chơi, Cờ Cá Ngựa, Cờ Tỷ Phú,... vui, chất liệu an toàn, đa dạng, giá ưu đãi. Giao hàng miễn phí, thanh toán COD, trả hàng đơn giản. Xem ngay!",
				intro_short: "0"
			},
			13479: {
				intro: "Rất nhiều mẫu Dép, Guốc Nữ kiểu dáng thời trang, phong cách, chất liệu cao cấp, với giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Hoặc Trà Hàng Hoàn Tiền đơn giản. MUA NGAY!",
				intro_short: "0"
			},
			13486: {
				intro: "Hàng trăm mẫu Móc Khóa Thông Minh, Móc Khóa Kim Loại, Móc Khóa Nhựa,.. kiểu dáng ngộ nghĩnh, đáng yêu, xinh xắn. Chat ngay với Shop để được tư vấn nhiệt tình. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13487: {
				intro: "Hàng trăm Hộp Quà Tặng, Phụ Kiện Hộp Quà cao cấp, nhiều màu sắc, họa tiết, mẫu mã, giá hấp dẫn. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13488: {
				intro: "Rất nhiều Túi Thơm, Túi Thơm Có Hạt Hút Ẩm, Túi Thơm Có Móc Treo, lưu hương lâu, dịu nhẹ, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí. MUA NGAY!",
				intro_short: "0"
			},
			13489: {
				intro: "Rất nhiều Túi Thơm, Hộp Quà Tặng, Móc Khóa xinh xắn, ngộ nghĩnh, độc đáo, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. XEM NGAY!",
				intro_short: "0"
			},
			13497: {
				intro: "Rất nhiều Đồ Chơi Nhập Vai, Đồ Chơi Mô Hình, Đồ Chơi Thú Nhún cao cấp, giá hấp dẫn. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13500: {
				intro: "Rất nhiều Giày Đế Bằng Nữ, Giày Búp Bê đẹp, mẫu mới, giá cực ưu đãi, giao hàng tận nơi miễn phí, đa dạng kích cỡ, trả hàng đơn giản. Mua ngay!",
				intro_short: "0"
			},
			13501: {
				intro: "Hàng trăm mẫu Bốt Nữ, Bốt Cổ Cao, Bốt Cổ Thấp, kiều dáng sang trọng, cá tính, chất liệu cao cấp, bền đẹp.Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13502: {
				intro: "Rất nhiều mãu Giày Sneaker Cổ Cao, Cô Thấp, Giày Slip on, từ Adidas, Converse, Puma,... chính hãng, kiểu dáng thời trang, trẻ trung, sành điệu. Chat ngay với Shop để được tư vấn tận tình, Shopee Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13503: {
				intro: "Rất nhiều Lót Giày, Bao Trùm Giày Đi Mưa, Dung Dịch Làm Sạch Giày với chất liệu cao, giá ưu đãi. Shopee Giao Hàng Miễn Phí, Trả Hàng Hoàn Tiền. XEM NGAY!",
				intro_short: "0"
			},
			13506: {
				intro: "Rất nhiều quần áo, đầm váy, phụ kiện thời trang trung niên đẹp, sang trọng, chất vải đẹp, thoải mái với ưu đãi sốc. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13508: {
				intro: "Rất nhiều Đồ Bồ Cho Quý Bà, Áo Khoác Cho Bà, Đầm Cho Phụ Nữ Trung Niên, kiểu dáng thời trang, vải thoáng mát, giá tốt. Shopee Giao Hàng Miễn Phí, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13533: {
				intro: "Rất nhiều Kem Dưỡng Ẩm Cho Bé, Nước Tắm Tinh Dầu Thảo Dược, Kem Dưỡng Ẩm Da Khô từ Johnson, Hipp, Dexeryl,.. chính hãng, an toàn, dịu nhẹ. Chat ngay với Shop để được tư vấn tận tình. Shopee Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13587: {
				intro: "Hàng trăm Máy Massage, Máy Làm Thon Gọn Cơ Thể từ các thương hiệu Benice, Beurer, Mino, X5, Vibro, Sauna Belt.... chính hãng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Trả Hàng Hoàn Tiền. MUA NGAY!",
				intro_short: "0"
			},
			13588: {
				intro: "Rất nhiều Đai Nịt Bụng, Đai Corset,... chất lượng cao, dễ sử dụng, an toàn cho mọi người, thiết kế khoa học, giá cực ưu đãi. Miễn phí vận chuyển, trả hàng đơn giản. Mua ngay!",
				intro_short: "0"
			},
			13600: {
				intro: "Hàng trăm đầu sách Lịch sử bao gồm Lịch sử Việt Nam và Lịch sử Thế Giới từ các tác giả nổi tiếng hiện đang được bán tại Shopee.vn với mức giá hấp dẫn. Truy cập Shopee ngay hôm nay để mua sách Lịch sử yêu thích của bạn nhé!",
				intro_short: "0"
			},
			13601: {
				intro: "Rất nhiều Sách Lịch Sử, Sách Truyện Tranh, với nội dung đa dạng, phong phú, giá ưu dãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13602: {
				intro: "Tổng hợp nhiều Sách Văn Hóa Và Du Lịch hay và thú vị từ nhiều tác giả nổi tiếng như Markus Zusak, Arthur Golden,...với giá ưu đãi. Chat ngay với Shopee để được tư vấn tận tình. XEM NGAY!",
				intro_short: "0"
			},
			13603: {
				intro: "Rất nhiều Sách Hội Hè Lễ Tết, Sách Ảnh Du Lịch, Fanbook Thần Tượng, nội dung phong phú, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Toàn Quốc. MUA NGAY!",
				intro_short: "0"
			},
			13606: {
				intro: "Rất nhiều Sách Chính Trị, Sách Pháp Lý hay, thông tin chuẩn xác và bổ ích. Chat ngay với Shop để được tư vấn tận tình, Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13607: {
				intro: "Hàng trăm Sách Chính Trị, Sách Pháp Luật sách do Nhà  Nước ban hàng, nội dụng chính xác. Chat ngay với Shop để được tư vấn tận tình. Shopee Đảm Bảo Nhận Hàng, Thanh Toán Linh Hoạt. MUA NGAY!",
				intro_short: "0"
			},
			13700: {
				intro: "Hàng trăm đầu Sách Nông Lâm Ngư Nghiệp bổ ích, lý thú từ các tác giả nổi tiếng hiện đã có mặt tại Shopee. Bạn sẽ có thể trải nghiệm được dịch vụ mua hàng online hiện đại, với dịch vụ giao hàng tận nhà an toàn, chuyên nghiệp của chúng tôi. Mua ngay!",
				intro_short: "0"
			},
			13701: {
				intro: "Hàng trăm Sách Về Kỹ Thuật Trồng Trọt, Chăn Nuôi Gia Súc, Gia Cầm, Sách Kỹ Thuật Chăm Nuôi Thú Cưng, kiến thức bổ ích, Shopee Giao Hàng Miễn Phí, Nhanh Chóng. MUA NGAY!",
				intro_short: "0"
			},
			13702: {
				intro: "Hàng trăm mẫu Giày Cao Gót Nữ, Giày Sandal Gót Vuông, Sandal Đế Xuồng kiểu dáng thời trang, chất liệu cao cấp. Shopee Giao Hàng Miễn Phí, Nhanh Chóng trên toàn quốc. XEM NGAY!",
				intro_short: "0"
			},
			13703: {
				intro: "Rất nhiều Sách Y Học, Sách Hướng Dẫn Làm Đẹp khoa học, hay, thú vị, hiệu quả với giá siêu hấp dẫn. Vận chuyển miễn phí, trả hàng - hoàn tiền khi không vừa ý theo quy định. Xem ngay!",
				intro_short: "0"
			},
			13704: {
				intro: "Rất nhiều đầu Sách Y Học hay, bổ ích, dễ thực hiện, trị bách bệnh từ NXB lớn. Giao hàng tận nơi miễn phí, trả hàng - hoàn tiền đơn giản, nhanh chóng. Xem ngay!",
				intro_short: "0"
			},
			13705: {
				intro: "Rất nhiều Sách Khoa Học Dành Cho Thiếu Nhi, Sách Kỹ Thuật Cơ Khí hay, bổ ích, giá cực ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. XEM NGAY!",
				intro_short: "0"
			},
			13706: {
				intro: "Hàng trăm Sách Khoa Học Thiếu Nhi, Sách Lịch Sử Khoa Học bổ ích, giá ưu đãi. Chat ngay với Shop để được tư vấn tận tình, giao hàng nhanh chóng. MUA NGAY!",
				intro_short: "0"
			},
			13707: {
				intro: "Rất nhiều Sandal Đế Xuồng, Sandal Gót Nhọn dưới 7 cm với kiểu dáng thời trang, sang trọng, giá tốt. Shopee Thanh Toán COD, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13708: {
				intro: "Rất nhiều Sandal Đế Thô, Sandal Gót Nhọn trên 10cm cao cấp, kiểu dáng thời trang, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!",
				intro_short: "0"
			},
			13715: {
				intro: "Rất nhiều Điện Thoại Xiaomi Tầm Trung và Điện Thoại Xiami cao cấp, cấu hình mạnh, giá cực sốc. Chat ngay với Shop để được tư vấn tận tình, giao hàng miễn phí, toàn quốc. MUA NGAY!",
				intro_short: "0"
			},
			13716: {
				intro: "Rất nhiều mẫu Giày Dép Unisex đẹp, mẫu mới với giá cực hấp dẫn & ưu đãi ngập tràn. Shopee có chính sách giao hàng miễn phí tận nơi & trả hàng - hoàn tiền uy tín. Trải nghiệm ngay!",
				intro_short: "0"
			},
			13717: {
				intro: "Rất nhiều Giày Boot, Dép, Giày Thể Thao cao cấp, kiểu dáng trẻ trung, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí, Nhanh Chóng. XEM NGAY!",
				intro_short: "0"
			},
			13720: {
				intro: "Rất nhiều mẫu sandal unisex đẹp, cá tính, chất liệu da hoặc vải bền bỉ, mềm mại, thoải mái, đa dạng kích cỡ. Ưu đãi lớn, giao miễn phí, thanh toán nhanh. Xem ngay!",
				intro_short: "0"
			},
			13724: {
				intro: "Rất nhiều phụ kiện giày dép: miếng lót giày, dây giày, vớ thời trang, giá hấp dẫn, thời trang, đa dạng mẫu mã. Miễn phí giao hàng, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			13729: {
				intro: "Hàng trăm chai xịt, nước lau làm sạch giày dép, túi xách hiệu quả, tiện lợi với mức giá cực kì hấp dẫn tại Shopee.vn. Giao hàng miễn phí toàn quốc. Xem ngay!",
				intro_short: "0"
			},
			13731: {
				intro: "Hàng trăm mẫu tất nam cổ ngắn, tất nam cổ dài đẹp, thời trang, giá cực hấp dẫn tại Shopee.vn. Cam kết giao hàng tận nhà miễn phí, thanh toán linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			13732: {
				intro: "Hàng trăm dụng cụ giày dép như cọ, xi đánh giày tiện lợi, giá cực rẻ tại Shopee.vn. Giao hàng tận nơi miễn phí toàn quốc, thanh toán COD tiện lợi. Click ngay!",
				intro_short: "0"
			},
			13734: {
				intro: "Rất nhiều mẫu vỏ gối đẹp, kích cỡ đa dạng, chất liệu cotton, lụa mát mẻ, mềm mịn cho bạn giấc ngủ ngon với giá ưu đãi. Giao hàng tận nơi, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13737: {
				intro: "Đa dạng các loại chiếu như chiếu trúc, chiếu điều hòa, chiếu cói, chiếu lụa 3D,... cao cấp, êm ái, thoáng mát với giá tốt. Miễn phí giao, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13739: {
				intro: "Mua tinh dầu thiên nhiên, đèn xông tinh dầu & phụ kiện tinh dầu cao cấp, 100% thiên nhiên, dễ chịu với giá ưu đãi. Giao hàng miễn phí, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			13741: {
				intro: "Mua đèn bắt muỗi, đèn diệt côn trùng hiệu quả, diệt nhiều loại côn trùng, an toàn với bé, độ bền cao, giá cực ưu đãi. Miễn phí vận chuyển, thanh toán COD. Xem ngay! ",
				intro_short: "0"
			},
			13744: {
				intro: "Rất nhiều đèn phòng ngủ sang trọng, đèn phòng ngủ cho bé, đèn LED,... tiết kiệm điện, tốt cho giấc ngủ với giá ưu đãi. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13745: {
				intro: "Rất nhiều mẫu đèn trang trí phòng, đèn dây LED, đèn trang trí trong nhà & ngoài trời đẹp với giá ưu đãi. Miễn phí vận chuyển, thanh toán tại nhà. Xem ngay! ",
				intro_short: "0"
			},
			13746: {
				intro: "Rất nhiều thiết bị, đèn chiếu sáng công nghiệp công suất cao, tiết kiệm điện, phạm vi chiếu rộng với ưu đãi sốc. Giao hàng miễn phí, thanh toán đơn giản. Click ngay!",
				intro_short: "0"
			},
			13750: {
				intro: "Rất nhiều dao bếp, kéo bếp, bộ dao kéo đẹp, sáng bóng, bền đẹp, dễ sử dụng, dễ mài bén. Shopee có ưu đãi cực sốc. Giao hàng miễn phí, thanh toán COD. Xem ngay! ",
				intro_short: "0"
			},
			13751: {
				intro: "Rất nhiều bộ nồi chảo Five Star, Elmich, Happycook, Lock&Lock,... đẹp, cao cấp, chống dính, an toàn với giá ưu đãi. Giao hàng tận nơi, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			13757: {
				intro: "Rất nhiều dụng cụ làm bánh, khuôn bánh đẹp, dụng cụ làm rau câu chất liệu cao cấp, an toàn, giá cực ưu đãi. Miễn phí vận chuyển, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			13758: {
				intro: "Rất nhiều phụ kiện bàn ăn, khăn trải bàn, bộ chén bát sứ đẹp,  sang trọng, chất liệu an toàn với ưu đãi cực sốc. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13762: {
				intro: "Hàng ngàn thiết bị nhà tắm, nhà vệ sinh, nắp vệ sinh thông minh, thiết bị lọc nước tại vòi,... cao cấp, ưu đãi hấp dẫn. Giao hàng tận nơi, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13763: {
				intro: "Hàng trăm gương phòng tắm đẹp, gương mini cao cấp, mẫu mã đa dạng, sang trọng, cao cấp, giá ưu đãi bất ngờ. Vận chuyển tận nơi, thanh toán tận nhà. Xem ngay!",
				intro_short: "0"
			},
			13769: {
				intro: "Rất nhiều áo mưa đơn, áo mưa 2 người, áo mưa vải dù, áo mưa bộ,... siêu bền, siêu nhẹ, dày dặn với giá ưu đãi. Vận chuyển tận nơi, thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			13770: {
				intro: "Rất nhiều dàn, móc treo quần áo, dàn treo đồ đa năng, chịu lực, chất liệu nhựa, kim loại siêu bền với giá ưu đãi. Giao hàng miễn phí, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			13771: {
				intro: "Rất nhiều ổ cắm điện đa năng từ Điện Quang, Xiaomi, LIOA,... thông minh, an toàn, bền bỉ với giá cực ưu đãi. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13772: {
				intro: "Mua trung tâm điều khiển nhà thông minh, hệ thống điều khiển nhà từ xa Xiaomi, Broadlink,... bảo hành uy tín, giá tốt. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13773: {
				intro: "Rất nhiều dụng cụ, thiết bị bảo hộ lao động, nón bảo hộ, kính bảo hộ, găng tay bảo hộ,... cao cấp, bền bỉ, giá tốt. Vận chuyển miễn phí, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			13774: {
				intro: "Hàng trăm loại vít bắn tôn, vít đầu lục giác giá rẻ tiện lợi hiện đã có mặt tại Shopee.vn. Giao hàng miễn phí, nhanh chóng toàn quốc, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			13775: {
				intro: "Mua bộ dụng cụ & dụng cụ sửa chữa trong nhà cao cấp từ Jakemy, Nikawa,... đầy đủ phụ kiện, giá ưu đãi. Giao hàng miễn phí, thanh toán COD linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			13776: {
				intro: "Rất nhiều dụng cụ đo lường, đồng hồ đo, muỗng đo lường, thước dây đo,... tiện ích, dễ sử dụng với giá cực ưu đãi. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13777: {
				intro: "Hàng trăm cọ lăn sơn dầu, cọ lăn sơn nước chất lượng cao, giá cực ưu đãi tại Shopee.vn. Giao hàng tận nơi miễn phí, nhanh chóng, thanh toán COD tiện lợi. Mua ngay!",
				intro_short: "0"
			},
			13778: {
				intro: "Rất nhiều dụng cụ hàn tiện, dụng cụ điện, dụng cụ hàn miệng túi từ Smato, Stanley,... cao cấp, dễ sử dụng, giá ưu đãi. Vận chuyển miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13780: {
				intro: "Hàng trăm máy đo nhiệt độ, độ ẩm hiện đại, chính xác & nhanh chóng. Đến với Shopee.vn để mua hàng giá tốt, cùng dịch vụ giao hàng & thanh toán tiện lợi. Mua ngay!",
				intro_short: "0"
			},
			13781: {
				intro: "Rất nhiều ổ khóa thông minh, chốt cửa, chặn cửa, ổ khóa chống cắt từ Veison, Zsolex, Yeti, Okika,... giá cực ưu đãi. Thanh toán COD, giao hàng tận nơi. Xem ngay!",
				intro_short: "0"
			},
			13787: {
				intro: "Rất nhiều mẫu đồng hồ để bàn đẹp, đa dạng phong cách cổ điển đến sang trọng, nhiều kích cỡ, giá ưu đãi. Miễn phí vận chuyển, thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			13793: {
				intro: "Rất nhiều tinh dầu, túi thơm, sáp thơm, xịt thơm phòng từ Bounce, Renuzit, Glade,... mùi hương đa dạng, dễ chịu, thơm lâu. Miễn phí giao, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13794: {
				intro: "Rất nhiều bộ đồ thờ cúng,đèn dầu, tượng Phật,... bằng men, sứ, đồng thau,... thiết kế tinh xảo, đẹp mắt, giá tốt. Miễn phí giao hàng, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13795: {
				intro: "Rất nhiều vật phẩm phong thủy phòng khách, bàn làm việc,... đẹp mắt, thiết kế tinh xảo đem lại may mắn & tài lộc. Miễn phí vận chuyển, thanh toán nhanh. Xem ngay!",
				intro_short: "0"
			},
			13796: {
				intro: "Rất nhiều lọ hoa, bình bông & hoa trang trí nhà cửa đẹp, đa dạng loại bông, thiết kế tinh xảo với giá ưu đãi. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			13801: {
				intro: "Rất nhiều cầu là bàn ủi, giỏ đựng đồ giặt ủi tiện lợi, giá rẻ tại Shopee.vn cho bạn giặt là quần áo dễ dàng. Giao hàng tận nơi miễn phí nhanh chóng. Click ngay!",
				intro_short: "0"
			},
			13885: {
				intro: "Mua thẻ cào điện thoại Viettel, Vinaphone, Mobifone, Vietnammobile online mệnh giá 50.000đ - 500.000đ có chiết khấu ngay trên Shopee. Nạp tiền nhanh, an toàn ngay!",
				intro_short: "0"
			},
			13887: {
				intro: "Rất nhiều mã thẻ cào, thẻ nạp điện thoại Mobifone online mệnh giá 10.000đ-500.000đ chiết khấu cao, giá ưu đãi, dễ sử dụng, nạp tiền an toàn. Mua ngay để nhận ưu đãi!",
				intro_short: "0"
			},
			13889: {
				intro: "Rất nhiều mã thẻ cào, thẻ nạp điện thoại Viettel online mệnh giá 10.000đ-500.000đ chiết khấu cao, giá ưu đãi, dễ sử dụng, nạp tiền an toàn. Mua ngay để nhận ưu đãi!",
				intro_short: "0"
			},
			13898: {
				intro: "Rất nhiều phụ kiện game, tay cầm chơi game, joystick từ Senze, Xiaomi,... cao cấp, kết nối ổn định, giá ưu đãi. Giao hàng miễn phí, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			13936: {
				intro: "Hàng trăm máy may mini, dây phơi áo quần tiện lợi cho cuộc sống hiện đã có tại Shopee với mức giá rẻ bất ngờ. Giao hàng miễn phí, nhanh chóng toàn quốc. Mua ngay!",
				intro_short: "0"
			},
			13937: {
				intro: "Rất nhiều máy đuổi côn trùng, đuổi muỗi hiệu quả cao, phạm vi hoạt động rộng, an toàn với giá cực ưu đãi. Miễn phí vận chuyển tận nơi, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			14026: {
				intro: "Hàng trăm máy tính bảng thông minh chất lượng tốt đa dạng nhiều kích cỡ, màu sắc, giá rẻ. Truy cập Shopee để chọn lựa máy tính bảng cho riêng mình. Click ngay! ",
				intro_short: "0"
			},
			14029: {
				intro: "Hàng trăm chiếc máy tính bảng Huawei chính hãng, giá rẻ bất ngờ tại Shopee.vn. Giao hàng tận nơi miễn phí, nhanh chóng toàn quốc, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			14132: {
				intro: "Rất nhiều balo, túi thể thao đẹp từ PINK, Adidas, Nike,... cao cấp, chất liệu bền, chống thấm, giá ưu đãi. Miễn phí vận chuyển, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			14134: {
				intro: "Rất nhiều balo du lịch thời trang, chất liệu tốt, siêu nhẹ bền, giá cực ưu đãi. Giao hàng tận nơi miễn phí, thanh toán COD hoặc chuyển khoản linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			14136: {
				intro: "Rất nhiều túi thể thao chống thấm, siêu nhẹ từ Adidas, Nike, Superdry,... cao cấp, siêu bền, giá ưu đãi sốc. Thanh toán đơn giản, giao hàng nhanh. Xem ngay!",
				intro_short: "0"
			},
			14138: {
				intro: "Rất nhiều balo, túi thể thao thời trang, bộ túi du lịch tiện nghi, đa năng, chất liệu bền nhẹ, giá cực ưu đãi. Giao hàng miễn phí, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			14154: {
				intro: "Hàng trăm đồ dùng dã ngoại như cần câu, máy câu cá, túi ngủ, lều từ thương hiệu Buluke, Humbgo,...giá cực tốt tại Shopee.vn. Giao hàng miễn phí toàn quốc. Xem ngay!",
				intro_short: "0"
			},
			14156: {
				intro: "Rất nhiều dụng cụ câu cá, mồi câu, dây câu,... chất lượng cao, đa dạng, cập nhật mỗi ngày, giá ưu đãi. Giao hàng tận nơi miễn phí, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			14157: {
				intro: "Hàng ngàn mẫu lều, túi ngủ & đồ dùng cắm trại cơ bản & chuyên nghiệp, chất liệu tốt, bền nhẹ, giá ưu đãi cực sốc. Giao hàng tận nơi, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			14160: {
				intro: "Rất nhiều phụ kiện & dụng cụ leo núi như móc, dây leo, gậy leo núi, ròng rọc,... tiện ích, bền chắc, giá cực ưu đãi. Giao hàng tận nơi, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			14162: {
				intro: "Hàng trăm dòng máy tập thể dục chạy bộ, đạp xe giảm cân hiệu quả, giá cực hấp dẫn tại Shopee.vn. Thanh toán tiện lợi, cam kết giao hàng tận nhà miễn phí. Mua ngay!",
				intro_short: "0"
			},
			14167: {
				intro: "Hàng trăm bộ tạ tay & dụng cụ tập tay tại nhà hiệu quả, tiện lợi với giá cực rẻ tại Shopee Việt Nam. Giao hàng tận nhà, thanh toán COD linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			14287: {
				intro: "Rất nhiều nồi áp suất từ Goldsun, Sunhouse, Kangaroo, Supor,... chính hãng, đẹp, dễ sử dụng với giá ưu đãi. Giao hàng tận nơi, thanh toán đơn giản. Mua ngay!",
				intro_short: "0"
			},
			14288: {
				intro: "Rất nhiều nồi hầm chậm, nồi nấu chậm Kangaroo, Beecook, Đạt Tường,... kho cá, nấu cháo đơn giản, giá ưu đãi. Thanh toán đơn giản, giao hàng nhanh. Mua ngay!",
				intro_short: "0"
			},
			14289: {
				intro: "Hàng trăm loại bếp gas âm, bếp gas hồng ngoại, bếp gas mini,...từ Sunhouse, Redsun, Rinnai chính hãng, giá rẻ tại Shopee.vn. Giao hàng tận nơi miễn phí. Click ngay!",
				intro_short: "0"
			},
			14290: {
				intro: "Rất nhiều bếp điện đa năng Kangaroo, Elmich, Osaka, Sanko, Disloma,... cao cấp, tiện dụng, nướng thơm, giá ưu đãi. Miễn phí giao, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			14292: {
				intro: "Rất nhiều nồi lẩu, chảo lẩu đa năng Comet, Osaka, Goodlife,... cao cấp, dễ sử dụng, chống dính, tiện dụng với giá ưu đãi. Miễn phí giao, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			14293: {
				intro: "Rất nhiều máy pha cà phê tự động, bán tự động, máy pha cà phê viên nén từ Delonghi, Jura, Melitta,... chính hãng, giá tốt. Giao hàng nhanh, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			14297: {
				intro: "Rất nhiều máy cắt lông xù nhỏ gọn, tiện dụng, dễ sử dụng, hiệu quả trên nhiều loại vải với giá giảm đến 40%. Giao hàng miễn phí, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			14301: {
				intro: "Rất nhiều phụ tùng, phụ kiện máy hút bụi như ống hút bụi, bàn hút bụi, phụ kiện chổi quét,... tiện ích, giá ưu đãi. Giao hàng nhanh, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			14302: {
				intro: "Rất nhiều máy lọc nước RO, Nano cho gia đình & văn phòng cao cấp từ Kangaroo, Karofi, Geyser,... giá cực ưu đãi. Giao hàng miễn phí, thanh toán nhanh. Xem ngay!",
				intro_short: "0"
			},
			14304: {
				intro: "Rất nhiều phụ tùng, phụ kiện đồ gia dụng như lõi lọc nước, phụ kiện máy lọc, máy lạnh, máy giặt,... tiện ích, giá ưu đãi. Thanh toán COD, giao miễn phí. Mua ngay!",
				intro_short: "0"
			},
			14308: {
				intro: "Hàng trăm balo máy ảnh, túi đựng máy ảnh, túi đựng lens từ Matin, Canon, Crumpler,... chính hãng, giá tốt. Giao hàng tận nơi, thanh toán đơn giản. Click ngay!",
				intro_short: "0"
			},
			14312: {
				intro: "Hàng trăm chân máy ảnh tripod, gậy chụp hình Benro, Yungten giá cực rẻ. Shopee hỗ trợ giao hàng tận nơi, trả hàng & hoàn tiền, thanh toán linh hoạt. Click ngay!",
				intro_short: "0"
			},
			14318: {
				intro: "Rất nhiều phụ kiện máy tính, miếng lót chuột, đế tản nhiệt,... từ Logitech, Hoco, Cooler Master,... cao cấp, giá ưu đãi. Giao hàng tận nơi, ưu đãi bất ngờ. Xem ngay!",
				intro_short: "0"
			},
			14357: {
				intro: "Rất nhiều phụ kiện xe máy đẹp, độ bền cao với mức giá hấp dẫn tại Shopee Việt Nam. Shopee.vn cam kết hàng chính hãng, miễn phí giao hàng. Cùng Shopee mua ngay!",
				intro_short: "0"
			},
			14358: {
				intro: "Hàng trăm phụ kiện xe máy như bọc yên xe, đồng hồ trang trí, áo phản quang với giá cực rẻ tại Shopee.vn. Giao hàng toàn quốc. Thanh toán linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			14364: {
				intro: "Hàng trăm mũ bảo hiểm, mũ 3/4, FullFace từ Andes, Royal, Asia,... đẹp, chính hãng. Shopee giao hàng miễn phí, thanh toán linh hoạt, ưu đãi bất tận. Click ngay!",
				intro_short: "0"
			},
			14369: {
				intro: "Hàng trăm phụ tùng xe máy chất lượng cao, giá hấp dẫn như kính chiếu hậu, nhông sên dĩa. Shopee cam kết mua hàng giá tốt, nhiều ưu đãi, giao hàng tận nơi. Mua ngay!",
				intro_short: "0"
			},
			14371: {
				intro: "Hàng trăm phụ kiện chăm sóc xe máy tiện lợi với mức giá cực ưu đãi như dầu nhớt, wax đánh bóng xe máy. Shopee đảm bảo nhận hàng, giao hàng miễn phí. Mua ngay! ",
				intro_short: "0"
			},
			14373: {
				intro: "Hàng trăm mũ bảo hiểm trẻ em an toàn, đẹp, giá tốt tại Shopee.vn. Giao hàng tận nhà miễn phí toàn quốc cùng hình thức thanh toán linh hoạt, tiện lợi. Xem ngay!",
				intro_short: "0"
			},
			14374: {
				intro: "Rất nhiều mũ bảo hiểm 1/2, mũ bảo hiểm nửa đầu từ Andes, GRS, Asia,... chính hãng, cao cấp, an toàn với giá ưu đãi. Miễn phí vận chuyển, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			14375: {
				intro: "Hàng trăm mũ bảo hiểm 3/4 đầu có kính & không kính đẹp, giá rẻ tại Shopee.vn. Cam kết giao hàng tận nhà miễn phí toàn quốc. Thanh toán COD linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			14376: {
				intro: "Rất nhiều mũ bảo hiểm Fullface cao cấp từ Royal, GXT, Asia, Moza,... chất lượng an toàn, chính hãng với giá ưu đãi. Giao hàng miễn phí, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			14377: {
				intro: "Rất nhiều mũ bảo hiểm xe đạp từ Giant, Fonix, Royal,... đúng chuẩn, chất lượng cao, nhẹ, bền với giá ưu đãi. Giao hàng tận nơi, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			14380: {
				intro: "Logo, huy hiệu xe máy Honda, Yamaha đẹp, ấn tượng với giá cực ưu đãi tại Shopee.vn. Giao hàng tận nhà miễn phí toàn quốc, thanh toán COD linh hoạt. Tìm hiểu ngay!",
				intro_short: "0"
			},
			14382: {
				intro: "Hàng trăm loại bạt phủ xe máy, ô tô giá rẻ, tiện lợi từ Dương Minh, Trường Thịnh tại Shopee.vn. Giao hàng miễn phí toàn quốc. Thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			14387: {
				intro: "Nhiều loại thắng, phụ kiện giảm sóc, phanh xe máy, ô tô, xe đạp chất lượng cao, tương thích nhiều dòng xe với giá ưu đãi. Giao hàng miễn phí, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			14388: {
				intro: "Mua phụ kiện hệ thống động cơ, nhiên liệu ô tô, xe máy Motul, Yamaha,... tương thích nhiều dòng xe, giá cực ưu đãi. Miễn phí giao hàng, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			14389: {
				intro: "Hàng trăm dầu nhớt xe số & xe tay ga an toàn từ Motul, Repsol, Total với giá rẻ bất ngờ tại Shopee.vn. Giao hàng tận nhà miễn phí. Thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			14390: {
				intro: "Hàng trăm loại máy bơm hơi lốp, keo vá xăm lốp xe tiện lợi, giá tốt tại Shopee.vn. Giao hàng miễn phí tận nhà, thanh toán linh hoạt, trả hàng & hoàn tiền. Mua ngay!",
				intro_short: "0"
			},
			14391: {
				intro: "Hàng trăm dụng cụ sửa chữa xe máy, dụng cụ vá xe máy chất lượng cao, giá cực ưu đãi tại Shopee.vn. Giao hàng tận nhà miễn phí. Thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			14392: {
				intro: "Hàng trăm mẫu tem xe máy đẹp, sang trọng, giá tốt tại Shopee.vn. Giao hàng tận nhà miễn phí, thanh toán COD tiện lợi, dịch vụ trả hàng & hoàn tiền. Mua ngay!",
				intro_short: "0"
			},
			14393: {
				intro: "Hàng trăm vòi rửa xe, khăn lau đánh bóng xe, nước rửa xe tiện lợi, giá cực hấp dẫn tại Shopee.vn. Giao hàng tận nhà miễn phí. Thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			14398: {
				intro: "Hàng trăm phụ tùng xe đạp & phụ kiện xe đạp, xe đạp điện chất lượng tốt, giá ưu đãi Shopee giao hàng miễn phí, khuyến mãi hấp dẫn, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			14400: {
				intro: "Rất nhiều phụ kiện xe đạp như đèn LED, chuông xe, phanh thắng xe đạp,... cao cấp, bền, dễ lắp đặt với giá ưu đãi. Giao hàng tận nơi, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			15023: {
				intro: "Hàng trăm mẫu đồ lót nam hàng hiệu, thời trang, cao cấp, giá cực hấp dẫn tại Shopee.vn. Giao hàng tận nhà miễn phí, thanh toán linh hoạt cực kì tiện lợi. Mua ngay!",
				intro_short: "0"
			},
			15135: {
				intro: "Rất nhiều mẫu thắt lưng nam, dây nịt nam đa dạng, chất liệu da cao cấp, thời trang, sang trọng với giá ưu đãi. Giao hàng miễn phí, thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			15139: {
				intro: "Rất nhiều trang sức nam như nhẫn nam, vòng tay nam, dây chuyền nam đẹp, bằng vàng, bạc, inox, da,... cao cấp. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			15141: {
				intro: "Rất nhiều quần áo trung niên nam mẫu mới 2018, sang trọng, đẳng cấp, đa dạng phong cách, chất vải tốt. Giao hàng tận nơi miễn phí, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			15359: {
				intro: "Hàng trăm bông tai, khuyên tai cho nam thời trang, giá cực hấp dẫn tại Shopee.vn. Giao hàng miễn phí, nhanh chóng toàn quốc, thanh toán COD. Click mua ngay!",
				intro_short: "0"
			},
			15361: {
				intro: "Rất nhiều mẫu vòng tay, lắc tay nam, vòng da, vòng đá,... đẹp, phong cách cá tính đến sang trọng. Giao hàng miễn phí, thanh toán đơn giản. Mua ngay để hưởng ưu đãi!",
				intro_short: "0"
			},
			16658: {
				intro: "Nhiều thẻ học thông minh đa dạng ,phong phú nhiều bài học bổ dưỡng giúp bé phát triển trí não mà còn giúp bé vui chơi tạo cảm giác hứng thú hơn. Click ngay!",
				intro_short: "0"
			},
			16659: {
				intro: "Rất nhiều thẻ học, flashcard ngoại ngữ & toán học thú vị cho bé, chất liệu tốt, bền, cung cấp nội dung hữu ích. Giao hàng tận nơi, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			16671: {
				intro: "Hàng trăm USB Bluetooth & loa vi tính Microlab công suất lớn, giá rẻ. Đến với Shopee.vn để trải nghiệm dịch vụ giao hàng tận nhà, thanh toán tiện lợi. Mua ngay!",
				intro_short: "0"
			},
			16706: {
				intro: "Rất nhiều tai nghe vi tính, tai nghe chơi game từ Logitech, iSound, Ovann, Soundmax,... chất âm tốt, giá ưu đãi. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16707: {
				intro: "Hàng trăm máy tính cầm tay, micro thu âm từ Casio, Maaz, Ami với mức giá cực rẻ tại website Shopee.vn. Giao hàng tận nơi miễn phí, thanh toán COD tiện lợi. Mua ngay!",
				intro_short: "0"
			},
			16770: {
				intro: "Rất nhiều đồ thời trang trẻ em, quần áo cho bé đẹp, cao cấp tại Shopee với giá thành cực ưu đãi. Shopee giao hàng tận nơi miễn phí, thanh toán linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			16772: {
				intro: "Hàng trăm set trang phục, áo bé gái, quần, chân váy & đầm bé gái 5 - 14 tuổi thời trang, giá hấp dẫn tại Shopee.vn. Hỗ trợ giao hàng miễn phí toàn quốc. Xem ngay!",
				intro_short: "0"
			},
			16773: {
				intro: "Rất nhiều quần áo bé gái, thời trang bé gái 5 - 14 tuổi đẹp, mẫu mới, chất vải tốt, mềm mại, an toàn với giá ưu đãi. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16775: {
				intro: "Hàng trăm set trang phục, áo bé gái, chân váy và đầm bé gái xinh xắn, đa dạng mẫu mã với giá cực hấp dẫn tại Shopee.vn. Giao hàng miễn phí toàn quốc. Mua ngay!",
				intro_short: "0"
			},
			16779: {
				intro: "Hàng trăm loại dây buộc tóc, băng đô cài tóc & mũ lưỡi trai xinh xắn cho bé với mức giá cực tốt tại Shopee.vn. Thanh toán linh hoạt, giao hàng miễn phí. Mua ngay!",
				intro_short: "0"
			},
			16780: {
				intro: "Rất nhiều phụ kiện thời trang cho bé trai, bé gái đẹp, dễ thương, chất liệu tốt, đa dạng mẫu mã, giá ưu đãi. Miễn phí giao hàng, thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			16781: {
				intro: "Hàng trăm giày dép bé trai, giày dép bé gái thời trang, đa dạng mẫu mà với giá cực tốt tại Shopee.vn. Hỗ trợ giao hàng tận nhà, miễn phí toàn quốc. Mua ngay!",
				intro_short: "0"
			},
			16783: {
				intro: "Rất nhiều mẫu áo khoác bé gái 5 - 14 tuổi thời trang, chất liệu ấm áp, mềm mại, an toàn với da bé, đa dạng mẫu mã. Giao hàng miễn phí, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			16784: {
				intro: "Rất nhiều mẫu váy bé gái, đầm bé gái 5 đến 14 tuổi đẹp, thời trang, chất liệu tốt, thoáng mát, giá cực ưu đãi. Giao hàng tận nơi, thanh toán đơn giản. Click ngay!",
				intro_short: "0"
			},
			16785: {
				intro: "Hàng trăm áo bé gái 5 - 14 tuổi xinh xắn với mức giá rẻ bất ngờ tại Shopee.vn. Giao hàng miễn phí tận nơi, toàn quốc nhanh chóng, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16786: {
				intro: "Hàng trăm mẫu váy & quần bé gái xinh xắn, thời trang với mức giá cực kì hấp dẫn hiện đã có tại Shopee.vn. Giao hàng miễn phí nhanh chóng toàn quốc. Mua ngay!",
				intro_short: "0"
			},
			16787: {
				intro: "Nhiều set trang phục, đồ bộ bé gái 5 - 14 tuổi thời trang, dễ thương, cho bé tự tin đi học, đi tiệc, giá ưu đãi. Miễn phí vận chuyển, thanh toán tại nhà. Xem ngay!",
				intro_short: "0"
			},
			16788: {
				intro: "Hàng trăm bộ đồ lót & đồ ngủ bé gái xinh xắn, đáng yêu độ tuổi từ 5 - 14 tuổi. Shopee.vn cam kết bán hàng giá tốt, giao hàng miễn phí, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			16789: {
				intro: "Hàng trăm mẫu đồ bơi trẻ em nữ thời trang, an toàn, giá rẻ cực hấp dẫn hiện đã có tại Shopee.vn. Cam kết giao hàng miễn phí toàn quốc nhanh chóng. Click ngay!",
				intro_short: "0"
			},
			16792: {
				intro: "Hàng trăm kiểu áo, quần bé trai 5 đến 14 tuổi thời trang, cá tính với giá tốt cho bé. Shopee hỗ trợ giao hàng tận nhà, thanh toán khi nhận hàng tiện lợi. Click ngay!",
				intro_short: "0"
			},
			16795: {
				intro: "Rất nhiều áo bé trai 5 -14 tuổi thời trang, đa dạng áo thun, áo sơ mi, áo có cổ,... Vải mềm mại, an toàn, giá tốt. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16799: {
				intro: "Rất nhiều quần bé trai 5 - 14 tuổi đa dạng kích cỡ, kiểu dáng quần đùi, quần dài, quần jogger,... với chất vải tốt. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16810: {
				intro: "Rất nhiều set trang phục, đồ nguyên bộ cho bé trai 5 - 14 tuổi thời trang, xu hướng mới, vải cao cấp với giá ưu đãi. Giao hàng tận nơi, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16812: {
				intro: "Rất nhiều đồ lót, đồ ngủ bé trai 5 - 14 tuổi thời trang, vải thoáng, ấm áp, mềm mại, an toàn với da, giá cực ưu đãi. Miễn phí giao hàng, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16813: {
				intro: "Rất nhiều đồ bơi bé trai 5 - 14 tuổi thời trang, mẫu mã đẹp, vải co giãn 4 chiều, siêu nhẹ, siêu bền, giá ưu đãi. Miễn phí giao hàng, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			16814: {
				intro: "Rất nhiều áo khoác bé gái 3 tháng - 4 tuổi đa dạng size, chất liệu vải dù, vải len, vải nỉ,... ấm áp, cao cấp, giá ưu đãi. Miễn phí giao, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16815: {
				intro: "Rất nhiều mẫu váy đầm bé gái 3 tháng - 4 tuổi đẹp, thời trang, nữ tính như công chúa, vải đẹp, giá ưu đãi. Giao hàng tận nơi, thanh toán linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			16816: {
				intro: "Rất nhiều áo bé gái 3 tháng - 4 tuổi như áo khoác, áo thun tay ngắn, áo kiểu bé gái,... thời trang, mẫu 2018, vải đẹp. Giao hàng tận nơi, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16817: {
				intro: "Rất nhiều quần bé gái, chân váy bé gái 3 tháng - 4 tuổi thời trang, mẫu 2018, chất liệu thoải mái với ưu đãi sốc. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16818: {
				intro: "Rất nhiều set trang phục, đồ bộ bé gái 3 tháng - 4 tuổi mix đẹp, thích hợp đi chơi, đi tiệc, ở nhà với vải tốt, giá ưu đãi. Miễn phí giao, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16819: {
				intro: "Rất nhiều đồ lót & đồ ngủ bé gái từ 3 tháng - 4 tuổi kiểu đồ bộ tay dài, đồ bộ 2 dây,... vải mát, mềm mại, an toàn. Giao hàng tận nơi, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16820: {
				intro: "Rất nhiều mẫu đồ bơi bé gái 3 tháng - 4 tuổi thời trang, co giãn thoải mái, bền bỉ, đa dạng kiểu dáng, ưu đãi sốc. Giao hàng miễn phí, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			16821: {
				intro: "Hàng trăm set trang phục, áo bé trai & quần bé trai 3 tháng - 4 tuổi đa dạng mẫu mã, giá cực hấp dẫn tại Shopee.vn. Giao hàng miễn phí toàn quốc. Xem ngay!",
				intro_short: "0"
			},
			16822: {
				intro: "Rất nhiều quần áo bé trai 3 tháng - 4 tuổi cao cấp, vải đa dạng: vải nỉ, bông, cotton,... mát, mềm mại với giá ưu đãi. Miễn phí giao, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16823: {
				intro: "Rất nhiều áo khoác bé trai 3 tháng - 4 tuổi đa dạng size, kiểu dáng, chất liệu ấm áp, co giãn tốt, cao cấp, giá ưu đãi. Miễn phí giao, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16824: {
				intro: "Hàng ngàn mẫu áo bé trai, áo thun, áo ba lỗ, áo len,... cho bé 3 tháng - 4 tuổi thời trang, vải tốt, mềm mại với giá ưu đãi. Thanh toán COD, giao miễn phí. Xem ngay!",
				intro_short: "0"
			},
			16825: {
				intro: "Rất nhiều quần bé trai 3 tháng - 4 tuổi đa dạng kích cỡ, kiểu dáng quần đùi, quần dài, quần tã,... với chất vải tốt. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16826: {
				intro: "Rất nhiều set trang phục, đồ bộ bé trai 3 tháng - 4 tuổi cá tính, đi chơi, đi tiệc, mặc nhà với vải tốt, giá ưu đãi. Miễn phí giao, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16827: {
				intro: "Rất nhiều đồ lót, đồ ngủ bé trai 3 tháng - 4 tuổi như đồ bộ ngắn tay, dài tay, đồ bộ nỉ bé trai,... vải tốt, giá sốc. Vận chuyển miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16828: {
				intro: "Rất nhiều đồ bơi bé trai 3 tháng - 4 tuổi thời trang, mẫu mã đẹp, vải co giãn 4 chiều, đa dạng size, giá ưu đãi. Miễn phí giao hàng, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			16829: {
				intro: "Hàng trăm set trang phục, áo, quần & váy đầm trẻ sơ sinh 0-12 tháng an toàn, thời trang giá cực tốt tại Shopee.vn. Hỗ trợ giao hàng toàn quốc miễn phí. Xem ngay!",
				intro_short: "0"
			},
			16830: {
				intro: "Hàng trăm quần trẻ em mặc nhà xinh xắn, giá rẻ bất ngờ tại Shopee.vn. Giao hàng miễn phí tận nhà, nhanh chóng toàn quốc, thanh toán COD tiện lợi. Click ngay!",
				intro_short: "0"
			},
			16831: {
				intro: "Hàng trăm áo ba lỗ, áo thun trẻ em thời trang, giá cực rẻ tại Shopee.vn. Dịch vụ giao hàng miễn phí tận nơi nhanh chóng, thanh toán COD tiện lợi. Mua ngay!",
				intro_short: "0"
			},
			16832: {
				intro: "Hàng trăm mẫu quần trẻ em mặc nhà, quần trẻ em đi học năng động với mức giá hấp dẫn tại Shopee.vn. Giao hàng miễn phí toàn quốc, thanh toán tiện lợi. Mua ngay!",
				intro_short: "0"
			},
			16833: {
				intro: "Hàng trăm mẫu đầm, yếm trẻ em xinh xắn, đáng yêu, giá rẻ bất ngờ tại Shopee.vn. Giao hàng miễn phí, toàn quốc nhanh chóng, thanh toán COD tiện lợi. Xem ngay!",
				intro_short: "0"
			},
			16834: {
				intro: "Hàng trăm set trang phục trẻ em xinh xắn, dễ thương và thời trang với mức giá cực hấp dẫn tại Shopee.vn. Giao hàng tận nhà miễn phí, thanh toán linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			16835: {
				intro: "Hàng trăm đồ ngủ, đồ lót trẻ em xinh xắn, thoải mái, giá cực tốt tại Shopee.vn. Giao hàng tận nơi miễn phí, nhanh chóng toàn quốc, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			16836: {
				intro: "Hàng trăm món đồ bơi cho trẻ sơ sinh thời trang, giá cực hấp dẫn hiện đã có mặt tại Shopee.vn. Cam kết giao hàng miễn phí toàn quốc. Thanh toán linh học.  Xem ngay!",
				intro_short: "0"
			},
			16837: {
				intro: "Rất nhiều mẫu túi trẻ em, balo cho bé thời trang, dễ thương, đa dạng kiểu dáng, chất liệu bền, giá ưu đãi. Thanh toán đơn giản, giao hàng miễn phí. Xem ngay!",
				intro_short: "0"
			},
			16838: {
				intro: "Rất nhiều nhẫn, vòng tay, vòng cổ trẻ em bằng vàng, bạc, kim loại sáng hay đá,... đẹp, an toàn cho bé, ưu đãi bất ngờ. Giao hàng nhanh, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16839: {
				intro: "Rất nhiều mắt kính cho bé, kính mát trẻ em đẹp, cao cấp, chống UV, chất liệu an toàn, bền bỉ, giá cực ưu đãi. Miễn phí vận chuyển, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			16840: {
				intro: "Rất nhiều mũ trẻ em, nón trẻ em & bé sơ sinh đẹp, đáng yêu, chất vải thoáng mát, êm ái với giá cực hấp dẫn. Miễn phí vận chuyển, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			16841: {
				intro: "Rất nhiều khăn tay, tất / vớ, găng tay trẻ em & trẻ sơ sinh đẹp, chất vải cao cấp, êm ái, an toàn với giá ưu đãi. Miễn phí vận chuyển, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			16842: {
				intro: "Hàng ngàn phụ kiện tóc, cột tóc, kẹp tóc, băng đô cho bé, chất liệu an toàn, thiết kế thông minh với ưu đãi hấp dẫn. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16844: {
				intro: "Rất nhiều giày dép bé trai 5 - 14 tuổi đa dạng như xăng-đan, giày thể thao,... đẹp, giá sốc. Giao hàng miễn phí, nhanh chóng toàn quốc, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			16845: {
				intro: "Rất nhiều giày dép bé gái 3 tháng - 4 tuổi đa dạng như giày búp bê, giày thể thao, giày mọi bé gái,... đẹp, giá sốc. Giao hàng miễn phí, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			16846: {
				intro: "Rất nhiều mẫu giày dép bé trai từ 3 tháng - 4 tuổi đẹp, êm ái, chất liệu đế chắc chắn, chống trượt, đàn hồi tốt. Ưu đãi sốc, thanh toán COD, giao tận nơi. Xem ngay!",
				intro_short: "0"
			},
			16848: {
				intro: "Hàng trăm mẫu đầm bầu, áo bầu đẹp, sành điệu, thời trang với mức giá cực hấp dẫn chỉ có tại Shopee.vn. Giao hàng miễn phí toàn quốc. Thanh Toán Linh Hoạt. Xem ngay!",
				intro_short: "0"
			},
			16851: {
				intro: "Rất nhiều đầm bầu, váy bầu thời trang, phù hợp đi làm, đi chơi, chất vải co giãn, thoáng mát, thoải mái, giá ưu đãi. Miễn phí vận chuyển, thanh toán nhanh. Xem ngay!",
				intro_short: "0"
			},
			16854: {
				intro: "Hàng trăm bộ đồ bầu mặc nhà đẹp, nhiều kiểu dáng với giá rẻ hấp dẫn tại Shopee.vn. Giao hàng miễn phí, toàn quốc nhanh chóng, thanh toán linh hoạt. Click ngay!",
				intro_short: "0"
			},
			16880: {
				intro: "Hàng trăm áo thể thao nam & nữ đẹp, năng động, giá rẻ bất ngờ tại Shopee.vn. Giao hàng miễn phí, toàn quốc nhanh chóng, thanh toán linh hoạt, tiện lợi. Mua ngay!",
				intro_short: "0"
			},
			16916: {
				intro: "Mua bột giặt, nước giặt, nước xả quần áo từ Comfort, Ariel, OMO, Tide,... giặt sạch quần áo, thơm lâu, giá ưu đãi. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16917: {
				intro: "Hàng trăm loại sáp thơm phòng ngủ an toàn, giá rẻ cho gia đình. Shopee mang lại dịch vụ mua hàng tiện lợi, giá tốt & giao hàng tận nơi đáng tin cậy. Click ngay",
				intro_short: "0"
			},
			16918: {
				intro: "Rất nhiều giấy vệ sinh, khăn giấy từ Puppy, Bless You, E'Mos,... mềm mại, dẻo dai, an toàn cho trẻ em, ưu đãi hấp dẫn. Giao hàng tận nơi, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16919: {
				intro: "Rất nhiều loại màng bọc thực phẩm trong suốt an toàn, tiện lợi, giá cực hấp dẫn tại Shopee.vn. Giao hàng tận nơi miễn phí, thanh toán COD linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			16920: {
				intro: "Nước rửa chén hữu cơ & nước lau sàn diệt khuẩn an toàn, hiệu quả, giá cực ưu đãi tại Shopee.vn. Cam kết giao hàng tận nhà miễn phí, thanh toán tiện lợi. Mua ngay!",
				intro_short: "0"
			},
			16922: {
				intro: "Rất nhiều dung dịch tẩy rửa bồn cầu, dung dịch thông bồn cầu tẩy sạch vết bẩn, vi khuẩn với giá ưu đãi. Giao hàng miễn phí, thanh toán linh hoạt. Xem ngay!",
				intro_short: "0"
			},
			16923: {
				intro: "Mua nước lau sàn nhà, nước rửa nhà vệ sinh, phòng tắm Gift, Sunlight,... diệt khuẩn, tẩy sạch mọi vết bẩn, giá ưu đãi. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16924: {
				intro: "Rất nhiều nước rửa đa năng, nước rửa kính từ CIF, Sonax,... diệt khuẩn hiệu quả, hiệu quả với nhiều mặt phẳng. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16925: {
				intro: "Rất nhiều viên khử mùi phòng, sáp thơm phòng, xịt thơm phòng hiệu quả lâu, đa dạng hương với giá ưu đãi. Thanh toán đơn giản, giao hàng miễn phí. Xem ngay!",
				intro_short: "0"
			},
			16926: {
				intro: "Rất nhiều cây chổi cọ toilet, dụng cụ vệ sinh tiện lợi, giá cực hấp dẫn tại Shopee.vn. Giao hàng tận nơi miễn phí nhanh chóng, thanh toán COD tiện lợi. Mua ngay!",
				intro_short: "0"
			},
			16927: {
				intro: "Rất nhiều thuốc diệt côn trùng trong nhà không độc hại, có chứng nhận bộ Y Tế, hiệu quả cao, giá ưu đãi. Miễn phí vận chuyển, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			16928: {
				intro: "Rất nhiều bộ quần áo thể thao nam, đồ đá bóng nam đạt chuẩn, thoáng mát, co giãn tốt, độ bền cao, giá ưu đãi. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16929: {
				intro: "Rất nhiều quần áo bơi, đồ đi biển nam nữ, quần bơi cặp,... chất liệu tốt, co giãn, thoải mái, thời trang, giá ưu đãi. Thanh toán COD, miễn phí giao hàng. Mua ngay!",
				intro_short: "0"
			},
			16931: {
				intro: "Rất nhiều quần áo thể thao đôi, giày thể thao đôi, phụ kiện thể thao đôi cá tính, trẻ trung, thoáng mát, giá ưu đãi. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16933: {
				intro: "Rất nhiều mẫu giày thể thao nam & giày thể thao nữ chính hãng Adidas, Nike, Bitis, New Balance,... mẫu mới, giá tốt. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16935: {
				intro: "Rất nhiều giày sneaker, giày thể thao nam & nữ đẹp, chất liệu da, vải thoáng, kiểu 2018, cập nhật mỗi ngày. Ưu đãi sốc, giao hàng nhanh, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16936: {
				intro: "Rất nhiều mẫu giày chạy bộ nam & giày chạy bộ nữ đẹp, kiểu 2018, nhẹ nhàng, bền bỉ, đế giày ma sát tốt, giá cực ưu đãi. Giao hàng nhanh, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			16937: {
				intro: "Hàng trăm đôi giày bóng rổ cổ cao & cổ thấp chính hãng, giá rẻ từ Nike, Adidas ấn tượng. Shopee.vn giao hàng tận nơi miễn phí, thanh toán COD tiện lợi. Mua ngay!",
				intro_short: "0"
			},
			16938: {
				intro: "Hàng trăm giày đá bóng sân cỏ nhân tạo, sân cỏ tự nhiên đẹp, chính hãng, giá rẻ từ Nike, Adidas tại Shopee.vn. Giao hàng miễn phí, nhanh chóng toàn quốc. Xem ngay!",
				intro_short: "0"
			},
			16939: {
				intro: "Hàng trăm đôi giày tennis cao cấp từ Nike, Adidas giá rẻ bất ngờ tại Shopee.vn. Giao hàng miễn phí, nhanh chóng toàn quốc, thanh toán linh hoạt. Click mua ngay!",
				intro_short: "0"
			},
			16940: {
				intro: "Hàng trăm giày cầu lông nam, nữ từ Yonex, Li-ning giá rẻ bất ngờ. Shopee.vn cung cấp dịch vụ mua hàng online tiện ích, giao hàng tận nơi miễn phí. Click ngay!",
				intro_short: "0"
			},
			16943: {
				intro: "Hàng trăm mẫu túi & balo thể thao, du lịch thời trang, cá tính, giá thành cực kì hấp dẫn. Shopee giao hàng tận nơi miễn phí, thanh toán cực kì linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			16944: {
				intro: "Rất nhiều nón thể thao nam, nón thể thao nữ, nón thể thao nửa đầu thoáng mát, chất liệu tốt, êm ái, giá ưu đãi. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16946: {
				intro: "Rất nhiều bình nước thể thao, bình giữ nhiệt Lock&Lock, Refresh, Reebok,... cao cấp, chính hãng, giá sốc. Giao hàng tận nơi miễn phí, thanh toán đơn giản. Xem ngay!",
				intro_short: "0"
			},
			16948: {
				intro: "Hàng trăm sản phẩm thảm tập, dây tập yoga, pilates hiệu quả, giá rẻ bất ngờ tại Shopee. Cam kết giao hàng tận nhà miễn phí, thanh toán linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			16949: {
				intro: "Hàng trăm sản phẩm tạ tay, tạ đòn, máy tập tay, máy tập đùi, máy tập bắp chân từ Tommy Trimmer, Tech Fitness, giá hấp dẫn. Giao hàng miễn phí toàn quốc. Mua ngay!",
				intro_short: "0"
			},
			16950: {
				intro: "Mua dụng cụ bóng rổ cơ bản & chuyên nghiệp từ GeruStar, Spalding, ProStar, Gentra,... cao cấp, giá ưu đãi. Miễn phí vận chuyển, thanh toán đơn giản. Mua ngay!",
				intro_short: "0"
			},
			16951: {
				intro: "Hàng trăm quả bóng đá chất lượng cao, bền bỉ giá hấp dẫn cho bạn chơi bóng đá thỏa thích. Shopee.vn giao hàng miễn phí toàn quốc, thanh toán linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			16953: {
				intro: "Rất nhiều dụng cụ chơi tennis, vợt tennis, bóng tennis chính hãng từ Yonex, Wilson, HEAD, ASH,... cao cấp, giá tốt. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16954: {
				intro: "Rất nhiều dụng cụ cầu lông, vợt cầu lông, phụ kiện bảo hộ cầu lông cao cấp, chính hãng với giá ưu đãi. Giao hàng tận nơi miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16956: {
				intro: "Rất nhiều dụng cụ bơi lội như kính bơi, nón bơi, đồ lặn từ Phoenix, Speedo,... chính hãng, cao cấp, giá ưu đãi. Thanh toán đơn giản, miễn phí giao hàng. Xem ngay!",
				intro_short: "0"
			},
			16958: {
				intro: "Rất nhiều phụ kiện & dụng cụ lặn, ống thở, mặt nạ biển cường lực cho trẻ nhỏ & người lớn đúng chuẩn, giá ưu đãi, Miễn phí giao hàng, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16961: {
				intro: "Hàng trăm gậy bóng chày, kính thiên văn & dụng cụ thể thao tiện lợi khác giá cực tốt tại Shopee.vn. Giao hàng miễn phí toàn quốc. Thanh toán linh hoạt. Mua ngay!",
				intro_short: "0"
			},
			16963: {
				intro: "Rất nhiều Vali du lịch, Vali kéo, Vali vải từ Sakos, Lock&Lock, Rimowa, Samsonite,... cao cấp, mẫu 2018, giá ưu đãi. Miễn phí giao, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			16964: {
				intro: "Hàng ngàn túi du lịch đẹp, chất liệu cao cấp, chống thấm, kiểu dáng thời trang, bền đẹp với giá cực ưu đãi. Miễn phí vận chuyển, thanh toán COD. Click ngay!",
				intro_short: "0"
			},
			16965: {
				intro: "Nhiều balo du lịch cao cấp từ Deuter, Flame Horse, Haras,... siêu nhẹ, chống nước, nhiều ngăn đa năng, giá ưu đãi. Giao hàng miễn phí, thanh toán COD. Mua ngay!",
				intro_short: "0"
			},
			16966: {
				intro: "Hàng ngàn phụ kiện du lịch, phụ kiện vali, dây đai vali, thẻ hành lý,... tiện ích, đa năng, dễ sử dụng, giá ưu đãi. Miễn phí vận chuyển, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16967: {
				intro: "Nhiều phụ kiện & dụng cụ bắn cung, bắn súng cao cấp, chất lượng, tiện ích, đúng chuẩn. Giao hàng miễn phí, thanh toán COD. Mua ngay để hưởng ưu đãi hấp dẫn!",
				intro_short: "0"
			},
			16968: {
				intro: "Rất nhiều đồ bảo hộ phượt, dã ngoại, mũ bảo hiểm moto, găng bảo hộ,... cao cấp, chất lượng, mẫu mã đẹp, giá ưu đãi. Miễn phí giao hàng, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16969: {
				intro: "Rất nhiều phụ kiện dã ngoại, câu cá, trượt ván,... cao cấp, chất lượng, đa năng, bền đẹp với giá ưu đãi. Thanh toán đơn giản, giao hàng tận nơi miễn phí. Xem ngay!",
				intro_short: "0"
			},
			16970: {
				intro: "Rất nhiều ván trượt đẹp, cao cấp & phụ kiện ván trượt tiện nghi, tăng trải nghiệm thể thao với giá cực hấp dẫn. Giao hàng miễn phí, thanh toán COD. Xem ngay!",
				intro_short: "0"
			},
			16971: {
				intro: "Nhiều mẫu giày patin trẻ em & người lớn đẹp, thời trang, mẫu mới 2018, phụ kiện trượt patin đa dạng với giá hấp dẫn. Miễn phí vận chuyển, thanh toán COD. Mua ngay!",
				intro_short: "0"
			}
		},
		txt_shopee_key_features: "Shopee Đảm Bảo | Miễn Phí Vận Chuyển | Gợi Ý Hôm Nay",
		txt_shopee_intro_full: "Mua sắm trực tuyến hàng triệu sản phẩm thời trang nam nữ, đồ điện tử, gia dụng...Giá tốt & nhiều ưu đãi. Mua và bán online trong 30 giây. Shopee đảm bảo nhận hàng hoặc hoàn tiền.",
		txt_collection_intro: "Khám phá ngay những sản phẩm giá tốt nhất! Chắc chắn bạn sẽ hài lòng - Xem ngay nào!",
		txt_shopee_intro_short: "Mua Sắm Trực Tuyến trên Di Động hoặc Website"
	}
}, function (n, t) {}, function (n, t) {}, function (n, t) {}, function (n, t, i) {
	n.exports = i.p + "a7465704aab1c7a92e34cd8af984220e.svg"
}, function (n, t, i) {
	n.exports = i.p + "218cbe1fbcf20bdf4c9e099c0db18252.svg"
}, function (n, t) {}, function (n, t) {}, function (n, t) {}, function (n, t) {}, function (n, t) {}, function (n, t) {
	n.exports = {
		badge: "_2lbqLZ"
	}
}, function (n, t) {}, function (n, t) {}, , , , , , function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i(90),
		r = i.n(o),
		h = i(16),
		a = i.n(h),
		c = 10,
		u = {
			TOP_LEFT: 0,
			TOP_CENTER: 1,
			TOP_RIGHT: 2,
			BOTTOM_RIGHT: 5,
			BOTTOM_CENTER: 4,
			BOTTOM_LEFT: 3
		};

	function s(n, t, i) {
		var e = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m).margin || 0;
		switch (n) {
			case u.TOP_LEFT:
				return {
					top: -e - i.height,
					left: 0
				};
			case u.TOP_CENTER:
				return {
					top: -e - i.height,
					right: t.width / 2 - i.width / 2
				};
			case u.TOP_RIGHT:
				return {
					top: -e - i.height,
					right: 0
				};
			case u.BOTTOM_LEFT:
				return {
					top: e + t.height,
					left: 0
				};
			case u.BOTTOM_CENTER:
				return {
					top: e + t.height,
					right: t.width / 2 - i.width / 2
				};
			case u.BOTTOM_RIGHT:
				return {
					top: e + t.height,
					right: 0
				};
			default:
				return {}
		}
	}

	function g(n) {
		return n === u.TOP_CENTER || n === u.TOP_LEFT || n === u.TOP_RIGHT
	}

	function l(n) {
		return n === window ? {
			top: 0,
			left: 0,
			right: window.innerWidth,
			bottom: window.innerHeight
		} : n.getBoundingClientRect()
	}

	function p(n) {
		var t = {};
		return Object.keys(n).map(function (i) {
			"number" == typeof n[i] ? t[i] = n[i] + "px" : t[i] = n[i]
		}), t
	}
	var m = {
		offsetParent: window,
		useSafeMargin: !1
	};

	function d(n) {
		return null != n
	}

	function f(n, t, i) {
		var e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m,
			o = n.getBoundingClientRect(),
			r = s(i, o, t.getBoundingClientRect(), e),
			h = e.useSafeMargin ? c : 0,
			a = function (n) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window,
					i = l(n),
					e = i.top,
					o = i.left,
					r = i.right,
					h = i.bottom,
					a = l(t);
				return {
					offsetBottom: a.bottom - h,
					offsetTop: e - a.top,
					offsetLeft: o - a.left,
					offsetRight: a.right - r
				}
			}(t, e.offsetParent);
		return (a.offsetBottom < h && !g(i) || a.offsetTop < h && g(i)) && (r = s(i = function (n) {
			return n >= 3 ? n - 3 : n + 3
		}(i), o, t.getBoundingClientRect(), e)), a.offsetRight < 0 ? d(r.left) ? r.left = Number(r.left) + Number(a.offsetRight) - h : d(r.right) && (r.right = Number(r.right) - Number(a.offsetRight) + h) : a.offsetLeft < 0 && (d(r.left) ? r.left = Number(r.left || 0) - Number(a.offsetRight) + h : d(r.right) && (r.right = Number(r.right || 0) + Number(a.offsetLeft) - h)), {
			style: p(r),
			position: i
		}
	}
	var y = i(989);
	i(1069);
	i.d(t, "b", function () {
		return T
	}), i.d(t, "a", function () {
		return u
	});
	var v, _, b = function () {
		function n(n, t) {
			for (var i = 0; i < t.length; i++) {
				var e = t[i];
				e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
			}
		}
		return function (t, i, e) {
			return i && n(t.prototype, i), e && n(t, e), t
		}
	}();
	var T = (_ = v = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t), a()(null !== n.target && void 0 !== n.target, "`target` should not be null or undefined"), a()(null !== n.popover && void 0 !== n.popover, "`popover` should not be null or undefined"), a()(!n.hasOwnProperty("open") || n.hasOwnProperty("open") && "boolean" == typeof n.open, "`open` must be a boolean");
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i.state = {
				show: !1,
				open: !!n.open || !1
			}, i._targetDom = e.createRef(), i._arrowDom = e.createRef(), i._popoverDom = e.createRef(), i._wrapper = e.createRef(), i.onClickOutside = i.onClickOutside.bind(i), i.onTargetClick = i.onTargetClick.bind(i), i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, e["Component"]), b(t, [{
			key: "componentDidMount",
			value: function () {
				this.props.open && this.show()
			}
		}, {
			key: "componentWillReceiveProps",
			value: function (n) {
				n.open !== this.props.open && (n.open ? this.show() : this.hide())
			}
		}, {
			key: "render",
			value: function () {
				var n = this.props,
					t = n.className,
					i = n.target,
					o = n.popover,
					h = n.targetClassName,
					a = n.popoverClassName,
					c = n.showArrow,
					u = n.showBorder;
				return e.createElement(y.a, {
					onClickOutside: this.onClickOutside
				}, e.createElement("div", {
					className: r()("stardust-popover", t),
					ref: this._wrapper
				}, e.createElement("div", {
					className: r()("stardust-popover__target", h),
					onClick: this.onTargetClick,
					ref: this._targetDom
				}, i), this.state.open && e.createElement("div", {
					role: "tooltip",
					"aria-hidden": !this.state.open,
					className: r()("stardust-popover__popover", {
						"stardust-popover__popover--show": this.state.show,
						"stardust-popover__popover--border": u
					}, a),
					ref: this._popoverDom
				}, c && this.state.open && e.createElement("div", {
					className: "stardust-popover__arrow",
					ref: this._arrowDom
				}, e.createElement("div", {
					className: "stardust-popover__arrow--inner"
				})), o)))
			}
		}, {
			key: "onTargetClick",
			value: function () {
				"boolean" != typeof this.props.open && (this.state.open ? this.hide() : this.show())
			}
		}, {
			key: "onClickOutside",
			value: function () {
				this.state.open && ("function" == typeof this.props.onClickOutside ? this.props.onClickOutside() : this.props.closeOnClickOutside && this.hide())
			}
		}, {
			key: "setPosition",
			value: function () {
				var n = this.props,
					t = n.position,
					i = n.margin,
					e = this._popoverDom.current,
					o = this._targetDom.current;
				if (e && o) {
					var r = s(t, o.getBoundingClientRect(), e.getBoundingClientRect(), {
						margin: i
					});
					Object.assign(e.style, p(r))
				}
			}
		}, {
			key: "updatePosition",
			value: function () {
				var n = this.props,
					t = n.arrowBackgroundColor,
					i = n.position,
					e = n.margin,
					o = n.offsetParent,
					r = n.useSafeMargin,
					h = n.showBorder,
					a = this._popoverDom.current,
					c = this._targetDom.current,
					s = this._arrowDom.current;
				if (a && c) {
					var l = f(c, a, i, {
							margin: e,
							offsetParent: o,
							useSafeMargin: r
						}),
						m = l.style,
						d = l.position;
					a.removeAttribute("style"), Object.assign(a.style, m);
					var y = function (n, t, i) {
						var e = n.getBoundingClientRect(),
							o = t.getBoundingClientRect(),
							r = e.width / 2 - (o.left - e.left);
						return g(i) ? {
							transformOrigin: r + "px bottom"
						} : {
							transformOrigin: r + "px top"
						}
					}(c, a, d);
					if (Object.assign(a.style, y), s) {
						var v = function (n, t, i) {
								var e = n.getBoundingClientRect(),
									o = t.getBoundingClientRect(),
									r = e.width / 2 - (o.left - e.left);
								return g(i) ? p({
									bottom: 1,
									left: r,
									transform: "translate(-50%, 100%)"
								}) : p({
									top: 1,
									left: r,
									transform: "translate(-50%, -100%)"
								})
							}(c, a, d),
							_ = function (n, t, i) {
								var e = i ? "rgba(0,0,0,0.09)" : t;
								switch (n) {
									case u.TOP_LEFT:
									case u.TOP_RIGHT:
									case u.TOP_CENTER:
										return {
											outer: {
												borderTopColor: e,
												borderTopWidth: "10px",
												borderTopStyle: "solid"
											},
											inner: i ? {
												borderTopColor: e,
												borderTop: "8px solid white",
												top: "-10px"
											} : {
												display: "none"
											}
										};
									default:
										return {
											inner: i ? {
												borderBottomColor: e,
												borderBottom: "0.8rem solid white",
												bottom: "-10px"
											} : {
												display: "none"
											},
											outer: {
												borderBottomColor: e,
												borderBottomWidth: "10px",
												borderBottomStyle: "solid"
											}
										}
								}
							}(d, t, h);
						s.removeAttribute("style"), Object.assign(s.style, v, _.outer);
						var b = s.children[0];
						b.removeAttribute("style"), Object.assign(b.style, _.inner)
					}
				}
			}
		}, {
			key: "show",
			value: function () {
				var n = this;
				this.setState({
					open: !0
				}, function () {
					n.setPosition(), requestAnimationFrame(function () {
						n.updatePosition(), n.setState({
							show: !0
						})
					})
				})
			}
		}, {
			key: "hide",
			value: function () {
				var n = this,
					t = this._popoverDom.current;
				t && (t.classList.add("stardust-popover__popover--hide"), t.addEventListener("animationend", function () {
					return n.setState({
						open: !1,
						show: !1
					})
				}))
			}
		}]), t
	}(), v.defaultProps = {
		position: u.BOTTOM_RIGHT,
		closeOnClickOutside: !0,
		margin: 10,
		showArrow: !1,
		arrowWidth: 20,
		arrowHeight: 10,
		arrowBackgroundColor: "transparent",
		offsetParent: window,
		useSafeMargin: !1,
		showBorder: !1
	}, _)
}, , function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(889),
		h = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		};

	function a(n) {
		return o.a.createElement("svg", h({
			viewBox: "0 0 24 6"
		}, n), o.a.createElement("g", {
			strokeWidth: "1",
			fill: "none",
			fillRule: "evenodd"
		}, o.a.createElement("g", {
			transform: "translate(-342.000000, -39.000000)"
		}, o.a.createElement("g", {
			transform: "translate(0.000000, 20.000000)"
		}, o.a.createElement("path", {
			d: "M354,24.5 C352.619288,24.5 351.5,23.3807119 351.5,22 C351.5,20.6192881 352.619288,19.5 354,19.5 C355.380712,19.5 356.5,20.6192881 356.5,22 C356.5,23.3807119 355.380712,24.5 354,24.5 Z M345,24.5 C343.619288,24.5 342.5,23.3807119 342.5,22 C342.5,20.6192881 343.619288,19.5 345,19.5 C346.380712,19.5 347.5,20.6192881 347.5,22 C347.5,23.3807119 346.380712,24.5 345,24.5 Z M363,24.5 C361.619288,24.5 360.5,23.3807119 360.5,22 C360.5,20.6192881 361.619288,19.5 363,19.5 C364.380712,19.5 365.5,20.6192881 365.5,22 C365.5,23.3807119 364.380712,24.5 363,24.5 Z"
		})))))
	}
	var c = i(504),
		u = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var s = function (n) {
			function t(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var i = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
				return i.handleClick = i.handleClick.bind(i), i
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, e["Component"]), u(t, [{
				key: "handleClick",
				value: function () {
					var n = this.props,
						t = n.trackingClick,
						i = n.onClick;
					t(), i && "function" == typeof i && i()
				}
			}, {
				key: "render",
				value: function () {
					return e.createElement(a, {
						onClick: this.handleClick,
						className: "navbar-generic__menu"
					})
				}
			}]), t
		}(),
		g = Object(c.c)(s, "IconMenu"),
		l = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var p, m, d = function (n) {
			function t(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var i = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
				return i.handleClick = i.handleClick.bind(i), i
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, o.a.Component), l(t, [{
				key: "handleClick",
				value: function () {
					var n = this.props,
						t = n.trackingClick,
						i = n.onClick,
						e = n.togglePopover;
					t(), e(), i && "function" == typeof i && i()
				}
			}, {
				key: "render",
				value: function () {
					var n = this.props,
						t = n.icon,
						i = n.label;
					return o.a.createElement("div", {
						className: "shopee-menu__item",
						onClick: this.handleClick
					}, t, o.a.createElement("span", {
						className: "shopee-menu__item-label"
					}, i))
				}
			}]), t
		}(),
		f = Object(c.c)(d, "IconMenu"),
		y = (i(1079), i(990)),
		v = i(216),
		_ = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var b = (m = p = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i.state = {
				open: !1
			}, i.toggle = i.toggle.bind(i), i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, o.a.Component), _(t, [{
			key: "componentWillUnmount",
			value: function () {
				v.a.resume()
			}
		}, {
			key: "render",
			value: function () {
				var n = this,
					t = this.props.items,
					i = this.state.open;
				return t && t.length ? o.a.createElement(c.a, {
					targetType: "PopoverMenu"
				}, o.a.createElement(r.b, {
					target: o.a.createElement(g, {
						onClick: this.toggle
					}),
					margin: -24,
					open: i,
					onClickOutside: this.toggle,
					popover: o.a.createElement("div", {
						className: "shopee-menu"
					}, o.a.createElement("div", {
						className: "shopee-menu__main"
					}, t.map(function (t, i) {
						return o.a.createElement(f, {
							onClick: t.onClick,
							key: i,
							icon: t.icon,
							label: t.label,
							targetType: t.targetType,
							togglePopover: n.toggle
						})
					})), i && o.a.createElement(y.a, {
						zIndex: 88
					})),
					position: r.a.BOTTOM_RIGHT
				})) : null
			}
		}, {
			key: "toggle",
			value: function () {
				var n = this;
				this.setState(function (n) {
					return {
						open: !n.open
					}
				}, function () {
					n.state.open ? v.a.prevent() : v.a.resume()
				})
			}
		}]), t
	}(), p.defaultProps = {
		items: []
	}, m);
	t.a = b
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r),
		a = i(140),
		c = i(504),
		u = i(142),
		s = i(505),
		g = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		};

	function l(n) {
		return o.a.createElement("svg", g({
			viewBox: "0 0 24 23"
		}, n), o.a.createElement("g", {
			stroke: "none",
			strokeWidth: "1",
			fillRule: "evenodd"
		}, o.a.createElement("g", {
			transform: "translate(-297.000000, -53.000000)"
		}, o.a.createElement("g", {
			transform: "translate(0.000000, 40.000000)"
		}, o.a.createElement("g", {
			transform: "translate(295.000000, 13.000000)"
		}, o.a.createElement("g", {
			transform: "translate(2.000000, 0.000000)"
		}, o.a.createElement("path", {
			d: "M18.5002885,23 C17.6728217,23 17,22.3273077 17,21.5 C17,20.6726923 17.6728217,20 18.5002885,20 C19.3271783,20 20,20.6726923 20,21.5 C20,22.3273077 19.3271783,23 18.5002885,23 L18.5002885,23 Z"
		}), o.a.createElement("path", {
			d: "M9.50028852,23 C8.6728217,23 8,22.3273077 8,21.5 C8,20.6726923 8.6728217,20 9.50028852,20 C10.3271783,20 11,20.6726923 11,21.5 C11,22.3273077 10.3271783,23 9.50028852,23 L9.50028852,23 Z"
		}), o.a.createElement("path", {
			d: "M7.9934261,18 C7.5,17.9999997 7.44766941,17.9045091 7.37992981,17.6538769 L3.4182231,0.995818455 L0.499919604,0.995818455 C0.223821631,0.995818455 0,0.764854702 0,0.497909228 C0,0.222921554 0.215802421,0 0.499919604,0 L3.52239128,5.32907052e-14 C3.64097266,5.32907052e-14 4,5.32907052e-14 4.31735235,0.474991444 L5.3999939,5 L23.6021522,5 C23.8760941,4.97909228 24.0502466,5.18813168 23.9870265,5.46390611 L22.8991683,9.42796956 C22.1654968,12.1014069 20.6981536,17.4482814 20.6981536,17.4482814 C20.6367719,17.7160367 20.2726916,17.9999997 20,17.9999997 C20,17.9999997 8.05057801,18 7.9934261,18 Z M5.70001221,6.00619897 L8.08934998,16.5134247 C8.15228879,16.7902011 8.42315514,17 8.69843471,17 L19.3015653,17 C19.5786357,17 19.8591915,16.7821528 19.9322042,16.5134247 L22.6547866,6.49277423 C22.7299859,6.21599786 22.5662854,6.00619897 22.2940352,6.00619897 L5.70001221,6.00619897 Z"
		})))))))
	}
	var p = Object.assign || function (n) {
		for (var t = 1; t < arguments.length; t++) {
			var i = arguments[t];
			for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
		}
		return n
	};

	function m(n) {
		return o.a.createElement("svg", p({
			viewBox: "0 0 28 28",
			xmlns: "http://www.w3.org/2000/svg"
		}, n), o.a.createElement("g", {
			transform: "translate(0 -1)",
			fill: "none",
			fillRule: "evenodd"
		}, o.a.createElement("circle", {
			fill: "#FFF",
			cx: "11.5",
			cy: "24.5",
			r: "1.5"
		}), o.a.createElement("circle", {
			fill: "#FFF",
			cx: "20.5",
			cy: "24.5",
			r: "1.5"
		}), o.a.createElement("path", {
			d: "M7.8833368 8.75l2.09089456 11.3204748c.03127044.1064291.12893314.1795252.23986104.1795252h11.6364357c.116414 0 .217421-.0803524.2435978-.1937851l2.5384615-11.00000002A.24999908.24999908 0 0 0 24.6389896 9c0-.13807119-.1119288-.25-.25-.25H7.8833368z",
			stroke: "#FFF",
			strokeWidth: "1.5"
		}), o.a.createElement("path", {
			d: "M10 20.1529541L6.18409835 4.26644536C6.0761219 3.81691363 5.67407241 3.5 5.21175468 3.5H3",
			stroke: "#FFF",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})))
	}
	i(1080), t.a = Object(c.c)(Object(a.connect)(function (n) {
		var t = Object(u.a)(n);
		return {
			cartItemCount: t ? t.cart_item_count : null,
			isLoggedIn: !!t && !!t.username
		}
	}, {})(function (n) {
		var t = n.isLoggedIn,
			i = n.cartItemCount,
			e = n.trackingClick,
			r = n.className,
			a = n.useBoldIcon;
		return o.a.createElement("a", {
			href: t ? Object(s.d)() : Object(s.l)(),
			className: h()("navbar-icon-cart__wrapper", r),
			onClick: e
		}, o.a.createElement("div", {
			className: "navbar-icon-cart"
		}, a ? o.a.createElement(m, {
			className: "navbar-icon-cart__icon"
		}) : o.a.createElement(l, {
			className: "navbar-icon-cart__icon"
		}), i && i > 0 ? o.a.createElement("div", {
			className: "navbar-icon-cart__count"
		}, i) : null))
	}), "NavbarIconCart")
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(140),
		h = i(70),
		a = i(553),
		c = i(993),
		u = i(698),
		s = i(894),
		g = i(737),
		l = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		};

	function p(n) {
		return o.a.createElement("svg", l({}, n, {
			viewBox: "0 0 15 15"
		}), o.a.createElement("g", null, o.a.createElement("polyline", {
			fill: "none",
			points: "5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10"
		})))
	}
	var m = Object.assign || function (n) {
		for (var t = 1; t < arguments.length; t++) {
			var i = arguments[t];
			for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
		}
		return n
	};

	function d(n) {
		return o.a.createElement("svg", m({}, n, {
			viewBox: "0 0 15 15"
		}), o.a.createElement("g", null, o.a.createElement("polyline", {
			fill: "none",
			points: "5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10"
		}), o.a.createElement("polyline", {
			id: "icon-filter-selected-tick",
			fill: "none",
			points: "9.2 11.3 10.3 12.1 11.8 10.4",
			stroke: "#fff",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeMiterlimit: "10",
			strokeWidth: ".5"
		}), o.a.createElement("circle", {
			cx: "10.5",
			cy: "11.2",
			r: "2.5",
			stroke: "none"
		}), o.a.createElement("use", {
			xlinkHref: "#icon-filter-selected-tick"
		})))
	}
	var f = i(504),
		y = i(89),
		v = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var _, b, T = function (n) {
			function t(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var i = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
				return i.handleClick = i.handleClick.bind(i), i
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, o.a.Component), v(t, [{
				key: "handleClick",
				value: function () {
					var n = this.props,
						t = n.trackingClick,
						i = n.onClick;
					t(), i && "function" == typeof i && i()
				}
			}, {
				key: "render",
				value: function () {
					var n = this.props.filtered ? o.a.createElement(d, {
						className: "navbar-search__filter"
					}) : o.a.createElement(p, {
						className: "navbar-search__filter"
					});
					return o.a.createElement("div", {
						className: "navbar-search__filter-wrapper",
						onClick: this.handleClick
					}, n, o.a.createElement("span", {
						className: "navbar-search__filter-text typo-r10"
					}, Object(y.c)("label_filter")))
				}
			}]), t
		}(),
		C = Object(f.c)(T, "FilterIcon"),
		N = i(891),
		S = i(540),
		M = (i(1086), i(505)),
		E = i(90),
		H = i.n(E),
		k = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		G = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var A = (b = _ = function (n) {
		function t(n) {
			return function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n))
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, e["Component"]), G(t, [{
			key: "render",
			value: function () {
				var n = this.props,
					t = n.showFilterDrawer,
					o = n.onOpenFilterDrawer,
					r = n.onCloseFilterDrawer,
					h = n.theme,
					l = n.onSearch,
					p = n.onSearchParamsChange,
					m = n.isLoggedIn,
					d = n.labelSearchRange,
					f = n.labelSearchRangeIn,
					v = this.props.searchParams || {},
					_ = "transparent" === h,
					b = [];
				return m && b.unshift({
					icon: e.createElement(c.a, {
						className: "shopee-menu__item-icon"
					}),
					label: Object(y.c)("label_my_orders"),
					onClick: function () {
						return location.href = Object(M.r)()
					},
					targetType: "MyOrders"
				}), e.createElement(e.Fragment, null, e.createElement(u.a, {
					className: H()("navbar-search", {
						"navbar-search--transparent": _
					}),
					isTransparent: _,
					leftButton: e.createElement(g.a, null),
					mainContent: e.createElement(s.a, {
						isTransparent: _,
						searchParams: v,
						onSearch: l,
						labelSearchRange: d,
						labelSearchRangeIn: f
					}),
					rightButtons: [!!o && e.createElement(C, {
						filtered: Object(a.f)(v),
						onClick: o,
						key: "filter"
					}), b.length > 0 && e.createElement(N.a, {
						items: b,
						className: "navbar-generic__menu",
						key: "menu"
					})]
				}), !!o && e.createElement(S.a, {
					bundleName: "FilterDrawer",
					loadComponent: function () {
						return Promise.all([i.e(32), i.e(35), i.e(46)]).then(i.bind(null, 1573))
					},
					isActive: t,
					onClose: r,
					onSearchParamsChange: function (n) {
						function t(t) {
							return n.apply(this, arguments)
						}
						return t.toString = function () {
							return n.toString()
						}, t
					}(function (n) {
						var t = v.keyword;
						p(k({}, n, {
							keyword: t
						}))
					}),
					searchParams: v
				}))
			}
		}]), t
	}(), _.defaultProps = {
		theme: "normal"
	}, b);
	t.a = Object(h.withRouter)(Object(r.connect)(function (n) {
		var t = n.account.info;
		return {
			isLoggedIn: !!t && !!t.username
		}
	})(A))
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(4),
		h = i.n(r),
		a = i(140),
		c = i(984),
		u = i(270),
		s = i(985),
		g = i(71),
		l = i(989),
		p = i(998),
		m = i(987),
		d = i(896),
		f = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		};

	function y(n) {
		return o.a.createElement("svg", f({
			viewBox: "0 0 14 14",
			xmlns: "http://www.w3.org/2000/svg"
		}, n), o.a.createElement("g", {
			stroke: "#606060",
			fill: "none",
			fillRule: "evenodd"
		}, o.a.createElement("path", {
			d: "M6.5 12C9.537 12 12 9.537 12 6.5S9.537 1 6.5 1 1 3.463 1 6.5 3.463 12 6.5 12z"
		}), o.a.createElement("path", {
			d: "M10.69873047 10.76025391L13 13",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})))
	}
	var v = i(559),
		_ = i(73),
		b = i(90),
		T = i.n(b),
		C = i(89),
		N = i(505),
		S = i(738),
		M = i(1083),
		E = i.n(M),
		H = (i(1084), i(69)),
		k = i(517),
		G = i(504);
	var A = Object(G.c)(function (n) {
			var t = n.children,
				i = n.onClick,
				o = n.className,
				r = n.trackingClick;
			return e.createElement("div", {
				onClick: function (n) {
					function t(t) {
						return n.apply(this, arguments)
					}
					return t.toString = function () {
						return n.toString()
					}, t
				}(function (n) {
					r(), "function" == typeof i && i(n)
				}),
				className: T()("search-bar-drop-down__item", o)
			}, t)
		}, "SearchMethod"),
		O = i(70),
		P = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var w, R, B = function (n) {
			function t(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var i = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
				return i.onClick = i.onClick.bind(i), i
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, o.a.Component), P(t, [{
				key: "onClick",
				value: function () {
					var n = this.props,
						t = n.history,
						i = n.searchPrefill;
					i && t.push(Object(N.R)({
						searchPrefill: i.id
					}))
				}
			}, {
				key: "render",
				value: function () {
					var n = this.props.searchPrefill;
					return n ? o.a.createElement(A, {
						targetType: "SearchMethodPrefill",
						className: "search-bar-drop-down__item--prefill",
						onClick: this.onClick
					}, o.a.createElement("span", {
						className: "search-bar-drop-down__item-text"
					}, n.hint), !!n.image && o.a.createElement("img", {
						src: Object(N.i)(n.image),
						height: "24"
					})) : null
				}
			}]), t
		}(),
		L = Object(O.withRouter)(B),
		D = (i(1085), function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}());
	var x = H.a.OFFICIAL_SHOP_MALL_URL,
		Y = (R = w = function (n) {
			function t(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var i = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
				return i.state = {
					inputValue: Object(k.b)(n.searchParams || {}).trim(),
					focused: !1
				}, i.onSearchInputChange = i.onSearchInputChange.bind(i), i.onSearch = i.onSearch.bind(i), i.onFocus = i.onFocus.bind(i), i.onBlur = i.onBlur.bind(i), i.onSearchShop = i.onSearchShop.bind(i), i
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, e["Component"]), D(t, [{
				key: "componentWillMount",
				value: function () {
					this.props.loadSearchPrefills()
				}
			}, {
				key: "onFocus",
				value: function () {
					this.props.onFocus && this.props.onFocus(), this.setState({
						focused: !0
					})
				}
			}, {
				key: "onBlur",
				value: function () {
					this.props.onBlur && this.props.onBlur(), this.setState({
						focused: !1
					})
				}
			}, {
				key: "onSearchInputChange",
				value: function (n) {
					var t = n.target.value;
					this.setState({
						inputValue: t
					})
				}
			}, {
				key: "componentWillReceiveProps",
				value: function (n) {
					var t = Object(k.b)(n.searchParams || {});
					t !== this.state.inputValue && this.setState({
						inputValue: t
					})
				}
			}, {
				key: "onSearchShop",
				value: function () {
					var n = this.state.inputValue;
					this.onBlur(), n && (location.href = Object(N.q)(n))
				}
			}, {
				key: "onSearch",
				value: function (n) {
					var t = this;
					n.preventDefault();
					var i = this.state.inputValue,
						e = this.props,
						o = e.onSearch,
						r = e.searchParams,
						h = e.searchPrefill,
						a = i && i.trim();
					this.setState({
						focused: !1
					}, function () {
						var n = {};
						if ("function" == typeof o) {
							if (a) {
								var e = void 0,
									c = void 0;
								Object(s.a)(a, r || void 0) ? e = a.replace(/\s+/g, "") : c = a, n = {
									hashtag: e,
									keyword: c,
									catalogue: void 0
								}
							} else h && h.id && (n = {
								searchPrefill: h.id
							});
							Object(S.a)({
								action: "submitKeyboardSearch",
								data: {
									keyword: i,
									targetSearchParams: n
								},
								track: t.context.track
							}), o(n)
						}
					})
				}
			}, {
				key: "getSearchShopMethods",
				value: function () {
					var n = this.state.inputValue;
					return n ? [e.createElement(A, {
						key: "search-method-product",
						onClick: this.onSearch,
						className: "search-bar-drop-down__item--product",
						keyword: n,
						targetType: "SearchMethodProduct"
					}, Object(C.c)("label_search_c_prod", {
						keyword: n
					})), e.createElement(A, {
						key: "search-method-shop",
						onClick: this.onSearchShop,
						className: "search-bar-drop-down__item--shop",
						keyword: n,
						targetType: "SearchMethodShop"
					}, Object(C.c)("label_search_c_shop", {
						keyword: n
					}))] : []
				}
			}, {
				key: "getDropdown",
				value: function () {
					var n = this,
						t = this.props,
						i = t.enableSearchShop,
						o = t.searchPrefill,
						r = t.enableSearchPrefill,
						h = [];
					return !this.state.inputValue && r && o && h.push(e.createElement(L, {
						key: "search-method-prefill",
						searchPrefill: o
					})), i && (h = h.concat(this.getSearchShopMethods())), e.createElement(m.a, {
						toScreenTop: v.d,
						collapsed: !this.state.focused || !h || !h.length,
						onClickMask: function () {
							n.onBlur()
						}
					}, e.createElement("div", {
						className: "search-bar-drop-down"
					}, h))
				}
			}, {
				key: "getPlaceholder",
				value: function () {
					var n = this.props,
						t = n.placeholder,
						i = n.searchParams,
						e = n.labelSearchRange,
						o = n.labelSearchRangeIn,
						r = n.isOfficialShopSearch,
						h = this.state.focused;
					if (t) return t;
					if (h) {
						if (i && e) return Object(C.c)("label_search_in") + " " + e
					} else {
						if (i && i.shop && !e) return Object(C.c)("label_search_in_shop");
						if (x && r) return ""
					}
					return e ? o ? e + " " + Object(C.c)("label_in") + " " + o : e : x && r ? Object(C.c)("label_official_shops--VN") : Object(C.c)("label_search_shopee")
				}
			}, {
				key: "render",
				value: function () {
					var n = this.props,
						t = n.isTransparent,
						i = n.searchParams,
						o = n.isOfficialShopSearch,
						r = n.labelSearchRange,
						h = n.useLargeIcon,
						a = this.state,
						c = a.inputValue,
						u = a.focused,
						g = this.getPlaceholder();
					return e.createElement(l.a, {
						onClickOutside: this.onBlur
					}, e.createElement("div", {
						className: T()("search-bar", t && "search-bar--transparent")
					}, h ? e.createElement(y, {
						className: "search-bar__search-icon"
					}) : e.createElement(d.a, {
						className: "search-bar__search-icon"
					}), e.createElement("form", {
						role: "search",
						onSubmit: this.onSearch,
						className: "search-bar__form",
						method: "get",
						action: _.z
					}, o && !g && !c && e.createElement("img", {
						className: "search-bar__img-placeholder",
						src: E.a
					}), e.createElement(p.a, {
						"aria-label": g,
						autoComplete: "off",
						name: "keyword",
						onChange: this.onSearchInputChange,
						value: c,
						className: T()("search-bar__input", {
							"search-bar__input--orange": !u && r,
							"search-bar__input--red": !u && o,
							"search-bar__input--hashtag": Object(s.a)(c, i || {})
						}),
						placeholder: g,
						type: "search",
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						targetType: "SearchBar"
					})), this.getDropdown()))
				}
			}]), t
		}(), w.defaultProps = {
			enableSearchShop: !1,
			enableSearchPrefill: !1
		}, w.contextTypes = {
			track: h.a.func
		}, R);
	t.a = Object(a.connect)(function (n, t) {
		var i = n.search,
			e = t.enableSearchPrefill,
			o = t.searchParams,
			r = t.labelSearchRange,
			h = o && o.searchPrefill ? Object(c.b)(i.searchPrefill, o) : e ? Object(c.a)(i.searchPrefill) : null;
		return {
			isOfficialShopSearch: Object(g.f)(),
			labelSearchRange: h && h.hint || r,
			searchPrefill: h
		}
	}, {
		loadSearchPrefills: u.b
	})(Y)
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		var t = n.className,
			i = n.type,
			e = void 0 === i ? "text" : i,
			r = n.value,
			h = void 0 === r ? "" : r,
			u = n.disabled,
			s = void 0 !== u && u,
			g = n.onChange,
			l = n.validateShowErrorMessage,
			p = void 0 !== l && l,
			m = n.errorMessage,
			d = n._ref,
			f = void 0 === d ? function () {} : d,
			y = function (n, t) {
				var i = {};
				for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
				return i
			}(n, ["className", "type", "value", "disabled", "onChange", "validateShowErrorMessage", "errorMessage", "_ref"]);
		return o.a.createElement("div", {
			className: "stardust-input"
		}, o.a.createElement("input", c({
			className: a()("stardust-input__element", {
				"stardust-input__element--invalid": p || !!m,
				"stardust-input__element--disabled": s
			}, t),
			disabled: s,
			type: e,
			value: h,
			onChange: s ? function () {} : g,
			ref: f
		}, y)), m ? o.a.createElement("div", {
			className: "stardust-input__invalid-message"
		}, m) : null)
	};
	var e = i(1),
		o = i.n(e),
		r = i(1082),
		h = (i.n(r), i(90)),
		a = i.n(h),
		c = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		return o.a.createElement("svg", r({
			viewBox: "0 0 13 14"
		}, n), o.a.createElement("g", {
			stroke: "none",
			strokeWidth: "1",
			fillRule: "evenodd"
		}, o.a.createElement("g", {
			transform: "translate(-56.000000, -36.000000)"
		}, o.a.createElement("g", {
			transform: "translate(0.000000, 1.000000)"
		}, o.a.createElement("g", {
			transform: "translate(0.000000, 20.000000)"
		}, o.a.createElement("g", {
			transform: "translate(48.000000, 8.000000)"
		}, o.a.createElement("path", {
			d: "M16.9914351,15.5118537 C17.0093193,15.5267114 17.0267223,15.5425664 17.043578,15.5594221 L20.6209034,19.1367476 C20.9022562,19.4181004 20.9067126,19.869807 20.6265242,20.1499954 C20.3482756,20.428244 19.9010266,20.432125 19.6132763,20.1443747 L16.0359508,16.5670492 C16.0180049,16.5491033 16.0011854,16.5304642 15.9854945,16.5112208 C15.1523331,17.1323409 14.1191023,17.5 13,17.5 C10.2385763,17.5 8,15.2614237 8,12.5 C8,9.73857625 10.2385763,7.5 13,7.5 C15.7614237,7.5 18,9.73857625 18,12.5 C18,13.6309342 17.6245255,14.6741717 16.9914351,15.5118537 Z M13,16.5 C15.209139,16.5 17,14.709139 17,12.5 C17,10.290861 15.209139,8.5 13,8.5 C10.790861,8.5 9,10.290861 9,12.5 C9,14.709139 10.790861,16.5 13,16.5 Z"
		})))))))
	};
	var e = i(1),
		o = i.n(e),
		r = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}
}, function (n, t) {}, function (n, t) {}, function (n, t) {}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("minus-sign")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("response-time")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("video-play")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("web-chat")
}, , , , function (n, t, i) {
	"use strict";
	t.a = function (n, t) {
		n && (n.style.transform = t, n.style.WebkitTransform = t)
	}, t.b = function (n, t) {
		n && (n.style.transition = t, n.style.WebkitTransition = t)
	}, i.d(t, "c", function () {
		return e
	});
	var e = function () {
		var n = !1;
		try {
			var t = Object.defineProperty({}, "passive", {
				get: function () {
					n = !0
				}
			});
			window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
		} catch (n) {}
		return n
	}()
}, function (n, t, i) {
	"use strict";
	t.a = {
		snapScroll: function (n) {
			var t = n.scrollLeft,
				i = n.containerWidth,
				e = n.measurements,
				o = n.index,
				r = e[o - 1],
				h = e[o + 1];
			return r && r.left < t ? r.left : h && h.left + h.width > t + i ? h.left - (i - h.width) : void 0
		},
		syncTabContainer: function (n) {
			var t = n.measurements,
				i = n.index,
				e = n.currentIndex,
				o = n.containerWidth,
				r = n.scrollLeft,
				h = Math.floor(i),
				a = Math.ceil(i);
			if (i > e) {
				var c = t[a + 1];
				if (c && c.left + c.width - o > r) {
					var u = Math.min(1, Math.max(0, i - e));
					return (c.left + c.width - o - r) * u
				}
			} else {
				var s = t[h - 1];
				if (s && s.left < r) {
					var g = Math.min(1, Math.max(0, e - i));
					return (s.left - r) * g
				}
			}
			return 0
		}
	}
}, function (n, t, i) {
	"use strict";
	t.a = {
		snapScroll: function (n) {
			var t = n.containerWidth,
				i = n.measurements,
				e = n.index;
			if (-1 === e) return 0;
			var o = i[e];
			return o.left - (t - o.width) / 2
		},
		syncTabContainer: function (n) {
			var t = n.measurements,
				i = n.index,
				e = n.currentIndex,
				o = n.containerWidth,
				r = n.scrollWidth,
				h = Math.floor(i),
				a = Math.ceil(i),
				c = i > e ? a : h,
				u = c === e ? 0 : (i - e) / (c - e);
			if (!t[e] || !t[c]) return 0;
			var s = t[e].left - (o - t[e].width) / 2,
				g = t[c].left - (o - t[c].width) / 2;
			return s = Math.min(Math.max(0, s), r - o), ((g = Math.min(Math.max(0, g), r - o)) - s) * u
		}
	}
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r),
		a = i(538),
		c = i(668),
		u = i(911),
		s = i.n(u);

	function g(n, t, i) {
		return t in n ? Object.defineProperty(n, t, {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : n[t] = i, n
	}
	var l = function (n) {
			var t = n.rank,
				i = n.className,
				e = void 0 === i ? "" : i,
				r = t >= c.b;
			return o.a.createElement("div", {
				className: h()(s.a.badge, e, g({}, s.a.first, t === c.a), g({}, s.a.second, t === c.c), g({}, s.a.other, r))
			}, r && t.toString())
		},
		p = i(576),
		m = i(913),
		d = i.n(m),
		f = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		};
	t.a = function (n) {
		var t = n.src,
			i = n.showRank,
			e = void 0 === i || i,
			r = n.rank,
			u = n.className,
			s = void 0 === u ? "" : u,
			g = n.rankClassName,
			m = void 0 === g ? "" : g,
			y = function (n, t) {
				var i = {};
				for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
				return i
			}(n, ["src", "showRank", "rank", "className", "rankClassName"]),
			v = r || 0;
		return o.a.createElement("div", {
			className: d.a.container
		}, o.a.createElement("div", {
			className: h()(d.a.imageContainer, s)
		}, o.a.createElement("div", {
			className: d.a.placeholderWrapper
		}, o.a.createElement(p.a, {
			className: d.a.imagePlaceholder
		})), o.a.createElement(a.a, f({
			src: t,
			className: d.a.image
		}, y))), e && o.a.createElement("div", {
			className: h()(d.a.rankWrapper, m)
		}, o.a.createElement(l, {
			rank: v,
			className: v >= c.b ? d.a.rankNormal : d.a.rankHanging
		})))
	}
}, function (n, t) {
	n.exports = {
		badge: "vHNxtT",
		first: "_2Ap0M_",
		second: "Qzcg3o",
		other: "_4wW4FP"
	}
}, function (n, t) {}, function (n, t) {
	n.exports = {
		container: "_3oZFS4",
		imageContainer: "_22JD2i",
		rankWrapper: "_3OxTxT",
		rankNormal: "_2k-moG",
		rankHanging: "_2mV2Ps",
		image: "_lorUF",
		placeholderWrapper: "_2ojpep",
		imagePlaceholder: "_2bIao-"
	}
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return e
	});
	var e = {
		DEFAULT: "default",
		FLASH_SALE: "flash-sale",
		GROUP_BUY_LIST: "group-buy-list",
		TOP_PRODUCTS: "top-products"
	}
}, , , , , , , , , , , , , , function (n, t, i) {
	"use strict";
	i.d(t, "d", function () {
		return o
	}), i.d(t, "g", function () {
		return r
	}), i.d(t, "c", function () {
		return h
	}), i.d(t, "e", function () {
		return a
	}), i.d(t, "b", function () {
		return c
	}), i.d(t, "f", function () {
		return u
	}), i.d(t, "a", function () {
		return s
	}), i.d(t, "h", function () {
		return g
	});
	var e = i(3),
		o = Object(e.b)("FETCH_GROUP_BUY_ITEM_GROUP"),
		r = (Object(e.b)("FETCH_GROUP_BUY_ITEM_GROUP_LIST"), Object(e.b)("FETCH_HOME_PAGE_GROUP_BUY_ITEMS")),
		h = Object(e.b)("FETCH_GROUP_BUY_ITEMS"),
		a = Object(e.b)("FETCH_GROUP_BUY_MY_GROUPS"),
		c = Object(e.b)("FETCH_GROUP_BUY_GROUP_DETAIL"),
		u = Object(e.b)("FETCH_GROUP_BUY_SETTINGS"),
		s = Object(e.b)("FETCH_GROUP_BUY_GROUP"),
		g = {
			ALL: 0,
			ONGOING: 1,
			COMPLETED: 2,
			INVALID: 3
		}
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (n, t, i) {
	"use strict";
	t.c = function (n) {
		var t = Math.floor(n / 1e3),
			i = Math.floor(t / e);
		t %= e;
		var r = Math.floor(t / o);
		return {
			hour: i || 0,
			minute: r || 0,
			second: t % o || 0
		}
	}, t.a = function (n, t) {
		var i = +new Date;
		return Math.max(0, (1e3 * n - i) * t)
	}, t.b = function (n) {
		return n < 10 ? "0" + n : "" + n
	};
	var e = 3600,
		o = 60
}, , , , , , , , , , , , , , , , , , function (n, t, i) {
	"use strict";
	t.a = function (n) {
		var t = h(n);
		return t && t.find(function (n) {
			var t = n.start,
				i = n.end,
				e = Date.now() / 1e3;
			return e >= t && e < i
		})
	}, t.b = function (n, t) {
		if (t) {
			var i = Object(e.c)(t),
				a = Date.now() / 1e3,
				c = void 0;
			if (i === o.l.PREFILL && (c = function (n, t) {
					var i = h(n);
					if (i && t) return i.find(function (n) {
						return n.id === t
					})
				}(n, t.searchPrefill)), i === o.l.GLOBAL && (c = function (n, t) {
					var i = h(n);
					if (t && i) return i.find(function (n) {
						return Object(r.a)(n && n.hint, t)
					})
				}(n, t.keyword)), t.peep_signature || c && a >= c.start && a < c.end) return c
		}
	};
	var e = i(517),
		o = i(513),
		r = i(783);

	function h(n) {
		if (!n.error) return n.data.items
	}
}, function (n, t, i) {
	"use strict";
	t.b = function (n) {
		var t = !1;
		if (n) {
			var i = n.adjust && n.adjust.count,
				e = i > 0;
			t = e && n.nextOffset >= i && i < n.total_count
		}
		return t
	}, t.a = function (n, t) {
		return !!n && n.trim().startsWith("#") && (!t || !["shop", "category", "subcategory", "collection"].some(function (n) {
			return t && t[n]
		}))
	}
}, , function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return s
	});
	var e = i(1),
		o = (i.n(e), i(684)),
		r = i.n(o),
		h = i(685),
		a = i.n(h),
		c = i(1062),
		u = (i.n(c), function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}());
	var s = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i.onRef = i.onRef.bind(i), i.state = {
				toTop: null
			}, i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, e["Component"]), u(t, [{
			key: "onRef",
			value: function (n) {
				this._dom = n, this.getLatestTop(this.props)
			}
		}, {
			key: "componentWillReceiveProps",
			value: function (n) {
				this.getLatestTop(n)
			}
		}, {
			key: "getLatestTop",
			value: function (n) {
				if (!n.collapsed && this._dom) {
					var t = this._dom.offsetParent,
						i = t.getBoundingClientRect(),
						e = window.getComputedStyle(t),
						o = i.top + i.height + (e ? parseInt(e.marginBottom.replace("px", ""), 10) : 0);
					this.setState({
						toTop: o
					})
				}
			}
		}, {
			key: "render",
			value: function () {
				var n = this.props,
					t = n.collapsed,
					i = n.children,
					o = n.toScreenTop,
					h = n.onClickMask,
					c = this.state.toTop;
				return e.createElement("div", {
					ref: this.onRef
				}, e.createElement(r.a, null, !t && c ? e.createElement(a.a, {
					key: "masked-dropdown",
					classNames: "masked-dropdown-transition",
					appear: !0,
					timeout: 200
				}, e.createElement("div", {
					className: "masked-dropdown",
					style: {
						top: c < o ? o : c
					},
					onClick: h
				}, e.createElement("div", {
					className: "masked-dropdown__inner-wrapper"
				}, i))) : null))
			}
		}]), t
	}()
}, function (n, t, i) {
	"use strict";
	t.__esModule = !0, t.classNamesShape = t.timeoutsShape = void 0, t.transitionTimeout = function (n) {
		var t = "transition" + n + "Timeout",
			i = "transition" + n;
		return function (n) {
			if (n[i]) {
				if (null == n[t]) return new Error(t + " wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
				if ("number" != typeof n[t]) return new Error(t + " must be a number (in milliseconds)")
			}
			return null
		}
	};
	var e, o = i(4),
		r = (e = o) && e.__esModule ? e : {
			default: e
		};
	t.timeoutsShape = r.default.oneOfType([r.default.number, r.default.shape({
		enter: r.default.number,
		exit: r.default.number
	}).isRequired]), t.classNamesShape = r.default.oneOfType([r.default.string, r.default.shape({
		enter: r.default.string,
		exit: r.default.string,
		active: r.default.string
	}), r.default.shape({
		enter: r.default.string,
		enterActive: r.default.string,
		exit: r.default.string,
		exitActive: r.default.string
	})])
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var h = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i._childNodes = [], i.onWrapperClick = i.onWrapperClick.bind(i), i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, e["Component"]), r(t, [{
			key: "componentDidMount",
			value: function () {
				window && window.addEventListener && window.addEventListener("click", this.onWrapperClick)
			}
		}, {
			key: "componentWillUnmount",
			value: function () {
				window && window.removeEventListener && window.removeEventListener("click", this.onWrapperClick)
			}
		}, {
			key: "onWrapperClick",
			value: function (n) {
				var t = this.props,
					i = t.onClick,
					e = t.onClickOutside,
					o = n.target;
				o instanceof Node && (this._childNodes.some(function (n) {
					return n instanceof Node && n.contains(o)
				}) ? "function" == typeof i && i() : "function" == typeof e && e())
			}
		}, {
			key: "render",
			value: function () {
				var n = this,
					t = this.props.children;
				return o.a.createElement(e.Fragment, null, o.a.Children.map(t, function (t, i) {
					return o.a.cloneElement(t, {
						ref: function (t) {
							return n._childNodes[i] = t
						}
					})
				}))
			}
		}]), t
	}();
	t.a = h
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return h
	});
	var e = i(1),
		o = (i.n(e), i(1071)),
		r = (i.n(o), function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}());
	var h = function (n) {
		function t() {
			return function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, e["Component"]), r(t, [{
			key: "componentDidMount",
			value: function () {
				var n = this.props.zIndex;
				this.mask = document.createElement("div");
				var t = this.mask;
				t.className = "shopee-web-mask-hoc";
				var i = document.createAttribute("onclick");
				i.value = "", t.setAttributeNode(i), t.style.zIndex = n ? n + "" : "", t && document.body && document.body.appendChild(t)
			}
		}, {
			key: "componentWillUnmount",
			value: function () {
				this.mask && this.mask.remove && this.mask.remove(), this.mask = null
			}
		}, {
			key: "render",
			value: function () {
				return null
			}
		}]), t
	}()
}, , , function (n, t, i) {
	"use strict";
	t.a = function (n) {
		return o.a.createElement("svg", r({}, n, {
			viewBox: "0 0 19 20"
		}), o.a.createElement("path", {
			d: "M1.299 19c-.71 0-1.285-.567-1.285-1.267V3.8c0-.7.31-1.266 1.02-1.266v15.458h15.681c0 .7-.575 1.008-1.284 1.008H1.299zM5.795 4.8c-.354 0-.555-.223-.555-.5 0-.276.2-.5.555-.5h5.14c.354 0 .568.224.568.5 0 .277-.214.5-.569.5H5.795zm0 3.8c-.354 0-.555-.224-.555-.5 0-.277.2-.5.555-.5h8.993c.355 0 .568.223.568.5 0 .276-.213.5-.568.5H5.795zm0 3.8c-.354 0-.555-.224-.555-.5 0-.277.2-.5.555-.5h8.993c.355 0 .572.223.572.5 0 .276-.217.5-.572.5H5.795zm11.18-10.76a.638.638 0 0 0-.642-.633H4.241a.638.638 0 0 0-.642.634v13.183c0 .35.288.633.642.633h12.092a.638.638 0 0 0 .643-.633V1.64zm-.26 14.827H3.868c-.709 0-1.284-.567-1.284-1.267V1.267C2.584.567 3.159 0 3.868 0h12.847C17.425 0 18 .567 18 1.267V15.2c0 .7-.576 1.267-1.285 1.267z",
			fill: "#000",
			fillRule: "evenodd",
			fillOpacity: ".87"
		}))
	};
	var e = i(1),
		o = i.n(e),
		r = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		return o.a.createElement("svg", r({}, n, {
			viewBox: "0 0 19 20"
		}), o.a.createElement("g", {
			stroke: "none",
			strokeWidth: "1",
			fill: "none",
			fillRule: "evenodd",
			opacity: "0.9"
		}, o.a.createElement("g", {
			transform: "translate(-171.000000, -112.000000)"
		}, o.a.createElement("g", {
			transform: "translate(-1.000000, 0.000000)"
		}, o.a.createElement("g", {
			transform: "translate(155.000000, 52.000000)"
		}, o.a.createElement("g", {
			transform: "translate(15.000000, 14.000000)"
		}, o.a.createElement("g", {
			transform: "translate(2.500000, 47.000000)"
		}, o.a.createElement("g", {
			transform: "translate(0.000000, 3.493636)"
		}, o.a.createElement("path", {
			d: "M1.05872727,0.597272727 C-0.101454545,0.698727273 0.137454545,1.82454545 0.137454545,1.82454545 L1.05872727,13.131 C1.05872727,13.131 0.972818182,14.8508182 3.18354545,14.9154545 C3.32590909,14.9154545 13.9434545,14.9121818 14.2240909,14.9154545 C16.362,14.7820909 16.344,13.131 16.344,13.131 L17.2808182,1.82454545 C17.2808182,1.82454545 17.5090909,0.681545455 16.344,0.597272727 L1.05872727,0.597272727 Z",
			strokeOpacity: "0.87",
			stroke: "#000000"
		}), o.a.createElement("path", {
			d: "M6.55903636,4.27230352 C5.98221818,4.84339443 5.71630909,5.90866716 6.0984,6.63439443 C6.40358182,7.21530352 6.93867273,7.49348534 7.54003636,7.7700308 C8.23385455,8.08830352 8.87530909,8.15130352 9.55276364,8.50721261 C10.0764,8.78130352 10.9248545,9.16257625 10.9854,9.78684898 C11.0459455,10.4111217 10.7644909,10.9576672 10.2114,11.2980308 C8.87776364,12.1162126 7.41730909,11.5246672 6.22030909,10.6647581 C6.06730909,10.5551217 5.74821818,10.659849 5.65821818,10.8005763 C5.55021818,10.9707581 5.58949091,11.3299399 5.74085455,11.4387581 C6.9174,12.2831217 8.51121818,12.7093944 9.96185455,12.3084853 C10.6057636,12.1301217 11.2226727,11.7815763 11.5589455,11.2186672 C11.9336727,10.5927581 12.0449455,9.69275807 11.6579455,9.07093989 C11.0786727,8.14148534 10.0044,7.67921261 8.95058182,7.37157625 C8.6544,7.28566716 8.18803636,7.12448534 7.91476364,6.99193989 C7.40912727,6.74566716 6.89367273,6.50021261 6.81267273,5.91521261 C6.68094545,4.97512171 7.50812727,4.40812171 8.39094545,4.27230352 C9.20176364,4.14793989 9.8784,4.42284898 10.5435818,4.85975807 C10.9183091,5.1060308 11.4362182,4.40157625 11.0647636,4.15775807 C9.76549091,3.30521261 7.72821818,3.11457625 6.55903636,4.27230352",
			fillOpacity: "0.87",
			fill: "#000000"
		})), o.a.createElement("path", {
			d: "M4.73522727,4.122 C5.07722727,2.02336364 6.72586364,0.409090909 8.7075,0.409090909 C10.7046818,0.409090909 12.3631364,2.04790909 12.6871364,4.17027273",
			strokeOpacity: "0.87",
			stroke: "#000000"
		}))))))))
	};
	var e = i(1),
		o = i.n(e),
		r = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		}
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		var t = n.className;
		return o.a.createElement("svg", {
			width: "19",
			height: "19",
			className: t
		}, o.a.createElement("g", {
			fill: "#000",
			fillRule: "nonzero"
		}, o.a.createElement("path", {
			d: "M9.376.002h-.265C4.094.002 0 4.094 0 9.112v.264c0 5.018 4.092 9.11 9.11 9.11h.264c5.018 0 9.11-4.092 9.11-9.11v-.265c.001-5.017-4.09-9.109-9.108-9.109zm.01 17.496h-.273C4.651 17.498 1 13.845 1 9.385v-.272C1 4.651 4.653 1 9.113 1h.272c4.462 0 8.113 3.653 8.113 8.113v.272h.002c0 4.462-3.653 8.113-8.113 8.113z"
		}), o.a.createElement("path", {
			d: "M9.253 13.032a.783.783 0 1 0 0 1.566.783.783 0 0 0 0-1.566zM9.253 4.694c-1.44 0-2.61 1.16-2.61 2.586a.522.522 0 0 0 1.044 0c0-.865.688-1.542 1.566-1.542.863 0 1.566.707 1.566 1.578 0 .348-.437.784-.86 1.207-.576.576-1.228 1.228-1.228 2.082v.883a.522.522 0 1 0 1.044 0v-.884c0-.42.469-.89.923-1.343.572-.572 1.165-1.164 1.165-1.946a2.619 2.619 0 0 0-2.61-2.621z"
		})))
	};
	var e = i(1),
		o = i.n(e)
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return e
	});
	var e = "https://help.shopee.vn/hc/vi"
}, function (n, t) {}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i.n(e),
		r = i(895),
		h = i(504),
		a = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		c = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var u = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i.handleChange = i.handleChange.bind(i), i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, o.a.Component), c(t, [{
			key: "handleChange",
			value: function (n) {
				this.props.trackingInputChange(n), this.props.onChange && "function" == typeof this.props.onChange && this.props.onChange(n)
			}
		}, {
			key: "render",
			value: function () {
				var n = this.props,
					t = (n.trackingInputChange, n.targetType, n.onChange, function (n, t) {
						var i = {};
						for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
						return i
					}(n, ["trackingInputChange", "targetType", "onChange"]));
				return o.a.createElement(r.a, a({}, t, {
					onChange: this.handleChange
				}))
			}
		}]), t
	}();
	t.a = Object(h.f)(u, "Input")
}, , function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return s
	});
	var e, o, r = i(1),
		h = (i.n(r), i(4)),
		a = i.n(h),
		c = Object.assign || function (n) {
			for (var t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e])
			}
			return n
		},
		u = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var s = (o = e = function (n) {
		function t(n) {
			! function (n, t) {
				if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var i = function (n, t) {
				if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? n : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
			return i.sync = i.sync.bind(i), i.offSwiping = null, i
		}
		return function (n, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			n.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: n,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
		}(t, r["Component"]), u(t, [{
			key: "componentDidMount",
			value: function () {
				this.offSwiping = this.context.onSwiping(this.sync)
			}
		}, {
			key: "componentWillUnmount",
			value: function () {
				"function" == typeof this.offSwiping && this.offSwiping()
			}
		}, {
			key: "sync",
			value: function (n) {
				var t = this.props,
					i = t.color,
					e = t.activeColor,
					o = n < this.props.index - 1 || n > this.props.index + 1 ? 0 : 1 - Math.min(1, Math.abs(this.props.index - n)),
					r = i[0] + (e[0] - i[0]) * o,
					h = i[1] + (e[1] - i[1]) * o,
					a = i[2] + (e[2] - i[2]) * o,
					c = i.length > 3 ? i[3] + (e[3] - i[3]) * o : 1;
				this._ref.style.color = "rgba(" + Math.round(r) + ", " + Math.round(h) + ", " + Math.round(a) + ", " + c + ")"
			}
		}, {
			key: "render",
			value: function () {
				var n = this,
					t = this.props,
					i = t.text,
					e = t.className,
					o = t.style,
					h = void 0 === o ? {} : o;
				return r.createElement("div", {
					ref: function (t) {
						return n._ref = t
					},
					style: c({
						padding: "0 17px"
					}, h),
					className: e
				}, i)
			}
		}]), t
	}(), e.contextTypes = {
		onSwiping: a.a.func
	}, e.defaultProps = {
		color: [100, 100, 100, 1]
	}, o)
}, function (n, t, i) {
	"use strict";
	var e = i(506),
		o = i(1002),
		r = Object(e.a)("all-cate"),
		h = i(546),
		a = Object(e.a)("arrow-down-filled"),
		c = Object(e.a)("arrow-left-bold"),
		u = i(574),
		s = i(566),
		g = i(740),
		l = i(512),
		p = i(535),
		m = Object(e.a)("activity"),
		d = Object(e.a)("block"),
		f = i(1003),
		y = Object(e.a)("btn-shop"),
		v = Object(e.a)("bold-arrow"),
		_ = i(660),
		b = i(1004),
		T = i(573),
		C = Object(e.a)("default-image"),
		N = Object(e.a)("delete"),
		S = Object(e.a)("edit"),
		M = i(702),
		E = Object(e.a)("filter"),
		H = Object(e.a)("filter-selected"),
		k = Object(e.a)("followers"),
		G = Object(e.a)("following"),
		A = i(743),
		O = i(558),
		P = Object(e.a)("input-warning"),
		w = Object(e.a)("joined"),
		R = i(1005),
		B = i(1006),
		L = i(688),
		D = i(689),
		x = Object(e.a)("loading-image"),
		Y = Object(e.a)("login-2"),
		j = Object(e.a)("login-fb"),
		I = Object(e.a)("login-sms"),
		X = i(900),
		U = Object(e.a)("my-purchase"),
		K = Object(e.a)("navbar-shopping-cart"),
		V = Object(e.a)("notification"),
		z = Object(e.a)("notification-2"),
		F = Object(e.a)("notifications-wallet"),
		W = Object(e.a)("notification-marketing-center"),
		q = Object(e.a)("order"),
		Q = Object(e.a)("order-order"),
		J = Object(e.a)("order-paid"),
		Z = Object(e.a)("order-problem"),
		$ = Object(e.a)("order-rating"),
		nn = Object(e.a)("order-received"),
		tn = Object(e.a)("order-shipping"),
		en = i(1007),
		on = i(591),
		rn = i(1008),
		hn = Object(e.a)("prep-time"),
		an = Object(e.a)("products"),
		cn = Object(e.a)("promotion"),
		un = i(613),
		sn = i(693),
		gn = Object(e.a)("reply"),
		ln = i(901),
		pn = i(1009),
		mn = Object(e.a)("search"),
		dn = Object(e.a)("search-2"),
		fn = i(1010),
		yn = i(1011),
		vn = i(532),
		_n = i(744),
		bn = i(902),
		Tn = i(1012),
		Cn = i(903),
		Nn = i(735),
		Sn = Object(e.a)("zoom");
	i.d(t, !1, function () {
		return e.a
	}), i.d(t, !1, function () {
		return o.a
	}), i.d(t, !1, function () {
		return r
	}), i.d(t, !1, function () {
		return h.a
	}), i.d(t, !1, function () {
		return a
	}), i.d(t, "a", function () {
		return c
	}), i.d(t, "b", function () {
		return u.a
	}), i.d(t, !1, function () {
		return s.a
	}), i.d(t, !1, function () {
		return g.a
	}), i.d(t, !1, function () {
		return l.a
	}), i.d(t, !1, function () {
		return p.a
	}), i.d(t, !1, function () {
		return m
	}), i.d(t, !1, function () {
		return d
	}), i.d(t, !1, function () {
		return f.a
	}), i.d(t, !1, function () {
		return y
	}), i.d(t, !1, function () {
		return v
	}), i.d(t, !1, function () {
		return _.a
	}), i.d(t, !1, function () {
		return b.a
	}), i.d(t, !1, function () {
		return T.a
	}), i.d(t, !1, function () {
		return C
	}), i.d(t, !1, function () {
		return N
	}), i.d(t, !1, function () {
		return S
	}), i.d(t, !1, function () {
		return M.a
	}), i.d(t, !1, function () {
		return E
	}), i.d(t, !1, function () {
		return H
	}), i.d(t, !1, function () {
		return k
	}), i.d(t, !1, function () {
		return G
	}), i.d(t, !1, function () {
		return A.a
	}), i.d(t, !1, function () {
		return O.a
	}), i.d(t, !1, function () {
		return P
	}), i.d(t, !1, function () {
		return w
	}), i.d(t, !1, function () {
		return R.a
	}), i.d(t, !1, function () {
		return B.a
	}), i.d(t, !1, function () {
		return L.a
	}), i.d(t, !1, function () {
		return D.a
	}), i.d(t, !1, function () {
		return x
	}), i.d(t, !1, function () {
		return Y
	}), i.d(t, !1, function () {
		return j
	}), i.d(t, !1, function () {
		return I
	}), i.d(t, !1, function () {
		return X.a
	}), i.d(t, !1, function () {
		return U
	}), i.d(t, !1, function () {
		return K
	}), i.d(t, !1, function () {
		return V
	}), i.d(t, !1, function () {
		return z
	}), i.d(t, !1, function () {
		return F
	}), i.d(t, !1, function () {
		return W
	}), i.d(t, !1, function () {
		return q
	}), i.d(t, !1, function () {
		return Q
	}), i.d(t, !1, function () {
		return J
	}), i.d(t, !1, function () {
		return Z
	}), i.d(t, !1, function () {
		return $
	}), i.d(t, !1, function () {
		return nn
	}), i.d(t, !1, function () {
		return tn
	}), i.d(t, !1, function () {
		return en.a
	}), i.d(t, !1, function () {
		return on.a
	}), i.d(t, !1, function () {
		return rn.a
	}), i.d(t, !1, function () {
		return hn
	}), i.d(t, !1, function () {
		return an
	}), i.d(t, !1, function () {
		return cn
	}), i.d(t, !1, function () {
		return un.a
	}), i.d(t, !1, function () {
		return sn.a
	}), i.d(t, !1, function () {
		return gn
	}), i.d(t, !1, function () {
		return ln.a
	}), i.d(t, !1, function () {
		return pn.a
	}), i.d(t, !1, function () {
		return mn
	}), i.d(t, !1, function () {
		return dn
	}), i.d(t, !1, function () {
		return fn.a
	}), i.d(t, !1, function () {
		return yn.a
	}), i.d(t, "c", function () {
		return vn.a
	}), i.d(t, !1, function () {
		return _n.a
	}), i.d(t, !1, function () {
		return bn.a
	}), i.d(t, !1, function () {
		return Tn.a
	}), i.d(t, !1, function () {
		return Cn.a
	}), i.d(t, !1, function () {
		return Nn.a
	}), i.d(t, !1, function () {
		return Sn
	})
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("add-to-cart")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("btn-chat")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("comment")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("like")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("like-solid")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("play-error")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("preorder")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("response-rate")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("search-shop")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("shopping-cart-2")
}, function (n, t, i) {
	"use strict";
	var e = i(506);
	t.a = Object(e.a)("video-replay")
}, function (n, t, i) {
	"use strict";
	var e = i(1),
		o = i(90),
		r = i.n(o),
		h = i(4),
		a = i.n(h),
		c = i(1014);

	function u(n, t, i) {
		return 0 === i ? n : 1 === i ? t : n + (t - n) * i
	}
	var s = i(907),
		g = i(908),
		l = i(909),
		p = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var m, d, f = {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			overflow: "hidden"
		},
		y = function (n) {
			function t() {
				return function (n, t) {
						if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function (n, t) {
						if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? n : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, e["PureComponent"]), p(t, [{
				key: "render",
				value: function () {
					var n = this,
						t = this.props,
						i = t.height,
						o = t.background,
						r = t.children,
						h = Object.assign({}, f, {
							height: i,
							background: o
						});
					return e.createElement("div", {
						ref: function (t) {
							return n._ref = t
						},
						style: h
					}, e.Children.only(r))
				}
			}]), t
		}(),
		v = (i(1106), i(1015)),
		_ = function () {
			function n(n, t) {
				for (var i = 0; i < t.length; i++) {
					var e = t[i];
					e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
				}
			}
			return function (t, i, e) {
				return i && n(t.prototype, i), e && n(t, e), t
			}
		}();
	var b = {
			position: "relative",
			whiteSpace: "nowrap"
		},
		T = {
			minWidth: 90,
			display: "inline-block"
		},
		C = {
			width: 1,
			height: 2,
			position: "absolute",
			left: 0,
			bottom: 0,
			transformOrigin: 0
		},
		N = (d = m = function (n) {
			function t(n) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var i = function (n, t) {
					if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? n : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
				return i._tabListRef = null, i._tabGuidRef = null, i._measurements = null, i._containerWidth = 0, i._scrollWidth = 0, i._shouldSyncTabContainer = !1, i._syncTabScrollLeft = null, i._offScroll = null, i._noAnimateScroll = !1, i._onTransitionEndCallback = null, i._ignoreScroll = !1, i._tabGuideTransitionEndHandler = null, i.onTabIndicatorTransitionEnd = i.onTabIndicatorTransitionEnd.bind(i), i.setRef = i.setRef.bind(i), i.onScroll = i.onScroll.bind(i), i.syncScroll = i.syncScroll.bind(i), i
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, e["Component"]), _(t, [{
				key: "syncScroll",
				value: function (n, t, i) {
					if (this._tabGuidRef && this._tabListRef && this._measurements) {
						var e = Math.floor(n),
							o = Math.ceil(n),
							r = this._measurements[e],
							h = this._measurements[o],
							a = n - e;
						if (this._onTransitionEndCallback = i, this.syncTabIndicator(r, h, a, t, n), this._shouldSyncTabContainer) {
							null === this._syncTabScrollLeft && this._tabListRef && this._tabListRef.parentNode && (this._syncTabScrollLeft = this._tabListRef.parentNode.scrollLeft);
							var c = this.getSnapScrollConfig().syncTabContainer({
								measurements: this._measurements,
								index: n,
								currentIndex: this.props.index,
								containerWidth: this._containerWidth,
								scrollWidth: this._scrollWidth,
								scrollLeft: this._syncTabScrollLeft
							});
							"end" === t ? s.b(this._tabListRef, this.context.snapTransition) : s.b(this._tabListRef, null), s.a(this._tabListRef, "translate(" + -c + "px, 0)"), this._noAnimateScroll = !0
						}
					}
				}
			}, {
				key: "syncTabIndicator",
				value: function (n, t, i, e, o) {
					var r = this;
					if (this._tabGuidRef) {
						if (!n) {
							if (!t) {
								t = {
									left: -50,
									width: 50
								}
							}
							n = {
								left: -t.width,
								width: t.width
							}
						}
						t || (t = {
							left: 2 * n.width + n.left,
							width: n.width
						}), this._tabGuidRef.style.opacity = "1", s.b(this._tabGuidRef, "move" === e ? "all 0s ease 0s" : this.context.snapTransition);
						var h = void 0,
							a = void 0;
						"move" === e ? (h = u(n.left, t.left, i), a = u(n.width, t.width, i)) : (h = t.left, a = t.width);
						var c = "translate(" + h + "px, 0) scale(" + a + ",1)";
						if (s.a(this._tabGuidRef, c), "end" === e) {
							var g = function n() {
								r.onTabIndicatorTransitionEnd(o), r._tabGuidRef && (r._tabGuidRef.removeEventListener("transitionend", n), r._tabGuideTransitionEndHandler = null)
							};
							this._tabGuideTransitionEndHandler && this._tabGuidRef.removeEventListener("transitionend", this._tabGuideTransitionEndHandler), this._tabGuideTransitionEndHandler = g, this._tabGuidRef.addEventListener("transitionend", g)
						} else this._tabGuideTransitionEndHandler && (this._tabGuidRef.removeEventListener("transitionend", this._tabGuideTransitionEndHandler), this._tabGuideTransitionEndHandler = null)
					}
				}
			}, {
				key: "calculateMeasurements",
				value: function () {
					var n = this;
					this._tabListRef && this._tabListRef.parentNode && (this._containerWidth = this._tabListRef.parentNode.offsetWidth, this._scrollWidth = this._tabListRef.parentNode.scrollWidth, this._measurements = Array.from(this._tabListRef.querySelectorAll(".stardust-swipeable-tabs_tab")).map(function (t) {
						return {
							left: t.offsetLeft - n._tabListRef.offsetLeft,
							width: t.offsetWidth
						}
					}))
				}
			}, {
				key: "getSnapScrollConfig",
				value: function () {
					return this.props.scrollConfig ? this.props.scrollConfig : this.props.flexibleWidth ? l.a : g.a
				}
			}, {
				key: "onTabIndicatorTransitionEnd",
				value: function (n) {
					if (this._tabListRef && this._tabListRef.parentNode) {
						var t = this._tabListRef.parentNode.scrollLeft,
							i = this.getSnapScrollConfig().snapScroll({
								scrollLeft: t,
								containerWidth: this._containerWidth,
								measurements: this._measurements,
								index: n
							});
						"number" != typeof i && (i = t), i = Math.min(this._scrollWidth - this._containerWidth, Math.max(0, i)), this.toOffsetScrollBy(i - t)
					}
				}
			}, {
				key: "onTransitionEnd",
				value: function () {
					this._onTransitionEndCallback && (this._onTransitionEndCallback(), this._onTransitionEndCallback = null)
				}
			}, {
				key: "toOffsetScrollBy",
				value: function (n) {
					var t = this;
					if (0 !== n) {
						if (this._tabListRef && this._tabListRef.parentNode) {
							var i = this._tabListRef.parentNode,
								e = i.scrollLeft + n;
							this._noAnimateScroll ? (s.b(this._tabListRef, ""), s.a(this._tabListRef, "translate(0, 0)"), this._noAnimateScroll = !1, this.onTransitionEnd()) : (s.b(this._tabListRef, ""), s.a(this._tabListRef, "translate(" + n + "px, 0)"), requestAnimationFrame(function () {
								requestAnimationFrame(function () {
									s.b(t._tabListRef, t.context.snapTransition), s.a(t._tabListRef, "");
									t._tabListRef && t._tabListRef.addEventListener("transitionend", function n() {
										t.onTransitionEnd(), t._tabListRef && t._tabListRef.removeEventListener("transitionend", n)
									})
								})
							})), i.scrollLeft = e, this._ignoreScroll = !0, this._shouldSyncTabContainer = !0, this._syncTabScrollLeft = null
						}
					} else this.onTransitionEnd()
				}
			}, {
				key: "shouldComponentUpdate",
				value: function (n) {
					return e.Children.count(n.children) !== e.Children.count(this.props.children)
				}
			}, {
				key: "setRef",
				value: function (n) {
					this._tabListRef = n, this.calculateMeasurements(), n ? this._offScroll = Object(c.a)(n.parentNode, this.onScroll) : "function" == typeof this._offScroll && this._offScroll()
				}
			}, {
				key: "onScroll",
				value: function () {
					this._ignoreScroll ? this._ignoreScroll = !1 : (this._shouldSyncTabContainer = !1, this._noAnimateScroll = !1)
				}
			}, {
				key: "render",
				value: function () {
					var n = this,
						t = this.props,
						i = t.tabBackground,
						o = t.tabHeight,
						h = t.tabIndicatorStyle,
						a = t.children,
						c = t.flexibleWidth,
						u = t.tabPerRow,
						s = t.onChangeIndex,
						g = t.tabContainerWidth,
						l = t.tabHeaderClassName,
						p = t.innerRef,
						m = t.lastTabItemOffset,
						d = t.index,
						f = {
							backgroundColor: i,
							width: g
						},
						v = Object.assign({}, b, {
							height: o
						}),
						_ = Object.assign({}, C, h, {
							opacity: -1 === d ? "0" : "1"
						}),
						N = Object.assign({}, T, !c && u ? {
							width: (100 / u).toFixed(2) + "%"
						} : {});
					return e.createElement("div", {
						ref: p,
						className: r()("stardust-swipeable-tabs__tab-header--outer", l),
						style: {
							height: o
						}
					}, e.createElement("div", {
						className: "stardust-swipeable-tabs__tab-header",
						style: f
					}, e.createElement("div", {
						style: v,
						ref: this.setRef,
						className: "stardust-swipeable-tabs__tab-list"
					}, e.createElement("i", {
						style: _,
						ref: function (t) {
							return n._tabGuidRef = t
						}
					}), a.map(function (n, t) {
						return e.createElement("div", {
							key: t,
							className: "stardust-swipeable-tabs_tab",
							onClick: function () {
								return s(t)
							},
							style: N
						}, e.createElement(y, {
							height: o,
							index: t
						}, n))
					}), m ? e.createElement("div", {
						style: {
							width: m,
							display: "inline-block"
						}
					}) : null)))
				}
			}]), t
		}(), m.contextTypes = {
			snapTransition: a.a.string
		}, m.defaultProps = {
			top: v.b,
			tabHeight: v.a,
			tabBackground: "white",
			lastTabItemOffset: 0
		}, d);
	t.a = N, g.a, l.a
}, function (n, t, i) {
	"use strict";
	var e = i(907);
	t.a = function (n, t) {
		if (n) {
			var i = !!e.c && {
				passive: !0
			};
			return n.addEventListener("scroll", t, i),
				function () {
					n && n.removeEventListener("scroll", t, i)
				}
		}
	}
}, function (n, t, i) {
	"use strict";
	i.d(t, "a", function () {
		return e
	}), i.d(t, "b", function () {
		return o
	});
	var e = 38,
		o = 0
}, function (n, t, i) {
	"use strict";
	t.a = function (n) {
		var t = n.sold,
			i = n.total,
			e = n.soldOutTime,
			r = void 0 === e ? 0 : e,
			c = n.startTime,
			g = void 0 === c ? 0 : c,
			l = n.layout,
			p = 100 * (i - t) / i,
			m = 0 !== i ? Math.ceil(Math.floor(2 * p) / 2) : 100,
			d = i > 0 && t === i,
			f = d ? Math.floor((r - g) / (s * u)) : null,
			y = d && 0 === f ? r - g < 60 ? 1 : Math.floor((r - g) / s) % u : null;
		return d ? o.a.createElement("div", {
			className: h()("flash-sale-sold-out", "flash-sale-sold-out--" + l, "typo-m12")
		}, "home-page" === l ? Object(a.c)("label_flashsale_n_sold", {
			n: i
		}) : y ? 1 === y ? Object(a.c)("label_amount_sold_out_in_1_min", {
			amount: i
		}) : Object(a.c)("label_amount_sold_out_in_n_mins", {
			minutes: y,
			amount: i
		}) : f ? 1 === f ? Object(a.c)("label_amount_sold_out_in_1_hour", {
			hours: 1,
			amount: i
		}) : Object(a.c)("label_amount_sold_out_in_n_hours", {
			hours: f,
			amount: i
		}) : null) : o.a.createElement("div", {
			className: "flash-sale-progress-bar__wrapper flash-sale-progress-bar__wrapper--" + l
		}, o.a.createElement("div", {
			className: h()("flash-sale-progress-bar", "flash-sale-progress-bar--" + l)
		}, o.a.createElement("div", {
			className: h()("flash-sale-progress-bar__text", {
				"flash-sale-progress-bar__text--selling-fast": m <= 15
			})
		}, m > 15 ? Object(a.c)("label_flashsale_n_sold", {
			n: t
		}) : Object(a.c)("label_flashsale_selling_out")), o.a.createElement("div", {
			className: "flash-sale-progress-bar__complement-wrapper"
		}, o.a.createElement("div", {
			className: "flash-sale-progress-bar__complement-sizer",
			style: {
				width: m + "%"
			}
		}, o.a.createElement("div", {
			className: "flash-sale-progress-bar__complement-color"
		}))), p <= 50 && o.a.createElement("div", {
			className: "flash-sale-progress-bar__fire"
		})))
	};
	var e = i(1),
		o = i.n(e),
		r = i(90),
		h = i.n(r),
		a = i(89),
		c = i(1109),
		u = (i.n(c), 60),
		s = 60
}, , , , , , function (n, t, i) {
	"use strict";
	t.a = {
		REQ: 0,
		OK: 1,
		ERR: 2
	}
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (n, t, i) {
	"use strict";
	t.__esModule = !0, t.getChildMapping = function (n, t) {
		var i = Object.create(null);
		n && e.Children.map(n, function (n) {
			return n
		}).forEach(function (n) {
			i[n.key] = function (n) {
				return t && (0, e.isValidElement)(n) ? t(n) : n
			}(n)
		});
		return i
	}, t.mergeChildMappings = function (n, t) {
		function i(i) {
			return i in t ? t[i] : n[i]
		}
		n = n || {}, t = t || {};
		var e = Object.create(null),
			o = [];
		for (var r in n) r in t ? o.length && (e[r] = o, o = []) : o.push(r);
		var h = void 0,
			a = {};
		for (var c in t) {
			if (e[c])
				for (h = 0; h < e[c].length; h++) {
					var u = e[c][h];
					a[e[c][h]] = i(u)
				}
			a[c] = i(c)
		}
		for (h = 0; h < o.length; h++) a[o[h]] = i(o[h]);
		return a
	};
	var e = i(1)
}, function (n, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function (n, t) {
		n.classList ? n.classList.add(t) : (0, r.default)(n, t) || ("string" == typeof n.className ? n.className = n.className + " " + t : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + t))
	};
	var e, o = i(1059),
		r = (e = o) && e.__esModule ? e : {
			default: e
		};
	n.exports = t.default
}, function (n, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function (n, t) {
		return n.classList ? !!t && n.classList.contains(t) : -1 !== (" " + (n.className.baseVal || n.className) + " ").indexOf(" " + t + " ")
	}, n.exports = t.default
}, function (n, t, i) {
	"use strict";

	function e(n, t) {
		return n.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
	}
	n.exports = function (n, t) {
		n.classList ? n.classList.remove(t) : "string" == typeof n.className ? n.className = e(n.className, t) : n.setAttribute("class", e(n.className && n.className.baseVal || "", t))
	}
}, function (n, t, i) {
	"use strict";
	t.__esModule = !0, t.EXITING = t.ENTERED = t.ENTERING = t.EXITED = t.UNMOUNTED = void 0;
	var e = function (n) {
			if (n && n.__esModule) return n;
			var t = {};
			if (null != n)
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
			return t.default = n, t
		}(i(4)),
		o = h(i(1)),
		r = h(i(92));
	i(988);

	function h(n) {
		return n && n.__esModule ? n : {
			default: n
		}
	}
	var a = t.UNMOUNTED = "unmounted",
		c = t.EXITED = "exited",
		u = t.ENTERING = "entering",
		s = t.ENTERED = "entered",
		g = t.EXITING = "exiting",
		l = function (n) {
			function t(i, e) {
				! function (n, t) {
					if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				var o = function (n, t) {
						if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? n : t
					}(this, n.call(this, i, e)),
					r = e.transitionGroup,
					h = r && !r.isMounting ? i.enter : i.appear,
					g = void 0;
				return o.nextStatus = null, i.in ? h ? (g = c, o.nextStatus = u) : g = s : g = i.unmountOnExit || i.mountOnEnter ? a : c, o.state = {
					status: g
				}, o.nextCallback = null, o
			}
			return function (n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				n.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
			}(t, n), t.prototype.getChildContext = function () {
				return {
					transitionGroup: null
				}
			}, t.prototype.componentDidMount = function () {
				this.updateStatus(!0)
			}, t.prototype.componentWillReceiveProps = function (n) {
				var t = (this.pendingState || this.state).status;
				n.in ? (t === a && this.setState({
					status: c
				}), t !== u && t !== s && (this.nextStatus = u)) : t !== u && t !== s || (this.nextStatus = g)
			}, t.prototype.componentDidUpdate = function () {
				this.updateStatus()
			}, t.prototype.componentWillUnmount = function () {
				this.cancelNextCallback()
			}, t.prototype.getTimeouts = function () {
				var n = this.props.timeout,
					t = void 0,
					i = void 0,
					e = void 0;
				return t = i = e = n, null != n && "number" != typeof n && (t = n.exit, i = n.enter, e = n.appear), {
					exit: t,
					enter: i,
					appear: e
				}
			}, t.prototype.updateStatus = function () {
				var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = this.nextStatus;
				if (null !== t) {
					this.nextStatus = null, this.cancelNextCallback();
					var i = r.default.findDOMNode(this);
					t === u ? this.performEnter(i, n) : this.performExit(i)
				} else this.props.unmountOnExit && this.state.status === c && this.setState({
					status: a
				})
			}, t.prototype.performEnter = function (n, t) {
				var i = this,
					e = this.props.enter,
					o = this.context.transitionGroup ? this.context.transitionGroup.isMounting : t,
					r = this.getTimeouts();
				t || e ? (this.props.onEnter(n, o), this.safeSetState({
					status: u
				}, function () {
					i.props.onEntering(n, o), i.onTransitionEnd(n, r.enter, function () {
						i.safeSetState({
							status: s
						}, function () {
							i.props.onEntered(n, o)
						})
					})
				})) : this.safeSetState({
					status: s
				}, function () {
					i.props.onEntered(n)
				})
			}, t.prototype.performExit = function (n) {
				var t = this,
					i = this.props.exit,
					e = this.getTimeouts();
				i ? (this.props.onExit(n), this.safeSetState({
					status: g
				}, function () {
					t.props.onExiting(n), t.onTransitionEnd(n, e.exit, function () {
						t.safeSetState({
							status: c
						}, function () {
							t.props.onExited(n)
						})
					})
				})) : this.safeSetState({
					status: c
				}, function () {
					t.props.onExited(n)
				})
			}, t.prototype.cancelNextCallback = function () {
				null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
			}, t.prototype.safeSetState = function (n, t) {
				var i = this;
				this.pendingState = n, t = this.setNextCallback(t), this.setState(n, function () {
					i.pendingState = null, t()
				})
			}, t.prototype.setNextCallback = function (n) {
				var t = this,
					i = !0;
				return this.nextCallback = function (e) {
					i && (i = !1, t.nextCallback = null, n(e))
				}, this.nextCallback.cancel = function () {
					i = !1
				}, this.nextCallback
			}, t.prototype.onTransitionEnd = function (n, t, i) {
				this.setNextCallback(i), n ? (this.props.addEndListener && this.props.addEndListener(n, this.nextCallback), null != t && setTimeout(this.nextCallback, t)) : setTimeout(this.nextCallback, 0)
			}, t.prototype.render = function () {
				var n = this.state.status;
				if (n === a) return null;
				var t = this.props,
					i = t.children,
					e = function (n, t) {
						var i = {};
						for (var e in n) t.indexOf(e) >= 0 || Object.prototype.hasOwnProperty.call(n, e) && (i[e] = n[e]);
						return i
					}(t, ["children"]);
				if (delete e.in, delete e.mountOnEnter, delete e.unmountOnExit, delete e.appear, delete e.enter, delete e.exit, delete e.timeout, delete e.addEndListener, delete e.onEnter, delete e.onEntering, delete e.onEntered, delete e.onExit, delete e.onExiting, delete e.onExited, "function" == typeof i) return i(n, e);
				var r = o.default.Children.only(i);
				return o.default.cloneElement(r, e)
			}, t
		}(o.default.Component);

	function p() {}
	l.contextTypes = {
		transitionGroup: e.object
	}, l.childContextTypes = {
		transitionGroup: function () {}
	}, l.propTypes = {}, l.defaultProps = { in: !1,
		mountOnEnter: !1,
		unmountOnExit: !1,
		appear: !1,
		enter: !0,
		exit: !0,
		onEnter: p,
		onEntering: p,
		onEntered: p,
		onExit: p,
		onExiting: p,
		onExited: p
	}, l.UNMOUNTED = 0, l.EXITED = 1, l.ENTERING = 2, l.ENTERED = 3, l.EXITING = 4, t.default = l
}, function (n, t) {}, function (n, t, i) {
	"use strict";
	(function (n) {
		i.d(t, "a", function () {
			return a
		}), i.d(t, "b", function () {
			return c
		});
		var e = i(228),
			o = (i.n(e), new n.IntersectionObserver(function (n, t) {
				n.forEach(function (n) {
					var i = n.target;
					n.intersectionRatio < .5 ? h.has(i) && (clearTimeout(h.get(i)), h.delete(i)) : r.has(i) ? h.set(i, setTimeout(function () {
						h.delete(i);
						var n = r.get(i);
						n && "function" == typeof n && (t.unobserve(i), n())
					}, 1e3)) : console.error
				})
			}, {
				threshold: .5
			})),
			r = new WeakMap,
			h = new WeakMap,
			a = function (n, t) {
				r.has(n) || (r.set(n, t), o.observe(n), setTimeout(function () {
					c(n)
				}, 12e4))
			},
			c = function (n) {
				o.unobserve(n), r.delete(n)
			}
	}).call(t, i(23))
}, , , , , , function (n, t) {}, , function (n, t) {}, , , , , , function (n, t) {}, function (n, t) {}, function (n, t) {}, function (n, t) {}, function (n, t) {}, function (n, t) {}, function (n, t, i) {
	n.exports = i.p + "76ce10f0e8eb1a5cbdef72bf247fd698.png"
}, function (n, t, i) {
	n.exports = i.p + "cb611f954997e6d539605e6418cc7582.png"
}, function (n, t) {}, function (n, t) {}, , , , , , , , , function (n, t) {}, function (n, t) {}, , , , , , function (n, t) {}, , , , function (n, t) {}, , function (n, t) {}, function (n, t) {}, function (n, t) {
	n.exports = {
		imageWithRank: "_2OyaMR"
	}
}, , , , , , , , , , , , , function (n, t) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (n, t) {}]));
//# sourceMappingURL=https://shopee.vn/m/assets/common-bundle.0fc5f8926355b88c1004.js.map