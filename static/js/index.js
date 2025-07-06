// 简单的导航切换功能
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 隐藏所有内容区域
        document.querySelectorAll('.content').forEach(section => {
            section.style.display = 'none';
        });
        
        // 显示点击的对应内容区域
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).style.display = 'block';
        
        // 更新URL（不刷新页面）
        history.pushState(null, null, '#' + targetId);
    });
});

// 底部版权文字
document.querySelector('#copyright').textContent = `© ${new Date().getFullYear()} Luling Game All Rights Reserved`

// 页面加载时根据hash显示对应内容
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        document.querySelectorAll('.content').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(hash).style.display = 'block';
    }
});