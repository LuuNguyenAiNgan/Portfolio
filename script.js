document.addEventListener('DOMContentLoaded', () => {

    /* =====================
       LIGHTBOX CHỨNG CHỈ
    ===================== */
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
        display: none;
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: rgba(0,0,0,0.8);
        justify-content: center;
        align-items: center;
        z-index: 9999;
        cursor: pointer;
    `;

    const lbImg = document.createElement('img');
    lbImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
        box-shadow: 0 0 30px rgba(0,242,255,0.5);
        cursor: auto;
    `;

    lightbox.appendChild(lbImg);
    document.body.appendChild(lightbox);

   document.querySelectorAll('.certificate-card-link').forEach(link => {
    const img = link.querySelector('img');

    img.style.cursor = 'pointer';

    link.addEventListener('click', e => {
        e.preventDefault(); // ❌ chặn mở tab mới
        lbImg.src = img.src;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});


    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // mở lại scroll
    });

    lbImg.addEventListener('click', e => {
        e.stopPropagation();
    });


    /* =====================
       FEYNMAN BLOG MODAL
    ===================== */
    const modal = document.getElementById('feynman-modal');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();

            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // khóa scroll trang ngoài

            document.getElementById('fm-title').textContent   = card.dataset.title;
            document.getElementById('fm-core').textContent    = card.dataset.core;
            document.getElementById('fm-simple').textContent  = card.dataset.simple;
            document.getElementById('fm-example').textContent = card.dataset.example;
            document.getElementById('fm-summary').textContent = card.dataset.summary;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // mở lại scroll trang ngoài
    });

    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // mở lại scroll trang ngoài
        }
    });

});
