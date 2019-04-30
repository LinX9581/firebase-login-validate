## QUICK START

git clone https://github.com/LinX9581/firebase-login-validate.git  
public/firebase-config.js 放入你的firebase api key  

npm i && node index.js  

## Note

# login.html
Firebase Auth 功能  

"Firebase Console => Authentication => 使用者 " 查看使用者增減  
透過郵件、密碼註冊  
或者 FB Google 登入  

# realtimefirebase.html
Firebase realtime 功能  

"Firebase Console => Realtime Database => 資料"  

做好關聯 即可push資料進去  

<pre>
let root = firebase.database().ref();
let msgRef = root.child(name);
msgRef.push()
</pre>   

# valadatejsform.html
加入 [Validate.js](https://validatejs.org/) 做表單驗證  

上面只是透過 Bootstrap4 原生驗證功能  
