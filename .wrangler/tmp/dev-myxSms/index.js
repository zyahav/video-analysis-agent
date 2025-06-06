var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-nZ7DK4/strip-cf-connecting-ip-header.js
function stripCfConnectingIPHeader(input, init) {
  const request = new Request(input, init);
  request.headers.delete("CF-Connecting-IP");
  return request;
}
var init_strip_cf_connecting_ip_header = __esm({
  ".wrangler/tmp/bundle-nZ7DK4/strip-cf-connecting-ip-header.js"() {
    __name(stripCfConnectingIPHeader, "stripCfConnectingIPHeader");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        return Reflect.apply(target, thisArg, [
          stripCfConnectingIPHeader.apply(null, argArray)
        ]);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/xstate/dev/dist/xstate-dev.cjs.js
var require_xstate_dev_cjs = __commonJS({
  "node_modules/xstate/dev/dist/xstate-dev.cjs.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    function getGlobal() {
      if (typeof globalThis !== "undefined") {
        return globalThis;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
    }
    __name(getGlobal, "getGlobal");
    function getDevTools() {
      const w = getGlobal();
      if (w.__xstate__) {
        return w.__xstate__;
      }
      return void 0;
    }
    __name(getDevTools, "getDevTools");
    function registerService(service) {
      if (typeof window === "undefined") {
        return;
      }
      const devTools = getDevTools();
      if (devTools) {
        devTools.register(service);
      }
    }
    __name(registerService, "registerService");
    var devToolsAdapter = /* @__PURE__ */ __name((service) => {
      if (typeof window === "undefined") {
        return;
      }
      const devTools = getDevTools();
      if (devTools) {
        devTools.register(service);
      }
    }, "devToolsAdapter");
    exports.devToolsAdapter = devToolsAdapter;
    exports.getGlobal = getGlobal;
    exports.registerService = registerService;
  }
});

// node_modules/xstate/dist/raise-5872b9e8.cjs.js
var require_raise_5872b9e8_cjs = __commonJS({
  "node_modules/xstate/dist/raise-5872b9e8.cjs.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    var dev_dist_xstateDev = require_xstate_dev_cjs();
    var Mailbox = class {
      static {
        __name(this, "Mailbox");
      }
      constructor(_process) {
        this._process = _process;
        this._active = false;
        this._current = null;
        this._last = null;
      }
      start() {
        this._active = true;
        this.flush();
      }
      clear() {
        if (this._current) {
          this._current.next = null;
          this._last = this._current;
        }
      }
      enqueue(event) {
        const enqueued = {
          value: event,
          next: null
        };
        if (this._current) {
          this._last.next = enqueued;
          this._last = enqueued;
          return;
        }
        this._current = enqueued;
        this._last = enqueued;
        if (this._active) {
          this.flush();
        }
      }
      flush() {
        while (this._current) {
          const consumed = this._current;
          this._process(consumed.value);
          this._current = consumed.next;
        }
        this._last = null;
      }
    };
    var STATE_DELIMITER = ".";
    var TARGETLESS_KEY = "";
    var NULL_EVENT = "";
    var STATE_IDENTIFIER = "#";
    var WILDCARD = "*";
    var XSTATE_INIT = "xstate.init";
    var XSTATE_ERROR = "xstate.error";
    var XSTATE_STOP = "xstate.stop";
    function createAfterEvent(delayRef, id) {
      return {
        type: `xstate.after.${delayRef}.${id}`
      };
    }
    __name(createAfterEvent, "createAfterEvent");
    function createDoneStateEvent(id, output) {
      return {
        type: `xstate.done.state.${id}`,
        output
      };
    }
    __name(createDoneStateEvent, "createDoneStateEvent");
    function createDoneActorEvent(invokeId, output) {
      return {
        type: `xstate.done.actor.${invokeId}`,
        output,
        actorId: invokeId
      };
    }
    __name(createDoneActorEvent, "createDoneActorEvent");
    function createErrorActorEvent(id, error) {
      return {
        type: `xstate.error.actor.${id}`,
        error,
        actorId: id
      };
    }
    __name(createErrorActorEvent, "createErrorActorEvent");
    function createInitEvent(input) {
      return {
        type: XSTATE_INIT,
        input
      };
    }
    __name(createInitEvent, "createInitEvent");
    function reportUnhandledError(err) {
      setTimeout(() => {
        throw err;
      });
    }
    __name(reportUnhandledError, "reportUnhandledError");
    var symbolObservable = (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
    function matchesState2(parentStateId, childStateId) {
      const parentStateValue = toStateValue(parentStateId);
      const childStateValue = toStateValue(childStateId);
      if (typeof childStateValue === "string") {
        if (typeof parentStateValue === "string") {
          return childStateValue === parentStateValue;
        }
        return false;
      }
      if (typeof parentStateValue === "string") {
        return parentStateValue in childStateValue;
      }
      return Object.keys(parentStateValue).every((key) => {
        if (!(key in childStateValue)) {
          return false;
        }
        return matchesState2(parentStateValue[key], childStateValue[key]);
      });
    }
    __name(matchesState2, "matchesState");
    function toStatePath(stateId) {
      if (isArray(stateId)) {
        return stateId;
      }
      const result = [];
      let segment = "";
      for (let i = 0; i < stateId.length; i++) {
        const char = stateId.charCodeAt(i);
        switch (char) {
          // \
          case 92:
            segment += stateId[i + 1];
            i++;
            continue;
          // .
          case 46:
            result.push(segment);
            segment = "";
            continue;
        }
        segment += stateId[i];
      }
      result.push(segment);
      return result;
    }
    __name(toStatePath, "toStatePath");
    function toStateValue(stateValue) {
      if (isMachineSnapshot2(stateValue)) {
        return stateValue.value;
      }
      if (typeof stateValue !== "string") {
        return stateValue;
      }
      const statePath = toStatePath(stateValue);
      return pathToStateValue2(statePath);
    }
    __name(toStateValue, "toStateValue");
    function pathToStateValue2(statePath) {
      if (statePath.length === 1) {
        return statePath[0];
      }
      const value = {};
      let marker = value;
      for (let i = 0; i < statePath.length - 1; i++) {
        if (i === statePath.length - 2) {
          marker[statePath[i]] = statePath[i + 1];
        } else {
          const previous = marker;
          marker = {};
          previous[statePath[i]] = marker;
        }
      }
      return value;
    }
    __name(pathToStateValue2, "pathToStateValue");
    function mapValues(collection, iteratee) {
      const result = {};
      const collectionKeys = Object.keys(collection);
      for (let i = 0; i < collectionKeys.length; i++) {
        const key = collectionKeys[i];
        result[key] = iteratee(collection[key], key, collection, i);
      }
      return result;
    }
    __name(mapValues, "mapValues");
    function toArrayStrict(value) {
      if (isArray(value)) {
        return value;
      }
      return [value];
    }
    __name(toArrayStrict, "toArrayStrict");
    function toArray(value) {
      if (value === void 0) {
        return [];
      }
      return toArrayStrict(value);
    }
    __name(toArray, "toArray");
    function resolveOutput(mapper, context, event, self2) {
      if (typeof mapper === "function") {
        return mapper({
          context,
          event,
          self: self2
        });
      }
      return mapper;
    }
    __name(resolveOutput, "resolveOutput");
    function isArray(value) {
      return Array.isArray(value);
    }
    __name(isArray, "isArray");
    function isErrorActorEvent(event) {
      return event.type.startsWith("xstate.error.actor");
    }
    __name(isErrorActorEvent, "isErrorActorEvent");
    function toTransitionConfigArray(configLike) {
      return toArrayStrict(configLike).map((transitionLike) => {
        if (typeof transitionLike === "undefined" || typeof transitionLike === "string") {
          return {
            target: transitionLike
          };
        }
        return transitionLike;
      });
    }
    __name(toTransitionConfigArray, "toTransitionConfigArray");
    function normalizeTarget(target) {
      if (target === void 0 || target === TARGETLESS_KEY) {
        return void 0;
      }
      return toArray(target);
    }
    __name(normalizeTarget, "normalizeTarget");
    function toObserver2(nextHandler, errorHandler2, completionHandler) {
      const isObserver = typeof nextHandler === "object";
      const self2 = isObserver ? nextHandler : void 0;
      return {
        next: (isObserver ? nextHandler.next : nextHandler)?.bind(self2),
        error: (isObserver ? nextHandler.error : errorHandler2)?.bind(self2),
        complete: (isObserver ? nextHandler.complete : completionHandler)?.bind(self2)
      };
    }
    __name(toObserver2, "toObserver");
    function createInvokeId(stateNodeId, index) {
      return `${index}.${stateNodeId}`;
    }
    __name(createInvokeId, "createInvokeId");
    function resolveReferencedActor(machine, src) {
      const match = src.match(/^xstate\.invoke\.(\d+)\.(.*)/);
      if (!match) {
        return machine.implementations.actors[src];
      }
      const [, indexStr, nodeId] = match;
      const node = machine.getStateNodeById(nodeId);
      const invokeConfig = node.config.invoke;
      return (Array.isArray(invokeConfig) ? invokeConfig[indexStr] : invokeConfig).src;
    }
    __name(resolveReferencedActor, "resolveReferencedActor");
    function getAllOwnEventDescriptors(snapshot) {
      return [.../* @__PURE__ */ new Set([...snapshot._nodes.flatMap((sn) => sn.ownEvents)])];
    }
    __name(getAllOwnEventDescriptors, "getAllOwnEventDescriptors");
    function createScheduledEventId(actorRef, id) {
      return `${actorRef.sessionId}.${id}`;
    }
    __name(createScheduledEventId, "createScheduledEventId");
    var idCounter = 0;
    function createSystem(rootActor, options) {
      const children = /* @__PURE__ */ new Map();
      const keyedActors = /* @__PURE__ */ new Map();
      const reverseKeyedActors = /* @__PURE__ */ new WeakMap();
      const inspectionObservers = /* @__PURE__ */ new Set();
      const timerMap = {};
      const {
        clock,
        logger
      } = options;
      const scheduler = {
        schedule: /* @__PURE__ */ __name((source, target, event, delay, id = Math.random().toString(36).slice(2)) => {
          const scheduledEvent = {
            source,
            target,
            event,
            delay,
            id,
            startedAt: Date.now()
          };
          const scheduledEventId = createScheduledEventId(source, id);
          system._snapshot._scheduledEvents[scheduledEventId] = scheduledEvent;
          const timeout = clock.setTimeout(() => {
            delete timerMap[scheduledEventId];
            delete system._snapshot._scheduledEvents[scheduledEventId];
            system._relay(source, target, event);
          }, delay);
          timerMap[scheduledEventId] = timeout;
        }, "schedule"),
        cancel: /* @__PURE__ */ __name((source, id) => {
          const scheduledEventId = createScheduledEventId(source, id);
          const timeout = timerMap[scheduledEventId];
          delete timerMap[scheduledEventId];
          delete system._snapshot._scheduledEvents[scheduledEventId];
          if (timeout !== void 0) {
            clock.clearTimeout(timeout);
          }
        }, "cancel"),
        cancelAll: /* @__PURE__ */ __name((actorRef) => {
          for (const scheduledEventId in system._snapshot._scheduledEvents) {
            const scheduledEvent = system._snapshot._scheduledEvents[scheduledEventId];
            if (scheduledEvent.source === actorRef) {
              scheduler.cancel(actorRef, scheduledEvent.id);
            }
          }
        }, "cancelAll")
      };
      const sendInspectionEvent = /* @__PURE__ */ __name((event) => {
        if (!inspectionObservers.size) {
          return;
        }
        const resolvedInspectionEvent = {
          ...event,
          rootId: rootActor.sessionId
        };
        inspectionObservers.forEach((observer) => observer.next?.(resolvedInspectionEvent));
      }, "sendInspectionEvent");
      const system = {
        _snapshot: {
          _scheduledEvents: (options?.snapshot && options.snapshot.scheduler) ?? {}
        },
        _bookId: /* @__PURE__ */ __name(() => `x:${idCounter++}`, "_bookId"),
        _register: /* @__PURE__ */ __name((sessionId, actorRef) => {
          children.set(sessionId, actorRef);
          return sessionId;
        }, "_register"),
        _unregister: /* @__PURE__ */ __name((actorRef) => {
          children.delete(actorRef.sessionId);
          const systemId = reverseKeyedActors.get(actorRef);
          if (systemId !== void 0) {
            keyedActors.delete(systemId);
            reverseKeyedActors.delete(actorRef);
          }
        }, "_unregister"),
        get: /* @__PURE__ */ __name((systemId) => {
          return keyedActors.get(systemId);
        }, "get"),
        _set: /* @__PURE__ */ __name((systemId, actorRef) => {
          const existing = keyedActors.get(systemId);
          if (existing && existing !== actorRef) {
            throw new Error(`Actor with system ID '${systemId}' already exists.`);
          }
          keyedActors.set(systemId, actorRef);
          reverseKeyedActors.set(actorRef, systemId);
        }, "_set"),
        inspect: /* @__PURE__ */ __name((observerOrFn) => {
          const observer = toObserver2(observerOrFn);
          inspectionObservers.add(observer);
          return {
            unsubscribe() {
              inspectionObservers.delete(observer);
            }
          };
        }, "inspect"),
        _sendInspectionEvent: sendInspectionEvent,
        _relay: /* @__PURE__ */ __name((source, target, event) => {
          system._sendInspectionEvent({
            type: "@xstate.event",
            sourceRef: source,
            actorRef: target,
            event
          });
          target._send(event);
        }, "_relay"),
        scheduler,
        getSnapshot: /* @__PURE__ */ __name(() => {
          return {
            _scheduledEvents: {
              ...system._snapshot._scheduledEvents
            }
          };
        }, "getSnapshot"),
        start: /* @__PURE__ */ __name(() => {
          const scheduledEvents = system._snapshot._scheduledEvents;
          system._snapshot._scheduledEvents = {};
          for (const scheduledId in scheduledEvents) {
            const {
              source,
              target,
              event,
              delay,
              id
            } = scheduledEvents[scheduledId];
            scheduler.schedule(source, target, event, delay, id);
          }
        }, "start"),
        _clock: clock,
        _logger: logger
      };
      return system;
    }
    __name(createSystem, "createSystem");
    var executingCustomAction = false;
    var $$ACTOR_TYPE = 1;
    var ProcessingStatus = /* @__PURE__ */ function(ProcessingStatus2) {
      ProcessingStatus2[ProcessingStatus2["NotStarted"] = 0] = "NotStarted";
      ProcessingStatus2[ProcessingStatus2["Running"] = 1] = "Running";
      ProcessingStatus2[ProcessingStatus2["Stopped"] = 2] = "Stopped";
      return ProcessingStatus2;
    }({});
    var defaultOptions = {
      clock: {
        setTimeout: /* @__PURE__ */ __name((fn, ms) => {
          return setTimeout(fn, ms);
        }, "setTimeout"),
        clearTimeout: /* @__PURE__ */ __name((id) => {
          return clearTimeout(id);
        }, "clearTimeout")
      },
      logger: console.log.bind(console),
      devTools: false
    };
    var Actor2 = class {
      static {
        __name(this, "Actor");
      }
      /**
       * Creates a new actor instance for the given logic with the provided options,
       * if any.
       *
       * @param logic The logic to create an actor from
       * @param options Actor options
       */
      constructor(logic, options) {
        this.logic = logic;
        this._snapshot = void 0;
        this.clock = void 0;
        this.options = void 0;
        this.id = void 0;
        this.mailbox = new Mailbox(this._process.bind(this));
        this.observers = /* @__PURE__ */ new Set();
        this.eventListeners = /* @__PURE__ */ new Map();
        this.logger = void 0;
        this._processingStatus = ProcessingStatus.NotStarted;
        this._parent = void 0;
        this._syncSnapshot = void 0;
        this.ref = void 0;
        this._actorScope = void 0;
        this._systemId = void 0;
        this.sessionId = void 0;
        this.system = void 0;
        this._doneEvent = void 0;
        this.src = void 0;
        this._deferred = [];
        const resolvedOptions = {
          ...defaultOptions,
          ...options
        };
        const {
          clock,
          logger,
          parent,
          syncSnapshot,
          id,
          systemId,
          inspect
        } = resolvedOptions;
        this.system = parent ? parent.system : createSystem(this, {
          clock,
          logger
        });
        if (inspect && !parent) {
          this.system.inspect(toObserver2(inspect));
        }
        this.sessionId = this.system._bookId();
        this.id = id ?? this.sessionId;
        this.logger = options?.logger ?? this.system._logger;
        this.clock = options?.clock ?? this.system._clock;
        this._parent = parent;
        this._syncSnapshot = syncSnapshot;
        this.options = resolvedOptions;
        this.src = resolvedOptions.src ?? logic;
        this.ref = this;
        this._actorScope = {
          self: this,
          id: this.id,
          sessionId: this.sessionId,
          logger: this.logger,
          defer: /* @__PURE__ */ __name((fn) => {
            this._deferred.push(fn);
          }, "defer"),
          system: this.system,
          stopChild: /* @__PURE__ */ __name((child) => {
            if (child._parent !== this) {
              throw new Error(`Cannot stop child actor ${child.id} of ${this.id} because it is not a child`);
            }
            child._stop();
          }, "stopChild"),
          emit: /* @__PURE__ */ __name((emittedEvent) => {
            const listeners = this.eventListeners.get(emittedEvent.type);
            const wildcardListener = this.eventListeners.get("*");
            if (!listeners && !wildcardListener) {
              return;
            }
            const allListeners = [...listeners ? listeners.values() : [], ...wildcardListener ? wildcardListener.values() : []];
            for (const handler of allListeners) {
              handler(emittedEvent);
            }
          }, "emit"),
          actionExecutor: /* @__PURE__ */ __name((action) => {
            const exec = /* @__PURE__ */ __name(() => {
              this._actorScope.system._sendInspectionEvent({
                type: "@xstate.action",
                actorRef: this,
                action: {
                  type: action.type,
                  params: action.params
                }
              });
              if (!action.exec) {
                return;
              }
              const saveExecutingCustomAction = executingCustomAction;
              try {
                executingCustomAction = true;
                action.exec(action.info, action.params);
              } finally {
                executingCustomAction = saveExecutingCustomAction;
              }
            }, "exec");
            if (this._processingStatus === ProcessingStatus.Running) {
              exec();
            } else {
              this._deferred.push(exec);
            }
          }, "actionExecutor")
        };
        this.send = this.send.bind(this);
        this.system._sendInspectionEvent({
          type: "@xstate.actor",
          actorRef: this
        });
        if (systemId) {
          this._systemId = systemId;
          this.system._set(systemId, this);
        }
        this._initState(options?.snapshot ?? options?.state);
        if (systemId && this._snapshot.status !== "active") {
          this.system._unregister(this);
        }
      }
      _initState(persistedState) {
        try {
          this._snapshot = persistedState ? this.logic.restoreSnapshot ? this.logic.restoreSnapshot(persistedState, this._actorScope) : persistedState : this.logic.getInitialSnapshot(this._actorScope, this.options?.input);
        } catch (err) {
          this._snapshot = {
            status: "error",
            output: void 0,
            error: err
          };
        }
      }
      update(snapshot, event) {
        this._snapshot = snapshot;
        let deferredFn;
        while (deferredFn = this._deferred.shift()) {
          try {
            deferredFn();
          } catch (err) {
            this._deferred.length = 0;
            this._snapshot = {
              ...snapshot,
              status: "error",
              error: err
            };
          }
        }
        switch (this._snapshot.status) {
          case "active":
            for (const observer of this.observers) {
              try {
                observer.next?.(snapshot);
              } catch (err) {
                reportUnhandledError(err);
              }
            }
            break;
          case "done":
            for (const observer of this.observers) {
              try {
                observer.next?.(snapshot);
              } catch (err) {
                reportUnhandledError(err);
              }
            }
            this._stopProcedure();
            this._complete();
            this._doneEvent = createDoneActorEvent(this.id, this._snapshot.output);
            if (this._parent) {
              this.system._relay(this, this._parent, this._doneEvent);
            }
            break;
          case "error":
            this._error(this._snapshot.error);
            break;
        }
        this.system._sendInspectionEvent({
          type: "@xstate.snapshot",
          actorRef: this,
          event,
          snapshot
        });
      }
      /**
       * Subscribe an observer to an actor’s snapshot values.
       *
       * @remarks
       * The observer will receive the actor’s snapshot value when it is emitted.
       * The observer can be:
       *
       * - A plain function that receives the latest snapshot, or
       * - An observer object whose `.next(snapshot)` method receives the latest
       *   snapshot
       *
       * @example
       *
       * ```ts
       * // Observer as a plain function
       * const subscription = actor.subscribe((snapshot) => {
       *   console.log(snapshot);
       * });
       * ```
       *
       * @example
       *
       * ```ts
       * // Observer as an object
       * const subscription = actor.subscribe({
       *   next(snapshot) {
       *     console.log(snapshot);
       *   },
       *   error(err) {
       *     // ...
       *   },
       *   complete() {
       *     // ...
       *   }
       * });
       * ```
       *
       * The return value of `actor.subscribe(observer)` is a subscription object
       * that has an `.unsubscribe()` method. You can call
       * `subscription.unsubscribe()` to unsubscribe the observer:
       *
       * @example
       *
       * ```ts
       * const subscription = actor.subscribe((snapshot) => {
       *   // ...
       * });
       *
       * // Unsubscribe the observer
       * subscription.unsubscribe();
       * ```
       *
       * When the actor is stopped, all of its observers will automatically be
       * unsubscribed.
       *
       * @param observer - Either a plain function that receives the latest
       *   snapshot, or an observer object whose `.next(snapshot)` method receives
       *   the latest snapshot
       */
      subscribe(nextListenerOrObserver, errorListener, completeListener) {
        const observer = toObserver2(nextListenerOrObserver, errorListener, completeListener);
        if (this._processingStatus !== ProcessingStatus.Stopped) {
          this.observers.add(observer);
        } else {
          switch (this._snapshot.status) {
            case "done":
              try {
                observer.complete?.();
              } catch (err) {
                reportUnhandledError(err);
              }
              break;
            case "error": {
              const err = this._snapshot.error;
              if (!observer.error) {
                reportUnhandledError(err);
              } else {
                try {
                  observer.error(err);
                } catch (err2) {
                  reportUnhandledError(err2);
                }
              }
              break;
            }
          }
        }
        return {
          unsubscribe: /* @__PURE__ */ __name(() => {
            this.observers.delete(observer);
          }, "unsubscribe")
        };
      }
      on(type, handler) {
        let listeners = this.eventListeners.get(type);
        if (!listeners) {
          listeners = /* @__PURE__ */ new Set();
          this.eventListeners.set(type, listeners);
        }
        const wrappedHandler = handler.bind(void 0);
        listeners.add(wrappedHandler);
        return {
          unsubscribe: /* @__PURE__ */ __name(() => {
            listeners.delete(wrappedHandler);
          }, "unsubscribe")
        };
      }
      /** Starts the Actor from the initial state */
      start() {
        if (this._processingStatus === ProcessingStatus.Running) {
          return this;
        }
        if (this._syncSnapshot) {
          this.subscribe({
            next: /* @__PURE__ */ __name((snapshot) => {
              if (snapshot.status === "active") {
                this.system._relay(this, this._parent, {
                  type: `xstate.snapshot.${this.id}`,
                  snapshot
                });
              }
            }, "next"),
            error: /* @__PURE__ */ __name(() => {
            }, "error")
          });
        }
        this.system._register(this.sessionId, this);
        if (this._systemId) {
          this.system._set(this._systemId, this);
        }
        this._processingStatus = ProcessingStatus.Running;
        const initEvent = createInitEvent(this.options.input);
        this.system._sendInspectionEvent({
          type: "@xstate.event",
          sourceRef: this._parent,
          actorRef: this,
          event: initEvent
        });
        const status = this._snapshot.status;
        switch (status) {
          case "done":
            this.update(this._snapshot, initEvent);
            return this;
          case "error":
            this._error(this._snapshot.error);
            return this;
        }
        if (!this._parent) {
          this.system.start();
        }
        if (this.logic.start) {
          try {
            this.logic.start(this._snapshot, this._actorScope);
          } catch (err) {
            this._snapshot = {
              ...this._snapshot,
              status: "error",
              error: err
            };
            this._error(err);
            return this;
          }
        }
        this.update(this._snapshot, initEvent);
        if (this.options.devTools) {
          this.attachDevTools();
        }
        this.mailbox.start();
        return this;
      }
      _process(event) {
        let nextState;
        let caughtError;
        try {
          nextState = this.logic.transition(this._snapshot, event, this._actorScope);
        } catch (err) {
          caughtError = {
            err
          };
        }
        if (caughtError) {
          const {
            err
          } = caughtError;
          this._snapshot = {
            ...this._snapshot,
            status: "error",
            error: err
          };
          this._error(err);
          return;
        }
        this.update(nextState, event);
        if (event.type === XSTATE_STOP) {
          this._stopProcedure();
          this._complete();
        }
      }
      _stop() {
        if (this._processingStatus === ProcessingStatus.Stopped) {
          return this;
        }
        this.mailbox.clear();
        if (this._processingStatus === ProcessingStatus.NotStarted) {
          this._processingStatus = ProcessingStatus.Stopped;
          return this;
        }
        this.mailbox.enqueue({
          type: XSTATE_STOP
        });
        return this;
      }
      /** Stops the Actor and unsubscribe all listeners. */
      stop() {
        if (this._parent) {
          throw new Error("A non-root actor cannot be stopped directly.");
        }
        return this._stop();
      }
      _complete() {
        for (const observer of this.observers) {
          try {
            observer.complete?.();
          } catch (err) {
            reportUnhandledError(err);
          }
        }
        this.observers.clear();
      }
      _reportError(err) {
        if (!this.observers.size) {
          if (!this._parent) {
            reportUnhandledError(err);
          }
          return;
        }
        let reportError = false;
        for (const observer of this.observers) {
          const errorListener = observer.error;
          reportError ||= !errorListener;
          try {
            errorListener?.(err);
          } catch (err2) {
            reportUnhandledError(err2);
          }
        }
        this.observers.clear();
        if (reportError) {
          reportUnhandledError(err);
        }
      }
      _error(err) {
        this._stopProcedure();
        this._reportError(err);
        if (this._parent) {
          this.system._relay(this, this._parent, createErrorActorEvent(this.id, err));
        }
      }
      // TODO: atm children don't belong entirely to the actor so
      // in a way - it's not even super aware of them
      // so we can't stop them from here but we really should!
      // right now, they are being stopped within the machine's transition
      // but that could throw and leave us with "orphaned" active actors
      _stopProcedure() {
        if (this._processingStatus !== ProcessingStatus.Running) {
          return this;
        }
        this.system.scheduler.cancelAll(this);
        this.mailbox.clear();
        this.mailbox = new Mailbox(this._process.bind(this));
        this._processingStatus = ProcessingStatus.Stopped;
        this.system._unregister(this);
        return this;
      }
      /** @internal */
      _send(event) {
        if (this._processingStatus === ProcessingStatus.Stopped) {
          return;
        }
        this.mailbox.enqueue(event);
      }
      /**
       * Sends an event to the running Actor to trigger a transition.
       *
       * @param event The event to send
       */
      send(event) {
        this.system._relay(void 0, this, event);
      }
      attachDevTools() {
        const {
          devTools
        } = this.options;
        if (devTools) {
          const resolvedDevToolsAdapter = typeof devTools === "function" ? devTools : dev_dist_xstateDev.devToolsAdapter;
          resolvedDevToolsAdapter(this);
        }
      }
      toJSON() {
        return {
          xstate$$type: $$ACTOR_TYPE,
          id: this.id
        };
      }
      /**
       * Obtain the internal state of the actor, which can be persisted.
       *
       * @remarks
       * The internal state can be persisted from any actor, not only machines.
       *
       * Note that the persisted state is not the same as the snapshot from
       * {@link Actor.getSnapshot}. Persisted state represents the internal state of
       * the actor, while snapshots represent the actor's last emitted value.
       *
       * Can be restored with {@link ActorOptions.state}
       * @see https://stately.ai/docs/persistence
       */
      getPersistedSnapshot(options) {
        return this.logic.getPersistedSnapshot(this._snapshot, options);
      }
      [symbolObservable]() {
        return this;
      }
      /**
       * Read an actor’s snapshot synchronously.
       *
       * @remarks
       * The snapshot represent an actor's last emitted value.
       *
       * When an actor receives an event, its internal state may change. An actor
       * may emit a snapshot when a state transition occurs.
       *
       * Note that some actors, such as callback actors generated with
       * `fromCallback`, will not emit snapshots.
       * @see {@link Actor.subscribe} to subscribe to an actor’s snapshot values.
       * @see {@link Actor.getPersistedSnapshot} to persist the internal state of an actor (which is more than just a snapshot).
       */
      getSnapshot() {
        return this._snapshot;
      }
    };
    function createActor2(logic, ...[options]) {
      return new Actor2(logic, options);
    }
    __name(createActor2, "createActor");
    var interpret2 = createActor2;
    function resolveCancel(_, snapshot, actionArgs, actionParams, {
      sendId
    }) {
      const resolvedSendId = typeof sendId === "function" ? sendId(actionArgs, actionParams) : sendId;
      return [snapshot, {
        sendId: resolvedSendId
      }, void 0];
    }
    __name(resolveCancel, "resolveCancel");
    function executeCancel(actorScope, params) {
      actorScope.defer(() => {
        actorScope.system.scheduler.cancel(actorScope.self, params.sendId);
      });
    }
    __name(executeCancel, "executeCancel");
    function cancel2(sendId) {
      function cancel3(_args, _params) {
      }
      __name(cancel3, "cancel");
      cancel3.type = "xstate.cancel";
      cancel3.sendId = sendId;
      cancel3.resolve = resolveCancel;
      cancel3.execute = executeCancel;
      return cancel3;
    }
    __name(cancel2, "cancel");
    function resolveSpawn(actorScope, snapshot, actionArgs, _actionParams, {
      id,
      systemId,
      src,
      input,
      syncSnapshot
    }) {
      const logic = typeof src === "string" ? resolveReferencedActor(snapshot.machine, src) : src;
      const resolvedId = typeof id === "function" ? id(actionArgs) : id;
      let actorRef;
      let resolvedInput = void 0;
      if (logic) {
        resolvedInput = typeof input === "function" ? input({
          context: snapshot.context,
          event: actionArgs.event,
          self: actorScope.self
        }) : input;
        actorRef = createActor2(logic, {
          id: resolvedId,
          src,
          parent: actorScope.self,
          syncSnapshot,
          systemId,
          input: resolvedInput
        });
      }
      return [cloneMachineSnapshot(snapshot, {
        children: {
          ...snapshot.children,
          [resolvedId]: actorRef
        }
      }), {
        id,
        systemId,
        actorRef,
        src,
        input: resolvedInput
      }, void 0];
    }
    __name(resolveSpawn, "resolveSpawn");
    function executeSpawn(actorScope, {
      actorRef
    }) {
      if (!actorRef) {
        return;
      }
      actorScope.defer(() => {
        if (actorRef._processingStatus === ProcessingStatus.Stopped) {
          return;
        }
        actorRef.start();
      });
    }
    __name(executeSpawn, "executeSpawn");
    function spawnChild2(...[src, {
      id,
      systemId,
      input,
      syncSnapshot = false
    } = {}]) {
      function spawnChild3(_args, _params) {
      }
      __name(spawnChild3, "spawnChild");
      spawnChild3.type = "xstate.spawnChild";
      spawnChild3.id = id;
      spawnChild3.systemId = systemId;
      spawnChild3.src = src;
      spawnChild3.input = input;
      spawnChild3.syncSnapshot = syncSnapshot;
      spawnChild3.resolve = resolveSpawn;
      spawnChild3.execute = executeSpawn;
      return spawnChild3;
    }
    __name(spawnChild2, "spawnChild");
    function resolveStop(_, snapshot, args, actionParams, {
      actorRef
    }) {
      const actorRefOrString = typeof actorRef === "function" ? actorRef(args, actionParams) : actorRef;
      const resolvedActorRef = typeof actorRefOrString === "string" ? snapshot.children[actorRefOrString] : actorRefOrString;
      let children = snapshot.children;
      if (resolvedActorRef) {
        children = {
          ...children
        };
        delete children[resolvedActorRef.id];
      }
      return [cloneMachineSnapshot(snapshot, {
        children
      }), resolvedActorRef, void 0];
    }
    __name(resolveStop, "resolveStop");
    function executeStop(actorScope, actorRef) {
      if (!actorRef) {
        return;
      }
      actorScope.system._unregister(actorRef);
      if (actorRef._processingStatus !== ProcessingStatus.Running) {
        actorScope.stopChild(actorRef);
        return;
      }
      actorScope.defer(() => {
        actorScope.stopChild(actorRef);
      });
    }
    __name(executeStop, "executeStop");
    function stopChild2(actorRef) {
      function stop3(_args, _params) {
      }
      __name(stop3, "stop");
      stop3.type = "xstate.stopChild";
      stop3.actorRef = actorRef;
      stop3.resolve = resolveStop;
      stop3.execute = executeStop;
      return stop3;
    }
    __name(stopChild2, "stopChild");
    var stop2 = stopChild2;
    function checkStateIn(snapshot, _, {
      stateValue
    }) {
      if (typeof stateValue === "string" && isStateId(stateValue)) {
        const target = snapshot.machine.getStateNodeById(stateValue);
        return snapshot._nodes.some((sn) => sn === target);
      }
      return snapshot.matches(stateValue);
    }
    __name(checkStateIn, "checkStateIn");
    function stateIn2(stateValue) {
      function stateIn3() {
        return false;
      }
      __name(stateIn3, "stateIn");
      stateIn3.check = checkStateIn;
      stateIn3.stateValue = stateValue;
      return stateIn3;
    }
    __name(stateIn2, "stateIn");
    function checkNot(snapshot, {
      context,
      event
    }, {
      guards
    }) {
      return !evaluateGuard(guards[0], context, event, snapshot);
    }
    __name(checkNot, "checkNot");
    function not2(guard) {
      function not3(_args, _params) {
        return false;
      }
      __name(not3, "not");
      not3.check = checkNot;
      not3.guards = [guard];
      return not3;
    }
    __name(not2, "not");
    function checkAnd(snapshot, {
      context,
      event
    }, {
      guards
    }) {
      return guards.every((guard) => evaluateGuard(guard, context, event, snapshot));
    }
    __name(checkAnd, "checkAnd");
    function and2(guards) {
      function and3(_args, _params) {
        return false;
      }
      __name(and3, "and");
      and3.check = checkAnd;
      and3.guards = guards;
      return and3;
    }
    __name(and2, "and");
    function checkOr(snapshot, {
      context,
      event
    }, {
      guards
    }) {
      return guards.some((guard) => evaluateGuard(guard, context, event, snapshot));
    }
    __name(checkOr, "checkOr");
    function or2(guards) {
      function or3(_args, _params) {
        return false;
      }
      __name(or3, "or");
      or3.check = checkOr;
      or3.guards = guards;
      return or3;
    }
    __name(or2, "or");
    function evaluateGuard(guard, context, event, snapshot) {
      const {
        machine
      } = snapshot;
      const isInline = typeof guard === "function";
      const resolved = isInline ? guard : machine.implementations.guards[typeof guard === "string" ? guard : guard.type];
      if (!isInline && !resolved) {
        throw new Error(`Guard '${typeof guard === "string" ? guard : guard.type}' is not implemented.'.`);
      }
      if (typeof resolved !== "function") {
        return evaluateGuard(resolved, context, event, snapshot);
      }
      const guardArgs = {
        context,
        event
      };
      const guardParams = isInline || typeof guard === "string" ? void 0 : "params" in guard ? typeof guard.params === "function" ? guard.params({
        context,
        event
      }) : guard.params : void 0;
      if (!("check" in resolved)) {
        return resolved(guardArgs, guardParams);
      }
      const builtinGuard = resolved;
      return builtinGuard.check(
        snapshot,
        guardArgs,
        resolved
        // this holds all params
      );
    }
    __name(evaluateGuard, "evaluateGuard");
    var isAtomicStateNode = /* @__PURE__ */ __name((stateNode) => stateNode.type === "atomic" || stateNode.type === "final", "isAtomicStateNode");
    function getChildren(stateNode) {
      return Object.values(stateNode.states).filter((sn) => sn.type !== "history");
    }
    __name(getChildren, "getChildren");
    function getProperAncestors(stateNode, toStateNode) {
      const ancestors = [];
      if (toStateNode === stateNode) {
        return ancestors;
      }
      let m = stateNode.parent;
      while (m && m !== toStateNode) {
        ancestors.push(m);
        m = m.parent;
      }
      return ancestors;
    }
    __name(getProperAncestors, "getProperAncestors");
    function getAllStateNodes(stateNodes) {
      const nodeSet = new Set(stateNodes);
      const adjList = getAdjList(nodeSet);
      for (const s of nodeSet) {
        if (s.type === "compound" && (!adjList.get(s) || !adjList.get(s).length)) {
          getInitialStateNodesWithTheirAncestors(s).forEach((sn) => nodeSet.add(sn));
        } else {
          if (s.type === "parallel") {
            for (const child of getChildren(s)) {
              if (child.type === "history") {
                continue;
              }
              if (!nodeSet.has(child)) {
                const initialStates = getInitialStateNodesWithTheirAncestors(child);
                for (const initialStateNode of initialStates) {
                  nodeSet.add(initialStateNode);
                }
              }
            }
          }
        }
      }
      for (const s of nodeSet) {
        let m = s.parent;
        while (m) {
          nodeSet.add(m);
          m = m.parent;
        }
      }
      return nodeSet;
    }
    __name(getAllStateNodes, "getAllStateNodes");
    function getValueFromAdj(baseNode, adjList) {
      const childStateNodes = adjList.get(baseNode);
      if (!childStateNodes) {
        return {};
      }
      if (baseNode.type === "compound") {
        const childStateNode = childStateNodes[0];
        if (childStateNode) {
          if (isAtomicStateNode(childStateNode)) {
            return childStateNode.key;
          }
        } else {
          return {};
        }
      }
      const stateValue = {};
      for (const childStateNode of childStateNodes) {
        stateValue[childStateNode.key] = getValueFromAdj(childStateNode, adjList);
      }
      return stateValue;
    }
    __name(getValueFromAdj, "getValueFromAdj");
    function getAdjList(stateNodes) {
      const adjList = /* @__PURE__ */ new Map();
      for (const s of stateNodes) {
        if (!adjList.has(s)) {
          adjList.set(s, []);
        }
        if (s.parent) {
          if (!adjList.has(s.parent)) {
            adjList.set(s.parent, []);
          }
          adjList.get(s.parent).push(s);
        }
      }
      return adjList;
    }
    __name(getAdjList, "getAdjList");
    function getStateValue(rootNode, stateNodes) {
      const config = getAllStateNodes(stateNodes);
      return getValueFromAdj(rootNode, getAdjList(config));
    }
    __name(getStateValue, "getStateValue");
    function isInFinalState(stateNodeSet, stateNode) {
      if (stateNode.type === "compound") {
        return getChildren(stateNode).some((s) => s.type === "final" && stateNodeSet.has(s));
      }
      if (stateNode.type === "parallel") {
        return getChildren(stateNode).every((sn) => isInFinalState(stateNodeSet, sn));
      }
      return stateNode.type === "final";
    }
    __name(isInFinalState, "isInFinalState");
    var isStateId = /* @__PURE__ */ __name((str) => str[0] === STATE_IDENTIFIER, "isStateId");
    function getCandidates(stateNode, receivedEventType) {
      const candidates = stateNode.transitions.get(receivedEventType) || [...stateNode.transitions.keys()].filter((eventDescriptor) => {
        if (eventDescriptor === WILDCARD) {
          return true;
        }
        if (!eventDescriptor.endsWith(".*")) {
          return false;
        }
        const partialEventTokens = eventDescriptor.split(".");
        const eventTokens = receivedEventType.split(".");
        for (let tokenIndex = 0; tokenIndex < partialEventTokens.length; tokenIndex++) {
          const partialEventToken = partialEventTokens[tokenIndex];
          const eventToken = eventTokens[tokenIndex];
          if (partialEventToken === "*") {
            const isLastToken = tokenIndex === partialEventTokens.length - 1;
            return isLastToken;
          }
          if (partialEventToken !== eventToken) {
            return false;
          }
        }
        return true;
      }).sort((a, b) => b.length - a.length).flatMap((key) => stateNode.transitions.get(key));
      return candidates;
    }
    __name(getCandidates, "getCandidates");
    function getDelayedTransitions(stateNode) {
      const afterConfig = stateNode.config.after;
      if (!afterConfig) {
        return [];
      }
      const mutateEntryExit = /* @__PURE__ */ __name((delay) => {
        const afterEvent = createAfterEvent(delay, stateNode.id);
        const eventType = afterEvent.type;
        stateNode.entry.push(raise2(afterEvent, {
          id: eventType,
          delay
        }));
        stateNode.exit.push(cancel2(eventType));
        return eventType;
      }, "mutateEntryExit");
      const delayedTransitions = Object.keys(afterConfig).flatMap((delay) => {
        const configTransition = afterConfig[delay];
        const resolvedTransition = typeof configTransition === "string" ? {
          target: configTransition
        } : configTransition;
        const resolvedDelay = Number.isNaN(+delay) ? delay : +delay;
        const eventType = mutateEntryExit(resolvedDelay);
        return toArray(resolvedTransition).map((transition2) => ({
          ...transition2,
          event: eventType,
          delay: resolvedDelay
        }));
      });
      return delayedTransitions.map((delayedTransition) => {
        const {
          delay
        } = delayedTransition;
        return {
          ...formatTransition(stateNode, delayedTransition.event, delayedTransition),
          delay
        };
      });
    }
    __name(getDelayedTransitions, "getDelayedTransitions");
    function formatTransition(stateNode, descriptor, transitionConfig) {
      const normalizedTarget = normalizeTarget(transitionConfig.target);
      const reenter = transitionConfig.reenter ?? false;
      const target = resolveTarget(stateNode, normalizedTarget);
      const transition2 = {
        ...transitionConfig,
        actions: toArray(transitionConfig.actions),
        guard: transitionConfig.guard,
        target,
        source: stateNode,
        reenter,
        eventType: descriptor,
        toJSON: /* @__PURE__ */ __name(() => ({
          ...transition2,
          source: `#${stateNode.id}`,
          target: target ? target.map((t) => `#${t.id}`) : void 0
        }), "toJSON")
      };
      return transition2;
    }
    __name(formatTransition, "formatTransition");
    function formatTransitions(stateNode) {
      const transitions = /* @__PURE__ */ new Map();
      if (stateNode.config.on) {
        for (const descriptor of Object.keys(stateNode.config.on)) {
          if (descriptor === NULL_EVENT) {
            throw new Error('Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.');
          }
          const transitionsConfig = stateNode.config.on[descriptor];
          transitions.set(descriptor, toTransitionConfigArray(transitionsConfig).map((t) => formatTransition(stateNode, descriptor, t)));
        }
      }
      if (stateNode.config.onDone) {
        const descriptor = `xstate.done.state.${stateNode.id}`;
        transitions.set(descriptor, toTransitionConfigArray(stateNode.config.onDone).map((t) => formatTransition(stateNode, descriptor, t)));
      }
      for (const invokeDef of stateNode.invoke) {
        if (invokeDef.onDone) {
          const descriptor = `xstate.done.actor.${invokeDef.id}`;
          transitions.set(descriptor, toTransitionConfigArray(invokeDef.onDone).map((t) => formatTransition(stateNode, descriptor, t)));
        }
        if (invokeDef.onError) {
          const descriptor = `xstate.error.actor.${invokeDef.id}`;
          transitions.set(descriptor, toTransitionConfigArray(invokeDef.onError).map((t) => formatTransition(stateNode, descriptor, t)));
        }
        if (invokeDef.onSnapshot) {
          const descriptor = `xstate.snapshot.${invokeDef.id}`;
          transitions.set(descriptor, toTransitionConfigArray(invokeDef.onSnapshot).map((t) => formatTransition(stateNode, descriptor, t)));
        }
      }
      for (const delayedTransition of stateNode.after) {
        let existing = transitions.get(delayedTransition.eventType);
        if (!existing) {
          existing = [];
          transitions.set(delayedTransition.eventType, existing);
        }
        existing.push(delayedTransition);
      }
      return transitions;
    }
    __name(formatTransitions, "formatTransitions");
    function formatInitialTransition(stateNode, _target) {
      const resolvedTarget = typeof _target === "string" ? stateNode.states[_target] : _target ? stateNode.states[_target.target] : void 0;
      if (!resolvedTarget && _target) {
        throw new Error(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-base-to-string
          `Initial state node "${_target}" not found on parent state node #${stateNode.id}`
        );
      }
      const transition2 = {
        source: stateNode,
        actions: !_target || typeof _target === "string" ? [] : toArray(_target.actions),
        eventType: null,
        reenter: false,
        target: resolvedTarget ? [resolvedTarget] : [],
        toJSON: /* @__PURE__ */ __name(() => ({
          ...transition2,
          source: `#${stateNode.id}`,
          target: resolvedTarget ? [`#${resolvedTarget.id}`] : []
        }), "toJSON")
      };
      return transition2;
    }
    __name(formatInitialTransition, "formatInitialTransition");
    function resolveTarget(stateNode, targets) {
      if (targets === void 0) {
        return void 0;
      }
      return targets.map((target) => {
        if (typeof target !== "string") {
          return target;
        }
        if (isStateId(target)) {
          return stateNode.machine.getStateNodeById(target);
        }
        const isInternalTarget = target[0] === STATE_DELIMITER;
        if (isInternalTarget && !stateNode.parent) {
          return getStateNodeByPath(stateNode, target.slice(1));
        }
        const resolvedTarget = isInternalTarget ? stateNode.key + target : target;
        if (stateNode.parent) {
          try {
            const targetStateNode = getStateNodeByPath(stateNode.parent, resolvedTarget);
            return targetStateNode;
          } catch (err) {
            throw new Error(`Invalid transition definition for state node '${stateNode.id}':
${err.message}`);
          }
        } else {
          throw new Error(`Invalid target: "${target}" is not a valid target from the root node. Did you mean ".${target}"?`);
        }
      });
    }
    __name(resolveTarget, "resolveTarget");
    function resolveHistoryDefaultTransition(stateNode) {
      const normalizedTarget = normalizeTarget(stateNode.config.target);
      if (!normalizedTarget) {
        return stateNode.parent.initial;
      }
      return {
        target: normalizedTarget.map((t) => typeof t === "string" ? getStateNodeByPath(stateNode.parent, t) : t)
      };
    }
    __name(resolveHistoryDefaultTransition, "resolveHistoryDefaultTransition");
    function isHistoryNode(stateNode) {
      return stateNode.type === "history";
    }
    __name(isHistoryNode, "isHistoryNode");
    function getInitialStateNodesWithTheirAncestors(stateNode) {
      const states = getInitialStateNodes(stateNode);
      for (const initialState of states) {
        for (const ancestor of getProperAncestors(initialState, stateNode)) {
          states.add(ancestor);
        }
      }
      return states;
    }
    __name(getInitialStateNodesWithTheirAncestors, "getInitialStateNodesWithTheirAncestors");
    function getInitialStateNodes(stateNode) {
      const set = /* @__PURE__ */ new Set();
      function iter(descStateNode) {
        if (set.has(descStateNode)) {
          return;
        }
        set.add(descStateNode);
        if (descStateNode.type === "compound") {
          iter(descStateNode.initial.target[0]);
        } else if (descStateNode.type === "parallel") {
          for (const child of getChildren(descStateNode)) {
            iter(child);
          }
        }
      }
      __name(iter, "iter");
      iter(stateNode);
      return set;
    }
    __name(getInitialStateNodes, "getInitialStateNodes");
    function getStateNode(stateNode, stateKey) {
      if (isStateId(stateKey)) {
        return stateNode.machine.getStateNodeById(stateKey);
      }
      if (!stateNode.states) {
        throw new Error(`Unable to retrieve child state '${stateKey}' from '${stateNode.id}'; no child states exist.`);
      }
      const result = stateNode.states[stateKey];
      if (!result) {
        throw new Error(`Child state '${stateKey}' does not exist on '${stateNode.id}'`);
      }
      return result;
    }
    __name(getStateNode, "getStateNode");
    function getStateNodeByPath(stateNode, statePath) {
      if (typeof statePath === "string" && isStateId(statePath)) {
        try {
          return stateNode.machine.getStateNodeById(statePath);
        } catch {
        }
      }
      const arrayStatePath = toStatePath(statePath).slice();
      let currentStateNode = stateNode;
      while (arrayStatePath.length) {
        const key = arrayStatePath.shift();
        if (!key.length) {
          break;
        }
        currentStateNode = getStateNode(currentStateNode, key);
      }
      return currentStateNode;
    }
    __name(getStateNodeByPath, "getStateNodeByPath");
    function getStateNodes2(stateNode, stateValue) {
      if (typeof stateValue === "string") {
        const childStateNode = stateNode.states[stateValue];
        if (!childStateNode) {
          throw new Error(`State '${stateValue}' does not exist on '${stateNode.id}'`);
        }
        return [stateNode, childStateNode];
      }
      const childStateKeys = Object.keys(stateValue);
      const childStateNodes = childStateKeys.map((subStateKey) => getStateNode(stateNode, subStateKey)).filter(Boolean);
      return [stateNode.machine.root, stateNode].concat(childStateNodes, childStateKeys.reduce((allSubStateNodes, subStateKey) => {
        const subStateNode = getStateNode(stateNode, subStateKey);
        if (!subStateNode) {
          return allSubStateNodes;
        }
        const subStateNodes = getStateNodes2(subStateNode, stateValue[subStateKey]);
        return allSubStateNodes.concat(subStateNodes);
      }, []));
    }
    __name(getStateNodes2, "getStateNodes");
    function transitionAtomicNode(stateNode, stateValue, snapshot, event) {
      const childStateNode = getStateNode(stateNode, stateValue);
      const next = childStateNode.next(snapshot, event);
      if (!next || !next.length) {
        return stateNode.next(snapshot, event);
      }
      return next;
    }
    __name(transitionAtomicNode, "transitionAtomicNode");
    function transitionCompoundNode(stateNode, stateValue, snapshot, event) {
      const subStateKeys = Object.keys(stateValue);
      const childStateNode = getStateNode(stateNode, subStateKeys[0]);
      const next = transitionNode(childStateNode, stateValue[subStateKeys[0]], snapshot, event);
      if (!next || !next.length) {
        return stateNode.next(snapshot, event);
      }
      return next;
    }
    __name(transitionCompoundNode, "transitionCompoundNode");
    function transitionParallelNode(stateNode, stateValue, snapshot, event) {
      const allInnerTransitions = [];
      for (const subStateKey of Object.keys(stateValue)) {
        const subStateValue = stateValue[subStateKey];
        if (!subStateValue) {
          continue;
        }
        const subStateNode = getStateNode(stateNode, subStateKey);
        const innerTransitions = transitionNode(subStateNode, subStateValue, snapshot, event);
        if (innerTransitions) {
          allInnerTransitions.push(...innerTransitions);
        }
      }
      if (!allInnerTransitions.length) {
        return stateNode.next(snapshot, event);
      }
      return allInnerTransitions;
    }
    __name(transitionParallelNode, "transitionParallelNode");
    function transitionNode(stateNode, stateValue, snapshot, event) {
      if (typeof stateValue === "string") {
        return transitionAtomicNode(stateNode, stateValue, snapshot, event);
      }
      if (Object.keys(stateValue).length === 1) {
        return transitionCompoundNode(stateNode, stateValue, snapshot, event);
      }
      return transitionParallelNode(stateNode, stateValue, snapshot, event);
    }
    __name(transitionNode, "transitionNode");
    function getHistoryNodes(stateNode) {
      return Object.keys(stateNode.states).map((key) => stateNode.states[key]).filter((sn) => sn.type === "history");
    }
    __name(getHistoryNodes, "getHistoryNodes");
    function isDescendant(childStateNode, parentStateNode) {
      let marker = childStateNode;
      while (marker.parent && marker.parent !== parentStateNode) {
        marker = marker.parent;
      }
      return marker.parent === parentStateNode;
    }
    __name(isDescendant, "isDescendant");
    function hasIntersection(s1, s2) {
      const set1 = new Set(s1);
      const set2 = new Set(s2);
      for (const item of set1) {
        if (set2.has(item)) {
          return true;
        }
      }
      for (const item of set2) {
        if (set1.has(item)) {
          return true;
        }
      }
      return false;
    }
    __name(hasIntersection, "hasIntersection");
    function removeConflictingTransitions(enabledTransitions, stateNodeSet, historyValue) {
      const filteredTransitions = /* @__PURE__ */ new Set();
      for (const t1 of enabledTransitions) {
        let t1Preempted = false;
        const transitionsToRemove = /* @__PURE__ */ new Set();
        for (const t2 of filteredTransitions) {
          if (hasIntersection(computeExitSet([t1], stateNodeSet, historyValue), computeExitSet([t2], stateNodeSet, historyValue))) {
            if (isDescendant(t1.source, t2.source)) {
              transitionsToRemove.add(t2);
            } else {
              t1Preempted = true;
              break;
            }
          }
        }
        if (!t1Preempted) {
          for (const t3 of transitionsToRemove) {
            filteredTransitions.delete(t3);
          }
          filteredTransitions.add(t1);
        }
      }
      return Array.from(filteredTransitions);
    }
    __name(removeConflictingTransitions, "removeConflictingTransitions");
    function findLeastCommonAncestor(stateNodes) {
      const [head, ...tail] = stateNodes;
      for (const ancestor of getProperAncestors(head, void 0)) {
        if (tail.every((sn) => isDescendant(sn, ancestor))) {
          return ancestor;
        }
      }
    }
    __name(findLeastCommonAncestor, "findLeastCommonAncestor");
    function getEffectiveTargetStates(transition2, historyValue) {
      if (!transition2.target) {
        return [];
      }
      const targets = /* @__PURE__ */ new Set();
      for (const targetNode of transition2.target) {
        if (isHistoryNode(targetNode)) {
          if (historyValue[targetNode.id]) {
            for (const node of historyValue[targetNode.id]) {
              targets.add(node);
            }
          } else {
            for (const node of getEffectiveTargetStates(resolveHistoryDefaultTransition(targetNode), historyValue)) {
              targets.add(node);
            }
          }
        } else {
          targets.add(targetNode);
        }
      }
      return [...targets];
    }
    __name(getEffectiveTargetStates, "getEffectiveTargetStates");
    function getTransitionDomain(transition2, historyValue) {
      const targetStates = getEffectiveTargetStates(transition2, historyValue);
      if (!targetStates) {
        return;
      }
      if (!transition2.reenter && targetStates.every((target) => target === transition2.source || isDescendant(target, transition2.source))) {
        return transition2.source;
      }
      const lca = findLeastCommonAncestor(targetStates.concat(transition2.source));
      if (lca) {
        return lca;
      }
      if (transition2.reenter) {
        return;
      }
      return transition2.source.machine.root;
    }
    __name(getTransitionDomain, "getTransitionDomain");
    function computeExitSet(transitions, stateNodeSet, historyValue) {
      const statesToExit = /* @__PURE__ */ new Set();
      for (const t of transitions) {
        if (t.target?.length) {
          const domain = getTransitionDomain(t, historyValue);
          if (t.reenter && t.source === domain) {
            statesToExit.add(domain);
          }
          for (const stateNode of stateNodeSet) {
            if (isDescendant(stateNode, domain)) {
              statesToExit.add(stateNode);
            }
          }
        }
      }
      return [...statesToExit];
    }
    __name(computeExitSet, "computeExitSet");
    function areStateNodeCollectionsEqual(prevStateNodes, nextStateNodeSet) {
      if (prevStateNodes.length !== nextStateNodeSet.size) {
        return false;
      }
      for (const node of prevStateNodes) {
        if (!nextStateNodeSet.has(node)) {
          return false;
        }
      }
      return true;
    }
    __name(areStateNodeCollectionsEqual, "areStateNodeCollectionsEqual");
    function microstep(transitions, currentSnapshot, actorScope, event, isInitial, internalQueue) {
      if (!transitions.length) {
        return currentSnapshot;
      }
      const mutStateNodeSet = new Set(currentSnapshot._nodes);
      let historyValue = currentSnapshot.historyValue;
      const filteredTransitions = removeConflictingTransitions(transitions, mutStateNodeSet, historyValue);
      let nextState = currentSnapshot;
      if (!isInitial) {
        [nextState, historyValue] = exitStates(nextState, event, actorScope, filteredTransitions, mutStateNodeSet, historyValue, internalQueue, actorScope.actionExecutor);
      }
      nextState = resolveActionsAndContext(nextState, event, actorScope, filteredTransitions.flatMap((t) => t.actions), internalQueue, void 0);
      nextState = enterStates(nextState, event, actorScope, filteredTransitions, mutStateNodeSet, internalQueue, historyValue, isInitial);
      const nextStateNodes = [...mutStateNodeSet];
      if (nextState.status === "done") {
        nextState = resolveActionsAndContext(nextState, event, actorScope, nextStateNodes.sort((a, b) => b.order - a.order).flatMap((state) => state.exit), internalQueue, void 0);
      }
      try {
        if (historyValue === currentSnapshot.historyValue && areStateNodeCollectionsEqual(currentSnapshot._nodes, mutStateNodeSet)) {
          return nextState;
        }
        return cloneMachineSnapshot(nextState, {
          _nodes: nextStateNodes,
          historyValue
        });
      } catch (e) {
        throw e;
      }
    }
    __name(microstep, "microstep");
    function getMachineOutput(snapshot, event, actorScope, rootNode, rootCompletionNode) {
      if (rootNode.output === void 0) {
        return;
      }
      const doneStateEvent = createDoneStateEvent(rootCompletionNode.id, rootCompletionNode.output !== void 0 && rootCompletionNode.parent ? resolveOutput(rootCompletionNode.output, snapshot.context, event, actorScope.self) : void 0);
      return resolveOutput(rootNode.output, snapshot.context, doneStateEvent, actorScope.self);
    }
    __name(getMachineOutput, "getMachineOutput");
    function enterStates(currentSnapshot, event, actorScope, filteredTransitions, mutStateNodeSet, internalQueue, historyValue, isInitial) {
      let nextSnapshot = currentSnapshot;
      const statesToEnter = /* @__PURE__ */ new Set();
      const statesForDefaultEntry = /* @__PURE__ */ new Set();
      computeEntrySet(filteredTransitions, historyValue, statesForDefaultEntry, statesToEnter);
      if (isInitial) {
        statesForDefaultEntry.add(currentSnapshot.machine.root);
      }
      const completedNodes = /* @__PURE__ */ new Set();
      for (const stateNodeToEnter of [...statesToEnter].sort((a, b) => a.order - b.order)) {
        mutStateNodeSet.add(stateNodeToEnter);
        const actions = [];
        actions.push(...stateNodeToEnter.entry);
        for (const invokeDef of stateNodeToEnter.invoke) {
          actions.push(spawnChild2(invokeDef.src, {
            ...invokeDef,
            syncSnapshot: !!invokeDef.onSnapshot
          }));
        }
        if (statesForDefaultEntry.has(stateNodeToEnter)) {
          const initialActions = stateNodeToEnter.initial.actions;
          actions.push(...initialActions);
        }
        nextSnapshot = resolveActionsAndContext(nextSnapshot, event, actorScope, actions, internalQueue, stateNodeToEnter.invoke.map((invokeDef) => invokeDef.id));
        if (stateNodeToEnter.type === "final") {
          const parent = stateNodeToEnter.parent;
          let ancestorMarker = parent?.type === "parallel" ? parent : parent?.parent;
          let rootCompletionNode = ancestorMarker || stateNodeToEnter;
          if (parent?.type === "compound") {
            internalQueue.push(createDoneStateEvent(parent.id, stateNodeToEnter.output !== void 0 ? resolveOutput(stateNodeToEnter.output, nextSnapshot.context, event, actorScope.self) : void 0));
          }
          while (ancestorMarker?.type === "parallel" && !completedNodes.has(ancestorMarker) && isInFinalState(mutStateNodeSet, ancestorMarker)) {
            completedNodes.add(ancestorMarker);
            internalQueue.push(createDoneStateEvent(ancestorMarker.id));
            rootCompletionNode = ancestorMarker;
            ancestorMarker = ancestorMarker.parent;
          }
          if (ancestorMarker) {
            continue;
          }
          nextSnapshot = cloneMachineSnapshot(nextSnapshot, {
            status: "done",
            output: getMachineOutput(nextSnapshot, event, actorScope, nextSnapshot.machine.root, rootCompletionNode)
          });
        }
      }
      return nextSnapshot;
    }
    __name(enterStates, "enterStates");
    function computeEntrySet(transitions, historyValue, statesForDefaultEntry, statesToEnter) {
      for (const t of transitions) {
        const domain = getTransitionDomain(t, historyValue);
        for (const s of t.target || []) {
          if (!isHistoryNode(s) && // if the target is different than the source then it will *definitely* be entered
          (t.source !== s || // we know that the domain can't lie within the source
          // if it's different than the source then it's outside of it and it means that the target has to be entered as well
          t.source !== domain || // reentering transitions always enter the target, even if it's the source itself
          t.reenter)) {
            statesToEnter.add(s);
            statesForDefaultEntry.add(s);
          }
          addDescendantStatesToEnter(s, historyValue, statesForDefaultEntry, statesToEnter);
        }
        const targetStates = getEffectiveTargetStates(t, historyValue);
        for (const s of targetStates) {
          const ancestors = getProperAncestors(s, domain);
          if (domain?.type === "parallel") {
            ancestors.push(domain);
          }
          addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, ancestors, !t.source.parent && t.reenter ? void 0 : domain);
        }
      }
    }
    __name(computeEntrySet, "computeEntrySet");
    function addDescendantStatesToEnter(stateNode, historyValue, statesForDefaultEntry, statesToEnter) {
      if (isHistoryNode(stateNode)) {
        if (historyValue[stateNode.id]) {
          const historyStateNodes = historyValue[stateNode.id];
          for (const s of historyStateNodes) {
            statesToEnter.add(s);
            addDescendantStatesToEnter(s, historyValue, statesForDefaultEntry, statesToEnter);
          }
          for (const s of historyStateNodes) {
            addProperAncestorStatesToEnter(s, stateNode.parent, statesToEnter, historyValue, statesForDefaultEntry);
          }
        } else {
          const historyDefaultTransition = resolveHistoryDefaultTransition(stateNode);
          for (const s of historyDefaultTransition.target) {
            statesToEnter.add(s);
            if (historyDefaultTransition === stateNode.parent?.initial) {
              statesForDefaultEntry.add(stateNode.parent);
            }
            addDescendantStatesToEnter(s, historyValue, statesForDefaultEntry, statesToEnter);
          }
          for (const s of historyDefaultTransition.target) {
            addProperAncestorStatesToEnter(s, stateNode.parent, statesToEnter, historyValue, statesForDefaultEntry);
          }
        }
      } else {
        if (stateNode.type === "compound") {
          const [initialState] = stateNode.initial.target;
          if (!isHistoryNode(initialState)) {
            statesToEnter.add(initialState);
            statesForDefaultEntry.add(initialState);
          }
          addDescendantStatesToEnter(initialState, historyValue, statesForDefaultEntry, statesToEnter);
          addProperAncestorStatesToEnter(initialState, stateNode, statesToEnter, historyValue, statesForDefaultEntry);
        } else {
          if (stateNode.type === "parallel") {
            for (const child of getChildren(stateNode).filter((sn) => !isHistoryNode(sn))) {
              if (![...statesToEnter].some((s) => isDescendant(s, child))) {
                if (!isHistoryNode(child)) {
                  statesToEnter.add(child);
                  statesForDefaultEntry.add(child);
                }
                addDescendantStatesToEnter(child, historyValue, statesForDefaultEntry, statesToEnter);
              }
            }
          }
        }
      }
    }
    __name(addDescendantStatesToEnter, "addDescendantStatesToEnter");
    function addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, ancestors, reentrancyDomain) {
      for (const anc of ancestors) {
        if (!reentrancyDomain || isDescendant(anc, reentrancyDomain)) {
          statesToEnter.add(anc);
        }
        if (anc.type === "parallel") {
          for (const child of getChildren(anc).filter((sn) => !isHistoryNode(sn))) {
            if (![...statesToEnter].some((s) => isDescendant(s, child))) {
              statesToEnter.add(child);
              addDescendantStatesToEnter(child, historyValue, statesForDefaultEntry, statesToEnter);
            }
          }
        }
      }
    }
    __name(addAncestorStatesToEnter, "addAncestorStatesToEnter");
    function addProperAncestorStatesToEnter(stateNode, toStateNode, statesToEnter, historyValue, statesForDefaultEntry) {
      addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, getProperAncestors(stateNode, toStateNode));
    }
    __name(addProperAncestorStatesToEnter, "addProperAncestorStatesToEnter");
    function exitStates(currentSnapshot, event, actorScope, transitions, mutStateNodeSet, historyValue, internalQueue, _actionExecutor) {
      let nextSnapshot = currentSnapshot;
      const statesToExit = computeExitSet(transitions, mutStateNodeSet, historyValue);
      statesToExit.sort((a, b) => b.order - a.order);
      let changedHistory;
      for (const exitStateNode of statesToExit) {
        for (const historyNode of getHistoryNodes(exitStateNode)) {
          let predicate;
          if (historyNode.history === "deep") {
            predicate = /* @__PURE__ */ __name((sn) => isAtomicStateNode(sn) && isDescendant(sn, exitStateNode), "predicate");
          } else {
            predicate = /* @__PURE__ */ __name((sn) => {
              return sn.parent === exitStateNode;
            }, "predicate");
          }
          changedHistory ??= {
            ...historyValue
          };
          changedHistory[historyNode.id] = Array.from(mutStateNodeSet).filter(predicate);
        }
      }
      for (const s of statesToExit) {
        nextSnapshot = resolveActionsAndContext(nextSnapshot, event, actorScope, [...s.exit, ...s.invoke.map((def) => stopChild2(def.id))], internalQueue, void 0);
        mutStateNodeSet.delete(s);
      }
      return [nextSnapshot, changedHistory || historyValue];
    }
    __name(exitStates, "exitStates");
    function getAction(machine, actionType) {
      return machine.implementations.actions[actionType];
    }
    __name(getAction, "getAction");
    function resolveAndExecuteActionsWithContext(currentSnapshot, event, actorScope, actions, extra, retries) {
      const {
        machine
      } = currentSnapshot;
      let intermediateSnapshot = currentSnapshot;
      for (const action of actions) {
        const isInline = typeof action === "function";
        const resolvedAction = isInline ? action : (
          // the existing type of `.actions` assumes non-nullable `TExpressionAction`
          // it's fine to cast this here to get a common type and lack of errors in the rest of the code
          // our logic below makes sure that we call those 2 "variants" correctly
          getAction(machine, typeof action === "string" ? action : action.type)
        );
        const actionArgs = {
          context: intermediateSnapshot.context,
          event,
          self: actorScope.self,
          system: actorScope.system
        };
        const actionParams = isInline || typeof action === "string" ? void 0 : "params" in action ? typeof action.params === "function" ? action.params({
          context: intermediateSnapshot.context,
          event
        }) : action.params : void 0;
        if (!resolvedAction || !("resolve" in resolvedAction)) {
          actorScope.actionExecutor({
            type: typeof action === "string" ? action : typeof action === "object" ? action.type : action.name || "(anonymous)",
            info: actionArgs,
            params: actionParams,
            exec: resolvedAction
          });
          continue;
        }
        const builtinAction = resolvedAction;
        const [nextState, params, actions2] = builtinAction.resolve(
          actorScope,
          intermediateSnapshot,
          actionArgs,
          actionParams,
          resolvedAction,
          // this holds all params
          extra
        );
        intermediateSnapshot = nextState;
        if ("retryResolve" in builtinAction) {
          retries?.push([builtinAction, params]);
        }
        if ("execute" in builtinAction) {
          actorScope.actionExecutor({
            type: builtinAction.type,
            info: actionArgs,
            params,
            exec: builtinAction.execute.bind(null, actorScope, params)
          });
        }
        if (actions2) {
          intermediateSnapshot = resolveAndExecuteActionsWithContext(intermediateSnapshot, event, actorScope, actions2, extra, retries);
        }
      }
      return intermediateSnapshot;
    }
    __name(resolveAndExecuteActionsWithContext, "resolveAndExecuteActionsWithContext");
    function resolveActionsAndContext(currentSnapshot, event, actorScope, actions, internalQueue, deferredActorIds) {
      const retries = deferredActorIds ? [] : void 0;
      const nextState = resolveAndExecuteActionsWithContext(currentSnapshot, event, actorScope, actions, {
        internalQueue,
        deferredActorIds
      }, retries);
      retries?.forEach(([builtinAction, params]) => {
        builtinAction.retryResolve(actorScope, nextState, params);
      });
      return nextState;
    }
    __name(resolveActionsAndContext, "resolveActionsAndContext");
    function macrostep(snapshot, event, actorScope, internalQueue) {
      let nextSnapshot = snapshot;
      const microstates = [];
      function addMicrostate(microstate, event2, transitions) {
        actorScope.system._sendInspectionEvent({
          type: "@xstate.microstep",
          actorRef: actorScope.self,
          event: event2,
          snapshot: microstate,
          _transitions: transitions
        });
        microstates.push(microstate);
      }
      __name(addMicrostate, "addMicrostate");
      if (event.type === XSTATE_STOP) {
        nextSnapshot = cloneMachineSnapshot(stopChildren(nextSnapshot, event, actorScope), {
          status: "stopped"
        });
        addMicrostate(nextSnapshot, event, []);
        return {
          snapshot: nextSnapshot,
          microstates
        };
      }
      let nextEvent = event;
      if (nextEvent.type !== XSTATE_INIT) {
        const currentEvent = nextEvent;
        const isErr = isErrorActorEvent(currentEvent);
        const transitions = selectTransitions(currentEvent, nextSnapshot);
        if (isErr && !transitions.length) {
          nextSnapshot = cloneMachineSnapshot(snapshot, {
            status: "error",
            error: currentEvent.error
          });
          addMicrostate(nextSnapshot, currentEvent, []);
          return {
            snapshot: nextSnapshot,
            microstates
          };
        }
        nextSnapshot = microstep(
          transitions,
          snapshot,
          actorScope,
          nextEvent,
          false,
          // isInitial
          internalQueue
        );
        addMicrostate(nextSnapshot, currentEvent, transitions);
      }
      let shouldSelectEventlessTransitions = true;
      while (nextSnapshot.status === "active") {
        let enabledTransitions = shouldSelectEventlessTransitions ? selectEventlessTransitions(nextSnapshot, nextEvent) : [];
        const previousState = enabledTransitions.length ? nextSnapshot : void 0;
        if (!enabledTransitions.length) {
          if (!internalQueue.length) {
            break;
          }
          nextEvent = internalQueue.shift();
          enabledTransitions = selectTransitions(nextEvent, nextSnapshot);
        }
        nextSnapshot = microstep(enabledTransitions, nextSnapshot, actorScope, nextEvent, false, internalQueue);
        shouldSelectEventlessTransitions = nextSnapshot !== previousState;
        addMicrostate(nextSnapshot, nextEvent, enabledTransitions);
      }
      if (nextSnapshot.status !== "active") {
        stopChildren(nextSnapshot, nextEvent, actorScope);
      }
      return {
        snapshot: nextSnapshot,
        microstates
      };
    }
    __name(macrostep, "macrostep");
    function stopChildren(nextState, event, actorScope) {
      return resolveActionsAndContext(nextState, event, actorScope, Object.values(nextState.children).map((child) => stopChild2(child)), [], void 0);
    }
    __name(stopChildren, "stopChildren");
    function selectTransitions(event, nextState) {
      return nextState.machine.getTransitionData(nextState, event);
    }
    __name(selectTransitions, "selectTransitions");
    function selectEventlessTransitions(nextState, event) {
      const enabledTransitionSet = /* @__PURE__ */ new Set();
      const atomicStates = nextState._nodes.filter(isAtomicStateNode);
      for (const stateNode of atomicStates) {
        loop: for (const s of [stateNode].concat(getProperAncestors(stateNode, void 0))) {
          if (!s.always) {
            continue;
          }
          for (const transition2 of s.always) {
            if (transition2.guard === void 0 || evaluateGuard(transition2.guard, nextState.context, event, nextState)) {
              enabledTransitionSet.add(transition2);
              break loop;
            }
          }
        }
      }
      return removeConflictingTransitions(Array.from(enabledTransitionSet), new Set(nextState._nodes), nextState.historyValue);
    }
    __name(selectEventlessTransitions, "selectEventlessTransitions");
    function resolveStateValue(rootNode, stateValue) {
      const allStateNodes = getAllStateNodes(getStateNodes2(rootNode, stateValue));
      return getStateValue(rootNode, [...allStateNodes]);
    }
    __name(resolveStateValue, "resolveStateValue");
    function isMachineSnapshot2(value) {
      return !!value && typeof value === "object" && "machine" in value && "value" in value;
    }
    __name(isMachineSnapshot2, "isMachineSnapshot");
    var machineSnapshotMatches = /* @__PURE__ */ __name(function matches(testValue) {
      return matchesState2(testValue, this.value);
    }, "matches");
    var machineSnapshotHasTag = /* @__PURE__ */ __name(function hasTag(tag) {
      return this.tags.has(tag);
    }, "hasTag");
    var machineSnapshotCan = /* @__PURE__ */ __name(function can(event) {
      const transitionData = this.machine.getTransitionData(this, event);
      return !!transitionData?.length && // Check that at least one transition is not forbidden
      transitionData.some((t) => t.target !== void 0 || t.actions.length);
    }, "can");
    var machineSnapshotToJSON = /* @__PURE__ */ __name(function toJSON() {
      const {
        _nodes: nodes,
        tags,
        machine,
        getMeta,
        toJSON: toJSON2,
        can,
        hasTag,
        matches,
        ...jsonValues
      } = this;
      return {
        ...jsonValues,
        tags: Array.from(tags)
      };
    }, "toJSON");
    var machineSnapshotGetMeta = /* @__PURE__ */ __name(function getMeta() {
      return this._nodes.reduce((acc, stateNode) => {
        if (stateNode.meta !== void 0) {
          acc[stateNode.id] = stateNode.meta;
        }
        return acc;
      }, {});
    }, "getMeta");
    function createMachineSnapshot(config, machine) {
      return {
        status: config.status,
        output: config.output,
        error: config.error,
        machine,
        context: config.context,
        _nodes: config._nodes,
        value: getStateValue(machine.root, config._nodes),
        tags: new Set(config._nodes.flatMap((sn) => sn.tags)),
        children: config.children,
        historyValue: config.historyValue || {},
        matches: machineSnapshotMatches,
        hasTag: machineSnapshotHasTag,
        can: machineSnapshotCan,
        getMeta: machineSnapshotGetMeta,
        toJSON: machineSnapshotToJSON
      };
    }
    __name(createMachineSnapshot, "createMachineSnapshot");
    function cloneMachineSnapshot(snapshot, config = {}) {
      return createMachineSnapshot({
        ...snapshot,
        ...config
      }, snapshot.machine);
    }
    __name(cloneMachineSnapshot, "cloneMachineSnapshot");
    function serializeHistoryValue(historyValue) {
      if (typeof historyValue !== "object" || historyValue === null) {
        return {};
      }
      const result = {};
      for (const key in historyValue) {
        const value = historyValue[key];
        if (Array.isArray(value)) {
          result[key] = value.map((item) => ({
            id: item.id
          }));
        }
      }
      return result;
    }
    __name(serializeHistoryValue, "serializeHistoryValue");
    function getPersistedSnapshot(snapshot, options) {
      const {
        _nodes: nodes,
        tags,
        machine,
        children,
        context,
        can,
        hasTag,
        matches,
        getMeta,
        toJSON,
        ...jsonValues
      } = snapshot;
      const childrenJson = {};
      for (const id in children) {
        const child = children[id];
        childrenJson[id] = {
          snapshot: child.getPersistedSnapshot(options),
          src: child.src,
          systemId: child._systemId,
          syncSnapshot: child._syncSnapshot
        };
      }
      const persisted = {
        ...jsonValues,
        context: persistContext(context),
        children: childrenJson,
        historyValue: serializeHistoryValue(jsonValues.historyValue)
      };
      return persisted;
    }
    __name(getPersistedSnapshot, "getPersistedSnapshot");
    function persistContext(contextPart) {
      let copy;
      for (const key in contextPart) {
        const value = contextPart[key];
        if (value && typeof value === "object") {
          if ("sessionId" in value && "send" in value && "ref" in value) {
            copy ??= Array.isArray(contextPart) ? contextPart.slice() : {
              ...contextPart
            };
            copy[key] = {
              xstate$$type: $$ACTOR_TYPE,
              id: value.id
            };
          } else {
            const result = persistContext(value);
            if (result !== value) {
              copy ??= Array.isArray(contextPart) ? contextPart.slice() : {
                ...contextPart
              };
              copy[key] = result;
            }
          }
        }
      }
      return copy ?? contextPart;
    }
    __name(persistContext, "persistContext");
    function resolveRaise(_, snapshot, args, actionParams, {
      event: eventOrExpr,
      id,
      delay
    }, {
      internalQueue
    }) {
      const delaysMap = snapshot.machine.implementations.delays;
      if (typeof eventOrExpr === "string") {
        throw new Error(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `Only event objects may be used with raise; use raise({ type: "${eventOrExpr}" }) instead`
        );
      }
      const resolvedEvent = typeof eventOrExpr === "function" ? eventOrExpr(args, actionParams) : eventOrExpr;
      let resolvedDelay;
      if (typeof delay === "string") {
        const configDelay = delaysMap && delaysMap[delay];
        resolvedDelay = typeof configDelay === "function" ? configDelay(args, actionParams) : configDelay;
      } else {
        resolvedDelay = typeof delay === "function" ? delay(args, actionParams) : delay;
      }
      if (typeof resolvedDelay !== "number") {
        internalQueue.push(resolvedEvent);
      }
      return [snapshot, {
        event: resolvedEvent,
        id,
        delay: resolvedDelay
      }, void 0];
    }
    __name(resolveRaise, "resolveRaise");
    function executeRaise(actorScope, params) {
      const {
        event,
        delay,
        id
      } = params;
      if (typeof delay === "number") {
        actorScope.defer(() => {
          const self2 = actorScope.self;
          actorScope.system.scheduler.schedule(self2, self2, event, delay, id);
        });
        return;
      }
    }
    __name(executeRaise, "executeRaise");
    function raise2(eventOrExpr, options) {
      function raise3(_args, _params) {
      }
      __name(raise3, "raise");
      raise3.type = "xstate.raise";
      raise3.event = eventOrExpr;
      raise3.id = options?.id;
      raise3.delay = options?.delay;
      raise3.resolve = resolveRaise;
      raise3.execute = executeRaise;
      return raise3;
    }
    __name(raise2, "raise");
    exports.$$ACTOR_TYPE = $$ACTOR_TYPE;
    exports.Actor = Actor2;
    exports.NULL_EVENT = NULL_EVENT;
    exports.ProcessingStatus = ProcessingStatus;
    exports.STATE_DELIMITER = STATE_DELIMITER;
    exports.XSTATE_ERROR = XSTATE_ERROR;
    exports.XSTATE_STOP = XSTATE_STOP;
    exports.and = and2;
    exports.cancel = cancel2;
    exports.cloneMachineSnapshot = cloneMachineSnapshot;
    exports.createActor = createActor2;
    exports.createErrorActorEvent = createErrorActorEvent;
    exports.createInitEvent = createInitEvent;
    exports.createInvokeId = createInvokeId;
    exports.createMachineSnapshot = createMachineSnapshot;
    exports.evaluateGuard = evaluateGuard;
    exports.formatInitialTransition = formatInitialTransition;
    exports.formatTransition = formatTransition;
    exports.formatTransitions = formatTransitions;
    exports.getAllOwnEventDescriptors = getAllOwnEventDescriptors;
    exports.getAllStateNodes = getAllStateNodes;
    exports.getCandidates = getCandidates;
    exports.getDelayedTransitions = getDelayedTransitions;
    exports.getInitialStateNodes = getInitialStateNodes;
    exports.getPersistedSnapshot = getPersistedSnapshot;
    exports.getStateNodeByPath = getStateNodeByPath;
    exports.getStateNodes = getStateNodes2;
    exports.interpret = interpret2;
    exports.isInFinalState = isInFinalState;
    exports.isMachineSnapshot = isMachineSnapshot2;
    exports.isStateId = isStateId;
    exports.macrostep = macrostep;
    exports.mapValues = mapValues;
    exports.matchesState = matchesState2;
    exports.microstep = microstep;
    exports.not = not2;
    exports.or = or2;
    exports.pathToStateValue = pathToStateValue2;
    exports.raise = raise2;
    exports.resolveActionsAndContext = resolveActionsAndContext;
    exports.resolveReferencedActor = resolveReferencedActor;
    exports.resolveStateValue = resolveStateValue;
    exports.spawnChild = spawnChild2;
    exports.stateIn = stateIn2;
    exports.stop = stop2;
    exports.stopChild = stopChild2;
    exports.toArray = toArray;
    exports.toObserver = toObserver2;
    exports.toStatePath = toStatePath;
    exports.toTransitionConfigArray = toTransitionConfigArray;
    exports.transitionNode = transitionNode;
  }
});

// node_modules/xstate/actors/dist/xstate-actors.cjs.js
var require_xstate_actors_cjs = __commonJS({
  "node_modules/xstate/actors/dist/xstate-actors.cjs.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var guards_dist_xstateGuards = require_raise_5872b9e8_cjs();
    require_xstate_dev_cjs();
    function fromTransition2(transition2, initialContext) {
      return {
        config: transition2,
        transition: /* @__PURE__ */ __name((snapshot, event, actorScope) => {
          return {
            ...snapshot,
            context: transition2(snapshot.context, event, actorScope)
          };
        }, "transition"),
        getInitialSnapshot: /* @__PURE__ */ __name((_, input) => {
          return {
            status: "active",
            output: void 0,
            error: void 0,
            context: typeof initialContext === "function" ? initialContext({
              input
            }) : initialContext
          };
        }, "getInitialSnapshot"),
        getPersistedSnapshot: /* @__PURE__ */ __name((snapshot) => snapshot, "getPersistedSnapshot"),
        restoreSnapshot: /* @__PURE__ */ __name((snapshot) => snapshot, "restoreSnapshot")
      };
    }
    __name(fromTransition2, "fromTransition");
    var instanceStates = /* @__PURE__ */ new WeakMap();
    function fromCallback2(callback) {
      const logic = {
        config: callback,
        start: /* @__PURE__ */ __name((state, actorScope) => {
          const {
            self: self2,
            system,
            emit: emit2
          } = actorScope;
          const callbackState = {
            receivers: void 0,
            dispose: void 0
          };
          instanceStates.set(self2, callbackState);
          callbackState.dispose = callback({
            input: state.input,
            system,
            self: self2,
            sendBack: /* @__PURE__ */ __name((event) => {
              if (self2.getSnapshot().status === "stopped") {
                return;
              }
              if (self2._parent) {
                system._relay(self2, self2._parent, event);
              }
            }, "sendBack"),
            receive: /* @__PURE__ */ __name((listener) => {
              callbackState.receivers ??= /* @__PURE__ */ new Set();
              callbackState.receivers.add(listener);
            }, "receive"),
            emit: emit2
          });
        }, "start"),
        transition: /* @__PURE__ */ __name((state, event, actorScope) => {
          const callbackState = instanceStates.get(actorScope.self);
          if (event.type === guards_dist_xstateGuards.XSTATE_STOP) {
            state = {
              ...state,
              status: "stopped",
              error: void 0
            };
            callbackState.dispose?.();
            return state;
          }
          callbackState.receivers?.forEach((receiver) => receiver(event));
          return state;
        }, "transition"),
        getInitialSnapshot: /* @__PURE__ */ __name((_, input) => {
          return {
            status: "active",
            output: void 0,
            error: void 0,
            input
          };
        }, "getInitialSnapshot"),
        getPersistedSnapshot: /* @__PURE__ */ __name((snapshot) => snapshot, "getPersistedSnapshot"),
        restoreSnapshot: /* @__PURE__ */ __name((snapshot) => snapshot, "restoreSnapshot")
      };
      return logic;
    }
    __name(fromCallback2, "fromCallback");
    var XSTATE_OBSERVABLE_NEXT = "xstate.observable.next";
    var XSTATE_OBSERVABLE_ERROR = "xstate.observable.error";
    var XSTATE_OBSERVABLE_COMPLETE = "xstate.observable.complete";
    function fromObservable2(observableCreator) {
      const logic = {
        config: observableCreator,
        transition: /* @__PURE__ */ __name((snapshot, event) => {
          if (snapshot.status !== "active") {
            return snapshot;
          }
          switch (event.type) {
            case XSTATE_OBSERVABLE_NEXT: {
              const newSnapshot = {
                ...snapshot,
                context: event.data
              };
              return newSnapshot;
            }
            case XSTATE_OBSERVABLE_ERROR:
              return {
                ...snapshot,
                status: "error",
                error: event.data,
                input: void 0,
                _subscription: void 0
              };
            case XSTATE_OBSERVABLE_COMPLETE:
              return {
                ...snapshot,
                status: "done",
                input: void 0,
                _subscription: void 0
              };
            case guards_dist_xstateGuards.XSTATE_STOP:
              snapshot._subscription.unsubscribe();
              return {
                ...snapshot,
                status: "stopped",
                input: void 0,
                _subscription: void 0
              };
            default:
              return snapshot;
          }
        }, "transition"),
        getInitialSnapshot: /* @__PURE__ */ __name((_, input) => {
          return {
            status: "active",
            output: void 0,
            error: void 0,
            context: void 0,
            input,
            _subscription: void 0
          };
        }, "getInitialSnapshot"),
        start: /* @__PURE__ */ __name((state, {
          self: self2,
          system,
          emit: emit2
        }) => {
          if (state.status === "done") {
            return;
          }
          state._subscription = observableCreator({
            input: state.input,
            system,
            self: self2,
            emit: emit2
          }).subscribe({
            next: /* @__PURE__ */ __name((value) => {
              system._relay(self2, self2, {
                type: XSTATE_OBSERVABLE_NEXT,
                data: value
              });
            }, "next"),
            error: /* @__PURE__ */ __name((err) => {
              system._relay(self2, self2, {
                type: XSTATE_OBSERVABLE_ERROR,
                data: err
              });
            }, "error"),
            complete: /* @__PURE__ */ __name(() => {
              system._relay(self2, self2, {
                type: XSTATE_OBSERVABLE_COMPLETE
              });
            }, "complete")
          });
        }, "start"),
        getPersistedSnapshot: /* @__PURE__ */ __name(({
          _subscription,
          ...state
        }) => state, "getPersistedSnapshot"),
        restoreSnapshot: /* @__PURE__ */ __name((state) => ({
          ...state,
          _subscription: void 0
        }), "restoreSnapshot")
      };
      return logic;
    }
    __name(fromObservable2, "fromObservable");
    function fromEventObservable2(lazyObservable) {
      const logic = {
        config: lazyObservable,
        transition: /* @__PURE__ */ __name((state, event) => {
          if (state.status !== "active") {
            return state;
          }
          switch (event.type) {
            case XSTATE_OBSERVABLE_ERROR:
              return {
                ...state,
                status: "error",
                error: event.data,
                input: void 0,
                _subscription: void 0
              };
            case XSTATE_OBSERVABLE_COMPLETE:
              return {
                ...state,
                status: "done",
                input: void 0,
                _subscription: void 0
              };
            case guards_dist_xstateGuards.XSTATE_STOP:
              state._subscription.unsubscribe();
              return {
                ...state,
                status: "stopped",
                input: void 0,
                _subscription: void 0
              };
            default:
              return state;
          }
        }, "transition"),
        getInitialSnapshot: /* @__PURE__ */ __name((_, input) => {
          return {
            status: "active",
            output: void 0,
            error: void 0,
            context: void 0,
            input,
            _subscription: void 0
          };
        }, "getInitialSnapshot"),
        start: /* @__PURE__ */ __name((state, {
          self: self2,
          system,
          emit: emit2
        }) => {
          if (state.status === "done") {
            return;
          }
          state._subscription = lazyObservable({
            input: state.input,
            system,
            self: self2,
            emit: emit2
          }).subscribe({
            next: /* @__PURE__ */ __name((value) => {
              if (self2._parent) {
                system._relay(self2, self2._parent, value);
              }
            }, "next"),
            error: /* @__PURE__ */ __name((err) => {
              system._relay(self2, self2, {
                type: XSTATE_OBSERVABLE_ERROR,
                data: err
              });
            }, "error"),
            complete: /* @__PURE__ */ __name(() => {
              system._relay(self2, self2, {
                type: XSTATE_OBSERVABLE_COMPLETE
              });
            }, "complete")
          });
        }, "start"),
        getPersistedSnapshot: /* @__PURE__ */ __name(({
          _subscription,
          ...snapshot
        }) => snapshot, "getPersistedSnapshot"),
        restoreSnapshot: /* @__PURE__ */ __name((snapshot) => ({
          ...snapshot,
          _subscription: void 0
        }), "restoreSnapshot")
      };
      return logic;
    }
    __name(fromEventObservable2, "fromEventObservable");
    var XSTATE_PROMISE_RESOLVE = "xstate.promise.resolve";
    var XSTATE_PROMISE_REJECT = "xstate.promise.reject";
    var controllerMap = /* @__PURE__ */ new WeakMap();
    function fromPromise2(promiseCreator) {
      const logic = {
        config: promiseCreator,
        transition: /* @__PURE__ */ __name((state, event, scope) => {
          if (state.status !== "active") {
            return state;
          }
          switch (event.type) {
            case XSTATE_PROMISE_RESOLVE: {
              const resolvedValue = event.data;
              return {
                ...state,
                status: "done",
                output: resolvedValue,
                input: void 0
              };
            }
            case XSTATE_PROMISE_REJECT:
              return {
                ...state,
                status: "error",
                error: event.data,
                input: void 0
              };
            case guards_dist_xstateGuards.XSTATE_STOP: {
              controllerMap.get(scope.self)?.abort();
              return {
                ...state,
                status: "stopped",
                input: void 0
              };
            }
            default:
              return state;
          }
        }, "transition"),
        start: /* @__PURE__ */ __name((state, {
          self: self2,
          system,
          emit: emit2
        }) => {
          if (state.status !== "active") {
            return;
          }
          const controller = new AbortController();
          controllerMap.set(self2, controller);
          const resolvedPromise = Promise.resolve(promiseCreator({
            input: state.input,
            system,
            self: self2,
            signal: controller.signal,
            emit: emit2
          }));
          resolvedPromise.then((response) => {
            if (self2.getSnapshot().status !== "active") {
              return;
            }
            controllerMap.delete(self2);
            system._relay(self2, self2, {
              type: XSTATE_PROMISE_RESOLVE,
              data: response
            });
          }, (errorData) => {
            if (self2.getSnapshot().status !== "active") {
              return;
            }
            controllerMap.delete(self2);
            system._relay(self2, self2, {
              type: XSTATE_PROMISE_REJECT,
              data: errorData
            });
          });
        }, "start"),
        getInitialSnapshot: /* @__PURE__ */ __name((_, input) => {
          return {
            status: "active",
            output: void 0,
            error: void 0,
            input
          };
        }, "getInitialSnapshot"),
        getPersistedSnapshot: /* @__PURE__ */ __name((snapshot) => snapshot, "getPersistedSnapshot"),
        restoreSnapshot: /* @__PURE__ */ __name((snapshot) => snapshot, "restoreSnapshot")
      };
      return logic;
    }
    __name(fromPromise2, "fromPromise");
    var emptyLogic = fromTransition2((_) => void 0, void 0);
    function createEmptyActor2() {
      return guards_dist_xstateGuards.createActor(emptyLogic);
    }
    __name(createEmptyActor2, "createEmptyActor");
    exports.createEmptyActor = createEmptyActor2;
    exports.fromCallback = fromCallback2;
    exports.fromEventObservable = fromEventObservable2;
    exports.fromObservable = fromObservable2;
    exports.fromPromise = fromPromise2;
    exports.fromTransition = fromTransition2;
  }
});

// node_modules/xstate/dist/log-fa2e731a.cjs.js
var require_log_fa2e731a_cjs = __commonJS({
  "node_modules/xstate/dist/log-fa2e731a.cjs.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    var guards_dist_xstateGuards = require_raise_5872b9e8_cjs();
    function createSpawner(actorScope, {
      machine,
      context
    }, event, spawnedChildren) {
      const spawn = /* @__PURE__ */ __name((src, options) => {
        if (typeof src === "string") {
          const logic = guards_dist_xstateGuards.resolveReferencedActor(machine, src);
          if (!logic) {
            throw new Error(`Actor logic '${src}' not implemented in machine '${machine.id}'`);
          }
          const actorRef = guards_dist_xstateGuards.createActor(logic, {
            id: options?.id,
            parent: actorScope.self,
            syncSnapshot: options?.syncSnapshot,
            input: typeof options?.input === "function" ? options.input({
              context,
              event,
              self: actorScope.self
            }) : options?.input,
            src,
            systemId: options?.systemId
          });
          spawnedChildren[actorRef.id] = actorRef;
          return actorRef;
        } else {
          const actorRef = guards_dist_xstateGuards.createActor(src, {
            id: options?.id,
            parent: actorScope.self,
            syncSnapshot: options?.syncSnapshot,
            input: options?.input,
            src,
            systemId: options?.systemId
          });
          return actorRef;
        }
      }, "spawn");
      return (src, options) => {
        const actorRef = spawn(src, options);
        spawnedChildren[actorRef.id] = actorRef;
        actorScope.defer(() => {
          if (actorRef._processingStatus === guards_dist_xstateGuards.ProcessingStatus.Stopped) {
            return;
          }
          actorRef.start();
        });
        return actorRef;
      };
    }
    __name(createSpawner, "createSpawner");
    function resolveAssign(actorScope, snapshot, actionArgs, actionParams, {
      assignment
    }) {
      if (!snapshot.context) {
        throw new Error("Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.");
      }
      const spawnedChildren = {};
      const assignArgs = {
        context: snapshot.context,
        event: actionArgs.event,
        spawn: createSpawner(actorScope, snapshot, actionArgs.event, spawnedChildren),
        self: actorScope.self,
        system: actorScope.system
      };
      let partialUpdate = {};
      if (typeof assignment === "function") {
        partialUpdate = assignment(assignArgs, actionParams);
      } else {
        for (const key of Object.keys(assignment)) {
          const propAssignment = assignment[key];
          partialUpdate[key] = typeof propAssignment === "function" ? propAssignment(assignArgs, actionParams) : propAssignment;
        }
      }
      const updatedContext = Object.assign({}, snapshot.context, partialUpdate);
      return [guards_dist_xstateGuards.cloneMachineSnapshot(snapshot, {
        context: updatedContext,
        children: Object.keys(spawnedChildren).length ? {
          ...snapshot.children,
          ...spawnedChildren
        } : snapshot.children
      }), void 0, void 0];
    }
    __name(resolveAssign, "resolveAssign");
    function assign2(assignment) {
      function assign3(_args, _params) {
      }
      __name(assign3, "assign");
      assign3.type = "xstate.assign";
      assign3.assignment = assignment;
      assign3.resolve = resolveAssign;
      return assign3;
    }
    __name(assign2, "assign");
    function resolveEmit(_, snapshot, args, actionParams, {
      event: eventOrExpr
    }) {
      const resolvedEvent = typeof eventOrExpr === "function" ? eventOrExpr(args, actionParams) : eventOrExpr;
      return [snapshot, {
        event: resolvedEvent
      }, void 0];
    }
    __name(resolveEmit, "resolveEmit");
    function executeEmit(actorScope, {
      event
    }) {
      actorScope.defer(() => actorScope.emit(event));
    }
    __name(executeEmit, "executeEmit");
    function emit2(eventOrExpr) {
      function emit3(_args, _params) {
      }
      __name(emit3, "emit");
      emit3.type = "xstate.emit";
      emit3.event = eventOrExpr;
      emit3.resolve = resolveEmit;
      emit3.execute = executeEmit;
      return emit3;
    }
    __name(emit2, "emit");
    var SpecialTargets2 = /* @__PURE__ */ function(SpecialTargets3) {
      SpecialTargets3["Parent"] = "#_parent";
      SpecialTargets3["Internal"] = "#_internal";
      return SpecialTargets3;
    }({});
    function resolveSendTo(actorScope, snapshot, args, actionParams, {
      to,
      event: eventOrExpr,
      id,
      delay
    }, extra) {
      const delaysMap = snapshot.machine.implementations.delays;
      if (typeof eventOrExpr === "string") {
        throw new Error(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `Only event objects may be used with sendTo; use sendTo({ type: "${eventOrExpr}" }) instead`
        );
      }
      const resolvedEvent = typeof eventOrExpr === "function" ? eventOrExpr(args, actionParams) : eventOrExpr;
      let resolvedDelay;
      if (typeof delay === "string") {
        const configDelay = delaysMap && delaysMap[delay];
        resolvedDelay = typeof configDelay === "function" ? configDelay(args, actionParams) : configDelay;
      } else {
        resolvedDelay = typeof delay === "function" ? delay(args, actionParams) : delay;
      }
      const resolvedTarget = typeof to === "function" ? to(args, actionParams) : to;
      let targetActorRef;
      if (typeof resolvedTarget === "string") {
        if (resolvedTarget === SpecialTargets2.Parent) {
          targetActorRef = actorScope.self._parent;
        } else if (resolvedTarget === SpecialTargets2.Internal) {
          targetActorRef = actorScope.self;
        } else if (resolvedTarget.startsWith("#_")) {
          targetActorRef = snapshot.children[resolvedTarget.slice(2)];
        } else {
          targetActorRef = extra.deferredActorIds?.includes(resolvedTarget) ? resolvedTarget : snapshot.children[resolvedTarget];
        }
        if (!targetActorRef) {
          throw new Error(`Unable to send event to actor '${resolvedTarget}' from machine '${snapshot.machine.id}'.`);
        }
      } else {
        targetActorRef = resolvedTarget || actorScope.self;
      }
      return [snapshot, {
        to: targetActorRef,
        targetId: typeof resolvedTarget === "string" ? resolvedTarget : void 0,
        event: resolvedEvent,
        id,
        delay: resolvedDelay
      }, void 0];
    }
    __name(resolveSendTo, "resolveSendTo");
    function retryResolveSendTo(_, snapshot, params) {
      if (typeof params.to === "string") {
        params.to = snapshot.children[params.to];
      }
    }
    __name(retryResolveSendTo, "retryResolveSendTo");
    function executeSendTo(actorScope, params) {
      actorScope.defer(() => {
        const {
          to,
          event,
          delay,
          id
        } = params;
        if (typeof delay === "number") {
          actorScope.system.scheduler.schedule(actorScope.self, to, event, delay, id);
          return;
        }
        actorScope.system._relay(
          actorScope.self,
          // at this point, in a deferred task, it should already be mutated by retryResolveSendTo
          // if it initially started as a string
          to,
          event.type === guards_dist_xstateGuards.XSTATE_ERROR ? guards_dist_xstateGuards.createErrorActorEvent(actorScope.self.id, event.data) : event
        );
      });
    }
    __name(executeSendTo, "executeSendTo");
    function sendTo2(to, eventOrExpr, options) {
      function sendTo3(_args, _params) {
      }
      __name(sendTo3, "sendTo");
      sendTo3.type = "xstate.sendTo";
      sendTo3.to = to;
      sendTo3.event = eventOrExpr;
      sendTo3.id = options?.id;
      sendTo3.delay = options?.delay;
      sendTo3.resolve = resolveSendTo;
      sendTo3.retryResolve = retryResolveSendTo;
      sendTo3.execute = executeSendTo;
      return sendTo3;
    }
    __name(sendTo2, "sendTo");
    function sendParent2(event, options) {
      return sendTo2(SpecialTargets2.Parent, event, options);
    }
    __name(sendParent2, "sendParent");
    function forwardTo2(target, options) {
      return sendTo2(target, ({
        event
      }) => event, options);
    }
    __name(forwardTo2, "forwardTo");
    function resolveEnqueueActions(actorScope, snapshot, args, actionParams, {
      collect
    }) {
      const actions = [];
      const enqueue = /* @__PURE__ */ __name(function enqueue2(action) {
        actions.push(action);
      }, "enqueue");
      enqueue.assign = (...args2) => {
        actions.push(assign2(...args2));
      };
      enqueue.cancel = (...args2) => {
        actions.push(guards_dist_xstateGuards.cancel(...args2));
      };
      enqueue.raise = (...args2) => {
        actions.push(guards_dist_xstateGuards.raise(...args2));
      };
      enqueue.sendTo = (...args2) => {
        actions.push(sendTo2(...args2));
      };
      enqueue.sendParent = (...args2) => {
        actions.push(sendParent2(...args2));
      };
      enqueue.spawnChild = (...args2) => {
        actions.push(guards_dist_xstateGuards.spawnChild(...args2));
      };
      enqueue.stopChild = (...args2) => {
        actions.push(guards_dist_xstateGuards.stopChild(...args2));
      };
      enqueue.emit = (...args2) => {
        actions.push(emit2(...args2));
      };
      collect({
        context: args.context,
        event: args.event,
        enqueue,
        check: /* @__PURE__ */ __name((guard) => guards_dist_xstateGuards.evaluateGuard(guard, snapshot.context, args.event, snapshot), "check"),
        self: actorScope.self,
        system: actorScope.system
      }, actionParams);
      return [snapshot, void 0, actions];
    }
    __name(resolveEnqueueActions, "resolveEnqueueActions");
    function enqueueActions2(collect) {
      function enqueueActions3(_args, _params) {
      }
      __name(enqueueActions3, "enqueueActions");
      enqueueActions3.type = "xstate.enqueueActions";
      enqueueActions3.collect = collect;
      enqueueActions3.resolve = resolveEnqueueActions;
      return enqueueActions3;
    }
    __name(enqueueActions2, "enqueueActions");
    function resolveLog(_, snapshot, actionArgs, actionParams, {
      value,
      label
    }) {
      return [snapshot, {
        value: typeof value === "function" ? value(actionArgs, actionParams) : value,
        label
      }, void 0];
    }
    __name(resolveLog, "resolveLog");
    function executeLog({
      logger
    }, {
      value,
      label
    }) {
      if (label) {
        logger(label, value);
      } else {
        logger(value);
      }
    }
    __name(executeLog, "executeLog");
    function log2(value = ({
      context,
      event
    }) => ({
      context,
      event
    }), label) {
      function log3(_args, _params) {
      }
      __name(log3, "log");
      log3.type = "xstate.log";
      log3.value = value;
      log3.label = label;
      log3.resolve = resolveLog;
      log3.execute = executeLog;
      return log3;
    }
    __name(log2, "log");
    exports.SpecialTargets = SpecialTargets2;
    exports.assign = assign2;
    exports.emit = emit2;
    exports.enqueueActions = enqueueActions2;
    exports.forwardTo = forwardTo2;
    exports.log = log2;
    exports.sendParent = sendParent2;
    exports.sendTo = sendTo2;
  }
});

// node_modules/xstate/dist/xstate.cjs.js
var require_xstate_cjs = __commonJS({
  "node_modules/xstate/dist/xstate.cjs.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var actors_dist_xstateActors = require_xstate_actors_cjs();
    var guards_dist_xstateGuards = require_raise_5872b9e8_cjs();
    var log2 = require_log_fa2e731a_cjs();
    require_xstate_dev_cjs();
    function assertEvent2(event, type) {
      const types = guards_dist_xstateGuards.toArray(type);
      if (!types.includes(event.type)) {
        const typesText = types.length === 1 ? `type "${types[0]}"` : `one of types "${types.join('", "')}"`;
        throw new Error(`Expected event ${JSON.stringify(event)} to have ${typesText}`);
      }
    }
    __name(assertEvent2, "assertEvent");
    var cache = /* @__PURE__ */ new WeakMap();
    function memo(object, key, fn) {
      let memoizedData = cache.get(object);
      if (!memoizedData) {
        memoizedData = {
          [key]: fn()
        };
        cache.set(object, memoizedData);
      } else if (!(key in memoizedData)) {
        memoizedData[key] = fn();
      }
      return memoizedData[key];
    }
    __name(memo, "memo");
    var EMPTY_OBJECT = {};
    var toSerializableAction = /* @__PURE__ */ __name((action) => {
      if (typeof action === "string") {
        return {
          type: action
        };
      }
      if (typeof action === "function") {
        if ("resolve" in action) {
          return {
            type: action.type
          };
        }
        return {
          type: action.name
        };
      }
      return action;
    }, "toSerializableAction");
    var StateNode2 = class _StateNode {
      static {
        __name(this, "StateNode");
      }
      constructor(config, options) {
        this.config = config;
        this.key = void 0;
        this.id = void 0;
        this.type = void 0;
        this.path = void 0;
        this.states = void 0;
        this.history = void 0;
        this.entry = void 0;
        this.exit = void 0;
        this.parent = void 0;
        this.machine = void 0;
        this.meta = void 0;
        this.output = void 0;
        this.order = -1;
        this.description = void 0;
        this.tags = [];
        this.transitions = void 0;
        this.always = void 0;
        this.parent = options._parent;
        this.key = options._key;
        this.machine = options._machine;
        this.path = this.parent ? this.parent.path.concat(this.key) : [];
        this.id = this.config.id || [this.machine.id, ...this.path].join(guards_dist_xstateGuards.STATE_DELIMITER);
        this.type = this.config.type || (this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic");
        this.description = this.config.description;
        this.order = this.machine.idMap.size;
        this.machine.idMap.set(this.id, this);
        this.states = this.config.states ? guards_dist_xstateGuards.mapValues(this.config.states, (stateConfig, key) => {
          const stateNode = new _StateNode(stateConfig, {
            _parent: this,
            _key: key,
            _machine: this.machine
          });
          return stateNode;
        }) : EMPTY_OBJECT;
        if (this.type === "compound" && !this.config.initial) {
          throw new Error(`No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`);
        }
        this.history = this.config.history === true ? "shallow" : this.config.history || false;
        this.entry = guards_dist_xstateGuards.toArray(this.config.entry).slice();
        this.exit = guards_dist_xstateGuards.toArray(this.config.exit).slice();
        this.meta = this.config.meta;
        this.output = this.type === "final" || !this.parent ? this.config.output : void 0;
        this.tags = guards_dist_xstateGuards.toArray(config.tags).slice();
      }
      /** @internal */
      _initialize() {
        this.transitions = guards_dist_xstateGuards.formatTransitions(this);
        if (this.config.always) {
          this.always = guards_dist_xstateGuards.toTransitionConfigArray(this.config.always).map((t) => guards_dist_xstateGuards.formatTransition(this, guards_dist_xstateGuards.NULL_EVENT, t));
        }
        Object.keys(this.states).forEach((key) => {
          this.states[key]._initialize();
        });
      }
      /** The well-structured state node definition. */
      get definition() {
        return {
          id: this.id,
          key: this.key,
          version: this.machine.version,
          type: this.type,
          initial: this.initial ? {
            target: this.initial.target,
            source: this,
            actions: this.initial.actions.map(toSerializableAction),
            eventType: null,
            reenter: false,
            toJSON: /* @__PURE__ */ __name(() => ({
              target: this.initial.target.map((t) => `#${t.id}`),
              source: `#${this.id}`,
              actions: this.initial.actions.map(toSerializableAction),
              eventType: null
            }), "toJSON")
          } : void 0,
          history: this.history,
          states: guards_dist_xstateGuards.mapValues(this.states, (state) => {
            return state.definition;
          }),
          on: this.on,
          transitions: [...this.transitions.values()].flat().map((t) => ({
            ...t,
            actions: t.actions.map(toSerializableAction)
          })),
          entry: this.entry.map(toSerializableAction),
          exit: this.exit.map(toSerializableAction),
          meta: this.meta,
          order: this.order || -1,
          output: this.output,
          invoke: this.invoke,
          description: this.description,
          tags: this.tags
        };
      }
      /** @internal */
      toJSON() {
        return this.definition;
      }
      /** The logic invoked as actors by this state node. */
      get invoke() {
        return memo(this, "invoke", () => guards_dist_xstateGuards.toArray(this.config.invoke).map((invokeConfig, i) => {
          const {
            src,
            systemId
          } = invokeConfig;
          const resolvedId = invokeConfig.id ?? guards_dist_xstateGuards.createInvokeId(this.id, i);
          const sourceName = typeof src === "string" ? src : `xstate.invoke.${guards_dist_xstateGuards.createInvokeId(this.id, i)}`;
          return {
            ...invokeConfig,
            src: sourceName,
            id: resolvedId,
            systemId,
            toJSON() {
              const {
                onDone,
                onError,
                ...invokeDefValues
              } = invokeConfig;
              return {
                ...invokeDefValues,
                type: "xstate.invoke",
                src: sourceName,
                id: resolvedId
              };
            }
          };
        }));
      }
      /** The mapping of events to transitions. */
      get on() {
        return memo(this, "on", () => {
          const transitions = this.transitions;
          return [...transitions].flatMap(([descriptor, t]) => t.map((t2) => [descriptor, t2])).reduce((map, [descriptor, transition3]) => {
            map[descriptor] = map[descriptor] || [];
            map[descriptor].push(transition3);
            return map;
          }, {});
        });
      }
      get after() {
        return memo(this, "delayedTransitions", () => guards_dist_xstateGuards.getDelayedTransitions(this));
      }
      get initial() {
        return memo(this, "initial", () => guards_dist_xstateGuards.formatInitialTransition(this, this.config.initial));
      }
      /** @internal */
      next(snapshot, event) {
        const eventType = event.type;
        const actions = [];
        let selectedTransition;
        const candidates = memo(this, `candidates-${eventType}`, () => guards_dist_xstateGuards.getCandidates(this, eventType));
        for (const candidate of candidates) {
          const {
            guard
          } = candidate;
          const resolvedContext = snapshot.context;
          let guardPassed = false;
          try {
            guardPassed = !guard || guards_dist_xstateGuards.evaluateGuard(guard, resolvedContext, event, snapshot);
          } catch (err) {
            const guardType = typeof guard === "string" ? guard : typeof guard === "object" ? guard.type : void 0;
            throw new Error(`Unable to evaluate guard ${guardType ? `'${guardType}' ` : ""}in transition for event '${eventType}' in state node '${this.id}':
${err.message}`);
          }
          if (guardPassed) {
            actions.push(...candidate.actions);
            selectedTransition = candidate;
            break;
          }
        }
        return selectedTransition ? [selectedTransition] : void 0;
      }
      /** All the event types accepted by this state node and its descendants. */
      get events() {
        return memo(this, "events", () => {
          const {
            states
          } = this;
          const events = new Set(this.ownEvents);
          if (states) {
            for (const stateId of Object.keys(states)) {
              const state = states[stateId];
              if (state.states) {
                for (const event of state.events) {
                  events.add(`${event}`);
                }
              }
            }
          }
          return Array.from(events);
        });
      }
      /**
       * All the events that have transitions directly from this state node.
       *
       * Excludes any inert events.
       */
      get ownEvents() {
        const events = new Set([...this.transitions.keys()].filter((descriptor) => {
          return this.transitions.get(descriptor).some((transition3) => !(!transition3.target && !transition3.actions.length && !transition3.reenter));
        }));
        return Array.from(events);
      }
    };
    var STATE_IDENTIFIER = "#";
    var StateMachine2 = class _StateMachine {
      static {
        __name(this, "StateMachine");
      }
      constructor(config, implementations) {
        this.config = config;
        this.version = void 0;
        this.schemas = void 0;
        this.implementations = void 0;
        this.__xstatenode = true;
        this.idMap = /* @__PURE__ */ new Map();
        this.root = void 0;
        this.id = void 0;
        this.states = void 0;
        this.events = void 0;
        this.id = config.id || "(machine)";
        this.implementations = {
          actors: implementations?.actors ?? {},
          actions: implementations?.actions ?? {},
          delays: implementations?.delays ?? {},
          guards: implementations?.guards ?? {}
        };
        this.version = this.config.version;
        this.schemas = this.config.schemas;
        this.transition = this.transition.bind(this);
        this.getInitialSnapshot = this.getInitialSnapshot.bind(this);
        this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this);
        this.restoreSnapshot = this.restoreSnapshot.bind(this);
        this.start = this.start.bind(this);
        this.root = new StateNode2(config, {
          _key: this.id,
          _machine: this
        });
        this.root._initialize();
        this.states = this.root.states;
        this.events = this.root.events;
      }
      /**
       * Clones this state machine with the provided implementations.
       *
       * @param implementations Options (`actions`, `guards`, `actors`, `delays`)
       *   to recursively merge with the existing options.
       * @returns A new `StateMachine` instance with the provided implementations.
       */
      provide(implementations) {
        const {
          actions,
          guards,
          actors,
          delays
        } = this.implementations;
        return new _StateMachine(this.config, {
          actions: {
            ...actions,
            ...implementations.actions
          },
          guards: {
            ...guards,
            ...implementations.guards
          },
          actors: {
            ...actors,
            ...implementations.actors
          },
          delays: {
            ...delays,
            ...implementations.delays
          }
        });
      }
      resolveState(config) {
        const resolvedStateValue = guards_dist_xstateGuards.resolveStateValue(this.root, config.value);
        const nodeSet = guards_dist_xstateGuards.getAllStateNodes(guards_dist_xstateGuards.getStateNodes(this.root, resolvedStateValue));
        return guards_dist_xstateGuards.createMachineSnapshot({
          _nodes: [...nodeSet],
          context: config.context || {},
          children: {},
          status: guards_dist_xstateGuards.isInFinalState(nodeSet, this.root) ? "done" : config.status || "active",
          output: config.output,
          error: config.error,
          historyValue: config.historyValue
        }, this);
      }
      /**
       * Determines the next snapshot given the current `snapshot` and received
       * `event`. Calculates a full macrostep from all microsteps.
       *
       * @param snapshot The current snapshot
       * @param event The received event
       */
      transition(snapshot, event, actorScope) {
        return guards_dist_xstateGuards.macrostep(snapshot, event, actorScope, []).snapshot;
      }
      /**
       * Determines the next state given the current `state` and `event`. Calculates
       * a microstep.
       *
       * @param state The current state
       * @param event The received event
       */
      microstep(snapshot, event, actorScope) {
        return guards_dist_xstateGuards.macrostep(snapshot, event, actorScope, []).microstates;
      }
      getTransitionData(snapshot, event) {
        return guards_dist_xstateGuards.transitionNode(this.root, snapshot.value, snapshot, event) || [];
      }
      /**
       * The initial state _before_ evaluating any microsteps. This "pre-initial"
       * state is provided to initial actions executed in the initial state.
       */
      getPreInitialState(actorScope, initEvent, internalQueue) {
        const {
          context
        } = this.config;
        const preInitial = guards_dist_xstateGuards.createMachineSnapshot({
          context: typeof context !== "function" && context ? context : {},
          _nodes: [this.root],
          children: {},
          status: "active"
        }, this);
        if (typeof context === "function") {
          const assignment = /* @__PURE__ */ __name(({
            spawn,
            event,
            self: self2
          }) => context({
            spawn,
            input: event.input,
            self: self2
          }), "assignment");
          return guards_dist_xstateGuards.resolveActionsAndContext(preInitial, initEvent, actorScope, [log2.assign(assignment)], internalQueue, void 0);
        }
        return preInitial;
      }
      /**
       * Returns the initial `State` instance, with reference to `self` as an
       * `ActorRef`.
       */
      getInitialSnapshot(actorScope, input) {
        const initEvent = guards_dist_xstateGuards.createInitEvent(input);
        const internalQueue = [];
        const preInitialState = this.getPreInitialState(actorScope, initEvent, internalQueue);
        const nextState = guards_dist_xstateGuards.microstep([{
          target: [...guards_dist_xstateGuards.getInitialStateNodes(this.root)],
          source: this.root,
          reenter: true,
          actions: [],
          eventType: null,
          toJSON: null
          // TODO: fix
        }], preInitialState, actorScope, initEvent, true, internalQueue);
        const {
          snapshot: macroState
        } = guards_dist_xstateGuards.macrostep(nextState, initEvent, actorScope, internalQueue);
        return macroState;
      }
      start(snapshot) {
        Object.values(snapshot.children).forEach((child) => {
          if (child.getSnapshot().status === "active") {
            child.start();
          }
        });
      }
      getStateNodeById(stateId) {
        const fullPath = guards_dist_xstateGuards.toStatePath(stateId);
        const relativePath = fullPath.slice(1);
        const resolvedStateId = guards_dist_xstateGuards.isStateId(fullPath[0]) ? fullPath[0].slice(STATE_IDENTIFIER.length) : fullPath[0];
        const stateNode = this.idMap.get(resolvedStateId);
        if (!stateNode) {
          throw new Error(`Child state node '#${resolvedStateId}' does not exist on machine '${this.id}'`);
        }
        return guards_dist_xstateGuards.getStateNodeByPath(stateNode, relativePath);
      }
      get definition() {
        return this.root.definition;
      }
      toJSON() {
        return this.definition;
      }
      getPersistedSnapshot(snapshot, options) {
        return guards_dist_xstateGuards.getPersistedSnapshot(snapshot, options);
      }
      restoreSnapshot(snapshot, _actorScope) {
        const children = {};
        const snapshotChildren = snapshot.children;
        Object.keys(snapshotChildren).forEach((actorId) => {
          const actorData = snapshotChildren[actorId];
          const childState = actorData.snapshot;
          const src = actorData.src;
          const logic = typeof src === "string" ? guards_dist_xstateGuards.resolveReferencedActor(this, src) : src;
          if (!logic) {
            return;
          }
          const actorRef = guards_dist_xstateGuards.createActor(logic, {
            id: actorId,
            parent: _actorScope.self,
            syncSnapshot: actorData.syncSnapshot,
            snapshot: childState,
            src,
            systemId: actorData.systemId
          });
          children[actorId] = actorRef;
        });
        function resolveHistoryReferencedState(root, referenced) {
          if (referenced instanceof StateNode2) {
            return referenced;
          }
          try {
            return root.machine.getStateNodeById(referenced.id);
          } catch {
          }
        }
        __name(resolveHistoryReferencedState, "resolveHistoryReferencedState");
        function reviveHistoryValue(root, historyValue) {
          if (!historyValue || typeof historyValue !== "object") {
            return {};
          }
          const revived = {};
          for (const key in historyValue) {
            const arr = historyValue[key];
            for (const item of arr) {
              const resolved = resolveHistoryReferencedState(root, item);
              if (!resolved) {
                continue;
              }
              revived[key] ??= [];
              revived[key].push(resolved);
            }
          }
          return revived;
        }
        __name(reviveHistoryValue, "reviveHistoryValue");
        const revivedHistoryValue = reviveHistoryValue(this.root, snapshot.historyValue);
        const restoredSnapshot = guards_dist_xstateGuards.createMachineSnapshot({
          ...snapshot,
          children,
          _nodes: Array.from(guards_dist_xstateGuards.getAllStateNodes(guards_dist_xstateGuards.getStateNodes(this.root, snapshot.value))),
          historyValue: revivedHistoryValue
        }, this);
        const seen = /* @__PURE__ */ new Set();
        function reviveContext(contextPart, children2) {
          if (seen.has(contextPart)) {
            return;
          }
          seen.add(contextPart);
          for (const key in contextPart) {
            const value = contextPart[key];
            if (value && typeof value === "object") {
              if ("xstate$$type" in value && value.xstate$$type === guards_dist_xstateGuards.$$ACTOR_TYPE) {
                contextPart[key] = children2[value.id];
                continue;
              }
              reviveContext(value, children2);
            }
          }
        }
        __name(reviveContext, "reviveContext");
        reviveContext(restoredSnapshot.context, children);
        return restoredSnapshot;
      }
    };
    function createMachine2(config, implementations) {
      return new StateMachine2(config, implementations);
    }
    __name(createMachine2, "createMachine");
    function createInertActorScope(actorLogic) {
      const self2 = guards_dist_xstateGuards.createActor(actorLogic);
      const inertActorScope = {
        self: self2,
        defer: /* @__PURE__ */ __name(() => {
        }, "defer"),
        id: "",
        logger: /* @__PURE__ */ __name(() => {
        }, "logger"),
        sessionId: "",
        stopChild: /* @__PURE__ */ __name(() => {
        }, "stopChild"),
        system: self2.system,
        emit: /* @__PURE__ */ __name(() => {
        }, "emit"),
        actionExecutor: /* @__PURE__ */ __name(() => {
        }, "actionExecutor")
      };
      return inertActorScope;
    }
    __name(createInertActorScope, "createInertActorScope");
    function getInitialSnapshot2(actorLogic, ...[input]) {
      const actorScope = createInertActorScope(actorLogic);
      return actorLogic.getInitialSnapshot(actorScope, input);
    }
    __name(getInitialSnapshot2, "getInitialSnapshot");
    function getNextSnapshot2(actorLogic, snapshot, event) {
      const inertActorScope = createInertActorScope(actorLogic);
      inertActorScope.self._snapshot = snapshot;
      return actorLogic.transition(snapshot, event, inertActorScope);
    }
    __name(getNextSnapshot2, "getNextSnapshot");
    function setup2({
      schemas,
      actors,
      actions,
      guards,
      delays
    }) {
      return {
        createMachine: /* @__PURE__ */ __name((config) => createMachine2({
          ...config,
          schemas
        }, {
          actors,
          actions,
          guards,
          delays
        }), "createMachine")
      };
    }
    __name(setup2, "setup");
    var SimulatedClock2 = class {
      static {
        __name(this, "SimulatedClock");
      }
      constructor() {
        this.timeouts = /* @__PURE__ */ new Map();
        this._now = 0;
        this._id = 0;
        this._flushing = false;
        this._flushingInvalidated = false;
      }
      now() {
        return this._now;
      }
      getId() {
        return this._id++;
      }
      setTimeout(fn, timeout) {
        this._flushingInvalidated = this._flushing;
        const id = this.getId();
        this.timeouts.set(id, {
          start: this.now(),
          timeout,
          fn
        });
        return id;
      }
      clearTimeout(id) {
        this._flushingInvalidated = this._flushing;
        this.timeouts.delete(id);
      }
      set(time) {
        if (this._now > time) {
          throw new Error("Unable to travel back in time");
        }
        this._now = time;
        this.flushTimeouts();
      }
      flushTimeouts() {
        if (this._flushing) {
          this._flushingInvalidated = true;
          return;
        }
        this._flushing = true;
        const sorted = [...this.timeouts].sort(([_idA, timeoutA], [_idB, timeoutB]) => {
          const endA = timeoutA.start + timeoutA.timeout;
          const endB = timeoutB.start + timeoutB.timeout;
          return endB > endA ? -1 : 1;
        });
        for (const [id, timeout] of sorted) {
          if (this._flushingInvalidated) {
            this._flushingInvalidated = false;
            this._flushing = false;
            this.flushTimeouts();
            return;
          }
          if (this.now() - timeout.start >= timeout.timeout) {
            this.timeouts.delete(id);
            timeout.fn.call(null);
          }
        }
        this._flushing = false;
      }
      increment(ms) {
        this._now += ms;
        this.flushTimeouts();
      }
    };
    function toPromise2(actor) {
      return new Promise((resolve, reject) => {
        actor.subscribe({
          complete: /* @__PURE__ */ __name(() => {
            resolve(actor.getSnapshot().output);
          }, "complete"),
          error: reject
        });
      });
    }
    __name(toPromise2, "toPromise");
    function transition2(logic, snapshot, event) {
      const executableActions = [];
      const actorScope = createInertActorScope(logic);
      actorScope.actionExecutor = (action) => {
        executableActions.push(action);
      };
      const nextSnapshot = logic.transition(snapshot, event, actorScope);
      return [nextSnapshot, executableActions];
    }
    __name(transition2, "transition");
    function initialTransition2(logic, ...[input]) {
      const executableActions = [];
      const actorScope = createInertActorScope(logic);
      actorScope.actionExecutor = (action) => {
        executableActions.push(action);
      };
      const nextSnapshot = logic.getInitialSnapshot(actorScope, input);
      return [nextSnapshot, executableActions];
    }
    __name(initialTransition2, "initialTransition");
    var defaultWaitForOptions = {
      timeout: Infinity
      // much more than 10 seconds
    };
    function waitFor2(actorRef, predicate, options) {
      const resolvedOptions = {
        ...defaultWaitForOptions,
        ...options
      };
      return new Promise((res, rej) => {
        const {
          signal
        } = resolvedOptions;
        if (signal?.aborted) {
          rej(signal.reason);
          return;
        }
        let done = false;
        const handle = resolvedOptions.timeout === Infinity ? void 0 : setTimeout(() => {
          dispose();
          rej(new Error(`Timeout of ${resolvedOptions.timeout} ms exceeded`));
        }, resolvedOptions.timeout);
        const dispose = /* @__PURE__ */ __name(() => {
          clearTimeout(handle);
          done = true;
          sub?.unsubscribe();
          if (abortListener) {
            signal.removeEventListener("abort", abortListener);
          }
        }, "dispose");
        function checkEmitted(emitted) {
          if (predicate(emitted)) {
            dispose();
            res(emitted);
          }
        }
        __name(checkEmitted, "checkEmitted");
        let abortListener;
        let sub;
        checkEmitted(actorRef.getSnapshot());
        if (done) {
          return;
        }
        if (signal) {
          abortListener = /* @__PURE__ */ __name(() => {
            dispose();
            rej(signal.reason);
          }, "abortListener");
          signal.addEventListener("abort", abortListener);
        }
        sub = actorRef.subscribe({
          next: checkEmitted,
          error: /* @__PURE__ */ __name((err) => {
            dispose();
            rej(err);
          }, "error"),
          complete: /* @__PURE__ */ __name(() => {
            dispose();
            rej(new Error(`Actor terminated without satisfying predicate`));
          }, "complete")
        });
        if (done) {
          sub.unsubscribe();
        }
      });
    }
    __name(waitFor2, "waitFor");
    exports.createEmptyActor = actors_dist_xstateActors.createEmptyActor;
    exports.fromCallback = actors_dist_xstateActors.fromCallback;
    exports.fromEventObservable = actors_dist_xstateActors.fromEventObservable;
    exports.fromObservable = actors_dist_xstateActors.fromObservable;
    exports.fromPromise = actors_dist_xstateActors.fromPromise;
    exports.fromTransition = actors_dist_xstateActors.fromTransition;
    exports.Actor = guards_dist_xstateGuards.Actor;
    exports.__unsafe_getAllOwnEventDescriptors = guards_dist_xstateGuards.getAllOwnEventDescriptors;
    exports.and = guards_dist_xstateGuards.and;
    exports.cancel = guards_dist_xstateGuards.cancel;
    exports.createActor = guards_dist_xstateGuards.createActor;
    exports.getStateNodes = guards_dist_xstateGuards.getStateNodes;
    exports.interpret = guards_dist_xstateGuards.interpret;
    exports.isMachineSnapshot = guards_dist_xstateGuards.isMachineSnapshot;
    exports.matchesState = guards_dist_xstateGuards.matchesState;
    exports.not = guards_dist_xstateGuards.not;
    exports.or = guards_dist_xstateGuards.or;
    exports.pathToStateValue = guards_dist_xstateGuards.pathToStateValue;
    exports.raise = guards_dist_xstateGuards.raise;
    exports.spawnChild = guards_dist_xstateGuards.spawnChild;
    exports.stateIn = guards_dist_xstateGuards.stateIn;
    exports.stop = guards_dist_xstateGuards.stop;
    exports.stopChild = guards_dist_xstateGuards.stopChild;
    exports.toObserver = guards_dist_xstateGuards.toObserver;
    exports.SpecialTargets = log2.SpecialTargets;
    exports.assign = log2.assign;
    exports.emit = log2.emit;
    exports.enqueueActions = log2.enqueueActions;
    exports.forwardTo = log2.forwardTo;
    exports.log = log2.log;
    exports.sendParent = log2.sendParent;
    exports.sendTo = log2.sendTo;
    exports.SimulatedClock = SimulatedClock2;
    exports.StateMachine = StateMachine2;
    exports.StateNode = StateNode2;
    exports.assertEvent = assertEvent2;
    exports.createMachine = createMachine2;
    exports.getInitialSnapshot = getInitialSnapshot2;
    exports.getNextSnapshot = getNextSnapshot2;
    exports.initialTransition = initialTransition2;
    exports.setup = setup2;
    exports.toPromise = toPromise2;
    exports.transition = transition2;
    exports.waitFor = waitFor2;
  }
});

// .wrangler/tmp/bundle-nZ7DK4/middleware-loader.entry.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// .wrangler/tmp/bundle-nZ7DK4/middleware-insertion-facade.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// src/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/hono.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/hono-base.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/compose.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/hono/dist/context.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/request.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/utils/body.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// node_modules/hono/dist/utils/url.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label, next) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match[1], new RegExp(`^${match[2]}(?=/${next})`)] : [label, match[1], new RegExp(`^${match[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = class {
  static {
    __name(this, "HonoRequest");
  }
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : void 0;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = /* @__PURE__ */ __name((key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  }, "#cachedBody");
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = /* @__PURE__ */ __name((headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
}, "setHeaders");
var Context = class {
  static {
    __name(this, "Context");
  }
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      _res = new Response(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = /* @__PURE__ */ __name((...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  }, "render");
  setLayout = /* @__PURE__ */ __name((layout) => this.#layout = layout, "setLayout");
  getLayout = /* @__PURE__ */ __name(() => this.#layout, "getLayout");
  setRenderer = /* @__PURE__ */ __name((renderer) => {
    this.#renderer = renderer;
  }, "setRenderer");
  header = /* @__PURE__ */ __name((name, value, options) => {
    if (this.finalized) {
      this.#res = new Response(this.#res.body, this.#res);
    }
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  }, "header");
  status = /* @__PURE__ */ __name((status) => {
    this.#isFresh = false;
    this.#status = status;
  }, "status");
  set = /* @__PURE__ */ __name((key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  }, "set");
  get = /* @__PURE__ */ __name((key) => {
    return this.#var ? this.#var.get(key) : void 0;
  }, "get");
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  }
  newResponse = /* @__PURE__ */ __name((...args) => this.#newResponse(...args), "newResponse");
  body = /* @__PURE__ */ __name((data, arg, headers) => {
    return typeof arg === "number" ? this.#newResponse(data, arg, headers) : this.#newResponse(data, arg);
  }, "body");
  text = /* @__PURE__ */ __name((text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    if (typeof arg === "number") {
      return this.#newResponse(text, arg, headers);
    }
    return this.#newResponse(text, arg);
  }, "text");
  json = /* @__PURE__ */ __name((object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json";
    return typeof arg === "number" ? this.#newResponse(body, arg, headers) : this.#newResponse(body, arg);
  }, "json");
  html = /* @__PURE__ */ __name((html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.#newResponse(html2, arg, headers) : this.#newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.#newResponse(html, arg, headers) : this.#newResponse(html, arg);
  }, "html");
  redirect = /* @__PURE__ */ __name((location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status ?? 302);
  }, "redirect");
  notFound = /* @__PURE__ */ __name(() => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  }, "notFound");
};

// node_modules/hono/dist/router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
  static {
    __name(this, "UnsupportedPathError");
  }
};

// node_modules/hono/dist/utils/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = class {
  static {
    __name(this, "Hono");
  }
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = /* @__PURE__ */ __name((handler) => {
    this.errorHandler = handler;
    return this;
  }, "onError");
  notFound = /* @__PURE__ */ __name((handler) => {
    this.#notFoundHandler = handler;
    return this;
  }, "notFound");
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = /* @__PURE__ */ __name((request) => request, "replaceRequest");
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = /* @__PURE__ */ __name((request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  }, "fetch");
  request = /* @__PURE__ */ __name((input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  }, "request");
  fire = /* @__PURE__ */ __name(() => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  }, "fire");
};

// node_modules/hono/dist/router/reg-exp-router/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/node.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = class {
  static {
    __name(this, "Node");
  }
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node();
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var Trie = class {
  static {
    __name(this, "Trie");
  }
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = class {
  static {
    __name(this, "RegExpRouter");
  }
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/router/smart-router/router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var SmartRouter = class {
  static {
    __name(this, "SmartRouter");
  }
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/node.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = class {
  static {
    __name(this, "Node");
  }
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (Object.keys(curNode.#children).includes(key)) {
        curNode = curNode.#children[key];
        const pattern2 = getPattern(p, nextP);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.#children[key] = new Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: this.#order
    };
    m[method] = handlerSet;
    curNode.#methods.push(m);
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(nextNode.#children["*"], method, node.#params)
              );
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp) {
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
              if (Object.keys(child.#children).length) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat(curNodesQueue.shift() ?? []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  static {
    __name(this, "TrieRouter");
  }
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  static {
    __name(this, "Hono");
  }
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// agent.json
var agent_default = {
  name: "video-analysis-agent",
  description: "Orchestrates video analysis workflows using XState and @xstate/store. Simulates each step with a 1-second delay.",
  instructions: [
    "Use XState v5+ and @xstate/store for all state management.",
    "Each workflow step must simulate a 1-second delay.",
    "Expose a /agent-info endpoint that returns this file as JSON."
  ],
  endpoints: [
    {
      path: "/agent-info",
      method: "GET",
      description: "Returns this agent's description and instructions."
    }
  ]
};

// src/machine.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/xstate/dist/xstate.cjs.mjs
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var import_xstate_cjs = __toESM(require_xstate_cjs(), 1);

// src/machine.js
var testMachine = (0, import_xstate_cjs.createMachine)({
  id: "test",
  initial: "idle",
  states: {
    idle: {
      on: {
        START: "running"
      }
    },
    running: {
      after: {
        1e3: "done"
        // 1-second delay
      }
    },
    done: {
      type: "final"
    }
  }
});

// src/index.js
var app = new Hono2();
app.get("/agent-info", (c) => {
  return c.json(agent_default);
});
app.get("/test-machine", (c) => {
  const actor = (0, import_xstate_cjs.createActor)(testMachine);
  actor.start();
  actor.send({ type: "START" });
  return c.json({ state: actor.getSnapshot().value });
});
var src_default = app;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-nZ7DK4/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-nZ7DK4/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
