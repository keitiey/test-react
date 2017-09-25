Chạy chương trình:

    + clone project
    
    + cd /path-to-project
    
    Chạy test: 
        + npm test
        
    Chạy project:
        + npm start (http://localhost:8080)

Mô tả: 

    + Server cung cấp api để fetch dữ liệu là danh sách các công ty chứng khoán (http://localhost:8080/api)
    + Mỗi lần có request lên api thì dữ liệu trong đó sẽ tự động thay đổi gỉa lập theo yêu cầu.
    + Tại component Main.js sẽ fetch dữ liệu lần đầu tiên trong constructor để khởi tạo dữ liệu, sau đó tại componentDidMout() dữ liệu sẽ được fetch 5s 1 lần để giả lập sự thay đổi 
    + code xử lý logic được để trong global.js
    + Unit Test được để trong __tests__ . Ở đây sẽ test tất cả code trong global.js và test snapshots component ARow để xem component có được render thành công hay không
