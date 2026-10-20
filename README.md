# Món quà 20/10

Website React + TypeScript dành tặng người yêu, tối ưu cho điện thoại.

## Chỉnh nội dung

Mở `src/config/loveContent.ts` để sửa tên, lời chúc, nội dung thư, chú thích ảnh và đường dẫn nhạc. Thay bốn ảnh trong `public/images/` (hoặc sửa đường dẫn trong cấu hình). Đặt nhạc hợp lệ tại `public/music/romantic-piano.mp3`.

## Chạy local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy Vercel

Đẩy thư mục lên GitHub, tạo project mới trên Vercel, chọn framework **Vite**, build command `npm run build`, output directory `dist`, rồi Deploy.
