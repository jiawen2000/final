document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // 圖片懸停變彩色效果已在CSS中實現

        // 點擊翻轉邏輯
        card.addEventListener('click', () => {
            // 切換翻轉類
            card.classList.toggle('is-flipped');
        });

        // 返回按鈕阻止冒泡
        const backButton = card.querySelector('button');
        backButton.addEventListener('click', (e) => {
            e.stopPropagation(); // 防止觸發卡片翻轉
            // 可以在這裡添加按鈕的具體功能
            alert('你點擊了更多詳情！');
        });
    });
});