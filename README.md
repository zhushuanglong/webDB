# webDB
`无依赖`localStorage以json存取，若浏览器不兼容，自动降级到cookie

### 注意点
1. 如果浏览器不支持localStorage,cookie是会向服务器发送的
2. 不能做为大量数据的存储
3. 不适合放置敏感数据
当然这是由localstorage、cookie自身特点所决定的

### 使用方法
```javascript
var db = new webDB();

//保存数据
db.setJson({a:'1',b:1,c:1});

//读取数据
console.log(db.getJson()); //{a: "1", b: 1, c: 1}

//清空数据
db.clear();
```

-----------
目前API比较简单,每次操作都会重写localStorage/cookie,也无法回滚,真有使用场景了,再来加