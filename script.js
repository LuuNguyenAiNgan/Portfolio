const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");

// Các element của bộ xem ảnh (Image Viewer)
const imageViewerModal = document.getElementById("image-viewer-modal");
const viewerImg = document.getElementById("viewer-img");

function openProject(type) {
    modal.style.display = "flex";

    // Ngăn chặn cuộn trang phía sau khi mở modal
    document.body.style.overflow = "hidden";

    if (type === "book") {
        modalBody.innerHTML = `
            <div class="modal-project-content">
                <img src="img/BookTotal.png" alt="BOOKTOTAL" class="modal-img" onclick="openImageViewer(this.src)">
                <div class="modal-text">
                    <h2><i class="fa-solid fa-book-open"></i> BOOKTOTAL</h2>
                    <p class="modal-desc">Website thương mại điện tử bán sách trực tuyến</p>

                    <div class="modal-details">
                        <p><strong>Mô tả dự án:</strong> Đây là hệ thống website hỗ trợ người dùng tìm kiếm, đặt mua sách và thanh toán. Đóng vai trò là Tester, mình chịu trách nhiệm đảm bảo chất lượng cho các luồng nghiệp vụ quan trọng nhất của hệ thống.</p>

                        <p><strong>Chi tiết công việc:</strong></p>
                        <ul>
                            <li><i class="fa-solid fa-check" style="color: #00e5ff;"></i> Phân tích yêu cầu và viết Test Case chi tiết cho các chức năng.</li>
                            <li><i class="fa-solid fa-check" style="color: #00e5ff;"></i> Thực hiện kiểm thử các module: Đăng nhập/Đăng ký, Giỏ hàng (Cart), Thanh toán (Payment).</li>
                            <li><i class="fa-solid fa-check" style="color: #00e5ff;"></i> Ghi nhận, mô tả và quản lý vòng đời lỗi (Tracking Bug) trên hệ thống Jira.</li>
                            <li><i class="fa-solid fa-check" style="color: #00e5ff;"></i> Làm việc trực tiếp với Developer để xác minh lỗi và tiến hành Retest sau khi fix.</li>
                        </ul>
                    </div>

                    <h3 class="gallery-title">Hình ảnh dự án</h3>
                    <div class="modal-gallery">
                        <img src="img/Testcase.png" alt="Test Case" onclick="openImageViewer(this.src)">
                        <img src="img/Jira.png" alt="Jira" onclick="openImageViewer(this.src)">
                        <img src="img/vungtuongduong.png" alt="Vùng tương đương" onclick="openImageViewer(this.src)">
                        <img src="img/bangquyetdinh.png" alt="Bảng quyết định" onclick="openImageViewer(this.src)">
                    </div>
                </div>
            </div>
        `;
    }

    if (type === "english") {
        modalBody.innerHTML = `
            <div class="modal-project-content">
                <img src="img/totalenglish.png" alt="TotalEnglish App" class="modal-img" onclick="openImageViewer(this.src)">
                <div class="modal-text">
                    <h2><i class="fa-solid fa-language"></i> TotalEnglish App</h2>
                    <p class="modal-desc">Ứng dụng học tiếng Anh trên thiết bị di động</p>

                    <div class="modal-details">
                        <p><strong>Mô tả dự án:</strong> Ứng dụng di động giúp người dùng học từ vựng, ngữ pháp và luyện tập kỹ năng thông qua các bài tập tương tác. Hệ thống yêu cầu độ ổn định cao trên nhiều thiết bị khác nhau.</p>

                        <p><strong>Chi tiết công việc:</strong></p>
                        <ul>
                            <li><i class="fa-solid fa-check" style="color: #00e5ff;"></i> Tiến hành Manual Testing kiểm tra toàn bộ luồng hoạt động của ứng dụng.</li>
                            <li><i class="fa-solid fa-check" style="color: #00e5ff;"></i> Thực hiện UI/UX Testing, đảm bảo hiển thị đồng nhất và thân thiện trên nhiều kích thước màn hình điện thoại.</li>
                            <li><i class="fa-solid fa-check" style="color: #00e5ff;"></i> Kiểm thử chức năng (Functional Testing) đối với hệ thống bài tập, chấm điểm và lưu trữ tiến độ học tập.</li>
                        </ul>
                    </div>

                    <h3 class="gallery-title">Hình ảnh dự án</h3>
                    <div class="modal-gallery">
                        <img src="img/Firebase.png" alt="Firebase" onclick="openImageViewer(this.src)">
                        <img src="img/LuuTienDo.png" alt="Lưu Tiến Độ" onclick="openImageViewer(this.src)">
                        <img src="img/speaking.png" alt="Speaking" onclick="openImageViewer(this.src)">
                        <img src="img/streak.png" alt="Streak" onclick="openImageViewer(this.src)">
                        <img src="img/Voca.png" alt="Vocabulary" onclick="openImageViewer(this.src)">
                    </div>
                </div>
            </div>
        `;
    }
}

function closeProject() {
    modal.style.display = "none";
    // Cho phép cuộn trang trở lại khi đóng modal
    document.body.style.overflow = "auto";
}

// Hàm mở ảnh to
function openImageViewer(src) {
    imageViewerModal.style.display = "flex";
    viewerImg.src = src;
}

// Hàm đóng ảnh to
function closeImageViewer() {
    imageViewerModal.style.display = "none";
}

// Đóng modal khi bấm ra ngoài vùng tối
window.onclick = function(e) {
    if (e.target === modal) {
        closeProject();
    }
    if (e.target === imageViewerModal) {
        closeImageViewer();
    }
}

// Hàm tải CV dưới dạng PDF (Dùng thư viện html2pdf.js)
function downloadCV() {
    // 1. Tạo iframe ẩn
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';

    // Khi chạy local, cần đường dẫn tuyệt đối hoặc tương đối cùng thư mục
    iframe.src = 'CV.html';
    document.body.appendChild(iframe);

    // 2. Chờ iframe tải xong
    iframe.onload = function() {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const cvBody = iframeDoc.body;

            // Ẩn nút "Tải xuống" bên trong nếu có
            const dlBtn = cvBody.querySelector('.btn-download');
            if (dlBtn) dlBtn.style.display = 'none';

            const opt = {
                margin:       10,
                filename:     'CV_LuuNguyenAiNgan.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true },
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            // 3. Gọi html2pdf lên nội dung iframe
            html2pdf().set(opt).from(cvBody).save().then(() => {
                // Xóa iframe sau khi xong
                document.body.removeChild(iframe);
            });
        } catch (error) {
            console.error("Lỗi bảo mật (CORS) hoặc không tải được iframe: ", error);
            // Fallback: Mở tab mới
            alert("Lỗi bảo mật trình duyệt khi chạy local. Sẽ mở trang CV để bạn tải thủ công.");
            window.open('CV.html', '_blank');
            document.body.removeChild(iframe);
        }
    };
}