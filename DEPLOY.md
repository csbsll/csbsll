# AI女友聊天室 - 部署配置

## GitHub Pages 部署

这个项目已经配置了自动部署到 GitHub Pages。

### 部署步骤

1. **创建 GitHub 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI女友聊天室"
   git branch -M main
   git remote add origin https://github.com/你的用户名/ai-girlfriend-chat.git
   git push -u origin main
   ```

2. **启用 GitHub Pages**
   - 进入仓库的 Settings 页面
   - 在左侧菜单找到 Pages
   - Source 选择 "GitHub Actions"

3. **自动部署**
   - 推送代码到 main 分支会自动触发部署
   - 部署完成后，访问：`https://你的用户名.github.io/ai-girlfriend-chat/`

### 本地测试

```bash
# 使用 Python 启动本地服务器
python -m http.server 8000

# 或使用 Node.js
npx serve .

# 然后访问 http://localhost:8000
```

### 其他部署选项

#### Netlify
1. 将代码推送到 GitHub
2. 在 Netlify 中连接 GitHub 仓库
3. 构建设置：留空（静态站点）
4. 发布目录：留空（根目录）

#### Vercel
1. 安装 Vercel CLI：`npm i -g vercel`
2. 运行：`vercel`
3. 按提示完成部署

#### GitHub Pages 手动部署
1. 在仓库 Settings > Pages 中
2. Source 选择 "Deploy from a branch"
3. Branch 选择 main，文件夹选择 /(root)

### 注意事项

- 确保所有文件路径使用相对路径
- API 密钥需要用户自行配置
- 某些 AI 服务可能有 CORS 限制，生产环境可能需要后端代理

### 环境变量配置

对于生产环境，建议：
1. 将 API 密钥存储在环境变量中
2. 使用后端服务代理 API 请求
3. 实现用户认证和密钥管理