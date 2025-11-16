# API密钥配置说明

## 功能概述
AI女友聊天应用现已支持完整的API密钥配置功能，包括：
- 7个AI服务的API密钥配置
- 实时保存到本地存储
- API连接测试功能
- 密钥显示/隐藏切换

## 支持的AI服务
1. **DeepSeek** - 深度求索AI服务
2. **Kimi** - 月之暗面AI服务  
3. **通义千问** - 阿里云AI服务
4. **智谱清言** - 智谱AI服务
5. **阶跃星辰** - 阶跃星辰AI服务
6. **腾讯元宝** - 腾讯AI服务
7. **豆包** - 火山引擎AI服务

## 使用方法

### 1. 配置API密钥
1. 点击右上角的设置按钮（⚙️）
2. 在设置面板中找到"API密钥配置"部分
3. 输入各服务的API密钥
4. 点击"保存密钥"按钮

### 2. 测试API连接
1. 配置完API密钥后
2. 点击"测试连接"按钮
3. 系统会自动测试所有已配置的API
4. 显示连接测试结果

### 3. 密钥管理
- 👁️ 点击眼睛图标可以显示/隐藏密钥
- 输入密钥时边框会变色提示
- 密钥自动保存到浏览器本地存储

## 通义千问API调用修复 ✅

### 问题解决
我们已成功修复了通义千问API的调用问题：

1. **API端点更新**：
   - 从：`https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation`
   - 改为：`https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`

2. **请求格式优化**：
   - 使用OpenAI兼容格式，简化请求结构
   - 直接使用`messages`数组，不再嵌套在`input`对象中
   - 参数直接放在根级别，不再使用`parameters`包装

3. **响应处理改进**：
   - 直接从`data.choices[0].message.content`获取回复
   - 简化响应解析逻辑

### 正确的API调用格式

```javascript
const response = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'X-DashScope-SSE': 'disable'
    },
    body: JSON.stringify({
        model: 'qwen-flash',
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: message }
        ],
        max_tokens: 1000,
        temperature: 0.7
    })
});
```

### 测试步骤
1. 打开应用设置
2. 配置通义千问API密钥
3. 点击"测试连接"验证
4. 选择使用通义千问的AI女友进行聊天测试

## API密钥获取方式

### DeepSeek
- 访问：https://platform.deepseek.com/
- 注册账号并获取API Key

### Kimi
- 访问：https://platform.moonshot.cn/
- 注册账号并获取API Key

### 通义千问
- 访问：https://dashscope.aliyuncs.com/
- 开通服务并获取API Key

### 其他服务
请访问各AI服务官网获取相应的API密钥

### 豆包
- 访问：https://www.volcengine.com/products/ark
- 注册账号并开通火山方舟服务
- 获取API Key用于豆包模型调用

## 注意事项
1. API密钥会安全存储在浏览器本地存储中
2. 请妥善保管API密钥，不要泄露给他人
3. 如果API调用失败，系统会自动使用备用回复
4. 建议定期测试API连接确保密钥有效

## 故障排除
如果仍然遇到API调用问题：
1. 检查API密钥是否正确
2. 确认网络连接正常
3. 验证API服务是否可用
4. 查看浏览器控制台错误信息

现在你可以正常使用所有AI服务了！🎉