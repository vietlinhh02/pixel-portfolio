# 🎨 Color Palette Customization Guide

## Bảng Màu Hiện Tại

```
--primary:   #2c3e50  (Tím xám đậm)
--secondary: #3498db  (Xanh dương sáng)
--accent:    #e74c3c  (Đỏ)
--dark:      #1a252f  (Rất đậm)
--light:     #ecf0f1  (Xám nhạt)
```

---

## 🌈 Các Lựa Chọn Màu Khác

### Option 1: Purple & Gold (Premium Feel)
```css
--primary: #663399;
--secondary: #9370DB;
--accent: #FFD700;
--dark: #2B1B4D;
--light: #F5F5DC;
```

### Option 2: Green & Cyan (Nature)
```css
--primary: #27AE60;
--secondary: #16A085;
--accent: #00BCD4;
--dark: #1B5E20;
--light: #E8F5E9;
```

### Option 3: Orange & Purple (Vibrant)
```css
--primary: #FF6B35;
--secondary: #F7931E;
--accent: #9C27B0;
--dark: #3E2723;
--light: #FFF3E0;
```

### Option 4: Cyberpunk (Neon)
```css
--primary: #1A1A2E;
--secondary: #FF006E;
--accent: #00F5FF;
--dark: #0F0F1E;
--light: #FFFACD;
```

### Option 5: Forest (Calm)
```css
--primary: #1B4332;
--secondary: #2D6A4F;
--accent: #A7C957;
--dark: #081C15;
--light: #D8F3DC;
```

---

## 📝 Cách Thay Đổi Màu

### 1. Mở file `css/style.css`

### 2. Tìm phần `:root` (dòng 8-15)
```css
:root {
    --primary: #2c3e50;
    --secondary: #3498db;
    --accent: #e74c3c;
    --dark: #1a252f;
    --light: #ecf0f1;
    --highlight: #f39c12;
    --border: #34495e;
}
```

### 3. Thay đổi các giá trị hex thành màu bạn muốn

### 4. Save file và reload trang (Ctrl+Shift+R để xóa cache)

---

## 🎨 Công Cụ Chọn Màu

- **Coolors.co** - Tạo palette tự động
- **Color-hex.com** - Tìm màu, xem variations
- **Paletton.com** - Màu harmony
- **Adobe Color** - Professional color matching
- **Pigment.shapefactory.co** - Tạo palette từ ảnh

---

## 💡 Mẹo Chọn Màu Tốt

1. **Primary + Secondary**: Nên là complementary colors (đối diện trên color wheel)
2. **Accent**: Nên nổi bật hơn (1-2 stops away từ primary/secondary)
3. **Contrast**: Chắc chắn text trên background có đủ contrast
4. **Consistency**: Chỉ dùng 5-6 màu max

---

## 🧪 Test Contrast Ratio

Sử dụng https://webaim.org/resources/contrastchecker/

Chuẩn WCAG:
- **AA**: Minimum 4.5:1 cho text
- **AAA**: Minimum 7:1 cho text

---

## 📊 Màu Để Tránh

❌ Nền tối + Text sáng (low contrast)
❌ Quá nhiều màu rực rỡ (overwhelming)
❌ Màu nhạt + Nền trắng (invisible)
❌ Kết hợp màu lạ (unlikely to work)

---

## 🎯 Gợi Ý Cho Portfolio

**Chuyên Nghiệp:**
- Dark blue + Light grey + Gold accent
- Dark grey + Cyan + Red accent

**Creative:**
- Purple + Orange + Yellow accent
- Dark green + Mint + Gold accent

**Tech:**
- Dark + Neon cyan + Neon pink
- Navy + Sky blue + Electric purple

