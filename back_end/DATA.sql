
-- role
INSERT INTO `clean_fish_supermarket`.`role` (`id_role`, `name_role`) VALUES ('1', 'ROLE_ADMIN');
INSERT INTO `clean_fish_supermarket`.`role` (`id_role`, `name_role`) VALUES ('2', 'ROLE_USER');

-- user
INSERT INTO `clean_fish_supermarket`.`user` (`id_user`, `day_of_birth`, `email`, `gender`, `is_delete_user`, `name_user`, `password`, `phone`, `id_role`) VALUES (1, '1998-01-20', 'sangdolphin98@gmail.com', 1, 0, 'Tran Sang', '123', '0774538628', 2);
INSERT INTO `clean_fish_supermarket`.`user` (`id_user`, `day_of_birth`, `email`, `gender`, `is_delete_user`, `name_user`, `password`, `phone`, `id_role`) VALUES (2, '2000-01-20', 'phin@gmail.com', 1, 0, 'Tran Dinh', '123', '0774538628', 2);

-- status oder
INSERT INTO `clean_fish_supermarket`.`status_oder` (`id_status`, `name_status`) VALUES ('1', 'Chờ xử lý');
INSERT INTO `clean_fish_supermarket`.`status_oder` (`id_status`, `name_status`) VALUES ('2', 'Đang giao');
INSERT INTO `clean_fish_supermarket`.`status_oder` (`id_status`, `name_status`) VALUES ('3', 'Đã giao');

-- type product
INSERT INTO `clean_fish_supermarket`.`type_product` (`id_type_product`, `name_type_product`) VALUES ('1', 'Cá tươi');
INSERT INTO `clean_fish_supermarket`.`type_product` (`id_type_product`, `name_type_product`) VALUES ('2', 'Tôm, mực');
INSERT INTO `clean_fish_supermarket`.`type_product` (`id_type_product`, `name_type_product`) VALUES ('3', 'Ốc, hàu, vẹm');
INSERT INTO `clean_fish_supermarket`.`type_product` (`id_type_product`, `name_type_product`) VALUES ('4', 'Cua - ghẹ');
INSERT INTO `clean_fish_supermarket`.`type_product` (`id_type_product`, `name_type_product`) VALUES ('5', 'sashimi');
INSERT INTO `clean_fish_supermarket`.`type_product` (`id_type_product`, `name_type_product`) VALUES ('6', 'Hải sản đông lạnh');

-- product
-- ca tuoi
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
 VALUES ('Cá Bã Trầu hay còn được biết đến với những tên gọi khác như: Cá Mắt Kiếng, cá Mắt Đỏ,…Thịt cá Bã Trầu được đánh giá là ít có mùi tanh, thịt dai, vị ngọt thanh tự nhiên và da cá hơi nhám', 'img/product/ca-tu-nhien/ca-ba-trau.jpg', 0, 'Cá Bã Trầu', 145000, 50, 1);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
 VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/ca-tu-nhien/ca-ban-sa.jpg', 0, 'Cá Bàn Sa', 240000, 50, 1);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/ca-tu-nhien/ca-anh-duong.jpg', 0, 'Cá Bánh Đường', 190000, 50, 1);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/ca-tu-nhien/ca-bo-da.jpg', 0, 'Cá Bò Da', 170000, 50, 1);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/ca-tu-nhien/ca-bon.jpg', 0, 'Cá Bơn', 990000, 50, 1);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/ca-tu-nhien/ca-bop.jpg', 0, 'Cá Bớp', 195000, 50, 1);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/ca-tu-nhien/ca-cam.jpg', 0, 'Cá Cam', 150000, 50, 1);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/ca-tu-nhien/ca-chia-voi.jpg', 0, 'Cá Chìa Vôi', 270000, 50, 1);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/ca-tu-nhien/ca-chim-trang.jpg', 0, 'Cá Chim Trắng', 170000, 50, 1);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/ca-tu-nhien/ca-do.jpg', 0, 'Cá Dò', 170000, 50, 1);

-- tôm, mực
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/tom-muc/bach-tuoc.jpg', 0, 'Bạch Tuộc', 300000, 50, 2);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/tom-muc/muc-la.jpg', 0, 'Mực Lá', 380000, 50, 2);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/tom-muc/muc-ong.jpg', 0, 'Mực Ống', 380000, 50, 2);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/tom-muc/tom-bac.jpg', 0, 'Tôm Bạc', 450000, 50, 2);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/tom-muc/tom-su-bien.jpg', 0, 'Tôm Sú Biển', 250000, 50, 2);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/tom-muc/tom-hum-bong.jpg', 0, 'Tôm Hùm Bông', 1390000, 50, 2);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/tom-muc/tom-mu-ni.jpg', 0, 'Tôm Mũ Ni', 890000, 50, 2);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/tom-muc/tom-tit.jpg', 0, 'Tôm Tít', 590000, 50, 2);

-- oc, hau
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/oc-hau/chipchip.jpg', 0, 'Chíp Chíp', 80000, 50, 3);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/oc-hau/hau-sua.jpg', 0, 'Hàu Sữa', 95000, 50, 3);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/oc-hau/bao-ngu.jpg', 0, 'Bào Ngư', 375000, 50, 3);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/oc-hau/vem-xanh.jpg', 0, 'Vẹm Xanh', 85000, 50, 3);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/oc-hau/oc-giac.jpg', 0, 'Ốc Giác', 260000, 50, 3);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/oc-hau/nhim-bien.jpg', 0, 'Nhím Biển', 390000, 50, 3);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/oc-hau/oc-huong.jpg', 0, 'Ốc Hương', 410000, 50, 3);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/oc-hau/so-mai.jpg', 0, 'Sò Mai', 290000, 50, 3);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`) 
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/oc-hau/ngheu.jpg', 0, 'Nghêu', 85000, 50, 3);

-- cua,ghe
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/cua-ghe/cua-da-cu-lao.jpg', 0, 'Cua Đá Cù Lao Chàm', 1200000, 50, 4);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Cua Gạch Cà Mau là loại cua nổi tiếng ở Cà Mau. Cua luôn được nhập mới, nên luôn giữ được hương vị, thịt cua chắc,  nhiều  gạch. Được nhiều chị em lựa chọn. Cua được giao sống tận nơi, bao 1 đổi 1 nếu bị ốp.', 'img/product/cua-ghe/cua-ca-mau.jpg', 0, 'Cua Gạch Cà Mau', 650000, 50, 4);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Cua Gạch Cà Mau là loại cua nổi tiếng ở Cà Mau. Cua luôn được nhập mới, nên luôn giữ được hương vị, thịt cua chắc,  nhiều  gạch. Được nhiều chị em lựa chọn. Cua được giao sống tận nơi, bao 1 đổi 1 nếu bị ốp.', 'img/product/cua-ghe/cua-ca-mau.jpg', 0, 'Cua Thịt Cà Mau', 580000, 50, 4);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Hàng câu, do tàu chuyên nghiệp đánh bắt tự nhiên liên kết với Siêu Thị (không qua trung gian)', 'img/product/cua-ghe/ghe-xanh.jpg', 0, 'Ghẹ Xanh', 420000, 50, 4);

-- sashimi
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Sản phẩm tiêu thụ trong ngày', 'img/product/sashimi/combo1.jpg', 0, 'Combo Sashimi Hồi Trích Ngừ', 350000, 50, 5);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Sản phẩm tiêu thụ trong ngày', 'img/product/sashimi/hoi290.jpg', 0, 'Sashimi Cá Hồi 290', 290000, 50, 5);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Sản phẩm tiêu thụ trong ngày', 'img/product/sashimi/hoi350.jpg', 0, 'Sashimi Cá Hồi 350', 350000, 50, 5);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Sản phẩm tiêu thụ trong ngày', 'img/product/sashimi/hoi230.jpg', 0, 'Sashimi Cá Hồi 400', 400000, 50, 5);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Sản phẩm tiêu thụ trong ngày', 'img/product/sashimi/hoitrich230.jpg', 0, 'Sashimi Cá Hồi, Cá Trích 230', 230000, 50, 5);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Sản phẩm tiêu thụ trong ngày', 'img/product/sashimi/hoitrich400.jpg', 0, 'Sashimi Cá Hồi, Cá Trích 400', 400000, 50, 5);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Sản phẩm tiêu thụ trong ngày', 'img/product/sashimi/hoitrich370.jpg', 0, 'Sashimi Cá Hồi, Cá Trích 370', 370000, 50, 5);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Sản phẩm tiêu thụ trong ngày', 'img/product/sashimi/hoitrich40.jpg', 0, 'Sashimi Cá Hồi, Cá Trích 430', 430000, 50, 5);

-- hai san đông lạnh
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Thành phần chính của bò viên: thịt bò, thịt trâu, thịt gà, thịt heo, thịt cá Basa, đường, muối I-ốt, nước mắm, tiêu đen, tỏi.', 'img/product/dong-lanh/bovien.jpg', 0, 'Bò Viên', 40000, 50, 6);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Cá viên TVP Food được làm từ nguyên liệu chính là cá basa tươi, có độ dai vừa phải, không chứa nhiều phụ gia nên không quá dai, cũng không nhiều bột nên viên cá quá mềm.', 'img/product/dong-lanh/cavien.jpg', 0, 'Cá Viên', 40000, 50, 6);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Sản phẩm cá viên rau củ của TVP Food thành phần chính là cá basa tươi với 85%, rau củ, gia vị… đã qua chọn lọc kỹ lưỡng và chế biến theo quy trình khép kín, hợp vệ sinh.', 'img/product/dong-lanh/cavienraucu.jpg', 0, 'Cá Viên Rau Củ', 35000, 50, 6);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Cá viên trứng cút được vo thành những viên tròn đều nhau, căng mịn và không bị móp méo.  Khi chiên, cá viên bị phồng lên đôi chút nhưng không đáng kể, sản phẩm bay mùi thơm đặc trưng do được làm từ cá basa tươi, không chứa nhiều bột hay phụ gia, giúp sản phẩm có độ dai vừa phải.', 'img/product/dong-lanh/cavientrung.jpg', 0, 'Cá Viên Trứng Cút', 55000, 50, 6);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Với cái tên sang trọng, Càng cua bách hoa không chỉ là món khai vị đẹp mắt mà còn mang đến cho người ăn một hương vị thơm ngon và vô cùng hấp dẫn: lớp vỏ vàng ươm, giòn rụm, phần thịt bên trong ngon ngọt, đậm đà.', 'img/product/dong-lanh/cangcua.jpg', 0, 'Càng Cua Bách Hoa', 65000, 50, 6);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Với cái tên sang trọng, Càng cua bách hoa không chỉ là món khai vị đẹp mắt mà còn mang đến cho người ăn một hương vị thơm ngon và vô cùng hấp dẫn: lớp vỏ vàng ươm, giòn rụm, phần thịt bên trong ngon ngọt, đậm đà.', 'img/product/dong-lanh/chaooc.jpg', 0, 'Chạo Ốc', 40000, 50, 6);
INSERT INTO `clean_fish_supermarket`.`product` (`describe_product`, `img`, `is_delete_product`, `name_product`, `price`, `quantity`, `id_type_product`)
VALUES ('Với cái tên sang trọng, Càng cua bách hoa không chỉ là món khai vị đẹp mắt mà còn mang đến cho người ăn một hương vị thơm ngon và vô cùng hấp dẫn: lớp vỏ vàng ươm, giòn rụm, phần thịt bên trong ngon ngọt, đậm đà.', 'img/product/dong-lanh/chaotom.jpg', 0, 'Chạo Tôm Cây Mía', 40000, 50, 6);