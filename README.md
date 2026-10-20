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

Project đã có sẵn `vercel.json`. Đẩy mã nguồn lên GitHub, sau đó import repository trong Vercel và nhấn **Deploy**. Vercel sẽ tự dùng:

- Node.js `22.x`
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

Hoặc deploy bằng CLI:

```bash
npx vercel
npx vercel --prod
```

Không cần commit thư mục `dist` hoặc `node_modules`.
