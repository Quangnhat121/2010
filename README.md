# Website 20/10 tặng mẹ

Website frontend thuần sử dụng React, Vite, TypeScript và Motion. Dự án không có backend, database, đăng nhập hoặc cấu hình máy chủ.

## Chạy localhost

```bash
npm install
npm run dev
```

Mở `http://127.0.0.1:5173`.

## Thay nội dung

Chỉnh `src/config/momContent.ts` để đổi người gửi, lời chúc, ảnh, chú thích và đường dẫn nhạc.

- Ảnh: đặt trong `public/images/`.
- Nhạc: đặt tại `public/music/piano-for-mom.mp3` hoặc đổi trường `music`.
- Website vẫn hoạt động nếu chưa có ảnh hoặc nhạc.

## Build tĩnh

```bash
npm run build
```

Kết quả được tạo trong thư mục `dist/`.
