document.addEventListener('DOMContentLoaded', () => {

    /* =====================
       1. LIGHTBOX CHUNG
    ===================== */
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
        display: none; position: fixed; top:0; left:0; width:100%; height:100%;
        background: rgba(0,0,0,0.9); justify-content: center; align-items: center;
        z-index: 10000; cursor: pointer;
    `;

    const lbImg = document.createElement('img');
    lbImg.style.cssText = `
        max-width: 90%; max-height: 90%; border-radius: 8px;
        box-shadow: 0 0 30px rgba(0,242,255,0.5); cursor: auto;
    `;

    lightbox.appendChild(lbImg);
    document.body.appendChild(lightbox);

    const openLightbox = (src) => {
        lbImg.src = src;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        // Chỉ mở lại scroll nếu không còn modal nào đang mở
        const anyModalOpen = [aboutSection, blogModal, projectModal].some(m => m && m.style.display === 'flex');
        if (!anyModalOpen) document.body.style.overflow = 'auto';
    });

    lbImg.addEventListener('click', e => e.stopPropagation());


    /* =====================
       2. MODAL GIỚI THIỆU (ABOUT ME)
    ===================== */
    const aboutBtn = document.querySelector('.btn-secondary'); 
    const aboutSection = document.getElementById('about');
    const aboutContainer = document.querySelector('.about-container');
    const aboutClose = document.querySelector('.about-close');

    aboutBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        aboutSection.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    aboutClose?.addEventListener('click', () => {
        aboutSection.style.display = 'none';
        document.body.style.overflow = 'auto';
    });


    /* =====================
       3. MODAL BLOG (FEYNMAN)
    ===================== */
    const blogModal = document.getElementById('feynman-modal');
    const blogClose = blogModal?.querySelector('.close-btn');

    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', e => {
            e.preventDefault();
            blogModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            document.getElementById('fm-title').textContent   = card.dataset.title;
            document.getElementById('fm-core').textContent    = card.dataset.core;
            document.getElementById('fm-simple').textContent  = card.dataset.simple;
            document.getElementById('fm-example').textContent = card.dataset.example;
            document.getElementById('fm-summary').textContent = card.dataset.summary;
        });
    });

    blogClose?.addEventListener('click', () => {
        blogModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });


    /* =====================
       4. MODAL CHI TIẾT DỰ ÁN
    ===================== */
    const projectDetails = {
        "total-english": {
            title: "TOTALENGLISH APP",
            tag: "Dự án Flutter & Firebase",
            link: "https://github.com/NguyenHin/TotalEnglish",
            features: [
                { img: "img/p1.png", title: "Giao diện chính", desc: "Thiết kế trực quan giúp trẻ dễ dàng làm quen với bài học." },
                { img: "img/p2.png", title: "Học từ vựng", desc: "Hình ảnh minh họa sinh động đi kèm âm thanh chuẩn." },
                { img: "img/p3.png", title: "Trò chơi tương tác", desc: "Các mini-game giúp trẻ ôn tập kiến thức mà không chán." },
                { img: "img/p4.png", title: "Luyện nghe", desc: "Tính năng nghe và lặp lại giúp cải thiện phát âm." },
                { img: "img/p5.png", title: "Bài tập", desc: "Tính năng bài tập giúp ôn tập lại kiến thức đã học." }
            ]
        },
        "nova-shop": {
        title: "NOVASHOP",
        tag: "Nền tảng Thương mại điện tử",
        link: "https://github.com/ThienY04/NOVAShop.git",
        features: [
            // Đảm bảo các file n1.png, n2.png... thực sự tồn tại trong thư mục img/
            { img: "img/n1.png", title: "Trang chủ", desc: "Hiển thị các sản phẩm và giá sản phẩm." },
            { img: "img/n2.png", title: "Chi tiết sản phẩm", desc: "Xem thông tin, chọn size và thêm vào giỏ hàng." },
            { img: "img/n3.png", title: "Giỏ hàng", desc: "Quản lý danh sách sản phẩm dự định mua." },
            { img: "img/n4.png", title: "Đặt hàng", desc: "Cung cấp chi tiết địa chỉ, sđt,... áp dụng mã giảm giá cho sản phẩm." },
            { img: "img/n5.png", title: "Quản trị viên", desc: "Giao diện dành cho người bán quản lý sản phâmr." },
            { img: "img/n6.png", title: "Quản lý đơn hàng đã bán", desc: "Theo dõi tình trạng đơn hàng." }
        ]
    },
        "coffee-mgmt": {
        title: "HIGHLANDS COFFEE",
        tag: "Ứng dụng WinForms & SQL Server",
        link: "#", // Thay bằng link Git của bạn nếu có
        features: [
            { 
                img: "img/c1.png", title: "Tác vụ", 
                desc: "Quản lý bàn Trống (Xanh) và Có người (Đỏ). Hỗ trợ chọn món theo phân loại, thêm món theo số lượng và đổi bàn linh hoạt." 
            },
            { 
                img: "img/c2.png", title: "Hóa đơn & Thanh toán", 
                desc: "Hệ thống tự động tính toán chi phí, áp dụng mã giảm giá và hiển thị hóa đơn chi tiết giúp khách hàng kiểm tra trước khi xác nhận thanh toán." 
            },
            { 
                img: "img/c3.png", title: "Quản lý Menu", 
                desc: "Hiển thị danh sách món. Tích hợp bộ lọc tìm kiếm thông minh và bộ chức năng Thêm/Sửa/Xóa danh mục thực đơn." 
            },
            { 
                img: "img/c4.png", title: "Quản lý Nhân viên", 
                desc: "Lưu trữ thông tin chi tiết nhân viên" 
            },
            { 
                img: "img/c5.png", title: "Báo cáo Doanh thu", 
                desc: "Thống kê doanh thu chi tiết theo ngày, tháng hoặc theo ca làm việc của nhân viên." 
            }
        ]
    }
    };

    const projectModal = document.getElementById('project-modal');
    const featuresContainer = document.getElementById('features-container');
    const pmClose = document.querySelector('.project-modal-close');

    document.querySelectorAll('.btn-detail').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-id');
            const data = projectDetails[projectId];
            if (!data) return;

            document.getElementById('pm-title').textContent = data.title;
            document.getElementById('pm-tag').textContent = data.tag;
            document.getElementById('pm-link').href = data.link;

            featuresContainer.innerHTML = ''; 
            data.features.forEach(item => {
                const featureHTML = `
                    <div class="feature-item">
                        <img src="${item.img}" class="feature-img" alt="${item.title}" style="cursor: zoom-in;">
                        <div class="feature-text">
                            <h4>${item.title}</h4>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                `;
                featuresContainer.insertAdjacentHTML('beforeend', featureHTML);
            });

            featuresContainer.querySelectorAll('.feature-img').forEach(img => {
                img.addEventListener('click', () => openLightbox(img.src));
            });

            projectModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    pmClose?.addEventListener('click', () => {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });


    /* =====================
       5. XỬ LÝ CHỨNG CHỈ
    ===================== */
    document.querySelectorAll('.certificate-card-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const img = link.querySelector('img');
            if(img) openLightbox(img.src);
        });
    });


    /* =====================
       6. ĐÓNG MODAL KHI CLICK RA NGOÀI (WINDOWS EVENT)
    ===================== */
    window.addEventListener('click', (e) => {
        // Đóng Project Modal
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        // Đóng Blog Modal
        if (e.target === blogModal) {
            blogModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        // Đóng About Modal (Kiểm tra xem target có phải là lớp overlay không)
        if (e.target.classList.contains('about-overlay') && e.target.id === 'about') {
            aboutSection.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});