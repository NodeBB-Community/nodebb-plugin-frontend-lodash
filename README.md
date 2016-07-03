### Easy lodash for NodeBB on client side

Do you use `lodash` library on client side in your plugins?  
I do a lot. And I find it quite troublesome to put the library almost in each and every plugin I make. Furthermore, it rather more troublesome then to `require` the library in a manner like this:

```js
require(['../../plugins/nodebb-plugin-my-long-plugin-name/public/js/vendor/lodash/lodash.min'], function (_) {
    //
});
```

Now imagine if you use the `lodash` library in your plugin a, plugin b and plugin c. All of them will `require` the library from themself. Since all of the plugins have different base urls, `RequireJS` will make three different HTTP requests.

#### Gimme a break!

After installing this plugin you will be able to:
```js
require(['lodash'], function (_) {
    // now you can use the latest "lodash": "^4.0.0"
});
```

That's it, nothing more, nothing less. I hope it will helps you.

#### Installation
```sh
cd /path/to/nodebb
npm install nodebb-plugin-frontend-lodash
```
Or via NodeBB Admin panel.

To get this plugin installed automatically along with your plugin, just specify in your `plugin.json`
```js
"dependencies": {
	"nodebb-plugin-frontend-lodash": "^0"
},
"peerDependencies": {
	"nodebb-plugin-frontend-lodash": "^0"
}
```
Why both `dependencies` and `peerDependencies`? That's because of different behavior in npm v2 and npm v3. You can read more about the issue and the workaround in [this blog post](https://codingwithspike.wordpress.com/2016/01/21/dealing-with-the-deprecation-of-peerdependencies-in-npm-3/)

**Don't forget to Enable the plugin in the Admin panel after installing. And to instruct your plugin users to do that little extra step!**

#### Information
The plugin:  
1. doesn't modify any source of NodeBB  
2. gets `lodash.min.js` from NodeBB `node_modules`  
3. injects `lodash` directly to `RequireJS` way before DOM is ready  
