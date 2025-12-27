// blog-data.js
const blogPosts = [
    {
        category: "flutter",
        icon: "fab fa-flutter",
        title: "Tối ưu hóa hiệu suất trong ứng dụng Flutter",
        shortDesc: "Kinh nghiệm tối ưu hóa danh sách và quản lý bộ nhớ trong dự án TotalEnglish.",
        core: "Sử dụng constructor 'const' và logic tải chậm (lazy loading) để giảm thiểu việc render lại UI không cần thiết.",
        simple: "Hãy tưởng tượng bạn không cần sơn lại cả bức tường chỉ để che một vết xước nhỏ. Bạn chỉ cần sửa đúng chỗ đó thôi.",
        example: "Trong TotalEnglish, danh sách từ vựng dài cuộn rất mượt vì các mục chỉ được khởi tạo khi chúng thực sự xuất hiện trên màn hình.",
        summary: "Tối ưu hóa = Trải nghiệm người dùng. Ứng dụng mượt mà giữ chân người dùng lâu hơn."
    },
    {
        category: "js",
        icon: "fab fa-js",
        title: "Xử lý bất đồng bộ trong JavaScript",
        shortDesc: "Cách tôi xử lý dữ liệu bất đồng bộ để đảm bảo trang web luôn phản hồi tức thì.",
        core: "Sử dụng Async/Await để xử lý việc lấy dữ liệu từ server mà không làm chặn luồng giao diện chính (UI thread).",
        simple: "Nó giống như việc gọi món tại nhà hàng: trong khi chờ đầu bếp (Server) nấu, bạn vẫn có thể trò chuyện với bạn bè (tương tác với UI) thay vì ngồi im bất động.",
        example: "Trong NOVAShop, hình ảnh sản phẩm và giá được tải ngầm trong khi người dùng vẫn lướt trang chủ mượt mà.",
        summary: "JavaScript không chỉ là hiệu ứng; đó là nghệ thuật quản lý luồng dữ liệu hiệu quả."
    },
    {
        category: "general",
        icon: "fa-solid fa-laptop-code",
        title: "Tư duy lập trình & Giải quyết vấn đề",
        shortDesc: "Những bài học và tư duy quan trọng tôi đã đúc kết khi làm việc trên các dự án thực tế.",
        core: "Lập trình không phải là gõ phím nhanh, mà là rèn luyện tư duy logic để giải quyết vấn đề.",
        simple: "Code giống như học nhạc cụ. Chỉ đọc sách hướng dẫn là không đủ; bạn phải luyện tập và 'đánh sai nốt' hàng ngày.",
        example: "Bạn có thể mất 2 giờ để tìm nguyên nhân gốc rễ của một lỗi (bug), nhưng chỉ mất 1 phút để sửa nó.",
        summary: "Kiên trì + Kỹ năng Google > Tài năng bẩm sinh. Đừng sợ bug!"
    },
    {
        category: "git",
        icon: "fab fa-git-alt",
        title: "Quản lý phiên bản hiệu quả với Git",
        shortDesc: "Cách tôi dùng Git để giữ dự án ổn định, dễ mở rộng và thuận tiện cho nhóm.",
        core: "Sử dụng các lệnh Git như branch, merge và rebase để quản lý thay đổi code mà không làm gián đoạn quy trình làm việc.",
        simple: "Git giống như cỗ máy thời gian cho code của bạn: bạn có thể thử nghiệm, quay lại quá khứ và sửa lỗi sai mà không làm hỏng cả dự án.",
        example: "Trong dự án TotalEnglish, Git cho phép cả nhóm làm việc trên nhiều tính năng cùng lúc, giải quyết xung đột nhanh chóng và duy trì các bản phát hành ổn định.",
        summary: "Git không chỉ là nơi lưu code; nó là công cụ kiểm soát và cộng tác phát triển code."
    }
];
