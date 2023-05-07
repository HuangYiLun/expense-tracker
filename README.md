# 家庭記帳本

## 介紹
新增支出的類別及金額，計算花費總支出


### 功能
- 可以註冊使用者帳號
- 可以使用facebook登入
- 在首頁一次瀏覽所有支出的清單
- 在首頁看到所有支出清單的總金額
- 新增一筆支出
- 編輯支出的屬性
- 刪除任何一筆支出
- 根據「類別」篩選支出，總金額的計算只會包括被篩選出來的支出總和


## 開始使用
1. 將專案clone至本機
 ```bash
 git clone https://github.com/HuangYiLun/expense-tracker.git
 ```
2. 開啟終端機進入資料夾
3. 安裝npm，輸入：
```bash
 npm install
```
4. 設定MongoDB連線：
```bash
MONGODB_URI = mongodb+srv://<MongoDB Account>:<MongoDB Password>@cluster0.xxxxx.mongodb.net/expense-tracker?retryWrites=true&w=majority
```
4. 生成種子資料，請輸入：
```bash
npm run seed
```
4. 啟動app，繼續輸入：
```bash
npm run dev
```
5. 顯示下列資訊代表成功運行，開啟瀏覽器輸入網址http://localhost:3000
```bash
App is listening on http://localhost:3000
```
6. 結束時，請於終端機輸入：
```bash
ctril + c
```

## 開發工具

- Node.js 14.16.0
- Express 4.18.2
- Express-Handlebars 4.0.2
- express-sesssion 1.15.5
- method-override  3.0.0
- bcryptjs 2.4.3
- mongoose 5.13.17
- passport 0.4.1
- passport-local 1.0.0
- passport-facebook 3.0.0
- Bootswatch 5 cerulean
- Font-awesome 6.2.1