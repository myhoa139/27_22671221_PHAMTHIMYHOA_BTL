document.getElementById('customer-info-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy thông tin từ các trường
    const phone = document.getElementById('dienthoai').value;
    const email = document.getElementById('email').value;
    const phonePattern = /^0\d{9}$/; // Số điện thoại bắt đầu bằng 0 và có 10 chữ số
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Email theo dạng @gmail.com

    let valid = true;

    // Kiểm tra số điện thoại
    if (!phonePattern.test(phone)) {
        document.getElementById('er-dienthoai').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('er-dienthoai').style.display = 'none';
    }

    // Kiểm tra email
    if (!emailPattern.test(email)) {
        document.getElementById('er-email').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('er-email').style.display = 'none';
    }

    // Nếu tất cả hợp lệ, thông báo thành công
    if (valid) {
        alert('Đặt hàng thành công!');
        // Bạn có thể thực hiện hành động gửi form ở đây nếu cần
        // this.submit();
    }
});