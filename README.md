# Gạo Loan Luân - Rice Store Website

Website trưng bày sản phẩm gạo chất lượng cao cho cửa hàng Gạo Loan Luân.

## 🌾 Giới Thiệu

Website được xây dựng bằng ReactJS và Pure CSS, cung cấp trải nghiệm người dùng hiện đại và mượt mà để khách hàng có thể tìm hiểu về các sản phẩm gạo chất lượng cao.

## ✨ Tính Năng

- 🏠 **Trang Chủ**: Hero section với hình ảnh đẹp mắt
- 🌾 **Trang Sản Phẩm**: Danh sách sản phẩm với bộ lọc theo loại gạo
- 🤝 **Trang Đối Tác**: Giới thiệu các đối tác kinh doanh
- 📞 **Trang Liên Hệ**: Form liên hệ và thông tin công ty
- 📱 **Responsive Design**: Tương thích với mọi thiết bị

## 🛠️ Công Nghệ Sử Dụng

- **React 18+** - Thư viện UI
- **Vite** - Build tool
- **React Router** - Routing
- **Pure CSS** - Styling (không sử dụng framework CSS)
- **TypeScript** - Type safety

## 🚀 Cài Đặt và Chạy

### Yêu Cầu

- Node.js 16+ 
- npm hoặc yarn

### Các Bước

1. Clone repository:
```bash
git clone https://github.com/TrinQuocToan/GaoLoanLuan.git
cd GaoLoanLuan
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở trình duyệt tại `http://localhost:5173`

## 📦 Build Production

```bash
npm run build
```

File build sẽ được tạo trong thư mục `dist/`

## 📁 Cấu Trúc Project

```
GaoLoanLuan/
├── public/
│   └── assets/
│       ├── images/          # Hình ảnh sản phẩm
│       └── logo-kn.png      # Logo
├── src/
│   ├── components/          # React components
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Products/
│   │   ├── Partners/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── PartnersPage.tsx
│   │   └── ContactPage.tsx
│   ├── data/               # Data files
│   │   ├── products.ts
│   │   └── partners.ts
│   ├── styles/             # Global styles
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
└── index.html
```

## 📞 Liên Hệ

- **Địa chỉ**: Cổng Làng Ninh Mỹ, Xóm Tân Mỹ, Phường Hoa Lư, Ninh Bình
- **Điện thoại**: 0987 008 765 / 0943 675 290
- **Email**: info@gaoloanluan.vn

## 📄 License

Copyright © 2026 Gạo Loan Luân. All rights reserved.
