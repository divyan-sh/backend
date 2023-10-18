/* 
$ Core Modules-->

In JS if we required additional functionalities apart from the core concepts of JS what we do..
we just download or import some additional libraries from the internet into our project and simply use..

But in node.js what i will do if i want to use some extra functionalities or if i want to power up my node server-->

# There is some built in modules provided in node.js which boot the power of your server by providing it extra functionalities..

-- These built in modules are called Core Modules of Node.js

To use this core modules u don't need to install it using NPM
just import(ES6 syntax) it or require(old JS Syntax) it..

For ex--> 
--> File System or fs is core module of node js which provides us functionality to play with files..

to use this module all u have to do is-->
* const fs= require('fs');

As of version v14.15.1 of NODE.js
we have currently following modules-->

>> Array                 ArrayBuffer           Atomics               BigInt                BigInt64Array
>> BigUint64Array        Boolean               Buffer                DataView              Date
>> Error                 EvalError             FinalizationRegistry  Float32Array          Float64Array
>> Function              Infinity              Int16Array            Int32Array            Int8Array
>> Intl                  JSON                  Map                   Math                  NaN
>> Number                Object                Promise               Proxy                 RangeError
>> ReferenceError        Reflect               RegExp                Set                   SharedArrayBuffer
>> String                Symbol                SyntaxError           TextDecoder           TextEncoder
>> TypeError             URIError              URL                   URLSearchParams       Uint16Array
>> Uint32Array           Uint8Array            Uint8ClampedArray     WeakMap               WeakRef
>> WeakSet               WebAssembly           _                     _error                assert
>> async_hooks           buffer                child_process         clearImmediate        clearInterval
>> clearTimeout          cluster               console               constants             crypto
>> decodeURI             decodeURIComponent    dgram                 dns                   domain
>> encodeURI             encodeURIComponent    escape                eval                  events
>> fs                    global                globalThis            http                  http2
>> https                 inspector             isFinite              isNaN                 module
>> net                   os                    parseFloat            parseInt              path
>> perf_hooks            process               punycode              querystring           queueMicrotask
>> readline              repl                  require               setImmediate          setInterval
>> setTimeout            stream                string_decoder        sys                   timers
>> tls                   trace_events          tty                   undefined             unescape
>> url                   util                  v8                    vm                    wasi
>> worker_threads        zlib

>> __defineGetter__      __defineSetter__      __lookupGetter__      __lookupSetter__      __proto__
>> hasOwnProperty        isPrototypeOf         propertyIsEnumerable  toLocaleString        toString
>> valueOf

>> constructor

*/
