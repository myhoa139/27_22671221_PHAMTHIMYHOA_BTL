// Giả sử danh sách sản phẩm đã được định nghĩa
const danhSachSanPham = [
    { id: 1, ten: 'Áo thun', gia: 100000, hinhAnh: 'ao-thun.jpg', moTa: 'Áo thun cotton cao cấp' },
    // ... các sản phẩm khác
  ];
  
  // Hàm hiển thị danh sách sản phẩm
  function hienThiSanPham() {
    const containerSanPham = document.getElementById('container-san-pham');
    containerSanPham.innerHTML = '';
  
    danhSachSanPham.forEach(sanPham => {
      const divSanPham = document.createElement('div');
      divSanPham.classList.add('san-pham');
      divSanPham.innerHTML = `
        <img src="${sanPham.hinhAnh}" alt="${sanPham.ten}">
        <h3>${sanPham.ten}</h3>
        <p>${sanPham.gia} VND</p>
        <p>${sanPham.moTa}</p>
      `;
      containerSanPham.appendChild(divSanPham);
    });
  }
  
  // Lưu trữ danh sách sản phẩm vào localStorage
  localStorage.setItem('danhSachSanPham', JSON.stringify(danhSachSanPham));
  
  // Lấy danh sách sản phẩm từ localStorage và hiển thị
  const danhSachSanPhamTuLocalStorage = JSON.parse(localStorage.getItem('danhSachSanPham'));
  hienThiSanPham(danhSachSanPhamTuLocalStorage);