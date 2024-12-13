 // Xử lý đăng ký
 document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy thông tin từ form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Lưu thông tin đăng nhập vào localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Đăng ký thành công!');

    // Đóng modal đăng ký

});

// Chuyển sang modal đăng nhập
document.getElementById('showLogin').addEventListener('click', function() {
    $('#authModal').modal('hide');
    $('#loginModal').modal('show');
});

// Xử lý đăng nhập
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert('Đăng nhập thành công!');
                    // Chuyển hướng đến trang thanh toán
                    window.location.href = './Thanhtoan.html'; 

                } else {
                    alert('Tên đăng nhập hoặc mật khẩu không đúng!');
                }
            });
    
            // Chuyển sang modal đăng ký
            document.getElementById('showRegister').addEventListener('click', function() {
                $('#loginModal').modal('hide');
                $('#authModal').modal('show');
            });
       