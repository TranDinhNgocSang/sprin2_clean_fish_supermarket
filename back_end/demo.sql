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
order by count(*) Asc