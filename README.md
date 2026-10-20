# Món quà 20/10 tặng mẹ

Website một trang giàu cảm xúc, được xây bằng React, TypeScript, Tailwind CSS và Motion.

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở `http://127.0.0.1:5173`.

## Thay nội dung

Chỉnh `config/momContent.ts` để đổi tên người gửi, lời chúc, nội dung thư, chú thích ảnh và đường dẫn nhạc.

- Ảnh gia đình: đặt trong `public/images/` và cập nhật đường dẫn trong cấu hình.
- Nhạc piano: đặt file tại `public/music/piano-for-mom.mp3`, hoặc đổi trường `music`.
- Nhạc chỉ phát sau khi người xem nhấn mở phong thư, âm lượng mặc định 25%.

## Kiểm tra và build

```bash
npm run build
```

## Deploy lên Vercel

1. Đẩy thư mục dự án lên GitHub.
2. Trong Vercel, chọn **Add New → Project**, import repository.
3. Giữ nguyên framework được tự nhận diện và nhấn **Deploy**.
4. Để dùng tên miền riêng, mở **Project Settings → Domains**, nhập tên miền và làm theo bản ghi DNS Vercel cung cấp.

Trang đã được tối ưu responsive, có `prefers-reduced-motion`, không phụ thuộc backend và vẫn hoạt động nếu ảnh hoặc nhạc chưa được thêm.
