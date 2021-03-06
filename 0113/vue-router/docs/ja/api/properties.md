# Router インスタンスプロパティ

> パブリックなプロパティのみがここに記載されています。

### `router.app`

- 型: `Vue`

  root Vue インスタンスはルーターインスタンスによって管理されます。このインスタンスは `router.start()` に渡した Vue コンポーネントのコンストラクタから作成されます。

### `router.mode`

- 型: `String`

  `html5` 、`hash` または `abstract` のいずれか。

  - **`html5`**: HTML5 history API を使用し、`popstate`イベントをリッスンします。[`saveScrollPosition`](../options.html#savescrollposition) をサポートします。

  - **`hash`**: `location.hash` と `hashchange` イベントをリッスンして使用します。ルーターを作成するときに、`history: true` を指定するとき、history API をサポートしていないブラウザでは hash モードにフォールバックします。

  - **`abstract`**: 全てのイベントをリッスンしません。`window` が存在しない場合、このモードに自動でフォールバックします。
