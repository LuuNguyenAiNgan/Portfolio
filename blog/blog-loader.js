document.addEventListener('DOMContentLoaded', () => {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid || typeof blogPosts === 'undefined') return;

    blogGrid.innerHTML = ''; 

    blogPosts.forEach(post => {
        const card = document.createElement('div');
        // Kế thừa style từ skill-card
        card.className = `skill-card blog-card ${post.category}`;
        
        Object.assign(card.dataset, post);

        card.innerHTML = `
            <i class="${post.icon}"></i>
            <h3>${post.title}</h3>
            <p>${post.shortDesc}</p>
            <a href="#" class="link-arrow">Xem tóm tắt →</a>
        `;

        // Sự kiện click mở Modal
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const blogModal = document.getElementById('feynman-modal');
            if(!blogModal) return;

            blogModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            document.getElementById('fm-title').textContent   = post.title;
            document.getElementById('fm-core').textContent    = post.core;
            document.getElementById('fm-simple').textContent  = post.simple;
            document.getElementById('fm-example').textContent = post.example;
            document.getElementById('fm-summary').textContent = post.summary;
        });

        blogGrid.appendChild(card);
    });
});