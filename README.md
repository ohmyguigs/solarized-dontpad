# Solarized Dontpad

A basic chrome extension that applies Solarized Dark theme to [DontPad](http://dontpad.com/). An exemple using [Webpack](https://webpack.github.io/) to help write modular and modern Javascript code, load CSS easily and [automatic reload the browser on code changes](https://webpack.github.io/docs/webpack-dev-server.html#automatic-refresh).

## Dev
_I'll assume that you already read the [Webpack docs](https://webpack.js.org) and the [Chrome Extension](https://developer.chrome.com/extensions/getstarted) docs._


1. Check if your Node.js version is ~ v10.19.0.
2. Clone the repository.
3. Install [yarn](https://yarnpkg.com/lang/en/docs/install/).
4. Run `yarn`.
5. Run `yarn run start`
6. Load your extension on Chrome following:
    1. Access `chrome://extensions/`
    2. Check `Developer mode`
    3. Click on `Load unpacked extension`
    4. Select the `build` folder.
7. Have fun with hot-reload editing popup module in `src/popup.html and src/js/popup.js`.
8. Obs: o `src/js/actualCode.js` que é de fato o código que aplica o tema na pagina do dontpad não suporta hot-reload, então eu marretei mesmo la no webpack pra não ver esse arquivo, se editar restarte o server do passo 5.

## WIP Roadmap
 - [ ] talvez transformar num editor de tema de dontpad.
 - [ ] talvez usar react, vue ou svelte.

## Ship
```
$ NODE_ENV=production yarn run build
```
