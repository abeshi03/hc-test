## 環境構築


```
git clone https://github.com/abeshi03/hc-test.git
```

まずはリポジトリをcloneしてください。


※nvmが入っていない場合はinstallしてください


```
brew install nvm
```


Nodeバージョンを18.17.0に合わせてください。

```
nvm install v18.17.0

nvm use 18.17.0

node -v

>18.17.0 になっていればOK
```


```
npm run dev
```


http://localhost:3000/

でトップページにアクセスできればOKです。


## 課題前の準備


masterブランチからfeature/coding_testという作業ブランチを切ってください。


## 課題内容

src/pages/index.jsにユーザー一覧が表示されています。

/usersという新しいページを作成し、ユーザー取得部分を下記のTanStackQueryに置き換えて実装してください。

https://tanstack.com/query/v3/


※HTMLとCSS部分はそのまま流用して、ユーザー取得部分の修正だけ加えてください。

※TanStackQueryはinstallされていないのでご自身でinstallしてください。



## 実装完了したら

実装完了しましたら、feature/coding_testにブランチにpushして、masterブランチに向けてプルリクエストを作成してください。
