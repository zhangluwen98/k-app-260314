// Cloudflare Worker API 服务

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // CORS 处理
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  };
  
  if (request.method === 'OPTIONS') {
    return new Response('OK', { headers });
  }
  
  // API 路由
  if (path.startsWith('/api/auth')) {
    return handleAuth(request, headers);
  } else if (path.startsWith('/api/progress')) {
    return handleProgress(request, headers);
  } else if (path.startsWith('/api/favorite')) {
    return handleFavorite(request, headers);
  } else if (path.startsWith('/api/like')) {
    return handleLike(request, headers);
  }
  
  return new Response('Not Found', { status: 404, headers });
}

// 处理认证相关请求
async function handleAuth(request, headers) {
  const url = new URL(request.url);
  const method = request.method;
  
  if (method === 'POST') {
    if (url.pathname === '/api/auth/register') {
      return handleRegister(request, headers);
    } else if (url.pathname === '/api/auth/login') {
      return handleLogin(request, headers);
    }
  }
  
  return new Response('Not Found', { status: 404, headers });
}

// 处理注册
async function handleRegister(request, headers) {
  try {
    const data = await request.json();
    const { nickname, password } = data;
    
    // 验证请求数据
    if (!nickname || !password) {
      return new Response(JSON.stringify({ error: '昵称和密码不能为空' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }
    
    // 检查昵称是否已存在
    // 实际项目中，这里应该查询数据库
    
    // 模拟注册成功
    const user = {
      id: Date.now().toString(),
      nickname
    };
    
    return new Response(JSON.stringify({ success: true, user }), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: '注册失败' }), {
      status: 500,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }
}

// 处理登录
async function handleLogin(request, headers) {
  try {
    const data = await request.json();
    const { nickname, password } = data;
    
    // 验证请求数据
    if (!nickname || !password) {
      return new Response(JSON.stringify({ error: '昵称和密码不能为空' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }
    
    // 验证用户
    // 实际项目中，这里应该查询数据库并验证密码
    
    // 模拟登录成功
    const user = {
      id: Date.now().toString(),
      nickname
    };
    
    return new Response(JSON.stringify({ success: true, user }), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: '登录失败' }), {
      status: 500,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }
}

// 处理进度相关请求
async function handleProgress(request, headers) {
  const url = new URL(request.url);
  const method = request.method;
  
  if (method === 'GET') {
    // 获取进度
    return new Response(JSON.stringify({ success: true, progress: null }), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  } else if (method === 'POST') {
    // 保存进度
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }
  
  return new Response('Not Found', { status: 404, headers });
}

// 处理收藏相关请求
async function handleFavorite(request, headers) {
  const url = new URL(request.url);
  const method = request.method;
  
  if (method === 'POST') {
    // 添加收藏
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  } else if (method === 'DELETE') {
    // 取消收藏
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }
  
  return new Response('Not Found', { status: 404, headers });
}

// 处理点赞相关请求
async function handleLike(request, headers) {
  const method = request.method;
  
  if (method === 'POST') {
    // 添加点赞
    return new Response(JSON.stringify({ success: true, likes: 10 }), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }
  
  return new Response('Not Found', { status: 404, headers });
}
