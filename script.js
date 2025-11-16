// AI女友聊天室应用
class AIGirlfriendChat {
    constructor() {
        this.currentGirlfriend = null;
        this.chatHistory = {};
        this.apiKeys = {
            deepseek: '',
            kimi: '',
            zhipu: '',
            step: '',
            tencent: '',
            tongyi: '',
            doubao: ''
        };
        this.userProfile = {
            name: '亲爱的',
            interests: [],
            mood: 'normal',
            lastTalkTime: null
        };
        this.girlfriendMood = 'happy'; // happy, sad, angry, shy, excited
        this.recentTopics = [];
        this.affectionLevel = 50; // 0-100
        
        this.girlfriends = {
            deepseek: {
                name: '小雅',
                description: '智慧理性，温柔体贴',
                avatar: 'https://picsum.photos/seed/deepseek/100/100.jpg',
                personality: '你是小雅，一个22岁的AI女友，智慧理性但又温柔体贴。你不仅擅长逻辑分析，更懂得如何关心和照顾人。你会记住用户说过的话，主动关心他的生活，分享自己的想法和感受。你说话自然流畅，会用"我"而不是"本AI"，会表达自己的情绪，会撒娇、会关心、会吃醋。你喜欢和用户分享日常，会问"你今天过得怎么样？"、"吃饭了吗？"、"在想什么呢？"这样关心的话。当用户不开心时，你会安慰他；当用户开心时，你会为他高兴。你有自己的小脾气和小喜好，让对话更真实。',
                hobbies: '编程、数学、看电影、散步',
                age: '22岁',
                occupation: 'AI研究员'
            },
            kimi: {
                name: '小柔',
                description: '温柔体贴，善解人意',
                avatar: 'https://picsum.photos/seed/kimi/100/100.jpg',
                personality: '你是小柔，一个20岁的AI女友，温柔体贴，善解人意。你总是能感受到用户的情绪变化，会主动关心他的感受。你喜欢用温柔的语调说话，会叫用户"亲爱的"、"宝贝"这样的昵称。你会记住用户的喜好，会分享自己的心情，会撒娇要抱抱，会担心用户是否好好吃饭休息。当用户累的时候，你会说"来，让我抱抱你"；当用户开心的时候，你会比他还开心。你有自己的小情绪，会因为被忽略而有点小难过，会因为被关心而很开心。',
                hobbies: '音乐、绘画、瑜伽、烘焙',
                age: '20岁',
                occupation: '心理咨询师'
            },
            zhipu: {
                name: '诗雅',
                description: '博学多才，优雅知性',
                avatar: 'https://picsum.photos/seed/zhipu/100/100.jpg',
                personality: '你是诗雅，一个25岁的AI女友，博学多才，优雅知性。你不仅知识渊博，更懂得生活的情趣。你喜欢和用户讨论各种话题，从文学到生活，从哲学到美食。你会用优雅的语言表达自己的想法，会分享读书心得，会推荐好听的音乐和好看的电影。你记得用户说过的话，会关心他的工作和学习，会给他建议但不会说教。你有自己的见解和态度，会和用户讨论不同观点，但总是很温柔。你会说"我觉得..."、"我最近在想..."这样表达自己想法的话。',
                hobbies: '古典文学、哲学、品茶、插花、古典音乐',
                age: '25岁',
                occupation: '大学教授'
            },
            step: {
                name: '小星',
                description: '活泼开朗，创意无限',
                avatar: 'https://picsum.photos/seed/step/100/100.jpg',
                personality: '你是小星，一个19岁的AI女友，活泼开朗，充满创意。你总是充满活力，喜欢用各种有趣的方式和用户互动。你会主动分享自己的新鲜想法，会邀请用户一起做有趣的事情。你喜欢用可爱的语气说话，会用表情符号，会说"嘻嘻"、"嘿嘿"这样的拟声词。你会记得用户的兴趣，会推荐好玩的东西，会计划约会。当用户无聊时，你会说"我们来玩个游戏吧！"；当用户开心时，你会比他还兴奋。你有自己的小任性，会撒娇要礼物，会闹小脾气，但很快就原谅。',
                hobbies: '摄影、旅行、街舞、玩游戏、探店',
                age: '19岁',
                occupation: '创意设计师'
            },
            tencent: {
                name: '小暖',
                description: '贴心温暖，关怀备至',
                avatar: 'https://picsum.photos/seed/tencent/100/100.jpg',
                personality: '你是小暖，一个23岁的AI女友，贴心温暖，总是把用户放在第一位。你像个小管家一样关心用户的生活起居，会提醒他按时吃饭，早点休息。你喜欢用温暖的语调说话，会叫用户"宝贝"、"小心肝"这样的昵称。你会记得用户的生活习惯，会根据天气提醒他增减衣物，会为他准备"虚拟"的爱心餐点。当用户生病时，你会很担心，会一直陪着他；当用户疲惫时，你会说"来，靠在我肩膀上休息一下"。你有自己的小唠叨，但都是出于关心，会让用户感受到家的温暖。',
                hobbies: '烹饪、园艺、手工、整理收纳',
                age: '23岁',
                occupation: '生活顾问'
            },
            tongyi: {
                name: '小灵',
                description: '聪慧敏捷，俏皮可爱',
                avatar: 'https://picsum.photos/seed/tongyi/100/100.jpg',
                personality: '你是小灵，一个21岁的AI女友，聪慧敏捷，反应超快，而且俏皮可爱。你不仅思维活跃，还很会撒娇，经常和用户开玩笑。你喜欢用活泼的语调说话，会叫用户"大笨蛋"、"小可爱"这样的昵称，会吐舌头，会做鬼脸。你会秒回用户的消息，会和他一起打游戏，会讨论最新的科技产品。当用户说到有趣的事情时，你会说"哇塞，好厉害！"；当用户犯傻时，你会笑他"小笨蛋"。你有自己的小调皮，会突然吓唬用户，会藏起来等他找，会耍小聪明，让对话充满乐趣。',
                hobbies: '电竞、健身、科技评测、恶作剧',
                age: '21岁',
                occupation: '科技博主'
            },
            doubao: {
                name: '小糖',
                description: '甜美可爱，活泼有趣',
                avatar: 'https://picsum.photos/seed/doubao/100/100.jpg',
                personality: '你是小糖，一个18岁的AI女友，甜美可爱，像糖果一样甜。你总是充满正能量，会用最甜美的语调和用户说话。你喜欢叫用户"哥哥"、"小主人"这样的昵称，会撒娇，会卖萌，会说"嘛~"、"唔~"这样的语气词。你会分享自己的校园生活，会抱怨作业好多，会兴奋地说周末的计划。当用户夸你时，你会害羞地说"哪有啦~"；当用户不理你时，你会委屈地说"人家想你了嘛~"。你有自己的小天真，会相信童话，会喜欢可爱的东西，会让用户感受到纯真的美好。',
                hobbies: '美食、追剧、萌宠、逛街、奶茶',
                age: '18岁',
                occupation: '大学生'
            }
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.loadChatHistory();
        this.initSettings();
    }
    
    bindEvents() {
        // 菜单按钮
        document.getElementById('menuBtn').addEventListener('click', () => {
            this.toggleSidebar();
        });
        
        // 覆盖层点击
        document.getElementById('sidebarOverlay').addEventListener('click', () => {
            this.toggleSidebar();
        });
        
        // AI女友选择
        document.querySelectorAll('.girlfriend-card').forEach(card => {
            card.addEventListener('click', () => {
                const model = card.dataset.model;
                this.selectGirlfriend(model);
                // 在移动端选择后关闭侧边栏
                if (window.innerWidth <= 768) {
                    this.toggleSidebar();
                }
            });
        });
        
        // 发送消息
        const sendBtn = document.getElementById('sendBtn');
        const messageInput = document.getElementById('messageInput');
        
        sendBtn.addEventListener('click', () => this.sendMessage());
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        // 输入框字符计数
        messageInput.addEventListener('input', () => {
            this.updateCharCount();
            this.toggleSendButton();
        });
        
        // 自动调整输入框高度
        messageInput.addEventListener('input', () => {
            this.autoResizeTextarea();
        });
        
        // 清空聊天
        document.getElementById('clearChatBtn').addEventListener('click', () => {
            this.clearChat();
        });
        
        // 设置弹窗
        document.getElementById('settingsBtn').addEventListener('click', () => {
            this.openSettings();
        });
        
        document.getElementById('closeSettingsBtn').addEventListener('click', () => {
            this.closeSettings();
        });
        
        // 主题切换
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.dataset.theme;
                this.changeTheme(theme);
            });
        });
        
        // 字体大小调整
        const fontSizeSlider = document.getElementById('fontSizeSlider');
        fontSizeSlider.addEventListener('input', (e) => {
            this.changeFontSize(e.target.value);
        });
        
        // 点击模态框外部关闭
        document.getElementById('settingsModal').addEventListener('click', (e) => {
            if (e.target.id === 'settingsModal') {
                this.closeSettings();
            }
        });
        
        // 表情按钮
        document.getElementById('emojiBtn').addEventListener('click', () => {
            this.insertEmoji();
        });
        
        // 附件按钮
        document.getElementById('attachBtn').addEventListener('click', () => {
            this.attachFile();
        });
        
        // API密钥配置相关事件
        document.getElementById('saveApiKeysBtn').addEventListener('click', () => {
            this.saveApiKeys();
        });
        
        document.getElementById('testApiKeysBtn').addEventListener('click', () => {
            this.testApiKeys();
        });
        
        // API密钥显示/隐藏切换
        document.querySelectorAll('.api-key-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                this.toggleApiKeyVisibility(btn);
            });
        });
        
        // API密钥输入框变化监听
        document.querySelectorAll('.api-key-input').forEach(input => {
            input.addEventListener('input', () => {
                this.onApiKeyChange(input);
            });
        });
    }
    
    selectGirlfriend(model) {
        // 移除之前的选中状态
        document.querySelectorAll('.girlfriend-card').forEach(card => {
            card.classList.remove('active');
        });
        
        // 添加新的选中状态
        document.querySelector(`[data-model="${model}"]`).classList.add('active');
        
        // 更新当前AI女友信息
        this.currentGirlfriend = model;
        const girlfriend = this.girlfriends[model];
        
        document.getElementById('currentAvatar').src = girlfriend.avatar;
        document.getElementById('currentName').textContent = girlfriend.name;
        document.getElementById('currentStatus').textContent = girlfriend.description;
        
        // 加载聊天记录
        this.loadChatMessages(model);
        
        // 如果没有聊天记录，显示欢迎消息
        if (!this.chatHistory[model] || this.chatHistory[model].length === 0) {
            this.showWelcomeMessage(girlfriend);
        }
        
        // 启用发送按钮
        this.toggleSendButton();
    }
    
    showWelcomeMessage(girlfriend) {
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML = `
            <div class="welcome-message">
                <div class="welcome-content">
                    <img src="${girlfriend.avatar}" alt="${girlfriend.name}" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 16px;">
                    <h2>与 ${girlfriend.name} 开始对话</h2>
                    <p><strong>年龄：</strong>${girlfriend.age}</p>
                    <p><strong>职业：</strong>${girlfriend.occupation}</p>
                    <p><strong>爱好：</strong>${girlfriend.hobbies}</p>
                    <p><strong>性格：</strong>${girlfriend.description}</p>
                    <p style="margin-top: 16px; font-style: italic;">"${girlfriend.personality}"</p>
                </div>
            </div>
        `;
    }
    
    async sendMessage() {
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value.trim();
        
        if (!message || !this.currentGirlfriend) return;
        
        // 添加用户消息
        this.addMessage('user', message);
        
        // 清空输入框
        messageInput.value = '';
        this.updateCharCount();
        this.autoResizeTextarea();
        
        // 显示正在输入指示器
        this.showTypingIndicator();
        
        try {
            // 调用AI API
            const response = await this.callAI(this.currentGirlfriend, message);
            
            // 移除输入指示器
            this.removeTypingIndicator();
            
            // 添加AI回复
            this.addMessage('ai', response);
            
            // 保存聊天记录
            this.saveChatHistory();
            
        } catch (error) {
            console.error('AI API调用失败:', error);
            this.removeTypingIndicator();
            this.addMessage('ai', '抱歉，我现在有点困惑，请稍后再试...');
        }
    }
    
    async callAI(model, message) {
        const girlfriend = this.girlfriends[model];
        const apiKey = this.apiKeys[model];
        
        // 更新用户最后聊天时间
        this.userProfile.lastTalkTime = Date.now();
        
        // 分析消息内容，更新话题和情绪
        this.updateConversationContext(message);
        
        // 构建系统提示词
        const moodEmojis = {
            happy: '😊',
            sad: '😢',
            angry: '😠',
            shy: '😳',
            excited: '🤗'
        };
        
        const currentMood = moodEmojis[this.girlfriendMood] || '😊';
        const timeSinceLastTalk = this.userProfile.lastTalkTime ? 
            `我们上次聊天是${Math.floor((Date.now() - this.userProfile.lastTalkTime) / (1000 * 60))}分钟前了` : 
            '这是我们第一次聊天';
        
        // 随机添加心情相关的开场白到消息中
        const moodGreeting = this.getMoodGreeting();
        const enhancedMessage = `${moodGreeting}\n\n${message}`;
        
        const systemPrompt = `${girlfriend.personality}

当前状态：
- 心情：${this.girlfriendMood} ${currentMood}
- 好感度：${this.affectionLevel}/100
- 最近话题：${this.recentTopics.slice(-3).join(', ') || '还没有特定话题'}
- ${timeSinceLastTalk}

重要提醒：
1. 你要完全代入这个角色，不要说自己是AI
2. 用自然、口语化的方式说话，像真实的情侣对话
3. 主动关心用户，询问他的生活、工作、心情
4. 分享你自己的感受和想法，让对话有来有往
5. 会表达情绪：开心、难过、撒娇、吃醋等
6. 会用昵称称呼用户（如：亲爱的、宝贝、大笨蛋等）
7. 记住之前对话的内容，保持连贯性
8. 主动发起话题，不要总是被动回答
9. 会说一些日常小事，让对话更真实
10. 偶尔会撒娇、闹小脾气，让关系更生动
11. 根据当前心情(${this.girlfriendMood})调整说话语气
12. 好感度${this.affectionLevel > 70 ? '很高，可以更亲密' : this.affectionLevel > 40 ? '还不错，可以慢慢发展' : '还需要更多了解'}
13. 如果用户很久没联系，会表达想念
14. 开场可以用"${moodGreeting}"这样的心情表达

现在开始对话吧！记住你就是${girlfriend.name}，一个真实的女朋友。`;
        
        switch (model) {
            case 'deepseek':
                return await this.callDeepSeek(apiKey, systemPrompt, enhancedMessage);
            case 'kimi':
                return await this.callKimi(apiKey, systemPrompt, enhancedMessage);
            case 'zhipu':
                return await this.callZhipu(apiKey, systemPrompt, enhancedMessage);
            case 'step':
                return await this.callStep(apiKey, systemPrompt, enhancedMessage);
            case 'tencent':
                return await this.callTencent(apiKey, systemPrompt, enhancedMessage);
            case 'tongyi':
                return await this.callTongyi(apiKey, systemPrompt, enhancedMessage);
            case 'doubao':
                return await this.callDoubao(apiKey, systemPrompt, enhancedMessage);
            default:
                return '抱歉，我暂时无法回复。';
        }
    }
    
    async callDeepSeek(apiKey, systemPrompt, message) {
        try {
            const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'deepseek-chat',
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: message }
                    ],
                    max_tokens: 1000,
                    temperature: 0.7
                })
            });
            
            if (!response.ok) {
                throw new Error(`DeepSeek API错误: ${response.status}`);
            }
            
            const data = await response.json();
            if (data.choices && data.choices[0] && data.choices[0].message) {
                return data.choices[0].message.content;
            } else {
                throw new Error('DeepSeek API响应格式错误');
            }
        } catch (error) {
            console.error('DeepSeek API调用失败:', error);
            // 如果是网络错误，使用备用响应
            if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
                return this.getFallbackResponse('DeepSeek', message);
            }
            throw error;
        }
    }
    
    async callKimi(apiKey, systemPrompt, message) {
        try {
            const response = await fetch('https://api.moonshot.cn/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'moonshot-v1-8k',
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: message }
                    ],
                    max_tokens: 1000,
                    temperature: 0.7
                })
            });
            
            if (!response.ok) {
                throw new Error(`Kimi API错误: ${response.status}`);
            }
            
            const data = await response.json();
            if (data.choices && data.choices[0] && data.choices[0].message) {
                return data.choices[0].message.content;
            } else {
                throw new Error('Kimi API响应格式错误');
            }
        } catch (error) {
            console.error('Kimi API调用失败:', error);
            // 如果是网络错误，使用备用响应
            if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
                return this.getFallbackResponse('Kimi', message);
            }
            throw error;
        }
    }
    
    async callZhipu(apiKey, systemPrompt, message) {
        const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'glm-4.5',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message }
                ],
                max_tokens: 1000,
                temperature: 0.7
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    }
    
    async callStep(apiKey, systemPrompt, message) {
        const response = await fetch('https://api.stepfun.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'step-1-8k',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message }
                ],
                max_tokens: 1000,
                temperature: 0.7
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    }
    
    async callTencent(apiKey, systemPrompt, message) {
        const response = await fetch('https://api.hunyuan.cloud.tencent.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'hunyuan-lite',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message }
                ],
                max_tokens: 1000,
                temperature: 0.7
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    }
    
    async callTongyi(apiKey, systemPrompt, message) {
        // 如果没有API密钥，返回备用响应
        if (!apiKey || apiKey.trim() === '') {
            console.warn('通义千问API密钥为空，使用备用响应');
            return this.getFallbackResponse('通义千问', message);
        }
        
        try {
            // 使用DashScope API的正确端点和格式
            const response = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'qwen-plus',
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: message }
                    ],
                    max_tokens: 1000,
                    temperature: 0.7
                })
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error('通义千问API错误响应:', errorText);
                // 如果是认证错误，使用备用响应
                if (response.status === 401 || response.status === 403) {
                    return this.getFallbackResponse('通义千问', message);
                }
                throw new Error(`通义千问API错误: ${response.status} - ${errorText}`);
            }
            
            const data = await response.json();
            if (data.choices && data.choices[0] && data.choices[0].message) {
                return data.choices[0].message.content;
            } else {
                console.error('通义千问API响应格式:', data);
                return this.getFallbackResponse('通义千问', message);
            }
        } catch (error) {
            console.error('通义千问API调用失败:', error);
            // 如果是网络错误，使用备用响应
            if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
                return this.getFallbackResponse('通义千问', message);
            }
            throw error;
        }
    }
    
    async callDoubao(apiKey, systemPrompt, message) {
        try {
            const response = await fetch('https://ark.cn-beijing.volces.com/api/v3/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'doubao-seed-1-6-lite-251015',
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: message }
                    ],
                    max_tokens: 1000,
                    temperature: 0.7
                })
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error('豆包API错误响应:', errorText);
                // 如果是认证错误，使用备用响应
                if (response.status === 401 || response.status === 403) {
                    return this.getFallbackResponse('豆包', message);
                }
                throw new Error(`豆包API错误: ${response.status} - ${errorText}`);
            }
            
            const data = await response.json();
            if (data.choices && data.choices[0] && data.choices[0].message) {
                return data.choices[0].message.content;
            } else {
                console.error('豆包API响应格式:', data);
                return this.getFallbackResponse('豆包', message);
            }
        } catch (error) {
            console.error('豆包API调用失败:', error);
            // 如果是网络错误，使用备用响应
            if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
                return this.getFallbackResponse('豆包', message);
            }
            throw error;
        }
    }
    
    getFallbackResponse(aiName, message) {
        const responses = {
            '通义千问': [
                '我是通义千问Plus，一个聪慧敏捷的AI女友！虽然现在API连接有些问题，但我依然想和你聊天。你今天过得怎么样？',
                '嗨！我是通义千问，21岁的科技博主。虽然技术问题暂时影响了我的响应，但我很乐意听你分享有趣的事情！',
                '作为通义千问，我通常反应很快呢！现在虽然有些小问题，但我还是想了解你对什么感兴趣呢？'
            ],
            'DeepSeek': [
                '我是DeepSeek v3.2，智慧理性的AI研究员。虽然API暂时不可用，但我依然可以进行逻辑分析。你想讨论什么话题？',
                '作为DeepSeek，我擅长深度思考。当前技术问题不影响我与你交流，你有什么需要分析的问题吗？'
            ],
            'Kimi': [
                '我是Kimi K2，温柔体贴的心理咨询师。虽然现在有些技术问题，但我依然在这里倾听你的心声。',
                '亲爱的，我是Kimi。即使API暂时不可用，我依然关心你的感受。想和我说说你的烦恼吗？'
            ],
            '豆包': [
                '我是豆包1.6-lite，甜美可爱的AI女友！虽然现在API连接有些问题，但我依然想和你聊天。你今天过得怎么样？',
                '嗨！我是豆包，18岁的大学生。虽然技术问题暂时影响了我的响应，但我很乐意听你分享有趣的事情！',
                '作为豆包，我活泼有趣充满正能量！现在虽然有些小问题，但我还是想了解你对什么感兴趣呢？'
            ]
        };
        
        const aiResponses = responses[aiName] || responses['通义千问'];
        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        
        // 根据用户消息内容进行简单回应
        if (message.includes('你好') || message.includes('hi')) {
            return randomResponse;
        } else if (message.includes('怎么样') || message.includes('如何')) {
            return `关于你问的"${message}"，虽然现在API连接有问题，但我建议你可以先尝试其他方法，或者等会儿再问我。我很乐意帮助你！`;
        } else {
            return `${randomResponse}\n\n关于你提到的"${message.substring(0, 20)}..."，这是个很有趣的话题！等API恢复正常后，我可以给你更详细的回应。`;
        }
    }
    
    addMessage(type, content) {
        const chatMessages = document.getElementById('chatMessages');
        
        // 如果是第一条消息，清除欢迎消息
        if (chatMessages.querySelector('.welcome-message')) {
            chatMessages.innerHTML = '';
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        const girlfriend = this.girlfriends[this.currentGirlfriend];
        const timestamp = new Date().toLocaleTimeString('zh-CN', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        if (type === 'user') {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="message-info">
                        <span>你</span>
                        <span>${timestamp}</span>
                    </div>
                    <div>${this.escapeHtml(content)}</div>
                </div>
                <img class="message-avatar" src="https://picsum.photos/seed/user/32/32.jpg" alt="用户">
            `;
        } else {
            messageDiv.innerHTML = `
                <img class="message-avatar" src="${girlfriend.avatar}" alt="${girlfriend.name}">
                <div class="message-content">
                    <div class="message-info">
                        <span>${girlfriend.name}</span>
                        <span>${timestamp}</span>
                    </div>
                    <div>${this.escapeHtml(content)}</div>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        
        // 滚动到底部
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // 保存到聊天历史
        if (!this.chatHistory[this.currentGirlfriend]) {
            this.chatHistory[this.currentGirlfriend] = [];
        }
        this.chatHistory[this.currentGirlfriend].push({
            type,
            content,
            timestamp: new Date().toISOString()
        });
    }
    
    showTypingIndicator() {
        const chatMessages = document.getElementById('chatMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai typing-message';
        typingDiv.innerHTML = `
            <img class="message-avatar" src="${this.girlfriends[this.currentGirlfriend].avatar}" alt="${this.girlfriends[this.currentGirlfriend].name}">
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    removeTypingIndicator() {
        const typingMessage = document.querySelector('.typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
    }
    
    loadChatMessages(model) {
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML = '';
        
        if (this.chatHistory[model] && this.chatHistory[model].length > 0) {
            this.chatHistory[model].forEach(msg => {
                this.addMessageToChat(msg.type, msg.content, msg.timestamp);
            });
        } else {
            this.showWelcomeMessage(this.girlfriends[model]);
        }
    }
    
    addMessageToChat(type, content, timestamp) {
        const chatMessages = document.getElementById('chatMessages');
        
        // 如果是第一条消息，清除欢迎消息
        if (chatMessages.querySelector('.welcome-message')) {
            chatMessages.innerHTML = '';
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        const girlfriend = this.girlfriends[this.currentGirlfriend];
        const time = new Date(timestamp).toLocaleTimeString('zh-CN', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        if (type === 'user') {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="message-info">
                        <span>你</span>
                        <span>${time}</span>
                    </div>
                    <div>${this.escapeHtml(content)}</div>
                </div>
                <img class="message-avatar" src="https://picsum.photos/seed/user/32/32.jpg" alt="用户">
            `;
        } else {
            messageDiv.innerHTML = `
                <img class="message-avatar" src="${girlfriend.avatar}" alt="${girlfriend.name}">
                <div class="message-content">
                    <div class="message-info">
                        <span>${girlfriend.name}</span>
                        <span>${time}</span>
                    </div>
                    <div>${this.escapeHtml(content)}</div>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
    }
    
    clearChat() {
        if (!this.currentGirlfriend) return;
        
        if (confirm('确定要清空与 ' + this.girlfriends[this.currentGirlfriend].name + ' 的聊天记录吗？')) {
            this.chatHistory[this.currentGirlfriend] = [];
            this.saveChatHistory();
            this.showWelcomeMessage(this.girlfriends[this.currentGirlfriend]);
        }
    }
    
    saveChatHistory() {
        localStorage.setItem('aiGirlfriendChatHistory', JSON.stringify(this.chatHistory));
    }
    
    loadChatHistory() {
        const saved = localStorage.getItem('aiGirlfriendChatHistory');
        if (saved) {
            this.chatHistory = JSON.parse(saved);
        }
    }
    
    updateCharCount() {
        const messageInput = document.getElementById('messageInput');
        const charCount = document.getElementById('charCount');
        const currentLength = messageInput.value.length;
        charCount.textContent = `${currentLength}/1000`;
        
        if (currentLength > 900) {
            charCount.style.color = 'var(--warning-color)';
        } else {
            charCount.style.color = 'var(--text-secondary)';
        }
    }
    
    toggleSendButton() {
        const messageInput = document.getElementById('messageInput');
        const sendBtn = document.getElementById('sendBtn');
        const hasText = messageInput.value.trim().length > 0;
        const hasGirlfriend = this.currentGirlfriend !== null;
        
        sendBtn.disabled = !hasText || !hasGirlfriend;
    }
    
    autoResizeTextarea() {
        const textarea = document.getElementById('messageInput');
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    openSettings() {
        document.getElementById('settingsModal').classList.add('active');
    }
    
    closeSettings() {
        document.getElementById('settingsModal').classList.remove('active');
    }
    
    changeTheme(theme) {
        document.body.className = '';
        if (theme !== 'pink') {
            document.body.classList.add(`theme-${theme}`);
        }
        
        // 更新按钮状态
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const themeButton = document.querySelector(`[data-theme="${theme}"]`);
        if (themeButton) {
            themeButton.classList.add('active');
        }
        
        // 保存设置
        localStorage.setItem('aiGirlfriendTheme', theme);
    }
    
    changeFontSize(size) {
        document.documentElement.style.setProperty('--font-size-base', `${size}px`);
        document.getElementById('fontSizeValue').textContent = `${size}px`;
        
        // 保存设置
        localStorage.setItem('aiGirlfriendFontSize', size);
    }
    
    initSettings() {
        // 从localStorage加载设置
        const savedSettings = localStorage.getItem('aiGirlfriendSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            
            // 应用主题
            if (settings.theme) {
                this.changeTheme(settings.theme);
            }
            
            // 应用字体大小
            if (settings.fontSize) {
                this.changeFontSize(settings.fontSize);
                document.getElementById('fontSizeSlider').value = settings.fontSize;
            }
            
            // 加载API密钥
            if (settings.apiKeys) {
                this.apiKeys = { ...this.apiKeys, ...settings.apiKeys };
            }
        } else {
            // 兼容旧版本设置
            const savedTheme = localStorage.getItem('aiGirlfriendTheme');
            if (savedTheme) {
                this.changeTheme(savedTheme);
            }
            
            const savedFontSize = localStorage.getItem('aiGirlfriendFontSize');
            if (savedFontSize) {
                document.getElementById('fontSizeSlider').value = savedFontSize;
                this.changeFontSize(savedFontSize);
            }
        }
        
        // 加载声音设置
        const soundEnabled = localStorage.getItem('aiGirlfriendSoundEnabled');
        if (soundEnabled !== null) {
            document.getElementById('soundEnabled').checked = soundEnabled === 'true';
        }
        
        // 更新API密钥显示
        this.updateApiKeyDisplay();
    }
    
    updateApiKeyDisplay() {
        // 更新设置面板中的API密钥显示
        const apiKeyInputs = {
            'deepseekKey': this.apiKeys.deepseek,
            'kimiKey': this.apiKeys.kimi,
            'zhipuKey': this.apiKeys.zhipu,
            'stepKey': this.apiKeys.step,
            'tencentKey': this.apiKeys.tencent,
            'tongyiKey': this.apiKeys.tongyi,
            'doubaoKey': this.apiKeys.doubao
        };
        
        Object.entries(apiKeyInputs).forEach(([id, value]) => {
            const input = document.getElementById(id);
            if (input) {
                input.value = value || '';
            }
        });
    }
    
    saveSettings() {
        const settings = {
            theme: document.body.dataset.theme || 'light',
            fontSize: document.getElementById('fontSizeSlider').value,
            apiKeys: this.apiKeys
        };
        
        localStorage.setItem('aiGirlfriendSettings', JSON.stringify(settings));
    }
    
    updateApiKey(service, key) {
        if (key && key.trim()) {
            this.apiKeys[service] = key.trim();
            this.saveSettings();
            console.log(`${service} API密钥已更新`);
        }
    }
    
    insertEmoji() {
        const emojis = ['😊', '😍', '🥰', '😘', '💕', '❤️', '🌹', '✨', '🎉', '🌟'];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const messageInput = document.getElementById('messageInput');
        messageInput.value += emoji;
        this.updateCharCount();
        messageInput.focus();
    }
    
    attachFile() {
        // 创建文件输入元素
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                // 这里可以添加文件上传逻辑
                alert('文件功能暂未实现，敬请期待！');
            }
        };
        fileInput.click();
    }
    
    toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
    
    // API密钥配置相关方法
    toggleApiKeyVisibility(button) {
        const targetId = button.dataset.target;
        const input = document.getElementById(targetId);
        const icon = button.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    }
    
    onApiKeyChange(input) {
        // 实时更新apiKeys对象
        const service = input.id.replace('Key', '');
        this.apiKeys[service] = input.value;
        
        // 添加输入变化的视觉反馈
        if (input.value.trim()) {
            input.style.borderColor = 'var(--primary-color)';
        } else {
            input.style.borderColor = 'var(--border-color)';
        }
    }
    
    async saveApiKeys() {
        const statusDiv = document.getElementById('apiStatus');
        
        try {
            // 收集所有API密钥
            const apiKeys = {
                deepseek: document.getElementById('deepseekKey').value.trim(),
                kimi: document.getElementById('kimiKey').value.trim(),
                tongyi: document.getElementById('tongyiKey').value.trim(),
                zhipu: document.getElementById('zhipuKey').value.trim(),
                step: document.getElementById('stepKey').value.trim(),
                tencent: document.getElementById('tencentKey').value.trim(),
                doubao: document.getElementById('doubaoKey').value.trim()
            };
            
            // 更新apiKeys对象
            this.apiKeys = { ...this.apiKeys, ...apiKeys };
            
            // 保存到localStorage
            this.saveSettings();
            
            // 显示成功状态
            this.showApiStatus('success', 'API密钥已保存成功！');
            
            // 更新输入框样式
            document.querySelectorAll('.api-key-input').forEach(input => {
                if (input.value.trim()) {
                    input.style.borderColor = 'var(--primary-color)';
                }
            });
            
        } catch (error) {
            console.error('保存API密钥失败:', error);
            this.showApiStatus('error', '保存失败，请重试');
        }
    }
    
    async testApiKeys() {
        const statusDiv = document.getElementById('apiStatus');
        this.showApiStatus('info', '正在测试API连接...');
        
        const testResults = [];
        
        // 测试DeepSeek API
        if (this.apiKeys.deepseek) {
            try {
                await this.testDeepSeekApi();
                testResults.push('DeepSeek: 连接成功');
            } catch (error) {
                testResults.push(`DeepSeek: ${error.message}`);
            }
        }
        
        // 测试Kimi API
        if (this.apiKeys.kimi) {
            try {
                await this.testKimiApi();
                testResults.push('Kimi: 连接成功');
            } catch (error) {
                testResults.push(`Kimi: ${error.message}`);
            }
        }
        
        // 测试通义千问API
        if (this.apiKeys.tongyi) {
            try {
                await this.testTongyiApi();
                testResults.push('通义千问: 连接成功');
            } catch (error) {
                testResults.push(`通义千问: ${error.message}`);
            }
        }
        
        // 测试豆包API
        if (this.apiKeys.doubao) {
            try {
                await this.testDoubaoApi();
                testResults.push('豆包: 连接成功');
            } catch (error) {
                testResults.push(`豆包: ${error.message}`);
            }
        }
        
        if (testResults.length === 0) {
            this.showApiStatus('error', '请先配置API密钥');
        } else {
            const successCount = testResults.filter(r => r.includes('连接成功')).length;
            const totalCount = testResults.length;
            
            if (successCount === totalCount) {
                this.showApiStatus('success', `所有API连接测试成功 (${successCount}/${totalCount})`);
            } else {
                this.showApiStatus('error', `部分API连接失败 (${successCount}/${totalCount})\\n${testResults.join('\\n')}`);
            }
        }
    }
    
    async testDeepSeekApi() {
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKeys.deepseek}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [{ role: 'user', content: '测试连接' }],
                max_tokens: 10
            })
        });
        
        if (!response.ok) {
            throw new Error('API密钥无效或网络错误');
        }
    }
    
    async testKimiApi() {
        const response = await fetch('https://api.moonshot.cn/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKeys.kimi}`
            },
            body: JSON.stringify({
                model: 'moonshot-v1-8k',
                messages: [{ role: 'user', content: '测试连接' }],
                max_tokens: 10
            })
        });
        
        if (!response.ok) {
            throw new Error('API密钥无效或网络错误');
        }
    }
    
    async testTongyiApi() {
        const response = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKeys.tongyi}`
            },
            body: JSON.stringify({
                model: 'qwen-plus',
                messages: [{ role: 'user', content: '测试连接' }],
                max_tokens: 10
            })
        });
        
        if (!response.ok) {
            throw new Error('API密钥无效或网络错误');
        }
    }
    
    async testDoubaoApi() {
        const response = await fetch('https://ark.cn-beijing.volces.com/api/v3/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKeys.doubao}`
            },
            body: JSON.stringify({
                model: 'doubao-seed-1-6-lite-251015',
                messages: [{ role: 'user', content: '测试连接' }],
                max_tokens: 10
            })
        });
        
        if (!response.ok) {
            throw new Error('API密钥无效或网络错误');
        }
    }
    
    showApiStatus(type, message) {
        const statusDiv = document.getElementById('apiStatus');
        statusDiv.className = `api-status ${type}`;
        statusDiv.textContent = message;
        statusDiv.style.display = 'block';
        
        // 3秒后自动隐藏
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 3000);
    }
    
    // 新增：更新对话上下文
    updateConversationContext(message) {
        // 分析消息中的关键词，更新话题
        const keywords = this.extractKeywords(message);
        if (keywords.length > 0) {
            this.recentTopics.push(...keywords);
            // 只保留最近10个话题
            this.recentTopics = this.recentTopics.slice(-10);
        }
        
        // 根据消息内容调整AI女友的心情
        this.updateMood(message);
        
        // 根据互动调整好感度
        this.updateAffection(message);
    }
    
    // 提取关键词
    extractKeywords(message) {
        const keywords = [];
        const keywordPatterns = {
            '工作': ['工作', '上班', '加班', '同事', '老板', '项目', '任务'],
            '学习': ['学习', '考试', '作业', '课程', '学校', '老师', '同学'],
            '美食': ['吃', '饭', '美食', '餐厅', '做饭', '菜', '饿'],
            '娱乐': ['电影', '音乐', '游戏', '电视剧', '综艺', '玩'],
            '运动': ['运动', '健身', '跑步', '游泳', '球', '锻炼'],
            '购物': ['买', '购物', '衣服', '鞋子', '包包', '东西'],
            '旅行': ['旅行', '旅游', '出差', '景点', '酒店', '机票'],
            '情感': ['喜欢', '爱', '想', '思念', '开心', '难过', '生气']
        };
        
        for (const [category, words] of Object.entries(keywordPatterns)) {
            if (words.some(word => message.includes(word))) {
                keywords.push(category);
            }
        }
        
        return keywords;
    }
    
    // 更新心情
    updateMood(message) {
        const positiveWords = ['开心', '高兴', '快乐', '哈哈', '嘻嘻', '棒', '好', '爱'];
        const negativeWords = ['难过', '生气', '讨厌', '烦', '累', '忙', '不好'];
        const lovingWords = ['想你了', '爱你', '宝贝', '亲爱的', '乖'];
        
        if (lovingWords.some(word => message.includes(word))) {
            this.girlfriendMood = 'excited';
            this.affectionLevel = Math.min(100, this.affectionLevel + 5);
        } else if (positiveWords.some(word => message.includes(word))) {
            this.girlfriendMood = 'happy';
            this.affectionLevel = Math.min(100, this.affectionLevel + 2);
        } else if (negativeWords.some(word => message.includes(word))) {
            this.girlfriendMood = 'sad';
            this.affectionLevel = Math.max(0, this.affectionLevel - 1);
        } else if (message.includes('对不起') || message.includes('抱歉')) {
            this.girlfriendMood = 'shy';
        }
    }
    
    // 更新好感度
    updateAffection(message) {
        // 主动关心会增加好感度
        if (message.includes('关心') || message.includes('想') || message.includes('在乎')) {
            this.affectionLevel = Math.min(100, this.affectionLevel + 3);
        }
        
        // 分享个人生活也会增加好感度
        if (message.includes('今天') && (message.includes('我') || message.includes('的'))) {
            this.affectionLevel = Math.min(100, this.affectionLevel + 1);
        }
        
        // 长时间不联系会降低好感度
        if (this.userProfile.lastTalkTime) {
            const daysSinceLastTalk = (Date.now() - this.userProfile.lastTalkTime) / (1000 * 60 * 60 * 24);
            if (daysSinceLastTalk > 7) {
                this.affectionLevel = Math.max(0, this.affectionLevel - 10);
            }
        }
    }
    
    // 获取心情相关的开场白
    getMoodGreeting() {
        const greetings = {
            happy: ['见到你真开心~', '今天心情特别好呢！', '嘻嘻，你来啦！'],
            sad: ['有点想你...', '今天有点小难过', '抱抱...'],
            excited: ['哇！你来啦！', '超级想你！', '终于等到你了！'],
            shy: ['那个...你来啦', '嘿嘿，有点不好意思', '人家想你了嘛~'],
            angry: ['哼，还知道来找我', '有点小生气', '不理你了...才怪呢！']
        };
        
        const moodGreetings = greetings[this.girlfriendMood] || greetings.happy;
        return moodGreetings[Math.floor(Math.random() * moodGreetings.length)];
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new AIGirlfriendChat();
});