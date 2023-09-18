SELECT * FROM clean_fish_supermarket.product
where is_delete_product = false
and id_product in (
SELECT  product.id_product 
FROM product 
join order_detail
on product.id_product = order_detail.id_product
join order_product
on order_product.id_oder = order_detail.id_oder
group by product.id_product
order by count(*) Asc)
order by id_product asc
limit 8;

SELECT  product.id_product 
FROM product 
join order_detail
on product.id_product = order_detail.id_product
join order_product
on order_product.id_oder = order_detail.id_oder
group by product.id_product
order by count(*) desc;

SELECT p.*
FROM product p
JOIN order_detail od ON p.id_product = od.id_product
GROUP BY p.id_product
ORDER BY SUM(od.quantity_product) DESC
LIMIT 8;




CREATE TEMPORARY TABLE temp_product_list AS
SELECT id_product
FROM clean_fish_supermarket.order_detail
GROUP BY id_product
ORDER BY SUM(quantity_product) DESC
LIMIT 8;


SELECT count(*) FROM clean_fish_supermarket.product
where id_type_product = 1;

SELECT order_product.address,order_product.day_oder,status_oder.name_status, sum(order_detail.quantity_product*product.price+20000) as total FROM order_product
join order_detail
on order_product.id_oder=order_detail.id_oder
join product on product.id_product=order_detail.id_product
join status_oder on status_oder.id_status = order_product.id_status
where order_product.id_user = 6
group by order_product.id_oder
order by order_product.id_oder desc
